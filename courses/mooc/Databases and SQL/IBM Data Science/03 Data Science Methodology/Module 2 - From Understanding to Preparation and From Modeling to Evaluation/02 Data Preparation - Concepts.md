# Data Preparation - Concepts

## 개요
- 강좌: Data Science Methodology
- 모듈: From Understanding to Preparation and From Modeling to Evaluation
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/F8xBI/data-preparation-concepts)
- 어떤 면에서는 데이터 준비는 먼지나 결점 등 원치 않는 요소를 제거한다는 점에서 갓 딴 채소를 씻는 것과 비슷합니다.
- 데이터 수집 및 데이터 이해와 함께 데이터 준비는 데이터 과학 프로젝트에서 가장 시간이 많이 소요되는 단계로, 일반적으로 전체 프로젝트 시간의 70%, 심지어 90% 까지 소요됩니다.

## 내용
### 핵심 내용
- 어떤 면에서는 데이터 준비는 먼지나 결점 등 원치 않는 요소를 제거한다는 점에서 갓 딴 채소를 씻는 것과 비슷합니다.
- 데이터 수집 및 데이터 이해와 함께 데이터 준비는 데이터 과학 프로젝트에서 가장 시간이 많이 소요되는 단계로, 일반적으로 전체 프로젝트 시간의 70%, 심지어 90% 까지 소요됩니다.
- 데이터베이스의 일부 데이터 수집 및 준비 프로세스를 자동화하면 이 시간을 50% 까지 줄일 수 있습니다.
- 마찬가지로, 데이터 준비 단계에서 데이터를 변환하는 과정은 데이터를 다루기 더 쉬운 상태로 만드는 과정입니다.
- 텍스트 작업 시 데이터를 조작할 수 있으려면 데이터를 코딩하기 위한 텍스트 분석 단계가 필요합니다.
- 데이터 준비 단계는 문제를 해결하기 위한 다음 단계를 위한 단계를 설정합니다.

### 한국어 Transcript

이해에서 준비까지 데이터 과학 방법론 101에 오신 것을 환영합니다. 어떤 면에서는 데이터 준비는 먼지나 결점 등 원치 않는 요소를 제거한다는 점에서 갓 딴 채소를 씻는 것과 비슷합니다. 데이터 수집 및 데이터 이해와 함께 데이터 준비는 데이터 과학 프로젝트에서 가장 시간이 많이 소요되는 단계로, 일반적으로 전체 프로젝트 시간의 70%, 심지어 90% 까지 소요됩니다. 데이터베이스의 일부 데이터 수집 및 준비 프로세스를 자동화하면 이 시간을 50% 까지 줄일 수 있습니다. 이렇게 시간이 절약되면 데이터 과학자가 모델을 만드는 데 집중할 수 있는 시간이 늘어납니다.

요리에 대한 비유를 이어가자면, 양파를 잘게 자르는 과정을 통해 양파를 소스 냄비에 통째로 넣는 경우보다 더 쉽게 소스를 통해 양파의 풍미가 퍼질 수 있다는 것을 알고 있습니다. 마찬가지로, 데이터 준비 단계에서 데이터를 변환하는 과정은 데이터를 다루기 더 쉬운 상태로 만드는 과정입니다. 특히, 방법론의 데이터 준비 단계에서는 다음과 같은 질문에 답합니다. 데이터를 준비하는 방법은 무엇입니까? 데이터를 효과적으로 활용하려면 누락되거나 잘못된 값을 처리하고 중복을 제거하는 방식으로 데이터를 준비하여 모든 항목이 올바른 형식으로 지정되도록 해야 합니다.

기능 엔지니어링도 데이터 준비의 일부입니다. 데이터에 대한 도메인 지식을 사용하여 기계 학습 알고리즘을 작동시키는 특징을 만드는 프로세스입니다. 특징은 문제를 해결할 때 도움이 될 수 있는 특성입니다. 데이터 내의 특징은 예측 모델에서 중요하며 달성하려는 결과에 영향을 미칩니다. 기계 학습 도구를 적용하여 데이터를 분석할 때는 기능 엔지니어링이 매우 중요합니다.

