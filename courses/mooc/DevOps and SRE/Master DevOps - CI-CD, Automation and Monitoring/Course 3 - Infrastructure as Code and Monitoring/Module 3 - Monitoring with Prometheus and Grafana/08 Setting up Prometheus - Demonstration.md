# Setting up Prometheus - Demonstration

## 개요
- AWS EC2(Ubuntu) 인스턴스에 Prometheus와 Node Exporter를 직접 설치하고 systemd 서비스로 등록해 실행하는 실습.

## 내용
### EC2 인스턴스 준비
1. **Launch instance** → 이름 `Prometheus`, OS는 **Ubuntu** 선택.
2. 기존 Key Pair 선택, Security Group도 기존 것(모든 포트 오픈) 선택 — 실습 편의를 위한 것으로, 실제 엔터프라이즈 환경에서는 필요한 포트만 열어야 함.
3. 인스턴스 생성 후 Public IP로 SSH 접속.

```bash
ssh ubuntu@<Public IP> -i edureka-terraform.pem
```

### Prometheus 설치
```bash
sudo apt update
sudo useradd --no-create-home --shell /bin/false prometheus   # Prometheus 전용 사용자 생성(백엔드 권한 분리)
sudo mkdir /etc/prometheus /var/lib/prometheus                 # 설정 파일용, 데이터 저장용 디렉터리
sudo chown prometheus:prometheus /var/lib/prometheus            # Prometheus 사용자에게 데이터 디렉터리 권한 부여

cd /tmp
wget <prometheus-x.x.x.linux-amd64.tar.gz>
tar xvf prometheus-*.tar.gz

# 압축 해제된 폴더에서 파일 이동
sudo mv prometheus-*/consoles /etc/prometheus
sudo mv prometheus-*/console_libraries /etc/prometheus
sudo mv prometheus-*/prometheus.yml /etc/prometheus
sudo mv prometheus-*/prometheus /usr/local/bin/
```

### systemd 서비스 등록
```bash
sudo nano /etc/systemd/system/prometheus.service
```
- 서비스 파일 안에서 실행 사용자·그룹을 `prometheus`로 지정하고, 바이너리 경로(`/usr/local/bin/prometheus`)와 설정 파일 경로(`/etc/prometheus/prometheus.yml`), 데이터 저장 경로(`/var/lib/prometheus`)를 지정.

```bash
sudo systemctl daemon-reload
sudo systemctl enable prometheus
sudo systemctl start prometheus
sudo systemctl status prometheus     # active (running) 확인
```
- 브라우저에서 `http://<Public IP>:9090`으로 접속하면 Prometheus 대시보드 확인 가능(기본 포트 9090). 단, 아직 Target을 설정하지 않아 수집할 지표가 없는 상태.

### Node Exporter 설치
```bash
cd /tmp
wget <node_exporter-x.x.x.linux-amd64.tar.gz>
tar xvf node_exporter-*.tar.gz
sudo mv node_exporter-*/node_exporter /usr/local/bin/
sudo useradd --no-create-home --shell /bin/false node_exporter

sudo nano /etc/systemd/system/node_exporter.service
sudo systemctl daemon-reload
sudo systemctl enable node_exporter
sudo systemctl start node_exporter
sudo systemctl status node_exporter   # active (running) 확인
```

### Prometheus에 Node Exporter를 Target으로 등록
```bash
sudo nano /etc/prometheus/prometheus.yml
```
```yaml
scrape_configs:
  - job_name: 'prometheus'
    # 기존 설정 유지
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['<서버 IP>:9100']   # node_exporter는 9100번 포트에서 실행
```
```bash
sudo systemctl restart prometheus
```
- Prometheus Web UI(`http://<Public IP>:9090`) → **Status → Targets**에서 `prometheus`와 `node_exporter` 두 Job이 모두 **UP** 상태인지 확인. Node Exporter는 `/metrics` 엔드포인트를, Prometheus 자신도 `/metrics` 엔드포인트를 제공.

## 요약
- Prometheus 전용 사용자·디렉터리를 만들고 바이너리를 다운로드해 systemd 서비스로 등록·실행한 뒤, 별도로 Node Exporter까지 설치해 `prometheus.yml`의 `scrape_configs`에 `node_exporter` Job(포트 9100)을 추가하면, Prometheus Web UI의 Targets 화면에서 서버 자체 지표까지 수집되는 것을 확인할 수 있다.
