# Build a Pipeline for Churn Prediction

## 개요
- 형식: **Jupyter Notebook Lab** (미채점 · 약 22분)
- 파일: `customer_churn.ipynb`
- 핵심: 고객 이탈 데이터셋에 **완전한 피처 파이프라인**을 직접 만든다.

## 내용

Lab 안내문(Overview)의 원문 취지:

> 이 가이드형 Jupyter Notebook Lab에서 **고객 이탈(customer churn) 데이터셋에 완전한 피처 파이프라인을 구축**하며 피처 엔지니어링 지식을 적용한다. 이 활동은 **`ColumnTransformer` 안에서 `StandardScaler`와 `TfidfVectorizer`를 사용해 수치 데이터와 텍스트 데이터를 모두 효과적으로 처리**하는 것을 포함한다. Lab이 끝나면 **이탈 예측 모델을 위해 데이터를 준비하는 견고한 파이프라인**을 만들어 놓은 상태가 된다.

### 진행 방법
1. **Jupyter Notebook Lab**을 선택해 시작한다
2. 환경이 완전히 로드되어 파일 목록이 보이면 **`customer_churn.ipynb`** 를 클릭해 노트북을 연다

### 이 Lab이 쓰는 것
[03 How to Build a ColumnTransformer](03%20How%20to%20Build%20a%20ColumnTransformer%20-%20Step-by-Step.md)의 기법을 그대로 적용한다. 다만 안내문이 명시한 조합은 **`StandardScaler` + `TfidfVectorizer`** 두 개다 — 영상 데모의 `OneHotEncoder`는 언급되지 않는다.

또한 [02 The What and How of Scikit-learn Pipelines](02%20The%20What%20and%20How%20of%20Scikit-learn%20Pipelines.md)의 팁이 여기서 실제로 걸린다 — **`TfidfVectorizer`가 희소 행렬을 내므로 수치 분기에 `StandardScaler(with_mean=False)`** 를 고려해야 한다.

## 상태

**노트북 내용 미확인.** MOOC Lab 환경에서 실행하는 항목이라 노트북 본문을 가져올 수 없다. 위 내용은 Lab 페이지의 안내문에 근거한 것이다. 임의로 코드를 만들지 않는다.

실습 후 여기에 남긴다.

- 실제 데이터셋의 컬럼 구성 (수치 / 텍스트 각각 무엇이었는지)
- 내가 만든 `ColumnTransformer` 코드
- 희소 행렬 문제가 실제로 발생했는지, 어떻게 처리했는지
- 파이프라인 출력의 형태(shape)

## 요약
- 고객 이탈 데이터로 **수치 + 텍스트**를 함께 처리하는 피처 파이프라인을 만드는 Lab이다.
- 쓰는 도구: `ColumnTransformer` 안의 `StandardScaler`와 `TfidfVectorizer`.
- 산출물은 "이탈 예측 모델에 넣을 수 있게 데이터를 준비하는 견고한 파이프라인"이다.
