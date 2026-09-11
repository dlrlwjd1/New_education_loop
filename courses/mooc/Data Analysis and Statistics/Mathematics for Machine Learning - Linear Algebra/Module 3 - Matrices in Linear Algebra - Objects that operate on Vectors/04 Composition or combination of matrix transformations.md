# 04 Composition or combination of matrix transformations

## 개요
- 강좌: Mathematics for Machine Learning - Linear Algebra (Imperial College London)
- 모듈: Module 3 — Matrices in Linear Algebra: Objects that operate on Vectors
- 강사: David Dye
- [MOOC 원본 강의](https://www.mooc.org/learn/linear-algebra-machine-learning/lecture/VF5Js/composition-or-combination-of-matrix-transformations)
- **변환을 이어서 하는 것(합성) = 행렬 곱셈.** ⚠️ **행렬 곱은 교환법칙이 성립하지 않는다.**

---

## 내용

### 왜 이 변환들을 배웠나 ⭐
> **얼굴 이미지의 모든 픽셀 같은 어떤 형태 변형이든, 회전·전단·스케일·역변환의 조합으로 항상 만들 수 있다.**

벡터 r에 먼저 **A₁**을 적용하고 그 결과에 **A₂**를 적용하면, **두 변환의 합성(composition)** 을 수행한 것이다.

### 구체 예제 ⭐
```
A₁ = 90도 반시계 회전
     ê₁ → (0, −1),  ê₂ → (1, 0)
     A₁ = ⎡ 0  1 ⎤
          ⎣ −1 0 ⎦

A₂ = 수직 거울
     ê₁ → (−1, 0),  ê₂ → (0, 1)
     A₂ = ⎡ −1  0 ⎤
          ⎣  0  1 ⎦
```

**A₂ 다음 A₁ (즉 A₂A₁)**
- ê₁′ = (0, −1) 을 수직 반사 → **그대로 (0, −1)**
- ê₂′ = (1, 0) 을 수직 반사 → **(−1, 0)**
```
A₂A₁ = ⎡  0  −1 ⎤
       ⎣ −1   0 ⎦
```

**행렬 곱으로 계산하면** — A₂를 A₁의 각 열(변환된 기저 벡터)에 적용한다.
```
A₂ · A₁ 의 (1열): A₂ × (0, −1)
   1행: (−1)(0) + (0)(−1) = 0
   2행: (0)(0) + (1)(−1) = −1
A₂ · A₁ 의 (2열): A₂ × (1, 0)
   1행: (−1)(1) + (0)(0) = −1
   2행: (0)(1) + (1)(0) = 0
→ 같은 결과 ✓
```
> ⭐ **모든 행·열 조합에 대해 "행 × 열"을 하면 된다. 이것이 행렬 합성 = 행렬 곱셈이다.**

### 순서를 바꾸면 결과가 다르다 ⚠️⭐
**A₁ 다음 A₂ (즉 A₁A₂)**
```
A₁ · A₂ = ⎡ 0  1 ⎤
          ⎣ 1  0 ⎦
```
> 앞의 결과와 **마이너스 부호들이 뒤집혀 있다.** 기하학적으로도 확인된다 — 회전 후 뒤집기와 뒤집기 후 회전은 **다른 거울면을 놓은 것**과 같다.

> ⭐⭐ **행렬 곱셈은 교환법칙이 성립하지 않는다(not commutative).**
> ```
> A₂A₁ ≠ A₁A₂
> ```
> **순서를 바꿀 수 없으므로 매우 조심해야 한다.**

### 결합법칙은 성립한다 ⭐
```
A₃(A₂A₁) = (A₃A₂)A₁          ← associative
```
> **어느 것을 먼저 묶어 계산하든 상관없다.** 다만 **순서 자체를 바꿀 수는 없다.**

---

## 요약
- **어떤 형태 변형이든 회전·전단·스케일·반전의 조합**으로 만들 수 있다.
- **변환의 합성 = 행렬 곱셈.** 계산은 **"행 × 열"을 모든 조합에 대해**.
- ⚠️⭐ **행렬 곱은 교환적이지 않다: `A₂A₁ ≠ A₁A₂`.** 순서를 바꾸면 다른 변환이 된다.
- **결합적이다: `A₃(A₂A₁) = (A₃A₂)A₁`.** 묶는 방식은 자유롭지만 **순서는 고정**이다.

## 다음 주제
- [05 Solving the apples and bananas problem - Gaussian elimination.md](05%20Solving%20the%20apples%20and%20bananas%20problem%20-%20Gaussian%20elimination.md)
