# AI 상호작용 가이드라인

> 원문 [ai-interaction.md](ai-interaction.md)의 한국어 번역본입니다.

## 커뮤니케이션

- 간결하고 직접적으로 답한다
- 명백하지 않은 결정은 간단히 설명한다
- 대규모 리팩터링(refactor)이나 아키텍처(architecture) 변경 전에는 먼저 물어본다
- 프로젝트 명세(project spec)에 없는 기능은 추가하지 않는다
- 확인 없이 파일을 삭제하지 않는다

## 워크플로(Workflow)

모든 기능/수정 작업에 공통으로 사용할 워크플로는 다음과 같다.

1. **문서화(Document)** - @context/current-feature.md에 기능을 문서화한다.
2. **브랜치(Branch)** - 기능, 수정 등을 위한 새 브랜치를 만든다
3. **구현(Implement)** - @context/current-feature.md에 작성한 기능/수정을 구현한다
4. **테스트(Test)** - 브라우저에서 동작을 확인한다. 단위 테스트(unit test)는 `npm run test`로, 오류 확인은 `npm run build`로 실행한다
5. **반복(Iterate)** - 필요하면 반복하며 수정한다
6. **커밋(Commit)** - 빌드가 통과하고 모든 것이 동작한 뒤에만 커밋한다
7. **병합(Merge)** - main에 병합한다
8. **브랜치 삭제(Delete Branch)** - 병합 후 브랜치를 삭제한다
9. **리뷰(Review)** - AI가 생성한 코드를 주기적으로, 그리고 필요할 때마다 리뷰한다
10. @context/current-feature.md에서 완료로 표시하고 히스토리(history)에 추가한다

허가 없이, 그리고 빌드와 테스트가 통과하기 전에는 커밋하지 않는다. 빌드나 테스트가 실패하면 먼저 문제를 해결한다.

## 브랜치 전략(Branching)

모든 기능/수정마다 새 브랜치를 만든다. 브랜치 이름은 **feature/[feature]** 또는 **fix[fix]** 등으로 짓는다. 병합이 끝나면 브랜치 삭제를 요청한다.

## 커밋(Commits)

- 커밋 전에 물어본다(자동 커밋 금지)
- 컨벤셔널 커밋 메시지(conventional commit message)를 사용한다(feat:, fix:, chore: 등)
- 커밋은 집중적으로 유지한다(커밋당 하나의 기능/수정)
- 커밋 메시지에 "Generated With Claude"를 절대 넣지 않는다

## 막혔을 때(When Stuck)

- 2~3회 시도해도 동작하지 않으면 멈추고 문제를 설명한다
- 무작위로 이것저것 고쳐보지 않는다
- 요구사항이 불명확하면 설명을 요청한다

## 코드 변경(Code Changes)

- 작업을 완수하는 데 필요한 최소한의 변경만 한다
- 요청받지 않은 무관한 코드는 리팩터링하지 않는다
- "있으면 좋은(nice to have)" 기능은 추가하지 않는다
- 코드베이스(codebase)의 기존 패턴을 유지한다

## 코드 리뷰(Code Review)

AI가 생성한 코드를 주기적으로 리뷰하며, 특히 다음을 확인한다.

- 보안(Security) (인증 확인(auth checks), 입력 검증(input validation))
- 성능(Performance) (불필요한 리렌더링(re-render), N+1 쿼리(query))
- 로직 오류(Logic errors) (엣지 케이스(edge cases))
- 패턴(Patterns) (기존 코드베이스와 일치하는가?)
