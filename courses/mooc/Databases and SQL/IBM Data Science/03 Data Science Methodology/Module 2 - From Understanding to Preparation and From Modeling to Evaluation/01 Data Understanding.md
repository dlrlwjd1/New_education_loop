# Data Understanding

## 개요
- 강좌: Data Science Methodology
- 모듈: From Understanding to Preparation and From Modeling to Evaluation
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/ymNKX/data-understanding)
- 데이터 이해에는 데이터 세트 구성과 관련된 모든 활동이 포함됩니다.
- 기본적으로 데이터 과학 방법론의 데이터 이해 섹션에서는 다음과 같은 질문에 답합니다.

## 내용
### 핵심 내용
- 데이터 이해에는 데이터 세트 구성과 관련된 모든 활동이 포함됩니다.
- 기본적으로 데이터 과학 방법론의 데이터 이해 섹션에서는 다음과 같은 질문에 답합니다.
- 예를 들어, 범주형 변수에 고유 값이 너무 많아 모델 내에서 정보를 제공할 수 없는 경우 히스토그램을 사용하면 해당 값을 통합하는 방법을 결정하는 데 도움이 됩니다.
- 제공된 정보를 바탕으로 특정 값을 다시 코딩하거나 필요한 경우 삭제할 수 있습니다 (예: 특정 변수에 누락된 값이 있는 경우).
- 누락된 값은 “아니요” 또는 “0" ( 0) 을 의미할 수도 있고, 단순히 “모름”을 의미할 수도 있고, 0에서 100까지 포함되고 999도 포함하는 “연령”이라는 숫자 변수와 같이 유효하지 않거나 오해의 소지가 있는 값이 변수에 포함된 경우, 여기서 “triple-9"는 실제로는 “누락”을 의미하지만 수정하지 않는 한 유효한 값으로 취급됩니다.
- 그러나 데이터 이해 단계를 진행해 본 결과, 초기 정의에는 임상 경험을 바탕으로 예상했던 울혈성 심부전 입원 사례가 모두 반영되지 않았다는 사실이 밝혀졌습니다.

### 한국어 Transcript

이해에서 준비 데이터 이해까지 데이터 과학 방법론 101에 오신 것을 환영합니다! 데이터 이해에는 데이터 세트 구성과 관련된 모든 활동이 포함됩니다. 기본적으로 데이터 과학 방법론의 데이터 이해 섹션에서는 다음과 같은 질문에 답합니다. 수집한 데이터가 해결해야 할 문제를 대표하는가? 지금까지 살펴본 사례 연구에 방법론의 데이터 이해 단계를 적용해 보겠습니다.

울혈성 심부전 입원과 관련된 데이터를 이해하려면 모델에서 변수가 될 수 있는 데이터 열에 대해 기술 통계를 실행해야 했습니다. 먼저 이러한 통계에는 허스트, 일변량, 각 변수에 대한 통계 (예: 평균, 중앙값, 최소값, 최대값, 표준편차) 가 포함되었습니다. 둘째, 데이터 쌍별 상관 관계를 사용하여 특정 변수가 얼마나 밀접하게 관련되어 있는지, 어떤 변수가 있는 경우 상관 관계가 매우 높은지 확인했습니다. 즉, 이 두 변수는 본질적으로 중복되어 모델링에 사용할 수 있는 변수 하나만 남게 됩니다. 셋째, 변수의 분포를 이해하기 위해 변수의 히스토그램을 조사했습니다.

히스토그램은 값이나 변수가 어떻게 분포되어 있는지, 그리고 모델에서 변수를 더 유용하게 만들기 위해 어떤 종류의 데이터 준비가 필요한지 이해하는 좋은 방법입니다. 예를 들어, 범주형 변수에 고유 값이 너무 많아 모델 내에서 정보를 제공할 수 없는 경우 히스토그램을 사용하면 해당 값을 통합하는 방법을 결정하는 데 도움이 됩니다. 일변량, 통계 및 히스토그램은 데이터 품질을 평가하는 데도 사용됩니다. 제공된 정보를 바탕으로 특정 값을 다시 코딩하거나 필요한 경우 삭제할 수 있습니다 (예: 특정 변수에 누락된 값이 있는 경우). 그러면 “누락”이 무슨 의미가 있느냐는 질문이 생깁니다.

