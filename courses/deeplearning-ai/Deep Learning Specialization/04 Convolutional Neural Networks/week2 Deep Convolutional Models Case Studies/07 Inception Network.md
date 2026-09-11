# 07 Inception Network

## 개요
- Inception 모듈을 여러 개 쌓은 것이 **Inception 네트워크(GoogLeNet)**.

---

## 내용

### Inception 모듈 (연산 절약 포함)
입력 28×28×192에 대해 각 분기:
- **1×1 conv** → 28×28×64
- **1×1 → 3×3** conv → 28×28×128 (1×1은 병목)
- **1×1 → 5×5** conv → 28×28×32 (1×1은 병목)
- **MaxPool(same) → 1×1 conv** → 28×28×32 (pooling 후 1×1로 채널 축소)
- → 채널 concat: 64+128+32+32 = **28×28×256**.
- ⚠️ pooling 분기: same padding max pool은 채널이 그대로(192)라 커지므로, **1×1 conv로 채널 축소** 후 concat.

### Inception 네트워크
- 위 모듈을 **여러 위치에 반복**. 중간중간 max pool로 H·W 축소.
- **side branch(보조 분류기)**: 중간 은닉층에서도 softmax로 예측 → 중간 층 특징도 예측에 유용하도록 유도, **정규화 효과**(과적합 방지).
- **GoogLeNet** — LeNet에 경의를 표하는 이름. (이름 "Inception"은 "we need to go deeper" 밈에서 유래)

### 이후 버전
- Inception V2/V3/V4, ResNet과 결합한 Inception-ResNet 등.

---

## 요약
- Inception 네트워크 = Inception 모듈(1×1 병목 포함)을 반복해 쌓은 것 = GoogLeNet.
- 보조 분류기(side branch)로 정규화 효과.

## 다음 주제
- MobileNet
