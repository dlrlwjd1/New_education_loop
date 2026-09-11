# Using Regular Expressions

## 개요
- WHERE 절을 넘어, SELECT 결과에서 정규식으로 문자열의 일부를 추출하는 `substring()`과 여러 일치 항목을 모두 가져오는 `regexp_matches()`를 다루는 강의

## 내용
### substring()으로 첫 번째 일치 항목 추출
- `substring(열 FROM '정규식')`은 열 값에서 정규식과 일치하는 부분(괄호로 감쌌다면 그 캡처 부분)을 추출한다. 여러 번 일치하더라도 **첫 번째 일치 항목만** 반환한다.
- 예: 이메일 주소에서 숫자를 추출할 때 `[0-9]+`를 쓰면 연속된 숫자 덩어리 하나를 통째로 가져온다.
- 이메일 주소에서 도메인 이름만 뽑아내는 정규식(`.+@(.*)$`처럼 `@` 뒤부터 끝까지를 캡처)을 단계별로 분해해 설명한다 — `.` `+`(임의 문자 반복), `@`(리터럴 문자), `(` `)`(추출 시작/끝), `.*`(0개 이상 임의 문자), `$`(줄 끝).

### regexp_matches()로 모든 일치 항목 가져오기
- `substring()`은 첫 번째 일치만 반환하지만, `regexp_matches(열, '정규식')`는 한 줄에서 패턴과 일치하는 모든 부분을 배열 형태로 반환하며, 일치 항목이 여러 개면 그만큼 여러 개의 "가상 행(virtual row)"이 생성된다(SELECT 결과가 확장됨).
- 해시태그(`#단어`) 추출 예제: `#([A-Za-z0-9_]+)`처럼 `#` 뒤에 오는 영숫자·밑줄 문자를 캡처 그룹으로 지정해, 한 트윗(tweet) 안에 있는 여러 해시태그를 모두 추출한다.
- `SELECT DISTINCT`와 결합하면 중복 없는 해시태그 목록을 얻을 수 있고, 원본 테이블과 연결(JOIN)하면 어떤 트윗에 어떤 해시태그가 있는지 매핑도 가능하다.

## 예시
```sql
-- 첫 번째 숫자 덩어리만 추출
SELECT substring(email FROM '[0-9]+') FROM account;

-- 이메일에서 도메인 이름만 추출
SELECT substring(email FROM '.+@(.*)$') FROM account;

-- 도메인별 개수 집계
SELECT substring(email FROM '.+@(.*)$') AS domain, COUNT(*)
FROM account
GROUP BY domain;

-- 해시태그 전부 추출 (여러 개면 여러 행 생성)
SELECT regexp_matches(tweet, '#([A-Za-z0-9_]+)') FROM tw;
SELECT DISTINCT regexp_matches(tweet, '#([A-Za-z0-9_]+)') FROM tw;
```

## 요약
- `substring(열 FROM '정규식')`은 열 값에서 정규식과 일치하는 첫 번째 부분(또는 캡처 그룹)만 추출한다.
- `regexp_matches()`는 한 줄 안의 모든 일치 항목을 배열로 반환하며, 일치 개수만큼 결과 행이 늘어난다.
- 두 함수 모두 GROUP BY, DISTINCT, JOIN과 결합해 텍스트에서 구조화된 정보(도메인, 해시태그 등)를 추출·집계하는 데 활용된다.
