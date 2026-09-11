# Map & filter

## 개요

- map과 filter 함수로 기존 리스트에 함수를 적용해 새 결과를 만드는 방법과 둘의 차이

## 내용

### 공통 형식

- 두 함수 모두 **인자 2개**: (1) 적용할 **함수 자체**(호출이 아니라 인자로 전달), (2) 그 함수를 통과시킬 **iterable**(리스트).
- 반환은 map 객체/filter 객체 — **for 루프로 순회**해서 값을 꺼낸다.
- 장점: **for 루프를 직접 쓰지 않아도** 리스트 값이 함수에 하나씩 전달된다 (반복을 대신 처리).

### map vs filter — 핵심 차이

- **map** — 리스트의 **모든 객체에 함수를 적용**한다. 조건에 안 맞는 항목은 **None**으로 나온다.
- **filter** — 모든 객체를 함수에 통과시키되, **함수가 True를 반환한 값만으로 새 리스트**를 만든다 → None이 없다.

## 예시

커피 메뉴에서 C로 시작하는 커피 찾기:

```python
menu = ["espresso", "cappuccino", "latte", "cortado", "americano"]

def find_coffee(coffee):
    if coffee[0] == "c":
        return coffee

# map: 전 항목 적용 — 매칭 안 되면 None
map_coffee = map(find_coffee, menu)
for x in map_coffee:
    print(x)        # None, cappuccino, None, cortado, None

# filter: True인 값만
filter_coffee = filter(find_coffee, menu)
for x in filter_coffee:
    print(x)        # cappuccino, cortado
```

## 요약

- map/filter는 (함수, iterable)을 받아 반복을 대신 처리하는 함수형 도구다.
- map은 전 항목에 적용해 None을 포함할 수 있고, filter는 평가가 참인 값만 남긴다.
- 결과는 객체이므로 순회해서 사용한다.
