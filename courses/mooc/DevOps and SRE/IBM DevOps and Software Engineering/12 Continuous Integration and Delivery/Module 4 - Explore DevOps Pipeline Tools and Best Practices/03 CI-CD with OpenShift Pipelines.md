# CI/CD with OpenShift Pipelines

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/9az3e/ci-cd-with-openshift-pipelines)

## 개요
- OpenShift Pipelines가 Tekton 위에 어떤 추상화 계층을 제공하는지, 그리고 OpenShift Web Console의 Pipeline Builder로 코드 없이 파이프라인을 만드는 과정을 설명.

## 내용
### OpenShift Pipelines란
- Red Hat OpenShift가 제공하는 CI/CD용 클라우드 네이티브 솔루션 — Kubernetes 오브젝트에 기반해 여러 플랫폼에 걸친 배포를 자동화.
- 개발자가 Kubernetes 환경에서 애플리케이션의 빌드·테스트·배포를 자동화할 수 있게 해줌. Kubernetes와의 매끄러운 통합 덕분에 플랫폼의 확장성·유연성·이식성을 활용 가능.
- 핵심 토대 중 하나는 이 코스에서 이미 익숙해진 **Tekton**의 사용 — 이 추상화는 개발자와 운영자가 더 이해하고 다루기 쉬운 고수준 구성으로 파이프라인을 정의·설정할 수 있게 해줌.

### OpenShift Pipelines의 이점
- Kubecontrol(kubectl), Helm, Operator 같은 Kubernetes 도구를 CI/CD 워크플로우에 매끄럽게 통합 — Kubernetes 모범 사례 채택을 단순화하고 파이프라인 안에서 Kubernetes 생태계의 잠재력을 최대한 활용하게 해줌.
- 만들어진 파이프라인은 더 큰 워크로드를 처리하도록 쉽게 확장 가능하고, 재사용 가능해 여러 프로젝트나 애플리케이션에 걸쳐 파이프라인 템플릿을 정의·재사용 가능.
- 온프레미스, 클라우드, 하이브리드 등 다양한 플랫폼에 걸쳐 배포 과정을 자동화해, 애플리케이션을 일관되고 신뢰성 있게 배포하기 쉽게 만듦.

### OpenShift Pipelines와 Tekton이 공유하는 기초 개념
- Event, Trigger, Pipeline, Task, Step — CI/CD 워크플로우를 정의·실행하는 핵심 빌딩 블록. OpenShift는 여기에 추가로 다음을 도입:
  - **Resource(리소스)** — 파이프라인 내 Task가 사용하는 입력/출력 아티팩트를 나타냄. 소스 코드 저장소, 이미지, 설정 파일, 시크릿 등이 포함될 수 있음.
  - **Condition(조건)** — 파이프라인 내 특정 Task나 Step이 실행되어야 하는지를 결정하는 규칙·기준 집합. 브랜치 기반 조건, 환경별 조건, 오류 처리 조건 등이 흔한 예.
  - **PipelineRun** — 특정 파이프라인 인스턴스의 실행을 나타내는 리소스 — OpenShift Pipelines에서 파이프라인을 실행하는 데 필요한 런타임, 설정, 파라미터를 정의.
  - **TaskRun** — 파이프라인 내 특정 Task 인스턴스의 실행을 나타내는 리소스 — 특정 Task의 Step과 설정을 정의하는 Task 리소스를 기반으로 생성됨.

