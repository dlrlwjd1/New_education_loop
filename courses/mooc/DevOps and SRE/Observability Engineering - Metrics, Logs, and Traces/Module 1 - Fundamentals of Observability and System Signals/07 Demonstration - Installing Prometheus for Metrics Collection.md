# Demonstration: Installing Prometheus for Metrics Collection (데모 — 메트릭 수집용 Prometheus 설치)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 1: Fundamentals of Observability and System Signals

## 개요
- **Prometheus**를 설치하고, **systemd 서비스**로 구성하며, 정상 실행을 검증하는 단계별 데모.
- 메트릭 수집은 관찰 가능성의 기반이므로, 서비스 모니터링·경고·성능 분석 전에 안정적인 Prometheus 설치가 필요하다.

## 내용 · 예시 (설치 절차)

### 1. 패키지 준비
```bash
sudo apt update
sudo apt install wget curl -y   # wget: Prometheus 다운로드, curl: 연결 테스트
```

### 2. 전용 시스템 사용자 생성 (보안 모범 사례 — root로 실행 금지)
```bash
sudo useradd ...        # 로그인 불가한 시스템 계정 생성
id prometheus           # 사용자·그룹 확인
```

### 3. 디렉터리 생성·소유권
```bash
sudo mkdir /etc/prometheus          # 설정 디렉터리
sudo mkdir <data dir>               # 데이터 저장 디렉터리
# 두 디렉터리 소유권을 prometheus 사용자·그룹으로 변경
```

### 4. Prometheus 다운로드·설치
```bash
cd /tmp
wget <GitHub Prometheus release>    # 아키텍처에 맞는 릴리스
# 압축 해제 후 디렉터리로 이동
# 바이너리를 시스템 실행 경로로 이동:
#   prometheus  → /usr/local/bin
#   promtool    → /usr/local/bin
prometheus --version                # 설치 검증
# prometheus.yml 을 /etc/prometheus 로 이동, 설정·데이터 디렉터리 소유권 재귀 갱신
```

### 5. systemd 서비스 등록 (백그라운드 서비스화)
- `/etc/systemd/system/`에 서비스 정의 파일 작성 (관리자 권한 에디터).
- 설정 내용: **실행 사용자, 설정 파일 위치, 데이터 디렉터리, 웹 인터페이스 포트**.
```bash
sudo systemctl daemon-reload        # 새 서비스 인식
sudo systemctl start prometheus
sudo systemctl enable prometheus    # 부팅 시 자동 시작
sudo systemctl status prometheus    # "active (running)" 확인, q로 종료
```

### 6. 방화벽·검증
```bash
sudo ufw allow 9090                 # 방화벽이 켜져 있으면 포트 9090 허용
# 브라우저에서 localhost:9090 접속 → Prometheus 웹 UI(Expression Browser 등) 로드 확인
```

## 요약
- Prometheus를 **전용 사용자로 안전하게 설치** → **systemd 관리 서비스**로 구성 → 포트 **9090** 개방 → UI로 검증.
- 이 설정이 이후 **호스트·애플리케이션 메트릭 수집**의 기반이 된다.
