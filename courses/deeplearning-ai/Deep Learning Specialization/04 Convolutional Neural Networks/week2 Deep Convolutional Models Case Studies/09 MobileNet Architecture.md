# 09 MobileNet Architecture

## 개요
- Depthwise separable conv를 쌓아 만든 **MobileNet v1**과, 이를 개선한 **v2(bottleneck block)**.

---

## 내용

### MobileNet v1
- 비싼 일반 합성곱 자리에 **depthwise separable conv 블록**을 사용.
- 이 블록을 **13번** 반복 → 마지막에 Pool → FC → Softmax.
- 일반 합성곱보다 훨씬 저렴하면서 좋은 성능.

### MobileNet v2 — 두 가지 변화
1. **잔차 연결(residual/skip connection)** 추가 (ResNet처럼, 경사 전파 개선).
2. **확장(expansion) 층** 추가.
- 블록을 **17번** 반복 → Pool → FC → Softmax.

### Bottleneck block (v2)
입력 n×n×3에 대해:
1. **Expansion**: 1×1 conv로 채널을 **6배 확장** (n×n×3 → n×n×18).
2. **Depthwise conv** (padding으로 크기 유지, n×n×18).
3. **Projection (pointwise 1×1 conv)**: 다시 채널 축소 (n×n×18 → n×n×3).
- residual 연결은 입력을 출력에 직접 더함.

### 왜 bottleneck인가 ⭐
- **확장**으로 블록 내부에서 표현을 키워 **더 풍부한 함수 학습**.
- **projection**으로 다시 줄여, 다음 블록에 넘길 **메모리(활성값 크기)를 작게** 유지.
- → 모바일/엣지 기기의 메모리 제약 하에서도 풍부한 계산 + 적은 자원.

---

## 요약
- MobileNet v1 = depthwise separable 블록 13회. v2 = bottleneck(확장→depthwise→projection) + residual, 17회.
- bottleneck은 내부에서 표현을 키우고(풍부한 학습) 출력은 작게(메모리 절약).

## 다음 주제
- EfficientNet
