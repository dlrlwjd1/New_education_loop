# Python Statistics Landscape

## 개요
- University of Michigan 통계학과 Kerby Shedden 교수가 소개하는, 데이터 분석에 쓰이는 Python 도구 생태계 개관
- Python은 범용 언어(general purpose language)지만 강력한 라이브러리와 결합하면 이상적인 데이터 분석 환경이 된다
- 이 코스에서 직접 사용할 라이브러리: Seaborn, Pandas, Statsmodels (기반: Numpy, Scipy, Matplotlib)

## 내용

### Python이라는 언어
- Python은 1991년부터 존재해 온 오래된 언어로, 배우기 쉽다고 평가받는다.
- 코드가 읽기 쉽고 난해한 문법(obscure syntax)을 많이 쓰지 않아 인기가 있다.
- 큰 표준 라이브러리(standard library)가 있어 흔한 작업을 짧은 스크립트로 쉽게 처리할 수 있다.
- R, MATLAB, SAS 같은 도메인 특화 언어(domain-specific language)와 달리, Python은 데이터 분석을 위해 특별히 설계된 것이 아닌 범용 언어다. 하지만 강력한 라이브러리들과 함께 쓰면 데이터 분석에 이상적인 환경이 된다.

### 속도 문제와 C 기반 라이브러리
- Python은 배우기 쉽지만 특별히 빠르지는 않으며, 데이터 분석에서 속도는 중요한 고려사항일 수 있다.
- 해결책: Python의 데이터 분석 라이브러리들은 실제로는 C로 작성되어 있고 Python을 통해 호출된다.
- 일반 사용자는 C를 전혀 몰라도 이 고도로 최적화된 라이브러리들의 속도를 활용할 수 있다.

### 라이브러리 생태계의 성숙도
- 이 코스에서 쓰는 라이브러리들은 지난 25년간 주로 오픈소스 커뮤니티의 독립적인 프로그래머 팀들이 개발했다.
- 데이터 관리, 수치 계산, 그래프, 통계 모델링 등 여러 영역의 라이브러리가 있다.
- 이 라이브러리들은 충분히 성숙하고 안정적(mature and stable)이어서 연구와 산업 현장에서 정확하고 의미 있는 결과를 신뢰하고 얻을 수 있다.

### 이 코스에서 사용하는 라이브러리
- **기반 라이브러리**: Numpy, Scipy, Matplotlib — 다른 라이브러리들이 내부적으로 호출하는 기반(foundation)이며, 일반적으로 본인 코드에서 직접 사용하지는 않는다.
- **직접 사용할 라이브러리**:
  - **Seaborn**: 그래픽과 데이터 시각화를 위한 고수준 언어
  - **Pandas**: 데이터 조작(manipulation)과 데이터 관리를 위한 강력한 라이브러리
  - **Statsmodels**: 다양한 통계 모델링 도구 제공
- **코스 이후 고려할 라이브러리**: **Sklearn** — 머신러닝(machine learning)과 예측 분석(predictive analytics)을 위한 도구를 제공하는, 이 코스 너머에서 고려할 만한 라이브러리 중 하나.

### 학습 환경
- 코스 전반에서 Python 데이터 분석 예제를 보게 되며, 핵심 Python 언어와 위 라이브러리들을 상세히 다룬다.
- Jupyter Notebook에서 이 도구들을 사용하므로 설치·설정(installation, configuration) 걱정 없이 언어와 도구에 집중할 수 있다.

## 요약
- Python은 1991년부터 이어진 읽기 쉬운 범용 언어로, C로 작성된 최적화 라이브러리 덕분에 속도 문제 없이 데이터 분석에 쓸 수 있다.
- Numpy·Scipy·Matplotlib이 기반을 이루고, 코스에서는 Seaborn(시각화), Pandas(데이터 관리), Statsmodels(통계 모델링)를 직접 사용한다.
- Sklearn은 머신러닝·예측 분석용으로 코스 이후에 살펴볼 만하다.
- Jupyter Notebook 환경에서 설치 걱정 없이 실습한다.
