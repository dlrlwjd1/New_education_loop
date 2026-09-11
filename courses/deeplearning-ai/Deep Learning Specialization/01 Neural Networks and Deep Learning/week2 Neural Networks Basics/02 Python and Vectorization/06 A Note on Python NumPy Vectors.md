# 06 A Note on Python NumPy Vectors

## 개요
- NumPy의 유연함(flexibility)은 **강점이자 약점** — 한 줄로 많은 걸 하지만, 익숙하지 않으면 미묘한(subtle) 버그 발생
- 핵심 교훈: **랭크 1 배열(rank 1 array)을 쓰지 마라**
- 항상 명확히 **열 벡터 (n×1)** 또는 **행 벡터 (1×n)** 로 만들 것
- `assert`와 `reshape`를 적극 활용해 차원을 보장

---

## 내용

### 문제: 랭크 1 배열(rank 1 array)

```python
a = np.random.randn(5)   # 가우시안 난수 5개
a.shape                  # (5,)  ← 랭크 1 배열
```

- shape가 `(5,)` — **행 벡터도 열 벡터도 아닌** 애매한 구조
- 비직관적(non-intuitive) 동작을 일으킴:

```python
a.T            # a와 똑같아 보임 (전치해도 그대로!)
np.dot(a, a.T) # 행렬(외적)이 아니라 그냥 숫자 하나가 나옴
```

- 열 벡터와 행 벡터를 더하면 에러가 날 것 같지만, 오히려 행렬이 반환되는 등 추적하기 힘든 버그의 원인

### 해결: 명시적으로 열/행 벡터 만들기

```python
a = np.random.randn(5, 1)   # (5, 1) 열 벡터
a = np.random.randn(1, 5)   # (1, 5) 행 벡터
```

이렇게 하면 동작이 일관적:

```python
a = np.random.randn(5, 1)
a.T                # (1, 5) 진짜 행 벡터
np.dot(a, a.T)     # (5, 5) 외적 → 행렬  ✅
```

> 🔍 미묘한 차이: 열 벡터를 출력하면 대괄호가 **두 겹** `[[...]]`, 랭크 1 배열은 **한 겹** `[...]`

### assert로 차원 확인

```python
assert(a.shape == (5, 1))
```
- 실행 비용이 매우 저렴
- 코드 문서(documentation) 역할도 함 → 부담 없이 사용

### reshape로 교정

이미 랭크 1 배열이 생겼다면:

```python
a = a.reshape(5, 1)   # 열 벡터로
a = a.reshape(1, 5)   # 행 벡터로
```

---

## 예시

```python
import numpy as np

# ❌ 랭크 1 배열 — 쓰지 말 것
a = np.random.randn(5)
print(a.shape)          # (5,)
print(a.T.shape)        # (5,)  전치해도 그대로
print(np.dot(a, a.T))   # 스칼라 하나

# ✅ 열 벡터
a = np.random.randn(5, 1)
print(a.shape)          # (5, 1)
print(a.T.shape)        # (1, 5)
print(np.dot(a, a.T).shape)  # (5, 5) 외적 행렬

# 차원 보장
assert(a.shape == (5, 1))

# 랭크 1 배열 교정
b = np.random.randn(5)
b = b.reshape(5, 1)
assert(b.shape == (5, 1))
```

---

## 요약
- **랭크 1 배열 `(n,)` 을 쓰지 마라** — 행/열 벡터로 일관되게 동작하지 않아 버그의 원인
- 항상 **(n×1) 열 벡터** 또는 **(1×n) 행 벡터** 로 명시적으로 생성
- 출력 시 대괄호 두 겹 `[[...]]` = 진짜 행렬/벡터, 한 겹 `[...]` = 랭크 1 배열
- `assert(a.shape == (...))` 로 차원 확인 — 저렴하고 문서 역할도 함
- 랭크 1 배열이 생기면 `reshape`로 교정
- 이 습관만으로도 파이썬/NumPy 버그를 크게 줄일 수 있음
