# How to Diagnose Overfitting with TensorBoard

## 개요
- 형식: **Lab** (미채점 · 약 1시간) — 이 강좌에서 가장 긴 항목
- 핵심: 학습 로그를 TensorBoard에 올려 **검증 손실이 갈라지는(diverge) 정확한 에폭**을 찾아낸다.

## 내용

Lab 안내문(Overview)의 원문 취지:

> 이 Lab에서 **학습 로그를 TensorBoard에 적재하고, 손실 곡선을 검사해 과적합 중인 모델을 식별하고, 검증 손실이 갈라지는 정확한 에폭(epoch)을 짚어낸다.** 이 실습으로 모델 평가와 성능 분석 역량을 강화한다.

### 학습 성과
Lab을 마치면 다음을 할 수 있다.

- 학습 로그를 TensorBoard에 **적재하고 탐색**한다
- **학습 손실과 검증 손실 곡선을 분석·해석해 과적합을 식별**한다
- 모델 성능 관련 문제를 효과적으로 **진단**한다

### 진행 방법
**Open Lab**을 선택해 시작한다.

> [04 Build a Pipeline for Churn Prediction](../Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/04%20Build%20a%20Pipeline%20for%20Churn%20Prediction.md)은 "Jupyter Notebook Lab"이었지만 이 Lab은 "Open Lab"이다 — 실행 환경이 다르다.

## 상태

**Lab 내용 미확인.** MOOC Lab 환경에서 실행하는 항목이라 본문을 가져올 수 없다. 위 내용은 Lab 페이지의 안내문에 근거한 것이다. 임의로 코드를 만들지 않는다.

실습 후 여기에 남긴다.

- 검증 손실이 갈라진 **에폭 번호**와 그때의 학습/검증 손실 값
- 그 지점을 어떻게 판정했는지 (기준)
- 조기 종료(early stopping)를 걸었다면 어느 지점으로 정했고 근거는 무엇인지

## 요약
- 목표는 과적합의 **존재 확인**이 아니라 **정확한 시점(에폭) 특정**이다.
- 근거는 [02 From Evaluation to Recommendation](02%20From%20Evaluation%20to%20Recommendation.md)이 말한 **학습 손실 대 검증 손실 곡선**이다.
- TensorBoard 친숙도가 전제되어 있으니, 없으면 먼저 기초를 보는 편이 낫다.
