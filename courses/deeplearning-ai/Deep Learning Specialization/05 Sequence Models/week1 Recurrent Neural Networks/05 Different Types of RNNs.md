# 05 Different Types of RNNs

## 개요
- T_x ≠ T_y인 경우를 포함한 다양한 RNN 구조. (Karpathy "The Unreasonable Effectiveness of RNNs"에서 영감)

---

## 내용

### 구조 유형
| 유형 | 설명 | 예시 |
|---|---|---|
| **one-to-one** | 입력 1 → 출력 1 (일반 신경망) | (RNN 불필요) |
| **one-to-many** | 입력 1 → 시퀀스 출력 | 음악 생성 |
| **many-to-one** | 시퀀스 입력 → 출력 1 | 감정 분류(별점) |
| **many-to-many (T_x=T_y)** | 시퀀스→시퀀스, 길이 같음 | 개체명 인식(NER) |
| **many-to-many (T_x≠T_y)** | 시퀀스→시퀀스, 길이 다름 | 기계 번역 |

### 세부
- **many-to-one**: 전체 문장을 읽고 **마지막 시점에만** 출력.
- **one-to-many**: 입력 x(장르/첫 음/null) → 첫 출력 → 그 출력을 다음 입력으로 되먹임하며 시퀀스 생성.
- **many-to-many (다른 길이)**: **인코더(encoder)** 가 입력(프랑스어)을 다 읽고, **디코더(decoder)** 가 번역(영어)을 출력 → 두 부분 구조.
- (attention 기반 구조는 Week 4에서.)

---

## 요약
- RNN 구조: one-to-one/one-to-many/many-to-one/many-to-many(같은 길이)/many-to-many(다른 길이, encoder-decoder).
- 응용: 음악 생성, 감정 분류, NER, 기계 번역.

## 다음 주제
- 언어 모델과 시퀀스 생성 (Language Model and Sequence Generation)
