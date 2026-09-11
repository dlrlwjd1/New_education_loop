# Practice Project: ShopVerse DevOps Transformation Project: Building a Full-Stack CI/CD and Infrastructure Automation Pipeline

## 개요
- 급성장 중인 온라인 리테일 기업 ShopVerse의 마이크로서비스 플랫폼을 대상으로, Git·Jenkins·Terraform/CloudFormation·Docker·Kubernetes·Ansible·Prometheus/Grafana를 아우르는 **엔드투엔드 DevOps 자동화 파이프라인**을 설계·구현하는 실습 프로젝트.

## 내용
### 배경 시나리오
- ShopVerse는 **Product Management, Inventory, Payments, Customer Support** 서비스로 구성된 마이크로서비스 플랫폼을 운영하며, Java·Python·Node.js로 각 서비스를 구현.
- Agile 방식을 따르고 있지만 배포가 일관성이 없고 인프라 관리가 수동이라, **환경 드리프트(environment drift)**, 롤백 어려움, 사고 대응 지연 문제가 발생.

### 초기 문제점 4가지
1. **수동 인프라 프로비저닝** — 개발자/시스템 관리자가 AWS 콘솔에서 EC2·DB·네트워킹을 수동 생성 → 환경 구축 지연, 설정 드리프트, 반복 가능성 부족.
2. **파편화된 배포 워크플로우** — 서비스마다 일관성 없는 커스텀 스크립트로 배포 → 확장 어려움, 오류 발생 잦음, 중앙화된 배포 추적 부재.
3. **컨테이너화·리소스 최적화 부재** — 애플리케이션이 격리가 제한적인 EC2 위에서 실행 → 리소스 활용도 저하, 트래픽 급증 시 확장 어려움.
4. **실시간 모니터링/알림 부재** — 성능 지표와 로그가 여기저기 흩어져 시각화되지 않음 → 사고 대응이 느리고 사후 대응(reactive)에 그침.

### 프로젝트 목표
- ShopVerse의 다중 서비스 아키텍처를 위해 코드 통합, 인프라 프로비저닝, 배포, 모니터링이 매끄럽게 이어지는 **엔드투엔드 DevOps 파이프라인** 구축.

### 수행 과제
1. **버전 관리(Version Control) 설정**
   - 모든 서비스에 대한 Git 저장소 구성.
   - 브랜칭 전략(예: GitFlow) 적용.
   - 코드 검증을 위한 Git Hook 설정.
2. **Jenkins 기반 CI/CD**
   - Jenkins와 필요한 플러그인 설치.
   - 병렬 빌드를 위한 마스터/에이전트 노드 구성.
   - GitHub/GitLab과 Jenkins 연동.
   - 서비스별로 Maven/Gradle 빌드 자동화.
   - Pipeline-as-Code 방식으로 서비스별 Jenkinsfile 정의.
   - JUnit, PyTest, Mocha 등 단위 테스트와 코드 커버리지 리포트 통합.
   - 아티팩트를 아카이브해 Artifactory/Nexus에 업로드.
3. **배포 자동화**
   - Ansible 플레이북으로 애플리케이션 환경 구성.
   - Jenkins에서 Ansible을 트리거해 dev/stage/QA 환경에 배포.
   - 플레이북에서 롤링 재시작(rolling restart)과 롤백 처리.
4. **IaC(Infrastructure as Code)**
   - Terraform으로 VPC, EC2, RDS, S3 프로비저닝.
   - CloudFormation으로 API Gateway, Lambda 구성.
   - Terraform 상태(state)를 원격 백엔드(S3 + DynamoDB)로 안전하게 관리.
   - Jenkins와 Terraform을 연동해 인프라 변경 시 자동 트리거.
5. **Docker를 이용한 컨테이너화**
   - Java·Python·Node 서비스별로 최적화된 Dockerfile 작성.
   - Docker Compose로 로컬 테스트용 컨테이너 관리.
   - Docker 이미지를 Docker Hub 또는 ECR에 푸시.
6. **Kubernetes 오케스트레이션**
   - 매니페스트를 이용해 Kubernetes 클러스터에 서비스 배포.
   - Helm Chart로 파라미터화된 배포 구성.
   - Ingress, ConfigMap 구성 및 PersistentVolume 관리.
   - HPA(수평 Pod 오토스케일링)와 롤링 업데이트 설정.
7. **모니터링과 시각화**
   - Prometheus 설치·설정으로 메트릭 수집.
   - Grafana로 대시보드 구성.
   - 장애·리소스 임계치에 대한 알림 규칙 설정.
8. **보안과 시크릿 관리**
   - Jenkins Credentials 플러그인으로 시크릿 관리.
   - Ansible Vault 보안 적용, IAM 역할로 Terraform 접근 제한.
   - Kubernetes 접근에 대한 RBAC 구현.

### 기대 성과
- **자동화되고 반복 가능한 배포** — 인프라와 애플리케이션이 모든 환경에서 일관되게 배포됨.
- **CI/CD 효율성** — 코드 변경 시 전체 파이프라인 워크플로우가 자동으로 트리거됨.
- **컨테이너화된 마이크로서비스** — 효율적인 리소스 사용과 손쉬운 롤백.
- **확장 가능한 오케스트레이션** — Kubernetes가 서비스의 회복탄력성과 확장성을 관리.
- **실시간 모니터링** — Prometheus와 Grafana가 실행 가능한(actionable) 관측 가능성(observability) 제공.
- **감사 가능성과 추적성** — Jenkins 로그와 대시보드로 모든 변경 사항 추적.

### 결론
- 이 풀스택 DevOps 자동화 파이프라인을 구현하면 ShopVerse는 릴리스 주기를 크게 단축하고, 애플리케이션 신뢰성을 높이며, 시스템 성능에 대한 가시성을 개선할 수 있음. Git, Jenkins, Terraform, Docker, Kubernetes, Ansible, 관측 가능성 도구를 결합한 이 통합 전략은 엔지니어링 팀이 향후 성장과 복잡한 다중 리전 배포에 대비할 수 있도록 준비시켜줌.

## 요약
- ShopVerse 실습 프로젝트는 수동 프로비저닝·파편화된 배포·컨테이너화 부재·모니터링 부재라는 4가지 문제를 해결하기 위해 Git 버전 관리, Jenkins CI/CD, Ansible 배포 자동화, Terraform/CloudFormation IaC, Docker 컨테이너화, Kubernetes/Helm 오케스트레이션, Prometheus/Grafana 모니터링, 그리고 Jenkins Credentials·Ansible Vault·IAM·RBAC 기반 보안까지 아우르는 엔드투엔드 DevOps 파이프라인을 직접 설계·구축해보는 종합 실습이다.
