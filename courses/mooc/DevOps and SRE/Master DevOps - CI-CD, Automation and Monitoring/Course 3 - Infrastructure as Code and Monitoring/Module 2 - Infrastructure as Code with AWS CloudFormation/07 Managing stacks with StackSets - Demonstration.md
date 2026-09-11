# Managing stacks with StackSets - Demonstration

## 개요
- AWS 콘솔에서 Administration Role/Execution Role을 설정하고, 이를 기반으로 StackSet을 만들어 S3 버킷을 여러 계정에 배포·삭제하는 실습.

## 내용
### 사전 준비: 역할(Role) 생성
- **Administration Role** — Admin 계정(관리 주체)에 생성.
- **Execution Role** — 실제 배포 대상인 Target(Execution) 계정에 생성.
- 이번 실습에서는 동일한 계정을 Admin/Execution 계정으로 함께 사용.

### Admin/Execution Role 스택 생성
1. **Admin Role 스택**: Create stack → Existing template → S3 URL(AWS 제공 `StackSetAdministrationRole` 템플릿) → 스택 이름 `account-admin-stack-set` → IAM 역할 생성에 대한 capability acknowledgement 체크 → 생성.
2. **Execution Role 스택**: Create stack → S3 URL(`AWSCloudFormationStackSetExecutionRole` 템플릿) → 스택 이름 `target-account-stack-set` → Administrator Account 필드에 Admin 계정 ID 입력 → acknowledgement → 생성.
3. 두 스택 모두 `CREATE_COMPLETE` 확인.

### StackSet으로 S3 버킷 배포
- 템플릿(`s3-bucket.yml`)은 계정 ID를 이름에 포함한 S3 버킷(`edureka-monitoring-stack-<계정ID>`)을 생성.
1. Stack Sets → Create stack set → CloudFormation Execution Role 확인(IAM 역할명) → 템플릿 업로드(`s3-bucket.yml`) → 이름 `demo-stack-set`.
2. **Execution configuration**: `Active`(동시에 여러 비충돌 작업 수행) vs `Inactive`(한 번에 하나씩 작업 수행) 중 데모이므로 `Inactive` 선택.
3. **Deploy new stacks** → 배포할 계정 번호 입력(여러 계정일 경우 CSV 업로드 가능) → 리전 지정(예: US East 1) → 나머지 옵션 기본값 유지 → 리뷰 후 제출.
4. 상태가 `RUNNING` → `SUCCEEDED`로 바뀌면 S3 콘솔에서 실제로 버킷(`edureka-monitoring-stack-<계정ID>`)이 생성됐는지 검증.

### StackSet 삭제
1. 먼저 **Operations → Delete stacks from StackSet**으로 각 계정에 배포된 스택(S3 버킷)을 삭제 — 배포 시와 마찬가지로 계정 번호·리전을 다시 지정.
2. 타입이 `DELETE`인 작업이 `RUNNING` → 완료되면, 모든 실행 계정에서 스택이 제거된 것.
3. 그 후에야 **Delete stack set** 자체를 삭제할 수 있음 — 새로고침하면 StackSet 목록에서 사라짐.

## 요약
- StackSet을 사용하려면 먼저 Admin 계정과 Execution(Target) 계정에 각각 Administration Role/Execution Role을 설정해야 하며, 이후 하나의 템플릿으로 여러 계정·리전에 리소스를 배포(Deploy new stacks)할 수 있고, 삭제 시에는 반드시 각 계정의 스택 인스턴스를 먼저 삭제한 뒤에야 StackSet 자체를 삭제할 수 있다.
