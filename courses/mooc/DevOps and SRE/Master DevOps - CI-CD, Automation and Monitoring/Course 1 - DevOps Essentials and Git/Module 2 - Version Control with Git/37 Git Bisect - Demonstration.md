# Git Bisect - Demonstration

## 개요
- 여러 커밋 중 버그가 있는 커밋을 `git bisect`로 표시하고 찾아내는 실습.

## 내용
### 시나리오
- 여러 커밋을 쌓은 뒤 GitHub에 푸시했는데, 테스트팀이 "비밀번호(forget password)" 관련 코드에서 문제를 발견. 다른 작업과 병행하느라 지금 당장 고칠 시간이 없어, 우선 해당 커밋을 "bad(결함 있음)"로 표시해두고 다른 작업을 계속하고 싶은 상황.

### 명령어 흐름

```bash
mkdir my-demo-bisect && cd my-demo-bisect
git init

# 여러 커밋 생성
echo "code" > file.txt && git add file.txt && git commit -m "commit 1"
echo "more code" >> file.txt && git add file.txt && git commit -m "commit 2"
# ... (버그가 있는 "forget password" 관련 커밋 포함해 여러 커밋 반복)

git log --oneline    # 커밋 목록 확인

# bisect 시작
git bisect start

git bisect good <커밋ID>   # 정상 동작했던 커밋 표시
git bisect good <커밋ID>   # 여러 개 표시 가능
git bisect bad <커밋ID>    # 버그가 있는(결함 있는) 커밋 표시
```

- `bad`로 표시된 커밋은 이후 `git log --oneline` 목록에서 제외되어(bisect 상태에서 분리되어) 정상 커밋만 남는다.

```bash
git bisect visualize   # good/bad로 표시된 커밋 상태를 시각적으로 확인
git status              # HEAD가 master에서 detached 상태로 bisect 진행 중임을 확인
```

- bisect 도중에는 `HEAD detached`, "You are currently bisecting" 같은 상태 메시지가 표시된다.
- bisect를 종료하려면 별도로 마무리(`git bisect reset`)해야 하며, 다시 시작하려면 `git bisect start`를 다시 실행해야 한다.

## 요약
- `git bisect start` → 여러 커밋에 `good`/`bad` 표시 → `git bisect visualize`/`git status`로 진행 상태 확인의 흐름으로, 결함이 있는 커밋을 격리해두고 나머지 정상 커밋 이력에 집중해 작업을 이어갈 수 있다.
