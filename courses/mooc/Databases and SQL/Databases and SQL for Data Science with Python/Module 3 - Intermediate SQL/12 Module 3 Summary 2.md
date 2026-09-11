# Module 3 Summary — Built-in Functions & Subqueries

## 핵심 정리

| 개념 | 설명 |
|------|------|
| 내장 함수 | 데이터베이스 자체에서 데이터 연산을 수행하는 도구 |
| 성능 이점 | 대용량 데이터에서 앱으로 가져오기 전에 DB 내부에서 처리 → 속도·트래픽 절약 |
| 서브쿼리 | 중첩 SELECT로 더 강력한 쿼리 작성 가능 |
| 서브셀렉트 | WHERE 절에서 `AVG` 등 집계 함수를 평가할 때 사용 |
| 파생 테이블 | 서브쿼리 결과를 바깥 쿼리의 데이터 소스로 사용하는 테이블 표현식 |

## 연결 개념 한눈에 보기

```
내장 함수
├── 집계 함수: SUM, MIN, MAX, AVG, COUNT        → [08 참고]
├── 스칼라 함수: ROUND                           → [08 참고]
├── 문자열 함수: LENGTH, UCASE, LCASE            → [08 참고]
└── 날짜·시간 함수: DAY, MONTH, DATE_ADD, DATEDIFF → [09 참고]

서브쿼리 사용 위치
├── WHERE 절  : 집계 함수 직접 사용 제한 우회     → [10 참고]
├── 열 목록   : Column Expression (각 행에 집계값 표시)
└── FROM 절   : Derived Table (임시 데이터 소스)
```
