# Generate High-Quality User Stories in Seconds

## 개요
- ChatGPT를 PM 실무에 쓰는 첫 데모 — **유저 스토리(user stories) 생성**
- 강의 슬라이드와 프롬프트는 **Flurry Map**에서 제공 → 프롬프트 복사(copy prompt) → ChatGPT에 붙여넣기
- 핵심 태도: **저자(author-in-chief)가 아니라 편집장(editor-in-chief)** — AI와 주고받으며(back and forth) 다듬는다

## 내용

### 사용한 프롬프트의 구조
컨텍스트 + 명확한 출력 형식 요구:
- **컨텍스트**: "B2B 팀을 위한 협업 문서 편집기(collaborative document editor)를 만들고 있다. 목표는 이메일 체인 없이 실시간·비동기 피드백(real-time async feedback)을 가능하게 하는 것"
- **요청**: 유저 스토리 5~7개를 특정 형식으로 생성
  - 스토리 형식: **"As a [role], I want to [action], so that I can [goal/benefit]"**
  - 각 스토리의 인수 조건(acceptance criteria, AC): **Given / When / Then** 형식
  - 고려할 엣지 케이스(edge cases)
  - 우선순위(prioritization): **P0 / P1 / P2**
- **제약**: 각 스토리는 구체적(specific), 테스트 가능(testable), 독립적으로 배포 가능(independently shippable)해야 함

### 결과물 (첫 응답)
- 즉시 6개 유저 스토리 생성 (불릿 리스트)
- 예시 스토리: "As a team member, I want to highlight text and leave a comment so that others can see my feedback in context"
  - AC: "Given a document is open, When I highlight text and click Add Comment, Then a comment box appears linked to that text and is visible to others"
  - 엣지 케이스: 나중에 삭제된 텍스트의 댓글, 여러 사용자의 겹치는 하이라이트 등
- 그 외: 댓글 해결/재오픈, 실시간 프레즌스(real-time presence), 편집 제안, 알림 시스템, 버전 히스토리 등에 P0/P1/P2 부여

### 후속 프롬프트(follow-up)로 다듬기
- ChatGPT가 먼저 "MVP 출시용으로 맞춰줄까요?"라고 되물음
- 사용자가 음성 입력으로 후속 요청: "좋은데 **표(table) 형식**으로 바꿔줘. 그리고 **우선순위를 P0 → P1 → P2 순서로 정렬**하고 순서를 섞지 마"
- 결과: 유저 스토리 / AC / 엣지 케이스 / 우선순위가 깔끔한 표로 정리됨 → Jira, Linear 등에 복사-붙여넣기 가능

### 왜 이렇게 하는가 (핵심 인사이트)
- 직접 쓸 수도 있지만, 이미 해결할 문제를 안다면 **작업을 떠넘기는 게 아니라** 초안(early draft)을 빠르게 얻는 것
- 정해진 형식으로 써보는 것은:
  - 한편으론 **올바른 문제를 풀고 있는지 확인**하고 사고를 명료화(clarify thinking)해 줌
  - 다른 한편으론 단순 행정 잡무(administrivia)일 수 있으니 AI에게 초안을 맡김
- 팀/회사마다 형식이 다르니 필요에 맞게 정보를 추가·수정

## 예시
- 협업 문서 편집기의 댓글 기능을 `As a …, I want …, so that …`와 Given/When/Then 인수 조건으로 생성하고 P0부터 정렬한다.

## 요약
- ChatGPT에 **컨텍스트 + 명확한 출력 형식(스토리 형식·AC·엣지케이스·우선순위)**을 주면 유저 스토리 초안이 즉시 나옴
- 후속 프롬프트로 표 형식·우선순위 정렬 등을 요청하며 **편집장처럼 반복 개선**
- 얻는 것은 **속도** — 올바른 문제를 푼다는 전제하에 잡무를 줄이고 사고를 명료화
