# Turning Categorical Variables into Quantitative Variables in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Data Wrangling
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/7w5xB/turning-categorical-variables-into-quantitative-variables-in-python)
- 이 비디오에서는 Python에서 범주형 변수를 양적 변수로 바꾸는 방법에 대해 설명합니다.
- 대부분의 통계 모델은 객체나 문자열을 입력으로 받아들일 수 없으며, 모델 학습의 경우 숫자만 입력으로 받습니다.

## 내용
### 핵심 내용
- 이 비디오에서는 Python에서 범주형 변수를 양적 변수로 바꾸는 방법에 대해 설명합니다.
- 대부분의 통계 모델은 객체나 문자열을 입력으로 받아들일 수 없으며, 모델 학습의 경우 숫자만 입력으로 받습니다.
- 자동차 데이터 세트에서 범주형 변수로서의 연료 유형 기능에는 문자열 형식의 가스 또는 디젤이라는 두 개의 값이 있습니다.
- 판다스에서는 get_dummies 메서드를 사용하여 범주형 변수를 더미 변수로 변환할 수 있습니다.
- Python에서 범주형 변수를 더미 변수로 변환하는 것은 간단합니다.
- get_dummies 메서드에 따라 연료 유형 열을 가져오고 데이터 프레임 dummy_variable_one을 생성합니다.

### 한국어 Transcript

이 비디오에서는 Python에서 범주형 변수를 양적 변수로 바꾸는 방법에 대해 설명합니다. 대부분의 통계 모델은 객체나 문자열을 입력으로 받아들일 수 없으며, 모델 학습의 경우 숫자만 입력으로 받습니다. 자동차 데이터 세트에서 범주형 변수로서의 연료 유형 기능에는 문자열 형식의 가스 또는 디젤이라는 두 개의 값이 있습니다. 추가 분석을 위해 Jerry는 이러한 변수를 일종의 숫자 형식으로 변환해야 합니다. 인코딩하려는 원래 기능의 각 고유 요소에 해당하는 새 기능을 추가하여 값을 인코딩합니다.

기능 연료에 가스와 디젤이라는 두 개의 고유한 값이 있는 경우 가스와 디젤이라는 두 가지 새로운 기능을 생성합니다. 원래 기능에 값이 발생하면 새 기능에서 해당 값을 1로 설정하고 나머지 기능은 0으로 설정합니다. 자동차 B의 연료 예제에서 연료 값은 디젤입니다. 따라서 특성 디젤을 1로 설정하고 기체 특성을 0으로 설정했습니다. 마찬가지로 자동차 D의 연료 가치는 가스입니다.

따라서 피처 가스를 1로 설정하고 피처 디젤을 0으로 설정합니다. 이 기법을 종종 원 핫 인코딩이라고 합니다. 판다스에서는 get_dummies 메서드를 사용하여 범주형 변수를 더미 변수로 변환할 수 있습니다. Python에서 범주형 변수를 더미 변수로 변환하는 것은 간단합니다. get_dummies 메서드에 따라 연료 유형 열을 가져오고 데이터 프레임 dummy_variable_one을 생성합니다.

get_dummies 메서드는 각 숫자가 변수의 특정 범주에 해당하는 숫자 목록을 자동으로 생성합니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 판다스에서는 get_dummies 메서드를 사용하여 범주형 변수를 더미 변수로 변환할 수 있습니다.
- Python에서 범주형 변수를 더미 변수로 변환하는 것은 간단합니다.
- get_dummies 메서드에 따라 연료 유형 열을 가져오고 데이터 프레임 dummy_variable_one을 생성합니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll discuss how to turn categorical variables into quantitative variables in Python. Most statistical models cannot take in objects or strings as input, and for model training, only take the numbers as inputs. In the car data set, the fuel type feature as a categorical variable has two values; gas or diesel which are in string format. For further analysis, Jerry has to convert these variables into some form of numeric format. We encode the values by adding new features corresponding to each unique element in the original feature we would like to encode.

In the case where the feature fuel has two unique values, gas and diesel, we create two new features, gas and diesel. When a value occurs in the original feature, we set the corresponding value to one in the new feature, the rest of the features are set to zero. In the fuel example for car B, the fuel value is diesel. Therefore, we set the feature diesel equal to one and the gas feature to zero. Similarly for car D, the fuel value is gas.

Therefore, we set the feature gas equal to one and the feature diesel equal to zero. This technique is often called one hot encoding. In pandas, we can use get_dummies method to convert categorical variables to dummy variables. In Python, transforming categorical variables to dummy variables is simple. Following the example pd.

get_dummies method gets the fuel type column and creates the data frame dummy_variable_one. The get_dummies method automatically generates a list of numbers, each one corresponding to a particular category of the variable.

</details>
