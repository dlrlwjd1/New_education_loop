# Creating Tekton Triggers

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/TEv7B/creating-tekton-triggers)

## 개요
- Tekton의 `EventListener`, `TriggerBinding`, `TriggerTemplate` 세 CRD를 실제 YAML로 작성해 외부 이벤트가 어떻게 PipelineRun으로 이어지는지 구현하고, `curl`로 트리거가 실제로 작동하는지 로컬에서 테스트.

## 내용
### 트리거의 흐름
- `EventListener`를 만들면 Kubernetes에서 이벤트를 수신 대기하는 Pod가 생성됨. 외부 이벤트가 발생하면 이 EventListener Pod로 전송되고, 이는 `TriggerBinding`을 인스턴스화해 이벤트로부터 정보를 가져와 파이프라인이 필요로 하는 파라미터에 바인딩함.
- `TriggerBinding`의 파라미터는 `TriggerTemplate`으로 전달됨. `TriggerTemplate`은 이름 그대로 **PipelineRun**으로 정의되어 파이프라인을 실행 — 이 새 PipelineRun 리소스가 시작되면 파이프라인이 실행되기 시작.

### 1) EventListener 정의
```yaml
apiVersion: triggers.tekton.dev/v1beta1
kind: EventListener
metadata:
  name: cd-listener
spec:
  serviceAccountName: pipeline
  triggers:
    - bindings:
        - ref: cd-binding
      template:
        ref: cd-template
```
- `serviceAccountName`은 파이프라인이 실행될 ServiceAccount 이름 — OpenShift에는 파이프라인 실행에 필요한 접근 제어가 이미 구성된 `pipeline`이라는 사전 구성된 ServiceAccount가 있어 이를 사용.
- 이 EventListener가 이벤트를 받으면, 데이터가 먼저 `cd-binding`이라는 바인딩으로 전달되고, 그 바인딩이 데이터를 `cd-template`이라는 트리거 템플릿에 필요한 파라미터로 정리(marshal)해 그 템플릿을 호출.

### 2) TriggerBinding 정의
```yaml
apiVersion: triggers.tekton.dev/v1beta1
kind: TriggerBinding
metadata:
  name: cd-binding
spec:
  params:
    - name: repository
      value: $(body.repository.url)
    - name: branch
      value: $(body.ref)
```
- 첫 번째 파라미터 `repository`의 값은 `body.repository.url`에서 옴 — 이는 들어오는 이벤트의 본문(body)에 매우 특화된 것으로, GitHub의 경우 GitHub 이벤트 본문에서 오는 JSON 파일을 살펴봐야 이 파라미터들을 어디서 가져올지 알 수 있음.
- 두 번째 파라미터 `branch`의 값은 `body.ref`에서 옴 — 이렇게 들어오는 이벤트의 데이터를 파이프라인이 필요로 하는 파라미터에 바인딩.

### 3) TriggerTemplate 정의
```yaml
apiVersion: triggers.tekton.dev/v1beta1
kind: TriggerTemplate
metadata:
  name: cd-template
spec:
  params:
    - name: repository
      description: The repository URL
      default: ""
    - name: branch
      description: The branch to build
      default: "master"
  resourcetemplates:
    - apiVersion: tekton.dev/v1beta1
      kind: PipelineRun
      metadata:
        generateName: cd-pipeline-run-
      spec:
        serviceAccountName: pipeline
        pipelineRef:
          name: cd-pipeline
        params:
          - name: repo-url
            value: $(tt.params.repository)
          - name: branch
            value: $(tt.params.branch)
```
- `spec.params`에 각 파라미터의 이름·설명·기본값(default)을 정의 — 설명은 문서화 목적으로만 쓰이고, 기본값은 TriggerBinding이 해당 이름의 파라미터를 전달하지 않았을 때 사용됨(예: `branch`의 기본값은 `master`).
- `resourcetemplates` 섹션에 실제 **PipelineRun** 리소스를 담음.
  - `metadata.generateName`으로 부분 이름을 지정하면 고유 ID가 생성되어 그 부분 이름에 덧붙여짐 — 모든 파이프라인 실행에 고유한 이름을 부여하는 효과적인 방법.
  - `pipelineRef.name`으로 실행할 파이프라인(`cd-pipeline`, 다른 곳에 이미 정의되어 있다고 가정)을 참조.
  - 파이프라인이 요구하는 파라미터를 지정할 때, **이름이 반드시 TriggerTemplate의 파라미터 이름과 같을 필요는 없음** — 호출하는 파이프라인이 정의한 이름(`repo-url`)을 그대로 사용해야 하며, 값은 `$(tt.params.repository)`처럼 TriggerTemplate 자신의 `params` 섹션에서 가져옴. `branch`도 마찬가지로 `$(tt.params.branch)`로 참조.
- 이는 파라미터 이름이 항상 일치하지 않아도, 서로 매핑만 할 수 있으면 된다는 것을 보여줌 — 직접 파일을 작성한다면 보통 모든 파라미터 이름을 통일하겠지만, 서로 다른 파라미터 이름을 가진 기존 파이프라인들도 매핑을 통해 작동하게 만들 수 있음을 확인.

### 파라미터 흐름 요약
- Event(파이프라인에 필요한 데이터를 담음) → TriggerBinding(이벤트 데이터를 파라미터에 바인딩) → TriggerTemplate에서 그 파라미터를 PipelineRun에 매핑해 파이프라인과 모든 Task가 기대하는 파라미터 이름으로 사용 가능하게 만듦.

### curl로 트리거 테스트하기
```bash
kubectl port-forward svc/el-cd-listener 8090:8080
```
- 로컬에서 EventListener를 노출하려면(보통은 Ingress를 설정하지만, 빠른 확인용으로는 `kubectl port-forward`를 사용) EventListener가 수신 대기 중인 포트(8080)를 원하는 포트(여기서는 8090)로 포워딩.
```bash
curl -X POST http://localhost:8090 \
  -H "Content-Type: application/json" \
  -d '{"repository": {"url": "https://github.com/example/repo"}, "ref": "refs/heads/main"}'
```
- `Content-Type` 헤더를 `application/json`으로 설정하고 `-d`로 JSON 형식의 데이터를 전송 — TriggerBinding이 `repository` 파라미터를 `body.repository.url`에서 가져오도록 했으므로, JSON 본문에 `repository` 속성 아래 `url` 속성을 포함.
- 엔터를 누르면 EventListener로부터 요청을 수락했다는 메시지를 받음.
```bash
tkn pipelinerun logs --last -f
```
- 최신 로그를 지정해 확인하면 파이프라인이 아직 실행 중임을 보다가, 결국 파이프라인에서 실행된 `checkout` Task의 메시지를 보게 됨 — 메시지 속 저장소 이름이 클론하라고 지정한 저장소 이름과 일치 — 이것으로 트리거가 성공적으로 작동했음을 확인.

## 요약
- Tekton 트리거는 외부 이벤트를 수신하는 **EventListener**, 이벤트 본문의 데이터(`body.repository.url` 등)를 파라미터로 바인딩하는 **TriggerBinding**, 그 파라미터를 받아 `generateName`으로 고유 이름을 가진 **PipelineRun**을 생성하는 **TriggerTemplate**의 조합으로 구성되며, 파라미터 이름이 TriggerTemplate과 실제 파이프라인 사이에서 정확히 일치하지 않아도 서로 매핑만 되면 작동하고, `kubectl port-forward`와 `curl`로 JSON 페이로드를 보내 로컬에서 EventListener가 정상적으로 파이프라인을 트리거하는지 테스트할 수 있다.
