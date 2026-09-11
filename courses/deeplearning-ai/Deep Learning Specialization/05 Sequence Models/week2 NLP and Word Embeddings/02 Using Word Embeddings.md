# 02 Using Word Embeddings

## 개요
- 단어 임베딩을 NLP 작업에 활용 = **전이 학습(transfer learning)**.

---

## 내용

### 일반화 예시 (NER)
- "Sally Johnson is an orange farmer" → Sally Johnson이 사람 이름.
- 임베딩을 쓰면 "Robert Lin is an **apple** farmer"에서 apple≈orange라 일반화 가능.
- 심지어 "durian cultivator"(희귀 단어)도 durian≈과일, cultivator≈farmer로 일반화.

### 왜 되나
- 임베딩 학습 알고리즘은 **대량의 비라벨(unlabeled) 텍스트**(10억~1000억 단어, 무료)를 분석해 유사 단어를 묶음.

### 전이 학습 절차 ⭐
1. **대량 텍스트로 임베딩 학습** (또는 사전 학습 임베딩 다운로드).
2. 임베딩을 **작은 라벨 데이터셋** 작업(NER 등)에 전이. one-hot(1만 차원, 희소) 대신 **300차원 dense 벡터**.
3. (선택) 새 작업 데이터가 크면 임베딩을 **fine-tune**. 작으면 하지 않음.
- 전이 학습은 A(대량)→B(소량)일 때 가장 유용.

### 유용성
- NER, 텍스트 요약, 상호참조 해결(coreference), 구문 분석에 유용.
- 언어 모델·기계 번역(전용 데이터 많음)엔 덜 유용.

### 얼굴 인코딩과의 관계
- "encoding"(얼굴 인식)과 "embedding"은 거의 같은 뜻.
- 차이: 얼굴 인식은 **처음 보는 얼굴**도 인코딩; 단어 임베딩은 **고정 어휘집**의 각 단어에 고정 임베딩(나머지는 `<UNK>`).

---

## 요약
- 임베딩 = 대량 비라벨 텍스트로 학습 → 작은 라벨 작업에 전이 학습.
- 300차원 dense 벡터로 일반화·소량 학습 개선. 데이터 적으면 fine-tune 생략.

## 다음 주제
- 임베딩의 성질 (Properties of Word Embeddings)
