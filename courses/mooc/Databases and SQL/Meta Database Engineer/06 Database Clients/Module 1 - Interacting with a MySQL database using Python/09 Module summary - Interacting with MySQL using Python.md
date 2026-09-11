# Module summary: Interacting with MySQL using Python

## 개요

- Module 1(Python으로 MySQL 상호작용)에서 배운 내용을 되짚는 요약 강의

## 내용

### 레슨 1 — 연결과 환경

- API(드라이버)로 Python-MySQL 연결: 앱 → API → 데이터베이스 → 커서 연결 흐름
- 다양한 API 중 **MySQL Connector/Python** 사용, Python 설치, pip와 패키지 임포트, 별칭(aliasing)
- 접근(dot) 연산자로 모듈 기능 사용, connect에 사용자명·비밀번호 인자 전달
- 커서 객체 생성 → execute로 SQL(Python 문자열) 전달 → 데이터베이스·테이블 생성

### 레슨 2 — 커서

- 커서 = Python 클라이언트가 접근할 데이터 위치를 가리키는 포인터, 결과의 개별 레코드 읽기·이동
- 특성: 읽기 전용, 비스크롤(순서대로), asensitive(원본 참조)
- 명령: DECLARE·OPEN·FETCH·CLOSE
- **커서 서브클래스**: raw(무가공), dictionary(딕셔너리 반환), buffered(버퍼 저장) — 부모 클래스 속성 상속, 동작 변형
- 인터리빙 SQL 요청(첫 쿼리 결과 일부로 후속 요청)과 서브클래스 생성 문법

## 요약

- API 연결·환경 구축부터 커서와 서브클래스, 인터리빙까지 Python-MySQL 상호작용의 기초를 갖췄다. 다음 모듈은 Python으로 쿼리 수행이다.
