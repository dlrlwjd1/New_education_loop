# 03 Multi-Head Attention

## 개요
- **Multi-head attention(다중 헤드 어텐션)**: self-attention을 여러 번(head) 반복해 단어마다 여러 질문을 던지고 더 풍부한 표현을 얻음.

---

## 내용

### Head
- self-attention 한 번 계산 = **하나의 head**. 이를 여러 번(예: h=8) 하는 것이 multi-head.

### 계산
- 각 head i마다 **자기 가중치 행렬** W_i^Q, W_i^K, W_i^V 로 Q, K, V를 변환해 self-attention 수행.
  - **head 1** (W₁): "무슨 일이?(what's happening)" → visite가 최고 답.
  - **head 2** (W₂): "언제?(when)" → September가 최고 답.
  - **head 3** (W₃): "누가?(who)" → Jane이 최고 답.
- 각 head는 **서로 다른 특징**을 포착.
```
head_i = Attention(W_i^Q Q, W_i^K K, W_i^V V)
MultiHead(Q,K,V) = concat(head₁, ..., head_h) · W_O
```

### 병렬 처리 ⭐
- 개념상 for loop이지만, **각 head가 서로 독립**이므로 실제론 **병렬 계산** 가능. 그 후 concat → W_O 곱.

---

## 요약
- Multi-head = self-attention을 h번(각기 다른 W_i로) 수행해 concat 후 W_O.
- 단어마다 여러 질문(무엇/언제/누가)을 던져 풍부한 표현. head들은 병렬 계산.

## 다음 주제
- 트랜스포머 네트워크 전체 (Transformer Network)
