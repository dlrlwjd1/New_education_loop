# Detect drift in CloudFormation stack

## 개요
- S3 버킷을 생성하는 스택을 배포한 뒤, 콘솔에서 버킷 버전 관리(Versioning) 설정을 수동으로 바꿔 Drift를 발생시키고 이를 탐지하는 실습.

## 내용
### 스택 배포
1. 템플릿(`DriftDetectionDemo.yml`) 작성 — S3 버킷을 `DriftDetectionDemoBucket`이라는 이름(AWS 계정·리전 포함)으로 생성하며, 버전 관리(Versioning)는 `Suspended`(중단)로 설정.
2. CloudFormation 콘솔 → **Create Stack** → 템플릿 파일 업로드 → 스택 이름 `DriftDetection` → 옵션 기본값 유지 → 생성.
3. `CREATE_IN_PROGRESS` → `CREATE_COMPLETE` 확인.

### 수동 변경으로 Drift 유발
- S3 콘솔에서 생성된 버킷(`DriftDetectionDemoBucket`)의 Properties를 확인 — 버전 관리가 `Suspended`로 되어 있음.
- 콘솔에서 직접 버전 관리를 **Enabled(활성화)**로 수정 — 이는 템플릿(Suspended)과 실제 리소스(Enabled) 상태를 불일치시키는 수동 변경.

### Drift 탐지
1. CloudFormation 콘솔 → 스택 선택 → **Stack Actions → Detect Drift**.
2. Drift Detection이 시작되고, 결과가 리소스 상태 `Modified`로 표시됨.
3. Stack Details로 돌아가면 스택 전체 Drift 상태가 `DRIFTED`로 표시됨.

### Drift 결과 확인
- **Stack Actions → View Drift Results**에서 해당 리소스를 선택해 상세 내용 확인 — **Expected(예상값)**은 `Suspended`, **Actual(실제값)**은 `Enabled`로 표시되어 정확히 어떤 속성이 어긋났는지 알 수 있음.
- 여러 리소스에서 Drift가 발생했다면 리소스별로 각각의 Expected/Actual 상세 내용을 확인 가능.

### 정리
- 실습 후 스택을 삭제 — Stacks 목록에서 새로고침하면 스택이 더 이상 존재하지 않는 것을 확인.

## 요약
- 템플릿에 정의된 S3 버킷 설정(Versioning: Suspended)을 콘솔에서 직접 Enabled로 바꾼 뒤 Detect Drift를 실행하면 스택 상태가 DRIFTED로, 리소스 상태가 Modified로 표시되며, View Drift Results에서 Expected(템플릿 값)와 Actual(실제 값)을 나란히 비교해 정확히 무엇이 달라졌는지 확인할 수 있다.
