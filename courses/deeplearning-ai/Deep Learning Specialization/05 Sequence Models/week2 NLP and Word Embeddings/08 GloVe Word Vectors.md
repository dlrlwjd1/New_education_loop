# 08 GloVe Word Vectors

## 개요
- **GloVe (Global Vectors for Word Representation)** (Pennington, Socher, Manning): 단순함으로 인기 있는 임베딩 알고리즘.

---

## 내용

### 공기 횟수(co-occurrence) 명시화
- **X_ij** = 단어 i가 단어 j의 컨텍스트에 나타난 **횟수** (i=t, j=c 역할).
- 컨텍스트를 ±10단어로 정의하면 대칭(X_ij = X_ji).

### 목적 함수
```
minimize  Σᵢ Σⱼ f(X_ij) · (θᵢᵀ eⱼ + bᵢ + b'ⱼ − log X_ij)²
```
- θᵢᵀeⱼ 가 **log X_ij**(함께 나타난 정도)를 잘 예측하도록 학습.
- **가중 함수 f(X_ij)**:
  - X_ij=0이면 f=0 (합에서 제외, log 0 회피; 0·log0=0 관례).
  - the/of 같은 **빈출어에 과한 가중치 X**, during 같은 **희귀어에 너무 작은 가중치 X** 가 되도록 조절하는 휴리스틱.

### θ와 e의 대칭성
- θᵢ와 eⱼ가 **대칭적 역할** → 학습 후 각 단어에 대해:
  ```
  e_final = (e_w + θ_w) / 2
  ```

### ⚠️ 임베딩 축은 해석 불가
- gender/royal 같은 축과 임베딩 차원이 **정렬된다는 보장 없음**.
  - 임의의 가역 행렬 A로 `θᵀe = (Aθ)ᵀ(A⁻ᵀe)` 라 축을 자유롭게 회전 가능 → 개별 차원에 인간이 해석할 의미를 부여하기 어려움.
- 그래도 **유추(평행사변형) 관계는 여전히 성립**.

---

## 요약
- GloVe = 공기 횟수 X_ij를 이용, θᵢᵀeⱼ가 log X_ij를 예측하도록 가중 최소제곱으로 학습.
- θ·e 대칭 → 평균으로 최종 임베딩. 축은 해석 불가하나 유추는 성립.

## 다음 주제
- 감정 분류 (Sentiment Classification)
