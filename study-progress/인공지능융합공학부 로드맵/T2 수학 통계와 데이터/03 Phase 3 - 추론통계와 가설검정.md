# T2 Phase 3 — 추론통계와 가설검정

> 학부 교과 **데이터사이언스통계(1학년 2학기)** 의 뒤 절반

- 목표: 표본에서 얻은 숫자로 모집단에 대해 말할 때, 그 말이 어디까지 보장되는지 안다.
- 분량: 약 16시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 신뢰구간을 계산하고 **"95% 신뢰구간"이 정확히 무엇을 뜻하는지** 오해 없이 설명한다
- 귀무가설·대립가설을 세우고 상황에 맞는 검정(t검정·비율검정·카이제곱)을 고른다
- p값을 해석하고, **p값이 말해 주지 않는 것**을 안다
- 1종/2종 오류와 검정력의 관계를 설명한다
- 표본 크기가 결과에 미치는 영향을 시뮬레이션으로 보인다

> **왜 이게 AI 트랙에 필요한가**: [T3 Phase 4(기계학습 프로젝트)](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/04%20Phase%204%20-%20%EA%B8%B0%EA%B3%84%ED%95%99%EC%8A%B5%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8.md)에서 "모델 A가 모델 B보다 정확도 1%p 높다"가 우연인지 아닌지를 판단할 때 그대로 쓰인다. 이 판단을 못 하면 성능 비교표가 근거가 되지 못한다.

## 3-A. 추론의 뼈대

메인: Statistics with Python, `Course 2 - Inferential Statistical Analysis with Python`

Module 1 — 추론 절차 개관

- [ ] [01 Welcome to the Course.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%201%20-%20Overview%20and%20Inference%20Procedures/01%20Welcome%20to%20the%20Course.md)
- [ ] [02 Inferential Statistical Analysis with Python Guidelines.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%201%20-%20Overview%20and%20Inference%20Procedures/02%20Inferential%20Statistical%20Analysis%20with%20Python%20Guidelines.md)
- [ ] [03 Introduction to Inference Methods - Oh the Things You Will See.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%201%20-%20Overview%20and%20Inference%20Procedures/03%20Introduction%20to%20Inference%20Methods%20-%20Oh%20the%20Things%20You%20Will%20See.md)
- [ ] [04 Bag A or Bag B.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%201%20-%20Overview%20and%20Inference%20Procedures/04%20Bag%20A%20or%20Bag%20B.md)
- [ ] [05 This or That - Language and Notation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%201%20-%20Overview%20and%20Inference%20Procedures/05%20This%20or%20That%20-%20Language%20and%20Notation.md)
- [ ] [06 The Python Statistics Landscape.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%201%20-%20Overview%20and%20Inference%20Procedures/06%20The%20Python%20Statistics%20Landscape.md)

Module 2 — 신뢰구간

- [ ] [01 Estimating a Population Proportion with Confidence.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/01%20Estimating%20a%20Population%20Proportion%20with%20Confidence.md)
- [ ] [02 Understanding Confidence Intervals.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/02%20Understanding%20Confidence%20Intervals.md)
- [ ] [03 Demo - Seeing Theory.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/03%20Demo%20-%20Seeing%20Theory.md)
- [ ] [04 Assumptions for a Single Population Proportion Confidence Interval.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/04%20Assumptions%20for%20a%20Single%20Population%20Proportion%20Confidence%20Interval.md)
- [ ] [05 Conservative Approach & Sample Size Consideration.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/05%20Conservative%20Approach%20&%20Sample%20Size%20Consideration.md)
- [ ] [06 Estimating a Difference in Population Proportions with Confidence.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/06%20Estimating%20a%20Difference%20in%20Population%20Proportions%20with%20Confidence.md)
- [ ] [07 Interpretations & Assumptions for Two Population Proportion Intervals.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/07%20Interpretations%20&%20Assumptions%20for%20Two%20Population%20Proportion%20Intervals.md)
- [ ] [08 Estimating a Population Mean with Confidence.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/08%20Estimating%20a%20Population%20Mean%20with%20Confidence.md)
- [ ] [09 Estimating a Mean Difference for Paired Data.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/09%20Estimating%20a%20Mean%20Difference%20for%20Paired%20Data.md)
- [ ] [10 Estimating a Difference in Population Means with Confidence (for Independent Groups).md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%202%20-%20Confidence%20Intervals/10%20Estimating%20a%20Difference%20in%20Population%20Means%20with%20Confidence%20%28for%20Independent%20Groups%29.md)

