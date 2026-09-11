# Designing the Feature Skill Workflow

## 개요
- 지금까지 수동으로 반복하던 feature workflow를 `/feature` skill로 자동화하기 위한 설계 강의.
- Workflow 자체는 그대로 유지하되, `load`, `start`, `explain`, `review`, `complete` 같은 argument로 각 단계를 명확히 분리한다.
- Custom command 대신 최신 convention인 **skills folder**에 feature skill을 만든다.

## 내용

### 왜 feature command가 필요한가
지금까지 feature 작업은 자연어 prompt로 직접 진행했다.

예:
- current feature file 업데이트
- branch 생성
- feature 구현
- build/test
- review
- complete 처리
- commit/merge/push/delete branch

이 방식도 가능하고, 계속 그렇게 해도 된다.

하지만 강사는 더 clean하고 specific한 workflow를 선호한다.
이전에 "add the feature"라고 말했을 때, 의도는 current feature file에 추가하는 것이었지만 AI가 바로 구현을 시작한 사례가 있었다.

이런 혼선을 줄이기 위해 `/feature` command를 만든다.

### 같은 workflow, 더 명확한 interface
Workflow는 그대로다.

기존 workflow:
1. feature 문서화
2. feature branch 생성
3. 구현
4. 테스트/수동 확인
5. 필요하면 반복 수정
6. review
7. complete
8. merge/push/branch 삭제

새 방식:

```text
/feature load
/feature start
/feature explain
/feature review
/feature complete
```

각 argument가 정확히 한 단계만 담당하므로 AI가 의도를 덜 오해한다.

### /feature load
`load`는 feature를 `current-feature.md`에 로드한다.

입력 방식:
- spec file 전달
- 직접 prompt 전달

예:

```text
/feature load @context/features/dashboard-items-spec.md
```

또는:

```text
/feature load Add a contact link to the top nav
```

강사는 간단한 prompt도 가능하지만, 가능하면 spec file을 선호한다.

이유:
- 요구사항이 명확함
- 결과 품질이 더 좋음
- feature history가 더 잘 남음
- 나중에 어떤 요구사항으로 구현했는지 추적 가능

`load`는 구현하지 않는다.
오직 current feature file을 업데이트한다.

### /feature start
`start`는 현재 로드된 feature를 구현한다.

역할:
- current feature file 읽기
- feature branch 생성
- 요구사항 구현
- 필요한 파일 수정/생성
- build 또는 기본 검증 실행

예:

```text
/feature start
```

이렇게 분리하면 "feature를 current-feature에 넣기만 하려 했는데 AI가 구현해버리는" 문제를 줄일 수 있다.

### /feature explain
`explain`은 선택적 단계다.

역할:
- 구현된 변경사항 설명
- 어떤 파일이 바뀌었는지 정리
- 코드가 어떻게 동작하는지 설명
- 기술을 잘 모르는 학습자에게 이해 보조

예:

```text
/feature explain
```

강사는 특히 사용 중인 기술을 잘 모르는 사람에게 유용하다고 설명한다.

### /feature review
`review`도 선택적이지만 중요한 단계다.

역할:
- `current-feature.md`의 요구사항 확인
- 실제 구현된 코드와 비교
- 빠진 요구사항이 있는지 확인
- 문제가 있으면 iterate할 수 있게 지적

예:

```text
/feature review
```

Review 결과 문제가 있으면 다시 수정하고, 통과하면 complete로 넘어간다.

### /feature complete
`complete`는 feature를 마무리한다.

역할:
- current feature를 completed로 표시
- current feature 내용을 clear
- history에 추가
- commit
- main에 merge
- main push
- feature branch 삭제

예:

```text
/feature complete
```

이전에는 다음 같은 작업을 직접 prompt로 길게 입력했다.

```text
Commit to feature branch, merge to main, push main, delete feature branch.
```

이제는 `/feature complete`로 처리하는 방향이다.

### 나중에 추가할 /feature test
강사는 나중에 `test` argument도 추가할 계획이다.

역할:
- unit test 생성
- test 실행
- feature 요구사항 검증

아직은 unit test workflow를 도입하지 않았기 때문에 지금은 만들지 않는다.

예정:

```text
/feature test
```

### Workflow mapping
기존 workflow와 `/feature` argument를 매핑하면 다음과 같다.

```text
Document feature -> /feature load
Implement        -> /feature start
Explain changes  -> /feature explain
Review work      -> /feature review
Complete feature -> /feature complete
```

추후:

```text
Unit tests       -> /feature test
```

### Skills folder에 구현
처음 코스 자료를 만들 때는 custom commands folder를 사용할 예정이었다.
하지만 Claude Code가 custom slash commands를 skills와 통합하는 방향으로 바뀌었기 때문에, 이제는 skills folder에 만든다.

예상 구조:

```text
.claude/
  skills/
    feature/
      SKILL.md
```

호출:

```text
/feature load ...
/feature start
/feature review
/feature complete
```

### 꼭 필요한 것은 아님
이 skill은 필수는 아니다.

수강생은 지금까지 하던 방식처럼 prompt를 직접 입력해도 된다.
하지만 workflow가 길어질수록 strict command가 실수를 줄이고 반복을 줄여준다.

강사의 목표:
- 더 명확한 단계
- 더 적은 prompt 실수
- 반복되는 Git/current-feature 작업 자동화
- workflow를 course 전체에서 일관되게 유지

## 예시

Spec file 기반 feature workflow:

```text
/feature load @context/features/add-auth-spec.md
/feature start
/feature review
/feature complete
```

Prompt 기반 feature workflow:

```text
/feature load Add a contact link to the top nav
/feature start
/feature explain
/feature complete
```

전체 mapping:

```text
load     -> current-feature.md 업데이트
start    -> branch 생성 + 구현
explain  -> 변경사항 설명
review   -> 요구사항 대비 구현 검토
complete -> 완료 처리 + Git 정리
```

## 요약
- `/feature` skill은 기존 feature workflow를 유지하면서 각 단계를 명확한 command argument로 분리한다.
- `load`는 current feature에 기록만 하고, `start`가 실제 구현을 담당한다.
- `explain`과 `review`는 선택적이지만 학습과 품질 확인에 유용하다.
- `complete`는 feature 완료 처리와 Git 정리를 자동화한다.
- 다음 강의들에서 이 feature skill을 실제로 구현한다.
