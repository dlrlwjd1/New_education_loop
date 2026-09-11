# Introduction to Tekton and Pipelines

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/OpMLt/introduction-to-tekton-and-pipelines)

## 개요
- Tekton의 개념(Event, Trigger, Pipeline, Task, Step)과, 이를 실제로 구현하는 Kubernetes CRD(EventListener, TriggerBinding, TriggerTemplate, PipelineRun, TaskRun)의 동작 방식을 설명.

## 내용
### Tekton이란
- CI/CD 파이프라인을 만들기 위한 유연하고 오픈소스인 프레임워크 — 매우 단순한 것부터 매우 정교한 것까지 CI/CD 파이프라인을 만드는 데 사용할 수 있는 기본 빌딩 블록을 제공.
- 개발자가 애플리케이션을 자동으로 빌드·테스트·배포할 수 있게 해줌. 단계를 순차적으로 또는 병렬로 실행할 수 있어 실행 순서를 완전히 통제할 수 있음.
- 클라우드 제공자와 온프레미스 시스템 모두에서 작동 — Kubernetes 클러스터를 실행할 수 있는 곳이라면 어디서든 Tekton을 실행할 수 있음.

### Tekton의 이점
- **표준화** — 오픈소스이고 벤더 중립적이라, 벤더·언어·배포 환경에 걸쳐 CI/CD 도구와 프로세스를 표준화할 수 있음. Jenkins X, Skaffold, Knative 같은 인기 있는 CI/CD 도구들이 Tekton을 기반으로 함.
- **내장된 모범 사례** — 논리적으로 구성되어 있어, 확장 가능하고 서버리스이며 클라우드 네이티브한 CI/CD 시스템을 즉시 만들 수 있음. Tekton은 Kubernetes 클러스터에서 네이티브로 실행되어 별도의 CI/CD 솔루션이 필요 없음.
- **유연성 극대화** — 기저 구현을 추상화해, 팀의 요구사항에 따라 애플리케이션을 어떻게 빌드·테스트·배포할지 선택할 수 있게 해줌.

### 개념적 구성 요소 — Event → Trigger → Pipeline → Task → Step
- **Event(이벤트)** — Trigger를 발동시키는 외부 이벤트(Pull Request, Git 저장소로의 push 등).
- **Trigger(트리거)** — 이벤트에 의해 발동되며, 파이프라인을 실행하는 PipelineRun을 시작시키는 자극. Trigger는 Pipeline을 가리킴.
- **Pipeline(파이프라인)** — 실행할 Task들의 모음. 파이프라인에 포함할 수 있는 Task 수에 제한이 없으며, 이 Task들은 순차적으로 또는 병렬로 실행 가능.
- **Task(태스크)** — 하나 이상의 Step으로 구성된 작업 단위. Step을 수행하는 데 필요한 파라미터와, 아티팩트를 저장하는 데 필요한 워크스페이스도 정의 가능.
- **Step(단계)** — Task를 수행하기 위해 실제로 실행되는 명령. 무엇이든 될 수 있지만, 대개는 애플리케이션을 빌드·테스트·배포하는 명령을 실행하는 셸 스크립트.

### 물리적 구성 요소 — Kubernetes CRD(Custom Resource Definition)
- Tekton은 실제로 일련의 Kubernetes CRD 집합 — 실행 순서대로 설명하면:
  1. **EventListener** — Git 저장소의 Pull Request나 커밋 같은 이벤트를 수신 대기하는 CRD.
  2. **TriggerBinding** — 이벤트와 연관된 첫 번째 CRD. 파이프라인을 실행하는 데 필요한 파라미터를 이벤트로부터 포착.
  3. **TriggerTemplate** — 이벤트와 연관된 두 번째 CRD. TriggerBinding으로부터 파라미터를 받아 이를 PipelineRun과 연결. 이벤트에 의해 트리거되면 TriggerTemplate이 PipelineRun을 생성하며, 트리거된 이벤트로부터의 파라미터나 파이프라인에 필요할 수 있는 영구 저장소도 함께 전달.
  - 이벤트 없이 수동으로 PipelineRun을 만들 수도 있지만, CI/CD 파이프라인은 대개 이벤트로 구동됨.
  4. **PipelineRun** — Pipeline을 인스턴스화하는 것. Pipeline은 Task들의 모음이며, 기본적으로 동시에(병렬로) 실행되거나, Task 간 의존성을 지정하면 하나씩 순차적으로 실행됨.
  5. **TaskRun** — 각 Task마다 PipelineRun이 관리를 위해 생성 — 이는 다시 그 Task가 실행될 **Kubernetes Pod**를 생성. 한 Task의 모든 Step은 같은 Pod에서 실행됨.
- Step이 실행되면서 Pod 안에 컨테이너가 생성됨(Step마다 하나씩). Task들이 병렬로 실행 중이면 각 Task의 컨테이너가 한 번에 생성됨. Step은 항상 순차적으로 실행되므로, 컨테이너는 이전 것이 끝날 때 시작하며 한 번에 하나씩 생성됨.
- 대개 **PersistentVolumeClaim**이 생성되어 모든 Pod에 스토리지가 연결됨으로써 파이프라인 전체에서 아티팩트를 공유 가능 — 한 Task에서 코드를 체크아웃하고, 다른 Task에서 단위 테스트를 실행하고, 또 다른 Task에서 컨테이너 이미지를 만드는 것이 가능해짐. 대부분의 파이프라인은 어떤 형태로든 영구 저장소가 필요.

### 완전한 Kubernetes 네이티브
- Tekton의 모든 것은 Kubernetes 네이티브 — 모든 것이 Kubernetes 클러스터 안에서 실행되며 외부 CI/CD 서버가 필요 없음. 이것이 Tekton을 Kubernetes에서의 CI/CD에 완벽한 기술로 만드는 이유 중 하나.

## 요약
- Tekton은 개념적으로 Event(외부 트리거) → Trigger(발동) → Pipeline(Task 모음) → Task(작업 단위) → Step(실제 명령)이라는 계층으로 CI/CD 파이프라인을 구성하며, 실제로는 EventListener(이벤트 수신) → TriggerBinding(파라미터 포착) → TriggerTemplate(PipelineRun 생성) → PipelineRun(Pipeline 인스턴스화, Task 관리) → TaskRun(Kubernetes Pod 생성, Step마다 컨테이너 실행)이라는 Kubernetes CRD들로 구현되어, 별도의 외부 CI/CD 서버 없이 Kubernetes 클러스터 안에서 완전히 네이티브하게 동작하는 파이프라인을 만들 수 있게 해준다.
