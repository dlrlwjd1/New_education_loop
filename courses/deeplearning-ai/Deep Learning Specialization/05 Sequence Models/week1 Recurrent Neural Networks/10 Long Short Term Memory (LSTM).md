# 10 Long Short Term Memory (LSTM)

## 개요
- **LSTM(Long Short Term Memory)**: GRU보다 더 강력·일반적인 유닛. **3개의 게이트**(update, forget, output). (Hochreiter & Schmidhuber)

---

## 내용

### GRU와의 차이
- GRU: 게이트 2개(update Γ_u, relevance Γ_r), a⟨t⟩=c⟨t⟩.
- LSTM: 게이트 **3개**, a⟨t⟩ ≠ c⟨t⟩.

### 식
```
c̃⟨t⟩ = tanh(W_c·[a⟨t−1⟩, x⟨t⟩] + b_c)
Γ_u = σ(W_u·[a⟨t−1⟩, x⟨t⟩] + b_u)     # update (갱신)
Γ_f = σ(W_f·[a⟨t−1⟩, x⟨t⟩] + b_f)     # forget (망각)
Γ_o = σ(W_o·[a⟨t−1⟩, x⟨t⟩] + b_o)     # output (출력)
c⟨t⟩ = Γ_u * c̃⟨t⟩ + Γ_f * c⟨t−1⟩      # 갱신·망각 게이트 분리
a⟨t⟩ = Γ_o * tanh(c⟨t⟩)
```
- GRU의 `(1−Γ_u)` 대신 **별도의 forget 게이트 Γ_f** 사용 → 이전 값을 유지하면서 새 값을 더할 수 있음.

### 장거리 기억
- forget·update 게이트를 적절히 설정하면 c⟨0⟩ 값을 **오른쪽 끝까지 그대로 전달**(c₃=c₀) 가능 → 여러 시점 동안 값 유지 → 장거리 의존성 학습.

### 변형: Peephole connection
- 게이트 계산에 **c⟨t−1⟩ 도 입력**으로 추가 (a⟨t−1⟩, x⟨t⟩ 외에). c의 i번째 원소는 게이트의 i번째 원소에만 영향(1:1).

### GRU vs LSTM
- 정해진 우위는 없음 (문제마다 다름).
- **GRU**: 게이트 2개로 단순 → 계산 빠르고 큰 모델로 확장 쉬움.
- **LSTM**: 게이트 3개로 더 강력·유연. 역사적으로 검증됨 → **기본 선택**으로 무난. (최근 GRU도 인기)

---

## 요약
- LSTM = update·forget·output 3게이트, a⟨t⟩=Γ_o*tanh(c⟨t⟩).
- forget/update 분리로 장거리 기억. GRU는 단순·빠름, LSTM은 강력·검증됨.

## 다음 주제
- 양방향 RNN (Bidirectional RNN)
