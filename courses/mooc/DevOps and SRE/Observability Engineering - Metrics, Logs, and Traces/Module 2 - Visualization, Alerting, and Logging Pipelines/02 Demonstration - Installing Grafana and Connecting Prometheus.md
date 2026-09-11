# Demonstration: Installing Grafana and Connecting Prometheus (데모 — Grafana 설치와 Prometheus 연결)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- **Grafana**를 설치하고, **Prometheus를 데이터 소스로 연결**하는 단계별 데모.

## 내용 · 예시 (절차)

### 1. Grafana 설치
```bash
sudo apt-get update
sudo apt-get install software-properties-common   # HTTPS 저장소 처리 의존성
sudo add-apt-repository <Grafana APT repo>         # 공식 저장소 추가 (최신 안정판)
# Grafana GPG 키 추가 (패키지 무결성 검증)
sudo curl <Grafana GPG key> ...                    # 신뢰 키 목록에 추가
sudo apt-get update
sudo apt-get install grafana
sudo systemctl enable grafana-server               # 부팅 시 자동 시작
sudo systemctl status grafana-server               # 실행 확인
```

### 2. 외부 접근 허용
- 설정 파일에서 **HTTP address**를 **`0.0.0.0`**으로 변경 → 모든 IP에서 접속 허용.
```bash
sudo systemctl restart grafana-server
```

### 3. 웹 UI 접속
- 브라우저에서 **`http://<server-IP>:3000`**.
- 기본 계정: **admin / admin** (첫 로그인 시 비밀번호 변경 요구).

### 4. Prometheus 데이터 소스 추가
- 좌측 사이드바 → **Connections → Data sources → Add data source → Prometheus**.
- 설정:
  - **Name**: 기본값 "Prometheus" 유지.
  - **URL**: 로컬이면 `http://localhost:9090`, 원격이면 서버 IP.
  - **Access**: 기본값 **Server**.
- **Save & test** → "data source is working" 메시지 확인.

## 요약
- Grafana를 공식 APT 저장소로 설치 → systemd로 실행 → `0.0.0.0` 바인딩으로 외부 접근 허용 → 포트 **3000** UI 접속(admin/admin).
- **Connections → Data sources**에서 Prometheus(`http://localhost:9090`)를 추가하고 **Save & test**로 검증하면 대시보드·시각화를 만들 준비 완료.
