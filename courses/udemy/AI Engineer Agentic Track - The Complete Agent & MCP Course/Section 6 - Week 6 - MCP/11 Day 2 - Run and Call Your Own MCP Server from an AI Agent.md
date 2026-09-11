# Day 2 - Run and Call Your Own MCP Server from an AI Agent

## 개요
- 직접 만든 계좌 MCP 서버를 실행하고 에이전트의 조회 호출을 검증한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767649#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 도구 공개
잔고·보유 주식·매수·매도·전략 변경을 도구로 공개한다. 리소스 예제도 추가하지만 실습 중심은 도구다. 로컬 모듈은 패키지 레지스트리에 게시하지 않고 uv run의 모듈 실행 설정으로 시작할 수 있다.

### 에이전트 연결
MCPServerStdio로 서버를 열고 list_tools를 확인한다. 이어 계좌 이름과 잔고·보유 조회 요청을 Agent에 전달한다. 모델이 필요한 두 도구를 골라 응답한다.

### 검증과 과제
trace에서 도구 발견·잔고 조회·보유 조회·최종 응답을 대조한다. 다음 과제는 익숙한 Pushover 함수를 별도 MCP 서버로 감싸 보는 것이다.

## 예시
```text
계좌 서버 실행 → list_tools
→ 사용자 잔고·보유 질문
→ get_balance + get_holdings → 답변
→ trace의 반환값과 대조
```

## 요약
- 게시하지 않은 로컬 모듈도 MCP 서버로 실행할 수 있다.
- 도구 목록 확인과 실제 호출 검증을 모두 수행한다.
