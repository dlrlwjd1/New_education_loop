# Demonstration: Flat files, Regex, Email

## 개요
- mbox(메일박스) 형식의 플레인 텍스트 로그 파일을 한 줄씩 통째로 데이터베이스에 적재한 뒤, 정규식으로 발신자 이메일 주소를 추출·집계하는 종합 실습 강의

## 내용
### 플랫 파일을 한 줄 = 한 행으로 적재하기
- `mbox(line TEXT)` 테이블을 만들고, `\copy`로 파일을 적재할 때 구분자(delimiter)를 파일에 절대 등장하지 않는 특수 문자(예: 종 모양 문자)로 지정해, 콤마나 탭 때문에 줄이 여러 열로 쪼개지지 않고 한 줄 전체가 하나의 열 값으로 들어가도록 한다.
- `wget`으로 원격 파일을 내려받은 뒤, 파이프를 이용해 조용히(`-q`) 표준출력으로 받아 바로 `\copy`에 흘려 넣는 방식도 함께 보여준다.

### 정규식으로 발신자(From) 줄 찾기 및 이메일 추출
- `line ~ '^From '`(대문자 From + 공백으로 시작하는 줄)로 mbox 파일의 발신자 헤더 줄만 골라낸다.
- `substring(line FROM ' ([^ ]+@[^ ]+) ')` 형태로, 공백으로 둘러싸인 `@`가 포함된 부분(이메일 주소)만 추출한다 — `[^ ]`는 "공백이 아닌 문자"를 뜻하는 부정 문자 집합이다.

### GROUP BY로 발신자별 메일 수 집계
- 추출한 이메일 주소를 `GROUP BY`하고 개수(`COUNT(*)`)로 내림차순 정렬해, 누가 가장 많은 메일을 보냈는지 집계한다(예: 특정 발신자가 5통으로 1위).
- 같은 결과를 서브쿼리(1열짜리 "가상 테이블"을 만드는 형태)로도 재구성할 수 있음을 보여주며, 정규식을 여러 번 반복해서 쓰는 대신 서브쿼리로 한 번만 계산해 재사용하는 절충안을 제시한다 — 다만 온라인 서비스가 아닌 데이터 마이닝 상황이라 서브쿼리의 성능 손실(몇 초 차이)은 감수할 만하다고 언급한다.

## 예시
```sql
CREATE TABLE mbox (line TEXT);
```
```bash
wget -q -O - <mbox 파일 URL> > mbox_short.txt
```
```
\copy mbox FROM 'mbox_short.txt' WITH DELIMITER E'\a'
```
```sql
SELECT line FROM mbox WHERE line ~ '^From ' LIMIT 5;

SELECT substring(line FROM ' ([^ ]+@[^ ]+) ') AS sender, COUNT(*)
FROM mbox
WHERE line ~ '^From '
GROUP BY sender
ORDER BY COUNT(*) DESC;
```

## 요약
- 구분자가 없는 특수 문자를 지정해 `\copy`하면, 플레인 텍스트 파일을 "한 줄 = 한 행"으로 통째로 적재할 수 있다.
- `^From `으로 발신자 헤더 줄만 골라낸 뒤, `substring()` + 정규식으로 이메일 주소를 추출하고 GROUP BY로 집계하는 흐름은 Python 없이 SQL만으로 로그 분석을 수행하는 실전 사례다.
- 반복되는 정규식 추출은 서브쿼리로 한 번만 계산해 재사용할 수도 있으며, 데이터 마이닝 용도에서는 그 정도의 성능 손실은 감수할 만하다.
