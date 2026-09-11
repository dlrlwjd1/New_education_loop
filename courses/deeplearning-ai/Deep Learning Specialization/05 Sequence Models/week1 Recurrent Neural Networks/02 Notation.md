# 02 Notation

## 개요
- 시퀀스 모델의 표기법과 단어 표현(word representation).

---

## 내용

### 예: 개체명 인식(NER)
- "Harry Potter and Hermione Granger invented a new spell" → 각 단어가 사람 이름인지 라벨.

### 표기법 ⭐
| 표기 | 의미 |
|---|---|
| **x⟨t⟩** | 입력 시퀀스의 t번째 원소 |
| **y⟨t⟩** | 출력 시퀀스의 t번째 원소 |
| **T_x** | 입력 시퀀스 길이 |
| **T_y** | 출력 시퀀스 길이 (T_x ≠ T_y 가능) |
| **x⁽ⁱ⁾⟨t⟩** | i번째 훈련 예제의 t번째 입력 원소 |
| **T_x⁽ⁱ⁾** | i번째 예제의 입력 길이 (예제마다 다를 수 있음) |

### 단어 표현: one-hot
- **어휘집(vocabulary/dictionary)**: 사용할 단어 목록 (예: 1만 단어. 상용은 3만~10만, 대기업은 100만+).
- 각 단어를 **one-hot 벡터**로 표현: 어휘집 크기 차원, 해당 단어 위치만 1.
  - 예: "Harry"가 사전 4075번 → x⟨1⟩ = 4075번만 1인 10,000차원 벡터.
- **어휘집에 없는 단어**: `<UNK>`(unknown) 토큰으로 대체.

---

## 요약
- x⟨t⟩/y⟨t⟩(t번째 원소), T_x/T_y(길이), x⁽ⁱ⁾⟨t⟩(i번째 예제).
- 단어는 어휘집 기반 one-hot 벡터로 표현, 미등록 단어는 `<UNK>`.

## 다음 주제
- RNN 모델 (Recurrent Neural Network Model)
