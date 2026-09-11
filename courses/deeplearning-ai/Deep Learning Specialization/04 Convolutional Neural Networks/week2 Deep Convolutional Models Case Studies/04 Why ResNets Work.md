# 04 Why ResNets Work?

## 개요
- ResNet이 잘 되는 핵심: **항등 함수(identity function)를 쉽게 학습**할 수 있어 층을 더해도 성능을 해치지 않는다.

---

## 내용

### 항등 함수를 쉽게 배운다 ⭐
- 잔차 블록: `a⁽ˡ⁺²⁾ = g(W⁽ˡ⁺²⁾a⁽ˡ⁺¹⁾ + b⁽ˡ⁺²⁾ + a⁽ˡ⁾)`.
- L2 정규화(weight decay)로 W⁽ˡ⁺²⁾ → 0, b → 0 이 되면:
  ```
  a⁽ˡ⁺²⁾ = g(a⁽ˡ⁾) = a⁽ˡ⁾   (ReLU + 비음수 활성값)
  ```
- 즉 두 층을 더해도 **최소한 항등 함수를 배워** 성능이 나빠지지 않음. 운이 좋으면(유용한 것을 배우면) 더 좋아짐.
- 반면 **plain net**은 깊어지면 항등 함수조차 배우기 어려워 성능이 악화.
- ResNet은 "성능을 해치지 않는" 지점에서 시작해 경사 하강이 개선만 하면 됨.

### 차원 맞추기
- z⁽ˡ⁺²⁾ + a⁽ˡ⁾ 를 더하려면 **차원이 같아야** 함 → ResNet은 **same convolution**을 많이 씀(차원 보존).
- 차원이 다르면(예: 128→256) **W_s 행렬**을 곱함:
  ```
  a⁽ˡ⁺²⁾ = g(z⁽ˡ⁺²⁾ + W_s · a⁽ˡ⁾)   # W_s: 256×128
  ```
  - W_s는 학습 파라미터이거나 zero-padding 고정 행렬.

### 이미지에서의 ResNet
- plain network(conv 여러 층 → softmax)에 skip connection 추가.
- 대부분 **3×3 same conv** → 차원 보존으로 덧셈 가능. 중간에 pooling 시 W_s로 차원 조정.
- 패턴: conv·conv·conv·pool 반복 → 마지막 FC + softmax.

---

## 요약
- ResNet은 잔차 블록이 항등 함수를 쉽게 학습 → 층을 더해도 성능 손실 없음(개선 여지만 남음).
- 덧셈을 위해 same conv(차원 보존), 차원 다르면 W_s 행렬 사용.

## 다음 주제
- 1×1 합성곱 (Networks in Networks and 1x1 Convolutions)
