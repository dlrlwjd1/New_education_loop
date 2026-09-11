# Setting Up Your Data Model

## 개요
- 시각화 전 **데이터 모델(data model)** 을 구성 — 사용할 테이블을 선택하고 **관계**를 연결한다.
- 관련 테이블만 선택해 불필요한 데이터 로드를 피한다.

## 내용

### 관계 연결 (Northwind Traders 예)
- Data Source 화면에서 테이블을 드래그해 관계 생성. Tableau가 **매칭 필드(예 customer_id)를 자동 감지** — 연결선은 "**noodle**".
- 예: orders + customers(customer_id), orders + employees(employee_id).
- **연결 불가**: employees·suppliers는 매칭 필드 없어 경고 → 드래그로 빼거나 삭제.
- **수동 매칭**: 빨간 느낌표(자동 감지 실패) → 아래 창에서 필드 직접 지정(예 product_id ↔ product_id). order_details로 orders·products 연쇄 연결.

### 워크시트 전환 → 추출(extract)
- Sheet 1 클릭 → Tableau가 **추출(extract)**(연결한 테이블만 담은 로컬 압축 사본) 생성(수 초~1분). 시트 이름 변경 가능.
- **Publish** 로 저장.

## 요약
- **데이터 모델**은 필요한 테이블만 골라 드래그로 **관계**를 연결한다(자동 감지 또는 수동 매칭).
- 워크시트로 전환하면 필요한 테이블만 담은 **추출**이 생성된다.
- Publish로 저장한다. 다음 강의는 첫 시각화(집계 차트) 만들기다.
