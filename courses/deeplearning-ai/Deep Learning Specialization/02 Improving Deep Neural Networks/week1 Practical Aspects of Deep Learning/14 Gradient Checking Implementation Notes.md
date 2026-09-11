# 14 Gradient Checking Implementation Notes

## 개요
- 경사 검사(grad check)를 실제로 적용할 때의 실무 팁 5가지.

---

## 내용

1. **훈련 중에는 쓰지 말고 디버깅에만 사용**
   - dθ_approx 계산은 매우 느림. 학습(경사 하강)은 backprop의 dθ로 하고, grad check는 디버깅할 때만.

2. **실패 시 성분(component)을 보고 버그 위치 추정**
   - dθ_approx와 dθ가 크게 다른 i를 찾아, 그것이 특정 층의 db인지 dW인지 보면 버그 위치의 힌트를 얻음.

3. **정규화 항을 잊지 말 것**
   - 비용에 L2 정규화 항이 있으면, dθ도 그 항의 미분을 **포함**해야 함.

4. **dropout과 함께 쓰면 안 됨**
   - dropout은 매 반복마다 다른 노드를 제거해 **비용 함수 J가 잘 정의되지 않음** → grad check 곤란.
   - 방법: **keep_prob=1로 dropout을 끄고** grad check로 검증한 뒤 dropout을 켠다.

5. **랜덤 초기화 + 잠시 훈련 후 재검사 (드문 경우)**
   - W, b가 0에 가까울 때만 backprop이 맞고, 커지면 부정확해지는 버그가 드물게 있음.
   - 초기화 직후 grad check → 얼마간 훈련 → 다시 grad check.

---

## 요약
- grad check는 디버깅 전용, 훈련 중 미사용.
- 실패 시 성분 분석으로 버그 추적, 정규화 항 포함, dropout 끄고 검사.

## Week 1 마무리
- train/dev/test 설정, bias/variance 분석, 정규화(L2·dropout·데이터증강·early stopping), 입력 정규화, 초기화, grad check 학습 완료.

## 다음 주제
- Week 2: 최적화 알고리즘 (Optimization Algorithms)
