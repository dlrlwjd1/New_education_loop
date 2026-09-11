# Storage and Volumes in Docker - Volumes

## 개요
- Docker Volume의 정의와 동작 원리, 이점(데이터 지속성·성능·데이터 공유), 그리고 볼륨 생성·마운트 명령어를 정리.

## 내용
### Volume이란
- Docker Host에 존재하는 디렉터리를 컨테이너 내부에 **마운트(mount)**하는 것 — 컨테이너가 그 경로에 쓰는 모든 데이터는 실제로는 Docker Host의 해당 디렉터리에 기록됨.
- 예: Ubuntu가 설치된 Docker Host 위에 Docker가 설치되어 있고, 그 위에서 MySQL 컨테이너를 실행한다고 할 때, Docker Host에 볼륨(디렉터리)을 만들어 컨테이너의 `/var/lib/mysql` 경로에 마운트하면, MySQL이 저장하는 데이터가 실제로는 이 볼륨(Docker Host의 디렉터리)에 저장됨.
- 이 볼륨은 완전히 **Docker가 관리**하는 스토리지 단위이며, 실제로는 Docker의 설치 경로인 **`/var/lib/docker/volumes`** 아래에 위치하는 디렉터리.

### Volume의 이점
1. **데이터 지속성(Persistence)** — 컨테이너가 죽어도 이미지로부터 새 컨테이너를 만들어 같은 볼륨을 다시 마운트하면 기존 데이터를 그대로 사용 가능 — 데이터는 볼륨(Docker Host)에 남아있기 때문.
2. **성능(Performance)** — Docker Host가 SSD, 충분한 RAM·CPU(예: 32~64GB RAM, 32~64 vCPU)를 갖추고 있다면, 데이터가 이 리소스가 풍부한 Docker Host에 저장되므로 데이터 저장·조회 속도가 빨라짐.
3. **데이터 공유(Data Sharing)** — 동일한 애플리케이션을 실행하는 여러 컨테이너(예: 고가용성을 위한 데이터베이스 컨테이너 2~3개)에 같은 볼륨을 마운트하면, 한 컨테이너가 만든 테이블·데이터를 다른 컨테이너들과 공유 가능.

### 볼륨 생성과 사용
```bash
docker volume create my_volume
```
- 볼륨 이름은 사용자가 직접 지정(예: `db-vol`, `web-app-vol`).

```bash
docker run -d --name <컨테이너 이름> -v my_volume:/app/data <이미지>
```
- **`-v my_volume:/app/data`** — Docker Host에 생성된 `my_volume`을 컨테이너 내부의 `/app/data` 경로에 마운트.
- 이 예시에서 `my_volume`이 컨테이너의 `/app/data` 디렉터리에 마운트됨.

## 요약
- Docker Volume은 Docker Host의 디렉터리를 컨테이너 내부 경로에 마운트해 데이터를 Docker Host에 실제로 저장함으로써, `docker volume create`로 만든 볼륨을 `docker run -v <볼륨>:<컨테이너 경로>`로 마운트하면 컨테이너가 삭제·재생성되어도 데이터가 유지(지속성)되고, Docker Host의 성능을 활용할 수 있으며, 여러 컨테이너 간 데이터를 공유할 수 있다.
