# GitOps with ArgoCD

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/7OpQ3/gitops-with-argocd)

## 개요
- ArgoCD의 핵심 기능과 아키텍처, OpenShift에서의 두 가지 GitOps 패턴(온-클러스터 리소스 리컨실러, 외부 리소스 리컨실러), 그리고 OpenShift GitOps 설치·사용 절차를 정리.

## 내용
### ArgoCD란
- Kubernetes 환경을 위해 특별히 설계된 강력한 오픈소스 지속적 전달(Continuous Delivery) 도구 — Git이 단일 진실 공급원 역할을 하며 애플리케이션과 인프라의 원하는 상태를 정의·관리하는 GitOps 방법론을 따름.
- Git 저장소에 저장된 원하는 상태와 애플리케이션·클러스터의 실제 상태 사이의 **지속적인 동기화**를 보장 — 이를 통해 배포 과정을 단순화·간소화.

### ArgoCD의 핵심 기능
- 애플리케이션의 원하는 상태를 선언하면 클러스터가 완벽하게 그 상태와 일치하도록 보장.
- Git 저장소와 자동으로 동기화하며 애플리케이션의 원하는 상태를 유지하기 위해 변경 사항을 적용.
- Git 저장소를 지속적으로 모니터링해 클러스터가 최신 버전과 업데이트에 맞춰 동기화되도록 유지.
- OAuth2, LDAP, SAML2, GitHub, Microsoft 등 다양한 SSO(단일 로그인) 통합 제공.
- 이전 버전으로의 롤백이나 통제된 롤아웃을 수행할 수 있게 해줘 배포 중 위험을 최소화.
- 재사용 가능한 애플리케이션 설정 패턴을 정의하는 데 템플릿 사용.
- 사용자 접근과 권한에 대한 세밀한 통제를 가능하게 하는 견고한 **RBAC(Role-Based Access Control)** 메커니즘을 제공해 배포의 보안을 보장.

### 배포·자동화·감사·통합을 돕는 기능
- 여러 환경에 걸친 매끄러운 배포를 촉진해 개발부터 프로덕션까지 일관된 전달을 보장.
- 사용자 친화적인 웹 기반 인터페이스로 배포를 관리하고 변경 사항을 추적.
- 자동화·스크립팅·CI/CD 파이프라인과의 통합을 위한 **CLI**(명령줄 인터페이스) 제공.
- 포괄적인 감사 추적과 상세한 배포 이력을 유지해 애플리케이션 전달 생애주기 전반의 투명성과 책임성을 보장.
- 다른 도구와 통합하고 특정 요구사항에 맞게 커스터마이징할 수 있도록 높은 확장성을 가짐.

### Out-of-sync 감지와 동기화
- 일반적인 GitOps 운영에서, 애플리케이션의 현재 상태와 배포가 의도한 목표 상태에서 벗어나면 이를 **out-of-sync(동기화되지 않음)** 범주로 분류.
- ArgoCD는 이런 불일치를 감지·표시하고, 원하는 목표 상태로 되돌릴 수 있는 기능을 제공 — 이 동기화 과정은 자동으로 또는 수동으로 시작 가능. Git 저장소의 원하는 상태에 가해진 모든 변경은 자동으로 적용되어 지정된 목표 환경에 반영됨.

### ArgoCD의 GitOps 워크플로우 구성 요소
- **SCM(소스 코드 저장소)** — 애플리케이션의 매니페스트를 설정 파일 형태로 저장(Git, GitHub, 또는 지원되는 다른 SCM 시스템일 수 있음). 개발자가 SCM에서 애플리케이션 매니페스트를 변경한 뒤 그 변경을 제안하는 Pull Request를 만듦.
- ArgoCD는 **웹훅**을 통해 SCM과 통합 — Pull Request가 병합되거나 브랜치·태그 생성 같은 다른 이벤트가 발생하면 웹훅 이벤트가 ArgoCD의 동기화를 트리거.
- **API 컴포넌트** — ArgoCD 시스템과 상호작용하기 위한 프로그래밍 인터페이스 제공 — 사용자가 애플리케이션 관리, 접근 통제 설정, 배포 정보 조회 같은 다양한 작업을 수행할 수 있게 함.
- **Sync Hook(동기화 훅)** — 동기화 전후에 실행할 수 있는 스크립트/훅 — 데이터베이스 마이그레이션 실행, 테스트 완료, 알림 전송 같은 커스텀 작업을 애플리케이션 배포 전후에 수행 가능.
- ArgoCD는 원하는 애플리케이션 상태의 배포를 자동화하기 위해, Git 커밋에서의 브랜치·태그·매니페스트 특정 버전에 대한 업데이트를 추적 — 이는 지정된 목표 환경에서 애플리케이션 배포에 대한 정밀한 통제를 가능하게 함.
- **Deploy 컴포넌트** — Kubernetes 클러스터로의 실제 애플리케이션 배포를 나타냄 — 원하는 애플리케이션 상태를 달성하기 위해 ArgoCD가 Kubernetes API를 사용해 Pod, Service, Deployment, ConfigMap 같은 필요한 리소스를 만들고 업데이트.

