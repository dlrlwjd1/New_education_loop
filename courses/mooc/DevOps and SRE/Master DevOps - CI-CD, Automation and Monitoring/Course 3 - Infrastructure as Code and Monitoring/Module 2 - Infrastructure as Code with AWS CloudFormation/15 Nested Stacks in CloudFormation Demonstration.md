# Nested Stacks in CloudFormation Demonstration

## 개요
- 부모(Parent) 템플릿이 자식(Child) 템플릿을 참조해 배포하는 Nested Stacks(중첩 스택)를 S3와 함께 구성하는 실습.

## 내용
### 템플릿 구성
- **Child 템플릿**: S3 버킷 하나를 생성 — 버킷 이름은 `nested-demo-bucket`에 AWS 리전과 계정 ID를 붙여 구성.
- **Parent 템플릿**: `AWS::CloudFormation::Stack` 리소스로 Child Stack을 생성하며, 자식 템플릿 파일의 URL을 `TemplateURL`로 참조.

### Child 템플릿을 S3에 업로드
1. S3에서 새 버킷 생성(예: `child-bucket-nested-stacks`, 버킷 이름에 대문자 사용 불가) — 기본 옵션 유지.
2. 생성한 버킷에 `child-template.yml` 파일을 드래그 앤 드롭으로 업로드.
3. 업로드된 객체의 URL을 복사해 Parent 템플릿의 `TemplateURL` 값으로 사용.

### Parent 스택 배포
1. CloudFormation 콘솔 → **Create stack** → **With new resources** → Parent 템플릿 업로드 → Next.
2. 스택 이름을 `parent-nested-stack`으로 지정.
3. Stack 옵션 기본값 유지, **IAM 리소스 생성 가능성에 대한 capability acknowledgement** 체크(CloudFormation이 커스텀 이름의 IAM 리소스를 만들 수 있음을 승인) → 검토 후 생성.
4. Parent 스택이 `CREATE_IN_PROGRESS` 상태에서 Child 스택 생성까지 함께 진행 → 완료 후 새로고침하면 Parent와 함께 Child 스택이 나타남.

### 검증
- Child 스택의 Resources 탭에서 S3 버킷(`nested-demo-bucket-<리전>-<계정ID>`)이 생성된 것을 확인 — 즉 하나의 스택으로 또 다른 스택을 만든 것이 Nested Stack.

### 삭제
- Parent 스택을 삭제하면 Child 스택과 그 안의 S3 버킷도 함께 삭제됨.
- 단, Child 템플릿 YAML 파일을 저장해 둔 S3 버킷(`child-bucket-nested-stacks`) 자체는 별도로 만든 것이므로 계속 남아 있음.

## 요약
- Nested Stacks는 Parent 템플릿이 `AWS::CloudFormation::Stack` 리소스로 S3에 업로드된 Child 템플릿의 URL을 참조해 배포하는 구조이며, Parent 스택을 삭제하면 Child 스택과 그 안의 리소스까지 함께 정리된다.
