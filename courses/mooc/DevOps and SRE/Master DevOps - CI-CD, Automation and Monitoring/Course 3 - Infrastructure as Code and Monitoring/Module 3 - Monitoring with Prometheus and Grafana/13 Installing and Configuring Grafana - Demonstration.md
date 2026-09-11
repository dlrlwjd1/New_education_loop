# Installing and Configuring Grafana - Demonstration

## 개요
- Prometheus가 이미 설치된 동일한 EC2(Ubuntu) 서버에 Grafana를 APT 저장소로 설치하고 접속하는 실습.

## 내용
### Grafana 설치
- Prometheus를 설치했던 서버에 이어서 Grafana를 설치.

```bash
# Grafana GPG 키 추가
wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -

# Grafana APT 저장소 추가
sudo add-apt-repository "deb https://packages.grafana.com/oss/deb stable main"

# 저장소 갱신 및 설치
sudo apt update
sudo apt install grafana -y
```

### 서비스 활성화 및 실행
```bash
sudo systemctl enable grafana-server
sudo systemctl start grafana-server
sudo systemctl status grafana-server   # active (running) 확인
```

### 접속 확인
- 브라우저에서 `http://<서버 IP>:3000`(Grafana 기본 포트 3000)으로 접속하면 Grafana 로그인 페이지 확인.
- 기본 사용자 이름/비밀번호는 **`admin` / `admin`** — 로그인 후 비밀번호 변경 안내에 따라 새 비밀번호 설정.
- 로그인에 성공하면 Grafana 대시보드 홈 화면 표시.

## 요약
- Grafana GPG 키와 APT 저장소를 추가한 뒤 `apt install grafana`로 설치하고 `grafana-server` 서비스를 활성화·시작하면, 포트 3000에서 기본 계정(`admin`/`admin`)으로 로그인해 Grafana 대시보드에 접근할 수 있다.
