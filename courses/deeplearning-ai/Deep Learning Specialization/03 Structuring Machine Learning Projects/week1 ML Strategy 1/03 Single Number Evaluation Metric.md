# 03 Single Number Evaluation Metric

## 개요
- **단일 숫자 평가 지표(single number evaluation metric)** 를 정해두면, 새 시도가 이전보다 나은지 **빠르게 판단**할 수 있어 반복(iteration)이 빨라진다.

---

## 내용

### 예시 1: Precision/Recall → F1
- **정밀도(Precision)**: 고양이라고 판단한 것 중 실제 고양이 비율.
- **재현율(Recall)**: 실제 고양이 중 맞게 찾아낸 비율.
- 둘은 **트레이드오프** 관계 → A는 recall 우위, B는 precision 우위면 어느 게 나은지 판단 곤란.
- 해결: **F1 score** (precision과 recall의 **조화평균(harmonic mean)**):
  ```
  F1 = 2 / (1/P + 1/R)
  ```
- 두 숫자를 하나로 합쳐 → 분류기 A/B를 즉시 비교 가능.

### 예시 2: 여러 지역 오류 → 평균
- 미국/중국/인도/기타 4개 지역 오류율을 각각 추적하면 A/B 비교가 어려움.
- **평균 오류율** 하나로 계산 → 가장 낮은 알고리즘을 즉시 선택.

### 핵심
- **잘 정의된 dev 세트 + 단일 숫자 지표** = 빠른 A/B 판단 → 반복 속도↑.

---

## 요약
- 단일 숫자 지표가 있으면 아이디어의 우열을 빠르게 판단.
- 두 지표(precision/recall)는 F1(조화평균)으로, 여러 지역은 평균으로 하나의 숫자로 합침.

## 다음 주제
- 만족 지표와 최적화 지표 (Satisficing and Optimizing Metric)
