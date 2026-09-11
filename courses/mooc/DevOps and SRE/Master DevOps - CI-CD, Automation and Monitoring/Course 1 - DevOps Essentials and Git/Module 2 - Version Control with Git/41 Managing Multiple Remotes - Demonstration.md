# Managing Multiple Remotes - Demonstration

## 개요
- 하나의 로컬 저장소에 여러 개의 원격(remote) 저장소를 등록·관리하는 실습 (예: 백업용 원격 추가).

## 내용
### 기본 원격 확인
- `git clone`으로 저장소를 클론하면 자동으로 `origin`이라는 이름의 원격 변수(alias)가 생성되며, 이를 통해 push/pull한다.

### 여러 원격 저장소 추가

```bash
# 새 원격(백업용) 저장소를 origin이 아닌 다른 이름으로 추가
git remote add origin-backup <새-저장소-URL>

git remote -v   # 등록된 모든 원격 확인 (origin, origin-backup 등)
```

### 특정 원격으로 푸시

```bash
touch file_backup
git add file_backup
git commit -m "add backup file"

# 원하는 원격을 지정해서 푸시
git push origin-backup master
```

### 원격 이름 변경·삭제

```bash
git remote --help                       # 사용 가능한 서브커맨드 확인
git remote rename origin-backup origin2 # 원격 이름 변경
git remote remove origin2               # 또는 git remote rm origin2 - 원격 연결 제거
```

## 요약
- `git remote add <이름> <URL>`로 여러 원격 저장소(예: 메인 저장소와 백업 저장소)를 하나의 로컬 저장소에 동시에 등록할 수 있고, `git push <원격이름> <브랜치>`로 원하는 원격에 선택적으로 푸시하며, `git remote rename`/`git remote remove`로 관리한다.
