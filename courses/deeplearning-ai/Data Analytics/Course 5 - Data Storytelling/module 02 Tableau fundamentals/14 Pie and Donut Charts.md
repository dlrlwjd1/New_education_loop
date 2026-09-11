# Pie & Donut Charts

## 개요
- **파이·도넛 차트**는 **부분-전체(part-to-whole)** 관계 시각화에 인기. 도넛은 가운데 구멍이 있어 인사이트 공간이 더 있다.

## 내용

### 모범 사례
- **부분-전체** 에만 사용(절대 크기 비교엔 부적합 — 각도 면적 비교 어려움, 막대가 나을 수 있음).
- **2~5개 카테고리**, 각 조각 **5% 이상**.
- 시각 잡음 최소화 — **3D·그림자 금지**(비율 왜곡), 명확한 라벨·범례·구분되는 색.

### 파이 차트 (Tableau)
- Marks에서 **Pie Chart** 선택(행·열 없음, Marks에 필드 드래그). Count of Products → **Angle**, Discontinued → **Color**.
- **Fit → Entire View**, Marks의 **Size**(35% 등)로 크기 조정. **Show Mark Labels**.
- 백분율: Count of Products → **Quick Table Calculation → Percent of Total**. Format Number로 소수 자리 조정. 색: color-safe 팔레트.

### 도넛 차트 (해킹)
- **두 차트 겹치기**: 아래=파이, 위=흰 원. Columns에 **0을 두 번** 더블클릭 → 두 차트.
- 오른쪽 차트를 **Circle** 로 변경, 차원·측정값 제거·라벨 해제·흰색.
- 오른쪽 0 우클릭 → **Dual Axis** 로 겹침. 파이 크기(80%)·헤더 제거, 원 크기(70%). Grid Lines Off.
- 제목으로 가운데 강조("제품군의 약 11%가 단종").

### 저장
- **Publish**.

## 요약
- **파이·도넛 차트**는 부분-전체 관계에 쓰며 2~5개 카테고리·5%+ 조각·시각 잡음 최소화가 원칙이다.
- 파이는 Angle·Color, 백분율은 **Percent of Total**, 도넛은 **0 두 개 + Dual Axis + 흰 원** 해킹으로 만든다.
- 다음 강의는 지리 데이터 **지도(maps)** 다.
