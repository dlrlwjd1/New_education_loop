# T2 Phase 4 — 인공지능 수학 (선형대수·미적분·확률)

> 학부 교과 **공학수학(1학년 1·2학기, 각 3학점) · 인공지능수학(2학년 1학기, 이론실습병행 3학점)**
> 교과목해설: "인공지능과 머신러닝의 이론적 기초를 이루는 선형대수, 확률론, 통계학, 미적분 등의 수학적 개념들을 학습한다. 이를 통해 AI 및 머신러닝 연구와 실무에 필요한 수학적 기초를 확립하는 데 중점을 둔다"

- 목표: 논문이나 강의에서 나오는 벡터·행렬·미분·확률 표기를 막힘없이 읽고, 경사하강을 직접 구현한다.
- 상태: **공백 해소 완료 (2026-09-04).** Imperial College London의 `Linear Algebra`(19h)와 `Multivariate Calculus`(18h)를 모두 수강·정리해 **이 Phase 전체가 저장소 자료로 덮인다.** 남은 것은 같은 전문과정의 3번째 코스 `PCA`(21h, 선택)뿐이다.
- 분량: 약 37시간 (선형대수 19시간 + 미적분 18시간, 모두 저장소 자료)
- 마지막 학습일: (미학습)

## 왜 필요한가

이걸 건너뛰면 [T3 Phase 3(신경망)](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/03%20Phase%203%20-%20%EC%8B%A0%EA%B2%BD%EB%A7%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D.md)의 역전파(backpropagation)가 "그냥 그렇다더라"로 남는다. 강남대 커리큘럼도 **신경망(2-2)의 선이수 과목으로 인공지능수학(2-1)을 명시**하고 있다. 순서를 지키는 편이 결국 빠르다.

거꾸로, 여기서 원하는 것은 수학과 수준의 증명이 아니다. **"이 식이 코드의 어느 줄에 대응하는가"** 를 짚을 수 있으면 충분하다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- 데이터를 벡터·행렬로 표현하고 내적·행렬곱이 무엇을 계산하는지 그림으로 설명한다
- 역행렬·행렬식·랭크가 각각 언제 문제가 되는지 안다 (다중공선성이 왜 문제인지가 여기서 나온다)
- 고유값·고유벡터로 PCA가 무엇을 하는지 설명한다
- 편미분과 기울기(gradient)를 계산하고, 경사하강이 왜 손실을 줄이는지 말한다
- 연쇄법칙(chain rule)으로 합성함수를 미분하고, 그것이 역전파와 같은 계산임을 안다
- 확률변수·기댓값·분산·베이즈 정리를 쓰고, 최대우도추정(MLE)으로 손실함수가 유도되는 과정을 따라간다

> **보는 순서**: **4-B(선형대수) → 4-A(미적분) → 4-C(인접 조각)**. 미적분 강좌가 선형대수를 선수로 요구한다.

## 4-A. 미적분 — 저장소 자료로 진행 (2026-09-04 확보)

메인: **Mathematics for Machine Learning: Multivariate Calculus** (MOOC · Imperial College London · 6모듈 18시간 · MOOC Plus 포함). **수강·정리 완료.** [강좌 README](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/README.md)

