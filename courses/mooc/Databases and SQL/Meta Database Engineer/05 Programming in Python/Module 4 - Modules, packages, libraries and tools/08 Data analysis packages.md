# Data analysis packages

## 개요

- 데이터 분석·데이터 과학에서 흔히 쓰는 4대 Python 라이브러리: scikit-learn, pandas, NumPy, Matplotlib

## 내용

### 배경

- 지난 10년간 데이터 과학이 폭발적으로 성장했고, Python은 방대한 오픈소스 패키지 덕분에 데이터 과학자들이 가장 애용하는 언어가 되었다.

### scikit-learn

- **예측 학습(predictive learning)** 용 — 다른 인기 패키지 위에 구축.
- 분류·회귀·SVM 등 **지도·비지도 머신러닝 알고리즘** 제공. 데이터 모델링이 핵심 초점 — 클러스터링, 피처 추출·선택, 검증, 차원 축소 모델 제공.

### pandas

- **Python Data Analysis**의 약어 — 데이터셋의 **정제·분석·조작** 도구. 컬럼 비교, 평균·최대·최소 계산 등.
- 핵심 자료 구조: **Series(1차원, 테이블의 컬럼)**와 **DataFrame(다차원, 테이블 저장)** — 저장하는 데이터 타입에 구애받지 않는다.
- 흔한 용도: CSV·JSON을 읽어 빠른 검색에 활용. 속도와 유연성이 강점. 관례: `import pandas as pd`

### NumPy

- **Numerical Python** — scikit-learn·SciPy·Plotly·Matplotlib의 **기반 라이브러리.**
- 신호·이미지 처리, 통계 계산, 양자 컴퓨팅 등 과학 영역에서 활용. 푸리에 변환·행렬 등 대수 계산 담당.
- 핵심 구조: **ndarray(N차원 배열)** — 리스트를 대체하며 **훨씬 빠르다.** 차원은 axes, 그 수는 rank. 관례: `import numpy as np`

### Matplotlib

- **시각화 라이브러리** — 정적·인터랙티브·애니메이션 시각화 생성.
- ggplot·seaborn 같은 서드파티 도구가 기능을 확장한다. 함수들은 pyplot 하위 패키지에 위치. 관례: `import matplotlib.pyplot as plt`
- 예: NumPy와 결합해 학급 점수 분포를 그래프로 표시.

## 요약

- scikit-learn(ML 모델링), pandas(Series/DataFrame으로 데이터 조작), NumPy(ndarray 기반 수치 계산), Matplotlib(pyplot 시각화)이 데이터 분석의 4대 축이다.
- pd·np·plt 별칭 임포트가 관례다.
