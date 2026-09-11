# Creating a New Workbook

## 개요
- Tableau 작업은 **새 워크북(workbook)** 생성으로 시작 — Create → Web Authoring.
- 데이터 연결: **파일 업로드** 또는 **커넥터(connector)**. 필드는 **차원(dimension)** 과 **측정값(measure)** 으로 나뉜다.

## 내용

### 데이터 연결
- **파일**: CSV 등 드래그·업로드. 단 **Tableau 내에서 편집 불가**(변경은 Python·스프레드시트).
- **커넥터**: 외부 소스(클라우드·온라인 DB)에서 온디맨드 쿼리. Tableau Public은 **Google Drive·OData** 만.
  - OData 예: Northwind Traders(URL, no authentication). 연결 시 테이블 목록(customers·orders·products·suppliers).

### 데이터 소스 탭
- 하단 **Data Source** 탭 — 차트 전 데이터 작업. 테이블을 끌어 데이터 모델 생성(외래 키로 관계).
- **필드 타입 색**: **파랑=차원(dimension)**(범주형·텍스트·날짜·ID, 세분화용, 집계 불가), **초록=측정값(measure)**(정량·집계 가능, 예 Price·매출).

### 저장 — Publish
- Tableau Public은 **Publish 해야 저장**(안 하면 손실). 이름·"Show Sheets as Tabs" 선택 후 Publish. (공개됨)

## 요약
- Tableau는 **새 워크북** + 데이터 연결(**파일 또는 커넥터**)로 시작하며 내부 편집은 불가하다.
- 필드는 **차원(파랑, 범주·세분화)** 과 **측정값(초록, 정량·집계)** 으로 구분된다.
- **Publish** 해야 저장된다(공개). 다음 강의는 데이터 모델(관계) 설정이다.