텍스트 작업 시 데이터를 조작할 수 있으려면 데이터를 코딩하기 위한 텍스트 분석 단계가 필요합니다. 데이터 과학자는 이 문제를 해결하기 위해 데이터세트 내에서 무엇을 찾고 있는지 알아야 합니다. 텍스트 분석은 적절한 그룹화가 설정되고 프로그래밍이 숨겨진 내용을 간과하지 않도록 하는 데 매우 중요합니다. 데이터 준비 단계는 문제를 해결하기 위한 다음 단계를 위한 단계를 설정합니다. 이 단계를 완료하는 데 시간이 좀 걸릴 수 있지만 제대로 수행한다면 결과는 프로젝트를 뒷받침할 수 있습니다.

이 단계를 건너뛰면 결과가 최고 수준에 미치지 못해 다시 원래대로 돌아가게 될 수도 있습니다. 이 영역에 시간을 할애하고 사용 가능한 도구를 사용하여 일반적인 단계를 자동화하여 데이터 준비를 가속화하는 것이 중요합니다. 이 영역의 세부 사항에 주의를 기울이세요. 결국, 한 가지 나쁜 재료만 있으면 훌륭한 식사를 망칠 수 있습니다. 이것으로 주요 개념을 검토한 이 과정의 데이터 준비 섹션을 마치겠습니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 마찬가지로, 데이터 준비 단계에서 데이터를 변환하는 과정은 데이터를 다루기 더 쉬운 상태로 만드는 과정입니다.
- 텍스트 작업 시 데이터를 조작할 수 있으려면 데이터를 코딩하기 위한 텍스트 분석 단계가 필요합니다.
- 데이터 준비 단계는 문제를 해결하기 위한 다음 단계를 위한 단계를 설정합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From Understanding to Preparation Data Preparation - Concepts! In a sense, data preparation is similar to washing freshly picked vegetables in so far as unwanted elements, such as dirt or imperfections, are removed. Together with data collection and data understanding, data preparation is the most time-consuming phase of a data science project, typically taking 70% and even up to even 90% of the overall project time. Automating some of the data collection and preparation processes in the database, can reduce this time to as little as 50%. This time savings translates into increased time for data scientists to focus on creating models.

To continue with our cooking metaphor, we know that the process of chopping onions to a finer state will allow for its flavours to spread through a sauce more easily than that would be the case if we were to drop the whole onion into the sauce pot. Similarly, transforming data in the data preparation phase is the process of getting the data into a state where it may be easier to work with. Specifically, the data preparation stage of the methodology answers the question: What are the ways in which data is prepared? To work effectively with the data, it must be prepared in a way that addresses missing or invalid values and removes duplicates, toward ensuring that everything is properly formatted. Feature engineering is also part of data preparation.

It is the process of using domain knowledge of the data to create features that make the machine learning algorithms work. A feature is a characteristic that might help when solving a problem. Features within the data are important to predictive models and will influence the results you want to achieve. Feature engineering is critical when machine learning tools are being applied to analyze the data. When working with text, text analysis steps for coding the data are required to be able to manipulate the data.

The data scientist needs to know what they're looking for within their dataset to address the question. The text analysis is critical to ensure that the proper groupings are set, and that the programming is not overlooking what is hidden within. The data preparation phase sets the stage for the next steps in addressing the question. While this phase may take a while to do, if done right the results will support the project. If this is skipped over, then the outcome will not be up to par and may have you back at the drawing board.

It is vital to take your time in this area, and use the tools available to automate common steps to accelerate data preparation. Make sure to pay attention to the detail in this area. After all, it takes just one bad ingredient to ruin a fine meal. This ends the Data Preparation section of this course, in which we've reviewed key concepts. Thanks for watching!

</details>
