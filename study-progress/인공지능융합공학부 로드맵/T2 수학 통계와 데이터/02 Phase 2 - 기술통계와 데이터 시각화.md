# T2 Phase 2 — 기술통계와 데이터 시각화

> 학부 교과 **데이터사이언스통계(1학년 2학기, 전공기초 3학점)** 의 앞 절반
> ※ 이 과목은 강남대 교과목해설 페이지에 설명이 없다. 범위는 과목명과 후속 과목(회귀분석)의 선이수 관계로 잡았다.

- 목표: 처음 보는 데이터셋을 받아 "무엇이 들어 있고 어디가 이상한가"를 그림과 숫자로 답한다.
- 분량: 약 18시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 변수의 종류(범주형·순서형·연속형)를 구분하고 그에 맞는 그래프를 고른다
- 평균·중앙값·사분위수·표준편차를 계산하고, 분포가 치우쳤을 때 어느 것을 써야 하는지 판단한다
- 두 변수의 관계를 산점도·교차표로 보고 상관계수를 해석한다
- **상관과 인과를 구분해서 말한다**
- 모집단과 표본의 차이, 표본이 편향되는 경로를 설명한다
- matplotlib·seaborn·Plotly로 목적에 맞는 그래프를 만든다

## 2-A. 데이터를 보는 법

메인: Statistics with Python, `Course 1 - Understanding and Visualizing Data with Python`

Module 1 — 데이터의 종류와 연구 설계

- [ ] [01 Welcome to the Course.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/01%20Welcome%20to%20the%20Course.md)
- [ ] [02 Understanding and Visualizing Data Guidelines.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/02%20Understanding%20and%20Visualizing%20Data%20Guidelines.md)
- [ ] [03 What is Statistics.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/03%20What%20is%20Statistics.md)
- [ ] [04 Interview - Perspectives on Statistics in Real Life.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/04%20Interview%20-%20Perspectives%20on%20Statistics%20in%20Real%20Life.md)
- [ ] [05 Cool Stuff in Data.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/05%20Cool%20Stuff%20in%20Data.md)
- [ ] [06 Where Do Data Come From.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/06%20Where%20Do%20Data%20Come%20From.md)
- [ ] [07 Variable Types.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/07%20Variable%20Types.md)
- [ ] [08 Study Design.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/08%20Study%20Design.md)
- [ ] [09 Optional - Introduction to Jupyter Notebooks.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/09%20Optional%20-%20Introduction%20to%20Jupyter%20Notebooks.md)
- [ ] [10 Optional - Data Types in Python.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/10%20Optional%20-%20Data%20Types%20in%20Python.md)
- [ ] [11 Optional - Introduction to Libraries and Data Management.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%201%20-%20Introduction%20to%20Data/11%20Optional%20-%20Introduction%20to%20Libraries%20and%20Data%20Management.md)

Module 2 — 일변량 데이터

- [ ] [01 Categorical Data - Tables, Bar Charts & Pie Charts.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%202%20-%20Univariate%20Data/01%20Categorical%20Data%20-%20Tables,%20Bar%20Charts%20&%20Pie%20Charts.md)
- [ ] [02 Quantitative Data - Histograms.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%202%20-%20Univariate%20Data/02%20Quantitative%20Data%20-%20Histograms.md)
- [ ] [03 Quantitative Data - Numerical Summaries.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%202%20-%20Univariate%20Data/03%20Quantitative%20Data%20-%20Numerical%20Summaries.md)
- [ ] [04 Standard Score (Empirical Rule).md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%202%20-%20Univariate%20Data/04%20Standard%20Score%20%28Empirical%20Rule%29.md)
- [ ] [05 Quantitative Data - Boxplots.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%202%20-%20Univariate%20Data/05%20Quantitative%20Data%20-%20Boxplots.md)
- [ ] [06 Demo - Interactive Histogram & Boxplot.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%202%20-%20Univariate%20Data/06%20Demo%20-%20Interactive%20Histogram%20&%20Boxplot.md)

