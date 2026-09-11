# Creating Tasks for Quality Checks and Testing

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/4UUix/creating-tasks-for-quality-checks-and-testing)

## 개요
- 기존 쉘 스크립트를 그대로 활용해 테스트(nosetests)와 린트(flake8) 커스텀 Task를 직접 작성하고, Kubernetes Secret에서 환경 변수를 주입하는 방법, 그리고 `runAfter`로 병렬 실행을 구성하는 법을 설명.

## 내용
### 파이프라인의 실제 모습 — 선형이 아니라 병렬
- 지금까지 체크아웃 단계를 두 가지 방법으로 만드는 것을 봤으니 이제 나머지 단계를 만들 차례.
- 파이프라인을 체크아웃 → 린트 → 테스트 → 빌드 → 배포의 선형적인 진행으로 생각할 수 있지만, 실제로 린트 실행과 단위 테스트 같은 품질 검사는 완전히 독립적 — 그래서 파이프라인은 품질 검사와 단위 테스트가 **병렬로** 실행되는 모습일 수 있음. 둘 중 하나가 실패하면 파이프라인이 멈추지만, 실행 순서 자체는 중요하지 않음. 이는 Tekton의 병렬 처리를 활용해 파이프라인 실행 속도를 높일 수 있게 해줌.

### 테스트 Task 직접 작성하기 — nosetests
- 테스트는 모든 CI/CD 파이프라인에 결정적으로 중요 — CI 파이프라인에서는 단위 테스트를, CD 파이프라인에서는 통합 테스트를 수행. CD 파이프라인에서는 코드가 배포되기 전 문제를 확인할 마지막 기회.
- Tekton Catalog에 많은 테스트 도구가 있지만, 쓰고 있는 도구가 카탈로그에 없다면 이미 쓰고 있는 도구를 자동화하는 자신만의 Task를 만들면 됨.
- 이미 가지고 있을 법한 스크립트로 시작: pip와 wheel을 최신 버전으로 업그레이드 → pip로 필요한 Python 패키지 의존성 설치 → `nosetests`(Python 테스트 러너)를 실행하며 출력을 컬러풀하게 만드는 파라미터 전달.
```yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: nose
spec:
  workspaces:
    - name: source
  steps:
    - name: nosetests
      image: python:3.9-slim
      workingDir: $(workspaces.source.path)
      script: |
        python -m pip install --upgrade pip wheel
        pip install -r requirements.txt
        nosetests --with-spec --spec-color
```
- **워크스페이스**: 코드에 대해 테스트를 실행해야 하므로, 파이프라인의 이전 Task가 코드를 넣어둔 워크스페이스가 필요 — 많은 Task가 코드용으로 사용하는 공통 이름인 `source`로 명명.
- **`workingDir`**: 테스트 명령이 코드와 같은 디렉터리에서 실행되도록, `$(workspaces.source.path)`로 워크스페이스 루트 경로를 지정.
- **`script`**: 세로 막대(`|`)로 스크립트가 이어지는 줄에 인라인으로 기술됨을 나타내고, 그 아래 기존 스크립트를 그대로 붙여넣음.
- 이미지는 `python:3.9-slim`을 사용 — 개발자들이 개발할 때 쓰는 것과 같은 이미지라서 테스트할 때 놀랄 일을 최소화.

