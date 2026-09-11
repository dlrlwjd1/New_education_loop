# Creating and Managing CloudFormation Stack

## 개요
- AWS 콘솔에서 YAML 템플릿으로 S3 버킷용 CloudFormation 스택을 생성·업데이트·삭제하는 실습.

## 내용
### 템플릿 준비
- 간단한 S3 버킷을 생성하는 YAML 템플릿(`cloudformation-s3.yml`) 작성 — Parameters로 버킷 이름을 받아 Resources의 S3 버킷에 참조(reference)하고, Outputs로 버킷 이름을 반환.

### 스택 생성
1. AWS 콘솔 CloudFormation에서 **Create stack** → **With new resources**.
2. **Choose an existing template** → 로컬에 있는 템플릿 파일 업로드(`cloudformation-s3.yml`).
3. 업로드한 템플릿이 자동으로 CloudFormation용 S3 버킷에 배포됨(AWS가 기본 제공).
4. 파라미터(버킷 이름 등, 중복 방지를 위해 임의 숫자 추가) 입력 후 Next.
5. 스택 이름 지정(예: `CF-cloudformation-demo`), 파라미터 확인 후 Next.
6. 스택 옵션은 기본값 유지, 검토 후 **Submit**.
7. 스택 생성 진행 상태는 `CREATE_IN_PROGRESS` → S3 버킷 생성 이벤트 → `CREATE_COMPLETE`로 확인 가능.
8. Outputs 탭에서 생성된 버킷 이름 확인, S3 콘솔에서 실제 버킷 존재를 검증.

### 스택 업데이트
1. 템플릿의 S3 버킷 Properties에 `Tags`(Key: `Environment`, Value: `demo`) 추가.
2. **Update stack** → **Replace current template** → 수정한 템플릿 파일 업로드.
3. 첫 시도에서 `Tags` 속성 표기 오타로 **`UPDATE_FAILED`** 발생 — YAML 오타를 수정 후 재시도.
4. 재시도 시 `UPDATE_IN_PROGRESS` → **`UPDATE_COMPLETE`**.
5. S3 콘솔에서 해당 버킷의 Properties → Tags에 `Environment: demo`가 정상 반영된 것을 확인.

### 스택 삭제
- **Delete** 클릭 → `DELETE_IN_PROGRESS` → 스택과 연관된 리소스(S3 버킷 등)가 함께 삭제됨.

## 요약
- CloudFormation 콘솔에서 템플릿 업로드만으로 스택을 생성(Create)하고, 템플릿을 수정해 재업로드하면 변경 사항만 반영해 업데이트(Update, 실패 시 오타 등 원인 파악 후 재시도)하며, Delete로 스택 전체를 한 번에 제거할 수 있다.
