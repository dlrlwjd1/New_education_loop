# Day 3 - Agentic RAG with the Qdrant MCP Server for AI Agents

## 개요
- Qdrant MCP의 저장·검색 도구로 Agentic RAG를 구성한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767791#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 벡터 검색과 도구
질문과 저장 정보를 임베딩으로 표현해 의미가 가까운 내용을 찾는다. Agentic RAG는 이 검색을 도구로 제공해 에이전트가 조회 시점을 선택하게 한다. 영상의 로컬 Qdrant 서버는 저장 경로와 knowledge collection을 사용하며 로컬 임베딩 모델을 준비한다.

### 저장과 회수 실험
첫 에이전트는 Tavily와 Qdrant를 사용해 NVIDIA 뉴스를 찾고 핵심 정보를 저장한다. 두 번째 에이전트에는 웹 검색을 주지 않고 Qdrant만 연결해 저장된 지식으로 답하게 한다.

### 검증의 한계
trace에서 search→store와 find 호출을 확인한다. 한 회사 정보만 넣은 실험은 검색의 분별력을 충분히 시험하지 못하므로 다른 회사·주제를 많이 넣고 관련 정보만 찾는지 추가 검증하도록 제안한다.

## 예시
```text
Tavily 검색 → Qdrant store
새 에이전트(Qdrant만 제공) → find → 저장 지식 기반 답변
추가 실험: 여러 주제를 섞어 관련 정보 회수 확인
```

## 요약
- 에이전트가 검색 도구 사용을 결정한다.
- 저장·조회 성공과 검색 품질을 별도로 검증한다.
