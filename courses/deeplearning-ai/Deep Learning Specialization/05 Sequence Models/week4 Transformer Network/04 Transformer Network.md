# 04 Transformer Network

## 개요
- self-attention + multi-head attention을 합쳐 **트랜스포머 네트워크** 전체(인코더-디코더)를 구성.

---

## 내용

### 인코더(Encoder)
- 입력 임베딩(+ SOS/EOS 토큰) → **Multi-head attention** → **피드포워드 신경망**.
- 이 인코더 블록을 **N번 반복**(보통 N=6).

### 디코더(Decoder)
- 지금까지 생성한 번역(처음엔 SOS)을 입력.
1. **첫 multi-head attention**: 생성된 단어들로 Q, K, V 계산.
2. **둘째 multi-head attention**: 첫 블록 출력에서 **Q**, **인코더 출력에서 K, V** → "지금까지 번역한 것"으로 질의해 프랑스어 문맥(K,V)에서 다음 단어를 결정.
3. **피드포워드 신경망** → 다음 단어 예측.
- 디코더 블록도 **N번 반복**. 예측 단어를 다시 입력에 넣어 한 단어씩 생성(Jane → visits → ... → EOS).

### 추가 요소(bells and whistles) ⭐
- **위치 인코딩(positional encoding)**: self-attention엔 순서 정보가 없음 → **sin/cos** 함수로 각 위치의 고유 벡터 P를 만들어 임베딩 X에 더함.
  ```
  PE(pos, 2i)   = sin(pos / 10000^{2i/d})
  PE(pos, 2i+1) = cos(pos / 10000^{2i/d})
  ```
- **잔차 연결(residual connections)**: 위치 정보를 전체에 전달 (ResNet과 유사).
- **Add & Norm**: batch norm과 유사한 층, 학습 가속. 반복적으로 사용.
- 디코더 출력에 **Linear + Softmax** 로 다음 단어 예측.
- **Masked multi-head attention**: **학습 시에만** 사용. 정답 번역의 뒷부분을 가려(mask), 앞부분이 완벽할 때 다음 단어를 맞추는지 테스트 → 병렬 학습 가능.

### 이후
- "Attention is all you need" 이후 BERT, DistilBERT 등 파생 모델 다수.

---

## 요약
- 트랜스포머 = 인코더(multi-head attn + FFN, N회) + 디코더(2개 attn + FFN, N회).
- 위치 인코딩(sin/cos), 잔차 연결, Add&Norm, masked attention(학습용).

## Course 5 & 전문과정 마무리
- RNN/GRU/LSTM, 단어 임베딩, seq2seq·어텐션, 트랜스포머까지 시퀀스 모델 전 범위 학습 완료.
- **Deep Learning Specialization 전 과정(Course 1~5) 정리 완료!**
