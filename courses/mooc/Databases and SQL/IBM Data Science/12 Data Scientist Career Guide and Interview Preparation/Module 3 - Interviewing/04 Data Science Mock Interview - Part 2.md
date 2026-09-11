# Data Science Mock Interview - Part 2

## 개요
- 강좌: Data Scientist Career Guide and Interview Preparation
- 모듈: Interviewing
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/career-guide-and-interview-prep-for-data-science-pc/lecture/kO9Qz/data-science-mock-interview-part-2)
- 이제 Cindy가 데이터 사이언티스트에 지원한 취업 면접을 계속하겠습니다.
- 면접관은 IBM의 스킬 네트워크 엔지니어링 매니저이자 AI 전문가인 안토니오 칸지아노 (Antonio Cangiano) 입니다.

## 내용
### 핵심 내용
- 이제 Cindy가 데이터 사이언티스트에 지원한 취업 면접을 계속하겠습니다.
- 면접관은 IBM의 스킬 네트워크 엔지니어링 매니저이자 AI 전문가인 안토니오 칸지아노 (Antonio Cangiano) 입니다.
- 따라서 능선 회귀와 선형 회귀는 매우 인기 있는 두 가지 회귀 유형입니다.
- 따라서 과적합을 방지할 수 있지만 선형 회귀에는 이러한 기능이 없을 수도 있습니다.
- 반면 선형 회귀는 이를 고려할 필요가 없으므로 잠재적으로 더 빨라질 수 있습니다.
- 그리고 이 질문을 바탕으로 팀원들이 모델을 분석하거나 모델에 반영할 때 어떤 기능을 유용하게 사용할 수 있을지에 대해서도 생각해 봐야 했습니다.

### 한국어 Transcript

이제 Cindy가 데이터 사이언티스트에 지원한 취업 면접을 계속하겠습니다. 면접관은 IBM의 스킬 네트워크 엔지니어링 매니저이자 AI 전문가인 안토니오 칸지아노 (Antonio Cangiano) 입니다. 다른 인터뷰와 마찬가지로 모든 답변이 정답일 수는 없지만 인터뷰 대상자가 질문에 어떻게 대답하기로 선택했는지에 초점을 맞추세요. 따라서 능선 회귀와 선형 회귀는 매우 인기 있는 두 가지 회귀 유형입니다. 이 둘의 차이점에 대해 조금 말씀해 주시겠어요?

아, 그러니까 능선 회귀에는 그 제곱의 합을 계산하는 페널티 항이 있습니다. 즉, 페널티 항은 선형 함수에 있는 계수의 제곱합입니다. 하지만 선형 회귀는 그렇지 않습니다. 그 결과 능선 회귀는 이런 경향이 있는 것 같아요. 데이터 집합의 랜덤 노이즈에 덜 취약하죠.

따라서 과적합을 방지할 수 있지만 선형 회귀에는 이러한 기능이 없을 수도 있습니다. 교육 데이터 비용은 어떤 영향을 미칠까요? 다음 질문으로 넘어가도 돼요 모든 답을 아는 사람은 없습니다. 네, 하지만 제 생각에는 잘 이해한 바로는 선형 회귀의 비용이 더 낮아질 것이라고 생각합니다. 그럴 필요가 없기 때문에 페널티 항을 항상 고려할 필요가 없기 때문입니다.

때로는 그 페널티 항으로 인해 더 이상 페널티가 없는 지점에 도달할 때까지 함수를 계속 훈련시킬 수 있습니다. 반면 선형 회귀는 이를 고려할 필요가 없으므로 잠재적으로 더 빨라질 수 있습니다. 이제 항상 숫자 4, 정확히 숫자 4를 출력하는 모델이 있다고 상상해 보세요. 따라서 분산은 훈련이 얼마나 잘 이루어졌는지를 나타냅니다. 죄송하지만 훈련 세트를 기반으로 함수가 얼마나 잘 모델링되었는지를 나타냅니다.

이 경우에는 모델이 항상 for를 출력하기 때문에 분산이 0이라는 뜻이라고 생각합니다. 왜냐하면 분산은 0이 되기 때문이죠. 네, 훈련 세트에 전혀 의존하지 않기 때문이죠. 자, 이제 세 개의 방정식과 두 개의 미지수로 구성된 선형 시스템이 있다고 가정해 봅시다. 우선, 세 개의 방정식과 두 개의 미지수가 있는 선형 시스템은 시스템이 지나치게 결정되었다는 뜻입니다.

즉, 방정식이 있을 수도 있고, 선형 연립방정식의 정확한 해법을 찾지 못할 수도 있다는 뜻이죠. 이것을 근사적으로 풀기 위해 최소 제곱이라는 것을 계산할 수 있는 방법을 사용할 수 있습니다. 이것은 근본적으로, 예를 들어 Ax가 B와 같다는 방정식이 있고, Ax와 B의 차이를 최소화하는 x의 해를 찾으려고 합니다. 그러면 X의 해를 근사화하는 데 도움이 될 것입니다. 아주 자랑스럽게 생각하는 프로젝트에 대해 말씀해 주시겠어요?

그래서 지난 학기에 저는 다른 세 명의 학생들과 함께 4단계 시험 점수를 놓고 미안한 점을 예측해 보았습니다. 우리가 받은 데이터를 가지고 있는 회사가 인종차별적 장치를 가지고 있는지 판단하기 위해서였죠. 왜냐하면 우리에겐 “우리 기기가 인종차별적인가요?” 같은 아주 모호한 질문만 주어졌기 때문이죠. 아니면 특정 인구에 대한 차별도 있죠. 그래서 우리는 어떤 변수를 봐야 할지 결정해야 했고 어떤 모델을 사용할지도 결정해야 했습니다.