Module 3 — 다변량 데이터. **상관·교란변수(confounding)가 여기 나온다**

- [ ] [01 Looking at Associations with Multivariate Categorical Data.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%203%20-%20Multivariate%20Data/01%20Looking%20at%20Associations%20with%20Multivariate%20Categorical%20Data.md)
- [ ] [02 Looking at Associations with Multivariate Quantitative Data.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%203%20-%20Multivariate%20Data/02%20Looking%20at%20Associations%20with%20Multivariate%20Quantitative%20Data.md)
- [ ] [03 Demo - Interactive Scatterplot.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%203%20-%20Multivariate%20Data/03%20Demo%20-%20Interactive%20Scatterplot.md)
- [ ] [04 Introduction to Pizza Assignment.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%203%20-%20Multivariate%20Data/04%20Introduction%20to%20Pizza%20Assignment.md)

Module 4 — 모집단과 표본

- [ ] [01 Sampling from Well-Defined Populations.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/01%20Sampling%20from%20Well-Defined%20Populations.md)
- [ ] [02 Probability Sampling - Part I.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/02%20Probability%20Sampling%20-%20Part%20I.md)
- [ ] [03 Probability Sampling - Part II.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/03%20Probability%20Sampling%20-%20Part%20II.md)
- [ ] [04 Non-Probability Sampling - Part I.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/04%20Non-Probability%20Sampling%20-%20Part%20I.md)
- [ ] [05 Non-Probability Sampling - Part II.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/05%20Non-Probability%20Sampling%20-%20Part%20II.md)
- [ ] [06 Sampling Variance & Sampling Distributions - Part I.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/06%20Sampling%20Variance%20&%20Sampling%20Distributions%20-%20Part%20I.md)
- [ ] [07 Sampling Variance & Sampling Distributions - Part II.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/07%20Sampling%20Variance%20&%20Sampling%20Distributions%20-%20Part%20II.md)
- [ ] [08 Demo - Interactive Sampling Distribution.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/08%20Demo%20-%20Interactive%20Sampling%20Distribution.md)
- [ ] [09 Beyond Means - Sampling Distributions of Other Common Statistics.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/09%20Beyond%20Means%20-%20Sampling%20Distributions%20of%20Other%20Common%20Statistics.md)
- [ ] [10 Making Population Inference Based on Only One Sample.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/10%20Making%20Population%20Inference%20Based%20on%20Only%20One%20Sample.md)
- [ ] [11 Inference for Non-Probability Samples.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/11%20Inference%20for%20Non-Probability%20Samples.md)
- [ ] [12 Complex Samples.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Statistics%20with%20Python/Course%201%20-%20Understanding%20and%20Visualizing%20Data%20with%20Python/Module%204%20-%20Populations%20and%20Samples/12%20Complex%20Samples.md)

## 2-B. 기술통계 다시 보기

함께 보기: Data Analytics, `Course 2 - Applied Statistics` module 01~02 (같은 내용을 더 짧게. 확률·시뮬레이션이 붙어 있어 Phase 3의 예습이 된다)

