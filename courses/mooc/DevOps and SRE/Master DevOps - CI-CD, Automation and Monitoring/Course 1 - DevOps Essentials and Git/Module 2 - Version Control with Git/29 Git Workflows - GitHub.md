# Git Workflows - GitHub

## 개요
- 로컬 저장소를 GitHub 원격 저장소에 연결하고, Personal Access Token으로 인증해 push하는 실습으로 전체 워크플로우 데모를 마무리.

## 내용
### 원격 저장소 생성
- GitHub에서 새 저장소 생성 (README 없이 — 로컬에서 데이터를 보낼 것이므로 체크하지 않음)

### 로컬 저장소와 원격 연결

```bash
git remote add origin <저장소경로>   # "origin"이라는 이름으로 원격 저장소 경로 저장
git push origin master                # origin으로 master 브랜치 푸시 (브랜치명 필수)
```

### Personal Access Token으로 인증
- GitHub는 더 이상 비밀번호로 인증하지 않으므로 Personal Access Token이 필요하다.
- 경로: **github.com/settings/tokens** → Developer settings → **Generate new token (classic)**
- 토큰 생성 시 **repo** 스코프를 반드시 선택해야 정상 동작한다.
- push 시 사용자명 입력란에 GitHub 사용자명 대신 **토큰**만 붙여넣으면 된다 (토큰이 사용자명·비밀번호 역할을 모두 대신함).

```bash
git push origin master
# Username: <토큰 붙여넣기>
# Password: (비워둠)
```

## 요약
- `git remote add origin <URL>`로 원격 저장소를 등록하고 `git push origin <브랜치명>`으로 푸시하며, 비밀번호 대신 GitHub Personal Access Token(repo 스코프 포함)으로 인증하는 것이 오늘날 GitHub 연동의 표준 방식이다. 이것으로 로컬 커밋 → 브랜칭 → 충돌 해결 → 원격 push까지 전체 Git 워크플로우 데모가 완성된다.
