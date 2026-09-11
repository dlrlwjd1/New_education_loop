# Introduction to NumPy Arrays

## 개요
- NumPy(Numerical Python)가 Pandas 내부에서 실제로 빠른 연산을 담당하는 라이브러리라는 것, 설치와 임포트 관례(`import numpy as np`), **배열은 동질적(homogeneous)이어야 한다**는 제약, 그리고 리스트/난수/특정 값으로 배열을 만드는 다양한 방법을 다룬다.

## 내용

### NumPy란
- **NumPy = Numerical Python**. Pandas가 내부적으로 그 화려한 연산들을 처리할 때 실제로 쓰는 라이브러리다.
- 일반 Python 자료구조보다 **훨씬 빠르다** — 여러 최적화가 적용되어 있기 때문.
- 설치: `pip install numpy` (역시 가상환경 안에서).
- 임포트 관례: `import numpy as np` — Pandas의 `pd`처럼 거의 모든 문서·튜토리얼에서 이 별칭을 쓴다.

### 배열은 동질적(homogeneous)이어야 한다
- NumPy 배열의 핵심 특징: **모든 원소가 같은 타입이어야 한다.**
- 서로 다른 타입을 섞어서 넣으면, NumPy가 **내부적으로 하나의 타입으로 강제 변환(coerce)**해버린다 — 의도와 다르게 동작할 수 있으니 주의.

### 배열 생성 방법
- **리스트로 생성**: `np.array([1, 2, 3, 4, 5])` — 일반 Python 리스트처럼 보이지만, 결과 객체는 리스트가 아니라 **NumPy 배열 타입**이며 고유한 속성들을 가진다.
- **다차원 배열**: 리스트 안에 리스트를 중첩하면 다차원 배열이 만들어진다. `.shape`으로 배열의 형태(예: 2×2)를 확인할 수 있다.
- **난수로 생성**: `np.random.rand(2, 2)`처럼 쓰면 0~1 사이의 무작위 실수로 채워진 배열을 만든다.
- **특정 값으로 채우기**: `np.full((3, 4), 8)`처럼 원하는 shape과 값을 지정해 그 값으로 가득 찬 배열을 만든다. `np.ones((4, 4))`/`np.zeros((4, 4))`는 각각 1과 0으로 채운다.
- **`np.arange()`**: 시퀀스를 생성한다. `np.arange(0, 5)`는 0부터 4까지, `np.arange(0, 27, 3)`처럼 세 번째 인자로 **간격(step)**도 지정할 수 있다.

## 예시
```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])          # 1차원 배열
arr2d = np.array([[1, 2], [2, 2]])         # 2차원 배열 (중첩 리스트)
print(arr2d.shape)                          # (2, 2)

rand_arr = np.random.rand(2, 2)             # 0~1 사이 난수로 채운 2x2 배열
full_arr = np.full((3, 4), 8)               # 8로 채운 3x4 배열
ones_arr = np.ones((4, 4))                   # 1로 채운 4x4 배열
zeros_arr = np.zeros((4, 4))                 # 0으로 채운 4x4 배열

seq = np.arange(0, 5)                        # [0, 1, 2, 3, 4]
stepped = np.arange(0, 27, 3)                # 0부터 27까지 3씩 증가
```

## 요약
- NumPy는 Pandas의 빠른 연산을 뒷받침하는 라이브러리이며, `pip install numpy` + `import numpy as np`가 관례.
- 배열은 반드시 동질적(같은 타입)이어야 하며, 리스트·난수(`random.rand`)·특정 값(`full`/`ones`/`zeros`)·시퀀스(`arange`)로 다양하게 생성할 수 있다.
