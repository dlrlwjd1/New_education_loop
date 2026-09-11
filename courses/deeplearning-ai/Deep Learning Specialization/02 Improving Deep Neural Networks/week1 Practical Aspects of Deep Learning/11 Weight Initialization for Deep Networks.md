# 11 Weight Initialization for Deep Networks

## 개요
- 경사 소실/폭발의 **부분적 해결책**: 가중치를 **신중하게 랜덤 초기화** (분산을 입력 수에 맞춰 조정).

---

## 내용

### 직관 (뉴런 하나, b=0)
```
z = w₁x₁ + w₂x₂ + ... + wₙxₙ
```
- 입력 수 n이 클수록, z가 커지지 않으려면 각 wᵢ가 **작아야** 한다.
- 합리적 방법: **Var(wᵢ) = 1/n** (n = 그 뉴런에 들어오는 입력 수).

### 초기화 공식
층 l의 가중치 (입력 수 n⁽ˡ⁻¹⁾):
```python
W_l = np.random.randn(shape) * np.sqrt(1 / n[l-1])
```
- **ReLU 사용 시**: 분산 `2/n`이 더 잘 작동 (He initialization):
  ```python
  W_l = np.random.randn(shape) * np.sqrt(2 / n[l-1])
  ```

### 활성화 함수별 권장 초기화
| 활성화 | 분산 | 이름 |
|---|---|---|
| **ReLU** | 2 / n⁽ˡ⁻¹⁾ | He initialization |
| **tanh** | 1 / n⁽ˡ⁻¹⁾ | Xavier initialization |
| (Bengio 변형) | 2 / (n⁽ˡ⁻¹⁾ + n⁽ˡ⁾) | |

- 입력 활성값이 평균 0, 분산 1이면, 이 초기화로 z도 비슷한 스케일 유지 → **W가 1보다 너무 크거나 작지 않게** 해 소실/폭발 완화.

### 하이퍼파라미터로서
- 이 분산의 곱셈 상수를 하이퍼파라미터로 튜닝할 수도 있음. 효과는 대체로 보통(modest) — 우선순위는 낮은 편.
- 공식들은 어디까지나 **기본 시작값**.

---

## 요약
- 가중치 초기화 분산을 입력 수에 맞춤: ReLU → √(2/n⁽ˡ⁻¹⁾) (He), tanh → √(1/n⁽ˡ⁻¹⁾) (Xavier).
- 소실/폭발을 완전히 없애진 못하지만 크게 완화 → 깊은 망 훈련이 빨라짐.

## 다음 주제
- 경사의 수치적 근사 (Numerical Approximation of Gradients)
