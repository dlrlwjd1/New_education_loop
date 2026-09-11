# Building a Tekton Pipeline

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/0Srjv/building-a-tekton-pipeline)

## 개요
- Tekton Task와 Pipeline을 실제 YAML 매니페스트로 작성하고, `kubectl apply`로 정의를 등록한 뒤 Tekton CLI(`tkn`)로 파이프라인을 실행하는 전체 과정을 실습.

## 내용
### 파이프라인에 필요한 것 구상하기
- Event·Trigger·Pipeline·Task·Step이라는 개념적 구성 요소를 오른쪽에서 왼쪽으로 거슬러 올라가며 Step과 Task를 정의.
- Continuous Delivery 파이프라인에 필요한 것: 버전 관리 시스템에서 코드를 체크아웃 → 품질 검사(린터 등) 실행 → 단위 테스트 실행 → 통과하면 아티팩트(컨테이너 이미지) 빌드 → 개발/테스트/스테이징 등 환경에 배포. 이것들이 모두 Tekton에서 순서대로 실행되는 Task가 되며, 이들을 합친 것이 **파이프라인**.

### Task 정의 — checkout.yaml
```yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: checkout
spec:
  params:
    - name: repo-url
      description: The URL of the repo to clone
      type: string
  steps:
    - name: checkout
      image: bitnami/git:latest
      command: ["git"]
      args: ["clone", "$(params.repo-url)"]
```
- 모든 정의는 Kubernetes 매니페스트인 YAML 파일로 기술 — `apiVersion`은 `tekton.dev/v1beta1`, `kind`는 `Task`.
- `metadata.name`으로 Task 이름(`checkout`) 지정.
- `spec.steps` 아래 Step을 정의 — Step은 Task 안에 담겨 있고 Task는 Pod에서 실행되며, 모든 Step은 그 Pod 안의 새 컨테이너에서 실행됨. 따라서 컨테이너를 만들 **`image`**(예: `bitnami/git:latest` — Git 클라이언트가 설치된 이미지라면 무엇이든 가능. Bitnami는 CI/CD 파이프라인 구축에 좋은 여러 이미지를 관리)를 지정해야 함.
- 컨테이너 안에서 실행할 `command`(`git`)를 정의. `git clone`에는 저장소 URL이라는 두 번째 인자가 필요한데 아직 없으므로, 이를 **파라미터**로 정의: `spec.params`에 `name: repo-url`, `description`, `type: string`을 지정.
- 인자에서 `$(params.repo-url)`로 참조 — `params.<파라미터 이름>` 형식으로 몇 개든 파라미터를 정의하고 참조 가능. 이것으로 Task 정의가 완성됨.

### Pipeline 정의 — pipeline.yaml
```yaml
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: pipeline
spec:
  params:
    - name: repo-url
  tasks:
    - name: clone
      taskRef:
        name: checkout
      params:
        - name: repo-url
          value: $(params.repo-url)
```
- Task 정의처럼 Pipeline 정의도 Kubernetes 매니페스트 — `apiVersion` 지정 후 `kind: Pipeline`, `metadata.name`으로 이름(`pipeline`) 지정.
- 사용할 Task가 `repo-url`이라는 파라미터를 필요로 한다는 것을 이미 알고 있으므로, `spec.params`에 `repo-url` 파라미터를 선언.
- `spec.tasks`에 Task를 추가 — 대시(`-`)는 리스트임을 나타내며 여러 Task가 있을 수 있음을 의미. 첫 Task 이름은 `clone`으로 짓고, `taskRef`로 이미 작성한 `checkout` Task를 참조. `checkout` Task가 파라미터를 요구한다는 것을 알고 있으므로 여기서 `repo-url` 파라미터의 값을 `params.repo-url`로부터 가져오도록 선언 — 즉 파이프라인에 전달되는 `repo-url`이 이를 필요로 하는 모든 Task로 전달됨.

### 정의 적용 및 확인
```bash
kubectl apply -f tasks.yaml       # "task.tekton.dev/checkout created"
kubectl apply -f pipeline.yaml    # "pipeline.tekton.dev/pipeline created"
kubectl get pipelines
```
- 중요한 점: 이 시점에는 아직 Task나 Pipeline을 실제로 **실행한 것이 아니라 정의(definition)만 만든 것** — 실제 Task와 Pipeline은 각각 **TaskRun**과 **PipelineRun**이라는 별도의 리소스가 생성됨. Tekton 리소스도 Kubernetes 리소스이므로 `kubectl get pipelines`로 파이프라인 정의가 생성되었는지(언제 생성됐는지) 확인 가능.

### Tekton CLI로 파이프라인 실행
```bash
tkn pipeline start pipeline --showlog -p repo-url=<GitHub 저장소 URL>
```
- `tkn pipeline start <파이프라인 이름>` — `--showlog`로 로그가 나올 때까지 대기해 콘솔에 표시. `-p` 플래그로 파이프라인이 필요로 하는 파라미터(여기서는 `repo-url`)를 전달.
- Tekton CLI가 뒤에서 **PipelineRun**과 **TaskRun** 리소스를 생성 — 이것이 실제로 실행 중인 파이프라인과 Task를 만드는 리소스. 수동으로도 만들 수 있지만 Tekton CLI가 이 모든 것을 자동화해주므로 활용하는 것이 좋음.
- 로그를 기다리면 결국 `clone` Task의 `checkout` Step이 git 메시지(클론 중이라는 메시지)를 반환하고, 메시지 속 저장소 이름이 URL로 전달한 저장소 이름과 일치하는 것을 확인 — 성공적인 파이프라인 실행.
- 더 많은 Task를 만들어 파이프라인 정의에 추가함으로써 이 파이프라인을 계속 확장해나갈 수 있음.

## 요약
- Tekton Task는 `spec.steps`에 이미지·명령·인자를 정의하고 `spec.params`로 외부 파라미터(예: `repo-url`)를 받아 `$(params.repo-url)` 형식으로 참조할 수 있으며, Pipeline은 `spec.tasks`에서 `taskRef`로 이미 정의된 Task들을 참조하고 파라미터를 전달함으로써 구성되고, `kubectl apply`로 이 정의들을 등록한 뒤(아직 실행은 아님) Tekton CLI의 `tkn pipeline start --showlog -p`로 실제 PipelineRun/TaskRun을 생성해 파이프라인을 실행·검증할 수 있다.
