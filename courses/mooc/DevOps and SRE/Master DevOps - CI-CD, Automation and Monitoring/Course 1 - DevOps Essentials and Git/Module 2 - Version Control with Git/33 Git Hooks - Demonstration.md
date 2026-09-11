# Git Hooks - Demonstration

## 개요
- 스테이징된 파일이 없으면 커밋을 막는 `pre-commit` 훅을 직접 만들어보는 실습 가이드.

## 내용
### 목표
- 스테이징된 파일이 하나도 없을 때 커밋을 차단하고 안내 메시지를 표시하는 `pre-commit` 훅을 만들어, 실수로 빈 커밋을 만드는 것을 방지한다.

### 단계
1. 저장소의 `.git/hooks` 디렉터리로 이동
2. `.git/hooks/` 안의 샘플 스크립트 중 `pre-commit.sample`을 `pre-commit`으로 이름 변경 후 편집기(Notepad, VS Code 등)로 열기
3. 다음과 같은 스크립트 작성:

```bash
#!/bin/sh
staged_files=$(git diff --cached --name-only)

if [ -z "$staged_files" ]; then
  echo "Error: No files staged for commit. Please stage some files first."
  exit 1
else
  echo "Files are staged. Proceeding with commit."
fi
```

- `git diff --cached --name-only` — 현재 스테이징된 파일 이름 목록을 출력
- `if [ -z "$staged_files" ]` — 출력이 비어 있으면(스테이징된 파일이 없으면) 조건 충족
- 스테이징된 파일이 없으면 커밋을 차단(`exit 1`)하고 오류 메시지 출력

### 테스트
- 파일을 언스테이징한 뒤 커밋을 시도 → `"Error: No files staged for commit. Please stage some files first."` 메시지와 함께 커밋 차단됨을 확인
- 파일을 만들고 스테이징한 뒤 커밋 시도 → `"Files are staged. Proceeding with commit."` 메시지가 뜨고 커밋이 정상 진행됨을 확인

## 요약
- `.git/hooks/pre-commit` 스크립트에서 `git diff --cached --name-only`로 스테이징 상태를 확인해 빈 커밋을 자동으로 차단하는 것이 Git Hooks의 가장 기본적이고 실용적인 활용 예시다.