누락된 값은 “아니요” 또는 “0" ( 0) 을 의미할 수도 있고, 단순히 “모름”을 의미할 수도 있고, 0에서 100까지 포함되고 999도 포함하는 “연령”이라는 숫자 변수와 같이 유효하지 않거나 오해의 소지가 있는 값이 변수에 포함된 경우, 여기서 “triple-9"는 실제로는 “누락”을 의미하지만 수정하지 않는 한 유효한 값으로 취급됩니다. 처음에는 울혈성 심부전 입원의 의미가 울혈성 심부전의 1차 진단을 기반으로 결정되었습니다. 그러나 데이터 이해 단계를 진행해 본 결과, 초기 정의에는 임상 경험을 바탕으로 예상했던 울혈성 심부전 입원 사례가 모두 반영되지 않았다는 사실이 밝혀졌습니다. 이를 위해서는 데이터 수집 단계로 돌아가 2차 및 3차 진단을 추가하고 울혈성 심부전 입원에 대한 보다 포괄적인 정의를 세워야 했습니다. 이는 방법론의 대화형 프로세스 중 한 가지 예에 불과합니다.

문제와 데이터를 더 많이 다룰수록 더 많은 것을 배울 수 있고, 따라서 모델 내에서 더 많은 개선을 할 수 있고, 궁극적으로 문제를 더 잘 해결할 수 있게 됩니다. 이것으로 이 과정의 데이터 이해 섹션을 마칩니다.

## 예시
- 지금까지 살펴본 사례 연구에 방법론의 데이터 이해 단계를 적용해 보겠습니다.
- 예를 들어, 범주형 변수에 고유 값이 너무 많아 모델 내에서 정보를 제공할 수 없는 경우 히스토그램을 사용하면 해당 값을 통합하는 방법을 결정하는 데 도움이 됩니다.
- 그러나 데이터 이해 단계를 진행해 본 결과, 초기 정의에는 임상 경험을 바탕으로 예상했던 울혈성 심부전 입원 사례가 모두 반영되지 않았다는 사실이 밝혀졌습니다.

## 요약
- 제공된 정보를 바탕으로 특정 값을 다시 코딩하거나 필요한 경우 삭제할 수 있습니다 (예: 특정 변수에 누락된 값이 있는 경우).
- 누락된 값은 “아니요” 또는 “0" ( 0) 을 의미할 수도 있고, 단순히 “모름”을 의미할 수도 있고, 0에서 100까지 포함되고 999도 포함하는 “연령”이라는 숫자 변수와 같이 유효하지 않거나 오해의 소지가 있는 값이 변수에 포함된 경우, 여기서 “triple-9"는 실제로는 “누락”을 의미하지만 수정하지 않는 한 유효한 값으로 취급됩니다.
- 그러나 데이터 이해 단계를 진행해 본 결과, 초기 정의에는 임상 경험을 바탕으로 예상했던 울혈성 심부전 입원 사례가 모두 반영되지 않았다는 사실이 밝혀졌습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From Understanding to Preparation Data Understanding! Data understanding encompasses all activities related to constructing the data set. Essentially, the data understanding section of the data science methodology answers the question: Is the data that you collected representative of the problem to be solved? Let's apply the data understanding stage of our methodology, to the case study we've been examining. In order to understand the data related to congestive heart failure admissions, descriptive statistics needed to be run against the data columns that would become variables in the model.

First, these statistics included hurst, univariates, and statistics on each variable, such as mean, median, minimum, maximum, and standard deviation. Second, pairwise correlations were used, to see how closely certain variables were related, and which ones, if any, were very highly correlated, meaning that they would be essentially redundant, thus making only one relevant for modeling. Third, histograms of the variables were examined to understand their distributions. Histograms are a good way to understand how values or a variable are distributed, and which sorts of data preparation may be needed to make the variable more useful in a model. For example, for a categorical variable that has too many distinct values to be informative in a model, the histogram would help them decide how to consolidate those values.

The univariates, statistics, and histograms are also used to assess data quality. From the information provided, certain values can be re-coded or perhaps even dropped if necessary, such as when a certain variable has missing values. The question then becomes, does "missing" mean anything? Sometimes a missing value might mean "no", or "0" (zero), or at other times it simply means "we don't know" or, if a variable contains invalid or misleading values, such as a numeric variable called "age" that contains 0 to 100 and also 999, where that "triple-9" actually means "missing", but would be treated as a valid value unless we corrected it. Initially, the meaning of congestive heart failure admission was decided on the basis of a primary diagnosis of congestive heart failure.

But working through the data understanding stage revealed that the initial definition was not capturing all of the congestive heart failure admissions that were expected, based on clinical experience. This meant looping back to the data collection stage and adding secondary and tertiary diagnoses, and building a more comprehensive definition of congestive heart failure admission. This is just one example of the interactive processes in the methodology. The more one works with the problem and the data, the more one learns and therefore the more refinement that can be done within the model, ultimately leading to a better solution to the problem. This ends the Data Understanding section of this course.

Thanks for watching!

</details>
