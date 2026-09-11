# Setting Up Git Repository — 대화정리

## 개요

- 기능 개발 전에 Git의 초기 커밋과 GitHub remote를 준비하여 안정적인 기준선을 만든다.
- 초기 커밋은 복구 지점이면서 이후 기능 변경을 분리해서 검토할 수 있게 하는 출발점이다.
- Git history와 `current-feature.md`의 `History`는 목적이 다르므로 둘 다 관리한다.

## 내용

### 초기 커밋은 기능 개발의 기준선이다

Next.js와 Tailwind 초기 설정만 있는 상태라도 먼저 커밋한다. 이 커밋이 있으면 이후 기능 개발 중 문제가 발생했을 때 정상적인 초기 상태로 돌아갈 수 있다. 또한 이후 feature branch의 diff에 프로젝트 초기 설정이 섞이지 않아 실제 기능 변경만 검토하기 쉬워진다.

따라서 초기 커밋은 단순한 백업이 아니라 이후 명세 단위 작업이 출발하는 기준선(baseline)이다.

### local repository와 remote repository

로컬 Git 저장소는 현재 작업 공간의 변경 이력을 관리한다. GitHub remote에 push하면 같은 기준선을 다른 사람과 공유하고, 다른 컴퓨터에서도 이어서 작업하며, 로컬 환경에 문제가 생겼을 때 외부 이력에서 복구할 수 있다.

```text
local repository
  → commit으로 변경 이력 관리
  → push
GitHub remote
  → 공유·외부 보존·다른 환경과 동기화
```

### Git history와 프로젝트 History

Git 커밋 이력이 있어도 `current-feature.md`의 `History`에 초기 설정 완료를 별도로 기록한다.

- Git history: 어떤 파일이 어떻게 변경됐는지 보여 주는 기술적 이력
- `current-feature.md`의 `History`: 프로젝트에서 어떤 기능과 단계가 완료됐는지 보여 주는 의미적 이력

에이전트는 별도로 지시받지 않으면 모든 Git 커밋을 자동으로 분석하지 않는다. 반면 프로젝트 컨텍스트로 읽는 `current-feature.md`에 완료 상태를 요약하면 다음 세션에서도 진행 상황을 빠르게 복구할 수 있다.

`History` 갱신 역시 실제 프로젝트 변경이다. 이 변경을 다시 커밋하고 push해야 다른 작업자와 다른 환경도 같은 완료 상태를 보게 된다.

### Git 작업에는 승인이 필요하다

AI에게 자연어로 Git 명령을 요청할 수 있지만 다음 작업은 실행 전에 확인한다.

- `git add`: 의도하지 않은 파일이 커밋 범위에 포함될 수 있다.
- `git commit`: 변경이 프로젝트의 공식 로컬 이력으로 남는다.
- `git push`: 커밋이 remote에 공유되어 다른 사람과 환경에 영향을 준다.

Git은 되돌릴 수 있지만 이미 공유된 이력을 고치려면 추가 작업과 협업 조정이 필요하다. 따라서 대상 파일, diff, 현재 브랜치와 커밋 메시지를 검토한 뒤 승인한다.

## 예시

초기 기준선을 만들고 remote에 공유한다.

```bash
git status
git add .
git commit -m "chore: initial Next.js and Tailwind setup"
git remote add origin git@github.com:username/dev-stash.git
git push -u origin main
```

프로젝트의 의미적 이력도 기록한다.

```md
## History

- Initial setup: Next.js 16
```

그 문서 변경도 다시 커밋하고 push한다.

```bash
git add context/current-feature.md
git commit -m "chore: update feature history"
git push
```

## 요약

- 초기 커밋은 복구 지점이자 이후 기능 diff의 기준선이다.
- remote push는 기준선을 공유하고 로컬 밖에 보존한다.
- Git history는 파일 변경을, `current-feature.md`의 `History`는 완료된 프로젝트 상태를 설명한다.
- 문서의 History 갱신도 커밋·푸시해야 모든 환경에서 같은 상태를 볼 수 있다.
- AI에게 Git을 맡기더라도 대상 파일, diff, 브랜치와 커밋 메시지를 확인하고 승인한다.
