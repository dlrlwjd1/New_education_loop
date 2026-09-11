# 10 Debiasing Word Embeddings

## 개요
- 단어 임베딩은 학습 텍스트의 **편향(bias)** — 성별/인종/성적 지향 등 — 을 학습한다. 이를 줄이는 방법. (Bolukbasi 등)
- (여기서 bias = bias-variance의 bias가 아니라 **사회적 편향**)

---

## 내용

### 문제
- "Man:Computer programmer = Woman:?" → 임베딩이 **"Homemaker"** 라 답하는 등 성별 고정관념 반영.
- "Father:Doctor = Mother:Nurse" 등.
- ML이 대입·채용·대출·양형 등 중요한 결정에 쓰이므로 편향 제거가 중요.

### 편향 제거 3단계 ⭐
1. **편향 방향 식별(identify bias direction)**:
   - e_he − e_she, e_male − e_female 등의 차이를 평균 → 성별 방향(1D 편향 부분공간).
   - 나머지 299차원 = 비편향(non-bias) 방향. (실제로는 SVD 사용, 편향이 1차원 이상일 수 있음)
2. **중립화(neutralize)**:
   - **정의상(definitional) 성별 단어가 아닌** 단어(doctor, babysitter 등)를 편향 방향에서 제거(투영)해 성 중립으로.
   - grandmother/grandfather처럼 성별이 정의에 포함된 단어는 제외.
3. **균등화(equalize)**:
   - (grandmother, grandfather), (boy, girl) 같은 쌍이 중립 단어(babysitter, doctor)로부터 **정확히 같은 거리**가 되도록 이동.
   - 예: babysitter가 grandmother에 더 가까운 편향 제거.

### 세부
- 어떤 단어를 중립화할지: **분류기**로 definitional 단어를 판별. 대부분 단어는 non-definitional이라 중립화 대상.
- 균등화할 쌍은 수가 적어 손으로 골라도 됨.

---

## 요약
- 임베딩 편향 제거 3단계: ① 편향 방향 식별 → ② 비-정의 단어 중립화 → ③ 성별 쌍 균등화.
- 활발히 연구 중인 중요한 문제.

## Week 2 마무리
- 단어 표현·임베딩, Word2Vec/negative sampling/GloVe, 감정 분류, 편향 제거 학습 완료.

## 다음 주제
- Week 3: 시퀀스 모델 & 어텐션 메커니즘
