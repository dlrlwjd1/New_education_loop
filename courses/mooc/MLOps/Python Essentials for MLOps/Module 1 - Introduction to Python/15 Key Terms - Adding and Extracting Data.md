# Key Terms — Adding and Extracting Data

## 개요
- "Adding and Extracting Data from Data Structures" 레슨의 용어 정리(reading). 리스트에 데이터를 추가/삭제하는 메서드와, 딕셔너리에서 값을 안전하게 조회하는 방법을 미리 정의한다.

## 내용

| 용어 | 정의 |
|---|---|
| Append | 리스트 끝에 항목 하나를 추가 |
| Insert | 리스트의 지정한 인덱스에 항목을 삽입 |
| Extend | 다른 리스트의 모든 항목을 현재 리스트에 이어붙임 |
| Pop | 지정한 인덱스의 항목을 제거하면서 그 값을 반환 |
| Get | 딕셔너리 값을 안전하게 조회하되, 없으면 기본값으로 대체(fallback) |

## 예시
```python
fruits = ['apple', 'orange']
fruits.append('banana')
print(fruits)   # ['apple', 'orange', 'banana']

fruits.insert(0, 'grapes')
print(fruits)   # ['grapes', 'apple', 'orange', 'banana']

veggies = ['carrots', 'celery']
fruits.extend(veggies)
print(fruits)   # ['grapes', 'apple', 'orange', 'banana', 'carrots', 'celery']

removed = fruits.pop(2)
print(removed)   # orange
print(fruits)    # ['grapes', 'apple', 'banana', 'carrots', 'celery']

dict = {'name': 'Mary'}
print(dict.get('age', 25))   # 25 (기본값 사용)
```

## 요약
- 리스트에 데이터를 추가/조작하는 5가지 핵심 동작: append, insert, extend, pop, (딕셔너리의) get.
- 이후 영상에서 이 메서드들을 실제 시나리오(리스트 병합, 중첩 방지, 안전한 값 조회 등)로 확장해서 다룬다.
