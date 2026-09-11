# Resolving Merge Conflicts - Creating Branches

## 개요
- Login 페이지와 Header 기능을 각각 브랜치에서 개발하며 같은 파일(`login.html`)을 건드려 충돌을 유발하는 시나리오의 준비 단계.

## 내용
### 시나리오
- 로그인 페이지(Login page)와 헤더(Header) 두 기능을 별도 브랜치에서 개발하는데, 팀원들이 같은 파일 `login.html`을 수정해 머지 충돌이 발생하는 상황.

### 진행 단계

```bash
# 1. 저장소 초기화 및 초기 커밋
git init
echo "..." > readme.md
git add readme.md
git commit -m "initial commit with readme"

git branch                       # 현재 브랜치 확인 (main/master)

# 2. Login 기능 브랜치 생성 및 작업
git checkout -b feature-login
echo "<html>...</html>" > login.html
git add login.html
git commit -m "added login page"
git branch                       # feature-login 확인

# 3. main으로 병합
git checkout master
git merge feature-login
ls                                 # login.html, readme.md 확인

# 4. Header 기능 브랜치 생성 — login.html을 다시 수정 (충돌 유발)
git checkout -b feature-header
echo "<header>header content</header>" >> login.html
git add login.html
git commit -m "added header to login page"

git checkout master   # 다음 강의에서 이 브랜치를 병합하며 충돌 발생
```

## 요약
- feature-login 브랜치는 문제 없이 master에 병합되지만, feature-header 브랜치가 같은 파일(`login.html`)의 같은 부분을 다시 수정했기 때문에 master에 병합을 시도하면 충돌이 발생하는 상황을 준비했다 — 실제 충돌 해결은 다음 강의에서 다룬다.
