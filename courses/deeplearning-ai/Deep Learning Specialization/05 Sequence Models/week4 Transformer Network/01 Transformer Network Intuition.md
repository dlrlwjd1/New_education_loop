# 01 Transformer Network Intuition

## 개요
- **트랜스포머(Transformer)**: NLP를 완전히 바꾼 아키텍처. 오늘날 최고 성능 NLP 알고리즘 대부분의 기반. (Vaswani 등)

---

## 내용

### 순차 모델의 한계
- RNN → GRU → LSTM 으로 갈수록 게이트로 정보 흐름 제어가 나아졌지만 **복잡도↑**.
- 모두 **순차(sequential) 모델** — 입력을 한 토큰씩 처리 → 각 유닛이 **병목(bottleneck)**. 마지막 출력을 계산하려면 이전 것을 모두 계산해야 함.

### 트랜스포머의 혁신
- **어텐션 기반 표현 + CNN 스타일 병렬 처리** 결합.
- 문장 전체를 **한 번에 병렬로** 처리 → 왼→오 순차 처리 불필요.
- RNN(순차) vs CNN(병렬)에서, 어텐션으로 **풍부한 표현을 병렬로** 계산.

### 두 핵심 아이디어
1. **Self-attention(자기 어텐션)**: 문장의 각 단어에 대해 표현 A1~A5를 **병렬로** 계산 (어텐션 기반).
2. **Multi-head attention(다중 헤드 어텐션)**: self-attention을 여러 번 반복(for loop)해 여러 버전의 풍부한 표현을 얻음.

---

## 요약
- 트랜스포머 = 어텐션 기반 표현 + CNN식 병렬 처리 → 순차 병목 제거.
- 핵심: self-attention(병렬 표현 계산) + multi-head attention(여러 버전).

## 다음 주제
- Self-Attention
