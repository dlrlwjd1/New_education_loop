# 08 Derivatives with a Computation Graph

## 개요
- 계산 그래프에서 **역방향(오→왼) 계산**으로 도함수를 효율적으로 구함
- **연쇄 법칙(chain rule)**: 중간 변수를 거쳐 전달되는 도함수를 곱으로 계산
- 코드 변수명 규칙: `d변수` = dJ/d변수 (항상 J에 대한 도함수)

---

## 내용

### 예시 함수 복습
J = 3(a + bc), a=5, b=3, c=2

```
순전파 결과:
u = b × c = 6
v = a + u = 11
J = 3 × v = 33
```

### 역전파: 오른쪽 → 왼쪽

**Step 1. dJ/dv 계산**
- v를 11 → 11.001로 nudge → J: 33 → 33.003
- J = 3v이므로 dJ/dv = **3**
- 코드 변수명: `dv = 3`

**Step 2. dJ/da 계산 (연쇄 법칙)**
- a를 5 → 5.001로 nudge → v: 11 → 11.001 → J: 33 → 33.003
- dJ/da = dJ/dv × dv/da = 3 × 1 = **3**
- 코드 변수명: `da = 3`

**Step 3. dJ/du 계산 (연쇄 법칙)**
- u를 6 → 6.001로 nudge → v: 11 → 11.001 → J: 33 → 33.003
- dJ/du = dJ/dv × dv/du = 3 × 1 = **3**
- 코드 변수명: `du = 3`

**Step 4. dJ/db 계산 (연쇄 법칙)**
- b를 3 → 3.001로 nudge (c=2)
  - u: 6 → 6.002 (du/db = c = 2)
  - v: 11 → 11.002
  - J: 33 → 33.006
- dJ/db = dJ/du × du/db = 3 × 2 = **6**
- 코드 변수명: `db = 6`

**Step 5. dJ/dc 계산 (연쇄 법칙)**
- dJ/dc = dJ/du × du/dc = 3 × b = 3 × 3 = **9**
- 코드 변수명: `dc = 9`

### 전체 역전파 흐름

```
a=5 ──────────→ [v = a+u] ──→ [J = 3v]
                ↑
b=3 → [u = bc] ─┘
       ↑
c=2 ───┘

역전파 (오→왼):
dv=3 ← du=3 ← db=6
              ← dc=9
       da=3
```

### 도함수 요약 표

| 변수 | dJ/d변수 | 계산 경로 |
|---|---|---|
| v | 3 | J = 3v → 직접 |
| a | 3 | dJ/dv × dv/da = 3 × 1 |
| u | 3 | dJ/dv × dv/du = 3 × 1 |
| b | 6 | dJ/du × du/db = 3 × 2 |
| c | 9 | dJ/du × du/dc = 3 × 3 |

### 연쇄 법칙 (Chain Rule)
a → v → J처럼 변수가 단계를 거쳐 영향을 줄 때:

```
dJ/da = dJ/dv × dv/da
```

앞서 계산한 dJ/dv를 재사용하므로 역전파가 효율적

### 코드 변수명 규칙
- 항상 최종 출력 J(또는 손실 L)에 대한 도함수
- 변수 `x`에 대해 `dx` = dJ/dx
- 전체 변수명을 `dJdx`로 쓰는 것보다 간결

---

## 예시

```python
# 순전파
a, b, c = 5, 3, 2
u = b * c       # 6
v = a + u       # 11
J = 3 * v       # 33

# 역전파 (연쇄 법칙)
dv = 3          # dJ/dv = 3 (J = 3v)
da = dv * 1     # dJ/da = dJ/dv × dv/da = 3×1 = 3
du = dv * 1     # dJ/du = dJ/dv × dv/du = 3×1 = 3
db = du * c     # dJ/db = dJ/du × du/db = 3×2 = 6
dc = du * b     # dJ/dc = dJ/du × du/dc = 3×3 = 9

print(f"dv={dv}, da={da}, du={du}, db={db}, dc={dc}")
# dv=3, da=3, du=3, db=6, dc=9

# 수치 미분으로 검증
eps = 1e-5
print(f"dJ/db 수치 검증: {(3*(a + (b+eps)*c) - J) / eps:.2f}")  # ≈ 6.0
print(f"dJ/dc 수치 검증: {(3*(a + b*(c+eps)) - J) / eps:.2f}")  # ≈ 9.0
```

---

## 요약
- 역전파 = 계산 그래프를 **오른쪽 → 왼쪽**으로 따라가며 도함수 계산
- **연쇄 법칙**: dJ/dx = dJ/d중간변수 × d중간변수/dx
- 이전 단계의 도함수를 재사용하므로 계산 효율이 높음
- 코드 변수명: `dv`, `da`, `du`, `db`, `dc` = 각각 dJ/d변수
- 다음 강의: 로지스틱 회귀에서 실제로 역전파 적용
