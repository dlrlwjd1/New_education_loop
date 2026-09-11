# Hands-On Lab: Build an Automated CD DevOps Pipeline Using Tekton and OpenShift

> MOOC 실습 자료(Ungraded App Item) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedLti/nI2J7/hands-on-lab-build-an-automated-cd-devops-pipeline-using-tekton-and-openshift)

## 개요
- Sprint 3의 마지막 스토리("Create a CD pipeline to automate deployment to Kubernetes")를 구현하는 90분짜리 캡스톤 최종 핵심 실습 — Tekton으로 clone → lint → test → build → deploy 5단계 파이프라인을 처음부터 완성해 Kubernetes 배포를 완전히 자동화한다.

## 내용
### 목표
- 앞선 모듈에서 만든 캡스톤 프로젝트 코드를 체크아웃 → 워크스페이스를 만들고 `cd-pipeline` 추가 → flake8로 lint task 생성 → Nose 테스트 러너로 test task 생성 → 컨테이너 이미지를 빌드하는 build task 생성 → OpenShift 클러스터에 배포하는 deploy task 생성 → 변경 사항 적용 후 `cd-pipeline` 실행.

### Exercise 1~2 — 스토리 착수와 초기 파이프라인 확인
```markdown
Create a CD pipeline to automate deployment to Kubernetes
As a developer
I need to create a CD pipeline to automate deployment to Kubernetes
So that developers aren't wasting their time doing it manually

Assumptions
* Use Tekton to define the pipeline
* It should clone, lint, test, build, and deploy the service
* Deployment should be to OpenShift
* It can use a manual trigger for this MVP
```
- 필요한 5개 파이프라인 task 정리:

  | Task 이름 | 실행 순서(runAfter) | 메시지 |
  |---|---|---|
  | clone | - | 저장소 `$(params.repo-url)` 클론 |
  | lint | clone | Flake8 린터 호출 |
  | tests | clone | PyUnit으로 단위 테스트 실행 |
  | build | lint, tests | `$(params.repo-url)`용 이미지 빌드 |
  | deploy | build | `$(params.branch)` 브랜치의 `$(params.repo-url)` 배포 |

- 이전 개발자가 `tekton/pipeline.yaml`에 clone task가 포함된 초기 파이프라인을, `tekton/pvc.yaml`에 워크스페이스용 PersistentVolumeClaim을 이미 만들어 둔 상태 — 이를 먼저 적용해 동작을 확인:
  ```bash
  oc create -f tekton/pvc.yaml
  oc apply -f tekton/tasks.yaml
  oc apply -f tekton/pipeline.yaml
  ```
- clone task는 Tekton Catalog의 `git-clone` task가 필요 — Artifact Hub 또는 카탈로그 저장소에서 직접 설치:
  ```bash
  kubectl apply -f https://github.com/tektoncd/catalog/raw/main/task/git-clone/0.10/git-clone.yaml
  ```
- 초기 파이프라인 실행 확인:
  ```bash
  tkn pipeline start cd-pipeline \
      -p repo-url="https://github.com/$GITHUB_ACCOUNT/devops-capstone-project.git" \
      -p branch="main" \
      -w name=pipeline-workspace,claimName=pipelinerun-pvc \
      -s pipeline \
      --showlog

  tkn pipelinerun ls   # STATUS 컬럼이 Succeeded인지 확인
  ```

### Exercise 3 — Lint Task 추가(flake8)
- Tekton Catalog의 `flake8` task를 설치:
  ```bash
  kubectl apply -f https://github.com/tektoncd/catalog/raw/main/task/flake8/0.1/flake8.yaml
  ```
- `pipeline.yaml`에 clone task를 복사해 `lint`로 이름을 바꾸고 다음과 같이 수정:
  ```yaml
  - name: lint
    workspaces:
      - name: source
        workspace: pipeline-workspace
    taskRef:
      name: flake8
    params:
    - name: image
      value: "python:3.9-slim"
    - name: args
      value: ["--count","--max-complexity=10","--max-line-length=127","--statistics"]
    runAfter:
      - clone
  ```
- 적용 후 파이프라인 재실행: `oc apply -f tekton/pipeline.yaml` → `tkn pipeline start ...` → 상태 확인은 `tkn pipelinerun ls`, 로그는 `tkn pipelinerun logs --last`.
- 랩 환경은 일시적이므로 `git commit -am 'added link task' && git push --set-upstream origin cd-pipeline`으로 항상 커밋·푸시 권장.

### Exercise 4 — Test Task 직접 작성(nose)
- Tekton Catalog에 nosetests용 task가 없으므로 직접 작성 — `tasks.yaml`에 `---`로 구분된 새 Task를 추가:
  ```yaml
  ---
  apiVersion: tekton.dev/v1beta1
  kind: Task
  metadata:
    name: nose
  spec:
    description: This task will run nosetests on the provided input.
    workspaces:
      - name: source
    params:
      - name: args
        description: Arguments to pass to nose
        type: string
        default: "-v"
      - name: database_uri
        description: Database connection string
        type: string
        default: "sqlite:///test.db"
    steps:
      - name: nosetests
        image: python:3.9-slim
        workingDir: $(workspaces.source.path)
        env:
          - name: DATABASE_URI
            value: $(params.database_uri)
        script: |
          #!/bin/bash
          set -e
          echo "***** Installing dependencies *****"
          python -m pip install --upgrade pip wheel
          pip install -qr requirements.txt
          echo "***** Running nosetests with: $(params.args)"
          nosetests $(params.args)
  ```
