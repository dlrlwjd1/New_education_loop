# Docker Compose Installation

## 개요
- Docker에 기본 포함되지 않는 Docker Compose 플러그인을 Ubuntu 서버에 GPG 키·저장소 등록을 거쳐 설치하는 실습.

## 내용
### Docker Compose는 별도 설치가 필요
```bash
docker-compose --version   # 또는 docker compose --version
```
- Docker가 설치되어 있어도 **Compose는 자동으로 설치되지 않음** — "docker-compose not found" 또는 "compose is not a docker command" 오류 확인.

### 설치 절차
1. **패키지 인덱스 업데이트**
```bash
apt-get update
```
2. **사전 요구 패키지 설치**
```bash
apt-get install apt-transport-https ca-certificates curl software-properties-common
```
   - `apt-transport-https` — Ubuntu 서버에서 HTTPS URL 전송 설정에 필요.
   - `ca-certificates` — Docker Hub용 인증서 추가에 필요.
   - `curl` — URL 연결·다운로드에 필요.
   - `software-properties-common` — 저장소 관리에 필요.
3. **Docker 공식 GPG 키 추가**
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```
   - HTTPS로 `download.docker.com`에 연결하려면 인증서(GPG 키)로 신뢰성을 증명해야 함 — 이 키 없이는 Ubuntu가 해당 사이트에 연결해 Compose를 다운로드할 수 없음.
4. **Docker 저장소 추가**
```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list
cat /etc/apt/sources.list.d/docker.list   # download.docker.com이 등록되었는지 확인
```
5. **패키지 인덱스 재갱신 후 Compose 설치**
```bash
apt-get update
apt-get install docker-compose-plugin
```
   - 최신 Ubuntu/Docker 버전에서는 패키지 이름이 `docker-compose-plugin`이 아니라 **`docker-compose`**로 바뀌었을 수 있음(실습에서 `docker-compose-plugin`은 "Unable to locate package" 오류가 나 `docker-compose`로 재시도).
```bash
apt-get install docker-compose
```
6. **설치 확인**
```bash
docker-compose --version   # 예: 1.29.2
```

## 요약
- Docker Compose는 Docker 설치에 기본 포함되지 않으므로, `apt-get update` → 사전 요구 패키지 설치 → Docker 공식 GPG 키 추가(HTTPS 신뢰성 확보) → `/etc/apt/sources.list.d/docker.list`에 Docker 저장소 등록 → 재갱신 후 `docker-compose`(또는 `docker-compose-plugin`) 패키지를 설치해야 하며, `docker-compose --version`으로 설치를 확인한다.
