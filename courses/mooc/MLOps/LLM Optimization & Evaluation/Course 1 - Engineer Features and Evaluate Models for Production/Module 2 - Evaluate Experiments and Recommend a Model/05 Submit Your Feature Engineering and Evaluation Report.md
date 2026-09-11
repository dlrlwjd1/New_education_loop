# Submit Your Feature Engineering and Evaluation Report

## 개요
- 형식: **채점 과제** (Graded Assignment · 약 30분)
- 채점: **AI 채점(Graded by AI)** · 시도 횟수 무제한
- 성적: **이 과제를 완료해야 강좌를 통과한다**
- 부가: 학문적 진실성 및 AI 사용 모니터링 대상 과제

## 내용

과제 페이지가 명시하는 것은 이것뿐이다.

> **이 과제를 완료해야 강좌를 통과할 수 있다.**

- 무제한 재시도
- AI 채점
- 학문적 진실성·AI 사용이 모니터링된다는 고지

제목이 과제의 성격을 말해준다 — **피처 엔지니어링과 평가를 묶은 보고서** 제출이다. 즉 이 강좌의 두 모듈을 하나의 산출물로 합치는 것이 최종 과제다.

## 상태

**문항·요구사항 미확인.** 과제를 시작해야 세부 지시가 노출되는 형식이라 본문을 가져올 수 없다. 임의로 문항을 만들지 않는다.

## 준비 — 강좌 전체 점검

보고서에 들어갈 재료를 모듈별로 정리하면 이렇다.

**Module 1 — 피처 엔지니어링 쪽**
- `Pipeline`과 `ColumnTransformer`의 역할 → [M1-02](../Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/02%20The%20What%20and%20How%20of%20Scikit-learn%20Pipelines.md)
- **데이터 누출 방지 3원칙** — 분리 후 적합 / 전처리는 파이프라인 안에서만 / 불균형이면 층화 분리
- `handle_unknown='ignore'`가 프로덕션에 필요한 이유 → [M1-03](../Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/03%20How%20to%20Build%20a%20ColumnTransformer%20-%20Step-by-Step.md)
- **Lab에서 실제로 만든 이탈 예측 파이프라인** → [M1-04](../Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/04%20Build%20a%20Pipeline%20for%20Churn%20Prediction.md)

**Module 2 — 평가와 권고 쪽**
- **정확도 역설**과 강사 사례의 숫자 (재현율 0.07 → 6배, 정확도 98%→93%) → [01](01%20Why%20a%20High%20Accuracy%20Score%20Can%20Be%20a%20Lie.md)
- 트레이드오프의 세 축 — **성능 / 모델 복잡도 비용 / 안정성** → [02](02%20From%20Evaluation%20to%20Recommendation.md)
- **Lab에서 특정한 과적합 에폭** → [03](03%20How%20to%20Diagnose%20Overfitting%20with%20TensorBoard.md)
- 권고를 **사업 가치 언어로 프레이밍**하기 → [04](04%20Apply%20Your%20Judgment%20-%20Defend%20Your%20Model%20Choice.md)

> 두 Lab([M1-04](../Module%201%20-%20Build%20Feature%20Engineering%20Pipelines/04%20Build%20a%20Pipeline%20for%20Churn%20Prediction.md), [03](03%20How%20to%20Diagnose%20Overfitting%20with%20TensorBoard.md))을 실제로 수행하지 않으면 보고서에 쓸 **자기 데이터가 없다.** 이 과제 전에 두 Lab을 먼저 끝내는 것이 순서다.
