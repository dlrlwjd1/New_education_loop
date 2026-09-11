# Create an interactive dashboard

## 개요

- Tableau에서 맵 차트·추세 차트 워크시트 2개를 만들어 하나의 인터랙티브 대시보드로 결합하는 실습

## 내용

### 워크시트 1 — 국가별 이익·매출 맵 차트

1. 시트 탭 제목을 "Profit and sales map by country"로 변경
2. 데이터 패널의 **Country 더블클릭** — 지리 필드라서 맵 뷰가 자동 생성
3. Profit 필드를 Marks 카드의 **Color**로 드래그, 식별하기 쉬운 색으로 변경
4. Sales 필드를 Marks 카드의 **Tooltip**으로 드래그
5. Maps → Background Maps → **Normal** 선택
6. 마우스 오버 시 국가명·이익·매출 표시 확인

### 워크시트 2 — 이익 추세 차트

1. 새 워크시트, 제목·시트명 "Profits trends"
2. **Order Date**를 열 선반으로 드래그 (날짜 타입 확인)
3. **Profit**을 행 선반으로 드래그 — 추세 차트 자동 생성
4. Profit을 **Color** 마크로 드래그해 추세선 색상 차별화
5. Profit을 **Label** 마크로 드래그 — 연도별 이익 표시

### 대시보드 결합과 인터랙티비티

1. **Dashboard 탭 → New Dashboard** (또는 하단 대시보드 아이콘) → 이름 "Profits dashboard"
2. 대시보드 패널 옆의 시트 목록에서 맵 차트를 빈 뷰로, 이익 추세 차트를 그 아래로 드래그
3. 맵 선택 → **Use as Filter** 아이콘 클릭
4. 맵에서 국가(예: Argentina) 선택 → 해당 국가의 매출·이익과 이익 추세가 함께 필터링되어 표시

## 요약

- 지리 필드 더블클릭으로 맵 차트, 날짜×측정값 드래그로 추세 차트를 만든다.
- 대시보드에 시트를 드래그해 결합하고, Use as Filter로 차트 간 상호작용(국가 클릭 → 추세 필터)을 건다.
