# Day 3 - Build an AI Agent with the Microsoft Agent Framework Lab

## 개요
- Microsoft Agent Framework로 공유 보드와 파일 도구를 쓰는 번역 에이전트를 만든다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821623#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 기본 구성
OpenAIChatClient에 모델을 지정하고 Agent에 client·instructions를 전달한다. await agent.run으로 간단한 인사를 확인한다. 보드 조회·계획·완료 함수는 별도 데코레이터 없이 tools에 넣는다.

### 파일 MCP와 목표
MCPStdioTool로 파일 서버를 연결하고 notes.txt 요약을 확인한다. 이어 보드의 번역 목표를 처리하게 해 Spanish.txt와 완료 단계를 확인한다. Windows 노트북용 우회 코드는 일반 모듈 구성과 구분한다.

### 모듈 실행
maf_worker.py에서도 같은 흐름을 실행한다. 생성 파일을 읽어 실제 번역인지 확인하고 에이전트가 보드 목표를 완료 처리했는지 살펴본다.

## 예시
```text
OpenAIChatClient → Agent
+ 보드 함수 tools + MCPStdioTool
→ await run → 번역 파일·완료 상태 확인
```

## 요약
- client와 Agent를 연결한 뒤 실행한다.
- MCP 도구와 일반 함수를 같은 작업에 조합한다.
