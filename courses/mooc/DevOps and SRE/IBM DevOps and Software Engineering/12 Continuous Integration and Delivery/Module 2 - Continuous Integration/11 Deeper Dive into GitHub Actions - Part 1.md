# Deeper Dive into GitHub Actions: Part 1

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/lNsQx/deeper-dive-into-github-actions-part-1)

## 개요
- GitHub Actions 저장소 설정 방법을 구체화하고, 워크플로우 구성 요소 중 **Event(이벤트)**와 **Job(작업)**을 예시 YAML과 함께 심화.

## 내용
### 저장소 설정 방법
1. 프로젝트 루트에 **`.github/workflows`** 폴더 생성 — 이미 이슈 템플릿을 담은 `.github` 폴더가 있다면 그 아래에 `workflows` 폴더만 만들면 됨.
2. 그 폴더 안에 워크플로우를 담은 `.yaml` 파일을 하나 이상 배치.
3. 설정한 방식에 따라 지정된 이벤트가 발생하면 워크플로우가 실행됨 — 예: master 브랜치에 push하면 빌드가 실행되거나, Pull Request를 제출하면 테스트가 실행됨.
- job은 가상 머신이나 Docker 컨테이너 안의 격리된 환경에서 실행됨. 이것이 필요한 설정의 전부.

### 구성 요소 1 — Event(이벤트)
- 이벤트는 워크플로우 실행을 활성화하는 것 — 현재 워크플로우를 트리거할 수 있는 이벤트가 35가지 있음. 이슈·라벨·마일스톤을 수정하거나 저장소를 fork하는 것도 이벤트가 될 수 있음.
- 가장 흔히 쓰이는 이벤트: Pull Request 수행, 브랜치로 코드 push, 새 릴리스 생성.
- **예시 1 — Pull Request 이벤트** (master 브랜치를 대상으로 Pull Request가 열리거나 재오픈될 때 실행, CI 파이프라인 트리거에 적합):
```yaml
on:
  pull_request:
    types: [opened, reopened]
    branches:
      - master
```
- 모든 이벤트는 `on:` 키워드로 시작하고 이벤트의 키워드(여기서는 `pull_request`)가 뒤따름. 일부 이벤트는 `types`를 가짐(여기서는 열림/재오픈). Pull Request 이벤트의 또 다른 입력은 모니터링할 브랜치 목록(여기서는 master).
- **예시 2 — Push 이벤트** (Pull Request 병합을 포함해 main 브랜치에 push될 때마다 실행, CD 파이프라인 트리거에 적합):
```yaml
on:
  push:
    branches:
      - main
```
- 역시 `on:` 키워드로 시작하고 이벤트 키워드는 `push`, 그다음 브랜치 목록(여기서는 main만 포함하지만 더 많이 포함할 수도 있음).
- **예시 3 — Release 이벤트** (릴리스가 게시(published)될 때마다 실행 — `created` 같은 다른 타입도 지정 가능. 패키징 워크플로우 트리거에 적합): Python 코드를 PyPI에 게시하거나, Java 코드를 Maven에 게시하거나, Docker 컨테이너를 빌드해 Docker Hub에 게시하는 등 릴리스 생성 시 자동화하고 싶은 활동에 활용.

### 구성 요소 2 — Job(작업)
- Job은 실행에 동일한 러너를 사용하는 일련의 step들의 집합. 각 워크플로우는 여러 job을 가질 수 있어 워크플로우당 job 하나로 제한되지 않음 — job과 워크플로우를 구성할 때 큰 유연성을 제공.
- Job 이름은 올바른 YAML 문법을 지키는 한 원하는 대로 지을 수 있음.
```yaml
jobs:
  build:
    # ...
  publish:
    needs: build
    # ...
```
- 기본적으로 job들은 **병렬로 실행**되지만, `needs` 키워드로 job 간 의존성을 지정하면 그렇지 않게 만들 수 있음. 위 예시에서 `publish` job은 `needs` 키워드로 `build` job에 의존한다고 지정 — 이는 GitHub Actions에게 `build` job을 먼저 실행하라고 알려줌. `publish` job은 의존하는 `build` job이 성공적으로 완료될 때까지 실행되지 않음.
- 각 job은 러너, 선택적으로 필요한 서비스, 그리고 실행할 일련의 step을 포함(이 구성 요소들은 이후 강의에서 다룸).

## 요약
- GitHub Actions는 `.github/workflows` 폴더에 워크플로우 YAML 파일을 두는 것만으로 설정되며, 워크플로우는 `on:` 키워드로 정의되는 **Event**(Pull Request·Push·Release 등 35가지 종류)에 의해 트리거되고, **Job**은 동일한 러너에서 실행되는 step들의 집합으로서 기본적으로 병렬 실행되지만 `needs` 키워드로 다른 job에 대한 의존성을 지정하면 순차적으로 실행되도록 만들 수 있다.
