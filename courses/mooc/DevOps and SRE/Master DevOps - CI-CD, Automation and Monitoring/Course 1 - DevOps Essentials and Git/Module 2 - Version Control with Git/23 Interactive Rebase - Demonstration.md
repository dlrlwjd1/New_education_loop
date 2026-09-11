# Interactive Rebase - Demonstration

## 개요
- 여러 개의 지저분한 소규모 커밋을 `git rebase -i`로 하나의 깔끔한 커밋으로 스쿼시(squash)하는 실습.

## 내용
### 문제 상황
- 기능 브랜치에서 오탈자 수정, 서식 변경 등 작은 커밋을 자주 남기면 히스토리가 지저분해진다.
- master에 병합하기 전에 작은 커밋들을 하나의 의미 있는 커밋으로 합치고 메시지를 정리하고 싶다.

### 실습 흐름

```bash
mkdir interactive-rebase-demo && cd interactive-rebase-demo
git init
echo "..." > readme.md
git add readme.md
git commit -m "initial commit to add readme"

git checkout -b feature-add-greeting

# 작은 커밋 3개를 순서대로 생성
echo "..." > greet.txt && git add greet.txt && git commit -m "update greeting"
echo "..." >> greet.txt && git add greet.txt && git commit -m "update greeting"
echo "..." >> greet.txt && git add greet.txt && git commit -m "improve greeting with question"
```

### Interactive Rebase로 스쿼시

```bash
git rebase -i HEAD~3
```

- 편집기가 열리면 두 번째·세 번째 커밋 앞의 `pick`을 `squash`(또는 `s`)로 바꿔 첫 번째 커밋에 합친다.
- 저장 후 종료하면 새 커밋 메시지를 작성하는 편집기가 다시 열림 → 예: `"add and enhance greeting message"`
- 저장 후 종료하면 세 커밋이 하나로 합쳐진다.

```bash
git log --oneline   # 스쿼시 전 3개였던 커밋이 1개의 깔끔한 커밋으로 보임
```

## 요약
- `git rebase -i HEAD~N`으로 최근 N개의 커밋을 편집기에서 squash/reword해 하나의 의미 있는 커밋으로 정리할 수 있으며, 이 작업은 반드시 아직 원격에 push되지 않은 로컬 브랜치에서만 수행해야 한다 — push된 뒤 리베이스하면 다른 사람과 충돌이 발생한다.
