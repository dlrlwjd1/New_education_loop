# Squashing Commits for Cleaner Repository - Demonstration

## 개요
- `git rebase -i`로 여러 개의 작은 커밋을 하나로 스쿼시하는 실습.

## 내용
### 여러 커밋 만들기

```bash
echo "change 1" >> file1 && git add file1 && git commit -m "change 1"
echo "change 2" >> file1 && git add file1 && git commit -m "change 2"
echo "change 3" >> file1 && git add file1 && git commit -m "change 3"

git log --oneline   # 여러 개의 작은 커밋 확인
```

### Interactive Rebase로 스쿼시

```bash
git rebase -i <스쿼시 대상 이전 커밋ID>
```

- 편집기가 열리면 첫 번째 커밋은 `pick`으로 남기고, 나머지 커밋들 앞의 `pick`을 `squash`(`s`)로 변경한다.
- 저장·종료하면 Git이 통합된 새 커밋 메시지를 작성하라는 편집기를 다시 연다 — 메시지를 정리해 저장·종료.

```bash
git log --oneline   # 여러 커밋이 하나로 합쳐져 이력이 짧고 명확해짐
git show <커밋ID>    # 스쿼시된 커밋 안에 모든 변경사항이 들어있는지 확인
```

## 요약
- `git rebase -i <커밋ID>`로 편집기를 열어 원하는 커밋들을 `pick`→`squash`로 바꾸고 새 커밋 메시지를 작성하면, 여러 개의 지저분한 커밋이 하나의 깔끔한 커밋으로 합쳐진다.
