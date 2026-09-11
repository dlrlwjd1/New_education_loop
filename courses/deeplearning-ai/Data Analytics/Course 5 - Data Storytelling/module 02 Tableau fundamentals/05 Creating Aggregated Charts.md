# Creating Aggregated Charts

## 개요
- **행(Rows)·열(Columns) 선반(shelf)** 에 차원·측정값을 끌어놓아 차트를 만든다(Rows=y축, Columns=x축).
- **집계 차트(aggregated chart)** 는 여러 데이터를 sum·average 등으로 요약한다.

## 내용

### 차트 만들기
- 필드를 워크스페이스에 드래그(**Rows 선반** = 책장). 예: product name(차원) + units in stock(측정값) → 막대 차트(제품별 재고 합).
- **더 유용한 세분화**: product name 대신 **category_id** → 카테고리별 재고. 카테고리 이름은 categories 테이블의 category name을 Rows에 추가(**데이터 모델 덕에 자동 연결**). Seafood 최다.
- **집계 함수 변경**: 측정값 드롭다운에서 sum → average 등.

### 차트 유형 제어
- Tableau가 자동 선택하나 **완전 제어** 가능. Rows·Columns 필드 교환으로 막대↔열. **Show Me 패널**로 다른 유형(예: on-order 추가 후 **side-by-side bars** = 그룹 막대).

### 저장
- **Publish** 로 저장.

## 요약
- **Rows(y)·Columns(x) 선반**에 차원·측정값을 끌어 차트를 만들고, 데이터 모델 덕에 다른 테이블 필드로 세분화한다.
- **측정값 드롭다운**으로 집계 함수를, **Show Me** 로 차트 유형을 바꾼다.
- **집계 차트**는 sum·average 등으로 요약한다. 다음 강의는 **계산된 필드**(새 필드)다.
