# Docker Installation - Update Package and Enable Docker

## 개요
- Ubuntu 서버(AWS EC2)에 Docker를 설치하고, 부팅 시 자동으로 실행되도록 서비스를 활성화하는 실습.

## 내용
### 사전 요구 사항 확인
- x86 시스템에 Ubuntu 22.04 또는 20.04(실습에서는 24.04도 정상 동작) 설치 필요.
```bash
lsb_release -a          # OS 버전 확인
cat /etc/os-release      # 배포판 정보 확인
```
- 실습 환경은 Ubuntu 24.04(코드네임 `noble`, 참고로 22.04는 `jammy`).
- **Gnome Terminal 설치 여부**는 데스크톱 환경에서만 필요 — 서버 버전(Ubuntu Server, 이번 실습은 AWS EC2의 서버 버전)에서는 선택 사항이며 설치하지 않아도 무방.

### Docker 설치
```bash
sudo apt-get update        # APT 저장소 갱신
sudo apt install docker.io # Docker 설치 (설치 확인 프롬프트에 Y 입력)
```

### Docker 서비스 활성화
```bash
sudo systemctl enable docker   # 재부팅 후에도 Docker 서비스가 자동으로 켜지도록 설정(persistent)
sudo systemctl status docker   # active (running) 상태 확인
```
- `enable` 명령을 실행하지 않으면, 서버가 재부팅된 후 Docker 서비스가 자동으로 켜지지 않아 매번 수동으로 시작해야 함.
- 만약 상태가 `active (running)`으로 나오지 않으면 다음 명령으로 수동 시작:
```bash
sudo systemctl start docker
sudo systemctl status docker
```
- Docker 서비스가 `active (running)` 상태가 되어야 컨테이너를 생성할 수 있음.

## 요약
- Ubuntu 서버에 Docker를 설치하려면 `lsb_release -a`로 OS 버전을 확인한 뒤 `apt-get update` → `apt install docker.io`로 설치하고, `systemctl enable docker`로 재부팅 후에도 서비스가 자동 실행되도록 설정한 다음 `systemctl status docker`로 `active (running)` 상태를 확인해야 컨테이너 생성이 가능하다.
