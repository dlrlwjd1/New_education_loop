# Data Transforms and Feature Engineering - End of Module Quiz

## 개요
- 형식: 채점 과제 (Staff Graded, 약 10분)
- 대상: Module 1 전체

## 상태

**내용 미확인.** 채점 대상 과제이며, 강의 자료 API로 문항을 가져올 수 없어 본문을 정리하지 못했다. 임의로 문항을 만들지 않는다.

## 준비 — Module 1 핵심 점검

이 모듈을 통틀어 다음을 답할 수 있으면 준비된 상태다.

**파이프라인과 인터페이스**
- scikit-learn 세 인터페이스와 각각의 메서드 → [03](03%20Transforms%20with%20scikit-learn.md)
- 파이프라인을 쓰는 이유가 **변형 간 비교 가능성**이라는 점 → [04](04%20Pipelines.md)
- 그리드 서치 파라미터 키의 **이중 밑줄** 규칙 → [17](17%20Dimension%20Reduction.md)

**클래스 불균형**
- 1% 사기 데이터에서 정확도 99%의 의미 → [08](08%20Class%20Imbalance.md)
- 정확도 식과 정밀도·재현율 식의 차이가 **TN의 유무**라는 점
- 언더샘플링의 대가, SMOTE·ADASYN·SMOTENC의 구분 → [09](09%20Sampling%20Techniques.md)
- 불균형에 민감한 모델(신경망) vs 강한 모델(SVM·트리) → [11](11%20Models%20that%20Naturally%20Handle%20Imbalance.md)
- `class_weight='balanced'`가 대응하는 방향(비용 함수)
- **오버샘플링이 성능을 항상 올리지 않는다**는 실험 결과 → [10](10%20Class%20Imbalance%20Deep%20Dive.md)

**차원 축소**
- 관측치가 많은 문제(Spark)와 특징이 많은 문제(차원 축소)의 구분 → [14](14%20Introduction%20to%20Dimensionality%20Reduction.md)
- 차원 축소의 대가인 **해석 가능성 상실**
- 세 범주와 각 대표 알고리즘 → [17](17%20Dimension%20Reduction.md)
- PCA의 약점(비선형)과 t-SNE의 4가지 주의점
- 토픽 모델이 차원 축소인 이유 → [18](18%20Dimensionality%20Reduction%20and%20Topic%20models.md)

**편향**
- 데이터 편향이 불균형과 **구조적으로 같은 문제**인 이유 → [12](12%20Data%20Bias.md)
