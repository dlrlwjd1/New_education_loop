# Database modeling in MySQL Workbench

## 개요

- Workbench에서 ER 다이어그램을 만들고, forward engineer로 MySQL에 스키마를 구현하며, reverse engineer로 기존 데이터베이스에서 모델을 만드는 실습

## 내용

### 데이터 모델(ER 다이어그램) 만들기

1. 홈 화면 Models 뷰 → + 아이콘 → 새 스키마(mydb)를 mangata_gallo로 개명
2. **Add Diagram** 더블클릭 → ER 다이어그램 디자이너
3. **Add Table** 아이콘으로 테이블 엔터티 배치 → 더블클릭으로 테이블 에디터
   - customers: customer_id(INT, **PK·NOT NULL·AUTO_INCREMENT** 체크), full_name·contact_number·email(NOT NULL)
   - orders 테이블도 동일 절차로 작성
4. **외래 키**: Foreign Keys 탭에서 customer_id_fk 입력 → 참조 테이블 customers 선택 → customer_id 참조 체크 → **ON UPDATE/DELETE CASCADE** 지정
5. File → Save As로 mangata_gallo_model 저장

### Forward Engineer (모델 → 데이터베이스)

- Database 탭 → **Forward Engineer** → 연결 선택 → (고급 옵션 생략) → **Export MySQL Table Objects** 체크 → 생성될 SQL 스크립트 검토 → 실행 → "finished successfully".
- 내비게이터의 스키마 목록 또는 `SHOW DATABASES`로 생성 확인.

### Reverse Engineer (데이터베이스 → 모델)

- Database 탭 → **Reverse Engineer** → 연결 확인 → 서버의 스키마 목록에서 대상 선택 → 객체 전체 선택 → Execute → Finish.
- 내부 스키마에서 새 ER 다이어그램이 생성된다 — **PNG로 인쇄·공유하거나 수정 후 forward engineer로 다시 데이터베이스에 반영**할 수 있다.

## 요약

- Workbench의 모델 뷰에서 시각적으로 ER 다이어그램(테이블·PK·FK·CASCADE)을 설계한다.
- forward engineer는 모델을 SQL 스키마로 변환해 서버에 구현하고, reverse engineer는 기존 데이터베이스로부터 모델을 생성한다.
- 두 기능을 오가며 모델과 실제 데이터베이스를 동기화한다.