Module 3 — 가설검정. **이 Phase의 핵심 모듈이다**

- [ ] [01 Setting Up a Test for a Population Proportion.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/01%20Setting%20Up%20a%20Test%20for%20a%20Population%20Proportion.md)
- [ ] [02 Testing a One Population Proportion.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/02%20Testing%20a%20One%20Population%20Proportion.md)
- [ ] [03 Setting Up a Test of Difference in Population Proportions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/03%20Setting%20Up%20a%20Test%20of%20Difference%20in%20Population%20Proportions.md)
- [ ] [04 Testing a Difference in Population Proportions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/04%20Testing%20a%20Difference%20in%20Population%20Proportions.md)
- [ ] [05 Interview - P-Values, P-Hacking and More.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/05%20Interview%20-%20P-Values,%20P-Hacking%20and%20More.md)
- [ ] [06 One Mean - Testing about a Population Mean with Confidence.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/06%20One%20Mean%20-%20Testing%20about%20a%20Population%20Mean%20with%20Confidence.md)
- [ ] [07 Testing a Population Mean Difference.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/07%20Testing%20a%20Population%20Mean%20Difference.md)
- [ ] [08 Testing for a Difference in Population Means (for Independent Groups).md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/08%20Testing%20for%20a%20Difference%20in%20Population%20Means%20%28for%20Independent%20Groups%29.md)
- [ ] [09 Demo - Name That Scenario.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/09%20Demo%20-%20Name%20That%20Scenario.md)
- [ ] [10 Chocolate & Cycling Assignment.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%203%20-%20Hypothesis%20Testing/10%20Chocolate%20&%20Cycling%20Assignment.md)

Module 4 — 적용

- [ ] [01 The Importance of Good Research Questions for Sound Inference.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%204%20-%20Learner%20Application/01%20The%20Importance%20of%20Good%20Research%20Questions%20for%20Sound%20Inference.md)
- [ ] [02 Descriptive Inference Examples for Single Variables Using Confidence Intervals.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%204%20-%20Learner%20Application/02%20Descriptive%20Inference%20Examples%20for%20Single%20Variables%20Using%20Confidence%20Intervals.md)
- [ ] [03 Descriptive Inference Examples for Single Variables Using Hypothesis Testing.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%204%20-%20Learner%20Application/03%20Descriptive%20Inference%20Examples%20for%20Single%20Variables%20Using%20Hypothesis%20Testing.md)
- [ ] [04 Comparing Means for Two Independent Samples - An Example.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%204%20-%20Learner%20Application/04%20Comparing%20Means%20for%20Two%20Independent%20Samples%20-%20An%20Example.md)
- [ ] [05 Comparing Means for Two Paired Samples - An Example.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%204%20-%20Learner%20Application/05%20Comparing%20Means%20for%20Two%20Paired%20Samples%20-%20An%20Example.md)
- [ ] [06 Comparing Proportions for Two Independent Samples - An Example.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%202%20-%20Inferential%20Statistical%20Analysis%20with%20Python/Module%204%20-%20Learner%20Application/06%20Comparing%20Proportions%20for%20Two%20Independent%20Samples%20-%20An%20Example.md)

## 3-B. 같은 내용을 실습으로 한 번 더

함께 보기: Data Analytics, `Course 2` module 03~04

