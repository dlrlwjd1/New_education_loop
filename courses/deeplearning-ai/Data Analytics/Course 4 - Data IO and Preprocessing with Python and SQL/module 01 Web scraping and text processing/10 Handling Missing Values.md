# Handling Missing Values

## 개요
- **결측값(missing values)** 은 실무 데이터의 흔한 문제(인적 오류·수집 미비·기술 문제). 분석 정확도에 영향.
- 두 가지 처리: **삭제(dropna)** 또는 **채우기(fillna)**.

## 내용

### 결측의 영향
- 결측 비율이 크면 **일반화 불가**(예: 소득을 5%만 응답).
- **체계적 결측(무작위 아님)** 은 편향 유발(고소득자가 소득을 덜 공개 → 평균 소득 과소평가).

### 삭제 — dropna()
- 결측 비율이 **작으면 행 삭제**(예: 나이 1% 미응답). 너무 많이 삭제하면 대표성↓.
- 결측 비율이 **크면 열 삭제**(예: 소득 95% 결측).
- `df.dropna(subset=["dog population"])` — **subset**(열 리스트)으로 그 열이 결측인 행만 삭제.

### 채우기 — fillna()
- 가정이 타당할 때만 신중히. 예: "정규직"인데 주당 시간 미응답 → 40으로 채움(0은 부적절).
- 평균·중앙값·최빈값, 또는 회귀·ML로 채우기.
- 예: `df["dogs per capita"] = df["dog population"] / df["population 2023"]` → 평균 0.137. `df["dog population"].fillna(df["population 2023"] * 0.137)` — **결측만 채우고 기존 값 보존**.

## 예시

### 결측 처리
```python
df_with_dogs = df.dropna(subset=["dog population"])       # 결측 행 삭제
df["dog population"].fillna(df["population 2023"] * 0.137) # 평균 비율로 채우기
```

## 요약
- 결측은 **dropna(subset=[열])**(행 삭제) 또는 **fillna(값)**(채우기)로 처리한다.
- 결측 비율이 작으면 행 삭제, 크면 열 삭제를 고려하고, 채울 땐 타당한 가정(평균 등)을 쓴다.
- **체계적 결측**은 편향을 유발하니 주의. 다음 강의는 문자열 메서드 **contains**다.
