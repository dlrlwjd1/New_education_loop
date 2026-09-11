# 06 Word2Vec

## 개요
- **Word2Vec** (Mikolov 등): 임베딩을 더 단순·효율적으로 학습. 대표 모델 **Skip-gram**.

---

## 내용

### Skip-gram 모델
- **컨텍스트 단어 c**(예: orange)를 무작위로 고르고, 그 **±5~10 단어 윈도우** 안에서 무작위로 **타깃 t**(예: juice, glass, my)를 골라 (c→t) 예측하는 지도학습.
- 이 문제 자체를 잘 푸는 게 목표가 아니라, **좋은 임베딩을 얻는 것**이 목적.

### 모델 & 손실
- o_c → **e_c = E·o_c** → softmax → ŷ.
```
P(t | c) = exp(θ_tᵀ e_c) / Σ_{j=1}^{10000} exp(θ_jᵀ e_c)
```
- θ_t = 출력 t의 파라미터.
- 손실: `L = − Σ yᵢ log ŷᵢ` (softmax 교차 엔트로피).

### 문제: 계산 비용 ⚠️
- softmax 분모가 **전체 어휘(1만~100만)에 대한 합** → 느림.
- 해결책 1: **계층적 softmax(hierarchical softmax)** — 이진 분류 트리로 O(log|V|). 흔한 단어는 트리 위, 희귀 단어는 아래.
- 해결책 2: **negative sampling**(다음 영상, 더 간단·효과적).

### 컨텍스트 c 샘플링
- 균등 샘플링하면 the/of/a 등 **빈출어가 지배** → 희귀어(durian 등) 임베딩 갱신 부족.
- 실무: 빈출어와 희귀어의 균형을 맞추는 **휴리스틱** 사용.

### CBOW
- Word2Vec의 다른 모델 **CBOW(Continuous Bag of Words)**: 주변 단어로 가운데 단어 예측. (skip-gram과 장단점 다름)

---

## 요약
- Skip-gram: 컨텍스트로 주변 단어를 예측하며 임베딩 학습. 손실은 softmax.
- softmax 분모 합이 비싸 → 계층적 softmax / negative sampling으로 해결.

## 다음 주제
- Negative Sampling