- [ ] [01 Module 3 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/01%20Module%203%20Introduction.md)
- [ ] [02 Inferential Statistics.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/02%20Inferential%20Statistics.md)
- [ ] [03 Point and Interval Estimates.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/03%20Point%20and%20Interval%20Estimates.md)
- [ ] [04 Sampling Distributions and the Central Limit Theorem.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/04%20Sampling%20Distributions%20and%20the%20Central%20Limit%20Theorem.md)
- [ ] [05 Demo Confidence Intervals in Action.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/05%20Demo%20Confidence%20Intervals%20in%20Action.md)
- [ ] [06 Confidence Intervals.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/06%20Confidence%20Intervals.md)
- [ ] [07 Mechanisms of Confidence Intervals.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/07%20Mechanisms%20of%20Confidence%20Intervals.md)
- [ ] [08 Understanding Margin of Error.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/08%20Understanding%20Margin%20of%20Error.md)
- [ ] [09 Demo Confidence Intervals for Means.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/09%20Demo%20Confidence%20Intervals%20for%20Means.md)
- [ ] [10 Confidence Intervals for Proportions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/10%20Confidence%20Intervals%20for%20Proportions.md)
- [ ] [11 Demo Confidence Intervals for Proportions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/11%20Demo%20Confidence%20Intervals%20for%20Proportions.md)
- [ ] [12 Interpretation with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/12%20Interpretation%20with%20LLMs.md)
- [ ] [13 Simulating Random Sampling with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/13%20Simulating%20Random%20Sampling%20with%20LLMs.md)
- [ ] [14 Inference and Visualization with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2003%20Confidence%20intervals/14%20Inference%20and%20Visualization%20with%20LLMs.md)
- [ ] [01 Module 4 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/01%20Module%204%20Introduction.md)
- [ ] [02 Demo Hypothesis Testing in Action.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/02%20Demo%20Hypothesis%20Testing%20in%20Action.md)
- [ ] [03 Hypothesis Testing Means.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/03%20Hypothesis%20Testing%20Means.md)
- [ ] [04 The Hypothesis.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/04%20The%20Hypothesis.md)
- [ ] [05 Identifying the Hypothesis and Test Type.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/05%20Identifying%20the%20Hypothesis%20and%20Test%20Type.md)
- [ ] [06 Calculating the Test Statistic.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/06%20Calculating%20the%20Test%20Statistic.md)
- [ ] [07 Determining the Significance Level and Rejection Region.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/07%20Determining%20the%20Significance%20Level%20and%20Rejection%20Region.md)
- [ ] [08 Calculating the p-value.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/08%20Calculating%20the%20p-value.md)
- [ ] [09 Demo Hypothesis Testing for Means.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/09%20Demo%20Hypothesis%20Testing%20for%20Means.md)
- [ ] [10 Hypothesis Testing Errors.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/10%20Hypothesis%20Testing%20Errors.md)
- [ ] [11 The t-Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/11%20The%20t-Distribution.md)
- [ ] [12 Hypothesis Testing for Proportions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/12%20Hypothesis%20Testing%20for%20Proportions.md)
- [ ] [13 Demo Hypothesis Testing for Proportions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/13%20Demo%20Hypothesis%20Testing%20for%20Proportions.md)
- [ ] [14 Two-Sample Tests.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/14%20Two-Sample%20Tests.md)
- [ ] [15 Other Hypothesis Tests.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/15%20Other%20Hypothesis%20Tests.md)
- [ ] [16 Interpretation with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/16%20Interpretation%20with%20LLMs.md)
- [ ] [17 Inference with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/17%20Inference%20with%20LLMs.md)
- [ ] [18 Your Next Steps.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2004%20Hypothesis%20testing/18%20Your%20Next%20Steps.md)

## 3-C. 인과 추론 — 선택 심화

함께 보기: A Crash Course in Causality (MOOC · University of Pennsylvania). 학부 교과에는 없지만, Phase 2에서 "상관은 인과가 아니다"로 멈춘 이야기가 **그럼 인과는 어떻게 주장하는가**로 이어진다. 캡스톤에서 "이 기능이 효과가 있었다"를 주장하려면 필요해진다.

