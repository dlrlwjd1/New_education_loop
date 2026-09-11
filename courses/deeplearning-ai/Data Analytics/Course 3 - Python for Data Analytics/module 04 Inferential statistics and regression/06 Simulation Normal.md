# Simulation: Normal

## 개요
- **np.random.normal** 로 정규 분포 표본을 생성한다 — 균등과 달리 **loc(평균)·scale(표준편차)** 인수를 쓴다.
- 예: 경쟁사 다이아 가격을 자사 평균 주위 정규 분포로 모델링.

## 내용

### 배경
- 경쟁사 가격이 자사 평균 주위 대략 정규 분포(일부 높고 일부 낮고, 극단은 드묾). 역사적 데이터로 표준편차 ~$750 파악.
- 자사 평균 가격이 얼마나 자주 크게 undercut 되는지, 최적 할인 수준을 추정하는 데 활용.

### 정규 분포 표집
- 균등 시뮬레이션 코드 재사용, **한 줄만 변경**: `np.random.normal(loc=3932, scale=750, size=n)`.
  - size는 동일, **loc=평균($3,932)**, **scale=표준편차($750)**.
- 신뢰 구간이 평균 주위로 좁게 형성.
- 100번 반복: 참 평균 $3,932를 98개 포함/2개 미포함(95% 신뢰와 일치).

## 예시

### 정규 시뮬레이션
```python
sample = np.random.normal(loc=3932, scale=750, size=1000)   # loc=평균, scale=표준편차
sem = sample.std() / np.sqrt(len(sample))
stats.norm.interval(confidence=0.95, loc=sample.mean(), scale=sem)
```

## 요약
- **np.random.normal(loc=평균, scale=표준편차, size=)** 로 정규 분포 표본을 생성한다(균등의 low·high 대신 loc·scale).
- 시뮬레이션으로 경쟁 가격 시나리오·신뢰 구간을 반복 생성해 비즈니스 문제에 활용한다.
- 이로써 Lesson 1(추론 통계)을 마친다. 다음 레슨은 **선형 회귀**다.
