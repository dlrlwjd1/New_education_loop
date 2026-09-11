# Using Prometheus to Query and Visualize Docker Metrics - Creating Real-Time Docker Dashboards in Grafana with Prometheus and cAdvisor Data

## 개요
- Grafana의 커뮤니티 대시보드(ID 893, Docker and System Monitoring)를 Import해 Prometheus 데이터 소스와 연결하고, 실시간 컨테이너 지표를 시각화하는 실습.

## 내용
### 미리 만들어진 대시보드 Import
- **Dashboards → New → Import**.
- Grafana는 코딩 없이 사용할 수 있는 **커뮤니티 대시보드**를 ID나 JSON으로 불러올 수 있음 — 이번에는 **ID `893`**("Docker and System Monitoring") 사용.
- 대시보드 이름 지정(예: `docker-and-system-monitoring-demo`).
- **데이터 소스 선택** — 앞서 추가한 `docker-prometheus`를 지정 → **Import** 클릭.

### 왜 데이터가 바로 안 보이는가
- 대시보드가 기본적으로 **지난 24시간(Last 24 hours)** 범위로 설정되어 있어, 방금 배포한 스택은 데이터가 아직 없어 그래프가 비어 보임.
- 시간 범위를 **Last 5 minutes**로 변경하고 새로고침 주기를 **30초**로 설정하면 데이터가 나타나기 시작.

### 데이터 흐름 복습
- **cAdvisor**가 모든 지표를 수집해 Prometheus의 **Target**이 됨.
- **Prometheus**가 cAdvisor로부터 모든 지표를 가져와 저장.
- **Grafana**는 Prometheus를 **Source**로 설정한 대시보드(ID 893)에 그 지표를 자동으로 표시.

### 실시간 대시보드에서 확인 가능한 내용
- 컨테이너 3개(Prometheus, cAdvisor, Grafana) 확인.
- **네트워크 트래픽**(컨테이너별 수신 트래픽) — 색상별로 구분(녹색=cAdvisor, 파란색=Prometheus, 노란색=Grafana).
- **컨테이너별 CPU 사용량**, **컨테이너별 메모리 스왑(Swap) 사용량** 등 — Prometheus 자체 UI로는 제공하지 못하는 강력한 시각화를 Grafana가 제공.

### 새 컨테이너 추가 시 실시간 반영 확인
```bash
docker run -d --name nginx-server nginx
docker ps -a   # 컨테이너 실행 확인
```
- 새로 만든 `nginx-server` 컨테이너도 곧 Grafana 대시보드에 실시간으로 나타나게 됨(cAdvisor가 자동으로 수집).

## 요약
- Grafana에서 커뮤니티 대시보드 ID 893("Docker and System Monitoring")을 Prometheus 데이터 소스와 연결해 Import하면, 시간 범위를 "Last 5 minutes"로 좁혀 컨테이너별 CPU·네트워크·메모리 스왑 사용량을 실시간으로 시각화할 수 있으며, 새 컨테이너를 실행하면 cAdvisor가 자동으로 수집해 대시보드에 즉시 반영된다.
