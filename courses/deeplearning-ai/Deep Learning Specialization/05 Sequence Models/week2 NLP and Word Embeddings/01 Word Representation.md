# 01 Word Representation

## 개요
- **단어 임베딩(word embedding)**: 단어를 특징 벡터로 표현해, 알고리즘이 "Man:Woman = King:Queen" 같은 유추를 이해하게 함.

---

## 내용

### one-hot의 한계
- one-hot 벡터는 각 단어를 **독립적으로** 취급 → 단어 간 일반화 불가.
- "orange juice"를 배워도 "apple juice"로 일반화 못 함.
- 이유: **임의의 두 one-hot 벡터의 내적 = 0**, 거리도 모두 동일 → apple과 orange가 king·orange보다 유사하다는 걸 모름.

### 특징 기반 표현 (featurized representation)
- 각 단어에 여러 특징 값(예: gender, royal, age, food ...)을 부여.
  - 예: man(gender −1), woman(+1), king(−0.95), queen(+0.97), apple/orange(≈0, food 높음).
- 예: **300차원 벡터**로 표현 → e_5391(man), e_9853(woman) 등.
- apple과 orange의 벡터가 유사 → "apple juice"로 일반화 가능.
- (실제 특징은 gender/royal처럼 해석 가능한 형태는 아님.)

### 임베딩(embedding)
- 단어를 300차원 공간의 **한 점에 임베드(embed)**.
- **t-SNE**로 2D로 투영해 시각화하면, man/woman, king/queen, 과일, 숫자 등이 **끼리끼리 묶임**.

---

## 요약
- one-hot은 단어 간 유사성을 못 담음 → **특징 벡터(임베딩, 예: 300차원)** 로 표현해 유사 단어를 가깝게.
- 임베딩으로 NLP 일반화가 크게 개선. t-SNE로 시각화 가능.

## 다음 주제
- 단어 임베딩 사용법 (Using Word Embeddings)