- [ ] [01 Welcome to This Course.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/01%20Welcome%20to%20This%20Course.md)
- [ ] [02 Generative AI in This Course.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/02%20Generative%20AI%20in%20This%20Course.md)
- [ ] [03 Module 1 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/03%20Module%201%20Introduction.md)
- [ ] [04 Populations and Sampling.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/04%20Populations%20and%20Sampling.md)
- [ ] [05 Identifying the Population.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/05%20Identifying%20the%20Population.md)
- [ ] [06 Probabilistic Samples.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/06%20Probabilistic%20Samples.md)
- [ ] [07 Non-Probabilistic Samples.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/07%20Non-Probabilistic%20Samples.md)
- [ ] [08 Types of Bias.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/08%20Types%20of%20Bias.md)
- [ ] [09 Histograms.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/09%20Histograms.md)
- [ ] [10 Demo - Plotting Distributions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/10%20Demo%20-%20Plotting%20Distributions.md)
- [ ] [11 Central Tendency, Variability, and Skewness.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/11%20Central%20Tendency,%20Variability,%20and%20Skewness.md)
- [ ] [12 Central Tendency - Mean and Mode.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/12%20Central%20Tendency%20-%20Mean%20and%20Mode.md)
- [ ] [13 Central Tendency - Median.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/13%20Central%20Tendency%20-%20Median.md)
- [ ] [14 Demo - Central Tendency.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/14%20Demo%20-%20Central%20Tendency.md)
- [ ] [15 Variability - Range and Interquartile Range.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/15%20Variability%20-%20Range%20and%20Interquartile%20Range.md)
- [ ] [16 Variability - Variance and Standard Deviation.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/16%20Variability%20-%20Variance%20and%20Standard%20Deviation.md)
- [ ] [17 Skewness.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/17%20Skewness.md)
- [ ] [18 Why Use These Measures.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/18%20Why%20Use%20These%20Measures.md)
- [ ] [19 Demo - Variability and Skewness.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/19%20Demo%20-%20Variability%20and%20Skewness.md)
- [ ] [20 Box Plots.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/20%20Box%20Plots.md)
- [ ] [21 Demo - LLMs for Spreadsheet Formulas and Errors.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/21%20Demo%20-%20LLMs%20for%20Spreadsheet%20Formulas%20and%20Errors.md)
- [ ] [22 Correlation.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/22%20Correlation.md)
- [ ] [23 Correlation and Causation.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/23%20Correlation%20and%20Causation.md)
- [ ] [24 Demo - Correlations and Scatterplots in Spreadsheets.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/24%20Demo%20-%20Correlations%20and%20Scatterplots%20in%20Spreadsheets.md)
- [ ] [25 What is Segmentation.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/25%20What%20is%20Segmentation.md)
- [ ] [26 Demo - XLOOKUP.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/26%20Demo%20-%20XLOOKUP.md)
- [ ] [27 Demo - Pivot Tables.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2001%20Foundational%20statistical%20techniques/27%20Demo%20-%20Pivot%20Tables.md)
- [ ] [01 Module 2 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/01%20Module%202%20Introduction.md)
- [ ] [02 Randomness and Uncertainty.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/02%20Randomness%20and%20Uncertainty.md)
- [ ] [03 Probability and the Addition Rule.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/03%20Probability%20and%20the%20Addition%20Rule.md)
- [ ] [04 The Multiplication and Complement Rules.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/04%20The%20Multiplication%20and%20Complement%20Rules.md)
- [ ] [05 Conditional Probability.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/05%20Conditional%20Probability.md)
- [ ] [06 Independence.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/06%20Independence.md)
- [ ] [07 Random Variables.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/07%20Random%20Variables.md)
- [ ] [08 Estimation.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/08%20Estimation.md)
- [ ] [09 From Sample Distributions to Population Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/09%20From%20Sample%20Distributions%20to%20Population%20Distribution.md)
- [ ] [10 The Bernoulli Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/10%20The%20Bernoulli%20Distribution.md)
- [ ] [11 The Binomial Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/11%20The%20Binomial%20Distribution.md)
- [ ] [12 The Cumulative Distribution Function.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/12%20The%20Cumulative%20Distribution%20Function.md)
- [ ] [13 Random Sampling from a Discrete Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/13%20Random%20Sampling%20from%20a%20Discrete%20Distribution.md)
- [ ] [14 Demo Spreadsheet Simulation of a Discrete Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/14%20Demo%20Spreadsheet%20Simulation%20of%20a%20Discrete%20Distribution.md)
- [ ] [15 Demo LLM Simulation of a Discrete Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/15%20Demo%20LLM%20Simulation%20of%20a%20Discrete%20Distribution.md)
- [ ] [16 Continuous Probability Distributions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/16%20Continuous%20Probability%20Distributions.md)
- [ ] [17 The Normal Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/17%20The%20Normal%20Distribution.md)
- [ ] [18 The Standard Normal Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/18%20The%20Standard%20Normal%20Distribution.md)
- [ ] [19 Random Sampling from a Normal Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/19%20Random%20Sampling%20from%20a%20Normal%20Distribution.md)
- [ ] [20 Demo Spreadsheet Simulation of a Normal Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/20%20Demo%20Spreadsheet%20Simulation%20of%20a%20Normal%20Distribution.md)
- [ ] [21 Demo LLM Simulation of a Normal Distribution.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/21%20Demo%20LLM%20Simulation%20of%20a%20Normal%20Distribution.md)
- [ ] [22 Making Decisions with Distributions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%202%20-%20Applied%20Statistics%20for%20Data%20Analytics/module%2002%20Probability%20and%20simulation/22%20Making%20Decisions%20with%20Distributions.md)