그룹 차원에서 결정을 내리고 문제에 대한 여러 가지 잠재적 접근법을 논의하는 전체 과정이었죠. 왜냐하면 저는 개인으로서 특정 문제에 대해 한 가지 접근법만 사용하는 경우가 많기 때문이죠. 다른 사람들의 의견을 들으면서 어떤 면에서는 제 시야가 열리고 특정 문제에 더 효과적으로 접근할 수 있는 다양한 방법을 찾아낼 수 있었습니다. 그리고 이러한 기기의 편향을 파악하는 데 개인적으로 어떤 기여를 하셨나요? 그래서 이 프로젝트에서는 주로 데이터 정리와 기능 엔지니어링을 담당했습니다.

우선 이 데이터는 CSV 파일처럼 쉬운 형식으로 직접 제공되지 않았어요. 네, 글쎄요, 안타깝게도 방법을 몰랐기 때문에 API를 사용하여 데이터를 추출하고 승무원들이 모델링에 사용하기 쉬운 형식으로 변환해야 했습니다. 그리고 이 질문을 바탕으로 팀원들이 모델을 분석하거나 모델에 반영할 때 어떤 기능을 유용하게 사용할 수 있을지에 대해서도 생각해 봐야 했습니다. 이 인터뷰는 데이터 과학 모의 면접, 3부로 마무리하겠습니다.

## 예시
- 이것은 근본적으로, 예를 들어 Ax가 B와 같다는 방정식이 있고, Ax와 B의 차이를 최소화하는 x의 해를 찾으려고 합니다.

## 요약
- 따라서 과적합을 방지할 수 있지만 선형 회귀에는 이러한 기능이 없을 수도 있습니다.
- 반면 선형 회귀는 이를 고려할 필요가 없으므로 잠재적으로 더 빨라질 수 있습니다.
- 그리고 이 질문을 바탕으로 팀원들이 모델을 분석하거나 모델에 반영할 때 어떤 기능을 유용하게 사용할 수 있을지에 대해서도 생각해 봐야 했습니다.

<details>
<summary>영문 Transcript 원문</summary>

We will now continue with a job interview where Cindy has applied for the position of Data Scientist. The interviewer is Antonio Cangiano, a Skills Network Engineering Manager and AI specialist at IBM. Please note that, like in any interview, not all answers may be correct, but focus on how the interviewee chose to answer the questions. So ridge regression and linear regression are two very popular types of regressions. Can you tell me a little bit about the difference between the two?

Yeah, I think I can. Oh, so ridge regression comes with a penalty term that calculates the sum of squares of that, that is, sorry, the penalty term is the sum of squares of the coefficients in a linear function, however, linear regression, on the other hand does not come with that. And as a result, I think ridge regression tends to it has, it's more it's less vulnerable to random noise in the data set. So it prevents overfitting, whereas linear regression might not have this capability. What is the implication for cost on training data?

Cost on training data? I'm not entirely sure. We can move on to the next question. Nobody knows all the answers Yeah, but I do think that up well, my educated guess would be that the cost of linear regression will be lower, because you don't have you don't have to always consider the penalty term. And it can, sometimes that penalty term can cause the function to keep on training until it finally reaches a point where there's no more penalty, whereas linear regression, it does not need to consider that so it could potentially be faster.

Now imagine that you have a model that always outputs the number four, exactly the number four, what would be the variance? So variance represents how well the how well the training, sorry, how well the function has been modeled based on the training set. And in this case, I believe that since the model always outputs for, it would mean that the variance is zero because it doesn't, yeah, it doesn't depend on the training set at all. Okay, so now let's say that you have a linear system of three equations and two unknowns, How would you, approximately, solve the system? So to begin, linear system with three equations and two unknowns means that it the system is an overdetermined.

Meaning that potentially we have equations to potentially we don't have an exact solution to the system of linear equations. And to approximately solve this, we could do something we could calculate something called least squares. And this would be helpful. This essentially tries to find the, for example, we have a an equation Ax equals B, we're trying to find the solution to x that minimizes the difference between Ax and B. And that would help us approximate a solution for X.

Can you tell me about a project that you're very proud of? So this past semester, I was working with three other students to a four step test scores to predict the sorry to determine if the company, the company, which, whose data we've received, has racist devices. And that was a project that I'm very proud of, because we were only given like a very vague question such as, "Are are our devices racist? " Or, discriminatory towards certain populations. And we had from that we had to determine which variables to look at, but also what kind of models to use.

And it was a whole process of trying to decide as a group and discuss different potential approaches to the problem. And, yeah, that was really rewarding. Because often as an individual, perhaps I only have one approach to certain things. By hearing other people's opinions, it was very, in a way, it opened up my perspective and found out different ways that are potentially more effective to approach a certain problem. And what was your individual contribution in trying to determine bias in these devices?

So for this project, I was mainly in charge of data cleaning and also feature engineering, for example, first I have to this data was not directly given to us in an easy format, not like in a CSV file. It's usually the case. Yeah, well, unfortunately, we didn't know how, yeah, so we had to extract the data from using their API or, and also try to convert it into a format that was easy for my crewmates to use for modeling. And I also, based on the question, I also had to think about, what kind of features would be useful for my teammates to use in analyzing or feeding into the model. This interview will conclude in Data Science Mock Interview, Part 3.

</details>
