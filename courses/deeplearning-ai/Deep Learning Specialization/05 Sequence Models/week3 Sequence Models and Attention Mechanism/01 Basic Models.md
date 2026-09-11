# 01 Basic Models

## 개요
- **시퀀스-투-시퀀스(seq2seq) 모델**: 기계 번역·음성 인식 등에 사용. **인코더-디코더** 구조.

---

## 내용

### seq2seq (기계 번역)
- 예: "Jane visite l'Afrique en septembre"(x1~x5) → "Jane is visiting Africa in September"(y1~y6).
- **인코더(encoder)** RNN(GRU/LSTM): 입력 문장을 한 단어씩 받아 **문장을 표현하는 벡터**를 출력.
- **디코더(decoder)** RNN: 그 인코딩을 받아 번역을 **한 단어씩** 생성 (EOS까지). 생성된 단어를 다음 입력으로 되먹임.
- (Sutskever 등, Cho 등)

### 이미지 캡셔닝(image captioning)
- 유사 구조: **CNN(예: AlexNet)** 이 이미지를 인코딩(마지막 softmax 제거, 4096차원 특징 벡터) → **인코더 역할**.
- 그 벡터를 RNN에 넣어 캡션을 한 단어씩 생성. (짧은 캡션에 잘 됨)
- (Mao 등, Vinyals 등, Karpathy & Fei-Fei Li)

### 언어 모델과의 차이
- 언어 모델은 **무작위** 텍스트 생성. seq2seq는 **가장 그럴듯한(most likely)** 번역/캡션을 원함 → 다음 영상.

---

## 요약
- seq2seq = 인코더(입력→벡터) + 디코더(벡터→출력 시퀀스). 번역·이미지 캡셔닝에 사용.
- 무작위가 아닌 **가장 가능성 높은** 출력을 찾아야 함.

## 다음 주제
- 가장 가능성 높은 문장 고르기 (Picking the Most Likely Sentence)
