# Reduction 1

## 개요
- heavy hitters 문제(FindTop)를 풀기 위한 밑작업으로 관련 문제인 PointQuery를 정의한다.
- 정확한(exact) 버전의 문제는 작은 공간으로 풀 수 없음을 보이고, 근사(approximate) 버전인 FindApproxTop과 ApproxPointQuery를 정의한다.

## 내용

### FindTop 문제
- 입력 스트림 S와 파라미터 k가 주어졌을 때, 스트림에서 가장 빈번한 top k 항목을 출력하는 작은 공간의 데이터 구조를 설계하는 것이 목표다.
- 목표 공간 복잡도는 O(k log N)이다.

### PointQuery 프리미티브
- 스트림 S를 스캔하고, 스트림이 끝난 뒤 질의 항목 i를 받아 그 빈도 fi(스트림에서 i가 등장한 횟수)를 출력하는 작은 공간의 데이터 구조다.
- 편의상 데이터 항목은 스트림 내 빈도의 내림차순으로 정렬되어 있다고 가정한다(항목 1이 가장 빈번, 항목 2가 그다음 등).
- 목표 공간 복잡도는 O(k log N).

### 정확한 버전의 한계
- PointQuery와 FindTop을 정확한(exact) 답을 요구하는 형태로 정의하면 일반적으로 불가능(impossible)하다.
- 모든 데이터 항목이 거의 동일한 빈도로 등장하는 스트림을 상상하면, 정확히 top k가 무엇인지 알아내려면 사실상 스트림 전체를 저장해야 함을 형식적으로 증명할 수 있다.
- 따라서 준선형 공간 복잡도를 얻으려면 근사(approximation) 개념이 반드시 필요하다.

### FindApproxTop (근사 top-k)
- 파라미터: k(찾으려는 항목 수), ε(정밀도 파라미터, precision parameter).
- 스트림이 끝난 뒤 k개의 항목 집합을 반환하되, 보고한 각 항목 i의 빈도 fi가 실제 k번째 최빈 항목의 빈도 fk보다 크게 작지 않아야 한다: fi ≥ (1 − ε) fk.

### ApproxPointQuery (근사 PointQuery)
- 스트림이 끝난 뒤 질의 항목 i에 대해 실제 빈도의 근사값 f̂i를 보고하되, 오차가 가산적(additive)으로 최대 ε·fk 이내여야 한다.
- 다만 이 정의만으로도 여전히 어려운 문제다. 모든 항목이 (1 ± ε) 배 이내로 거의 동일한 빈도를 가지는 스트림을 상상하면, 이 역시 스트림 대부분을 저장해야 하는 어려운 문제로 남는다.
- 따라서 이 강의에서는 top k 항목들이 스트림의 대부분을 차지한다(“contribute the bulk of the stream”)는 가정 아래에서 두 문제(PointQuery, ApproxPointQuery)를 위한 작은 공간의 프리미티브(primitive)를 설계한다. 이 가정의 정확한(formal) 의미는 이후 강의에서 다룬다.

## 요약
- FindTop을 정확히 풀려면 PointQuery(항목별 정확한 빈도 질의)를 먼저 풀면 되지만, 정확한 버전은 준선형 공간으로 불가능하다.
- 근사 버전인 FindApproxTop, ApproxPointQuery를 정의해 정밀도 파라미터 ε을 도입했지만, 이마저도 일반적인 스트림에서는 여전히 어렵다.
- 실질적인 해법은 top k 항목이 스트림을 지배한다는 가정 하에서 설계된다.
