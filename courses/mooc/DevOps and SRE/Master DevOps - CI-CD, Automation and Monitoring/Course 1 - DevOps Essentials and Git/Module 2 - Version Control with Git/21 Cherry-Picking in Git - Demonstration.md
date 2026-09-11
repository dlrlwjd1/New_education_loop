# Cherry-Picking in Git - Demonstration

## 개요
- `dev` 브랜치에서 발견·수정한 버그를 `feature` 브랜치에는 병합 없이 cherry-pick으로만 옮기는 실습.

## 내용
### 시나리오 준비

```bash
mkdir cherry-pick-demo && cd cherry-pick-demo
git init
echo "..." > app.py
git add app.py
git commit -m "initial commit"

# dev 브랜치 — 버그가 있는 기능
git checkout -b dev
echo "print('buggy feature')" >> app.py
git add app.py
git commit -m "add buggy feature"

# feature 브랜치 — 별도의 신규 기능 개발
git checkout master
git checkout -b feature-branch
echo "..." > feature.py
git add feature.py
git commit -m "add new feature code"
```

### 버그 수정 후 cherry-pick으로 이식

```bash
# dev 브랜치에서 버그 수정
git checkout dev
echo "# bug fixed" >> app.py
git add app.py
git commit -m "bug fixed"

# 수정 커밋의 해시 확인
git log --oneline

# feature 브랜치로 이동해 그 커밋만 cherry-pick
git checkout feature-branch
git cherry-pick <커밋해시>

# 결과 확인
cat app.py
git log --oneline   # feature-branch 이력에 버그 수정 커밋이 포함됨
```

### Cherry-pick 중 충돌 발생 시

```bash
git status                       # 충돌 파일 확인
# 파일을 직접 열어 충돌 부분 수동 해결
git add app.py
git cherry-pick --continue       # cherry-pick 프로세스 재개·완료

git log --oneline                # cherry-pick된 커밋이 feature-branch 이력에 반영됨
```

## 요약
- `git cherry-pick <해시>`로 dev 브랜치의 특정 수정 커밋만 feature 브랜치에 그대로 옮길 수 있으며, 충돌이 나면 수동 해결 후 `git add`→`git cherry-pick --continue`로 과정을 완료한다.
