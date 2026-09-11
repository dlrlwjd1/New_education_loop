# 05 Solving the apples and bananas problem: Gaussian elimination

## 개요
- 강좌: Mathematics for Machine Learning - Linear Algebra (Imperial College London)
- 모듈: Module 3 — Matrices in Linear Algebra: Objects that operate on Vectors
- 강사: David Dye
- [MOOC 원본 강의](https://www.mooc.org/learn/linear-algebra-machine-learning/lecture/L4Ec2/solving-the-apples-and-bananas-problem-gaussian-elimination)
- ⭐ **가우스 소거법(Gaussian elimination)** 으로 드디어 사과-바나나 문제를 푼다. **역행렬(inverse)** 개념도 여기서 나온다.

---

## 내용

### 역행렬의 아이디어 ⭐
```
A r = s          (A는 행렬, r은 구하려는 가격 벡터, s는 청구액)
```
> **A를 곱하면 항등행렬이 되는 행렬**을 생각하고 **A⁻¹** 이라 부른다. **A가 하는 일을 정확히 되돌리기** 때문에 **A의 역(inverse)** 이라 한다.
```
A⁻¹ A = I

양변 왼쪽에 A⁻¹ 을 곱하면:
A⁻¹ A r = A⁻¹ s
→ I r = A⁻¹ s
→ r = A⁻¹ s
```
> **A의 역을 찾을 수 있으면 문제가 풀린다.**

⚠️ **다만 역행렬까지 가지 않아도 이 문제는 풀 수 있다** — **대입(substitution)** 으로.

### 3변수 예제 — 사과·바나나·당근
```
⎡ 1  1  3 ⎤ ⎡ a ⎤   ⎡ 15 ⎤
⎢ 1  2  4 ⎥ ⎢ b ⎥ = ⎢ 21 ⎥
⎣ 1  1  2 ⎦ ⎣ c ⎦   ⎣ 13 ⎦
```

### 핵심 통찰 ⭐
> **한 행을 다른 행에서 빼도 아무것도 바뀌지 않는다.**
>
> 사과 1 + 바나나 1 + 당근 3 = 15 임을 알고 있으니, **그것을 다음 행에서 빼도 그 행에 대해 실질적으로 바뀐 것이 없다.**

### 소거(elimination)
```
행2 − 행1:  (0, 1, 1 | 21 − 15 = 6)
행3 − 행1:  (0, 0, −1 | 13 − 15 = −2)

⎡ 1  1   3 ⎤   ⎡ 15 ⎤
⎢ 0  1   1 ⎥ = ⎢  6 ⎥
⎣ 0  0  −1 ⎦   ⎣ −2 ⎦
```
> 셋째 행에서 **−c = −2 → c = 2**. 행3에 −1을 곱해 정리한다.

⭐ **이제 삼각행렬(triangular matrix)** — **주대각선 아래가 전부 0**이다. 이 형태를 **에셜론 형태(echelon form)** 라 한다.

### 후진 대입(back substitution) ⭐
```
c = 2 를 위 두 행에 되돌려 넣는다.

행2에서 1×c를 빼고, 행1에서 3×c를 뺀다:
⎡ 1  1  0 ⎤   ⎡ 15 − 3×2 = 9 ⎤
⎢ 0  1  0 ⎥ = ⎢  6 − 1×2 = 4 ⎥
⎣ 0  0  1 ⎦   ⎣            2 ⎦

→ b = 4
그다음 행1에서 b를 빼면:
⎡ 1  0  0 ⎤   ⎡ 9 − 4 = 5 ⎤
⎢ 0  1  0 ⎥ = ⎢         4 ⎥
⎣ 0  0  1 ⎦   ⎣         2 ⎦
```

**해답**
```
사과 = 5 유로,  바나나 = 4 유로,  당근 = 2 유로
```

### 무엇을 한 것인가 ⭐
| 단계 | 내용 |
|---|---|
| **소거(elimination)** | 행의 배수를 서로 빼서 **주대각선 아래를 0으로** 만든다 → 삼각형(에셜론) 형태 |
| **후진 대입(back substitution)** | 아래 행의 답을 위 행들에 되돌려 넣어 올라간다 |

> ⭐ **이 과정에서 A가 항등행렬로 변환됐다.** 주대각선에만 1이 있고 나머지는 0이다. **이것이 역행렬을 찾는 열쇠**다 → [다음 강의](06%20Going%20from%20Gaussian%20elimination%20to%20finding%20the%20inverse%20matrix.md).

### 평가
> **이것은 이 문제를 푸는 계산적으로 가장 효율적인 방법 중 하나이고, 매번 통하며, 비교적 적은 연산으로 할 수 있다는 점에서 이해하기도 아주 간단하다.**

⚠️ **한계**: 역행렬을 구하지 않았으므로 **이 특정한 출력 벡터 s에 대한 답만 찾았다.** 일반적인 경우의 역행렬을 구하면 **어떤 s에 대해서든** r을 찾을 수 있다.

---

## 요약
- **`A r = s` → `r = A⁻¹ s`.** 역행렬 `A⁻¹A = I`.
- ⭐ **한 행을 다른 행에서 빼도 방정식계는 변하지 않는다** — 이것이 소거법의 근거다.
- **소거** → 주대각선 아래를 0으로 만들어 **에셜론(삼각) 형태**.
- **후진 대입** → 아래에서 위로 답을 대입해 올라간다. 결과적으로 **A가 항등행렬이 된다.**
- 사과 5·바나나 4·당근 2 유로.
- 계산적으로 **가장 효율적인 방법 중 하나**지만, **이 s에 대해서만** 푼 것이다.

## 다음 주제
- [06 Going from Gaussian elimination to finding the inverse matrix.md](06%20Going%20from%20Gaussian%20elimination%20to%20finding%20the%20inverse%20matrix.md)
