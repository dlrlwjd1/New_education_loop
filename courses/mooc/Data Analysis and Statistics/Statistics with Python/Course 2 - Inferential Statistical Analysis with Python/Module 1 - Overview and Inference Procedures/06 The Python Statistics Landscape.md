# The Python Statistics Landscape

## 개요
- Kerby Shedden 교수(University of Michigan 통계학과)가 데이터 분석에 쓰이는 Python 도구 생태계를 개관하는 강의
- Python은 범용 언어(general purpose language)이지만 강력한 라이브러리들과 결합하면 데이터 분석에 이상적인 환경이 됨
- 기반 라이브러리(NumPy, SciPy, Matplotlib)와 코스에서 직접 사용할 라이브러리(Seaborn, Pandas, Statsmodels), 그리고 그 너머의 Sklearn을 소개

## 내용

### Python이라는 언어
- Python은 1991년부터 존재해 온 언어로, 배우기 쉽다고 평가되며 코드가 읽기 쉽고 난해한 문법(obscure syntax)을 많이 쓰지 않아 인기가 있다.
- 방대한 표준 라이브러리(standard library)가 있어 많은 일반적인 작업을 짧은 스크립트로 쉽게 처리할 수 있다.
- R, MATLAB, SAS 같은 도메인 특화 언어(domain specific language)와 달리, Python은 데이터 분석을 위해 특별히 설계된 것이 아닌 **범용 언어**다. 그러나 매우 강력한 라이브러리들과 함께 사용하면 데이터 분석에 이상적인 환경이 된다.

### 속도 문제와 C 기반 라이브러리
- Python은 배우기 쉽지만 특별히 빠르지는 않다. 그런데 속도는 데이터 분석에서 중요한 고려사항일 수 있다.
- 이를 해결하기 위해 Python의 데이터 분석 라이브러리들은 실제로는 **C로 작성**되어 있고 Python을 통해 호출된다.
- 일반 사용자는 C를 전혀 몰라도 이 고도로 최적화된 라이브러리들의 속도를 그대로 활용할 수 있다.

### 라이브러리 생태계의 성숙도
- 이 코스에서 사용할 라이브러리들은 지난 25년간 주로 오픈소스 커뮤니티에서 활동하는 독립적인 프로그래머 팀들에 의해 개발되었다.
- 데이터 관리, 수치 계산, 그래프 작성, 통계 모델링 등 여러 영역의 라이브러리가 있다.
- 이 라이브러리들은 충분히 성숙하고 안정적(mature and stable)이어서, 업계의 실무와 연구에서 정확하고 의미 있는 결과를 내는 데 신뢰할 수 있다.

### 코스에서 사용할 라이브러리
- **기반(foundation) 라이브러리**: NumPy, SciPy, Matplotlib — 다른 라이브러리들이 내부적으로 호출하는 토대이며, 일반적으로 코드에서 직접 사용하지는 않는다.
- **직접 사용할 라이브러리**:
  - **Seaborn**: 그래픽과 데이터 시각화(data visualization)를 위한 고수준(high level) 라이브러리
  - **Pandas**: 데이터 조작(data manipulation)과 데이터 관리를 위한 강력한 라이브러리
  - **Statsmodels**: 다양한 통계 모델링(statistical modeling) 도구 제공
- **Sklearn**: 코스 범위 너머에서 고려해 볼 만한 라이브러리 중 하나로, 머신러닝(machine learning)과 예측 분석(predictive analytics)을 위한 여러 도구를 제공한다.

### Jupyter Notebook
- 코스 전반에서 Python을 데이터 분석에 사용하는 예시를 보게 되며, 핵심 Python 언어와 위 라이브러리들을 자세히 다룬다.
- 이 도구들과 Jupyter Notebook을 사용하면 설치와 구성(installation and configuration) 걱정 없이 언어와 도구 자체에 집중할 수 있다.

## 요약
- Python은 읽기 쉽고 배우기 쉬운 범용 언어로, 강력한 라이브러리와 결합해 데이터 분석 환경으로 쓰인다.
- 속도 문제는 C로 작성된 최적화 라이브러리를 Python에서 호출하는 방식으로 해결되며, 사용자는 C를 몰라도 된다.
- NumPy, SciPy, Matplotlib은 기반 라이브러리로 직접 다루지 않고, 코스에서는 Seaborn(시각화), Pandas(데이터 관리), Statsmodels(통계 모델링)를 직접 사용한다.
- Sklearn은 머신러닝·예측 분석용으로 코스 이후 확장 학습 대상이다.
- Jupyter Notebook 덕분에 설치·구성 부담 없이 학습에 집중할 수 있다.
