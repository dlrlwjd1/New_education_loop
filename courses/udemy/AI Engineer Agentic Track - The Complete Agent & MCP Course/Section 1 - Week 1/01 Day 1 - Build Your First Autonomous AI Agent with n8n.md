# Day 1 - Build Your First Autonomous AI Agent with n8n (No-Code Demo)

## 개요
- n8n에서 모델·메모리·도구를 결합해 자율적으로 작업하는 AI 에이전트를 시연한다.

## 내용
### 에이전트의 구성
강의는 AI 에이전트를 “목표를 달성하기 위해 도구를 사용하며 LLM을 반복 호출하는 시스템”으로 소개한다. n8n 채팅 트리거 뒤에 AI Agent 노드를 배치하고 OpenAI 모델, 단순 메모리와 외부 도구를 연결한다.

MarketStack 도구로 주가를 조회하고 Google Sheets 읽기·쓰기 도구로 포트폴리오를 관리한다. 사용자가 포트폴리오 가치 계산과 리밸런싱을 요청하면 에이전트가 필요한 도구와 호출 순서를 결정해 SPY와 BND 항목을 시트에 추가한다.

## 예시
```text
사용자 요청
→ Google Sheets에서 보유 종목 조회
→ MarketStack에서 최신 가격 조회
→ 포트폴리오 가치 계산
→ 리밸런싱 종목 결정
→ Google Sheets에 새 행 추가
```

## 요약
- 에이전트는 모델만이 아니라 메모리와 실행 가능한 도구를 함께 갖는다.
- 자율성은 목표에 맞춰 도구 선택과 여러 호출을 스스로 조정하는 데서 나온다.
- n8n은 개념 시연용이며, 본 과정은 같은 원리를 코드로 구현한다.
- [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49739779#overview)
