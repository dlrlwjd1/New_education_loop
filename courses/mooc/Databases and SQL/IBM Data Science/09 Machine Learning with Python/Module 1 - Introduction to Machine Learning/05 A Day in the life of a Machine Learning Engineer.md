# A Day in the life of a Machine Learning Engineer

## 개요
- 강좌: Machine Learning with Python
- 모듈: Introduction to Machine Learning
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/eelmt/a-day-in-the-life-of-a-machine-learning-engineer)
- 이 동영상을 시청하고 나면 다음을 수행할 수 있습니다.
- 기계 학습 모델의 수명 주기에서 각 프로세스의 중요성과 요구 사항을 설명할 수 있습니다.

## 내용
### 핵심 내용
- 이 동영상을 시청하고 나면 다음을 수행할 수 있습니다.
- 기계 학습 모델의 수명 주기에서 각 프로세스의 중요성과 요구 사항을 설명할 수 있습니다.
- 또한 사용자가 저장한 제품, 좋아요를 누른 제품, 검색 기록, 가장 많이 방문한 제품 등과 같은 정보가 포함된 다른 데이터도 살펴볼 수 있습니다.
- 예를 들어 각 사용자의 거래 간 평균 기간을 계산하여 사용자가 가장 많이 구매하는 제품을 찾아야 할 수도 있습니다.
- 예를 들어, 사용자가 특정 성분이 들어 있지 않은 제품을 검색했다는 것을 알게 되면 절대 사용하지 않을 제품을 추천하지 않도록 하고 싶습니다.
- 예를 들어 두 사용자가 제품을 평가하는 방식을 기반으로 유사성을 만들 수 있습니다.

### 한국어 Transcript

머신 러닝 엔지니어의 하루 일생에 오신 것을 환영합니다. 이 동영상을 시청하고 나면 다음을 수행할 수 있습니다. 기계 학습 모델의 수명 주기에서 각 프로세스의 중요성과 요구 사항을 설명할 수 있습니다. 그리고 다른 프로세스보다 시간이 많이 걸리는 프로세스를 예로 들어 보겠습니다. 이제 제가 현재 작업 중인 프로젝트에서 기계 학습 모델의 라이프사이클을 살펴보겠습니다.

비즈니스 수익을 높이기 위해 저는 고객이 이미 구매한 제품과 유사한 제품을 추천하는 모델을 만들고 배포하는 일을 맡았습니다. 저는 고객과 협력하여 최종 사용자의 불만 사항을 제시했습니다. “뷰티 제품 고객으로서 구매 내역을 바탕으로 다른 제품에 대한 추천을 받아 스킨케어 요구 사항을 해결하고 전반적인 피부 건강을 개선할 수 있기를 바랍니다.” 문제를 정의하거나 상황을 설명하는 것은 매우 중요합니다. 제가 제공하는 기계 학습 솔루션이 고객의 요구에 맞는지 확인하고 싶기 때문입니다. 이제 클라이언트의 요구 사항을 이해했으니 다음 단계는 데이터 수집을 시작하는 것입니다.

회사가 어떤 종류의 데이터를 보유하고 있는지 파악하고 그 데이터의 출처를 파악해야 합니다. 여기에는 인구 통계, 구매 내역 및 완료된 거래와 관련된 모든 것과 같은 사용자 데이터가 포함될 수 있습니다. 또한 제품 데이터, 즉 제품의 재고 및 기능, 성분, 인기, 고객 평점 등을 얻을 수 있습니다. 또한 사용자가 저장한 제품, 좋아요를 누른 제품, 검색 기록, 가장 많이 방문한 제품 등과 같은 정보가 포함된 다른 데이터도 살펴볼 수 있습니다. 그런 다음 데이터를 랭글링하고, 집계하고, 결합하고, 병합하고, 하나의 중앙 소스에 매핑하는 등 몇 가지 주요 혁신을 진행해 보겠습니다.

이렇게 하면 데이터를 가져와야 할 때마다 여러 데이터베이스를 처리해야 할 필요성이 줄어듭니다. 프로세스의 다음 단계는 데이터 준비입니다. 대부분의 경우 여러 소스의 데이터에는 오류, 다양한 형식 및 누락된 데이터가 포함됩니다. 이 프로세스는 동시에 수행할 수 있으므로 데이터 수집 프로세스와 겹칩니다. 여기서 초점을 맞추는 부분은 데이터의 최종 버전을 준비하는 것입니다.

데이터를 정리하여 관련 없는 데이터를 걸러내고, 데이터 집합에 영향을 주지 않도록 극단값을 제거하고, 누락된 데이터의 의미에 따라 누락된 값을 제거하거나 임의로 생성하고, 각 데이터 열의 형식이 올바른지 확인해야 합니다. 예를 들어, 날짜는 날짜 형식이어야 하고 문자열은 적절하게 식별되어야 합니다. 추가 기능을 만들어야 할 수도 있습니다. 예를 들어 각 사용자의 거래 간 평균 기간을 계산하여 사용자가 가장 많이 구매하는 제품을 찾아야 할 수도 있습니다. 또는 각 제품이 대상으로 하는 피부 문제의 종류를 식별하여 각 사용자에게 할당하는 기능이 필요할 수도 있습니다.