### OpenShift의 GitOps 패턴
- OpenShift는 애플리케이션 배포·관리를 간소화하는 여러 GitOps 패턴을 지원. 대표적인 두 가지:
  - **온-클러스터 리소스 리컨실러(On-Cluster Resource Reconciler) 패턴** — 클러스터 내 컨트롤러가 Git 저장소의 Kubernetes 리소스(YAML 파일 등)와 비교하는 역할을 담당. 불일치가 발견되면 컨트롤러가 알림을 트리거하고 잠재적으로 Kubernetes의 리소스를 Git 저장소에 저장된 것과 일치시키는 조치를 수행. **Anthos Config Management**는 공유 환경 배포에 사용되고, 지속적·점진적 전달 솔루션을 가능하게 하는 **Weaveworks Flux**가 이 패턴을 GitOps 구현에 사용.
  - **외부 리소스 리컨실러(External Resource Reconciler) 패턴** — 여러 Git 저장소와 Kubernetes 클러스터에 걸친 리소스를 관리·동기화할 수 있게 해줌. 이 패턴에서는 동기화 과정이 Git 저장소와 조정할 Kubernetes 클러스터를 기술하는 **CRD(Custom Resource Definition)**를 이용해 이뤄짐. 컨트롤러들이 이 CRD에 명시된 Git 저장소를 같은 CRD에 명시된 Kubernetes 클러스터의 리소스와 비교 — 비교 결과에 따라 불일치를 조정하는 적절한 조치를 취함. **ArgoCD**가 자신의 GitOps 구현에 이 외부 리소스 리컨실러 패턴을 채택한 대표적인 솔루션.

### OpenShift GitOps 시작하기
- OpenShift GitOps는 OpenShift에 특화해 설계된 ArgoCD의 패키지 버전 — OpenShift 플랫폼 안에서 매끄러운 GitOps 경험을 제공.
- 단계별 가이드:
  1. OpenShift 클러스터의 **OperatorHub**에서 OpenShift GitOps 설치 — OperatorHub는 OpenShift에 쉽게 배포할 수 있는 사전 패키지된 애플리케이션·서비스 카탈로그를 제공.
  2. 설치 후 OpenShift 콘솔에서 OpenShift GitOps를 실행 가능 — 콘솔은 설치된 애플리케이션에 접근·관리하는 사용자 친화적 인터페이스를 제공.
  3. GitOps OpenShift에 접근하려면 OpenShift 자격 증명으로 로그인 — Git 저장소, Kubernetes 클러스터, 관련 리소스를 관리하기 위한 적절한 인증·인가를 보장.
  4. OpenShift GitOps가 실행되면 ArgoCD의 기능을 사용할 수 있음.

## 요약
- ArgoCD는 Kubernetes를 위한 선언적 GitOps 지속적 전달 도구로, 원하는 상태 선언·Git 저장소와의 자동 동기화·SSO 통합·롤백·RBAC 같은 기능을 제공하며, SCM(웹훅 트리거)·API·Sync Hook·Deploy 컴포넌트로 구성된 워크플로우를 통해 out-of-sync 상태를 감지·조정하고, OpenShift는 클러스터 내 컨트롤러가 직접 비교하는 온-클러스터 리소스 리컨실러 패턴(Weaveworks Flux 등)과 CRD로 여러 저장소·클러스터를 조정하는 외부 리소스 리컨실러 패턴(ArgoCD가 대표)을 지원하며, OperatorHub에서 설치하는 OpenShift GitOps로 OpenShift 안에서 ArgoCD를 매끄럽게 사용할 수 있다.
