# Day 2 - MCP Recap: Core Concepts Before Building Your Own MCP Server

## 개요
- 자체 서버 작성에 앞서 MCP 구성요소·도구 요청·transport를 복습한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767625#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### host·client·server
host 내부의 client가 별도 server와 연결한다. server는 도구 설명을 조회하고 실행할 수 있게 한다. 내부 구현은 로컬 기능이나 외부 API일 수 있다.

### 연결 설정 복습
stdio는 실행할 프로세스의 command·args를, HTTP는 endpoint를 중심으로 구성한다. uvx·npx는 각각 Python·Node 도구를 실행하는 수단이다. 로컬 서버가 곧 외부 네트워크를 사용하지 않는다는 의미는 아니다.

### 다음 실습과 연결
서버를 만드는 작업은 이 계약에 맞춰 함수 설명과 실행을 제공하는 것이다. 프레임워크가 client 구성을 대신해 주므로 서버 파라미터와 공개할 도구에 집중한다.

## 예시
```text
list_tools: 무엇을 할 수 있는가?
call_tool: 이 인수로 실행해 달라
transport: 그 요청을 어떻게 전달할 것인가?
```

## 요약
- 도구 계약과 전달 수단을 구분한다.
- 자체 서버도 같은 연결 규칙으로 사용할 수 있다.
