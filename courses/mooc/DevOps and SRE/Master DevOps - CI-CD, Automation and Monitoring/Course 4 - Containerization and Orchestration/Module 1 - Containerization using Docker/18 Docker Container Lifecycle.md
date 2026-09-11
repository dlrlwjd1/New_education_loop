# Docker Container Lifecycle

## 개요
- Docker 컨테이너가 생성부터 삭제까지 거치는 상태(Created, Running, Paused, Stopped, Deleted)와 각 상태를 전환하는 명령어를 정리.

## 내용
### 컨테이너 라이프사이클이란
- 컨테이너가 생성(creation)부터 삭제(deletion)까지 거치는 일련의 상태(state) 순서.

### 주요 상태
1. **Created(생성됨)** — `docker container create` 실행 시 컨테이너가 Docker Host에 만들어지지만 아직 시작되지 않은 상태 — 컨테이너 안의 애플리케이션에 접근 불가.
2. **Running(실행 중)** — 컨테이너가 시작되어 모든 프로세스와 함께 동작 중인 상태 — 컨테이너 안의 애플리케이션과 상호작용 가능.
3. **Paused(일시정지)** — 컨테이너의 프로세스를 잠시 보류(hold)한 상태.
4. **Stopped(정지됨)** — 컨테이너 안의 애플리케이션·프로세스가 완전히 종료된 상태(컴퓨터를 종료한 것과 유사) — 필요하면 다시 시작 가능.
5. **Deleted(삭제됨)** — 컨테이너가 Docker Host에서 영구적으로 제거된 상태.

### 상태 전환 명령어
```bash
docker container create   # Created 상태로 컨테이너 생성 (아직 미실행)
docker container start    # Created → Running (생성된 컨테이너를 시작)
docker container run      # create + start를 한 번에 수행 (생성과 동시에 실행)

docker container pause    # Running → Paused
docker container unpause  # Paused → Running (다시 재개)

docker container stop     # Running → Stopped (프로세스 종료)
docker container start    # Stopped → Running (다시 시작 가능)

docker container rm       # Stopped 상태의 컨테이너를 영구 삭제
```
- **`docker container rm`(삭제)은 반드시 컨테이너가 Stopped 상태여야 실행 가능** — 실행 중인 컨테이너는 먼저 정지시킨 뒤에만 삭제할 수 있음.

## 요약
- Docker 컨테이너는 `create`(생성) → `start`(실행, 혹은 `run`으로 한 번에 생성+실행) → 필요 시 `pause`/`unpause`(일시정지/재개) → `stop`(정지) → `rm`(삭제, 반드시 정지 상태에서만 가능)이라는 라이프사이클을 거치며, 이는 컴퓨터를 켜고 끄는 것과 유사한 방식으로 관리된다.
