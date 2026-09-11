# 01 Vectorization

## 개요
- **벡터화(vectorization)**: 명시적 for 루프를 제거하고 행렬/벡터 연산으로 대체하는 기법
- 딥러닝에서 대규모 데이터셋 처리 시 필수 — 수백 배 속도 차이 발생
- NumPy의 내장 함수는 CPU/GPU의 병렬화 명령(SIMD)을 활용해 빠르게 동작

---

## 내용

### 벡터화 vs 비벡터화 비교: z = wᵀx + b

**비벡터화 (for 루프):**
```python
z = 0
for i in range(nx):
    z += w[i] * x[i]
z += b
```

**벡터화 (NumPy):**
```python
z = np.dot(w, x) + b
```

→ 결과는 동일, 속도는 수백 배 차이

### 속도 비교 실험 (100만 차원 벡터)

| 방식 | 소요 시간 |
|---|---|
| 벡터화 (`np.dot`) | ~1.5ms |
| for 루프 | ~480ms |
| **속도 차이** | **약 300배** |

→ 1분 vs 5시간 차이로 이어질 수 있음

### 왜 빠른가? SIMD (Single Instruction, Multiple Data)
- CPU와 GPU 모두 병렬 처리 명령 지원
- `np.dot` 같은 NumPy 내장 함수는 이 병렬화를 자동으로 활용
- for 루프는 순차 실행 → 병렬화 불가
- GPU는 SIMD 연산에 특히 우수하지만, CPU도 상당히 빠름

### 핵심 규칙
> **가능한 한 명시적 for 루프를 피하라**

---

## 예시

```python
import numpy as np
import time

# 100만 차원 벡터 생성
a = np.random.rand(1_000_000)
b = np.random.rand(1_000_000)

# 벡터화 버전
tick = time.time()
c_vec = np.dot(a, b)
tock = time.time()
print(f"벡터화: {(tock - tick) * 1000:.2f}ms, 결과={c_vec:.4f}")

# for 루프 버전
c_loop = 0
tick = time.time()
for i in range(1_000_000):
    c_loop += a[i] * b[i]
tock = time.time()
print(f"for 루프: {(tock - tick) * 1000:.2f}ms, 결과={c_loop:.4f}")

# 두 결과가 동일한지 확인
print(f"결과 일치: {np.isclose(c_vec, c_loop)}")
```

```
출력 예시:
벡터화:  1.5ms, 결과=250286.9891
for 루프: 480.3ms, 결과=250286.9891
결과 일치: True
```

---

## 요약
- 벡터화 = for 루프 → NumPy 행렬 연산으로 대체
- `np.dot(w, x)`는 wᵀx를 단 한 줄로, 약 300배 빠르게 계산
- 속도의 핵심: SIMD 병렬 처리 (CPU/GPU 모두 지원)
- **규칙**: 딥러닝 코드에서 명시적 for 루프는 최대한 제거
- 다음 강의: 벡터화를 로지스틱 회귀 전체에 적용하는 더 많은 예시
