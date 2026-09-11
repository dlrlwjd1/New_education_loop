# Creating Disaggregated Charts

## 개요
- **비집계 차트(disaggregated chart)** 는 개별 데이터 점을 보여준다 — Analysis → **Aggregate Measures 해제**.
- 집계는 전체 추세, 비집계는 개별 변동·이상치를 드러낸다.

## 내용

### 비집계로 전환
- 두 측정값을 Rows·Columns에 놓으면 Tableau가 자동 집계(합) → **점 하나뿐**(예: 재고 3,119·주문 780).
- **Analysis → Aggregate Measures 체크 해제** → 각 점이 개별 제품인 **산점도**.
- 예(재고 vs 주문): 뚜렷한 추세 없음. 주문 0 제품 다수(재고 분포 넓음), 주문>0 제품은 재고 ~22 미만 → 재고 임계값이 주문 유발 시사. 이상치(재고 적으나 주문 0)는 단종·지연 의문.
- **product name 차원**을 드래그하면 호버 시 제품명 표시(예 Louisiana Hot Spiced Okra).

### 공유
- **Publish** → 편집 뷰 닫으면 게시 뷰. 링크 공유 → 이미지·PDF·워크북 다운로드. 데이터팀은 **Make a Copy** 로 편집본 생성. (정적 이미지·PDF는 인터랙티브 아님)

## 요약
- **비집계 차트**는 **Aggregate Measures 해제**로 개별 데이터 점(산점도)을 보여줘 변동·이상치를 드러낸다.
- 집계는 전체 추세, 비집계는 개별 세부에 적합하며, 차원 드래그로 상세를 확인한다.
- **Publish·링크**로 공유한다. 이로써 Lesson 1을 마친다. 다음 레슨은 차트 향상이다.
