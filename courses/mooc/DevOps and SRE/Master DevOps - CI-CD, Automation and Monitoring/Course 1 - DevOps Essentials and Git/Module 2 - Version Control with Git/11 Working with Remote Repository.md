# Working with Remote Repository

## 개요
- GitHub에 원격 저장소를 만들고 로컬 Git 저장소와 연결해 push/pull하는 실습 데모.

## 내용
### 1. GitHub에 원격 저장소 생성
- github.com에 가입 → 우측 상단 `+` 아이콘 → **New repository**
- 저장소 이름 지정 (예: `my-first-repo`), 설명은 선택사항
- 로컬에서 코드를 푸시할 것이므로 "Initialize this repository with a README"는 체크하지 않음

### 2. 로컬 저장소 초기화 및 첫 커밋

```bash
cd my-folder
git init
echo "내용" > demo.txt
git status
git add demo.txt
git commit -m "initial commit"
```

### 3. 원격 저장소 연결 및 푸시

```bash
git remote add origin <원격저장소URL>
git remote -v                        # 원격 연결 확인
git push -u origin main              # (기본 브랜치가 master면 master)
```

- 인증 오류(authentication failed) 발생 시: GitHub → Settings → Developer settings → Personal access tokens (classic) → **Generate new token**로 토큰을 발급받아 비밀번호 대신 사용한다.

### 4. 변경 후 재커밋·푸시

```bash
# demo.txt 수정 후
git add demo.txt
git commit -m "updated demo.txt with a new line"
git push
```

### 5. 원격 변경사항 가져오기·확인

```bash
git pull      # 로컬을 원격 최신 상태로 동기화
git log       # 최신 커밋 확인
git status    # 현재 상태 확인
```

## 요약
- GitHub에서 원격 저장소를 만들고, 로컬에서 `git init`→`add`→`commit`한 뒤 `git remote add origin`으로 연결하고 `git push -u origin main`으로 첫 푸시를 하면, 이후에는 `add`→`commit`→`push`/`pull`만 반복하면 된다. 인증에는 비밀번호 대신 Personal Access Token을 사용한다.