- 적용: `oc apply -f tekton/tasks.yaml` → 커밋: `git commit -am 'added nose task' && git push`.

### Exercise 5 — Test Task를 파이프라인에 추가
- `lint` task를 복사해 `tests`로 이름을 바꾸고 새 `nose` task를 참조하도록 수정:
  ```yaml
  - name: tests
    workspaces:
      - name: source
        workspace: pipeline-workspace
    taskRef:
      name: nose
    params:
    - name: database_uri
      value: "sqlite:///test.db"
    - name: args
      value: "-v --with-spec --spec-color"
    runAfter:
      - clone
  ```
- `lint`와 `tests` 모두 `clone` 이후 실행되도록 지정해 **병렬로 실행**되게 함으로써 파이프라인 속도를 높임.

### Exercise 6 — 파이프라인 실행(테스트 확인)
- 테스트 task는 PostgreSQL 데이터베이스가 필요 — 없으면 다시 배포:
  ```bash
  oc get svc postgresql
  oc new-app postgresql-ephemeral   # 없을 경우
  oc get pods
  ```
- 파이프라인 적용 후 실행 — `lint`와 `tests`가 병렬로 실행되므로 로그 출력이 서로 섞여 보임.

### Exercise 7 — Build Task 추가(buildah)
- Tekton Catalog의 `buildah` ClusterTask를 사용 — `tests` task를 복사해 `build`로 수정:
  ```yaml
  spec:
    params:
      # ... 기존 파라미터 ...
      - name: build-image
  ---
      - name: build
        workspaces:
          - name: source
            workspace: pipeline-workspace
        taskRef:
          name: buildah
          kind: ClusterTask
        params:
        - name: IMAGE
          value: "$(params.build-image)"
        runAfter:
          - tests
          - lint
  ```
  - `database_uri` 파라미터는 삭제, 파이프라인 최상단 `spec.params`에 `build-image` 파라미터를 새로 추가.
  - `lint`와 `tests` 둘 다 완료된 후에 이미지를 빌드하도록 `runAfter`에 두 task 모두 지정.
- 적용 후 실행 시 `build-image` 값 형식: `image-registry.openshift-image-registry.svc:5000/$SN_ICR_NAMESPACE/accounts:latest` — `$SN_ICR_NAMESPACE`는 자신의 컨테이너 네임스페이스를 가리키도록 자동 설정되어 있음.

### Exercise 8 — Deploy Task 추가(openshift-client)
- Tekton Catalog의 `openshift-client` ClusterTask 사용 — `build` task를 복사해 `deploy`로 수정. 워크스페이스 이름은 문서에 따라 `manifest-dir`로 변경:
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
        echo "Updating manifest..."
        sed -i "s|IMAGE_NAME_HERE|$(params.build-image)|g" deploy/deployment.yaml
        cat deploy/deployment.yaml
        echo "Deploying to OpenShift..."
        oc apply -f deploy/
        oc get pods -l app=accounts
    runAfter:
      - build
  ```
- 배포 전 `deploy/deployment.yaml`의 `image:` 값을 플레이스홀더 `IMAGE_NAME_HERE`로 바꿔둬야 파이프라인의 `sed` 명령이 실행 시점의 실제 이미지 이름으로 치환할 수 있음:
  ```yaml
  spec:
    template:
      spec:
        containers:
        - image: IMAGE_NAME_HERE
          name: accounts
  ```
- 파이프라인이 Git 저장소를 클론하므로 `deploy/deployment.yaml` 변경 사항도 반드시 원격 브랜치(`cd-pipeline`)에 푸시해야 함.

### Exercise 9 — 전체 파이프라인 실행과 배포 확인
```bash
tkn pipeline start cd-pipeline \
    -p repo-url="https://github.com/$GITHUB_ACCOUNT/devops-capstone-project.git" \
    -p branch=cd-pipeline \
    -p build-image=image-registry.openshift-image-registry.svc:5000/$SN_ICR_NAMESPACE/accounts:1 \
    -w name=pipeline-workspace,claimName=pipelinerun-pvc \
    -s pipeline \
    --showlog

oc get all -l app=accounts   # 배포가 실행 중인지 확인
```
- 실제 지속적 환경이라면 GitHub에 웹훅을 설정해 코드가 변경될 때마다 파이프라인이 자동 실행되게 하겠지만, 랩 환경은 일시적이므로 수동으로 파이프라인을 시작.
- 증빙: `tkn pipelinerun logs -L > pipelinerun.txt`로 전체 파이프라인 로그를 캡처.

### Exercise 10 — Pull Request 생성
```bash
git commit -am "Final CD pipeline"
git push
```
- pull request 생성 → 테스트 통과 후 병합 → 칸반 보드에서 스토리를 Done으로 이동 → `git checkout main && git pull && git branch -d cd-pipeline`로 정리.

## 요약
- 이 랩은 Tekton Catalog의 `git-clone`·`flake8`·`buildah`·`openshift-client` ClusterTask와 직접 작성한 `nose` Task를 조합해, clone → (lint‖tests 병렬) → build → deploy 순서의 완전한 CD 파이프라인을 `tekton/pipeline.yaml`과 `tekton/tasks.yaml`에 구성하고, `deploy/deployment.yaml`의 이미지 플레이스홀더를 `sed`로 실행 시점에 치환하는 방식으로 Kubernetes 배포까지 자동화함으로써, DevOps 캡스톤 프로젝트의 마지막 개발 스토리이자 Sprint 3을 완료한다.
