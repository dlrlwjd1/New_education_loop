# Introduction to advanced MySQL topics

## 개요

- Advanced MySQL Topics 강좌에서 배울 내용을 모듈별로 안내하는 오리엔테이션 강의

## 내용

### Module 1 — 함수와 트리거

- 함수와 기본·복합 저장 프로시저 생성 — 코드 블록의 재사용·호출
- 변수(variable)와 매개변수(parameter)로 더 복잡한 저장 함수·프로시저 작성
- 내장 함수가 부족할 때 **사용자 정의 함수(user-defined function)** 개발
- **트리거(trigger)**로 데이터 기반 작업 자동화 — INSERT·UPDATE·DELETE 유형별 활용
- **예약 이벤트(scheduled events)**로 특정 시각에 작업 실행

### Module 2 — 데이터베이스 최적화

- 최적화 개념과 이점, SELECT 문 최적화 기법(필요한 컬럼만 대상, 복잡한 함수 회피 등)
- **인덱스(index)**로 검색 쿼리 성능 향상
- **트랜잭션(transaction)** 문으로 데이터베이스 트랜잭션 관리
- **공통 테이블 표현식(CTE)**으로 복잡한 쿼리를 단일 코드 블록으로 관리
- **준비된 문(prepared statement)**으로 컴파일·파싱 횟수 절감
- **JSON 데이터 타입**으로 데이터베이스와 상호작용

### Module 3 — 데이터 분석용 MySQL

- 데이터베이스 분석과 MySQL의 관계, 분석 데이터의 의사결정 활용
- 조인·서브쿼리·뷰를 이용한 데이터 분석
- **FULL OUTER JOIN 흉내내기**(에뮬레이션) — 매칭되지 않는 레코드까지 두 테이블 전체 추출
- 다중 테이블 JOIN으로 데이터 추출

### Module 4 — 최종 프로젝트

- 랩 프로젝트와 채점 평가로 실력 확인

## 요약

- 이 강좌는 함수·프로시저·트리거·예약 이벤트 → 최적화(인덱스·트랜잭션·CTE·준비된 문·JSON) → 데이터 분석(조인·FULL OUTER JOIN 에뮬레이션) 순으로 고급 MySQL을 다룬다.