도표를 만들어 패턴을 시각적으로 식별하고, 미용 제품 주제 전문가가 제공한 정보를 기반으로 데이터를 검증하고, 상관 관계 분석을 수행하여 사용자의 구매 습관과 요구에 매우 중요한 변수 또는 특징을 식별할 수 있습니다. 이를 탐색적 데이터 분석이라고 합니다. 또한 학습 및 테스트를 위해 데이터를 어떻게 분할할 계획인지 파악할 수 있습니다. 예를 들어 데이터를 무작위로 분할할까요, 아니면 가장 최근의 트랜잭션을 테스트 세트로 사용할까요? 이 예제에서는 가장 최근의 트랜잭션을 테스트 세트에 넣고 교육 세트에 동일한 사용자가 수행한 트랜잭션이 하나 이상 있는지 확인하기로 했습니다.

모델 개발 단계에서는 기계 학습 모델을 만들어 보겠습니다. 현실적으로 저는 처음부터 아무것도 만들지 않기 위해 기존 프레임워크와 리소스를 최대한 많이 활용하려고 합니다. 이 작업에서는 콘텐츠 기반 필터링이라는 기법을 사용하겠습니다. 이 기법은 제품 콘텐츠를 기반으로 제품 간 유사성을 찾습니다. 예를 들어, 수분이 많은 클렌저를 사용하는 경우 사용자는 피부가 건조하므로 보습력이 높은 보습제를 원할 가능성이 높습니다.

여기서 취할 수 있는 조치 중 하나는 사용자가 구매한 제품의 유사성 점수를 만들어 다른 제품과의 순위를 매기는 것입니다. 다른 요인도 작용할 수 있다는 점을 염두에 두고 가장 비슷한 제품을 추천할 수 있습니다. 예를 들어, 사용자가 특정 성분이 들어 있지 않은 제품을 검색했다는 것을 알게 되면 절대 사용하지 않을 제품을 추천하지 않도록 하고 싶습니다. 또한 사용자 데이터를 사용하는 협업 필터링이라는 기법을 사용하겠습니다. 여기서는 두 사용자가 제품을 보는 방식에 따라 유사점을 만들어 보겠습니다.

예를 들어 두 사용자가 제품을 평가하는 방식을 기반으로 유사성을 만들 수 있습니다. 먼저 특성에 따라 사용자를 버킷으로 그룹화합니다. 여기에는 연령, 지역, 피부 유형, 사용자가 등급을 매겼거나 구매한 제품이 포함될 수 있습니다. 그런 다음 기존 회원의 평균 평점을 취해 새 사용자가 평균 정도일 것이라고 가정하고 다른 사람들이 높게 평가한 것을 바탕으로 제품을 추천할 수 있습니다. 최종 모델은 두 기법의 조합이 될 것입니다.

모델 구축을 완료한 후에는 모델이 잘 작동하고 권장 사항이 사용자가 원하는 것을 나타내는지 테스트해 보겠습니다. 모델 평가의 초기 단계에는 모델을 튜닝하고 이전에 테스트를 위해 보관해 둔 데이터 세트를 테스트하는 작업이 포함됩니다. 결과가 만족스러우면 사용자 그룹을 대상으로 권장 사항을 실험하고 피드백을 요청하여 모델을 추가로 평가해 보겠습니다. 피드백에는 사용자 그룹에 추천을 평가해 달라고 요청하고, 추천 제품을 클릭하고 구매한 사람들의 수와 기타 필요한 지표를 수집하는 작업이 포함됩니다. 이제 빌드 및 테스트를 마쳤으므로 모델을 제작할 준비가 되었습니다.

이 프로젝트에서는 뷰티 제품 앱과 웹 사이트의 일부가 될 것입니다. 이것이 마지막 단계이긴 하지만, 배포된 모델의 성능을 추적하여 비즈니스에 필요한 작업을 계속 수행하는지 확인해야 합니다. 향후 반복 작업에는 기능을 확장하기 위해 새로운 정보를 기반으로 모델을 재교육하는 작업이 포함될 수 있습니다. 기계 학습 모델 라이프사이클의 각 단계는 솔루션의 성공에 중요합니다. 배포 후에도 솔루션의 품질을 유지하려면 지속적인 모니터링과 개선이 필요합니다.

## 예시
- 예를 들어, 날짜는 날짜 형식이어야 하고 문자열은 적절하게 식별되어야 합니다.
- 예를 들어 각 사용자의 거래 간 평균 기간을 계산하여 사용자가 가장 많이 구매하는 제품을 찾아야 할 수도 있습니다.
- 예를 들어 데이터를 무작위로 분할할까요, 아니면 가장 최근의 트랜잭션을 테스트 세트로 사용할까요?
- 예를 들어, 수분이 많은 클렌저를 사용하는 경우 사용자는 피부가 건조하므로 보습력이 높은 보습제를 원할 가능성이 높습니다.

