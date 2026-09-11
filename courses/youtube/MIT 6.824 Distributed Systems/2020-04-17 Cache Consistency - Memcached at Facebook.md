# Lecture 16: Cache Consistency — Memcached at Facebook

## 개요
- 업로드일: 2020-04-17
- 원본: https://www.youtube.com/watch?v=Myp8z0ybdzM
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: Facebook의 memcache 확장 과정, look-aside cache, stale data와 부하 급증 방지

## 내용
### Look-aside cache
웹 서버는 먼저 memcache를 읽고 miss면 database에서 값을 읽어 cache에 넣는다. 쓰기는 database를 먼저 갱신한 뒤 cache 항목을 삭제한다. memcache는 권위 있는 저장소가 아니므로 유실되더라도 database에서 다시 만들 수 있다.

이 구조는 범용 software로 매우 큰 읽기 처리량을 얻지만 database와 cache 사이의 원자성이 없어 다양한 race가 생긴다.

### Stale set과 lease
client A가 cache miss 후 오래된 DB 값을 읽는 동안 client B가 DB를 갱신하고 cache를 삭제할 수 있다. 이후 A가 오래된 값을 cache에 넣으면 stale data가 남는다. lease는 miss를 처리할 client에 token을 주고, 그 사이 invalidation이 발생하면 token을 무효화해 오래된 set을 거부한다.

### Thundering herd
인기 key가 만료되면 수많은 web server가 동시에 DB로 몰릴 수 있다. 한 client만 값을 채우게 하고 나머지는 기다리거나 stale 값을 잠시 사용하게 해 database를 보호한다.

### 규모 확장
- client-side hashing으로 key를 여러 memcache server에 분산한다.
- 지역별 cluster로 읽기 부하를 분리하되 invalidation을 전파한다.
- cold cluster를 올릴 때 warm cluster에서 값을 가져와 DB 급증을 막는다.
- UDP 응답 손실, server 장애, hot key를 별도 pool과 proxy로 다룬다.

## 예시
```text
Read:  get cache → miss → get DB → lease 확인 후 set cache
Write: update DB → delete cache
```

## 요약
- memcache는 database 앞의 비권위 look-aside cache로 읽기 부하를 크게 줄인다.
- 성능을 위한 복제와 지역 분산은 cache 일관성 문제를 확대한다.
- lease가 stale set과 miss 폭주를 제어한다.
- 실제 대규모 시스템은 하나의 우아한 알고리즘보다 여러 장애·부하 완화 장치의 조합으로 운영된다.
