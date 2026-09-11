# Counts, Sums, & Histograms

## 개요
- 기초 기술 통계: **`.hist()`**(히스토그램), **`.count()`**(비결측 개수), **`.sum()`**(합계).
- 카운트·합계·시각화만으로도 많은 인사이트를 얻는다.

## 내용

### 히스토그램 — .hist()
- `age = df["age"]` → `age.hist()` 로 분포 시각화(응답자 대부분 20~30대, 왜도 있음).
- 커스터마이즈는 LLM에 요청 가능(단 "hist 메서드 인자만 사용"으로 새 모듈 임포트 방지).
- `bins=40` 등으로 세분화하면 패턴 확인(예: 학습 시간 10·15·20에 몰림).

### 카운트 — .count()
- `age.count()` → 13,613(**비결측(non-null) 개수**). **count는 null 제외, len은 null 포함**.
- 결과 타입 **np.int64**(np = pandas 기반 모듈 **numpy**).
- **df.count()** 로 전체 열의 비결측 개수 한눈에(예: resource books·소득·자녀 수는 응답 적음).

### 합계 — .sum()
- `hours = df["hours..."]`, `hours.sum()` → 20만+ 시간(**numeric 열만** 가능, np.float64).
- `money.sum()` → 1,600만 달러+. 히스토그램(bins=40)으로 소수 고액 **이상치** 확인.

## 예시

### 카운트·합계·히스토그램
```python
age = df["age"]
age.hist(bins=40)     # 분포 시각화
age.count()           # 비결측 개수 (null 제외)
df.count()            # 전체 열 비결측 개수
df["hours"].sum()     # 합계 (numeric 열)
```

## 요약
- **.hist()** 로 수치 분포를 빠르게 시각화하고, **.count()** 로 비결측 개수(null 제외, len과 다름)를 센다.
- **.sum()** 은 numeric 열의 합계를 구하며, df 전체에도 적용 가능하다.
- 카운트·합계는 분석의 기초다. 다음 레슨은 **정렬·필터링**이다.
