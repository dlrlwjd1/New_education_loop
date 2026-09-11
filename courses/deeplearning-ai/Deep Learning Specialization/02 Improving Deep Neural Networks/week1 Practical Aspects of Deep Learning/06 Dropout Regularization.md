# 06 Dropout Regularization

## 개요
- **드롭아웃(dropout)**: 각 노드를 일정 확률로 무작위 제거해 매번 더 작은 네트워크를 학습시키는 정규화 기법.
- 가장 흔한 구현: **inverted dropout(역 드롭아웃)**.

---

## 내용

### 개념
- 각 층의 각 노드를 확률적으로 유지/제거(동전 던지기). 제거된 노드의 연결(링크)도 모두 제거.
- 각 훈련 예제마다 **다른 축소 네트워크**로 학습.
- 반복(iteration)마다도 다른 노드를 제거 → 예제·반복마다 패턴이 바뀜.

### Inverted Dropout 구현 (층 3 예시)
```python
keep_prob = 0.8   # 노드를 유지할 확률 (0.2는 제거 확률)
D3 = np.random.rand(*A3.shape) < keep_prob   # True/False 마스크
A3 = A3 * D3                                  # 제거된 노드 0으로
A3 = A3 / keep_prob                           # ★ 스케일 보정
```
- **`/keep_prob` (스케일 보정)의 이유**: 20%가 0이 되면 z⁽⁴⁾=W⁽⁴⁾A³+b⁴ 의 기댓값이 20% 줄어듦. keep_prob로 나눠 **A³의 기댓값을 유지** → z⁴ 기댓값 불변.
- 이 보정 덕에 test 시 별도 스케일링이 불필요 (inverted dropout의 장점).
- forward prop과 back prop **양쪽에서 같은 마스크 D**를 사용.

### 테스트 시에는 드롭아웃 안 함 ⚠️
- test time엔 드롭아웃을 **적용하지 않음** (동전 던지기 X).
- 이유: 예측 결과가 무작위(노이즈)가 되면 안 됨.
- (이론상 여러 번 돌려 평균낼 수도 있지만 비효율적이고 결과도 거의 같음.)
- inverted dropout의 스케일 보정 덕에 train/test 간 추가 스케일 파라미터가 불필요.

---

## 요약
- dropout = 노드를 확률적으로 끄며 작은 망들을 학습 → 정규화 효과.
- inverted dropout: 마스크 곱 후 `/keep_prob`로 기댓값 유지.
- test 시엔 dropout 미적용.

## 다음 주제
- 드롭아웃이 왜 효과가 있는지 (Understanding Dropout)
