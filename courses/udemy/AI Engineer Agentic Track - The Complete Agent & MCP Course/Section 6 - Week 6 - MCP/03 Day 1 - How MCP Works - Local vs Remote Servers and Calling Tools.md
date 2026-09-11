# Day 1 - How MCP Works: Local vs Remote Servers and Calling Tools

## 개요
- 로컬·원격 MCP 서버와 list_tools·call_tool의 관계를 설명한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767597#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 실행 위치
다른 사람이 배포한 서버 코드를 내려받아 내 컴퓨터에서 실행할 수 있다. 따라서 server라는 이름이 반드시 원격 컴퓨터를 뜻하지 않는다. 원격 서비스의 MCP endpoint에 연결하는 형태도 있다.

### 발견과 호출
list_tools는 도구 이름·설명·인수 스키마를 알려 준다. call_tool은 선택한 도구를 실행한다. 모델에게 전달할 자연어 설명과 실제 실행 연결을 서버가 함께 제공한다.

### API와의 관계
로컬 서버도 내부에서 외부 API를 호출할 수 있다. 파일 서버는 로컬 파일을, 날씨나 주가 서버는 외부 API를 사용할 수 있다. MCP 연결 위치와 실제 데이터의 위치를 구분한다.

## 예시
```text
host → 로컬 MCP server → 외부 API
host → 로컬 MCP server → 로컬 파일
host → 원격 MCP server → 서비스 데이터
```

## 요약
- 로컬 서버도 외부 데이터를 요청할 수 있다.
- 도구 설명 조회와 실제 실행은 다른 요청이다.
