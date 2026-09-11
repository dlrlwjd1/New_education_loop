# Segmentation by Multiple Features

## 개요
- 두 개 이상의 특성으로 세분화하려면 **피벗 테이블(pivot table)** 메서드를 쓴다: `df.pivot_table(index=, columns=, values=)`.
- 스프레드시트 피벗 테이블의 행·열·값에 대응하며, 기본 집계는 **평균(mean)**.

## 내용

### pivot_table
- 예: 자녀 수 × 소프트웨어 개발자 여부별 코딩 학습 시간.
- `df.pivot_table(index="number of children", columns="is software dev", values="hours...")`:
  - **index** = 행(자녀 수), **columns** = 열(개발자 여부), **values** = 관심 결과(학습 시간).
- 기본 집계 = 평균. 예: 자녀 1명·비개발자 ≈ 14.5시간, 개발자 ≈ 13.4시간(비개발자가 대체로 조금 더 학습).

### 집계 함수 — aggfunc
- **aggfunc** 명명 인수로 집계 지정(기본 mean). `sum`, `count`, `std`, `max`, `min` 등.
- **리스트**로 여러 집계 동시: `aggfunc=["min", "median", "max"]` → 각 그룹의 최소·중앙·최대.
  - 예: 개발자는 최소가 약간 높고 최대가 약간 낮음.

## 예시

### 피벗 테이블
```python
df.pivot_table(index="number of children",
               columns="is software dev",
               values="hours",
               aggfunc="mean")            # 기본 mean
df.pivot_table(..., aggfunc=["min", "median", "max"])  # 여러 집계
```

## 요약
- 여러 특성 세분화는 **pivot_table(index=행, columns=열, values=결과)** 로 하며 기본 집계는 평균이다.
- **aggfunc** 로 집계 함수를 바꾸거나(sum·count·std·max·min) 리스트로 여러 개를 동시에 구한다.
- 이로써 Module 2(pandas·기술 통계)를 마친다. 다음 모듈은 **데이터 시각화**다.
