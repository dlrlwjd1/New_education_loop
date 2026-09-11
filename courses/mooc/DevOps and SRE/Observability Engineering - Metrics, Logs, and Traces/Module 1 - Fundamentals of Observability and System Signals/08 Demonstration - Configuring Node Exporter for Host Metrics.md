# Demonstration: Configuring Node Exporter for Host Metrics (데모 — 호스트 메트릭용 Node Exporter 구성)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 1: Fundamentals of Observability and System Signals

## 개요
- **Node Exporter**를 설치해 호스트 수준 시스템 메트릭(CPU·메모리·디스크)을 수집하고, systemd 서비스로 구성해 **Prometheus에 스크레이프 타깃으로 연결**하는 데모.

## 내용 · 예시 (구성 절차)

### 1. 아키텍처 확인 (올바른 바이너리 선택)
```bash
uname -m       # aarch64 → linux-arm64 빌드 사용
```

### 2. 전용 사용자 생성 (보안 — root 금지)
```bash
sudo useradd ...   # 홈 디렉터리 없음, 로그인 불가한 서비스 계정
id node_exporter   # 생성 확인
```

### 3. 다운로드·설치
```bash
cd /tmp
wget <GitHub node_exporter arm64 release>
tar ...            # 압축 해제 후 디렉터리로 이동
mv node_exporter /usr/local/bin
sudo chown node_exporter /usr/local/bin/node_exporter
node_exporter --version   # 설치 검증
```

### 4. systemd 서비스 등록
- `/etc/systemd/system/`에 서비스 파일 작성: **node_exporter 사용자로 실행, 네트워크 초기화 후 시작, 올바른 경로의 바이너리 실행**.
```bash
sudo systemctl daemon-reload
sudo systemctl start node_exporter
sudo systemctl enable node_exporter
sudo systemctl status node_exporter   # active (running) 확인
```

### 5. 메트릭 노출 확인 (포트 9101)
```bash
curl localhost:9101/metrics   # CPU·메모리·파일시스템 등 메트릭 이름 목록 → 정상
```

### 6. Prometheus에 스크레이프 타깃 추가
- `prometheus.yml`의 **`scrape_configs`** 섹션에 node_exporter 잡(job) 추가, 타깃 = `localhost:9101`.
```bash
sudo systemctl restart prometheus
sudo systemctl status prometheus   # active running 확인
# 브라우저 localhost:9090 → Status → Targets → node_exporter 상태 "up" 확인
```

### 7. Prometheus에서 메트릭 조회
```promql
node_cpu_seconds_total
node_memory_MemAvailable_bytes
node_filesystem_size_bytes
```
- 수치가 나오면 node_exporter가 메트릭을 수집하고 Prometheus가 스크레이프 중 → **파이프라인이 엔드투엔드로 작동**.

## 요약
- **Node Exporter**는 호스트 수준 메트릭(CPU·메모리·디스크)을 노출하는 익스포터로, 포트 **9101**에서 `/metrics` 제공.
- 전용 사용자 + systemd 서비스로 설치 후, `prometheus.yml`의 `scrape_configs`에 잡을 추가해 연결한다.
- Prometheus Targets에서 "up" 확인 + `node_*` 메트릭 조회로 검증하면 **실제 인프라 메트릭 수집**이 완성된다.
