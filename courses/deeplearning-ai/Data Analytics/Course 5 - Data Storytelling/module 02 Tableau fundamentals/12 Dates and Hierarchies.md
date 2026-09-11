# Dates & Hierarchies

## 개요
- Tableau의 날짜는 **계층(hierarchy)** 을 내장 — 연·분기·월·일 등 수준별 분석·**드릴다운**.
- 날짜로 **계산된 필드**(기간 계산)도 만든다.

## 내용

### 날짜 계층 (date hierarchy)
- order date를 워크스페이스에 드래그 → 필드(**pill**)의 **+ 기호** 클릭 → 분기·월 추가(자동 중첩 계층: 연→분기→월→일). 각 부분은 order date에 적용된 함수.
- 불필요한 수준(연·분기) 제거 가능. count of orders 추가 후 세로로 나오면 **Swap Rows/Columns**. Marks로 line→bar, 라벨·색·Fit With로 정리.

### 날짜 계산 필드
- order date 우클릭 → Create Calculated Field. 예: **Fulfillment Time = [ship date] − [order date]** (일 단위).
- 새 시트: Company Name + Fulfillment Time, 집계 **Average**(주문 많은 회사 왜곡 방지). 월·년 단위는 **DATEDIFF** 함수.
- 이상 발견(날짜 결측·즉시 처리·거의 한 달 소요) → 툴팁에 count of orders 추가로 맥락.

### 저장
- **Publish**.

## 요약
- Tableau **날짜 계층**은 자동 생성되며(형식 양호 시) **드릴다운**(연→분기→월→일)을 가능케 한다.
- 날짜에 필터·정렬·**계산된 필드**(날짜 빼기·**DATEDIFF**)를 적용해 기간을 구한다.
- 다음 강의는 라인 차트로 시계열 시각화다.
