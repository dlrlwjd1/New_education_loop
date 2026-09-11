# Merge Strategies Demonstration - Recursive and Octopus

## 개요
- 앞서 준비한 브랜치로 Recursive 병합과 Octopus 병합을 실습.

## 내용
### Recursive 병합 실습

```bash
git checkout master
git merge feature-one          # 문제 없이 병합
git merge feature-two          # 편집기가 열려 병합 커밋 메시지 입력 요구
# 메시지: "merge branch feature-two" 저장 후 종료

git log --graph --oneline      # merge commit이 생성됨 (양쪽 브랜치가 독립적으로 커밋했기 때문)
```

### Octopus 병합 실습 (3개 이상 브랜치를 한 번에)

```bash
# feature-a, feature-b, feature-c 브랜치를 각각 master에서 분기해 생성
git checkout master
git checkout -b feature-a
echo "..." > A.txt && git add A.txt && git commit -m "add feature A"

git checkout master
git checkout -b feature-b
echo "..." > B.txt && git add B.txt && git commit -m "add feature B"

git checkout master
git checkout -b feature-c
echo "..." > C.txt && git add C.txt && git commit -m "add feature C"

# 세 브랜치를 한 번에 병합
git checkout master
git merge feature-a feature-b feature-c
# 편집기에서 메시지 입력 후 저장 → "Merge made by the 'octopus' strategy."

git log --graph --oneline
```

- 충돌이 없으면 Git이 자동으로 Octopus 전략을 선택해 세 브랜치를 하나의 병합 커밋으로 합친다. 충돌이 있으면 Octopus는 자동으로 해결하지 못한다.

### 정리 (선택사항)

```bash
git branch -D feature-fast-forward feature-one feature-two feature-a feature-b feature-c
```

## 요약
- 두 브랜치가 각각 독립적으로 커밋했을 때는 `git merge`가 병합 커밋을 만드는 recursive 전략을 쓰고, 충돌 없는 3개 이상의 브랜치를 한 명령으로 합칠 때는 `git merge branchA branchB branchC` 형태로 Octopus 전략이 자동 적용된다.
