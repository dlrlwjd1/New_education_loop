# Designing Efficient Context Windows

## 개요
- 프로덕션 LLM의 고정된 컨텍스트 윈도우 안에서 **토큰 예산(token budget)**을 계산하고, RAG 파이프라인과 멀티턴 대화에서 이를 효율적으로 배분하는 방법을 다루는 9분 영상. "Managing Context Windows & Prompt Structure" 레슨의 첫 번째 영상.

## 내용

### 왜 토큰 예산 관리가 필요한가
- 프로덕션 AI에서 모델은 **고정된 컨텍스트 윈도우**를 가짐 — 한 요청에 보낼 수 있는 텍스트 양에 한계가 있음.
- 이 한계 안에서 시스템 프롬프트, 대화 이력(conversation history), 검색된 문서(retrieved documents), 그리고 모델의 답변을 위해 남겨둬야 할 공간이 서로 공간을 두고 경쟁함.
- 궁극적인 목표는 단순히 더 많은 텍스트를 보내는 것이 아니라, **가용한 토큰 예산 안에서 올바른 텍스트를 보내는 것**.
- 핵심 메시지: 컨텍스트 윈도우는 제한된 공간이므로 매우 신중하게 사용해야 함.

### 토큰 예산 계산 공식
```
모델 한계(model limit) − 시스템 프롬프트 − 출력 예약분(output reserve) = 청크 여유분(chunk fit)
```
- 먼저 모델이 허용하는 총 공간을 계산 → 시스템 프롬프트를 뺌 → 답변을 위해 남겨둘 공간을 뺌 → 남은 것이 검색된 청크/컨텍스트를 위한 가용 공간.

### 3가지 핵심 규칙
1. **최신성 편향(Recency Bias)**: 가장 관련성 높은 청크를 컨텍스트의 **맨 뒤**에 배치해야 함 — 트랜스포머는 종종 뒤쪽 토큰에 더 많은 주의(attention)를 기울이기 때문.
2. **메타데이터 주입(Metadata Injection)**: 각 청크 앞에 출처(source), 날짜(data), 관련도 점수(relevant score) 같은 유용한 메타데이터를 추가해야 함.
3. **정확한 카운팅(Accurate Counting)**: `tiktoken` 같은 토크나이저를 사용해 토큰을 정확히 세야 함 — 절대 추측하지 말 것. 추측은 컨텍스트 윈도우 오버플로우나 공간 낭비로 이어질 수 있음.
- 항상 가용 공간을 먼저 계산하고 토큰을 정확히 세는 것이 이 레슨의 핵심.

### RAG 파이프라인 실전 예시
- 시스템 프롬프트가 400토큰 사용, 출력 예약분이 800토큰 사용 → 문서를 위해 **2,800토큰**이 남음.
- 검색된 각 청크를 `tiktoken`으로 인코딩 → 관련도 점수 내림차순으로 정렬 → 총 토큰 수가 2,800토큰 한계 내에 있는 동안 청크를 계속 추가.
- 각 청크 앞에 출처, 날짜, 관련도 점수를 포함한 메타데이터 헤더를 주입.
- 최신성 편향 때문에 **가장 관련성 높은 청크를 맨 마지막에 배치**.
- 핵심 교훈: RAG는 단순한 검색이 아니라 **예산을 고려한 검색 결과 패킹(budget-aware packing)**이기도 함 — RAG에서는 검색된 모든 청크를 보내지 않고, 예산에 맞는 청크만 보냄.

### 멀티턴 대화의 잘라내기(Truncation)
- 멀티턴 대화에서 컨텍스트가 너무 커질 때의 규칙: **가장 오래된 메시지부터 잘라낸다(truncate the oldest messages first)** — 오래된 메시지는 대체로 최근 메시지보다 유용성이 낮기 때문.
- **항상 시스템 프롬프트와 마지막 N개의 대화 턴은 보존**해야 함 — 시스템 프롬프트는 동작을 정의하고, 최근 턴들은 대체로 활성 작업(active task)과 현재 사용자 의도를 담고 있기 때문.
- 실전에서는 대화가 너무 길어질 때 무작위로 모든 것을 제거하지 않고, 통제된 방식으로 이력을 정리 — 가장 오래되고 가치가 낮은 콘텐츠부터 시작.

