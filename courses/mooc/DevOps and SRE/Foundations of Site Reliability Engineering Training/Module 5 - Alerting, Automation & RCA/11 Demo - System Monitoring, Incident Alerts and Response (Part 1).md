# Demo: Setting Up System Monitoring, Incident Alerts, and Response with Prometheus and Alertmanager - Part 1 (데모 — 시스템 모니터링·인시던트 경고·대응 1부)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- 단일 EC2에 **Prometheus + Node Exporter + Nginx Prometheus Exporter + Alertmanager**를 설치·구성하고, Nginx 중지로 인시던트를 트리거해 경고를 검증하는 데모(1부): 준비·설치·Nginx 구성.
- 도구: EC2, Docker, Node Exporter, Alertmanager, Python3/pip3/Flask, Nginx Prometheus Exporter, systemd. 사전: 포트 **22·80·9090·9093·9100·9113**.

## 내용 · 예시 (절차)

### 1. EC2 준비
```bash
sudo yum update -y
sudo yum install -y wget tar nano curl --allowerasing
hostname -i        # 로컬(private) IP 확인 (설정에 사용)
```

### 2. Nginx 설치·구성
```bash
sudo yum install -y nginx
sudo systemctl enable nginx
sudo nano /etc/nginx/nginx.conf   # server 블록 root 아래에 stub_status 등 추가, private IP allow
sudo nginx -t                     # 설정 테스트 → successful
sudo systemctl restart nginx
curl ...stub_status               # "server accepts handled requests" 확인
```

### 3~4. 사용자·디렉터리·바이너리 설치
```bash
# 워크북 명령으로 사용자·디렉터리 생성
cd /tmp
# Node Exporter tar 다운로드·추출 → bin을 /usr/local/bin 복사
# Nginx Prometheus Exporter 바이너리 설치
# Prometheus tar 다운로드·추출 → 바이너리·promtool을 /usr/local/bin 복사
# Alertmanager tar 다운로드·추출 → /usr/local/bin 복사
```

## 요약
- 단일 EC2에 **Nginx + Node Exporter + Nginx Exporter + Prometheus + Alertmanager** 바이너리를 설치하고 Nginx의 `stub_status`를 구성.
- private IP를 nginx.conf에 허용하고 `nginx -t`로 검증 후 재시작.
- (다음: systemd 서비스·모니터링 설정 — Part 2) (포트 22·80·9090·9093·9100·9113 필요)
