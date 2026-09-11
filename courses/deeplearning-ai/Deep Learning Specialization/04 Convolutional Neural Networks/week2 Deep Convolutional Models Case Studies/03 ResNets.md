# 03 ResNets

## 개요
- 아주 깊은 신경망은 경사 소실/폭발로 학습이 어렵다. **스킵 연결(skip connection)** 을 쓰는 **ResNet(잔차 네트워크)** 으로 100층 이상도 학습 가능.

---

## 내용

### 잔차 블록(residual block)
- 일반(plain) 경로: a⁽ˡ⁾ → z⁽ˡ⁺¹⁾ → a⁽ˡ⁺¹⁾ → z⁽ˡ⁺²⁾ → a⁽ˡ⁺²⁾.
- ResNet: a⁽ˡ⁾를 **지름길(shortcut/skip connection)** 로 두 층 뒤로 복사해, ReLU 적용 **전에** 더함:
  ```
  a⁽ˡ⁺²⁾ = g(z⁽ˡ⁺²⁾ + a⁽ˡ⁾)      # +a⁽ˡ⁾ 가 잔차 블록의 핵심
  ```
- a⁽ˡ⁾는 선형 계산 뒤·ReLU 앞에 주입됨.

### ResNet 구성
- 잔차 블록을 여러 개 쌓음 (plain network에 skip connection들을 추가).

### 왜 중요한가 ⭐
- **Plain network**: 층을 늘리면 훈련 오류가 줄다가 **다시 증가**(최적화가 어려워짐). 이론상 깊을수록 나아야 하는데 현실은 반대.
- **ResNet**: 층을 100층 이상 늘려도 훈련 오류가 **계속 감소** → 경사 소실/폭발 문제 완화, 초심층 학습 가능.
- (He, Zhang, Ren, Sun 제안. 1000층 실험도 있으나 실무엔 드묾.)

---

## 요약
- 잔차 블록 = skip connection으로 a⁽ˡ⁾을 두 층 뒤 ReLU 앞에 더함: a⁽ˡ⁺²⁾=g(z⁽ˡ⁺²⁾+a⁽ˡ⁾).
- plain network는 너무 깊으면 학습 악화, ResNet은 초심층도 학습 가능.

## 다음 주제
- ResNet이 왜 잘 되는가 (Why ResNets Work?)
