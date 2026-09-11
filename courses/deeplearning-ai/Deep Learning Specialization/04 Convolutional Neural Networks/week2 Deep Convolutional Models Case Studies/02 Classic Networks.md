# 02 Classic Networks

## 개요
- 고전 CNN 아키텍처 3가지: **LeNet-5, AlexNet, VGG-16**.

---

## 내용

### LeNet-5 (1998, LeCun)
- 목적: 손글씨 숫자 인식(grayscale 32×32×1).
- 구조: Conv(6, 5×5) → AvgPool → Conv(16, 5×5) → AvgPool → FC(120) → FC(84) → 출력(10).
- 특징: H·W 감소(32→28→14→10→5), 채널 증가(1→6→16). **약 6만 파라미터**.
- (당시엔 sigmoid/tanh, avg pooling, valid conv 사용. 지금은 ReLU/max pooling/softmax.)

### AlexNet (2012, Krizhevsky/Sutskever/Hinton)
- 입력 227×227×3. Conv(96,11×11,s=4) → MaxPool → Conv(256,5×5,same) → MaxPool → Conv 여러 개 → MaxPool → FC(4096)×2 → Softmax(1000).
- **약 6천만 파라미터** (LeNet의 1000배). ImageNet으로 학습, **ReLU** 사용.
- 컴퓨터 비전 커뮤니티가 딥러닝을 진지하게 받아들이게 한 논문.
- (당시 2개 GPU 분산 학습, Local Response Normalization(LRN) 사용 — 지금은 거의 안 씀.)

### VGG-16 (2015, Simonyan/Zisserman)
- **단순·균일한 설계**: Conv는 모두 **3×3, s=1, same**, MaxPool은 모두 **2×2, s=2**.
- 구조: [Conv64×2 → Pool] → [Conv128×2 → Pool] → [Conv256×3 → Pool] → [Conv512×3 → Pool] ×2 → FC(4096)×2 → Softmax.
- 규칙: Pool마다 H·W 절반, Conv 스택마다 **채널 2배**(64→128→256→512).
- **16 = 가중치 있는 층 수**. **약 1억 3800만 파라미터**(큼). VGG-19도 있으나 VGG-16이 거의 동등해 더 많이 씀.

---

## 요약
- LeNet-5(6만 파라미터, 숫자 인식), AlexNet(6천만, ReLU/ImageNet), VGG-16(1.38억, 3×3 conv·2×2 pool의 균일 설계).
- 공통: 깊어질수록 H·W↓, 채널↑.

## 다음 주제
- ResNets (잔차 네트워크)
