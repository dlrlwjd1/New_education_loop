# Heatmaps

## 개요
- **히트맵(heat map)** 은 셀에 색 서식을 입힌 표 — 수치를 색으로 부호화해 패턴·이상치를 빠르게 포착한다.
- 여러 카테고리·세그먼트를 동시에 비교할 때 유용하다.

## 내용

### 히트맵 만들기
- Category Name(Columns) + Country(Rows) + Count of Orders(**Color**) → 히트맵(셀 색 강도 = 주문 수). Fit Entire View.

### 비교 방향 — Percent of Total
- 기본은 전체(모든 국가) 비교. 행 또는 열 내 비교가 흔함.
- Count of Orders → **Quick Table Calculation → Percent of Total** → **Edit Table Calculation** 로 방향 선택:
  - **Table Across**(행 비교, 예: 멕시코에서 어느 카테고리 인기),
  - **Table Down**(열 비교, 예: 과자류에서 어느 국가 비중↑).
- **Show Mark Labels** 로 백분율 표시(정밀 인사이트).

### 총계 행
- **Row Grand Total** 로 각 국가의 전체 주문 비중 → 카테고리별 초과/미달 비교(예: 미국 전체 14.7%인데 육류 주문의 20.5% → 수요 활용 검토). **유의성은 통계 검정 필요**.

### 저장
- **Publish**.

## 요약
- **히트맵**은 색으로 부호화한 표로, Count를 **Color** 에 넣어 만들고 패턴·이상치를 강조한다.
- **Percent of Total + Edit Table Calculation**(Across/Down)으로 비교 방향을, **Grand Total** 로 비중 맥락을 준다.
- 이로써 Module 2(Tableau)를 마친다. 다음 모듈은 **대시보드·스토리**다.
