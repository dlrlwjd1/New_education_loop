# Git Workflows - Modifying the File

## 개요
- 이미 커밋된 파일을 수정·비교·커밋하는 과정과 `git reset`(soft/hard)의 차이, 브랜치 개념의 도입을 다루는 실습.

## 내용
### 파일 수정 및 재커밋

```bash
# index1.html 수정 → 상태가 "modified"로 표시됨
git status

git commit -a -m "메시지"   # 수정된 파일을 add+commit 한 번에
```

### 변경사항 비교

```bash
git diff       # 이전 버전과 새 변경사항의 차이를 확인 (커밋 전)
git log --oneline   # 같은 파일에 대한 여러 커밋 이력 확인
```

### git reset — soft vs hard

- **HEAD**는 가장 최근 커밋을 가리키는 포인터.
- `git reset <커밋ID>` — HEAD를 해당 커밋으로 되돌리고, 그 뒤의 커밋들은 이력에서 사라진다.

```bash
git reset <커밋ID>          # (기본값) 변경사항이 스테이징 영역으로 돌아옴
git reset --soft <커밋ID>   # 변경사항을 스테이징 영역에 유지
git reset --hard <커밋ID>   # ⚠️ 변경사항까지 영구 삭제 (파괴적, 복구 불가)
```

- `--hard`는 파일 내용까지 영구히 지우는 destructive 명령이므로 신중하게 사용해야 한다. (예: 비밀번호나 시크릿 키를 실수로 커밋한 경우 등에 활용)

### 브랜치 개념 도입
- 첫 커밋을 하는 순간 이미 `master`라는 브랜치가 만들어져 있었다.
- 브랜치는 여러 프로젝트를 하나의 저장소 안에서 병렬로 관리할 수 있게 해주는 조직화 방법이다.
- 새 브랜치는 항상 기준이 되는 master 브랜치의 복사본에서 시작한다.

```bash
git branch test    # master의 복사본으로 test 브랜치 생성 (동일한 커밋·파일 보유)
git branch          # 브랜치 목록 확인
```

## 요약
- `git diff`로 변경사항을 확인하고 `commit -a -m`으로 저장하며, `git reset`(soft는 안전, hard는 파괴적)으로 커밋 이력을 되돌릴 수 있고, 모든 저장소는 첫 커밋 시점부터 이미 master라는 브랜치 위에서 동작하고 있었다는 것이 이 실습의 핵심이다.
