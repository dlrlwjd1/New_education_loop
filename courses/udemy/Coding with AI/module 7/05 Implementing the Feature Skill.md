# Implementing the Feature Skill

## 개요
- 이전 강의에서 설계한 `/feature` command/skill을 실제 Claude Code skills folder에 추가하는 강의.
- Feature skill은 `load`, `start`, `review`, `explain`, `complete` action을 통해 기존 feature workflow를 일관되게 실행한다.
- 단일 `SKILL.md` 파일로 만들 수도 있지만, 강사는 `SKILL.md`에서 action별 markdown file을 참조하는 구조를 선호한다.

## 내용

### Markdown 중심의 AI workflow
AI와 잘 협업하려면 markdown 문서를 많이 작성하게 된다.

지금까지 사용한 markdown:
- project overview
- coding standards
- AI interaction rules
- current feature
- feature spec files
- skills/commands

강사는 모든 문서를 직접 처음부터 쓰는 것이 아니라, ChatGPT나 Claude 같은 AI에게 초안을 만들게 하고, 본인이 다듬는 방식을 사용한다.

좋은 AI coding workflow는 단순 prompt가 아니라 **좋은 documentation**에 의존한다.

### Feature skill folder 생성
Claude Code skills folder에 feature skill을 만든다.

구조:

```text
.claude/
  skills/
    feature/
      SKILL.md
      actions/
        load.md
        start.md
        review.md
        explain.md
        complete.md
```

강의 resources에는 두 가지 형태가 있다.

- single file example
- action files로 분리한 version

### Single file version
Single file version은 `SKILL.md` 하나에 모든 action instruction을 넣는다.

Front matter:

```md
---
name: feature
description: Manage the feature workflow
argument-hint: load|start|review|explain|complete
---
```

그 아래에:
- context 설명
- current feature file 구조
- action별 instruction
- output format

이 방식은 파일 하나로 끝나서 단순하지만, 길어질수록 관리가 불편하다.

### current-feature.md 중심 구조
Feature skill의 모든 action은 `context/current-feature.md`를 중심으로 동작한다.

파일 구조:
- H1: current feature name
- Status
- Goals
- Notes
- History

History는 append-only로 다룬다.
새 feature 완료 기록은 항상 history 맨 아래에 추가한다.

### /feature load
`load` action은 current feature file에 feature를 로드한다.

동작:
1. `load` 뒤 argument 확인
2. argument가 file name처럼 보이면 `context/features/`에서 spec file 찾기
3. 여러 단어 prompt라면 inline feature description으로 사용
4. 비어 있으면 error 표시
5. current feature H1을 feature name으로 업데이트
6. goals를 bullet points로 작성
7. notes 추가
8. status를 `not started`로 설정
9. feature summary 출력

에러 예:

```text
load requires a spec file name or a feature description
```

### /feature start
`start` action은 loaded feature를 구현한다.

동작:
1. current feature 읽기
2. goals 확인
3. current feature가 비어 있으면 `/feature load` 먼저 실행하라고 안내
4. status를 `in progress`로 변경
5. feature branch 생성 및 checkout
6. branch name은 H1 heading에서 파생
7. goals list 출력
8. goal을 하나씩 구현

이 action은 실제 code change를 시작하는 단계다.

### /feature review
`review` action은 current feature 요구사항과 실제 변경사항을 비교한다.

검토 항목:
- goals met
- goals missing
- code quality
- scope creep
- complete 실행 준비 여부

목적:
- current feature file에 있는 요구사항이 모두 구현되었는지 확인
- 빠진 부분이 있으면 complete 전에 iterate

### /feature explain
`explain` action은 구현 내용을 설명한다.

동작:
- current feature 읽기
- `git diff main --name-only`로 변경 파일 확인
- 파일별로 무엇이 바뀌었는지 설명
- 핵심 functions/components 강조
- 전체적으로 어떻게 연결되는지 요약

Output format:
- files changed
- what each file does
- key functions/components
- how it connects

학습자가 기술을 잘 모를 때 특히 유용하다.

### /feature complete
`complete` action은 feature를 마무리한다.

동작:
- final review
- changes stage
- commit
- branch push
- main에 merge
- main branch로 switch
- remote push
- feature branch 삭제
- current feature reset
- status를 `not started`로 초기화
- feature summary를 history 맨 아래에 추가

이전에는 매번 수동 prompt로 하던 Git/current-feature 정리를 한 command로 처리한다.

### Action files로 분리한 구조
강사는 single file보다 action files로 분리한 구조를 선호한다.

`SKILL.md`에는 간단한 action 목록과 routing instruction만 둔다.

예:

```md
See actions/load.md for load instructions.
See actions/start.md for start instructions.
See actions/review.md for review instructions.
See actions/explain.md for explain instructions.
See actions/complete.md for complete instructions.
```

장점:
- 파일이 짧고 읽기 쉬움
- action 추가/수정이 쉬움
- monolithic markdown을 뒤질 필요 없음
- workflow가 커져도 관리하기 좋음

### Skill 확인
Skill을 추가한 뒤 Claude Code를 restart한다.

그 다음 argument 없이 실행한다.

```text
/feature
```

Expected result:
- available actions 표시
- load/start/review/explain/complete 설명
- usage examples 표시

## 예시

Feature skill 구조:

```text
.claude/
  skills/
    feature/
      SKILL.md
      actions/
        load.md
        start.md
        review.md
        explain.md
        complete.md
```

기본 사용:

```text
/feature load add-pro-badge-sidebar.md
/feature start
/feature review
/feature explain
/feature complete
```

## 요약
- `/feature` skill은 기존 feature workflow를 markdown instruction으로 고정한다.
- 모든 action은 `context/current-feature.md`를 중심으로 동작한다.
- `load`는 문서화, `start`는 구현, `review`는 요구사항 검토, `explain`은 설명, `complete`는 Git/current-feature 정리를 담당한다.
- Single file도 가능하지만, 강사는 action별 markdown file로 나누는 구조를 사용한다.
- 다음 강의에서는 실제 작은 feature로 `/feature` skill을 테스트한다.
