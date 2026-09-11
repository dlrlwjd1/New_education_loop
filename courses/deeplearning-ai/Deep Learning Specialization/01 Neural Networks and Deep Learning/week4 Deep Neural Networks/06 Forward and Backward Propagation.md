# 06 Forward and Backward Propagation

## 개요
- 앞 영상의 구성 요소(forward/backward function)를 **실제 식으로 구현**한다.

---

## 내용

### Forward function (층 l)
```
입력: a⁽ˡ⁻¹⁾  →  출력: a⁽ˡ⁾ (+ cache z⁽ˡ⁾, 편의상 W·b도)

단일:   z⁽ˡ⁾ = W⁽ˡ⁾ a⁽ˡ⁻¹⁾ + b⁽ˡ⁾ ;  a⁽ˡ⁾ = g⁽ˡ⁾(z⁽ˡ⁾)
벡터화: Z⁽ˡ⁾ = W⁽ˡ⁾ A⁽ˡ⁻¹⁾ + b⁽ˡ⁾ ;  A⁽ˡ⁾ = g⁽ˡ⁾(Z⁽ˡ⁾)   (b는 브로드캐스팅)
```
- 첫 입력은 A⁽⁰⁾ = X.

### Backward function (층 l)
```
입력: da⁽ˡ⁾  →  출력: da⁽ˡ⁻¹⁾, dW⁽ˡ⁾, db⁽ˡ⁾

단일:
  dz⁽ˡ⁾    = da⁽ˡ⁾ * g⁽ˡ⁾′(z⁽ˡ⁾)      # * 원소별 곱
  dW⁽ˡ⁾    = dz⁽ˡ⁾ a⁽ˡ⁻¹⁾ᵀ
  db⁽ˡ⁾    = dz⁽ˡ⁾
  da⁽ˡ⁻¹⁾  = W⁽ˡ⁾ᵀ dz⁽ˡ⁾

벡터화:
  dZ⁽ˡ⁾    = dA⁽ˡ⁾ * g⁽ˡ⁾′(Z⁽ˡ⁾)
  dW⁽ˡ⁾    = (1/m) dZ⁽ˡ⁾ A⁽ˡ⁻¹⁾ᵀ
  db⁽ˡ⁾    = (1/m) np.sum(dZ⁽ˡ⁾, axis=1, keepdims=True)
  dA⁽ˡ⁻¹⁾  = W⁽ˡ⁾ᵀ dZ⁽ˡ⁾
```

### 역전파 초기값 (da⁽ᴸ⁾)
- 이진 분류(로지스틱 손실)에서 마지막 층 da:
  ```
  da⁽ᴸ⁾ = −y/a + (1−y)/(1−a)
  ```
- 벡터화 시 각 예제에 대해 위 식을 가로로 쌓아 dA⁽ᴸ⁾로 초기화.

### 전체 흐름 (3층 예시: ReLU → ReLU → Sigmoid)
```
X → 층1(ReLU) → 층2(ReLU) → 층3(Sigmoid) → Ŷ → Loss
   ← dW1,db1  ← dW2,db2   ← dW3,db3    ← (dA⁽ᴸ⁾로 시작)
   cache: Z1, Z2, Z3
```

### 강사의 조언
- 식이 많아 헷갈리면, **프로그래밍 과제**를 하면 훨씬 구체적으로 이해된다.
- 역전파 유도는 머신러닝에서 어려운 편(선형대수+미적분).
- "머신러닝의 복잡성 상당수는 코드가 아니라 **데이터**에서 온다" — 코드는 길지 않아도 데이터가 많아 잘 작동.

---

## 요약
- forward: z=Wa+b, a=g(z), cache z.
- backward: dz=da*g′(z), dW=(1/m)dZ·Aᵀ, db=(1/m)Σdz, da⁽ˡ⁻¹⁾=Wᵀdz.
- 역전파 시작값 da⁽ᴸ⁾ = −y/a + (1−y)/(1−a) (이진 분류).

## 다음 주제
- 파라미터 vs 하이퍼파라미터 (Parameters vs Hyperparameters)