> ⚠️ **이 강좌는 선형대수를 선수로 요구한다.** 야코비안·헤시안·내적이 계속 나온다. 선형대수가 약하면 [4-B](#4-b-선형대수--아직-공백)를 먼저 본다.

### Module 1 — 미적분이란 무엇인가 (4시간)

도함수의 정의와 네 가지 미분 규칙. **`08 Chain rule`이 역전파의 뿌리**이므로 건너뛰지 않는다.

- [ ] [01 Welcome to Multivariate Calculus.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/01%20Welcome%20to%20Multivariate%20Calculus.md)
- [ ] [02 Welcome to Module 1.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/02%20Welcome%20to%20Module%201.md)
- [ ] [03 Functions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/03%20Functions.md)
- [ ] [04 Rise Over Run.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/04%20Rise%20Over%20Run.md)
- [ ] [05 Definition of a derivative.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/05%20Definition%20of%20a%20derivative.md)
- [ ] [06 Differentiation examples & special cases.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/06%20Differentiation%20examples%20&%20special%20cases.md)
- [ ] [07 Product rule.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/07%20Product%20rule.md)
- [ ] [08 Chain rule.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/08%20Chain%20rule.md)
- [ ] [09 Taming a beast.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/09%20Taming%20a%20beast.md)
- [ ] [10 See you next module.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%201%20-%20What%20is%20calculus/10%20See%20you%20next%20module.md)

### Module 2 — 다변량 미적분 (3시간)

**편미분 · 야코비안 · 헤시안 · 유한차분법.** [T3 Phase 2(비지도학습)](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/02%20Phase%202%20-%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D.md)의 차원축소와 [T1 Phase 4](../T1%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%20%EA%B8%B0%EC%B4%88%EC%99%80%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%20%ED%83%90%EC%83%89%EA%B3%BC%20%EC%B5%9C%EC%A0%81%ED%99%94.md)의 지역 탐색이 여기서 이어진다.

- [ ] [01 Welcome to Module 2.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/01%20Welcome%20to%20Module%202.md)
- [ ] [02 Variables, constants & context.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/02%20Variables,%20constants%20&%20context.md)
- [ ] [03 Differentiate with respect to anything.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/03%20Differentiate%20with%20respect%20to%20anything.md)
- [ ] [04 The Jacobian.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/04%20The%20Jacobian.md)
- [ ] [05 Jacobian applied.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/05%20Jacobian%20applied.md)
- [ ] [06 The Sandpit.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/06%20The%20Sandpit.md)
- [ ] [07 The Hessian.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/07%20The%20Hessian.md)
- [ ] [08 Reality is hard.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/08%20Reality%20is%20hard.md)
- [ ] [09 See you next module.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%202%20-%20Multivariate%20calculus/09%20See%20you%20next%20module.md)

### Module 3 — 다변량 연쇄 법칙과 신경망 (3시간) ⭐

**이 Phase에서 [T3 Phase 3(신경망)](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/03%20Phase%203%20-%20%EC%8B%A0%EA%B2%BD%EB%A7%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D.md)으로 가는 다리다.** `05 More simple neural networks`가 역전파를 미적분으로 유도한다.

- [ ] [01 Welcome to Module 3.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%203%20-%20Multivariate%20chain%20rule%20and%20its%20applications/01%20Welcome%20to%20Module%203.md)
- [ ] [02 Multivariate chain rule.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%203%20-%20Multivariate%20chain%20rule%20and%20its%20applications/02%20Multivariate%20chain%20rule.md)
- [ ] [03 More multivariate chain rule.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%203%20-%20Multivariate%20chain%20rule%20and%20its%20applications/03%20More%20multivariate%20chain%20rule.md)
- [ ] [04 Simple neural networks.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%203%20-%20Multivariate%20chain%20rule%20and%20its%20applications/04%20Simple%20neural%20networks.md)
- [ ] [05 More simple neural networks.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%203%20-%20Multivariate%20chain%20rule%20and%20its%20applications/05%20More%20simple%20neural%20networks.md)
- [ ] [06 See you next module.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%203%20-%20Multivariate%20chain%20rule%20and%20its%20applications/06%20See%20you%20next%20module.md)

### Module 4 — 테일러 급수와 선형화 (3시간)

**야코비안과 헤시안이 한 식에서 만나는 곳**이다. 수치 방법의 오차 차수도 여기서 이해된다.

- [ ] [01 Welcome to Module 4.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/01%20Welcome%20to%20Module%204.md)
- [ ] [02 Building approximate functions.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/02%20Building%20approximate%20functions.md)
- [ ] [03 Power series.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/03%20Power%20series.md)
- [ ] [04 Power series derivation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/04%20Power%20series%20derivation.md)
- [ ] [05 Power series details.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/05%20Power%20series%20details.md)
- [ ] [06 Examples.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/06%20Examples.md)
- [ ] [07 Linearisation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/07%20Linearisation.md)
- [ ] [08 Multivariate Taylor.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/08%20Multivariate%20Taylor.md)
- [ ] [09 See you next module.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%204%20-%20Taylor%20series%20and%20linearisation/09%20See%20you%20next%20module.md)

### Module 5 — 최적화 (3시간) ⭐

**뉴턴-랩슨 · 경사하강법 · 라그랑주 승수.** ⚠️ `01 Welcome to Module 5`는 제목과 달리 **뉴턴-랩슨 본강의**이므로 건너뛰면 안 된다.

- [ ] [01 Welcome to Module 5.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%205%20-%20Intro%20to%20optimisation/01%20Welcome%20to%20Module%205.md)
- [ ] [02 Gradient Descent.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%205%20-%20Intro%20to%20optimisation/02%20Gradient%20Descent.md)
- [ ] [03 Constrained optimisation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%205%20-%20Intro%20to%20optimisation/03%20Constrained%20optimisation.md)
- [ ] [04 See you next module.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%205%20-%20Intro%20to%20optimisation/04%20See%20you%20next%20module.md)

### Module 6 — 회귀 (2시간)

**잔차 · 카이제곱 · 최소제곱 · 앤스컴의 사중주.** [T2 Phase 5(회귀분석)](05%20Phase%205%20-%20%ED%9A%8C%EA%B7%80%EB%B6%84%EC%84%9D.md)의 수학적 배경이다.

- [ ] [01 Simple linear regression.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%206%20-%20Regression/01%20Simple%20linear%20regression.md)
- [ ] [02 General non linear least squares.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%206%20-%20Regression/02%20General%20non%20linear%20least%20squares.md)
- [ ] [03 Doing least squares regression analysis in practice.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%206%20-%20Regression/03%20Doing%20least%20squares%20regression%20analysis%20in%20practice.md)
- [ ] [04 Wrap up of this course.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Multivariate%20Calculus/Module%206%20-%20Regression/04%20Wrap%20up%20of%20this%20course.md)

## 4-B. 선형대수 — 저장소 자료로 진행 (2026-09-04 확보)

메인: **Mathematics for Machine Learning: Linear Algebra** (MOOC · Imperial College London · 5모듈 19시간 · MOOC Plus 포함). **수강·정리 완료.** [강좌 README](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/README.md)

> ⭐ **4-A보다 이것을 먼저 본다.** 4-A의 Multivariate Calculus가 **선형대수를 선수로 요구**하고, 야코비안·헤시안·내적이 계속 나온다. 같은 전문과정의 **1번째 코스**라 표기와 스타일이 그대로 이어진다.

### Module 1 — 선형대수 입문 (2시간)

강좌를 관통할 두 문제(**사과·바나나 연립방정식**, **데이터 피팅**)를 세우고 벡터의 두 기본 연산을 정의한다. ⭐ `03 Getting a handle on vectors` 의 **"벡터는 목록이다"** 가 이 강좌의 관점 전환이다.

- [ ] [01 Introduction - Solving data science challenges with mathematics.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/01%20Introduction%20-%20Solving%20data%20science%20challenges%20with%20mathematics.md)
- [ ] [02 Motivations for linear algebra.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/02%20Motivations%20for%20linear%20algebra.md)
- [ ] [03 Getting a handle on vectors.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/03%20Getting%20a%20handle%20on%20vectors.md)
- [ ] [04 Operations with vectors.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/04%20Operations%20with%20vectors.md)
- [ ] [05 Summary.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%201%20-%20Introduction%20to%20Linear%20Algebra%20and%20to%20Mathematics%20for%20Machine%20Learning/05%20Summary.md)

### Module 2 — 벡터 (2시간)

**크기 · 내적 · 투영 · 기저 · 선형독립.** `05 Changing basis`가 [T3 Phase 2(비지도학습)](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/02%20Phase%202%20-%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D.md)의 차원축소로 이어진다.

- [ ] [01 Introduction to module 2 - Vectors.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/01%20Introduction%20to%20module%202%20-%20Vectors.md)
- [ ] [02 Modulus & inner product.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/02%20Modulus%20&%20inner%20product.md)
- [ ] [03 Cosine & dot product.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/03%20Cosine%20&%20dot%20product.md)
- [ ] [04 Projection.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/04%20Projection.md)
- [ ] [05 Changing basis.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/05%20Changing%20basis.md)
- [ ] [06 Basis, vector space, and linear independence.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/06%20Basis,%20vector%20space,%20and%20linear%20independence.md)
- [ ] [07 Applications of changing basis.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/07%20Applications%20of%20changing%20basis.md)
- [ ] [08 Summary.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%202%20-%20Vectors%20are%20objects%20that%20move%20around%20space/08%20Summary.md)

### Module 3 — 행렬 (3시간)

**행렬은 공간을 변환하는 대상.** ⭐ `07 Determinants and inverses`의 **"행렬식 0 = 역행렬 없음 = 정보 손실"** 은 [T2 Phase 5(회귀분석)](05%20Phase%205%20-%20%ED%9A%8C%EA%B7%80%EB%B6%84%EC%84%9D.md)의 **다중공선성**이 왜 문제인지에 대한 답이다.

- [ ] [01 Matrices, vectors, and solving simultaneous equation problems.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/01%20Matrices,%20vectors,%20and%20solving%20simultaneous%20equation%20problems.md)
- [ ] [02 How matrices transform space.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/02%20How%20matrices%20transform%20space.md)
- [ ] [03 Types of matrix transformation.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/03%20Types%20of%20matrix%20transformation.md)
- [ ] [04 Composition or combination of matrix transformations.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/04%20Composition%20or%20combination%20of%20matrix%20transformations.md)
- [ ] [05 Solving the apples and bananas problem - Gaussian elimination.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/05%20Solving%20the%20apples%20and%20bananas%20problem%20-%20Gaussian%20elimination.md)
- [ ] [06 Going from Gaussian elimination to finding the inverse matrix.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/06%20Going%20from%20Gaussian%20elimination%20to%20finding%20the%20inverse%20matrix.md)
- [ ] [07 Determinants and inverses.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/07%20Determinants%20and%20inverses.md)
- [ ] [08 Summary.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%203%20-%20Matrices%20in%20Linear%20Algebra%20-%20Objects%20that%20operate%20on%20Vectors/08%20Summary.md)

### Module 4 — 선형 사상 (7시간) ⚠️ 가장 무겁다

**기저 변환 `B⁻¹RB` · 직교행렬 · 그람-슈미트.** 강사도 "꽤 힘든 작업"이라고 인정한다. **PCA로 가는 준비**다.

- [ ] [01 Introduction - Einstein summation convention and the symmetry of the dot product.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%204%20-%20Matrices%20make%20linear%20mappings/01%20Introduction%20-%20Einstein%20summation%20convention%20and%20the%20symmetry%20of%20the%20dot%20product.md)
- [ ] [02 Matrices changing basis.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%204%20-%20Matrices%20make%20linear%20mappings/02%20Matrices%20changing%20basis.md)
- [ ] [03 Doing a transformation in a changed basis.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%204%20-%20Matrices%20make%20linear%20mappings/03%20Doing%20a%20transformation%20in%20a%20changed%20basis.md)
- [ ] [04 Orthogonal matrices.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%204%20-%20Matrices%20make%20linear%20mappings/04%20Orthogonal%20matrices.md)
- [ ] [05 The Gram-Schmidt process.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%204%20-%20Matrices%20make%20linear%20mappings/05%20The%20Gram-Schmidt%20process.md)
- [ ] [06 Example - Reflecting in a plane.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%204%20-%20Matrices%20make%20linear%20mappings/06%20Example%20-%20Reflecting%20in%20a%20plane.md)

### Module 5 — 고유값과 고유벡터 (4시간) ⭐

**고유 문제 · 대각화 · PageRank.** ⭐ `05 Changing to the eigenbasis`의 **대각화 `Tⁿ = CDⁿC⁻¹`** 가 이 강좌의 클라이맥스이고, `07 Introduction to PageRank`가 **실전 응용**이다.

- [ ] [01 Welcome to module 5.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/01%20Welcome%20to%20module%205.md)
- [ ] [02 What are eigenvalues and eigenvectors.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/02%20What%20are%20eigenvalues%20and%20eigenvectors.md)
- [ ] [03 Special eigen-cases.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/03%20Special%20eigen-cases.md)
- [ ] [04 Calculating eigenvectors.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/04%20Calculating%20eigenvectors.md)
- [ ] [05 Changing to the eigenbasis.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/05%20Changing%20to%20the%20eigenbasis.md)
- [ ] [06 Eigenbasis example.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/06%20Eigenbasis%20example.md)
- [ ] [07 Introduction to PageRank.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/07%20Introduction%20to%20PageRank.md)
- [ ] [08 Summary.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/08%20Summary.md)
- [ ] [09 Wrap up of this linear algebra course.md](../../../courses/mooc/Data%20Analysis%20and%20Statistics/Mathematics%20for%20Machine%20Learning%20-%20Linear%20Algebra/Module%205%20-%20Eigenvalues%20and%20Eigenvectors%20-%20Application%20to%20Data%20Problems/09%20Wrap%20up%20of%20this%20linear%20algebra%20course.md)

## 4-C. 저장소의 인접 조각

4-A로 대부분 덮이지만, 다른 각도로 같은 개념이 나오는 자리다.

선형대수 — 선형계획법 안의 두 강의

- [ ] [03 Linear Algebra - Method of Substitution.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/03%20Linear%20Algebra%20-%20Method%20of%20Substitution.md)
- [ ] [04 Linear Algebra - Gaussian Elimination.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Data%20Structures%20and%20Algorithms/Course%205%20-%20Advanced%20Algorithms%20and%20Complexity/Module%202%20-%20Linear%20Programming/04%20Linear%20Algebra%20-%20Gaussian%20Elimination.md)

미분과 벡터화 — 딥러닝 강좌가 필요한 만큼만 짚는 부분

- [ ] [04 Gradient Descent.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/04%20Gradient%20Descent.md)
- [ ] [05 Derivatives.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/05%20Derivatives.md)
- [ ] [06 More Derivative Examples.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/06%20More%20Derivative%20Examples.md)
- [ ] [07 Computation Graph.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/07%20Computation%20Graph.md)
- [ ] [08 Derivatives with a Computation Graph.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/08%20Derivatives%20with%20a%20Computation%20Graph.md)
- [ ] [09 Logistic Regression Gradient Descent.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/09%20Logistic%20Regression%20Gradient%20Descent.md)
- [ ] [10 Gradient Descent on m Examples.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/01%20Logistic%20Regression%20as%20a%20Neural%20Network/10%20Gradient%20Descent%20on%20m%20Examples.md)
- [ ] [01 Vectorization.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/01%20Vectorization.md)
- [ ] [02 More Vectorization Examples.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/01%20Neural%20Networks%20and%20Deep%20Learning/week2%20Neural%20Networks%20Basics/02%20Python%20and%20Vectorization/02%20More%20Vectorization%20Examples.md)

확률·통계 — [Phase 2](02%20Phase%202%20-%20%EA%B8%B0%EC%88%A0%ED%86%B5%EA%B3%84%EC%99%80%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EC%8B%9C%EA%B0%81%ED%99%94.md)·[Phase 3](03%20Phase%203%20-%20%EC%B6%94%EB%A1%A0%ED%86%B5%EA%B3%84%EC%99%80%20%EA%B0%80%EC%84%A4%EA%B2%80%EC%A0%95.md)에서 이미 다뤘다.

## 산출물 (강의 없이도 가능)

NumPy만 써서 만드는 노트북 하나. 프레임워크(PyTorch·TensorFlow)를 쓰지 않는 것이 조건이다.

1. 2차원 데이터에 선형회귀를 **정규방정식(normal equation)** 으로 한 번, **경사하강**으로 한 번 풀고 결과가 같은지 확인한다
2. 학습률을 바꿔 가며 손실이 줄어드는 곡선을 그린다 — 너무 크면 발산하는 것을 눈으로 본다
3. 손으로 계산한 기울기와 수치미분 결과를 비교한다 (gradient check)
4. 데이터에 상관 높은 변수를 하나 더 넣고 **정규방정식이 왜 불안정해지는지** 행렬 랭크로 설명한다

## 다음 단계

→ [05 Phase 5 - 회귀분석](05%20Phase%205%20-%20%ED%9A%8C%EA%B7%80%EB%B6%84%EC%84%9D.md)
