# Monitoring and Logging CloudFormation Deployments

## 개요
- CloudTrail로 CloudFormation 스택의 API 호출 이력을 기록하고, CloudWatch 알람으로 스택 업데이트 시 SNS 알림을 받도록 구성하는 실습.

## 내용
### CloudTrail 생성
1. 콘솔에서 CloudTrail 검색 → 대시보드 진입.
2. **Create a trail** → 이름 지정(예: `my-cloud-trail`) → 생성.

### 모니터링 대상 스택 배포
- 데모 템플릿(S3 버킷 생성, 이름은 `edureka-monitoring-stack-<계정ID>`)을 사용.
1. CloudFormation → Create stack → 템플릿 업로드 → 스택 이름 `monitoring-demo` → 옵션 기본값 → 생성.
2. `CREATE_IN_PROGRESS` → `CREATE_COMPLETE` 확인.

### CloudWatch 알람 생성
1. CloudWatch → **Alarms → All alarms → Create alarm**.
2. Metric 검색창에 "CloudFormation"과 "Usage by AWS Resource" 입력 → CloudFormation 관련 리소스 중 **Update stack** 지표 선택(이미 생성된 스택이므로 업데이트 시에만 알람이 트리거됨).
3. Threshold 설정: **Static**, **Greater than or equal to 1**.
4. **Notification**: 기존 SNS 토픽이 없으므로 새 토픽 생성(`Default_CloudWatch_Alarms_Topic`) → 알림 받을 이메일 입력 → 토픽 생성.
5. 알람 이름 지정(예: `cloudformation-stack-update-alarm`) → 미리보기 → 생성.
6. 아직 스택 업데이트가 없으므로 알람 그래프에는 데이터가 없는 상태.

### 스택 업데이트로 알람 트리거
1. 템플릿의 Description을 수정(예: "CloudFormation template for monitoring and logging demo")한 뒤 저장 → Update stack으로 재배포했지만 Description만 바꾼 것으로는 실제 변경 감지가 부족.
2. S3 버킷에 **Versioning Configuration**(`Enabled`)을 추가해 실질적인 리소스 변경 발생 → Update stack → 파일 업로드 → Next 반복 → Submit.
3. `UPDATE_IN_PROGRESS` → `UPDATE_COMPLETE`.

### 결과 확인
- **CloudTrail Event history**에서 `CreateBucket`, `CreateTopic`, `Subscribe`, `CreateChangeSet` 등 이번 업데이트와 관련된 API 호출 이력을 확인.
- **CloudWatch Alarm** 상태가 `In alarm`으로 바뀐 것을 확인 — Update stack 지표가 임계값(1 이상)을 충족했기 때문.

### 리소스 정리
- 실습 후 CloudFormation 스택, CloudTrail, CloudWatch 알람 등 더 이상 필요 없는 리소스를 모두 삭제해 정리.

## 요약
- CloudTrail은 CloudFormation 관련 API 호출(스택 생성·업데이트 등) 이력을 기록하고, CloudWatch는 "Update stack" 같은 지표에 임계값 기반 알람을 걸어 SNS로 알림을 보낼 수 있어, 두 서비스를 조합하면 CloudFormation 배포에 대한 모니터링과 로깅을 구성할 수 있다.
