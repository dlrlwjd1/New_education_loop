# Docker Metrics CPU, Memory, and Network Usage - Real-Time Metrics with Docker Stats and Inspect

## 개요
- 외부 도구 없이 Docker 내장 명령 `docker stats`(실시간 리소스 통계)와 `docker inspect`(상세 설정 정보)로 컨테이너를 모니터링하고, 실제 부하를 발생시켜 값 변화를 확인.

## 내용
### `docker stats` — 실시간 리소스 통계
```bash
docker stats
```
- 실행 중인 모든 컨테이너의 실시간 지표를 자동 갱신하며 표시:
  - **CPU %** — 예: 0.35%, 0.34%, 0.27%처럼 계속 변동.
  - **메모리 사용량/한도(MEM USAGE / LIMIT)** — 한도를 별도로 설정하지 않으면 Docker Host의 전체 메모리를 한도로 인식(예: MySQL 469.5MB/949MB, Nginx 3.6MB/949MB).
  - **메모리 사용률(MEM %)** — 예: MySQL 49.45%, Nginx 0.39%.
  - **네트워크 입출력(NET I/O)** — 컨테이너가 받은/보낸 트래픽 양.
  - **블록 입출력(BLOCK I/O)** — 디스크 읽기/쓰기 속도(예: Nginx 10.8KB/12.3KB).
  - **PIDs** — 컨테이너 내 프로세스 ID 개수(예: Nginx는 2, MySQL은 35).
- 특정 컨테이너만 보려면 이름을 지정:
```bash
docker stats web-container   # 지정한 컨테이너만 표시
```

### `docker inspect` — 상세 설정 정보
```bash
docker inspect web-container
```
- 네트워크 설정, 리소스 제한(Soft/Hard Limit), IP 주소, 프로세스 ID 등 방대한 JSON 상세 정보를 출력.
- 주로 필요한 정보(IP 주소, 컨테이너 이름, 연결된 네트워크 등)는 출력의 하단 부분에서 확인 가능.

### 실제 부하를 발생시켜 변화 확인
- 두 번째 터미널을 열어 컨테이너 내부에서 명령을 실행하며 `docker stats` 창의 변화를 관찰:
```bash
docker exec -it web-container bash
apt update -y   # 컨테이너 내부에서 실제 작업 실행
```
- 이 명령이 실행되는 동안 `docker stats`의 CPU 사용률이 일시적으로 급등(예: 79.94% → 97.84% → 33% → 다시 안정)했다가 명령이 끝나면 다시 낮아짐 — 실제 작업량이 지표에 즉시 반영됨을 확인.

## 요약
- Prometheus나 cAdvisor 없이도 `docker stats`(CPU·메모리·네트워크·블록 I/O·PID 실시간 갱신)와 `docker inspect`(네트워크·리소스 제한 등 상세 정보)만으로 컨테이너 리소스를 모니터링할 수 있으며, 컨테이너 내부에서 실제 작업(`apt update` 등)을 실행하면 `docker stats`의 CPU 사용률이 즉시 반응해 오르내리는 것을 확인할 수 있다.