## 요약
- 예를 들어 각 사용자의 거래 간 평균 기간을 계산하여 사용자가 가장 많이 구매하는 제품을 찾아야 할 수도 있습니다.
- 예를 들어, 사용자가 특정 성분이 들어 있지 않은 제품을 검색했다는 것을 알게 되면 절대 사용하지 않을 제품을 추천하지 않도록 하고 싶습니다.
- 예를 들어 두 사용자가 제품을 평가하는 방식을 기반으로 유사성을 만들 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to A Day in the Life of a Machine Learning Engineer. After watching this video, you will be able to: Describe the importance and requirements of each process in the lifecycle of a machine learning model. And, name the processes that are more time-consuming than others. Now, let’s go through the Lifecycle of a Machine Learning Model in a project that I am currently working on. To help increase business revenue, I have been tasked with creating and deploying a model that recommends similar products to what the customer has already bought.

I have worked together with the client to come up with an end-user’s pain point: “As a beauty product customer, I would like to receive recommendations for other products based on my purchase history so that I will be able to address my skincare needs and improve the overall health of my skin.” Defining the problem or stating the situation is very important, because I want to make sure the machine learning solution I am providing is aligned with the client’s needs. Now, that I understand the client’s needs, the next step is to begin data collection. I should determine what kind of data the company has and identify the sources it will come from. This could be user data such as demographics, purchase history, and anything related to completed transactions. I can also get the product data, that is, the inventory of products and what they do, their ingredients, how popular they are, their customer ratings, and so on.

Further, I may look at other data that includes information such as a user’s saved products, liked products, search history, most visited products, and so on. Then, I will go ahead and do some major transforming by wrangling, aggregating, joining, merging, and mapping the data onto one central source. This reduces the need to deal with multiple databases every time we need to pull data. The next step in the process is data preparation. Most of the time, data from multiple sources will contain errors, different formatting, and missing data.

This process overlaps with the Data Collection process as they can be done in tandem. The area of focus here is preparing a somewhat final version of the data. I will need to make sure that the data is cleaned to filter out irrelevant data, extreme values are removed to avoid influencing the data set, missing values are removed or randomly generated, depending on what the missing data may mean, and that each data column is in the proper format. For example, dates should be in date formats and strings should be properly identified. I may also need to create additional features.

For example, I may need to calculate the average duration between transactions for each user and find which products they buy the most. Or, I may need a feature that identifies what kind of skin issues each product targets and assign them to each user. I can create plots to visually identify patterns, validate the data based on information that the beauty product subject matter expert has given me, and do some correlation analysis to identify what variables or features are very important to the users’ buying habits and needs. This is called Exploratory data analysis. I can also identify how I plan on splitting the data for training and testing.

For example, do I want to randomly split the data or use the most recent transaction as a test set? In this example, I decided to put the most recent transaction in the test set and make sure that there was at least one transaction by that the same user in the training set. In the Model Development step, I will go ahead and build a Machine Learning model. Realistically, I try to leverage as many pre-existing frameworks and resources as possible, so I don’t create anything from scratch. For this task, I will use a technique called content-based filtering.

This technique finds the similarity between products, based on product content. For example, if someone is using a cleanser with lots of water, it is likely that the user has dry skin and will want a moisturizer that is highly moisturizing as well. One of the steps I might take here is to create a similarity score of the products a user has purchased and rank them to other products. I might recommend the most similar product while bearing in mind that there may be other factors that could come into play. For example, I might notice that the user has searched for products without particular ingredients, so I want to make sure that we are not recommending a product that they absolutely won’t use.

I will also use a technique called Collaborative Filtering that uses the user’s data. Here, I am creating similarities between two users based on how they view a product. For example, I can create a similarity, based on how two users rate their product. First, I group users into a bucket based on their characteristics. This could be age, region, and skin type, products the users rated, and or purchased.

Then, I can take the average ratings for existing members and assume that the new user will be somewhere around the average, and recommend a product based on what others have rated highly. The final model will be a combination of the two techniques. After I am done building the model, I will go ahead and test that the model is performing well and that recommendations are representing what the users want. This is called the Model Evaluation step; the initial stages of Model Evaluation will involve me tuning the model and doing some testing on the data set I had kept earlier for testing. Once I am satisfied with the results, I will further evaluate the model by experimenting with the recommendations on a group of users and asking for their feedback.

The feedback will include asking the group of users to rate the recommendations, and collecting data on the number of people who clicked and bought the recommended products, along with any other necessary metrics. Now that I am done with building and testing, the model is ready to go to production. For this project, it will be a part of the beauty product app and website. While this is the last step, I still need to track the deployed model’s performance to make sure it continues to do the job that the business requires. Future iterations may include retraining the model based on new information in order to expand its capabilities.

In this video, you learned that: Each of the steps of the Machine Learning Model Lifecycle is important to the success of the solution. After deployment, continuous monitoring and improvement is required to ensure that the quality of the solution is maintained. Thank you for watching, A Day in the Life of a Machine Learning Engineer.

</details>
