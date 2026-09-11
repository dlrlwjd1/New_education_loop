# Evals and Error Analysis — 대화정리

> 원본 강의: [07 Evals and Error Analysis.md](07%20Evals%20and%20Error%20Analysis.md)

## 개요

- Agentic 워크플로우 개선의 핵심은 체계적인 평가 프로세스(evaluation process)
- 모든 실패를 미리 예측할 수 없으므로 **먼저 만들고 → 출력을 직접 보고 → 문제를 eval로 측정 → 개선을 반복**하는 루프가 기본
- 이 강의의 eval은 **개발 단계의 오프라인 평가**이며, 클릭률(CTR) 같은 유저 행동 지표와는 다른 개념 (대화에서 나온 핵심 질문)

## 내용

### 평가의 주체는 유저가 아니라 개발자

이 강의에서 말하는 평가는 배포 전(또는 개선 중)에 **개발자가 직접 돌리는 평가**다.

1. 워크플로우를 먼저 구현
2. 출력물(output)과 중간 과정(trace)을 사람이 직접 검토
3. 문제 패턴 발견 (예: 경쟁사 언급, 장황한 응답)
4. 그 문제를 측정하는 eval 설계
5. 개선 후 eval 숫자가 좋아지는지 확인

측정 방식은 두 가지:

| 방식 | 적용 대상 | 예시 |
|---|---|---|
| 객관적 / 코드 기반 eval | 명확한 기준이 있는 문제 | 경쟁사 이름 포함 여부 검색, JSON 필드 누락, 형식 준수, 금지어 |
| 주관적 / LLM-as-Judge | 자유 텍스트 품질 | 다른 LLM에게 "이 에세이를 1~5점으로 평가하라" |

LLM-as-Judge 주의점: 점수 기준이 모호하거나 일관성이 떨어질 수 있어 초기 평가 방법으로만 쓰고, 더 정확한 기법은 이후 모듈에서 다룸.

### Q. 유저의 클릭률 같은 걸로 판단하는 건 아닌가?

**아니다.** 클릭률·전환율은 배포 후 실제 유저에게서 수집되는 온라인 지표(online metrics)로, 이 강의의 eval과는 성격이 다르다.

| | 강의의 eval (오프라인) | 클릭률 등 유저 지표 (온라인) |
|---|---|---|
| 시점 | 배포 전에도 가능 | 배포 후에만 가능 |
| 피드백 속도 | 즉시 | 데이터가 쌓일 때까지 대기 |
| 원인 파악 | component-level로 어느 단계가 문제인지 짚을 수 있음 | 숫자가 나빠도 어느 단계 때문인지 모름 |

클릭률은 가장 극단적인 end-to-end 신호라서, 빠른 반복 개선 루프에는 쓰기 어렵다. 유저 지표로 판단하는 게 틀린 건 아니지만 그건 배포 후의 별도 단계다.

### End-to-End Eval vs Component-Level Eval

| 유형 | 설명 | 장점 | 한계 |
|---|---|---|---|
| End-to-End | 최종 출력 품질 평가 | 실제 사용자 경험과 가까움 | 어느 단계가 원인인지 알기 어려움 |
| Component-Level | 특정 단계의 출력 평가 | 병목 파악과 집중 개선이 쉬움 | — |

### Error Analysis와 Trace

- **Trace** = 워크플로우의 중간 출력 (검색어, 툴 호출과 인자, DB 쿼리, 초안, 검토 결과 등)
- 최종 출력만 봐서는 알 수 없는 실패 원인을 trace를 읽으며 찾는 과정이 Error Analysis
- 예: 검색어가 부정확해서 리서치 품질 저하 / DB 조회는 맞았지만 요약 단계에서 오류 / 수정 단계에서 중요한 내용 삭제

## 예시

경쟁사 언급 문제의 객관적 eval:

- 경쟁사 목록: `ComproCo`, `RivalCo`, `The Other Co`
- 에이전트 출력에서 해당 이름이 등장하는지 코드로 검색
- 전체 응답 중 경쟁사를 잘못 언급한 비율을 계산해 개선 전후 비교

```python
COMPETITORS = ["ComproCo", "RivalCo", "The Other Co"]

def mentions_competitor(output: str) -> bool:
    return any(name.lower() in output.lower() for name in COMPETITORS)

rate = sum(mentions_competitor(o) for o in outputs) / len(outputs)
```

## 요약

- 이 강의의 eval은 **개발자가 배포 전에 돌리는 오프라인 평가**이며, 클릭률 같은 유저 행동 지표(온라인 지표)와는 다른 단계의 도구
- 실패를 미리 예측할 수 없으므로 출력과 trace를 직접 읽어 문제를 발견하는 것이 출발점
- 객관적 기준은 코드 기반 eval, 주관적 기준은 LLM-as-Judge로 측정 (Judge는 일관성에 주의)
- End-to-End는 사용자 경험에 가깝지만 원인 파악이 어렵고, Component-Level은 병목을 짚어줌
- 발견 → eval 설계 → 개선 → 재측정의 루프를 반복해 성능을 점진적으로 끌어올린다
