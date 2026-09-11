# Key Terms — NumPy

## 개요
- "NumPy Basics" 레슨의 용어 정리(reading). 배열(array)과 그 변형 연산(reshape/ravel/stack/slice)의 정의와 기본 코드 예시를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Array (배열) | NumPy의 핵심 자료구조. 값들이 동일한 타입인 n차원 격자(homogeneous n-dimensional grid) |
| Reshape (재구성) | 같은 개수의 원소를 유지한 채 배열을 새로운 형태(shape)로 변환 |
| Ravel (평탄화) | 배열을 1차원 형태로 펼치는 것 |
| Stack (쌓기) | 배열들을 수직 또는 수평으로 이어붙이는 것 |
| Slice (슬라이스) | 인덱싱을 이용해 배열 원소의 부분집합을 추출하는 것 |

## 예시
```python
import numpy as np

# 배열 생성
arr = np.array([1, 2, 3])
print(arr)

# 재구성
arr = arr.reshape(1, 3)
print(arr)

# 평탄화(ravel)
flattened = arr.ravel()

# 수직 스택
arr1 = np.array([1, 2])
arr2 = np.array([3, 4])
stacked = np.vstack([arr1, arr2])

# 슬라이스
sliced = arr[0:2]
```

## 요약
- NumPy 배열은 동일한 타입의 값들로 이루어진 n차원 격자이며, reshape/ravel/stack/slice로 형태를 자유롭게 변형·조합·추출할 수 있다.
