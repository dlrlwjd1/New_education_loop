# 05 Strided Convolutions

## 개요
- **스트라이드(stride)**: 필터를 한 칸이 아니라 s칸씩 이동하며 합성곱.

---

## 내용

### 예: 7×7 * 3×3, stride=2
- 필터를 **2칸씩** 이동(가로·세로 모두) → 출력 3×3.

### 출력 크기 공식 ⭐
```
출력 = ⌊(n + 2p − f)/s + 1⌋ × ⌊(n + 2p − f)/s + 1⌋
```
- 예: (7+0−3)/2 + 1 = 3.
- 정수가 아니면 **내림(floor)** — 필터가 이미지(+패딩) 안에 완전히 들어올 때만 계산.

### Cross-correlation vs Convolution (기술적 참고)
- 수학 교과서의 합성곱은 원래 필터를 **상하·좌우로 뒤집은(flip)** 뒤 계산 → 결합법칙(associativity) 성립, 신호처리에 유용.
- 딥러닝에선 이 뒤집기를 **생략** → 엄밀히는 **cross-correlation**이지만 관례상 그냥 **convolution**이라 부름.
- 딥러닝 성능·구현엔 영향 없음.

---

## 요약
- stride s로 필터를 s칸씩 이동. 출력 = ⌊(n+2p−f)/s+1⌋ (정수 아니면 내림).
- 딥러닝의 "convolution"은 사실 뒤집기 없는 cross-correlation.

## 다음 주제
- 볼륨(3D)에 대한 합성곱 (Convolutions Over Volume)
