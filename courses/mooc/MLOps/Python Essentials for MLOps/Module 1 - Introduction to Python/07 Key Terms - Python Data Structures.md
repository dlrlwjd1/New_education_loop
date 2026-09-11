# Key Terms — Python Data Structures

## 개요
- "Introduction to Python Data Structures" 레슨의 용어 정리(reading). 리스트/딕셔너리/튜플/세트와 이들을 다루는 공통 개념(인덱스, 순회, 멤버십, 메서드)을 미리 정의한다.

## 내용

| 용어 | 정의 |
|---|---|
| List (리스트) | 대괄호 `[]`로 감싼, 순서가 있는 값들의 컬렉션. 값들의 시퀀스를 저장할 때 유용 |
| Index (인덱스) | 리스트에서 항목의 숫자 위치. 첫 항목은 0부터 시작. 위치로 항목에 접근할 때 사용 |
| Iteration (순회) | 리스트의 연속된 항목에 대해 코드를 반복 실행하는 것. Python에서는 `for ... in` 루프로 수행 |
| Dictionary (딕셔너리) | 중괄호 `{}`로 표시하는, 순서 없는 키-값 쌍의 컬렉션. 키가 값에 매핑됨 |
| Key (키) | 딕셔너리에서 값을 조회하는 데 쓰이는 고유 식별자. 조회 속도가 매우 빠름 |
| Value (값) | 딕셔너리에서 특정 키에 연관된 데이터. 어떤 Python 데이터 타입도 값이 될 수 있음 |
| Tuple (튜플) | 리스트와 비슷하지만 크기 고정·불변(immutable)인 순서 있는 컬렉션. `()`로 표시. 데이터가 바뀌면 안 될 때 유용 |
| Set (세트) | 고유한 객체들의 순서 없는 컬렉션. 중복 제거와 집합 연산에 유용 |
| Membership (멤버십) | 리스트/딕셔너리/튜플/세트 같은 컬렉션에 특정 값이 포함되어 있는지 확인하는 것 |
| Methods (메서드) | 자료구조를 조작하고 상호작용하게 해주는 내장 함수 |
| Iteration (순회, 재정의) | 컬렉션의 각 항목에 대해 코드를 하나씩 반복 실행하는 과정 |

## 예시
```python
# LIST
nums = [1, 2, 3]           # 대괄호로 된 순서 있는 컬렉션
print(nums[0])              # 인덱스 0으로 첫 항목 접근

for n in nums:               # 리스트 순회
    print(n)

# DICTIONARY
airports = {"SFO": "San Francisco", "LAX": "Los Angeles"}  # {} 안의 키-값 쌍
print(airports["SFO"])       # 키로 값 접근

for code in airports:
    print(airports[code])    # 각 키에 대한 값

# TUPLE
colors = ("red", "green", "blue")  # 불변, 순서 있는 컬렉션
print(colors[2])

# SET
unique_codes = {"SFO", "LAX", "SFO"}  # SFO는 하나만 남음
print(len(unique_codes))     # 길이 2 (중복 없음)
unique_codes.pop()           # 항목 제거 (인덱스 불필요)

# MEMBERSHIP — in으로 확인
print("SFO" in airports)     # True, 키 존재

# METHOD로 항목 추가
unique_codes.add("ORD")
```

## 요약
- 4가지 핵심 자료구조: 순서 있고 변경 가능한 List, 키-값 매핑인 Dictionary, 순서 있지만 불변인 Tuple, 중복 없는 순서 없는 Set.
- 인덱스(0부터 시작), 순회(for-in), 멤버십(in), 메서드는 이 자료구조들을 다루는 공통 도구.
