# Git Workflows - Adding Files to Staging Area

## 개요
- 로컬 저장소 생성부터 사용자 설정, 파일 추적·스테이징·커밋·커밋 메시지 수정까지 전체 Git 워크플로우 실습의 시작 부분.

## 내용
### 저장소 초기화와 사용자 설정

```bash
mkdir mydir && cd mydir
# index1.html, index2.html 파일 생성

git init                                    # 로컬 저장소(.git) 생성

# 커밋 기록에 남을 사용자 정보 설정 (1회성 작업)
git config --global user.name "admin"
git config --global user.email "admin@gmail.com"
```

### 파일 상태 확인과 스테이징

```bash
git status         # 추적되지 않은 파일은 빨간색으로 표시
git add index1.html index2.html   # 또는
git add .           # 모든 파일을 한 번에 스테이징

git status          # 스테이징된 파일은 초록색("new file")으로 표시
```

### 커밋

```bash
git commit -m "added files"   # 스테이징 영역의 스냅샷을 로컬 저장소에 저장
git ls-files                    # 로컬 저장소에 있는 파일 목록 확인
git log --oneline               # 커밋 ID와 메시지 확인
```

- 커밋 메시지를 주지 않으면 Git이 편집기(Nano 등)를 열어 메시지 입력을 요구한다.

### 커밋 메시지 수정

```bash
git commit --amend   # 편집기가 열리며 메시지를 수정 가능 (예: "added files index1 and index2")
git log --oneline     # 수정된 메시지 확인
```

## 요약
- `git init` → `git config`(사용자 설정) → `git status`/`git add`(스테이징) → `git commit`(저장)의 흐름이 로컬 버전 관리의 기본이며, `git commit --amend`로 마지막 커밋 메시지를 언제든 고칠 수 있다.
