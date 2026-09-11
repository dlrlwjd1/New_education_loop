# 03 Properties of Word Embeddings

## 개요
- 단어 임베딩은 **유추 추론(analogy reasoning)** 을 가능하게 한다. (Mikolov 등)

---

## 내용

### 유추: Man:Woman = King:?
- e_man − e_woman ≈ [−2, 0, 0, 0] (주로 gender 차이).
- e_king − e_queen ≈ [−2, 0, 0, 0] (역시 gender 차이) → 두 차이가 비슷.
- 따라서 "King − Man + Woman ≈ ?" 의 답을 찾으면 **Queen**.

### 알고리즘
- 다음을 최대화하는 단어 w를 찾음:
  ```
  argmax_w  sim( e_w ,  e_king − e_man + e_woman )
  ```
- 정확도는 논문마다 30~75%(정확한 단어를 맞혀야 정답).

### 유사도 함수: 코사인 유사도(cosine similarity) ⭐
```
sim(u, v) = (uᵀv) / (‖u‖ · ‖v‖)   = cos(두 벡터 사이 각 φ)
```
- 같은 방향 → 1, 직각 → 0, 반대 → −1.
- 유클리드 거리(u−v)² 도 가능하나(비유사도라 음수화), 보통 **코사인 유사도**를 더 씀.

### ⚠️ t-SNE 주의
- t-SNE는 300D를 **비선형**으로 2D에 매핑 → 평행사변형(유추) 관계가 2D에선 깨질 수 있음. 원래 300차원 공간에서 성립.

### 학습되는 유추들
- Man:Woman = Boy:Girl, Ottawa:Canada = Nairobi:Kenya(수도-국가), Big:Bigger = Tall:Taller, Yen:Japan = Ruble:Russia(통화-국가) 등 — 대량 텍스트만으로 스스로 학습.

---

## 요약
- 임베딩 차이가 유추 관계를 담음 → King−Man+Woman≈Queen.
- 유사도는 코사인 유사도(=벡터 각의 cos). t-SNE 후엔 유추 관계가 깨질 수 있음.

## 다음 주제
- 임베딩 행렬 (Embedding Matrix)
