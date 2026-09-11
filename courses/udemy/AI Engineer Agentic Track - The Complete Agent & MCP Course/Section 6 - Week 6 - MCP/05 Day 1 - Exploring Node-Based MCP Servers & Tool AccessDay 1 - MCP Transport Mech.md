# Day 1 - Exploring Node-Based MCP Servers & Tool AccessDay 1 - MCP Transport Mech

## 개요
- MCP의 stdio·HTTP transport와 서버 실행 설정을 설명한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767605#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### transport
프로토콜 메시지를 어떻게 주고받을지가 transport다. stdio는 client가 로컬 프로세스를 시작하고 표준 입력·출력으로 통신한다. 원격 연결에는 HTTP 계열을 사용하며 영상은 Streamable HTTP와 이전 SSE 방식을 구분한다. 로컬 서버도 HTTP로 실행할 수 있다.

### 실행 파라미터
stdio 설정의 command와 args는 어떤 프로그램을 시작할지 지정한다. uvx는 Python 패키지 도구, npx는 JavaScript·TypeScript 패키지 도구 실행에 사용된다. Docker 실행 형태도 가능하다.

### 설정 읽기
HTTP 서버 설정은 endpoint를, stdio 설정은 실행 명령·인수·환경을 중심으로 읽는다. 설정 문자열 자체가 신비한 에이전트 기능을 만드는 것이 아니라 서버 프로세스와 연결을 준비한다.

## 예시
```text
stdio: command + args → 로컬 프로세스 → stdin/stdout 통신
HTTP: endpoint → HTTP 요청·응답
```

## 요약
- 프로토콜과 transport를 구분한다.
- uvx·npx는 서버를 실행하는 명령이다.
