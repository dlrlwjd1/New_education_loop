# 02 Self-Attention

## 개요
- **Self-attention(자기 어텐션)**: 문장 각 단어에 대해 **어텐션 기반 표현**을 병렬로 계산 (트랜스포머의 핵심).

---

## 내용

### 목표
- 각 단어에 대해 문맥을 반영한 풍부한 표현 A1~A5를 병렬 계산.
- 예: "l'Afrique(Africa)"를 고정 임베딩이 아니라, **주변 단어를 보고** (역사 유적? 휴양지? 대륙?) 적절히 표현.

### Query, Key, Value ⭐
- 각 단어 x에 대해 학습 행렬로 3개 벡터 생성:
  ```
  q = W_Q · x    (query, 질문)
  k = W_K · x    (key, 답의 후보)
  v = W_V · x    (value, 표현에 기여할 값)
  ```
- (데이터베이스의 query/key-value 비유.)

### A³ 계산 예 ("l'Afrique")
1. q³ = "Africa에서 무슨 일이 일어나는가?" 라는 질문.
2. q³·k¹, q³·k², ... (각 단어 key와의 내적) = 각 단어가 그 질문에 얼마나 좋은 답인지.
3. 이 값들에 **softmax**.
4. softmax 값 × 각 v를 곱해 **합산** → A³.
   - 예: q³·k²("visite")가 가장 크면 → "Africa는 방문의 목적지"라는 문맥 반영.

### 벡터화 (scaled dot-product attention)
```
Attention(Q, K, V) = softmax( QKᵀ / √d_k ) V
```
- 분모 √d_k = 내적이 폭발하지 않게 스케일. ("Attention is all you need"의 방식)

---

## 요약
- Self-attention: 각 단어의 (query, key, value)로, query와 다른 단어 key의 유사도(softmax)에 따라 value를 가중합 → 문맥 반영 표현.
- `Attention(Q,K,V) = softmax(QKᵀ/√d_k)V`. 병렬 계산.

## 다음 주제
- 다중 헤드 어텐션 (Multi-Head Attention)
