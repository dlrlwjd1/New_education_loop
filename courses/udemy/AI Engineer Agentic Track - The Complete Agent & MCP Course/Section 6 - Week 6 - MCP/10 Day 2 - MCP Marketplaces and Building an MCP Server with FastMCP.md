# Day 2 - MCP Marketplaces and Building an MCP Server with FastMCP

## 개요
- MCP 디렉터리에서 서버 설정을 살펴보고 FastMCP로 계좌 서버를 만든다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767643#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 서버 탐색
Glama·Smithery 같은 디렉터리에서 도구 설명과 연결 파라미터를 살펴본다. 목록 등재 자체보다 필요한 기능과 실행 방식을 확인하는 것이 중요하다.

### 기존 업무 로직 재사용
앞서 개발 팀이 만든 계좌 모듈을 사용해 잔고·보유·거래를 관리한다. 예제의 매수·매도는 수업용 계좌 시뮬레이션이며 실제 증권 주문이 아니다.

### FastMCP 구성
FastMCP 인스턴스를 만들고 계좌 함수를 감싼 도구에 데코레이터·타입·docstring을 붙인다. get_balance는 계좌 이름을 받아 해당 잔고를 반환한다. stdio로 실행하면 라이브러리가 도구 목록과 호출 요청 처리를 맡는다.

## 예시
```text
계좌 업무 모듈 → get_balance 래퍼
→ FastMCP 도구 등록 → stdio 실행
→ client의 도구 조회·호출 처리
```

## 요약
- 업무 로직과 MCP 인터페이스를 분리한다.
- 서버 라이브러리가 프로토콜 처리를 담당한다.
