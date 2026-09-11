# Demo - Working with Branches using Git Commands

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/getting-started-with-git-and-github/lecture/b690l/demo-working-with-branches-using-git-commands)

## 개요
- git branch 명령을 실행한 다음 원하는 브랜치 이름을 입력하여 새 브랜치를 생성하면 메인 코드에 영향을 주지 않고 작업할 수 있습니다.예를 들어 이름이 PATCH-1-ADDING-HEADERS 인 브랜치를 만들려면 git branch PATCH-1-ADDING-HEADERS 를 실행한다고 가정해 보겠습니다.

## 내용
- git branch 명령을 실행한 다음 원하는 브랜치 이름을 입력하여 새 브랜치를 생성하면 메인 코드에 영향을 주지 않고 작업할 수 있습니다.예를 들어 이름이 PATCH-1-ADDING-HEADERS 인 브랜치를 만들려면 git branch PATCH-1-ADDING-HEADERS 를 실행한다고 가정해 보겠습니다.
- 이제 PATCH-1-ADDING-HEADERS 브랜치를 메인 브랜치와 병합하는 데 집중해 보겠습니다.이를 위해서는 먼저 git checkout main 명령어를 실행하여 메인 브랜치로 다시 전환해야 합니다.
- PATCH-1-ADDING-HEADERS 헤더 변경 사항이 이제 메인 브랜치에 있는 index.html 파일에 통합되었습니다.
- 이 명령은 PATCH-1-ADDING-HEADERS 브랜치에서 병합된 변경 사항을 포함하여 메인 브랜치를 원격 리포지토리로 푸시합니다.
- 먼저 git branch 명령어로 브랜치를 나열한 다음 git branch PATCH-1-ADDING-HEADERS 명령을 사용하여 PATCH-1-ADDING-HEADERS 브랜치를 생성했습니다.
- 그런 다음 git checkout PATCH-1-ADDING-HEADERS 명령을 사용하여 새 브랜치로 전환하고 git status, git add index.html, git commit -m 명령을 사용하여 변경 작업을 수행하고 단계적으로 변경했습니다.
- 마지막으로 git checkout main과 git merge PATCH-1-ADDING-HEADERS 명령을 사용하여 PATCH-1-ADDING-HEADERS 버전을 메인 브랜치와 병합했습니다.

## 예시
- [음악] 비디오 데모에 오신 것을 환영합니다: Git 명령어를 사용하여 브랜치 작업하기.

## 요약
- 그런 다음 git checkout PATCH-1-ADDING-HEADERS 명령을 사용하여 새 브랜치로 전환하고 git status, git add index.html, git commit -m 명령을 사용하여 변경 작업을 수행하고 단계적으로 변경했습니다. 마지막으로 git checkout main과 git merge PATCH-1-ADDING-HEADERS 명령을 사용하여 PATCH-1-ADDING-HEADERS 버전을 메인 브랜치와 병합했습니다.