### 핵심 원칙 요약 (스피커 노트)
1. **예산 우선(Budget First)**: 검색 전에 항상 가용 공간을 계산할 것.
2. **최신성이 중요(Recency Matters)**: 더 나은 어텐션을 위해 가장 관련성 높은 콘텐츠를 마지막에 배치할 것.
3. **`tiktoken` 사용**: 정확한 토큰 카운팅으로 잘라내기·오버플로우 실수를 방지할 것.
4. **사용량 로깅(Log Usage)**: 사용된 토큰과 전체 예산의 비율을 추적해 시간이 지나며 최적화할 수 있도록 할 것.
- 이런 원칙들이 실제 프로덕션 트래픽 하에서 프롬프트를 안정적으로 유지시켜 줌.

### 코드 상의 토큰 예산 예시
- 변수: 총 예산(total budget), 시스템 토큰, 이력 토큰, 검색 토큰, 예약 토큰.
- 전체 프롬프트 콘텐츠가 너무 큰지 확인 → 너무 크면 **이력(history)을 먼저 잘라냄** — 이는 앞서 설명한 원칙과 일치: 증거(검색 결과)를 버리기 전에 가치 낮은 이력을 줄여라.
- 교훈: 토큰 예산 관리는 이론에 그치지 않고 **애플리케이션 로직 자체의 일부**가 되어야 함.
- 예산은 시스템 프롬프트, 이력, 검색된 컨텍스트, 답변 예약분이 나눠 사용 — 각 부분이 공간을 두고 경쟁하는 구조.
- 중요 경고: **예약분(reserve)을 남겨두지 않으면** 모델이 답변할 공간이 부족해질 수 있음.
- 최종 메시지: 좋은 토큰 예산 관리는 모든 컨텍스트 소스에 명확한 상한(cap)과 폴백 정책(fallback policy)이 있을 때 가장 잘 작동함 — 런타임에 무작위로 결정하는 대신, 이력·검색·예약분에 대한 한계를 사전에 정의해야 함.

## 예시
```text
[토큰 예산 계산 공식]
모델 한계 − 시스템 프롬프트 − 출력 예약분 = 청크 여유분(가용 공간)

예: 8000(모델 한계) − 400(시스템) − 800(출력 예약) = 2800(문서용 가용 토큰)
```

```python
# RAG 파이프라인 토큰 예산 관리 (개념 구조)
import tiktoken

enc = tiktoken.get_encoding("cl100k_base")

TOTAL_BUDGET = 8000
SYSTEM_TOKENS = 400
RESERVE_TOKENS = 800
AVAILABLE_FOR_CONTEXT = TOTAL_BUDGET - SYSTEM_TOKENS - RESERVE_TOKENS  # 2800

def pack_chunks(chunks_sorted_by_relevance_desc):
    packed = []
    used = 0
    for chunk in chunks_sorted_by_relevance_desc:
        chunk_text = f"[source: {chunk['source']} | date: {chunk['date']} | score: {chunk['score']}]\n{chunk['text']}"
        n_tokens = len(enc.encode(chunk_text))
        if used + n_tokens > AVAILABLE_FOR_CONTEXT:
            break
        packed.append(chunk_text)
        used += n_tokens
    # 최신성 편향: 가장 관련도 높은 청크를 맨 뒤에 배치
    return list(reversed(packed))
```

```python
# 멀티턴 대화 잘라내기 (개념 구조)
def trim_history(system_prompt, history, retrieval, reserve, total_budget):
    while token_count(system_prompt, history, retrieval, reserve) > total_budget:
        if len(history) > MIN_RECENT_TURNS_TO_KEEP:
            history.pop(0)  # 가장 오래된 메시지부터 제거
        else:
            break  # 시스템 프롬프트 + 최근 N턴은 보존
    return history
```

## 요약
- 프로덕션 LLM의 컨텍스트 윈도우는 제한된 자원이므로, 모델 한계에서 시스템 프롬프트와 출력 예약분을 뺀 값을 청크 예산으로 계산하고, `tiktoken`으로 정확히 토큰을 세어 관련도 높은 콘텐츠를 최신성 편향에 따라 맨 뒤에 배치하며, 멀티턴 대화에서는 시스템 프롬프트와 최근 턴을 보존하면서 가장 오래된 이력부터 잘라내는 것이 핵심이고, 이 모든 예산 관리는 런타임 판단이 아니라 애플리케이션 로직에 사전 정의된 상한과 폴백 정책으로 구현되어야 한다.
