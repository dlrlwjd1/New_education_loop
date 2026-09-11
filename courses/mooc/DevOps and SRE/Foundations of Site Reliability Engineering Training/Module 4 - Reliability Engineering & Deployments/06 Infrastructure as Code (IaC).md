# Infrastructure as Code (IaC): Concepts, Benefits, Tools, and Best Practices (코드형 인프라)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 4: Reliability Engineering & Deployments

## 개요
- **코드형 인프라(IaC, Infrastructure as Code)**의 개념, 이점, 도구, 모범 사례를 다룬다.

## 내용

### IaC란
- 서버·VNet·서브넷 등의 배포를 **코드로 자동화**하는 SRE 핵심 관행. YAML 등으로 구조화 (Terraform·ARM 템플릿·AWS CodeDeploy 등).
- **한 번 기술하면 여러 번 배포**, 변수 주입 가능.
- **일관·자동·반복 가능한 인프라 배포** → 신뢰성 향상, 수동 오류 감소, 인시던트 복구 가속.

### 주요 이점
- **일관성·재현성(consistency & reproducibility)** — 사람이 다시 타이핑할 필요 없이 블루프린트로 재현.
- **속도·효율** — 전체 환경(예: hub-and-spoke 네트워크의 hub/spoke VNet·서비스) 프로비저닝.
- **버전 관리·협업** — 문제 시 이전 버전 롤백, 팀이 내용 검토·게이트 체크(누락 서비스 확인 등).

### 인기 도구
- **Terraform**(여러 플랫폼 지원, 가장 대표적), **AWS CloudFormation**, **Ansible**, Pulumi, **Kubernetes YAML**, **ARM 템플릿**(Azure).

### 모범 사례
- **비핵심 인프라로 시작**해 초기 리스크 감소 (start small·simple).
- **CI/CD 파이프라인**으로 인프라 변경 자동화.
- **모듈·템플릿 재사용 + 표준화된 구성** → 환경 일관성.
- **적절한 상태 관리·잠금(state management/locking)** → 데이터 충돌·덮어쓰기 방지.
- **불변 인프라(immutable infrastructure) 패턴**으로 신뢰성·일관성 향상.

## 요약
- **IaC**는 인프라를 코드(YAML 등)로 정의해 **일관·자동·반복 가능**하게 배포하는 SRE 관행이다.
- 이점: **일관성/재현성·속도·버전 관리/협업**. 도구: **Terraform·CloudFormation·Ansible·K8s YAML·ARM**.
- 모범 사례: **비핵심부터·CI/CD 연계·모듈 재사용/표준화·상태 잠금·불변 인프라**.
