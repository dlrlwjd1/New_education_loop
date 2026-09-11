# 03 Differentiate with respect to anything

## 개요
- 강좌: Mathematics for Machine Learning - Multivariate Calculus (Imperial College London)
- 모듈: Module 2 — Multivariate calculus
- [MOOC 원본 강의](https://www.mooc.org/learn/multivariate-calculus-machine-learning/lecture/zZrRk/differentiate-with-respect-to-anything)
- 조금 더 까다로운 편미분 예제와, **전미분(total derivative)** 의 도입.

---

## 내용

### 편미분 예제 — `f(x,y,z) = sin(x)·e^(yz²)`
```
∂f/∂x = cos(x)·e^(yz²)
  ← 지수 항에 x가 없으므로 상수 취급, sin은 cos으로

∂f/∂y = sin(x)·e^(yz²)·z²
  ← sin 항에 y가 없으므로 상수 취급
  ← 지수 항은 연쇄 법칙을 쓰거나, "지수의 도함수를 앞에 곱한다"고 기억하면 된다
  ← yz²를 y로 미분하면 z²

∂f/∂z = sin(x)·e^(yz²)·2yz
  ← 같은 논리, yz²를 z로 미분하면 2yz
```

### 전미분(total derivative) ⭐
이제 **x, y, z가 사실 모두 어떤 하나의 파라미터 t의 함수**라고 하자.
```
x = t − 1,    y = t²,    z = 1/t
```
우리가 원하는 것은 **`df/dt`**.

**방법 1 — 직접 대입**: 세 변수를 t로 바꿔 넣고 정리한 뒤 t로 미분한다. → 결과 `sin(t−1)·e`
- ⚠️ **변수가 많은 복잡한 상황에서는 미분해야 할 식이 감당 못 할 만큼 복잡해질 수 있고, 애초에 깔끔한 해석적 표현이 없을 수도 있다.**

**방법 2 — 연쇄 법칙의 논리 (전미분)** ⭐
> **새 변수 t에 대한 도함수는 다른 세 변수를 거치는 사슬들의 합이다.**
```
df/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt) + (∂f/∂z)(dz/dt)
```

필요한 나머지 조각:
```
dx/dt = 1
dy/dt = 2t
dz/dt = −t⁻²        ← 1/t 의 도함수 (모듈 1의 1/x 예제)
```

- 대입하면 **처음엔 식이 꽤 괴물**이지만, x·y·z를 전부 t로 바꾸고 정리하면 **둘째 항과 셋째 항이 부호만 반대인 같은 항이라 서로 소거**된다.
- 그러면 **놀랍게도 방법 1과 똑같은 결과**에 도달한다.

---

## 요약
- 편미분은 **해당 변수가 없는 항을 상수로 보고 0으로 날리는 것**이 요령이다. 지수 항은 **지수의 도함수를 앞에 곱한다.**
- **전미분: `df/dt = Σ (∂f/∂xᵢ)(dxᵢ/dt)`** — 여러 변수를 거치는 **사슬들의 합**.
- 직접 대입해도 같은 답이 나오지만, **식이 감당 불가하거나 해석적 표현이 아예 없을 때 전미분이 답이다.**
- 이 조각별(piecewise) 계산 방식은 **컴퓨터가 특히 잘한다** — [모듈 3](../Module%203%20-%20Multivariate%20chain%20rule%20and%20its%20applications/02%20Multivariate%20chain%20rule.md)에서 이어진다.

## 다음 주제
- [04 The Jacobian.md](04%20The%20Jacobian.md)
