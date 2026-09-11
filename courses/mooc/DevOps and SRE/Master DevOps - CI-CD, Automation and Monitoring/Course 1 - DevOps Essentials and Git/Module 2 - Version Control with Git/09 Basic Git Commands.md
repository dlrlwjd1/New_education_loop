# Basic Git Commands

## 개요
- 저장소 초기화·클론부터 스테이징·커밋·로그 확인·브랜치 조작까지 Git 기본 명령어 실습.

## 내용
### 저장소 시작하기

```bash
mkdir my-devops && cd my-devops
git init                          # 새 저장소 초기화
git clone <repository-URL>        # 기존 저장소 복제(전체 이력 포함)
```

### 변경 추적·스테이징·커밋

```bash
git status                # 변경 상태 확인
git add <file>             # 특정 파일 스테이징
git add .                  # 전체 파일 스테이징
git commit -m "first commit"       # 스테이징된 변경 커밋
git commit -a -m "adding all files" # 추적 중인 파일을 한번에 스테이징+커밋
```

### 파일 삭제

```bash
git rm <file>       # 저장소와 파일시스템에서 파일 삭제
git rm -f <file>    # 스테이징된 파일도 강제 삭제
```

### 이력 확인

```bash
git log             # 최근 커밋 목록
git log --oneline   # 한 줄 요약 이력
git log -p          # 커밋에서 무엇이 변경/삭제됐는지 상세히 표시
git log --graph     # 브랜칭·머징을 그래프로 시각화
```

### 브랜치 작업

```bash
git branch <name>          # 새 브랜치 생성 (예: first-branch)
git branch                  # 브랜치 목록 확인
git checkout <name>         # 브랜치 전환
git checkout -b <name>      # 브랜치 생성과 동시에 전환 (예: second-branch)
git branch -d <name>        # 브랜치 삭제
git switch master           # (또는 git checkout master) 메인 브랜치로 이동
```

## 요약
- `init`/`clone`으로 시작해 `status`→`add`→`commit`으로 변경을 기록하고, `log`(`--oneline`, `-p`, `--graph`)로 이력을 확인하며, `branch`/`checkout`/`switch`로 독립적인 작업 흐름을 만드는 것이 Git의 일상적인 기본 사이클이다.
