# Managing CloudFormation Stacks with AWS CLI

## 개요
- AWS CLI를 설치·구성한 뒤 CLI 명령만으로 CloudFormation 스택을 검증·생성·조회·업데이트·삭제하는 실습.

## 내용
### AWS CLI 설치 및 구성
- 공식 문서를 참고해 Linux/Mac/Windows에 맞는 방법으로 AWS CLI 설치(EC2 인스턴스에 설치하거나 로컬 시스템에 직접 설치 가능). 이번 실습은 Windows 환경.

```bash
aws --version                # 설치된 버전 확인 (예: aws-cli/2.27.22)
aws configure                 # Access Key, Secret Key, 리전(us-east-1), 출력 형식(yaml) 설정
```

### 템플릿 검증
```bash
aws cloudformation validate-template --template-body file://s3-bucket.yml
```
- 출력에서 Parameters가 비어 있으면(별도 파라미터가 없으면) 유효한 템플릿이라는 뜻.

### 스택 생성
```bash
aws cloudformation create-stack --stack-name my-s3-bucket --template-body file://s3-bucket.yml
```
- 명령 실행 후 Stack ID가 반환됨.

### 스택 상태 조회
```bash
aws cloudformation describe-stacks --stack-name my-s3-bucket
```
- 최초 시도에서 `ROLLBACK_FAILED` 상태 확인 — 콘솔의 Events를 보니 템플릿에서 계정 ID 치환에 필요한 **`Fn::Sub`가 누락**되어 버킷 이름의 Physical ID가 제대로 치환되지 않아 S3 버킷 생성이 실패한 것이 원인.
- 문제가 있는 스택은 삭제(`delete-stack`) 후 재시도가 필요할 수 있음(최초 삭제 실패 시 재시도로 완전히 삭제).

### 템플릿 수정 후 재배포
- `Fn::Sub` 문제를 수정한 뒤 다시 `create-stack` 실행 → `describe-stacks`로 `CREATE_IN_PROGRESS` → `CREATE_COMPLETE` 확인.

### 스택 업데이트
- 템플릿에 S3 버킷의 **Versioning Configuration**을 `Enabled`로 추가(기본은 `Disabled`).
```bash
aws cloudformation update-stack --stack-name my-s3-bucket --template-body file://s3-bucket.yml
```
- `describe-stacks`로 `UPDATE_IN_PROGRESS` → `UPDATE_COMPLETE` 확인.

### 스택 삭제
```bash
aws cloudformation delete-stack --stack-name my-s3-bucket
```
- 삭제 후 `describe-stacks`를 실행하면 "stack with id ... does not exist" 메시지로 삭제가 완료된 것을 확인.

## 요약
- AWS CLI로 `validate-template`(검증) → `create-stack`(생성) → `describe-stacks`(상태 조회) → `update-stack`(업데이트) → `delete-stack`(삭제)의 흐름을 그대로 재현할 수 있으며, `Fn::Sub` 누락처럼 템플릿 오류가 있으면 `ROLLBACK_FAILED` 상태가 되어 콘솔 Events로 원인을 파악하고 스택을 삭제한 뒤 재배포해야 한다.
