# Lecture 15: Big Data — Spark

## 개요
- 업로드일: 2020-04-14
- 원본: https://www.youtube.com/watch?v=mzIoSW-cInA
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: MapReduce를 일반화한 Spark의 RDD, lazy DAG, lineage 기반 장애 복구

## 내용
### MapReduce의 한계
MapReduce는 `Map → Shuffle → Reduce` 한 단계를 잘 처리하지만, PageRank나 machine learning처럼 같은 데이터를 반복 사용하는 알고리즘은 단계마다 중간 결과를 분산 파일 시스템에 기록해야 한다. 표현력과 반복 성능이 제한된다.

### RDD와 연산
RDD(resilient distributed dataset)는 여러 partition으로 나뉜 불변 데이터 집합이다.

- `map`, `filter`, `join` 같은 transformation은 새 RDD를 정의한다.
- `count`, `collect`, `save` 같은 action이 실제 계산을 시작한다.
- transformation은 즉시 실행되지 않고 lineage DAG를 만든다.
- 반복 사용할 RDD는 `persist`/`cache`해 memory에 유지할 수 있다.

### 의존성과 실행 계획
narrow dependency에서는 한 자식 partition이 소수 부모 partition만 필요로 해 pipeline이 가능하다. wide dependency는 여러 부모에서 데이터를 모으는 shuffle을 요구하며 stage 경계가 된다. scheduler는 DAG를 stage와 task로 나눠 data locality를 고려해 실행한다.

### 장애 복구
RDD는 불변이고 생성 방법인 lineage가 남는다. worker가 partition을 잃으면 전체 job을 재시작하거나 모든 중간 데이터를 복제하지 않고, 필요한 조상 partition에서 해당 부분만 다시 계산한다. 긴 lineage나 비싼 계산은 checkpoint로 절단할 수 있다.

## 예시
PageRank는 link graph를 cache한 뒤 rank RDD를 반복 갱신한다. MapReduce라면 매 반복마다 disk를 왕복하지만 Spark는 반복 사이의 핵심 RDD를 memory에 유지하고 DAG 전체를 최적화한다.

## 요약
- Spark는 두 단계 MapReduce를 다단계 dataflow DAG로 일반화한다.
- RDD는 불변 partition과 lineage를 결합한 장애 허용 추상화다.
- lazy evaluation은 여러 transformation을 함께 최적화하게 한다.
- cache는 반복 계산을 빠르게 하고 lineage는 잃은 partition만 재계산하게 한다.
