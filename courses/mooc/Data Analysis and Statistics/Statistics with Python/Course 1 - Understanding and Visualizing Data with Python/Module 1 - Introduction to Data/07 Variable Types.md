# Variable Types

## 개요
- 변수의 유형에 따라 데이터를 바라보고 요약하는 방식이 달라진다
- 큰 분류: 양적 변수(quantitative variable)와 범주형 변수(categorical variable)
- 양적 변수는 연속형(continuous)/이산형(discrete), 범주형 변수는 순서형(ordinal)/명목형(nominal)으로 나뉜다

## 내용
### NHANES 데이터의 네 변수 예시
강사 Mark Rulkowski(University of Michigan 통계학과 lecturer)는 NHANES(National Health and Nutrition Examination Survey — 미국 아동·성인의 건강과 영양 상태를 평가하는 조사) 데이터에서 다섯 명의 개인(ID)과 네 개의 변수를 예로 든다.

- **BMI**(body mass index): 키 대비 몸무게 비율 측정값
- **Race**(인종): 코드화된 값 — 1 = Mexican-American, 2 = Other Hispanic, 3 = Non-Hispanic White, 4 = Non-Hispanic Black, 5 = Other
- **Age**(나이): 조사 시점의 나이
- **Adult indicator**(성인 지표): 18세 이상이면 1, 아니면 0

### 평균을 내는 것이 의미 있는가?
BMI와 Race에 대해 각각 평균(average)을 계산하는 것이 합리적인지 생각해 보자.

- **BMI**: 그렇다. 전체 개인의 평균을 내면 이 변수의 중심(center)을 알 수 있다.
- **Race**: 직관적으로 의미가 없다. 각 값은 서로 다른 인종 범주의 코드일 뿐이므로, 평균이 2.7이라는 값은 의미 있는 정보를 주지 않는다. (단, 인종 같은 범주형 변수의 평균을 활용하는 분석 방법도 일부 존재하므로 별표를 달아 둔다.)

### 양적 변수 (quantitative variable)
산술 연산(arithmetic operation)이 대체로 의미를 갖는, 수치로 측정 가능한 양이다. BMI가 그 예다. 두 가지 하위 유형이 있다.

- **연속형(continuous)**: 구간 내의 어떤 값이든 취할 수 있고 가능한 값이 매우 많다. 예: BMI, 키, 몸무게, 그리고 시간과 관련된 모든 것(1마일 달리기 시간, 과제 완료 시간).
- **이산형(discrete)**: 셀 수 있는 유한한 수의 집합. 예: 가구 내 자녀 수 — 1명이나 10명은 가능하지만 2.3명은 불가능하다.

### 범주형 변수 (categorical variable)
질적 변수(qualitative variable)라고도 하며, 개인이나 항목을 서로 다른 그룹으로 분류한다. Race 변수가 그 예다. 역시 두 하위 유형이 있다.

- **순서형(ordinal)**: 순서(order)나 서열(ranking)이 있다. 예: 고등학교·대학의 학년 구분 — freshman, sophomore, junior, senior처럼 자연스러운 순서가 있다.
- **명목형(nominal)**: 순서가 없다. 예: 인종, 혼인 상태(marital status) — 범주의 순서를 바꿔도 의미가 전혀 달라지지 않는다.

### In-video 퀴즈 해설 — Age와 Adult indicator
- **Age**: 정수(integer)로 보고되기 때문에 이산형 양적 변수로 볼 수도 있지만, 시간과 같은 성격의 값이므로 연속형으로 모델링하는 것이 좋다. 아이에게 나이를 물으면 "여덟 살 반"이라고 답하기도 하고, 미시간주에서 운전 연습 허가를 받으려면 14세 9개월이어야 한다. 즉 정수로 보고될 뿐 변수 자체는 **양적 연속형 변수**로 모델링할 수 있다.
- **Adult indicator**: 성인이면 1, 미성년이면 0으로 코드화되어 있다. 나이는 양적 변수지만 이렇게 쉽게 범주형 변수로 변환할 수 있다. NHANES는 1/0으로 코딩했지만 성인 A, 미성년 M으로 코딩해도 무방하다 — 그래서 이 변수는 **범주형 명목형 변수**다.

## 요약
- 변수는 범주형(categorical)과 양적(quantitative)으로 나뉘고 각각 두 하위 유형이 있다
- 양적 변수: 연속형(구간 내 임의 값 — BMI, 키, 시간) / 이산형(셀 수 있는 값 — 자녀 수)
- 범주형 변수: 순서형(서열 있음 — 학년) / 명목형(서열 없음 — 인종, 혼인 상태)
- 범주형 변수의 코드값 평균(예: 인종 평균 2.7)은 대개 의미가 없다
- 나이는 정수로 보고돼도 연속형으로 모델링할 수 있고, 양적 변수는 범주형 변수(성인 지표)로 변환할 수 있다
- 변수 유형에 따라 이후 데이터를 요약하고 보는 방식이 달라진다