파이썬 실습으로: Data Analytics, `Course 3` module 02~03

- [ ] [01 Module 3 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/01%20Module%203%20Introduction.md)
- [ ] [02 Plotting with Matplotlib.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/02%20Plotting%20with%20Matplotlib.md)
- [ ] [03 Colors, Grids, and Saving Plots.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/03%20Colors,%20Grids,%20and%20Saving%20Plots.md)
- [ ] [04 Text and Annotations.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/04%20Text%20and%20Annotations.md)
- [ ] [05 Ticks and Spines.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/05%20Ticks%20and%20Spines.md)
- [ ] [06 Grouped Column Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/06%20Grouped%20Column%20Charts.md)
- [ ] [07 Stacked Column Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/07%20Stacked%20Column%20Charts.md)
- [ ] [08 Scatter Plots.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/08%20Scatter%20Plots.md)
- [ ] [09 Method Chaining.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/09%20Method%20Chaining.md)
- [ ] [10 Plotting with Seaborn.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/10%20Plotting%20with%20Seaborn.md)
- [ ] [11 Themes and Palettes.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/11%20Themes%20and%20Palettes.md)
- [ ] [12 Box Plots.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/12%20Box%20Plots.md)
- [ ] [13 Histograms.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/13%20Histograms.md)
- [ ] [14 Other Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/14%20Other%20Charts.md)
- [ ] [15 Combining Charts.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/15%20Combining%20Charts.md)
- [ ] [16 Matplotlib Subplots.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/16%20Matplotlib%20Subplots.md)
- [ ] [17 Looping with Subplots.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/17%20Looping%20with%20Subplots.md)
- [ ] [18 Seaborn Pairplot.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%203%20-%20Python%20for%20Data%20Analytics/module%2003%20Data%20visualization/18%20Seaborn%20Pairplot.md)

## 2-C. 시각화 도구

메인: IBM Data Science, `08 Data Visualization with Python`

