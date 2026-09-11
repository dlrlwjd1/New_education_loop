# AI 빌더 필수 개념: 토큰, 컨텍스트 윈도우, RAG 기초 (AI builder essentials: Tokens, Context Windows, RAG 101)

## 개요
- **핵심 개념 요약**: 인공지능 빌더(AI Builder) 및 개발자가 실무 프로젝트를 설계할 때 핵심적으로 알아야 할 3대 기술 구성 요소이자 물리적 한계점인 토큰(Tokens), 콘텍스트 윈도우(Context Window), 그리고 검색 증강 생성(RAG)의 기본 원리를 상세히 해설합니다.
- **업로드일**: 2026-07-23
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=BnEhq2lPRz4)

## 내용
### 1. 토큰 (Tokens) - LLM의 언어 단위
- LLM은 문자를 직접 읽지 못하고 내부 사전(Vocabulary)에 따라 단어나 글자 묶음을 정수형 번호로 쪼갠 **토큰** 단위로 변환해 처리합니다.
- 영어가 한글보다 토큰 압축률이 우수하므로, 영문 작성이 토큰 수와 비용(Billing Cost) 절감 및 속도(Latency) 개선 측면에서 유리합니다.

### 2. 컨텍스트 윈도우 (Context Window) - AI의 작업 단기 기억 장치
- 모델이 한 번에 머릿속에 기억하여 추론할 수 있는 최대 토큰 한계선입니다.
- 초대형 콘텍스트(예: Gemini의 100만 토큰 이상)는 큰 이점을 주지만, 입력 문맥의 중앙부에 있는 핵심 정보는 추론 과정에서 망각하기 쉬운 **'Lost in the Middle (중간 유실)'** 현상을 유발하므로 정밀한 프롬프트 배치가 수반되어야 합니다.

### 3. RAG (Retrieval-Augmented Generation) - 지식 보강 기법
- 모델의 내부 학습 파라미터에 없는 실시간 최신 정보나 사내 기밀 문서를 안전하게 보완하는 아키텍처입니다.
- **RAG 동작 3단계**:
  1. **Chunking & Indexing**: 대용량 문서를 잘게 쪼개어 수치형 벡터(Embedding)로 변환해 DB에 저장합니다.
  2. **Retrieval**: 사용자가 질문을 던지면, 질문 벡터와 유사한 문서 조각을 DB에서 신속하게 검색해 추출합니다.
  3. **Generation**: 추출된 문서 조각을 원본 질문과 묶어 LLM에 제공(Context injection)하여 확실한 근거 기반 답변을 얻습니다.

## 예시
아래 파이썬 코드는 텍스트 데이터를 벡터 임베딩 유사도를 사용해 검색하고, 추출된 문서 조각을 프롬프트 컨텍스트에 포함하여 LLM에 최종 질의하는 초간단 RAG 파이프라인의 모의 구현입니다.

```python
# RAG 기초 구조 모방 파이썬 예제
import numpy as np

# 1. 사내 기밀 문서 데이터베이스 (Knowledge Base)
kb_documents = [
    {"id": 1, "text": "Google Cloud ADK는 다중 에이전트 상태 관리를 위한 Workflow 클래스를 제공합니다."},
    {"id": 2, "text": "Gemini 1.5 Pro는 최대 200만 토큰의 초대형 콘텍스트 윈도우를 지원합니다."},
    {"id": 3, "text": "Model Context Protocol(MCP)은 에이전트와 로컬 도구 간의 통신 규격을 의미합니다."}
]

# 가상의 임베딩 변환 및 코사인 유사도 검색 함수
def get_mock_embedding(text: str) -> np.ndarray:
    # 실무 환경에서는 genai.embed_content 또는 Vertex AI Embeddings API를 사용합니다.
    # 여기서는 간단히 문자열 내 특정 단어의 일치율 기반으로 가중치를 부여한 가짜 벡터를 리턴합니다.
    vector = np.zeros(5)
    if "ADK" in text or "Workflow" in text:
        vector[0] = 1.0
    if "Gemini" in text or "토큰" in text:
        vector[1] = 1.0
    if "MCP" in text or "Protocol" in text:
        vector[2] = 1.0
    return vector

def retrieve_top_document(query: str) -> str:
    query_vector = get_mock_embedding(query)
    best_doc = None
    max_similarity = -1.0
    
    for doc in kb_documents:
        doc_vector = get_mock_embedding(doc["text"])
        # 코사인 유사도 계산
        similarity = np.dot(query_vector, doc_vector) / (np.linalg.norm(query_vector) * np.linalg.norm(doc_vector) + 1e-9)
        if similarity > max_similarity:
            max_similarity = similarity
            best_doc = doc["text"]
            
    return best_doc

# 2. RAG 실행 파이프라인
user_query = "ADK로 다중 에이전트 만드는 법을 알려줘."
retrieved_context = retrieve_top_document(user_query)

# 3. 모델 프롬프트 조합 (Context Injection)
rag_prompt = f"""
아래 [참조 문서]의 내용에만 철저히 근거하여 질문에 정확히 답변하세요. 
참조 문서에 정보가 없다면 답변을 지어내지 마세요.

[참조 문서]:
{retrieved_context}

[질문]:
{user_query}
"""

print("[RAG Prompt Input]:\n", rag_prompt)
# 이 rag_prompt를 최종적으로 Gemini 모델에 전달하여 할루시네이션(환각) 없는 답변을 출력받습니다.
```

## 요약
- 토큰, 컨텍스트 윈도우, RAG는 현대 생성형 AI 서비스 개발의 3대 필수 지식 인프라입니다.
- 대형 모델이라도 무조건 모든 데이터를 입력으로 주는 것보다, RAG를 연동해 관련성이 극도로 높은 콘텍스트 조각만 선별 주입하는 것이 요금 및 응답 신뢰성 측면에서 훨씬 우수합니다.
- RAG 파이프라인을 설계할 때는 데이터를 올바른 크기로 쪼개는 청킹(Chunking) 및 인덱싱(Indexing) 품질에 집중해야 검색 누락 현상을 원천 방어할 수 있습니다.
