# Resolving Merge Conflicts - Conflict Resolution

## 개요
- 이전 강의에서 준비한 충돌 상황을 실제로 병합하고, 충돌 마커를 직접 수정해 해결한 뒤 브랜치를 정리하고 GitHub에 푸시하는 실습.

## 내용
### 충돌 발생과 해결

```bash
# master에서 직접 login.html에 footer 추가 (또 다른 변경)
echo "<footer>...</footer>" >> login.html
git add login.html
git commit -m "added footer to login page in master"

# feature-header 브랜치를 병합 시도 → 충돌 발생
git merge feature-header
# => CONFLICT (content): Merge conflict in login.html
```

- `login.html`을 열면 충돌 마커(`<<<<<<<`, `=======`, `>>>>>>>`)가 표시된다.
- 마커 사이의 내용을 직접 편집해 header와 footer 내용을 모두 유지하도록 수동으로 합친다.

```bash
git add login.html
git commit -m "resolve conflict by combining header and footer"
```

### 정리 및 GitHub 푸시

```bash
# 병합이 끝난 기능 브랜치 삭제
git branch -d feature-login
git branch -d feature-header

# 원격 저장소 연결 (기존 origin이 있으면 제거 후 재등록)
git remote -v
git remote remove origin
git remote add origin <저장소URL>

git push -u origin master
```

## 요약
- 머지 충돌은 파일 안의 충돌 마커를 직접 열어 원하는 내용으로 합친 뒤 `add`→`commit`으로 해결을 완료하며, 해결 후에는 병합이 끝난 기능 브랜치를 삭제하고 GitHub 원격 저장소로 푸시해 협업을 이어간다.
