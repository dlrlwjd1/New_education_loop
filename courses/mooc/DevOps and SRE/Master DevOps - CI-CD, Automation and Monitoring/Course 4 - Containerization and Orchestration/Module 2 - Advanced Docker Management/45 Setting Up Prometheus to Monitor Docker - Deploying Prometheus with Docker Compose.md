# Setting Up Prometheus to Monitor Docker - Deploying Prometheus with Docker Compose

## 개요
- `docker-compose up -d`로 Prometheus 컨테이너를 실제로 배포하고 웹 UI로 접근을 검증하되, 컨테이너 관련 지표는 아직 조회되지 않음을 확인(cAdvisor 필요성 제시).

## 내용
### 배포
```bash
docker-compose up -d
# 또는 최신 버전: docker compose up -d
```
- `-d`(Detach 모드)로 실행 — Compose 명령은 사용 중인 Docker/OS 버전에 따라 `docker-compose`(하이픈) 또는 `docker compose`(공백, 플러그인 방식)로 다를 수 있음(예: Amazon Linux는 `docker compose` 방식).
- 실행 과정: Prometheus 이미지 pull → 네트워크 생성 → 컨테이너 생성.
```bash
docker images   # Prometheus 이미지 확인
docker ps -a     # 컨테이너가 Up 상태로 실행 중임을 확인
```

### Prometheus 웹 UI 접근
- Docker Host의 포트 9090이 컨테이너 포트 9090에 매핑되어 있으므로, `http://<Docker Host Public IP>:9090`으로 접속.
- **Status → Targets**에서 Prometheus 서버 자체의 상태가 `UP`인지 확인 — 정상 배포됨.

### 지표 탐색의 한계 — cAdvisor 필요
- **Query** 탭에서 `container`로 검색해도 아무 결과가 나오지 않음 — 이는 아직 **cAdvisor**(컨테이너별 CPU 사용량, 메모리 사용량, 입출력 요청 등의 지표를 제공하는 도구)가 설치되지 않았기 때문.
- cAdvisor를 설치해야 비로소 Prometheus가 개별 컨테이너의 리소스 지표를 수집할 수 있음 — 이는 다음 세션에서 다룰 내용.

### 정리
```bash
docker-compose down
docker ps -a   # 컨테이너 제거 확인
```
- 이번 세션은 Prometheus만 단독으로 배포한 상태이며, 다음 세션에서 cAdvisor를 추가해 실제 컨테이너 지표를 수집하는 과정으로 이어짐.

## 요약
- `docker-compose up -d`로 Prometheus 컨테이너를 배포해 웹 UI(포트 9090)에서 Prometheus 서버 자체의 상태(`UP`)는 확인할 수 있지만, 개별 컨테이너의 CPU·메모리 등 세부 지표는 cAdvisor가 아직 설치되지 않아 조회되지 않으며, 이는 다음 실습에서 cAdvisor를 추가함으로써 해결된다.
