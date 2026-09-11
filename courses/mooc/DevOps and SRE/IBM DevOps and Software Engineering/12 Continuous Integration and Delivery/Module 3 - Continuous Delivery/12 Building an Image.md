# Building an Image

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/OhBGd/building-an-image)

## 개요
- Tekton CLI(`tkn hub search`)로 이미지 빌드 Task를 찾고, ClusterTask로 설치된 `buildah`를 파이프라인에 추가해 병렬 Task(`tests`, `lint`) 완료 후 실행되도록 구성.

## 내용
### 지금까지의 파이프라인 진행 상황
- GitHub에서 클론해 코드를 체크아웃하고, flake8과 nose 같은 품질 검사·단위 테스트를 실행하는 것까지 다룸. 이제 Kubernetes에 배포할 준비로 **컨테이너 이미지를 빌드**할 차례.
- 이미지 빌드 단계의 목적은 Kubernetes 환경에 배포할 준비로 레지스트리에 push할 수 있는 컨테이너 이미지를 만드는 것.

### Tekton CLI로 빌드 Task 검색하기
```bash
tkn hub search build --kinds task
```
- `tkn hub search` 명령에 `build` 검색어를 붙여 사용 — `--kinds` 플래그로 Task만 검색하도록 지정 가능. Tekton Hub 웹사이트 대신 CLI로도 검색할 수 있음.
- 검색 결과:
  - **docker-build** — Dockerfile로부터 Docker 이미지를 빌드해 레지스트리에 push. 원하는 것과 일치하는 후보.
  - **buildah** — Project Atomic의 Buildah 빌드 도구를 사용해 소스를 Dockerfile로부터 컨테이너 이미지로 빌드한 뒤 컨테이너 레지스트리에 push. 이 역시 유력한 후보.
  - **buildpacks** — 앞의 둘과 거의 같은 일을 하지만 **Cloud Native Buildpacks**를 사용 — Dockerfile 없이도 애플리케이션 소스 코드를 OCI(Open Container Initiative) 이미지로 변환하는 플러그형 모듈식 도구.
  - **Source-2-Image(s2i)** — buildpacks처럼 Dockerfile을 만들 필요 없이 소스 코드를 OCI 컨테이너 이미지로 변환.
- 여러 빌드 Task 중 이 파이프라인에서는 **buildah**를 도구로 선택.

### ClusterTask 확인 및 설치
```bash
tkn clustertask ls
```
- 관리자는 클러스터 수준에서 Task를 설치할 수 있음 — 어떤 ClusterTask가 설치되어 있는지 항상 이 명령으로 확인하는 것이 좋음. 예시에서는 `buildah`가 클러스터 수준에 이미 설치되어 있어 로컬 네임스페이스에 따로 설치할 필요가 없음 — 클러스터의 누구나 자신의 파이프라인에서 ClusterTask를 사용 가능.
```bash
tkn hub install task buildah
```
- 클러스터 수준에 설치되어 있지 않다면, Tekton CLI로 현재 네임스페이스에 로컬로 `buildah` Task를 설치 가능 — 성공하면 현재 네임스페이스에 설치되었다는 결과가 표시됨.

### buildah Task 사용법 확인
- Tekton Hub에서 buildah 문서를 읽어보면, 기본값이 없어서 반드시 필요한 유일한 파라미터는 **`IMAGE`**이고, **`source`**라는 이름의 워크스페이스가 필요하다는 것을 알 수 있음.

### 파이프라인에 buildah Task 추가하기
```yaml
  params:
    - name: build-image

  tasks:
    # ... clone, tests, lint ...

    - name: build
      workspaces:
        - name: source
          workspace: pipeline-workspace
      taskRef:
        name: buildah
        kind: ClusterTask
      params:
        - name: IMAGE
          value: $(params.build-image)
      runAfter:
        - tests
        - lint
```
- 먼저 `build-image`라는 새 파이프라인 파라미터를 추가 — 이 값을 곧 buildah Task에 전달할 예정.
- 새 Task를 추가 — 파이프라인 안에 다른 Task들도 있겠지만, 이 Task는 파일에 작성한 순서가 아니라 지정한 실행 순서(`runAfter`)에 따라 항상 실행되므로 어디에 추가하든 상관없음.
- Task 이름은 `build`. 문서에서 buildah가 `source`라는 워크스페이스를 필요로 한다고 했으므로, 워크스페이스 이름을 `source`로 짓고 pipeline-workspace PVC를 사용.
- 설치된 buildah Task를 참조 — **ClusterTask 버전을 사용한다면 `kind: ClusterTask`를 지정**해야 함(네임스페이스에 로컬로 설치했다면 필요 없음).
- buildah가 찾는 파라미터 이름이 `IMAGE`이므로 그 이름으로 파라미터를 만들고, 값은 파이프라인 파라미터인 `params.build-image`를 참조하도록 지정.
- 마지막으로 이 파이프라인 Task가 **`tests`와 `lint` 두 Task가 모두 완료된 후** 실행되도록 지정 — `tests`와 `lint`는 병렬로 실행되므로, 코드가 테스트되고 lint된 후에야 이미지를 빌드하도록 보장하려면 **`runAfter`에 두 Task 이름을 모두 명시**해야 함.

## 요약
- `tkn hub search build --kinds task`로 이미지 빌드 Task(docker-build, buildah, buildpacks, s2i 등)를 검색해 buildah를 선택하고, `tkn clustertask ls`로 클러스터 수준에 이미 설치되어 있는지 확인하거나 `tkn hub install task buildah`로 로컬에 설치한 뒤, 문서에서 확인한 필수 파라미터(`IMAGE`)와 워크스페이스(`source`)를 지정해 `build` Task를 만들고 `runAfter: [tests, lint]`로 지정함으로써 병렬로 실행되는 두 선행 Task가 모두 끝난 뒤에만 이미지 빌드가 시작되도록 구성한다.
