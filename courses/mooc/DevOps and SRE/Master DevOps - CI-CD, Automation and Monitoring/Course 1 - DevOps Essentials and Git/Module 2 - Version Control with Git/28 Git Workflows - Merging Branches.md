# Git Workflows - Merging Branches

## 개요
- 브랜치 전환·생성·삭제, 병합(fast-forward), 그리고 같은 이름의 파일이 서로 다른 브랜치에서 다르게 수정됐을 때 발생하는 충돌 해결까지 실습.

## 내용
### 브랜치 전환과 작업

```bash
git checkout test           # test 브랜치로 전환
# 브랜치별로 파일이 독립적 — test에서 만든 파일은 master에 없음
echo "..." > file_branch
git add file_branch
git commit -m "add file on test branch"

git checkout master          # master로 돌아가면 file_branch가 보이지 않음
```

### 브랜치 병합과 삭제

```bash
git merge test        # test의 커밋·파일을 master로 병합 (fast-forward)
git branch -d test     # 병합이 끝난 브랜치 삭제
```

### 충돌이 발생하는 상황
- master에서 `login` 파일을 만들고 코드를 추가해 커밋(dev 브랜치에는 반영 안 됨).
- 15일 뒤 같은 작업을 다시 해야 해서 `dev` 브랜치로 전환 → **같은 이름의 새 `login` 파일**을 만들고 다른 코드(로그인 버튼, 비밀번호 찾기, 제출 버튼)를 작성해 커밋.
- master로 돌아가 `git merge dev`를 실행하면, 같은 이름의 파일이 서로 다른 내용으로 두 브랜치에 존재하기 때문에 Git이 어떻게 합쳐야 할지 몰라 **충돌(conflict)**이 발생한다.

```bash
git checkout master
git merge dev
# => CONFLICT: Merge conflict in login
```

### 충돌 해결

```bash
# login 파일을 열면 충돌 마커가 보임
# <<<<<<< HEAD  (master 쪽 변경)
# ...
# =======
# ...
# >>>>>>> dev   (dev 쪽 변경)

# 원하는 내용으로 직접 편집해 마커 제거 후
git add login
git commit -m "resolve merge conflict"
```

## 요약
- 같은 이름의 파일이 서로 다른 브랜치에서 다르게 수정된 채 병합을 시도하면 Git은 어느 쪽 내용을 우선할지 스스로 판단하지 못해 충돌을 발생시키며, 충돌 마커가 있는 파일을 직접 편집해 원하는 내용으로 합친 뒤 `add`→`commit`으로 병합을 완료한다.
