# Creating Dashboards for Docker Containers in Grafana - Customizing and Visualizing Data

## 개요
- 메모리 사용량, 네트워크 수신/송신 바이트 등 다양한 지표로 추가 대시보드를 만들고, 시간 범위 조절과 여러 쿼리를 하나의 패널에 추가하는 방법을 정리.

## 내용
### 메모리 사용량 대시보드
- Metric으로 **`container_memory_usage_bytes`** 입력 → Run query → 결과 확인 → **Save dashboard**(이름: "Container Memory Usage Bytes").
- 데이터가 적어 보이면 시간 범위를 **Last 5 minutes** 등으로 좁혀서 확인.

### 네트워크 수신/송신 바이트 대시보드 — 하나의 패널에 여러 쿼리 추가
1. **Query A** — Metric: `container_network_receive_bytes_total`(컨테이너가 받은 네트워크 바이트).
2. **+ Add query (Query B)** — Metric: `container_network_transmit_bytes_total`(컨테이너가 보낸 네트워크 바이트).
3. 두 쿼리를 모두 실행(Run query)하면 하나의 그래프에 수신·송신 데이터가 함께 표시됨.
4. 시간 범위를 **Last 30 minutes** 등으로 조정 가능.
5. **Save dashboard**(이름: "Container Network Transmit Bytes Total").

### 전체 워크플로우 요약
1. Dashboards → New → New dashboard → Add visualization.
2. 데이터 소스로 Prometheus(`docker-prometheus`) 선택.
3. 원하는 Metric(들)을 추가.
4. Run query로 결과 확인.
5. 필요하면 시간 범위(Last 5분/15분/30분/1시간 등) 조정.
6. Save dashboard로 저장 — 이후 **Dashboards** 목록에서 언제든 다시 열람(View) 가능.

### 이번 실습에서 만든 3개의 대시보드
1. Container CPU Usage.
2. Container Memory Usage Bytes.
3. Container Network Transmit Bytes Total.

### 추가 활용 팁
- **시간 범위 선택기(Time Range Selector)** — Last 5분/15분/1시간 등으로 표시 데이터의 기간을 조절.
- **그래프 위에 마우스 오버(Hover)** — 파란색·노란색·주황색 등 각 선이 어떤 컨테이너·값을 나타내는지 상세 정보(툴팁) 확인 가능.
- **패널 설정 수정, 알림(Alert) 추가, 필터 적용** 등으로 대시보드를 모니터링 목적에 맞게 세밀하게 커스터마이징 가능.

## 요약
- Grafana 대시보드는 Add visualization → 데이터 소스 선택 → Metric 추가(여러 쿼리도 한 패널에 결합 가능) → Run query → 시간 범위 조정 → Save라는 동일한 절차를 반복해 CPU·메모리·네트워크 등 원하는 지표별 대시보드를 자유롭게 만들 수 있으며, Hover 툴팁·패널 설정·알림·필터로 모니터링 요구에 맞게 세밀하게 커스터마이징할 수 있다.
