# Terraform Architecture - State Management

## 개요
- Terraform State Management의 역할과 동작 방식, 그리고 Terraform을 써야 하는 이유(일관성·확장성·자동화·버전 관리)를 설명.

## 내용
### State Management란
- 설정 파일(configuration)과 실제 세계의 리소스를 매핑해 리소스 변경사항을 시간에 따라 추적.
- 예: EC2를 `t2.micro`로 생성했는데 누군가 AWS 콘솔에서 `t2.medium`으로 수동 변경했다면, 설정 파일에는 여전히 `t2.micro`가 적혀 있다. State는 이 **드리프트(파일 vs 실제)**를 감지한다.
- 다음 배포 시 State Management가 클라우드의 현재 상태와 설정 파일을 비교 → 설정 파일 기준(`t2.micro`)으로 맞추기 위해 `t2.medium` 리소스를 삭제하고 `t2.micro`를 다시 생성한다.

### State 관리의 이점
1. **팀 협업을 위한 원격 상태 저장소(Remote State Storage)** — `.tfstate` 파일을 S3 버킷 등에 저장해 팀 전체가 배포된 설정을 파악할 수 있게 함.
2. **인프라 관리의 일관성** — 여러 사람이 콘솔에서 직접 작업하지 않고 State에 기록된 대로만 관리해 충돌을 방지.

### Terraform을 사용해야 하는 이유
1. **일관성(Consistency)** — dev/test/prod 등 모든 환경에 동일한 코드로 동일한 인프라 배포
2. **확장성(Scalability)** — 서버 몇 대에서 수백 대까지 손쉽게 확장(예: Kubernetes 노드 수를 3에서 10~15로 설정값만 바꿔 즉시 반영)
3. **자동화(Automation)** — 콘솔에서 매번 클릭하며 수동 프로비저닝하는 대신, 모듈의 개수 값만 바꿔 여러 개의 리소스를 한 번에 생성(예: EC2 1대→10대), CI/CD와 결합해 자동화 가능
4. **버저닝(Versioning)** — `.tf` 파일을 Git 같은 버전 관리 시스템으로 추적해 필요 시 롤백 가능. Git의 커밋 히스토리처럼 모든 변경사항이 코드에 문서화됨.

## 요약
- Terraform의 State Management는 설정 파일과 실제 클라우드 리소스 간의 차이(드리프트)를 감지해 설정 파일 기준으로 리소스를 재조정하며, 원격 상태 저장소로 팀 협업과 일관성을 지원하고, 이를 통해 일관성·확장성·자동화·버전 관리라는 Terraform의 핵심 가치가 실현된다.
