# Dates

## 개요
- 날짜(date)/시간(time)과 타임존을 포함한 타임스탬프(timestamp)의 차이, PostgreSQL의 `TIMESTAMPTZ`, 캐스팅(casting), 날짜 연산, 그리고 쿼리 성능(전체 테이블 스캔 회피)까지 다루는 강의

## 내용
### 날짜/시간 vs 타임존 포함 타임스탬프
- "날짜/시간"은 역사적 사실을 기록하듯 문자열처럼 다루는 값이다(예: "1862년에 벌어진 사건"). 시간대를 신경 쓸 필요가 없다.
- 반면 "무슨 일이 언제 일어났는가"를 전 세계 공통 기준으로 기록해야 하는 경우(예: 화상회의 시작 시각)에는 타임존이 포함된 타임스탬프가 필요하다 — 같은 순간이라도 지역마다 로컬 시각이 다르기 때문이다.

### TIMESTAMPTZ와 UTC
- PostgreSQL의 타임스탬프 타입은 8바이트이며, 강사는 항상 시간대 정보가 포함된 `TIMESTAMPTZ`를 사용할 것을 권장한다. 저장 시 특정 시간대(예: 미국 동부 시간)로 넣어도, 조회 시 다른 시간대(태평양 시간, 영국 시간 등)로 자유롭게 변환해서 볼 수 있다.
- `NOW()` 함수는 UTC(그리니치 표준시) 기준 현재 시각을 반환한다. UTC는 일광절약시간제(DST)의 영향을 받지 않는 고정 기준이므로, 저장 기준 시간대로 UTC를 선호한다고 언급한다.
- `created_at TIMESTAMPTZ DEFAULT NOW()` 패턴으로 행이 삽입되는 순간을 자동 기록할 수 있다. 반면 `updated_at`을 수정 시점마다 자동 갱신하는 기능은 `CREATE TABLE` 문만으로는 지원되지 않으며, 저장 프로시저(트리거)로 구현해야 한다(다음 모듈에서 다룸).

### 캐스팅(casting)과 날짜 연산
- `::` 연산자로 타입 변환(캐스팅)을 한다. 예: `NOW()::DATE`는 타임스탬프에서 날짜 부분만 추출한다.
- `INTERVAL '2 days'`처럼 간격(interval) 리터럴로 날짜 연산을 할 수 있다. 예: `NOW() - INTERVAL '2 days'`.
- `DATE_TRUNC()` 함수로 타임스탬프의 정밀도를 낮출 수 있다(예: 일 단위, 시간 단위로 절삭).

### 성능: 전체 테이블 스캔을 유발하는 쿼리 vs 아닌 쿼리
- 같은 결과를 내는 쿼리라도 성능은 다를 수 있다. 예를 들어 `created_at::DATE = '오늘'`처럼 캐스팅으로 비교하는 쿼리는 전체 테이블 스캔(모든 행을 하나씩 읽는 방식)을 유발할 수 있는 반면, `DATE_TRUNC`를 활용하거나 범위 비교(`created_at >= 오늘 AND created_at < 내일`)로 표현하면 인덱스를 활용해 훨씬 빠르게 처리될 수 있다.
- 이런 성능 차이의 세부 원리는 향후 실행 계획(explain) 관련 강의에서 더 다룬다고 언급된다.

## 예시
```sql
CREATE TABLE post (
    id SERIAL PRIMARY KEY,
    content TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```
```sql
SELECT NOW()::DATE;
SELECT NOW()::TIME;
SELECT NOW() - INTERVAL '2 days';
SELECT DATE_TRUNC('day', created_at) FROM post;

-- 인덱스를 활용할 수 있는 범위 비교 (권장)
SELECT * FROM post
WHERE created_at >= DATE_TRUNC('day', NOW())
  AND created_at < DATE_TRUNC('day', NOW()) + INTERVAL '1 day';
```

## 요약
- 타임존이 필요한 "언제 일어났는가" 데이터는 PostgreSQL의 `TIMESTAMPTZ`로 저장하고, 기준 시간대는 UTC를 권장한다.
- `::` 캐스팅, `INTERVAL`, `DATE_TRUNC`로 날짜/시간을 다양하게 변환·연산할 수 있다.
- 날짜 비교 쿼리를 캐스팅으로 작성하면 전체 테이블 스캔을 유발할 수 있으므로, 인덱스를 활용할 수 있는 범위 비교 형태로 작성하는 것이 성능상 유리하다.