- [ ] [01 Welcome to A Crash Course in Causality.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/01%20Welcome%20to%20A%20Crash%20Course%20in%20Causality.md)
- [ ] [02 Confusion over causality.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/02%20Confusion%20over%20causality.md)
- [ ] [03 Potential outcomes and counterfactuals.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/03%20Potential%20outcomes%20and%20counterfactuals.md)
- [ ] [04 Hypothetical interventions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/04%20Hypothetical%20interventions.md)
- [ ] [05 Causal effects.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/05%20Causal%20effects.md)
- [ ] [06 Causal assumptions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/06%20Causal%20assumptions.md)
- [ ] [07 Stratification.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/07%20Stratification.md)
- [ ] [08 Incident user and active comparator designs.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/08%20Incident%20user%20and%20active%20comparator%20designs.md)
- [ ] [01 Confounding.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%202%20-%20Confounding%20and%20Directed%20Acyclic%20Graphs%20%28DAGs%29/01%20Confounding.md)
- [ ] [02 Causal graphs.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%202%20-%20Confounding%20and%20Directed%20Acyclic%20Graphs%20%28DAGs%29/02%20Causal%20graphs.md)
- [ ] [03 Relationship between DAGs and probability distributions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%202%20-%20Confounding%20and%20Directed%20Acyclic%20Graphs%20%28DAGs%29/03%20Relationship%20between%20DAGs%20and%20probability%20distributions.md)
- [ ] [04 Paths and associations.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%202%20-%20Confounding%20and%20Directed%20Acyclic%20Graphs%20%28DAGs%29/04%20Paths%20and%20associations.md)
- [ ] [05 Conditional independence (d-separation).md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%202%20-%20Confounding%20and%20Directed%20Acyclic%20Graphs%20%28DAGs%29/05%20Conditional%20independence%20%28d-separation%29.md)
- [ ] [06 Confounding revisited.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%202%20-%20Confounding%20and%20Directed%20Acyclic%20Graphs%20%28DAGs%29/06%20Confounding%20revisited.md)
- [ ] [07 Backdoor path criterion.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%202%20-%20Confounding%20and%20Directed%20Acyclic%20Graphs%20%28DAGs%29/07%20Backdoor%20path%20criterion.md)
- [ ] [08 Disjunctive cause criterion.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%202%20-%20Confounding%20and%20Directed%20Acyclic%20Graphs%20%28DAGs%29/08%20Disjunctive%20cause%20criterion.md)
- [ ] [01 Observational studies.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/01%20Observational%20studies.md)
- [ ] [02 Overview of matching.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/02%20Overview%20of%20matching.md)
- [ ] [03 Matching directly on confounders.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/03%20Matching%20directly%20on%20confounders.md)
- [ ] [04 Greedy (nearest-neighbor) matching.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/04%20Greedy%20%28nearest-neighbor%29%20matching.md)
- [ ] [05 Optimal matching.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/05%20Optimal%20matching.md)
- [ ] [06 Assessing balance.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/06%20Assessing%20balance.md)
- [ ] [07 Analyzing data after matching.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/07%20Analyzing%20data%20after%20matching.md)
- [ ] [08 Sensitivity analysis.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/08%20Sensitivity%20analysis.md)
- [ ] [09 Data example in R.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/09%20Data%20example%20in%20R.md)
- [ ] [10 Propensity scores.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/10%20Propensity%20scores.md)
- [ ] [11 Propensity score matching.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/11%20Propensity%20score%20matching.md)
- [ ] [12 Propensity score matching in R.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%203%20-%20Matching%20and%20Propensity%20Scores/12%20Propensity%20score%20matching%20in%20R.md)
- [ ] [01 Intuition for Inverse Probability of Treatment Weighting (IPTW).md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/01%20Intuition%20for%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29.md)
- [ ] [02 More intuition for IPTW estimation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/02%20More%20intuition%20for%20IPTW%20estimation.md)
- [ ] [03 Marginal structural models.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/03%20Marginal%20structural%20models.md)
- [ ] [04 IPTW estimation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/04%20IPTW%20estimation.md)
- [ ] [05 Assessing balance.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/05%20Assessing%20balance.md)
- [ ] [06 Distribution of weights.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/06%20Distribution%20of%20weights.md)
- [ ] [07 Remedies for large weights.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/07%20Remedies%20for%20large%20weights.md)
- [ ] [08 Doubly robust estimators.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/08%20Doubly%20robust%20estimators.md)
- [ ] [09 Data example in R.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%204%20-%20Inverse%20Probability%20of%20Treatment%20Weighting%20%28IPTW%29/09%20Data%20example%20in%20R.md)
- [ ] [01 Introduction to instrumental variables.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/01%20Introduction%20to%20instrumental%20variables.md)
- [ ] [02 Randomized trials with noncompliance.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/02%20Randomized%20trials%20with%20noncompliance.md)
- [ ] [03 Compliance classes.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/03%20Compliance%20classes.md)
- [ ] [04 Assumptions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/04%20Assumptions.md)
- [ ] [05 Causal effect identification and estimation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/05%20Causal%20effect%20identification%20and%20estimation.md)
- [ ] [06 IVs in observational studies.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/06%20IVs%20in%20observational%20studies.md)
- [ ] [07 Two stage least squares.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/07%20Two%20stage%20least%20squares.md)
- [ ] [08 Weak instruments.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/08%20Weak%20instruments.md)
- [ ] [09 IV analysis in R.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/A%20Crash%20Course%20in%20Causality/Module%205%20-%20Instrumental%20Variables%20Methods/09%20IV%20analysis%20in%20R.md)

## 산출물

Phase 2에서 만든 EDA 보고서의 데이터로 검정 보고서 하나.

1. 데이터를 보기 **전에** 세운 가설 하나 (사후에 만든 가설이 아니어야 한다)
2. 고른 검정 방법과 그것을 고른 이유
3. 신뢰구간과 p값, 그리고 결론 한 문장
4. **"이 결론이 틀릴 수 있는 경로"** 세 가지 — 표본 편향, 다중 비교, 효과 크기 대비 표본 크기

## 다음 단계

→ [04 Phase 4 - 인공지능 수학](04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%88%98%ED%95%99.md)
