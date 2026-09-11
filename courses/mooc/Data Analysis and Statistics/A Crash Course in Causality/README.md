# A Crash Course in Causality: Inferring Causal Effects from Observational Data

- 플랫폼: MOOC
- 제공: University of Pennsylvania
- 강사: Jason A. Roy
- 링크: <https://www.mooc.org/learn/crash-course-in-causality>
- 구성: 5개 모듈, 영상 46개 — Transcript 기반 한국어 정리 완료 (2026-07)
- 제외: 읽기 자료·퀴즈·채점 과제

관찰 데이터(observational data)로부터 인과 효과(causal effect)를 추론하는 방법을 다루는 코스. 잠재적 결과(potential outcomes) 프레임워크로 시작해 인과 그래프(DAG), 매칭과 성향점수(propensity score), 역확률 가중(IPTW), 도구변수(instrumental variables)까지 다룬다. R 실습 강의를 포함한다.

## Module 1 - Welcome and Introduction to Causal Effects

1. [Welcome to A Crash Course in Causality](Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/01%20Welcome%20to%20A%20Crash%20Course%20in%20Causality.md)
2. [Confusion over causality](Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/02%20Confusion%20over%20causality.md)
3. [Potential outcomes and counterfactuals](Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/03%20Potential%20outcomes%20and%20counterfactuals.md)
4. [Hypothetical interventions](Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/04%20Hypothetical%20interventions.md)
5. [Causal effects](Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/05%20Causal%20effects.md)
6. [Causal assumptions](Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/06%20Causal%20assumptions.md)
7. [Stratification](Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/07%20Stratification.md)
8. [Incident user and active comparator designs](Module%201%20-%20Welcome%20and%20Introduction%20to%20Causal%20Effects/08%20Incident%20user%20and%20active%20comparator%20designs.md)

## Module 2 - Confounding and Directed Acyclic Graphs (DAGs)

1. **Confounding**/01%20Confounding.md)
2. **Causal graphs**/02%20Causal%20graphs.md)
3. **Relationship between DAGs and probability distributions**/03%20Relationship%20between%20DAGs%20and%20probability%20distributions.md)
4. **Paths and associations**/04%20Paths%20and%20associations.md)
5. **Conditional independence (d-separation)**/05%20Conditional%20independence%20(d-separation).md)
6. **Confounding revisited**/06%20Confounding%20revisited.md)
7. **Backdoor path criterion**/07%20Backdoor%20path%20criterion.md)
8. **Disjunctive cause criterion**/08%20Disjunctive%20cause%20criterion.md)

## Module 3 - Matching and Propensity Scores

1. [Observational studies](Module%203%20-%20Matching%20and%20Propensity%20Scores/01%20Observational%20studies.md)
2. [Overview of matching](Module%203%20-%20Matching%20and%20Propensity%20Scores/02%20Overview%20of%20matching.md)
3. [Matching directly on confounders](Module%203%20-%20Matching%20and%20Propensity%20Scores/03%20Matching%20directly%20on%20confounders.md)
4. **Greedy (nearest-neighbor) matching**%20matching.md)
5. [Optimal matching](Module%203%20-%20Matching%20and%20Propensity%20Scores/05%20Optimal%20matching.md)
6. [Assessing balance](Module%203%20-%20Matching%20and%20Propensity%20Scores/06%20Assessing%20balance.md)
7. [Analyzing data after matching](Module%203%20-%20Matching%20and%20Propensity%20Scores/07%20Analyzing%20data%20after%20matching.md)
8. [Sensitivity analysis](Module%203%20-%20Matching%20and%20Propensity%20Scores/08%20Sensitivity%20analysis.md)
9. [Data example in R](Module%203%20-%20Matching%20and%20Propensity%20Scores/09%20Data%20example%20in%20R.md)
10. [Propensity scores](Module%203%20-%20Matching%20and%20Propensity%20Scores/10%20Propensity%20scores.md)
11. [Propensity score matching](Module%203%20-%20Matching%20and%20Propensity%20Scores/11%20Propensity%20score%20matching.md)
12. [Propensity score matching in R](Module%203%20-%20Matching%20and%20Propensity%20Scores/12%20Propensity%20score%20matching%20in%20R.md)

## Module 4 - Inverse Probability of Treatment Weighting (IPTW)

1. **Intuition for Inverse Probability of Treatment Weighting (IPTW)**/01%20Intuition%20for%20Inverse%20Probability%20of%20Treatment%20Weighting%20(IPTW).md)
2. **More intuition for IPTW estimation**/02%20More%20intuition%20for%20IPTW%20estimation.md)
3. **Marginal structural models**/03%20Marginal%20structural%20models.md)
4. **IPTW estimation**/04%20IPTW%20estimation.md)
5. **Assessing balance**/05%20Assessing%20balance.md)
6. **Distribution of weights**/06%20Distribution%20of%20weights.md)
7. **Remedies for large weights**/07%20Remedies%20for%20large%20weights.md)
8. **Doubly robust estimators**/08%20Doubly%20robust%20estimators.md)
9. **Data example in R**/09%20Data%20example%20in%20R.md)

## Module 5 - Instrumental Variables Methods

1. [Introduction to instrumental variables](Module%205%20-%20Instrumental%20Variables%20Methods/01%20Introduction%20to%20instrumental%20variables.md)
2. [Randomized trials with noncompliance](Module%205%20-%20Instrumental%20Variables%20Methods/02%20Randomized%20trials%20with%20noncompliance.md)
3. [Compliance classes](Module%205%20-%20Instrumental%20Variables%20Methods/03%20Compliance%20classes.md)
4. [Assumptions](Module%205%20-%20Instrumental%20Variables%20Methods/04%20Assumptions.md)
5. [Causal effect identification and estimation](Module%205%20-%20Instrumental%20Variables%20Methods/05%20Causal%20effect%20identification%20and%20estimation.md)
6. [IVs in observational studies](Module%205%20-%20Instrumental%20Variables%20Methods/06%20IVs%20in%20observational%20studies.md)
7. [Two stage least squares](Module%205%20-%20Instrumental%20Variables%20Methods/07%20Two%20stage%20least%20squares.md)
8. [Weak instruments](Module%205%20-%20Instrumental%20Variables%20Methods/08%20Weak%20instruments.md)
9. [IV analysis in R](Module%205%20-%20Instrumental%20Variables%20Methods/09%20IV%20analysis%20in%20R.md)
