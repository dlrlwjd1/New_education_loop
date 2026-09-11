# Leveraging the Tekton Catalog

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/XRGpG/leveraging-the-tekton-catalog)

## 개요
- 커뮤니티가 기여한 재사용 가능한 Task 모음인 **Tekton Catalog(Tekton Hub)**를 소개하고, Task 간 데이터 공유를 위한 **워크스페이스(Workspace)** 개념, 그리고 카탈로그의 `git-clone` Task를 실제 파이프라인에 통합하는 방법을 설명.

## 내용
### Tekton Catalog(Tekton Hub)란
- 커뮤니티가 기여한 Tekton Task들의 저장소 — CI/CD 파이프라인을 만드는 데 사용할 수 있는 재사용 가능한 부품들의 모음. `hub.tekton.dev`에 위치.
- 직접 Task를 작성하기 전에 항상 Tekton Catalog에서 누군가 이미 작성해둔 것이 있는지 확인해야 함 — Task를 만들고 디버깅하는 데 드는 시간뿐 아니라 이후 유지보수 시간도 절약해줌. **직접 작성하지 않은 코드 한 줄은 유지보수할 필요가 없는 코드 한 줄**.
- Tekton Hub의 Task 카테고리: 자동화, 빌드 도구, 코드 품질, 지속적 통합, Git 같은 개발자 도구, 이미지 빌드, Kubernetes와 OpenShift Task, 네트워킹, 모니터링, 보안, 게시(publishing) 등.
- Task를 선택해 상세 정보를 보면 설치 방법(보통 `kubectl`로 적용하는 YAML Kubernetes 매니페스트 형태)이 나오며, `tkn hub install task <Task 이름>`으로 Tekton CLI를 통해서도 쉽게 설치 가능.
- 상세 정보에는 Task가 필요로 하는 파라미터(이름, 타입, 값에 대한 힌트), 다른 Task와 데이터를 공유하기 위해 필요한 워크스페이스 여부, Task가 만들어내는 결과, 특별한 실행 권한이 필요한 서비스 계정 여부, 실행 가능한 플랫폼, 유용한 사용 예시까지 문서화되어 있음.

### 워크스페이스(Workspace)란
- Tekton에서는 각 Task가 자신만의 Pod에서 실행되고 모든 Pod는 서로 격리되어 있어, Task 간 데이터를 전달하기가 어려움.
- 이를 해결하는 것이 **워크스페이스** — 각 Task가 접근할 수 있는 공유 볼륨. 이를 통해 볼륨을 거쳐 데이터를 공유 가능(빌드 아티팩트를 공유하는 데 필수 — Git에서 코드를 먼저 클론하지 않고는 코드를 lint할 수 없으므로, 코드를 공유할 방법이 필요하며 워크스페이스가 그 답).
- 워크스페이스는 **PipelineRun**에서 선언되며, Kubernetes **PersistentVolumeClaim(PVC)**으로 구현되므로 PipelineRun이 파이프라인이 기대하는 워크스페이스 이름을 파이프라인이 아티팩트를 저장하는 데 사용할 수 있는 PVC로 매핑해야 함.

### PersistentVolumeClaim과 PipelineRun 정의
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pipelinerun-pvc
spec:
  storageClassName: default
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```
```yaml
apiVersion: tekton.dev/v1beta1
kind: PipelineRun
metadata:
  generateName: cd-pipeline-run-
spec:
  pipelineRef:
    name: cd-pipeline
  workspaces:
    - name: pipeline-workspace
      persistentVolumeClaim:
        claimName: pipelinerun-pvc
  params:
    - name: repo-url
      value: https://github.com/example/repo
```
- PVC는 이름(`pipelinerun-pvc`)을 갖고, 기본 스토리지 클래스를 사용하며 1GB 스토리지를 요청하고 읽기-쓰기(read-write) 파일시스템으로 마운트.
- PipelineRun은 `generateName`으로 고유 이름을 생성하도록 설정해 매번 실행을 고유하게 식별. `spec`에서 실행할 파이프라인(`cd-pipeline`)을 참조하고, `pipeline-workspace`라는 이름으로 워크스페이스를 선언해 사용하려는 PVC(`pipelinerun-pvc`)에 매핑 — 이 시점부터 파이프라인은 `pipeline-workspace`라는 이름으로 이를 참조할 수 있고, Kubernetes는 각 Pod에 `pipelinerun-pvc`라는 PVC를 마운트해야 함을 알게 됨. 마지막으로 파이프라인이 필요로 하는 파라미터(`repo-url`)를 전달.

### Tekton Catalog의 git-clone Task를 파이프라인에 통합하기
```yaml
apiVersion: tekton.dev/v1beta1
kind: Pipeline
metadata:
  name: cd-pipeline
spec:
  workspaces:
    - name: pipeline-workspace
  params:
    - name: repo-url
  tasks:
    - name: clone
      taskRef:
        name: git-clone
      workspaces:
        - name: output
          workspace: pipeline-workspace
      params:
        - name: url
          value: $(params.repo-url)
```
- Pipeline `spec`에서 `pipeline-workspace`라는 워크스페이스가 필요함을 정의해 이를 필요로 하는 어떤 Task든 사용할 수 있게 함. 그다음 `repo-url`이라는 파라미터가 파이프라인에 전달되어야 함을 선언.
- `clone`이라는 Task를 만들고, `taskRef`를 Tekton Catalog에서 설치한 `git-clone` Task로 지정. `git-clone` Task는 `output`이라는 이름의 워크스페이스를 필요로 하므로, 이 Task에 대해 `pipeline-workspace`에서 `output`으로의 매핑을 정의 — 다른 Task는 다른 워크스페이스 이름을 쓸 수 있고 모두 이 파이프라인이 사용하는 단일 워크스페이스로 다시 매핑될 수 있음.
- `git-clone` Task는 클론하려는 Git 저장소의 URL을 `url`이라는 이름의 파라미터로 설정해야 하므로, 파이프라인의 `repo-url` 파라미터를 Task가 요구하는 `url` 파라미터로 매핑.

### 어디서 무엇을 가져왔는지 정리
- Tekton Hub의 `git-clone` Task 상세 정보에서 `output`이라는 워크스페이스가 필요하다는 것을 확인해 Task에 정의했고, `url`이라는 파라미터가 전달되어야 한다는 것도 확인해 Task에 정의함.
- Task의 워크스페이스는 파이프라인 스펙의 `pipeline-workspace`에 매핑되었고, Task의 `url` 파라미터는 파이프라인 스펙의 `repo-url` 파라미터에 매핑됨.

## 요약
- Tekton Catalog(Tekton Hub, `hub.tekton.dev`)는 직접 작성하지 않아도 되는 재사용 가능한 Task들을 제공하며, 각 Task는 필요한 파라미터와 워크스페이스를 문서로 명시하고, 격리된 Pod에서 실행되는 Task들 간 데이터 공유는 PipelineRun에서 PersistentVolumeClaim에 매핑되는 **워크스페이스**로 해결하며, 예를 들어 카탈로그의 `git-clone` Task를 사용할 때는 그 Task가 요구하는 워크스페이스 이름(`output`)과 파라미터 이름(`url`)을 파이프라인 자체의 워크스페이스(`pipeline-workspace`)와 파라미터(`repo-url`)에 매핑해주기만 하면 된다.
