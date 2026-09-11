# Creating and Iterating Over Dictionaries

## 개요
- 딕셔너리를 만드는 4가지 방법(중괄호 리터럴, `dict()` 함수, 키-값 쌍의 리스트, 키워드 인자)과, 키만/값만/키-값 쌍 모두를 순회하는 법(`.keys()`, `.values()`, `.items()` + 언패킹)을 다룬다.

## 내용

### 딕셔너리를 만드는 4가지 방법
1. **중괄호 리터럴**: `{"name": "Alfredo", "last_name": "Deza"}`
2. **`dict()` 내장 함수**: 같은 결과를 만든다.
3. **키-값 쌍의 리스트**: `[("name", "Alfredo"), ("last_name", "Deza")]` 같은 쌍(pair)의 리스트를 전달해도 딕셔너리가 생성된다 (이 쌍은 튜플이며, 튜플은 다음 영상에서 다룸).
4. **키워드 인자(keyword arguments)**: `dict(first="Alfredo", last_name="Deza")`처럼 전달해도 동일하게 동작.

### 키만 순회하기
- `for key in contact_information.keys():` — 명시적으로 키만 순회.
- **`.keys()`를 생략해도 기본적으로 키를 순회하는 것과 동일하게 동작**한다: `for key in contact_information:`.

### 값만 순회하기
- `for value in contact_information.values():` — 값(name, last name, age, height 등)만 순회.

### 키와 값을 동시에 순회하기 — `.items()` + 언패킹
- `.items()`를 쓰면 키-값 쌍을 동시에 순회할 수 있다.
- 이때 **변수를 2개(키 변수, 값 변수) 사용**해야 하며, 이를 **"언패킹(unpacking)"**이라고 부른다: `for key, value in contact_information.items():`.
- Python은 매 반복마다 각 쌍(mapping)에서 두 값을 동시에 꺼내 두 변수에 나눠 담아준다.
- `.items()` 자체를 출력해보면 "쌍들의 리스트처럼 보이는 객체"임을 확인할 수 있다.

## 예시
```python
contact_information = {"name": "Alfredo", "last_name": "Deza", "age": 49, "height": 1.90}

# 키만 순회 (명시적/암묵적 동일)
for key in contact_information.keys():
    print(key)
for key in contact_information:      # 위와 동일한 결과
    print(key)

# 값만 순회
for value in contact_information.values():
    print(value)

# 키-값 쌍 동시 순회 (언패킹)
for key, value in contact_information.items():
    print(key, value)
```

## 요약
- 딕셔너리는 `{}` 리터럴, `dict()` 함수, 키-값 쌍의 리스트, 키워드 인자 — 네 가지 방식으로 만들 수 있다.
- `.keys()`(또는 생략)로 키만, `.values()`로 값만, `.items()` + 언패킹(두 변수)으로 키와 값을 동시에 순회할 수 있다.
