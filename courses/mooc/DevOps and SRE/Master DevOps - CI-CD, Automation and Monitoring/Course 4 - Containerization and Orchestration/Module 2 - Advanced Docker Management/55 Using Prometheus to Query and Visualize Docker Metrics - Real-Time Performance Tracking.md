# Using Prometheus to Query and Visualize Docker Metrics - Real-Time Performance Tracking

## 개요
- MySQL 대신 가벼운 HTTPD 컨테이너를 추가해 Grafana 대시보드에서 실시간으로 컨테이너 지표를 확인하고, 실습을 마무리하며 전체 스택을 정리.

## 내용
### 무거운 컨테이너 대신 가벼운 컨테이너로 대체
- 서버 메모리가 1GB(950MB)로 제한적이라 MySQL(약 450~500MB 소비)은 다시 실행하지 않기로 결정.
```bash
docker stats   # Prometheus 5MB, cAdvisor 35MB, Grafana 52~131MB 등 현재 메모리 사용량 확인
```
- 대신 가벼운 웹 서버 컨테이너 추가:
```bash
docker run -d --name httpd-container httpd
docker ps -a   # 5개 컨테이너: httpd, nginx, cadvisor, prometheus, grafana
```
```bash
docker stats   # 각 컨테이너의 메모리 소비가 훨씬 적음을 확인
```

### Grafana 대시보드 새로고침으로 확인
- 대시보드 시간 범위를 **Last 5 minutes**, 새로고침 주기를 **5초**로 설정 → 5개 컨테이너 모두가 대시보드에 반영됨.
- 컨테이너별 CPU 사용량, 메모리 사용량, 네트워크 트래픽을 실시간으로 시각화.
- 개별 패널을 클릭하거나 **View**를 선택하면 더 큰 화면으로 상세 그래프 확인 가능(예: 컨테이너별 CPU 사용률 추이).

### 역할 정리 (복습)
- **cAdvisor** — 데이터 수집.
- **Prometheus** — 데이터 저장(중앙 저장소).
- **Grafana** — 데이터 시각화.

### 전체 정리
```bash
docker rm -f httpd-container
docker rm -f nginx-server
docker-compose down   # Prometheus, cAdvisor, Grafana 스택 전체 제거
docker ps -a            # 모든 컨테이너 제거 확인
```

## 요약
- 메모리 제약이 있는 서버에서는 MySQL 같은 무거운 컨테이너 대신 HTTPD 같은 가벼운 컨테이너로 대체해 안정적으로 5개 컨테이너의 실시간 지표(CPU·메모리·네트워크)를 Grafana 대시보드에서 확인했으며, 실습 마무리로 수동 생성 컨테이너는 `docker rm -f`로, Compose 스택은 `docker-compose down`으로 모두 정리했다.
