# Adding Data to Lists

## 개요
- 리스트에 데이터를 추가하는 여러 방법 — `append`, `insert`, 리스트 간 덧셈(`+`), `extend` — 을 다루고, 각 방법의 차이(특히 append로 인한 중첩 리스트 문제와 extend의 차이)를 짚는다.

## 내용

### append와 insert
- `append`는 리스트 끝에 항목을 추가하며, 순서를 그대로 유지한다.
- `insert(index, item)`은 **지정한 인덱스 위치에** 항목을 삽입한다. 예: `insert(0, "melon")`은 맨 앞에 삽입.
- **`insert`는 인덱스 인자가 반드시 필요**하다 — 인덱스를 생략하면 `TypeError: insert expected 2 arguments, got 1`.

### 리스트 덧셈 — `+`
- 두 리스트를 `+`로 더하면, 두 리스트의 항목을 모두 합친 **새 리스트**가 만들어진다 (예: `fruits + vegetables`).

### append로 리스트를 추가할 때의 함정 — 중첩 리스트
- 이미 만들어진 리스트(`shopping_list`)에 **다른 리스트를 append하면, "리스트 안의 리스트"(중첩 리스트)가 생긴다.**
- 예: `shopping_list.append(["sugar", "salt"])` → `shopping_list`의 마지막 항목이 `["sugar", "salt"]`라는 리스트 자체가 되어버림.
- 이것이 의도한 결과라면 상관없지만, **평평한(flat) 리스트를 원한다면 `append` 대신 `extend`를 써야 한다.**

### extend — 평평하게 이어붙이기
- `extend`는 다른 리스트의 **모든 항목을 현재 리스트에 개별적으로** 추가한다 (append/덧셈과 유사하지만 중첩되지 않음).
- 예: `shopping_list.extend(["sugar", "salt"])` → 중첩 없이 `sugar`, `salt`가 개별 항목으로 이어붙는다.

## 예시
```python
fruits = ["apple", "orange"]
fruits.append("banana")
fruits.insert(0, "melon")
print(fruits)   # ["melon", "apple", "orange", "banana"]

fruits.insert(0)  # TypeError: insert expected 2 arguments, got 1

vegetables = ["cucumber", "carrots"]
combined = fruits + vegetables   # 두 리스트를 더해 새 리스트 생성

shopping_list = fruits + vegetables
shopping_list.append(["sugar", "salt"])   # 중첩 리스트 생성됨 (마지막 항목이 리스트)
shopping_list.extend(["sugar", "salt"])   # 중첩 없이 개별 항목으로 추가됨
```

## 요약
- `append`(끝에 추가), `insert(index, item)`(지정 위치에 추가, 인덱스 필수), `+`(두 리스트를 합쳐 새 리스트 생성).
- **`append`로 리스트를 통째로 넣으면 중첩 리스트**가 생기므로, 평평하게 합치고 싶다면 `extend`를 사용해야 한다.
