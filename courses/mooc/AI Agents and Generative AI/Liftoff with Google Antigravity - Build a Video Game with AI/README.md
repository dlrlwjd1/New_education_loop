# Liftoff with Google Antigravity: Build a Video Game with AI

**Course URL:** [mooc.org/learn/liftoff-with-google-antigravity-build-a-video-game-with-ai](https://www.mooc.org/learn/liftoff-with-google-antigravity-build-a-video-game-with-ai)

Google Cloud Training이 제공하는 초급 실습형 강좌. Google Antigravity에서 여러 AI 코딩 에이전트를 지휘하고, Firebase Hosting·Firestore·익명 인증을 연결해 **Voyager** 비디오 게임을 만드는 과정을 다룬다.

## 개요

- 제공 기관: Google Cloud
- 난이도: 초급, 사전 경험 불필요
- 예상 학습 시간: 약 3시간
- 구성: 5개 모듈, 학습 콘텐츠 11개, 평가 3개
- 강의 페이지 기준 최근 업데이트: 2026년 4월

## 학습 목표

- Google Antigravity 개발 환경을 설치하고 구성한다.
- Firebase로 호스팅, 구조화된 데이터 저장, 익명 인증을 활성화한다.
- 역할이 분리된 여러 AI 에이전트를 병렬로 오케스트레이션한다.
- `who`, `what`, `when`, `where`, `why`, `how`를 사용해 코드 생성 프롬프트를 설계한다.

## 모듈 구성

### Module 1 - Course introduction

1. [Why should you take this course?](Module%201%20-%20Course%20introduction/01%20Why%20should%20you%20take%20this%20course.md)

### Module 2 - Get started with Antigravity

1. [Get started with Antigravity](Module%202%20-%20Get%20started%20with%20Antigravity/01%20Get%20started%20with%20Antigravity.md)
2. [Hello World(s)](Module%202%20-%20Get%20started%20with%20Antigravity/02%20Hello%20Worlds.md)

### Module 3 - Enable services with Firebase

1. [Initialize a project](Module%203%20-%20Enable%20services%20with%20Firebase/01%20Initialize%20a%20project.md)
2. [Deploy an app](Module%203%20-%20Enable%20services%20with%20Firebase/02%20Deploy%20an%20app.md)
3. [Finish enabling services](Module%203%20-%20Enable%20services%20with%20Firebase/03%20Finish%20enabling%20services.md)

### Module 4 - Build a video game

1. [Orchestrate agents](Module%204%20-%20Build%20a%20video%20game/01%20Orchestrate%20agents.md)
2. [Finish building the game](Module%204%20-%20Build%20a%20video%20game/02%20Finish%20building%20the%20game.md)
3. [Prompt engineering](Module%204%20-%20Build%20a%20video%20game/03%20Prompt%20engineering.md)
4. [Bon voyage](Module%204%20-%20Build%20a%20video%20game/04%20Bon%20voyage.md)

### Module 5 - Course Resources

1. [How to Build Voyager](Module%205%20-%20Course%20Resources/01%20How%20to%20Build%20Voyager.md)

## 핵심 흐름

1. Antigravity를 설치하고 Editor와 Agent Manager를 준비한다.
2. 간단한 다국어 Hello World 앱으로 에이전트 병렬 작업과 산출물 검토를 연습한다.
3. Firebase 프로젝트를 초기화해 Hosting, Firestore, 익명 인증을 활성화한다.
4. Agent A는 게임, Agent B는 리더보드, Agent C는 통합 검증을 담당하도록 역할을 분리한다.
5. 로컬 테스트 후 `firebase deploy`로 배포하고 Firestore 규칙을 보완한다.
6. 결과가 부족하면 전략·전술·컨텍스트 관점에서 프롬프트를 개선한다.

## 주요 명령

```bash
firebase init
firebase serve
firebase deploy
```

> 이 노트는 2026-07-18에 Chrome MCP로 로그인된 MOOC 강의실의 실제 모듈 본문을 확인해 작성했다. 퀴즈 답안은 포함하지 않았으며 수강 진도도 변경하지 않았다.
