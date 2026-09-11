# 02 Multivariate chain rule

## 개요
- 강좌: Mathematics for Machine Learning - Multivariate Calculus (Imperial College London)
- 모듈: Module 3 — Multivariate chain rule and its applications
- [MOOC 원본 강의](https://www.mooc.org/learn/multivariate-calculus-machine-learning/lecture/Sjr26/multivariate-chain-rule)
- [모듈 2의 전미분](../Module%202%20-%20Multivariate%20calculus/03%20Differentiate%20with%20respect%20to%20anything.md)을 **일반화하고 표기를 벡터로 단순화**한다.

---

## 내용

### 출발점 — 전미분 복습
다변수 함수 `f(x, y, z)` 가 있고 x, y, z가 각각 어떤 추가 변수 t의 함수일 때:
```
df/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt) + (∂f/∂z)(dz/dt)
```
> 이것은 **f를 t에 잇는 세 변수 각각의 사슬을 합한 것**이다.
>
> ⭐ **처음부터 전부 대입하는 대신 조각별(piecewise)로 계산할 수 있게 해 준다. 그리고 컴퓨터는 조각별 문제를 아주 빠르게 잘 푼다.**

### 일반화 — n개 변수, 벡터 표기 ⭐
n개 변수의 함수 `f(x₁, x₂, ..., xₙ)` 를 **`f(x)`** 로 쓴다.

> ⚠️ **x를 굵게(bold)** 쓴 것은 **이것이 변수들의 나열이며, 이제 n차원 벡터로 생각하는 편이 편하다는 것을 기억시키기 위해서**다.

- x의 각 성분이 다시 **어떤 다른 변수 t의 함수**이고, 우리가 원하는 것은 **`df/dt`**.
- 필요한 것 두 묶음:
  - **f를 x의 각 성분으로 편미분한 것들** → n차원 벡터
  - **x의 각 성분을 t로 미분한 것들** → n차원 벡터

### 내적으로 쓰기 ⭐
> 우리가 만들려는 것은 **같은 위치에 있는 항들끼리 곱해서 모두 더한 것**이다.
>
> **선형대수를 떠올리면, 이것이 바로 내적(dot product)이 하는 일이다.**

```
df/dt = (∂f/∂x) · (dx/dt)
```
- 벡터를 전부 풀어 쓸 필요 없이 **다변수 도함수 표현들의 내적**으로 간결하게 적을 수 있다.

### 부수적 확인
> 이미 지난 모듈에서 실전으로 본 것이지만, 짚어 둘 가치가 있다 —
>
> **나머지 시간 절약 규칙들(합·거듭제곱·곱)은 다변량 문제에서도 이미 그대로 작동한다.**

---

## 요약
- **다변량 연쇄 법칙: `df/dt = (∂f/∂x) · (dx/dt)`** — **두 벡터의 내적**으로 간결하게 표현된다.
- 이는 전미분 `Σ (∂f/∂xᵢ)(dxᵢ/dt)` 을 벡터 표기로 다시 쓴 것이다.
- **굵은 x는 벡터**를 뜻한다.
- **조각별 계산이라 컴퓨터에 적합**하다 — 이것이 신경망 훈련이 가능한 이유다.
- **합·거듭제곱·곱의 법칙은 다변량에서도 그대로 쓴다.**

## 다음 주제
- [03 More multivariate chain rule.md](03%20More%20multivariate%20chain%20rule.md)
