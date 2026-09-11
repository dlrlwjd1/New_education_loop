# Finding and Exploring Right Tools from DevOps for MLOps - Part 1

## 개요
- MLOps 파이프라인에서 모델의 배포·관리를 지원하는 DevOps 도구들을 카테고리별로 소개하는 3분 영상(Part 1) — 버전 관리, CI, CD, 실험 추적, 테스트·검증 도구.

## 내용

### 버전 관리와 협업 도구
- **Git**: 소스 코드 이력 관리와 팀 협업을 가능하게 하는 대표적 버전 관리 도구. **GitHub**, **GitLab**은 인기 있는 Git 호스팅 서비스.
- **DVC(Data Version Control)**: Git의 확장 도구로, 대용량 데이터셋과 ML 모델을 위해 특별히 설계됨 — Git이 코드를 다루듯 데이터셋·모델·실험을 버전 관리 가능. ML 워크플로의 재현성에 핵심적.

### 지속적 통합(CI) 도구
- **Jenkins**: 가장 널리 쓰이는 CI 도구 중 하나 — 테스트, 빌드, 배포 자동화 제공.
- **GitLab CI/CD**: GitLab 리포지토리 안에서 직접 CI/CD를 위한 통합 솔루션 제공 — 테스트 실행, 모델 빌드, 프로덕션 배포 같은 자동화 작업에 유용.
- **CircleCI**: 테스트·배포 프로세스를 자동화해 빠르고 일관된 결과를 보장 — Docker 컨테이너·Kubernetes와 잘 통합되어 클라우드 환경으로의 ML 모델 배포에 이상적.

### 지속적 배포(CD) 도구
- **Kubeflow**(영상에서 "Terraform Flow"로 언급되나 Kubeflow를 지칭): Kubernetes 위에 구축된 종합 머신러닝 배포 플랫폼 — 엔드투엔드 파이프라인, 모델 학습·배포를 지원하며 ML 워크플로의 모든 측면을 자동화.
- **Terraform**: 인프라를 정의·프로비저닝하는 강력한 Infrastructure as Code 도구 — MLOps에서 스토리지, 컴퓨트 인스턴스, 네트워킹 같은 클라우드 리소스를 관리해 ML 모델에 일관된 환경 제공.
- **ArgoCD**: Kubernetes 네이티브 지속적 배포 도구 — 애플리케이션 배포를 자동화해 모델 배포가 항상 Git에 버전 관리된 상태와 동기화되도록 보장.

### 실험 추적·관리 도구
- **MLflow**: 엔드투엔드 머신러닝 생애주기를 관리하는 대표적 플랫폼 — 실험 추적부터 모델 배포까지, 메트릭·하이퍼파라미터·모델을 로깅해 결과 비교·재현을 쉽게 만듦.
- **Neptune.ai**: ML 실험을 추적·조직하기 위해 설계된 또 다른 인기 실험 관리 도구 — 여러 모델을 비교하고 메트릭을 시각화하며 메타데이터를 로깅할 수 있는 사용자 친화적 인터페이스 제공.

### 자동화된 테스트·검증 도구
- **PyTest**: ML 코드를 위한 단순하면서도 확장 가능한 테스트 케이스를 쉽게 작성할 수 있는 프레임워크 — 모델 학습 스크립트, 검증 함수, 파이프라인 테스트에 필수적.
- **Great Expectations**: 데이터 검증에 초점을 맞춘 도구 — 데이터에 대한 기대치(expectations)를 정의하고 이를 충족하는지 자동으로 확인해, 데이터 품질 저하가 모델 성능에 영향을 미치는 것을 방지.

## 요약
| 카테고리 | 도구 |
|---|---|
| 버전 관리·협업 | Git, GitHub/GitLab, DVC |
| CI | Jenkins, GitLab CI/CD, CircleCI |
| CD | Kubeflow, Terraform, ArgoCD |
| 실험 추적 | MLflow, Neptune.ai |
| 테스트·검증 | PyTest, Great Expectations |
