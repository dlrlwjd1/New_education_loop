# Terraform vs Ansible - Configuration Approach and Use Cases

## 개요
- 언어·설정 접근 방식(선언적 vs 명령적), 오케스트레이션 vs 설정 관리, 각 도구의 실무 활용 사례를 비교.

## 내용
### 언어와 설정 접근 방식
- **Terraform** — HCL(HashiCorp Configuration Language), 간결하고 읽기 쉬움. **State-driven** — `.tfstate` 파일로 실제 상태 vs 원하는 상태의 차이를 추적.
- **Ansible** — YAML, 가독성이 좋고 DevOps에서 흔히 사용. **Playbook 기반** — Playbook에 정의된 순서대로 task를 순차 실행.

### 선언적(Declarative) vs 명령적(Imperative)
- **Terraform = 선언적** — "무엇을 원하는지"(desired state)만 정의하고 "어떻게 도달할지"는 설명하지 않음. 예: HCL 속성과 Security Group으로 EC2 인스턴스 생성.
- **Ansible = 명령적** — 원하는 상태에 도달하는 단계별 절차를 직접 기술. 예: 웹서버 설치·설정에 필요한 모든 단계를 Playbook에 정의.

### Orchestration(Provisioning) vs Configuration Management
- **Orchestration/Provisioning(Terraform)** — 컴퓨팅·네트워킹·스토리지 등 인프라 생성에 집중, 클라우드 Provider API로 리소스의 전체 라이프사이클 관리.
- **Configuration Management(Ansible)** — 방화벽 설정 등 작업을 자동화, SSH/WinRM으로 작업 수행 — Role과 Playbook으로 애플리케이션·의존성을 최신 상태로 유지하는 데 강점 (예: 기존 VM에 패키지 설치, 방화벽 설정, 애플리케이션 설정 관리).

### Terraform 활용 사례
1. **멀티클라우드 인프라 관리** — AWS EC2, Azure Blob Storage, GCP Cloud SQL을 한 번에 프로비저닝
2. **인프라 확장** — EC2 인스턴스 수를 1→3으로 증가
3. **재해 복구(Disaster Recovery) 셋업** — 동일한 `.tf` 파일로 다른 리전에 동일 인프라 복제
4. **의존성이 있는 리소스 관리** — VPC 생성 후에만 Subnet 생성, Subnet 생성 후에만 EC2를 그 Subnet에 연결하는 순서 강제

### Ansible 활용 사례
1. **소프트웨어 패키지 설치 자동화** — 신규 서버 전체에 Docker, Python, Node.js 설치
2. **애플리케이션 배포·업데이트** — 예: Django 앱 배포 후 코드 변경 시 Unicorn 재시작
3. **서버 설정 표준화** — 모든 서버가 동일한 표준 설정을 유지하도록 보장
4. **다중 서버 셋업 조율** — Nginx 리버스 프록시, DB, 애플리케이션 서버를 서비스 의존성과 함께 구성

## 요약
- Terraform은 선언적 언어와 State 추적으로 "무엇을" 프로비저닝할지에 집중하고, Ansible은 명령적 Playbook으로 "어떻게" 설정할지에 집중하며, 실무에서는 Terraform으로 인프라를 만들고 Ansible로 그 위의 소프트웨어·설정을 관리하는 조합이 흔하다.
