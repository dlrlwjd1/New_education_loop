# Why is Dimensionality Reduction Important

## 개요
- 형식: 읽기 자료 (약 3분)
- 핵심: 차원 축소를 고려하는 이유 목록과, **이 모듈이 전제하는 선행 지식**을 명시한다.

## 내용

### 차원 축소를 고려하는 주된 이유
- 시각화(visualization)
- 다중공선성 제거(remove multicolinearity)
- 중복 특징 제거(remove redundant features)
- 차원의 저주 대응(deal with the curse of dimensionality)
- 지도 학습을 위한 구조 식별(identify structure for supervised learning)
- 고차원 데이터(high-dimensional data)

[14 Introduction to Dimensionality Reduction](14%20Introduction%20to%20Dimensionality%20Reduction.md)의 목록과 같다. 반복해서 강조되는 항목이다.

### 전제하는 선행 지식 — 중요

> **NOTE**: 이 모듈 전반에서 **주성분 분석(PCA), 특이값 분해(SVD), 고유값 분해(eigenvalue decomposition)** 같은 개념을 **기초 지식이 있다는 가정 하에** 사용한다.

복습이 필요하면 강좌가 지정하는 자료는 다음이다.

- Goodfellow·Bengio·Courville, *Deep Learning* (MIT Press, 2016) **2.7~2.12절**
- scikit-learn 행렬 분해(matrix decomposition) 튜토리얼

> 이 강좌가 **고급(advanced) 난이도**로 분류된 이유가 여기 드러난다. 선형대수 기초가 없으면 다음 강의(Dimension Reduction, 13분)에서 막힌다. 필요하면 위 2.7~2.12절을 먼저 보는 편이 낫다.

## 요약
- 차원 축소의 이유는 6가지로 정리되며, 시각화와 차원의 저주가 반복 강조된다.
- **이 모듈은 PCA·SVD·고유값 분해를 이미 안다고 가정한다.** 모르면 지정된 *Deep Learning* 2.7~2.12절을 먼저 본다.
