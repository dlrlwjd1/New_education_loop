# 08 Adam Optimization Algorithm

## 개요
- **Adam (Adaptive Moment Estimation)** = **Momentum + RMSprop**을 결합한 최적화 알고리즘.
- 다양한 신경망 구조에서 폭넓게 잘 작동하는, 검증된 드문 알고리즘 — 강사가 주저 없이 추천.

---

## 내용

### 알고리즘
```
초기화: V_dW=0, S_dW=0, V_db=0, S_db=0

매 반복 t:
  dW, db 계산 (미니배치)

  # Momentum (β₁)
  V_dW = β₁·V_dW + (1−β₁)·dW
  V_db = β₁·V_db + (1−β₁)·db

  # RMSprop (β₂)
  S_dW = β₂·S_dW + (1−β₂)·dW²
  S_db = β₂·S_db + (1−β₂)·db²

  # 편향 보정 (bias correction)
  V_dW^corr = V_dW / (1−β₁ᵗ) ;  V_db^corr = V_db / (1−β₁ᵗ)
  S_dW^corr = S_dW / (1−β₂ᵗ) ;  S_db^corr = S_db / (1−β₂ᵗ)

  # 업데이트
  W := W − α · V_dW^corr / (√S_dW^corr + ε)
  b := b − α · V_db^corr / (√S_db^corr + ε)
```
- Adam은 보통 **편향 보정을 포함**.

### 하이퍼파라미터 (권장값)
| 하이퍼파라미터 | 권장값 | 비고 |
|---|---|---|
| **α (학습률)** | 튜닝 필요 | 여러 값 시도 |
| **β₁** | 0.9 | 1차 모멘트(경사 평균) |
| **β₂** | 0.999 | 2차 모멘트(경사 제곱 평균) |
| **ε** | 10⁻⁸ | 튜닝 불필요 |

- 실무: **β₁, β₂, ε는 기본값 사용**, **α만 튜닝**.

### 이름의 의미
- **Adaptive Moment Estimation**: β₁은 경사의 평균(1차 moment), β₂는 경사 제곱의 평균(2차 moment)을 추정.

---

## 요약
- Adam = Momentum(β₁) + RMSprop(β₂) + 편향 보정.
- 기본값 β₁=0.9, β₂=0.999, ε=10⁻⁸; α만 튜닝.
- 폭넓게 잘 작동해 널리 쓰임.

## 다음 주제
- 학습률 감쇠 (Learning Rate Decay)