- [ ] [01 Welcome to the Course.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%201%20-%20Introduction%20to%20Data%20Visualization%20Tools/01%20Welcome%20to%20the%20Course.md)
- [ ] [02 Overview of Data Visualization.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%201%20-%20Introduction%20to%20Data%20Visualization%20Tools/02%20Overview%20of%20Data%20Visualization.md)
- [ ] [03 Types of Plots.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%201%20-%20Introduction%20to%20Data%20Visualization%20Tools/03%20Types%20of%20Plots.md)
- [ ] [04 Plot Libraries.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%201%20-%20Introduction%20to%20Data%20Visualization%20Tools/04%20Plot%20Libraries.md)
- [ ] [05 Introduction to Matplotlib.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%201%20-%20Introduction%20to%20Data%20Visualization%20Tools/05%20Introduction%20to%20Matplotlib.md)
- [ ] [06 Basic Plotting with Matplotlib.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%201%20-%20Introduction%20to%20Data%20Visualization%20Tools/06%20Basic%20Plotting%20with%20Matplotlib.md)
- [ ] [07 Dataset on Immigration to Canada.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%201%20-%20Introduction%20to%20Data%20Visualization%20Tools/07%20Dataset%20on%20Immigration%20to%20Canada.md)
- [ ] [08 Line Plots.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%201%20-%20Introduction%20to%20Data%20Visualization%20Tools/08%20Line%20Plots.md)
- [ ] [01 Area Plots.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%202%20-%20Basic%20and%20Specialized%20Visualization%20Tools/01%20Area%20Plots.md)
- [ ] [02 Histograms.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%202%20-%20Basic%20and%20Specialized%20Visualization%20Tools/02%20Histograms.md)
- [ ] [03 Bar Charts.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%202%20-%20Basic%20and%20Specialized%20Visualization%20Tools/03%20Bar%20Charts.md)
- [ ] [04 Pie Charts.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%202%20-%20Basic%20and%20Specialized%20Visualization%20Tools/04%20Pie%20Charts.md)
- [ ] [05 Box Plots.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%202%20-%20Basic%20and%20Specialized%20Visualization%20Tools/05%20Box%20Plots.md)
- [ ] [06 Scatter Plots.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%202%20-%20Basic%20and%20Specialized%20Visualization%20Tools/06%20Scatter%20Plots.md)
- [ ] [07 Plotting Directly with Matplotlib.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%202%20-%20Basic%20and%20Specialized%20Visualization%20Tools/07%20Plotting%20Directly%20with%20Matplotlib.md)
- [ ] [01 Waffle Charts & Word Cloud.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%203%20-%20Advanced%20Visualizations%20and%20Geospatial%20Data/01%20Waffle%20Charts%20&%20Word%20Cloud.md)
- [ ] [02 Seaborn and Regression Plots.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%203%20-%20Advanced%20Visualizations%20and%20Geospatial%20Data/02%20Seaborn%20and%20Regression%20Plots.md)
- [ ] [03 Introduction to Folium.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%203%20-%20Advanced%20Visualizations%20and%20Geospatial%20Data/03%20Introduction%20to%20Folium.md)
- [ ] [04 Maps with Markers.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%203%20-%20Advanced%20Visualizations%20and%20Geospatial%20Data/04%20Maps%20with%20Markers.md)
- [ ] [05 Choropleth Maps.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%203%20-%20Advanced%20Visualizations%20and%20Geospatial%20Data/05%20Choropleth%20Maps.md)
- [ ] [01 Dashboarding Overview.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%204%20-%20Creating%20Dashboards%20with%20Plotly%20and%20Dash/01%20Dashboarding%20Overview.md)
- [ ] [02 Introduction to Plotly.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%204%20-%20Creating%20Dashboards%20with%20Plotly%20and%20Dash/02%20Introduction%20to%20Plotly.md)
- [ ] [03 Introduction to Dash.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%204%20-%20Creating%20Dashboards%20with%20Plotly%20and%20Dash/03%20Introduction%20to%20Dash.md)
- [ ] [04 Understanding the Lab Environment.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%204%20-%20Creating%20Dashboards%20with%20Plotly%20and%20Dash/04%20Understanding%20the%20Lab%20Environment.md)
- [ ] [05 Make Dashboards Interactive.md](../../../courses/mooc/Databases%20and%20SQL/IBM%20Data%20Science/08%20Data%20Visualization%20with%20Python/Module%204%20-%20Creating%20Dashboards%20with%20Plotly%20and%20Dash/05%20Make%20Dashboards%20Interactive.md)

## 산출물

공공데이터 하나를 골라 만드는 EDA 보고서. 반드시 들어가야 하는 것:

1. 각 변수의 종류와 결측·이상치 현황 표
2. 분포 그림 3개 이상 — **각 그림 아래에 "이 그림이 말해 주는 것" 한 문장**
3. 변수 두 쌍의 관계와 상관계수, 그리고 **"이건 인과로 읽으면 안 되는 이유"** 한 문단
4. 이 데이터로 답할 수 있는 질문 / 답할 수 없는 질문 목록

## 다음 단계

→ [03 Phase 3 - 추론통계와 가설검정](03%20Phase%203%20-%20%EC%B6%94%EB%A1%A0%ED%86%B5%EA%B3%84%EC%99%80%20%EA%B0%80%EC%84%A4%EA%B2%80%EC%A0%95.md)
