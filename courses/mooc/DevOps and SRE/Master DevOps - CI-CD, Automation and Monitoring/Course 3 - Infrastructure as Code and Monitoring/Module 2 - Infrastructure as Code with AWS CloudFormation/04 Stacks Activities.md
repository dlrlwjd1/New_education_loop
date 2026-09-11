# Stacks Activities

## 개요
- 스택 라이프사이클 이벤트(Create/Update/Delete), 스택 상태(Status), 스택 정책(Stack Policy), Drift(설정 이탈)의 개념을 정리.

## 내용
### 스택 라이프사이클 이벤트
1. **Create** — CloudFormation 템플릿에 정의된 리소스를 프로비저닝하는 첫 단계.
2. **Update** — 처음부터 다시 만들지 않고 리소스를 수정·추가·제거 — Change Set이나 직접 업데이트를 통해 변경 사항만 적용.
3. **Delete** — 스택에 연결된 모든 리소스를 안전하고 정해진 순서로 제거.
- CloudFormation 스택은 생성 → (선택적 업데이트) → 삭제의 라이프사이클을 따름.

### 스택 상태(Status)
- 스택의 현재 상태를 나타내며, 진행 상황 추적과 실패 원인 파악에 도움.
- **CREATE_IN_PROGRESS** — 스택 생성 중.
- **CREATE_FAILED** — 스택 생성 실패(권한 누락, 오타 등이 원인일 수 있음).
- **CREATE_COMPLETE** — 스택 생성 성공.
- **UPDATE_IN_PROGRESS** — 스택 업데이트 중.
- **UPDATE_FAILED** — 업데이트 실패 후 롤백됨.
- **UPDATE_COMPLETE** — 업데이트 성공.
- **ROLLBACK_IN_PROGRESS** — 실패로 인해 이전 상태로 되돌리는 중.
- **ROLLBACK_FAILED** — 롤백 실패.
- **ROLLBACK_COMPLETE** — 롤백 성공.
- **DELETE_IN_PROGRESS / DELETE_FAILED / DELETE_COMPLETE** — 삭제 진행/실패/완료.
- **REVIEW_IN_PROGRESS** — 리뷰 단계로, 수동 생성 대기 중이며 아직 배포되지 않은 상태.

### 스택 정책(Stack Policy)
- 스택 업데이트 시 특정 리소스에 어떤 작업이 허용되는지를 통제하는 JSON 문서 — 중요한 리소스를 보호하는 데 사용.
- 주요 구성 요소:
  - **Effect** — `Allow` 또는 `Deny`.
  - **Action** — 업데이트나 템플릿 작업 등 통제 대상 작업.
  - **Principal** — 정책이 적용되는 대상(보통 `*`로 모든 리소스를 의미).
  - **Resource** — 정책이 적용되는 템플릿의 논리적 ID(logical ID) — 특정 리소스에만 정책을 적용하고 싶을 때 개별 ID 지정 가능.

### Drift Detection
- **Drift**란 실제 AWS 리소스가 CloudFormation 템플릿에 정의된 내용과 더 이상 일치하지 않는 상태(설정 이탈).
- 탐지 방법: CloudFormation 콘솔이나 CLI에서 스택 이름을 지정해 drift detection을 실행하고, 리소스 속성·설정의 변경 사항을 검토.
- 해결 방법: 템플릿을 재적용(reapply)하거나 업데이트해 실제 AWS 리소스가 템플릿과 다시 일치하도록 맞춤.

## 요약
- 스택은 Create → Update → Delete의 라이프사이클과 각 단계별 상태(Status)로 진행 상황을 추적하며, Stack Policy로 중요 리소스의 업데이트를 통제하고 Drift Detection으로 실제 리소스와 템플릿 간의 불일치를 찾아 재적용함으로써 인프라의 일관성을 유지한다.
