# Extracting Data from Lists

## 개요
- 인덱스를 넘어서, **슬라이싱(slicing)**으로 리스트의 부분집합(subset)을 뽑아내는 법과, `pop`/`remove`로 항목을 제거하는 법을 다룬다.

## 내용

### 슬라이싱(Slicing) — 콜론(`:`) 문법
- 인덱스 하나로는 부분집합(subset)을 뽑을 수 없다 — 이때 쓰는 것이 **슬라이싱**: `리스트[:끝인덱스]`.
  - `colors[:3]` → 처음 3개 항목 (0, 1, 2번 인덱스) — "red, yellow, green"
  - `colors[:2]` → 처음 2개 항목
- **뒤에서부터 N개**를 슬라이싱할 때는 직관과 다를 수 있어 주의가 필요: `colors[-3:]`처럼 **음수를 시작 인덱스 자리에** 써야 뒤에서 3개(마지막 3개)를 얻는다.
- **범위 슬라이싱**(중간 구간): `colors[1:3]` → 인덱스 1과 2에 해당하는 항목들("yellow", "green")을 추출.

### pop — 인덱스로 제거 + 반환
- `pop(index)`는 지정한 인덱스의 항목을 리스트에서 제거하면서 **그 값을 반환**한다 — 반환값을 변수에 담아 활용 가능.
- **존재하지 않는 인덱스를 pop하면 에러**: `IndexError: pop index out of range`.
- pop은 원본 리스트를 변경한다(항목이 실제로 사라짐).

### remove — 값으로 제거
- 인덱스를 모르거나 신경 쓰지 않고, **어떤 값을 지울지만 알 때는 `remove(값)`**을 사용.
- `remove`는 내부적으로 그 값이 리스트의 어디에 있는지 찾아서 제거한다.

## 예시
```python
colors = ["red", "yellow", "green", "blue"]

print(colors[0])     # red (인덱스)
print(colors[:3])     # ["red", "yellow", "green"]  (처음 3개)
print(colors[:2])     # ["red", "yellow"]            (처음 2개)
print(colors[-3:])    # ["yellow", "green", "blue"]  (마지막 3개)
print(colors[1:3])    # ["yellow", "green"]          (범위 슬라이싱)

popped_item = colors.pop(1)
print(popped_item)    # yellow
print(colors)          # ["red", "green", "blue"]

colors.pop(100)        # IndexError: pop index out of range

colors.remove("blue")  # 값으로 제거
print(colors)           # ["red", "green"]
```

## 요약
- 슬라이싱(`[:n]`, `[n:]`, `[-n:]`, `[a:b]`)으로 리스트의 부분집합을 추출한다. 뒤에서 N개는 `[-n:]` 형태를 쓴다는 점이 헷갈리기 쉬우니 주의.
- `pop(index)`는 인덱스로 제거하면서 값을 반환(존재하지 않으면 IndexError), `remove(값)`은 값 자체로 항목을 찾아 제거한다.
