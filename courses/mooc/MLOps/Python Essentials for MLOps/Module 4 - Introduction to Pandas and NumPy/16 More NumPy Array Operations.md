# More NumPy Array Operations

## 개요
- 차원 확장(`np.newaxis`), 배열 전체에 조건을 적용해 불리언 마스크나 조건에 맞는 값만 뽑아내는 법, 슬라이싱, 배열을 이어붙이는 **스태킹(수평/수직)**, 그리고 배열을 균등하게 나누는 **분할(split)**과 언패킹을 다룬다.

## 내용

### 차원 확장 — `np.newaxis`
- 1차원 배열(shape이 `(4,)`)에 **`np.newaxis`를 이용해 새로운 축(axis)을 추가**하면, shape이 `(1, 4)`로 확장된다.
- `arr[np.newaxis, :]`처럼 사용 — 1차원이었던 배열이 2차원(1행 4열)으로 바뀐다.

### 조건을 배열 전체에 적용 — 불리언 마스크와 조건 필터링
- `array < 20`처럼 **조건을 배열 전체에 적용하면, 일반 Python과 달리 각 원소마다 개별적으로 조건이 평가**되어 True/False로 이루어진 배열이 만들어진다.
- **실제로 조건에 맞는 값들만 뽑아내고 싶다면** `array[array < 20]`처럼 그 조건 배열을 다시 인덱스로 사용하면 된다 — 조건을 만족하는 원소들만 모은 새 배열이 반환된다.

### 슬라이싱
- 일반 리스트와 유사하게 인덱스 범위와 슬라이싱을 그대로 사용할 수 있다.

### 스태킹(Stacking) — 배열 이어붙이기
- **`np.hstack([arr1, arr2])`**: 두 배열을 **수평으로** 이어붙인다. 두 배열의 **차원(dimension) 수가 같아야** 한다.
- **`np.vstack([arr1, arr2])`**: 두 배열을 **수직으로** 쌓는다.

### 분할(Split)과 언패킹
- `np.hsplit(arr, n)`으로 배열을 `n`개의 균등한 부분으로 나눈다.
- **주의: 반드시 균등하게 나뉘어야 한다** — 원소 11개짜리 배열을 7등분하려 하면 `ValueError: array split does not result in an equal division`. 2등분처럼 나누어떨어지는 값이어야 함.
- `first, second = np.hsplit(arr, 2)`처럼 **Python의 언패킹(unpacking) 문법**으로 분할된 결과를 바로 여러 변수에 나눠 담을 수 있다.

## 예시
```python
import numpy as np

arr = np.ones(4)
print(arr.shape)                    # (4,)
expanded = arr[np.newaxis, :]
print(expanded.shape)                # (1, 4)

data = np.array([3, 12, 11, 45, 22, 11, 56, 15, 22])
mask = data < 20                      # [True, True, True, False, ...]
matches = data[data < 20]             # 조건을 만족하는 값들만 모은 배열

arr1 = np.array([1, 2])
arr2 = np.array([3, 4])
h = np.hstack([arr1, arr2])            # 수평 스택
v = np.vstack([arr1, arr2])            # 수직 스택

arr = np.arange(11)
# np.hsplit(arr, 7)                    # ValueError: 균등 분할 불가
first, second = np.hsplit(arr, 2)      # 언패킹으로 2등분
```

## 요약
- `np.newaxis`로 차원을 확장하고, 조건식을 배열에 직접 적용해 불리언 마스크나 조건에 맞는 값만 필터링할 수 있다.
- `hstack`/`vstack`으로 배열을 이어붙이고, `hsplit`(균등 분할 필수)과 언패킹으로 배열을 여러 변수로 나눌 수 있다.
