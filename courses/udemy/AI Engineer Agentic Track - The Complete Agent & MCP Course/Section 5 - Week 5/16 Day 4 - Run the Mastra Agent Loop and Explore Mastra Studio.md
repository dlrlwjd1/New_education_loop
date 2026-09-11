# Day 4 - Run the Mastra Agent Loop and Explore Mastra Studio

## 개요
- Mastra의 보드·파일 도구를 합쳐 전체 목표를 실행하고 Studio에서 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821645#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 전체 목표 실행
보드 tools와 파일 MCP의 도구 목록을 합쳐 worker에 전달한다. 번역 목표를 등록하고 generate로 수행을 요청한다. Spanish.txt 생성과 목표·하위 단계 완료를 확인한다.

### Studio
프로젝트에서 npm run dev로 개발 환경을 시작한다. 영상에서는 localhost의 4111 포트로 접속해 worker를 선택하고 보드의 과제를 수행하도록 메시지를 보낸다. 개발 도구에서도 같은 에이전트가 실행되는 것을 확인한다.

## 예시
```text
보드 tools + 파일 tools → worker.generate
→ 번역 파일 작성·보드 완료
Studio → worker 선택 → 같은 작업을 대화로 요청
```

## 요약
- 두 도구 집합을 합쳐 목표 수행 루프를 만든다.
- CLI 실습과 Studio의 실행 대상을 연결해 이해한다.
