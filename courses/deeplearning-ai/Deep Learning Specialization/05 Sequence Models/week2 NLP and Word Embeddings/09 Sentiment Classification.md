# 09 Sentiment Classification

## 개요
- **감정 분류(sentiment classification)**: 텍스트를 보고 호/불호(예: 별점)를 판단. 임베딩으로 작은 데이터셋에서도 잘 됨.

---

## 내용

### 문제
- 입력 X(리뷰 텍스트) → 출력 Y(별점 1~5).
- 라벨 데이터가 적을 수 있음(1만~10만 단어) → 임베딩이 도움.

### 모델 1: 평균 + softmax
- 각 단어 one-hot → E → 임베딩(300차원) → **모두 합/평균** → softmax(5-way) → ŷ.
- 장점: 리뷰 길이 무관(합/평균).
- **단점: 단어 순서 무시** ⚠️
  - "completely lacking **good** taste, **good** service, **good** ambience"(1점)에 good이 많아 **긍정으로 오판**.

### 모델 2: RNN (many-to-one) ⭐
- 각 단어 임베딩 → **RNN** → 마지막 시점에서 ŷ 예측.
- **단어 순서를 반영** → "not good", "lacking good taste"가 부정임을 인식.
- 임베딩이 대량 코퍼스로 학습됐으므로, 라벨 세트에 없던 단어(예: "absent")도 일반화 가능.

---

## 요약
- 감정 분류: 평균+softmax(순서 무시, 단순) vs RNN many-to-one(순서 반영, 우수).
- 임베딩 덕에 작은 라벨셋으로도 효과적, 미등장 단어도 일반화.

## 다음 주제
- 단어 임베딩의 편향 제거 (Debiasing Word Embeddings)
