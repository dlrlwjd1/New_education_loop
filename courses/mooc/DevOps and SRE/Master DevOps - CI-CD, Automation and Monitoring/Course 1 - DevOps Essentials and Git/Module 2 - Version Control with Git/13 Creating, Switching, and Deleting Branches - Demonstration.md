# Creating, Switching, and Deleting Branches - Demonstration

## 개요
- "Contact Us 페이지 추가"라는 시나리오로 브랜치 생성 → 작업 → 병합 → 삭제까지의 전체 흐름을 실습.

## 내용
### 시나리오
- 웹사이트 프로젝트의 master 브랜치는 안정 버전을 유지해야 한다.
- 새 기능(Contact Us 페이지)을 위해 별도 브랜치를 만들어 작업하고, 테스트 후 master에 병합, 마지막에 기능 브랜치를 삭제한다.

### 단계별 명령어

```bash
# 1. 저장소 초기화 및 초기 커밋
git init
echo "<h1>...</h1>" > index.html
git add index.html
git commit -m "initial commit added index.html"

# 2. 새 브랜치 생성
git branch                     # 현재 브랜치 확인
git branch add-contact-page    # 새 브랜치 생성
git branch                     # 생성 확인

# 3. 새 브랜치에서 작업
git checkout add-contact-page  # (또는 git switch)
echo "<h1>Contact Us</h1>" > contact.html
git add contact.html
git commit -m "added contact us page"

# 4. master로 돌아가 병합
git checkout master
git merge add-contact-page
ls                              # index.html, contact.html 둘 다 존재하는지 확인

# 5. 기능 브랜치 정리
git branch -d add-contact-page  # 병합 완료된 브랜치 삭제
git branch                       # 삭제 확인
```

## 요약
- 새 기능은 `git branch`로 분리된 브랜치에서 작업하고, 완료되면 master로 전환해 `git merge`로 통합한 뒤 `git branch -d`로 정리하는 것이 표준적인 기능 개발 사이클이다.
