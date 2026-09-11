# Deploying to Kubernetes

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/16E57/deploying-to-kubernetes)

## 개요
- CD 파이프라인의 마지막 단계로 `openshift-client` Task를 이용해 Kubernetes/OpenShift에 애플리케이션을 배포하는 두 가지 방식(단일 CLI 명령 vs Kubernetes 매니페스트 적용)을 정리.

## 내용
### 지금까지의 파이프라인 — 마지막 단계
- GitHub에서 클론해 코드를 체크아웃하고, flake8과 nose로 품질 검사·단위 테스트를 실행하고, 컨테이너 이미지를 빌드해 로컬 레지스트리에 push하는 것까지 다룸. 이제 애플리케이션을 환경(구체적으로 Kubernetes)에 배포할 차례.

### Kubernetes 배포 방법 개괄
- **`kubectl`** — 공식 Kubernetes CLI. **`oc`**(OpenShift Cluster CLI) — OpenShift 클러스터에 배포할 때 사용(이 코스의 실습에서 사용할 예정). `oc`는 `kubectl`의 진정한 상위 집합(superset)이라 많은 `oc` 명령이 순수 Kubernetes에서도 작동함.
- 원시 CLI 명령에 많은 파라미터를 붙여 리소스를 구성할 수도 있지만, 대부분은 배포하려는 리소스의 설명을 담은 YAML 파일 형태의 **Kubernetes 매니페스트**로 배포함.
- **kustomize**(대문자 K가 아니라 소문자 k)라는 도구도 있음 — 이제 `kubectl` 명령의 일부로, 매니페스트 파일을 최소한으로 변경하면서 서로 다른 환경에 맞춰 배포를 즉석에서 커스터마이즈할 수 있게 해줌.

### CLI 기반 배포 Task 검색하기
```bash
tkn hub search cli
tkn hub info task openshift-client
```
- `cli` 태그가 붙은 Task를 검색하면 `openshift-client`가 목록에 있음을 확인 가능. Tekton Hub 웹사이트에 가지 않고도 `tkn hub info task <Task 이름>`으로 CLI에서 상세 설명을 확인할 수 있음 — 그 Task에 대한 설명과 설치 방법까지 보여줌.
```bash
tkn clustertask ls
tkn hub install task openshift-client
```
- 마찬가지로 관리자가 클러스터 수준에서 이미 설치했는지 `tkn clustertask ls`로 확인 — 예시에서는 `openshift-client`가 클러스터 수준에 이미 설치되어 있어 로컬에 설치할 필요가 없음. 그렇지 않다면 `tkn hub install task openshift-client`로 현재 기본 네임스페이스에 설치.
- 문서를 보면 `openshift-client` Task는 실행하려는 스크립트를 나타내는 **`SCRIPT`**라는 파라미터 하나만 필수로 요구하며, 배포할 매니페스트가 있다면 선택적으로 **`manifest-dir`**라는 파라미터도 지정 가능 — 다양한 방식으로 애플리케이션을 배포하기에 완벽해 보임.

### 방법 1 — 단일 CLI 명령으로 배포
```yaml
  params:
    - name: build-image
    - name: app-name

  tasks:
    # ... clone, tests, lint, build ...

    - name: deploy
      taskRef:
        name: openshift-client
        kind: ClusterTask
      params:
        - name: SCRIPT
          value: |
            oc create deploy $(params.app-name) --image=$(params.build-image)
      runAfter:
        - build
```
- 이전 build Task에서 쓴 `build-image` 파이프라인 파라미터를 재사용 — 파이프라인 파라미터의 좋은 점은 여러 파이프라인 Task에 걸쳐 재사용할 수 있다는 것.
- `oc` 명령에서 사용할 애플리케이션 이름을 위해 `app-name`이라는 새 파이프라인 파라미터를 추가.
- `deploy`라는 새 Task를 만들어 설치한 `openshift-client` Task를 참조(ClusterTask 버전이면 `kind: ClusterTask` 필요).
- `SCRIPT` 파라미터의 값은 세로 막대(`|`)로 시작해 이어지는 줄들이 하나의 스크립트로 취급됨을 나타냄 — `oc create deploy` 명령에 애플리케이션 이름과 이미지 이름을 파이프라인 파라미터로부터 전달.
- 마지막으로 이 파이프라인 Task가 **`build` Task 이후에** 실행되도록 지정해, 이미지가 빌드된 뒤에야 배포가 이뤄지도록 보장.

### 방법 2 — Kubernetes 매니페스트(YAML) 적용으로 배포
```yaml
    - name: deploy
      workspaces:
        - name: manifest-dir
          workspace: pipeline-workspace
      taskRef:
        name: openshift-client
        kind: ClusterTask
      params:
        - name: SCRIPT
          value: |
            oc apply --filename deploy/
            oc rollout status deployment/$(params.app-name)
            oc get pods
      runAfter:
        - build
```
- 배포하려는 리소스를 명시한 YAML 형태의 Kubernetes 매니페스트가 있다면 조금 다른 모습이 됨 — 이 Task에는 파이프라인 파라미터가 필요 없음(모든 것이 매니페스트에 명시되어 있으므로).
- `deploy`라는 새 Task를 추가하고, `openshift-client` 문서에서 언급된 선택적 워크스페이스 `manifest-dir`을 정의해 pipeline-workspace PVC를 사용.
- 설치한 `openshift-client` Task를 참조(ClusterTask라면 `kind: ClusterTask` 설정).
- `SCRIPT` 파라미터는 조금 다름 — `deploy/` 폴더 안의 모든 Kubernetes 매니페스트를 적용하고 싶으므로 `manifest-dir` 워크스페이스를 추가한 이유가 바로 그 폴더 때문. `oc apply --filename` 플래그와 매니페스트 파일이 담긴 폴더를 지정. 스크립트는 여러 줄을 가질 수 있으므로 여러 명령을 사용 가능 — 예시에서는 배포가 롤아웃될 때까지 기다린 뒤 Pod 목록을 나열.
- 마지막으로 이 파이프라인 Task도 배포할 이미지를 빌드하는 `build` Task 이후에 실행되도록 지정.
- 이것이 적용하고 싶은 매니페스트 YAML 파일 세트가 있을 때 애플리케이션을 Kubernetes에 배포하는 대안적 방법.

## 요약
- CD 파이프라인의 마지막 단계는 `tkn hub search cli`나 `tkn hub info task`로 찾은 `openshift-client` Task로 구현하며, 단일 CLI 명령으로 배포할 때는 `SCRIPT` 파라미터에 `oc create deploy` 명령을 담아 `build-image`·`app-name` 파이프라인 파라미터를 전달하고, Kubernetes 매니페스트 YAML 세트를 적용할 때는 `manifest-dir` 워크스페이스와 `oc apply --filename deploy/` 스크립트를 사용하며, 두 방식 모두 이미지가 먼저 빌드되도록 `runAfter: [build]`로 순서를 보장한다.
