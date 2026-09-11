# Git Feature Branch Workflow: Making a Pull Request

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/continuous-integration-and-continuous-delivery-ci-cd/lecture/wlDcl/git-feature-branch-workflow-making-a-pull-request)

## 개요
- Git Feature Branch 워크플로우의 마지막 두 단계인 **Pull Request 제출**과 **병합** 과정을 구체적인 명령 순서로 정리.

## 내용
### Pull Request 만들기 전 준비 과정
1. main 브랜치를 체크아웃하고 코드의 새 변경 사항을 로컬 작업 공간으로 pull.
2. 작업해온 feature 브랜치로 전환한 뒤, main 브랜치의 새 코드를 그 브랜치로 병합 — 이를 통해 자신의 브랜치에 main의 최신 변경 사항이 포함되도록 보장.
3. 머지 충돌이 해결되고 이 과정이 완료되면, 로컬 브랜치를 원격 저장소로 push — 이 간단한 명령으로 원격 저장소에 새 브랜치를 만들고 로컬 브랜치를 추적하도록 설정 가능.
4. 마지막으로 Pull Request를 만들어 리뷰받고 원격 저장소에 병합.

### Pull Request 전 체크리스트
- **main 브랜치로 전환한 뒤 `git pull`을 실행**해 로컬 작업 공간에 main 브랜치의 최신 코드를 반영 — main 브랜치는 변경 사항이 만들어질 때마다 개발자들이 항상 다시 병합하기 때문에 가장 최신 코드를 담고 있음.
- **업데이트된 main 브랜치를 자신의 작업 브랜치로 병합**해 작업 브랜치도 최신 코드를 갖도록 함 — 이 과정에서 머지 충돌이 생기면 수동으로 해결해야 함.
- **업데이트된 브랜치를 원격 저장소로 push** — 이제 main 브랜치로 다시 병합될 준비가 됨.

### Pull Request 병합 후 정리
- Pull Request가 병합된 후에는 main 브랜치로 전환해 최신 코드(자신의 최근 변경 사항이 포함된)를 pull.
- 작업했던 오래된 feature 브랜치는 삭제 — 그 변경 사항이 이미 main 브랜치에 병합되었기 때문.
- 새 기능 개발을 시작하려면 새 feature 브랜치를 만들고 체크아웃하면 됨.

## 요약
- Git Feature Branch 워크플로우의 마지막 두 단계는 main 브랜치의 최신 코드를 작업 브랜치로 병합해 충돌을 해결한 뒤 원격에 push하고 Pull Request를 제출·병합하는 것이며, 병합 후에는 반드시 main 브랜치에서 최신 코드를 다시 pull하고 다 쓴 feature 브랜치는 삭제한 뒤 다음 기능을 위한 새 브랜치로 다시 시작해야 한다.