### 추상화 계층이 제공하는 것
- 기초 개념은 그대로 유지되지만, OpenShift Pipelines는 OpenShift 플랫폼에 특화된 추가 구성 요소와 기능을 도입 — Tekton 위에 추상화 계층을 제공해 OpenShift에서 파이프라인을 만들고 배포하고 관리하는 절차를 단순화하고, 기저 Tekton 프레임워크의 복잡성을 줄여 사용자가 애플리케이션에 집중할 수 있게 함.
- OpenShift의 추상화 계층이 제공하는 것:
  - Tekton 파이프라인의 관리·모니터링을 단순화하는 사용자 친화적인 **웹 콘솔**.
  - **이벤트 기반 트리거**로 Tekton을 확장 — 코드 커밋, 이미지 업데이트, 타이머나 외부 시스템 응답 같은 외부 트리거처럼 OpenShift 클러스터 내 다양한 이벤트를 기반으로 파이프라인이 자동으로 트리거되게 함.
  - 인증·인가 메커니즘을 활용해 Tekton 파이프라인에 대한 접근을 보안·통제 — CI/CD 워크플로우에 보안을 제공.
  - 이미지 레지스트리, 영구 스토리지, 네트워크 기능 같은 풍부한 내장 서비스와 역량을 제공 — 이 서비스들은 Tekton 파이프라인에 매끄럽게 통합되어 CI/CD 워크플로우 안에서 OpenShift 플랫폼의 모든 힘을 활용 가능.
  - 여러 프로젝트에 걸쳐 쉽게 재사용할 수 있는 공통 패턴·설정·단계를 정의하는 **파이프라인 템플릿** 도입.

### Pipeline Builder로 실제로 파이프라인 만들어보기
- 랩 환경에는 이미 OpenShift Pipelines가 설치되어 있음 — Console의 **Administrator** 섹션에서 **Installed Operators**를 클릭하면 모든 네임스페이스에 설치된 Red Hat OpenShift Pipelines를 확인 가능.
- **Developer** 역할로 접근하면 왼쪽 바에 **Pipelines** 탭이 있음을 확인 — 아직 생성된 파이프라인이 없다면, 화면 오른쪽의 **Create** 메뉴로 새 파이프라인 생성 가능.
- 첫 파이프라인을 만들려면 OpenShift Web Console에서 제공하는 그래픽 도구인 **Pipeline Builder**를 사용 — YAML 파일을 직접 작성·수정할 필요 없이 파이프라인을 시각적으로 만들고 편집·관리 가능.
- 새로 만든 파이프라인의 이름을 짓고 Tekton Task를 추가 — 이전 강의들에서 익숙한 바로 그 Tekton Task들. Pipeline Builder에서 사용 가능한 **Task 카탈로그**가 Task들을 채워줌 — 이 카탈로그는 OpenShift 커뮤니티가 기여한 Task들과 Red Hat이 정의한 커스텀 Task들의 모음.
- 예시로 `git-clone` Task를 파이프라인에 추가 — Task 카탈로그에서 Task를 선택하면 파이프라인 워크플로우에 그 Task가 포함됨. 이후 요구사항에 따라 그 Task의 입력, 출력, 다른 파라미터를 설정 가능.
- Pipeline Builder는 파이프라인 내 Task들을 시각적으로 표현해줘, 서로 연결하고 실행 순서를 정의할 수 있게 함. 파이프라인을 정의한 뒤 저장하고 **Actions** 메뉴로 파이프라인을 시작 가능 — 콘솔에서 파이프라인이 실행되는 것을 볼 수 있음.
- **PipelineRun 상세 페이지**를 통해 각 Task의 로그를 볼 수 있음 — 파이프라인 실행 시 파이프라인 내 각 Task가 그 Task의 출력과 실행 세부사항을 담은 로그를 생성 — 이 로그들은 파이프라인 실행을 디버깅·문제 해결·모니터링하는 데 귀중한 정보를 제공.

## 요약
- OpenShift Pipelines는 Kubernetes 도구와의 매끄러운 통합을 제공함으로써 개발·배포 과정을 단순화하며, Tekton 프레임워크 위에 웹 콘솔·이벤트 기반 트리거·인증/인가·내장 서비스·파이프라인 템플릿 같은 추상화 계층을 더해 개발자가 파이프라인 정의 자체에 집중할 수 있게 해주고, OpenShift Web Console의 **Pipeline Builder**를 이용하면 YAML을 직접 작성하지 않고도 Task 카탈로그에서 Tekton Task(예: `git-clone`)를 시각적으로 골라 연결하고 실행 순서를 정의해 파이프라인을 만들고 실행·모니터링할 수 있다.
