# 08 Vanishing Gradients with RNNs

## 개요
- 기본 RNN은 **경사 소실(vanishing gradients)** 때문에 **장거리 의존성(long-term dependencies)** 을 잘 못 잡는다.

---

## 내용

### 문제: 장거리 의존성
- 예: "The **cat** which already ate ... **was** full" vs "The **cats** ... **were** full".
- 단수/복수(cat/cats)가 멀리 떨어진 was/were를 결정 → 중간 내용이 임의로 길 수 있음.
- 기본 RNN은 시점이 아주 많으면(1,000 시점 = 1,000층 신경망) 경사가 **뒤로 전파되며 지수적으로 감소** → 초반 정보가 후반 출력에 영향을 주기 어려움.
- 결과: 출력이 **가까운 입력에만 강하게 영향** 받음(local influence).

### 경사 폭발(exploding gradients)
- 경사가 지수적으로 **커질** 수도 있음. 파라미터가 NaN이 되는 등 눈에 띔.
- 해결: **gradient clipping** — 경사 벡터가 임계값을 넘으면 재조정(clip). 비교적 robust.

### 정리
- **경사 소실이 더 큰 문제**(폭발은 clipping으로 해결) → GRU/LSTM으로 해결(다음 영상).

---

## 요약
- 기본 RNN은 경사 소실로 장거리 의존성 학습이 어려움.
- 경사 폭발은 gradient clipping으로, 경사 소실은 GRU/LSTM으로 해결.

## 다음 주제
- GRU (Gated Recurrent Unit)
