# Setting Up Git Repository

## 개요
- 코드 생성을 시작하기 전에 Git repository와 GitHub remote를 설정하는 강의.
- Claude Code 채팅 인터페이스 안에서 `git status`, commit, remote 추가, push 같은 Git 작업을 요청할 수 있음을 보여준다.
- 초기 Next.js 설정을 commit/push한 뒤, `current-feature.md`의 history에도 초기 설정을 기록한다.

## 내용

### Git repository를 먼저 설정하기
모든 프로젝트는 본격적인 기능 개발 전에 Git을 설정해두는 것이 좋다.

이번 강의 흐름:
1. GitHub에서 새 remote repository 생성
2. local repository 상태 확인
3. 초기 파일 commit
4. remote origin 추가
5. `main` branch push
6. `current-feature.md` history 업데이트
7. 변경사항 다시 commit/push

### GitHub remote repository 생성
GitHub에서 새 repository를 만든다.

예시 설정:
- Repository name: `DevStash`
- Description: `Developer hub for snippets, commands, prompts, and more`
- Visibility: private

강사는 나중에 코스용 repository로 public 전환할 예정이지만, 처음에는 private으로 만든다.

remote URL은 SSH 또는 HTTPS 중 원하는 방식으로 복사한다.

```text
git@github.com:username/dev-stash.git
```

강사는 GitHub 계정이 여러 개라 SSH alias가 들어간 remote URL을 사용하지만, 일반적인 환경에서는 GitHub가 보여주는 URL을 그대로 쓰면 된다.

### Claude Code에서 Git 상태 확인
Git 명령을 터미널에서 직접 실행하지 않고, Claude Code에게 자연어로 요청할 수 있다.

예시:

```text
What is the status of Git?
```

Claude Code는 내부적으로 다음 명령을 실행한다.

```bash
git status
```

확인되는 상태:
- 현재 branch: `main`
- 아직 commit 없음
- 모든 파일이 untracked 상태

### 초기 commit 생성
Claude Code가 initial commit을 만들지 물어보면, commit message를 지정해서 진행한다.

예시 commit message:

```text
chore: initial Next.js and Tailwind setup
```

강사는 Git 명령도 자동 승인하지 않고, 매번 권한 확인을 받는 설정을 유지한다.
특히 `git add`, `git commit`, `git push`는 프로젝트 히스토리에 영향을 주므로 확인 후 실행하는 편이 안전하다.

### remote origin 추가
초기 commit 후 remote repository를 추가한다.

직접 명령으로는 다음과 같다.

```bash
git remote add origin git@github.com:username/dev-stash.git
```

Claude Code에는 자연어로 요청할 수 있다.

```text
Add the remote repo: git@github.com:username/dev-stash.git
```

### main branch push
remote를 추가한 뒤 `main` branch를 push한다.

```bash
git push -u origin main
```

push가 성공하면:
- local `main` branch가 `origin/main`을 tracking
- GitHub repository에 초기 Next.js 파일들이 올라감

### current-feature.md history 업데이트
초기 설정도 프로젝트 히스토리에 남긴다.

요청 예:

```text
Add the initial setup of Next.js to the history in @context/current-feature.md
```

Claude Code는 `current-feature.md` 하단의 history comment를 지우고, 초기 설정 항목을 추가한다.

예:

```md
## History

- Initial setup: Next.js 16
```

그 다음 이 변경사항도 commit하고 `main`에 push한다.

### 채팅 인터페이스에서 Git을 다룰 때의 태도
Claude Code로 Git 작업을 할 수는 있지만, 반드시 그렇게 해야 하는 것은 아니다.

가능한 방식:
- 터미널에서 직접 Git 명령 실행
- VS Code Source Control 사용
- Claude Code에게 자연어로 Git 작업 요청

중요한 점:
- 어떤 명령이 실행되는지 diff와 command를 확인한다.
- commit/push는 자동화하더라도 승인 절차를 유지한다.
- commit message는 명확한 prefix를 사용한다.
- 불필요한 generated 문구는 넣지 않는다.

### 다음 단계
이제 프로젝트는 다음 상태가 되었다.

- Next.js app setup 완료
- Git local repository 설정 완료
- GitHub remote repository 연결 완료
- 초기 commit/push 완료
- `current-feature.md` history 업데이트 완료

다음 강의에서는 DevStash의 dashboard UI를 시작한다.
전체 앱을 모두 프로토타이핑하지 않고, 먼저 base UI와 dashboard 느낌을 잡는다.
마음에 드는 UI가 나오면 screenshot을 찍어 context에 포함할 수도 있다.

## 예시

초기 Git 설정 흐름:

```bash
git status
git add .
git commit -m "chore: initial Next.js and Tailwind setup"
git remote add origin git@github.com:username/dev-stash.git
git push -u origin main
```

`current-feature.md` history 예:

```md
## History

- Initial setup: Next.js 16
```

추가 변경사항 push 흐름:

```bash
git add context/current-feature.md
git commit -m "chore: update feature history"
git push
```

## 요약
- 기능 개발 전에 GitHub remote repository와 local Git history를 먼저 설정한다.
- Claude Code 채팅에서도 Git 상태 확인, commit, remote 추가, push를 요청할 수 있다.
- Git 작업은 자동 승인보다 매번 확인하고 실행하는 편이 안전하다.
- 초기 Next.js/Tailwind 설정을 commit/push한 뒤, `current-feature.md` history에도 기록한다.
- 다음 단계는 dashboard UI의 base prototype을 만드는 것이다.
