# Day 3 - Browser Automation with Node and Playwright for AI Agents

## 개요
- Node·npx·Playwright를 준비하고 브라우저 자동화를 단독으로 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821351#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 환경 점검
터미널과 노트북 양쪽에서 Node 버전을 확인한다. 설치 직후 기존 IDE가 새 PATH를 인식하지 못하면 IDE를 재시작하고 노트북 셀을 다시 실행한다. 영상은 필요한 Node 버전과 OS별 상세 설치 안내를 setup 문서로 제공한다.

### 독립 실행 확인
npx로 Playwright 명령을 실행해 Chrome에서 Hacker News 화면을 캡처하고 노트북에 표시한다. 이 단계에는 아직 LLM이 없다. 먼저 브라우저 도구가 독립적으로 작동하는지 검증한 뒤 에이전트에 연결한다.

## 예시
```bash
node --version
npx --version
```

터미널에서는 성공하지만 노트북에서 실패하면 IDE 프로세스의 환경변수 갱신 여부를 확인한다.

## 요약
- 브라우저 자동화 자체와 에이전트의 도구 선택을 나눠 검증한다.
- 설치된 도구가 실행 환경에서도 보이는지 확인한다.
