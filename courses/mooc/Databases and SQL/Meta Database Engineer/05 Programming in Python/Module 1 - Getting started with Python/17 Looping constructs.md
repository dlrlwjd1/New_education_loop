# Looping constructs

## 개요

- 시퀀스를 순회(iterate)하는 두 루프 구조: for 루프와 while 루프
- range(), 배열 순회, 카운터·무한 루프 주의, enumerate()로 인덱스 접근

## 내용

### 루프란

- **같은 단계들을 여러 번 수행해야 할 때** 쓰는 구조. 문자열도 시퀀스이므로 문자를 하나씩 순회할 수 있다 — for의 반복 변수(item)는 현재 항목을 담는 자리표시자다.

### for 루프

- `for i in range(10):` — **0부터 시작**해 9까지 반복 (인덱스가 0 기반이므로 대부분의 배열이 0에서 시작).
- 배열 순회: `for item in favorites:` — 반복 변수 이름은 자유롭게 정한다.
- 표준 for 루프에서는 인덱스에 접근할 수 없지만 **enumerate() 함수**를 쓰면 인덱스와 값이 함께 나온다.

### while 루프

- 조건이 참인 동안 반복. 배열 순회에는 **카운터**가 필요하다:
  1. `count = 0` 선언
  2. `while count < len(favorites):` — len()으로 배열 길이 확인
  3. 본문에서 **인덱스로 접근**: `favorites[count]`
  4. **`count += 1`로 반드시 증가** — 안 하면 **무한 루프**가 되어 메모리가 바닥날 때까지 돈다.

## 예시

```python
favorites = ["Creme Brulee", "Apple Pie", "Churros", "Tiramisu", "Chocolate Cake"]

# for 루프
for item in favorites:
    print("I like this dessert", item)

# while 루프 (인덱스 접근 + 카운터 증가)
count = 0
while count < len(favorites):
    print("I like this dessert", favorites[count])
    count += 1

# enumerate로 인덱스와 값 동시 접근
for idx, item in enumerate(favorites):
    print(idx, item)
```

## 요약

- for는 시퀀스·range를 직접 순회하고, while은 조건+카운터로 반복한다.
- while에서는 카운터 증가를 잊으면 무한 루프가 된다.
- 인덱스가 필요하면 enumerate()를 쓴다.
