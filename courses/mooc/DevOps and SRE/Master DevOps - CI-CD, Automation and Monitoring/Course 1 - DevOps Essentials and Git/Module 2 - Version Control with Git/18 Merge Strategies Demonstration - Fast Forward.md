# Merge Strategies Demonstration - Fast Forward

## 개요
- Fast-forward 병합을 직접 실습하고, 이어지는 Recursive 병합 실습을 위한 두 개의 기능 브랜치(feature-one, feature-two)를 준비.

## 내용
### Fast-forward 병합 실습

```bash
mkdir git-merge-demo && cd git-merge-demo
git init

echo "initial project setup" > project.txt
git add project.txt
git commit -m "initial commit"

# master가 브랜치 생성 이후 변경되지 않았으므로 fast-forward 조건 충족
git checkout -b feature-fast-forward
echo "fast forward feature" > fast-forward.txt
git add fast-forward.txt
git commit -m "add fast forward feature"

git checkout master
git merge feature-fast-forward
# => 별도의 merge commit 없이 master 포인터가 그냥 앞으로 이동
```

### Recursive 병합을 위한 준비 (두 브랜치가 각각 커밋)

```bash
git checkout -b feature-one
echo "feature one code" > feature-one.txt
git add feature-one.txt
git commit -m "add feature one"

git checkout master
git checkout -b feature-two
echo "feature two code" > feature-two.txt
git add feature-two.txt
git commit -m "add feature two"
```

## 요약
- master가 그대로인 상태에서 브랜치를 병합하면 Git은 포인터만 이동시키는 fast-forward 병합을 수행하며(merge commit 없음), 이어지는 강의에서는 master와 별도로 각각 커밋을 쌓은 feature-one/feature-two 브랜치로 recursive 병합을 실습한다.