### 환경 변수로 데이터베이스 URI 전달하기
- 테스트 케이스가 데이터베이스를 필요로 하고, 데이터베이스 URI는 보통 환경 변수로 지정됨 — 클라우드 네이티브 애플리케이션은 12-factor 가이드라인을 따라야 하며, 그중 **3번째 요소(Config)**는 설정을 환경(environment)에 지정해야 한다고 명시. 이는 마이크로서비스 아키텍처에 널리 채택되어 있고, 모든 클라우드 제공자는 데이터베이스 URI 같은 것을 런타임에 환경 속성으로 주입하는 방법을 제공.
- Kubernetes 클러스터에 `redis-creds`라는 Secret이 정의되어 있고, 그 안에 `database_uri`라는 데이터 값(base64 인코딩된 자격 증명과 URL)이 있다고 가정. 테스트 케이스는 이를 모두 대문자인 `DATABASE_URI` 환경 변수로 사용할 수 있기를 기대.
```yaml
      env:
        - name: DATABASE_URI
          valueFrom:
            secretKeyRef:
              name: redis-creds
              key: database_uri
```
- 환경 변수 이름은 테스트 케이스가 기대하는 이름(`DATABASE_URI`, 모두 대문자)과 같아야 함. 값은 Secret에서 옴 — Secret 이름은 `redis-creds`, 데이터 키는 `database_uri`. 이것이 Secret 안의 키 값을 테스트가 보는 환경 변수 값에 매핑하는 방법.
- 이 환경 변수 정의는 Step 안 어디에든 삽입 가능 — 위 예시에서는 `script` 바로 위에 추가. 이렇게 하면 이 테스트 케이스가 실행될 때 `DATABASE_URI`라는 환경 변수를 사용해 데이터베이스에 연결 가능. 모든 클라우드 제공자가 런타임에 환경 속성을 주입하는 방법을 가지고 있으므로, 이 기법은 클라우드 환경에서 Tekton 파이프라인을 실행할 때도 동일하게 사용 가능.

### 품질 검사 Task 직접 작성하기 — flake8
- 린트 같은 품질 검사도 같은 방법으로 자신만의 Task를 만들 수 있음. 테스트 스크립트와 마찬가지로, pip와 wheel을 최신 버전으로 업그레이드 → pip로 필요한 Python 패키지 의존성 설치 → `flake8` 명령을 실행해 품질 문제를 확인.
```yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: flake8
spec:
  workspaces:
    - name: source
  steps:
    - name: flake8
      image: python:3.9-slim
      workingDir: $(workspaces.source.path)
      script: |
        python -m pip install --upgrade pip wheel
        pip install -r requirements.txt
        flake8 service
```
- 개발자가 로컬에서 코드를 린트하는 데 쓰는 것과 정확히 같은 명령을 Tekton Task에도 그대로 사용 가능. 인자를 파라미터로 받도록 만들어 더 범용적으로 만들 수도 있음 — 얼마나 유연하게 만들지는 선택.

### 파이프라인에 두 새 Step 추가하기 — 병렬 실행
```yaml
  tasks:
    - name: clone
      taskRef:
        name: git-clone
      # ...

    - name: tests
      runAfter: ["clone"]
      workspaces:
        - name: source
          workspace: pipeline-workspace
      taskRef:
        name: nose

    - name: lint
      runAfter: ["clone"]
      workspaces:
        - name: source
          workspace: pipeline-workspace
      taskRef:
        name: flake8
```
- 새 파이프라인 Task를 정의하고 이름 부여 — `tests`는 방금 작성한 `nose` Task를 참조. 이전 Task로부터 코드를 공유받기 위해 필요한 워크스페이스를 지정.
- 마지막으로 **언제** 이 파이프라인 Task를 실행할지 지정 — `clone` Task **이후**에 실행하도록 지정(GitHub에서 코드를 클론해야 그 코드에 대해 테스트를 실행할 수 있으므로).
- `lint` Task도 거의 동일하되 이름이 `lint`이고 앞서 작성한 `flake8` Task를 참조. 이 두 Task는 **둘 다 `clone` Task 이후에 실행하도록 지정**되어 있으므로, `clone` Task가 완료된 후 **병렬로** 실행됨.

## 요약
- Tekton Catalog에 필요한 Task가 없다면 기존에 쓰던 쉘 스크립트를 `script:` 필드에 그대로 붙여넣어 `nosetests`나 `flake8` 같은 커스텀 Task를 직접 만들 수 있고, `workingDir: $(workspaces.source.path)`로 워크스페이스 안에서 명령을 실행하며, Kubernetes Secret의 값을 `env.valueFrom.secretKeyRef`로 매핑해 `DATABASE_URI` 같은 환경 변수를 테스트에 전달할 수 있고, 두 Task가 서로 의존하지 않는다면(`tests`, `lint`) 둘 다 `runAfter: ["clone"]`으로 지정해 클론 완료 후 병렬로 실행되도록 만들어 파이프라인 속도를 높일 수 있다.
