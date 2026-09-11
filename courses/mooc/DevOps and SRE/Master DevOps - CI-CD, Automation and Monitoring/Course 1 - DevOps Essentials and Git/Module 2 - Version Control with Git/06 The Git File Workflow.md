# The Git File Workflow

## 개요
- Git 프로젝트에서 파일이 Workspace → Stage → Local Repository → Remote Repository로 이동하는 흐름과 관련 명령어(clone, commit, push, fetch, pull)를 설명.

## 내용
### 주요 구성요소
- **Remote Repository** — 협업자들이 변경사항을 올리고 저장하는 서버(GitHub, GitLab, Bitbucket 등)
- **Local Repository** — 개발자 개인의 프로젝트 사본, 오프라인 작업 후 원격과 동기화 가능
- **Workspace** — 파일을 생성·편집·삭제하는 활성 작업 디렉터리
- **Staging Area(Stage)** — 커밋할 변경사항을 선택·준비하는 체크리스트 같은 공간

### 관련 명령어
- **`git clone`** — 원격 저장소의 전체 이력을 포함한 완전한 로컬 사본 생성 (기존 프로젝트에 참여할 때)
- **`git commit`** — 스테이징된 변경사항을 설명 메시지와 함께 로컬 저장소에 저장
- **`git push`** — 로컬 커밋을 원격 저장소로 전송해 다른 사람도 볼 수 있게 함
- **`git fetch`** — 원격 저장소의 업데이트를 로컬로 가져오되, 작업 디렉터리에 자동 반영하지는 않음 (우편함 확인만 하는 것과 유사)
- **`git pull`** — fetch + 자동 병합을 한 번에 수행, 로컬 작업 사본을 원격과 완전히 동기화

## 요약
- 파일은 Workspace(작업) → Stage(선별) → Local Repository(commit) → Remote Repository(push)로 흐르며, fetch는 "확인만", pull은 "확인+병합까지" 수행한다는 차이를 이해하는 것이 핵심이다.
