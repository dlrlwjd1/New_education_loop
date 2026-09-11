# 5 Claude Code skills I use every single day

## 개요
- 영상: [5 Claude Code skills I use every single day](https://www.youtube.com/watch?v=EJyuu6zlQCg)
- 채널: Matt Pocock
- 업로드일: 2026-03-16
- 길이: 16:42
- 핵심 주제: Matt가 매일 쓰는 핵심 skills 5개를 소개한다. `/grill-me`, write PRD, PRD to issues, TDD, improved codebase architecture가 하나의 AI 개발 프로세스를 만든다.

## 내용

### 1. Process가 더 중요해졌다
AI coding agent는 "기억이 없는 중간급 개발자 무리"처럼 쓸 수 있다. 그래서 agent에게 매번 명확한 process를 제공해야 한다.

Skills는 Matt의 engineering process를 agent가 반복해서 따라갈 수 있는 경로로 encode한 것이다.

### 2. Skill 1: `/grill-me`
`/grill-me`는 아주 짧은 skill이지만 강력하다.

핵심 지시는 다음과 같다.

- 계획의 모든 측면에 대해 relentless interview를 한다.
- shared understanding에 도달할 때까지 질문한다.
- design tree의 branch를 따라가며 decision dependency를 하나씩 해결한다.
- codebase exploration으로 답할 수 있는 질문은 사용자에게 묻지 말고 직접 탐색한다.

Matt는 Claude Code의 plan mode가 너무 빨리 plan을 내놓는다고 느껴서, `/grill-me`로 더 긴 대화와 질문을 강제한다.

### 3. Skill 2: Write a PRD
`write a PRD`는 shared understanding을 destination document로 바꾸는 skill이다.

주요 단계는 다음과 같다.

1. 사용자의 긴 설명을 받는다.
2. repo를 탐색해 사용자의 가정을 검증한다.
3. 필요하면 다시 relentless interview를 한다.
4. 구현/수정할 주요 module을 sketch한다.
5. PRD template으로 GitHub issue를 만든다.

PRD에는 problem statement, solution, user stories, implementation decisions가 들어간다. 단, implementation detail을 너무 과하게 고정하면 나중에 stale해질 수 있으므로 durable한 수준으로 적는다.

### 4. Skill 3: PRD to issues
PRD는 destination이고, issues는 journey다. `PRD to issues`는 큰 PRD를 vertical slice ticket들로 나눈다.

Matt는 issue를 horizontal layer로 나누기보다 unknown unknown을 빨리 드러내는 thin vertical slice로 나누는 것을 선호한다. 이는 tracer bullet 사고와 연결된다.

Issue들은 blocking relationship을 가질 수 있고, parent PRD를 참조한다. 이렇게 하면 parallel agent setup에서 막히지 않은 issue를 동시에 처리할 수 있다.

### 5. Skill 4: TDD
TDD skill은 agent에게 red-green-refactor loop를 유도한다.

Matt가 중요하게 보는 것은 interface change를 먼저 확인하는 것이다. Agent는 어떤 interface가 바뀌는지, 어떤 behavior를 test할지, testability를 위해 interface를 어떻게 설계할지 생각해야 한다.

좋은 TDD는 agent output을 안정적으로 높이는 방법이다. 다만 codebase가 shallow module로 가득하면 test boundary가 모호해져 TDD가 어렵다.

### 6. Skill 5: Improved codebase architecture
이 skill은 codebase에서 shallow module을 deep module로 바꿀 기회를 찾는다.

흐름은 다음과 같다.

1. Agent가 codebase를 자연스럽게 explore하며 혼란 지점을 찾는다.
2. Deepening opportunity 후보를 제시한다.
3. 사용자가 하나를 고른다.
4. 여러 sub-agent가 radically different interface design을 제안한다.
5. Agent가 추천과 hybrid design을 제안한다.
6. Refactor RFC를 GitHub issue로 만든다.

이 skill은 human-in-the-loop가 필요하다. Interface design은 taste와 장기 구조 판단이 들어가기 때문이다.

## 예시

### 5 skills workflow
```text
/grill-me
  -> write PRD
  -> PRD to issues
  -> TDD implementation
  -> improved codebase architecture
```

### PRD to issue 원칙
```text
- unknown unknown을 빨리 드러내는 vertical slice
- parent PRD 참조
- blocking relationship 명시
- agent가 독립적으로 처리 가능한 단위
- acceptance criteria 포함
```

## 요약
- AI agent에는 엄격한 process가 필요하고, skills는 그 process를 encode한다.
- `/grill-me`는 plan mode보다 깊은 shared understanding을 만든다.
- Write PRD는 idea를 destination document로 바꾼다.
- PRD to issues는 destination을 실행 가능한 journey로 나눈다.
- TDD는 agent output의 품질을 높이는 가장 일관된 방법 중 하나다.
- Improved codebase architecture는 deep module과 clear interface로 codebase를 AI 친화적으로 만든다.
