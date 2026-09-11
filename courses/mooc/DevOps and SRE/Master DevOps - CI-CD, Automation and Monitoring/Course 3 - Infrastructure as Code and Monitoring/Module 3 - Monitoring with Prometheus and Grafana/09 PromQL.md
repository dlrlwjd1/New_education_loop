# PromQL

## 개요
- Prometheus의 쿼리 언어 PromQL로 Instant Query, Range Query, Aggregation Query를 작성하고, Node Exporter 지표(CPU·메모리·디스크·네트워크)를 조회하는 실습.

## 내용
### PromQL이란
- 시간 기반 데이터를 조회하기 위해 설계된 유연하고 효율적인 쿼리 언어 — Prometheus 대시보드의 쿼리 입력창에서 직접 실행 가능.
- 메트릭 이름으로 검색 후 실행(Execute)하면 그래프 형태로 결과 확인 가능(예: `node_cpu_seconds_total`).
- 메트릭 이름 뒤에 조건(예: `> 10`)을 붙이거나, 레이블(label)과 함께 **`sum`, `avg`, `rate`** 같은 함수, 그리고 사칙연산자(+, -, *, /)를 사용할 수 있음.

### 쿼리 유형
1. **Instant Query(순간 쿼리)** — 특정 시점의 현재 값을 조회.
   - 예: `node_memory_MemTotal_bytes` → 현재 인스턴스(T2.micro)의 총 메모리 약 1GB 확인.
2. **Range Query(범위 쿼리)** — 일정 기간 동안의 데이터 추이를 조회.
   - 예: `rate(node_cpu_seconds_total[5m])` → 최근 5분간의 CPU 사용률(rate) 확인.
3. **Aggregation Query(집계 쿼리)** — 여러 차원(dimension)에 걸쳐 지표를 집계.
   - 예: `sum by (job, instance) (node_filesystem_size_bytes)` → job과 instance 기준으로 파일시스템 크기를 합산.
4. **계산(Calculation) 쿼리** — 여러 지표 간 사칙연산으로 파생 지표 계산.
   - 예: `(node_filesystem_size_bytes - node_filesystem_free_bytes) / node_filesystem_size_bytes * 100` → 디스크 사용률(%) 계산(단, `size_bytes`끼리 빼면 0이 되어 값이 나오지 않으므로 반드시 `free_bytes`를 사용해야 함).

### Node Exporter 지표 조회 예시
- **CPU 사용률**: `rate(node_cpu_seconds_total[5m])` — 최근 5분간 CPU 사용률.
- **메모리 사용량**: `node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes` — 전체 메모리에서 가용 메모리를 뺀 값 = 현재 사용 중인 메모리.
- **디스크 사용률**: `(node_filesystem_size_bytes - node_filesystem_free_bytes) / node_filesystem_size_bytes * 100` — 마운트 지점(`/`, `/dev/xvda`, `devtmpfs` 등)별 사용률(%) 확인.
- **네트워크 트래픽**: `rate(node_network_receive_bytes_total[5m]) + rate(node_network_transmit_bytes_total[5m])` — 초당 수신·송신 바이트를 합산해 네트워크 트래픽 확인.
- Jenkins 서버에 Prometheus를 연결한 경우 Jenkins 관련 지표도 동일한 방식으로 조회 가능.

## 요약
- PromQL은 Instant Query(현재 값), Range Query(기간별 추이, `[5m]` 등 범위 지정), Aggregation Query(`sum`/`avg` 등으로 차원별 집계), 계산 쿼리(사칙연산으로 파생 지표 산출)로 나뉘며, Node Exporter가 제공하는 CPU·메모리·디스크·네트워크 지표를 조합해 서버 상태를 실시간으로 조회할 수 있다.
