# Storage and Volumes in Docker - Demonstration - Creating and Listing Docker Volumes

## 개요
- Docker Volume을 생성하고 실제 저장 경로를 확인한 뒤, Ubuntu 컨테이너에 볼륨을 마운트해 실행하는 실습.

## 내용
### 사전 확인
```bash
docker --version
systemctl status docker   # active 확인
```

### 볼륨 생성과 목록 확인
```bash
docker volume ls                # 처음엔 비어 있음
docker volume create my_volume  # 볼륨 생성
docker volume ls                # my_volume 확인
```

### 볼륨의 실제 저장 위치 확인
```bash
docker inspect my_volume
```
- 볼륨은 Docker의 홈 디렉터리인 **`/var/lib/docker/volumes/my_volume/_data`** 경로에 실제로 생성됨.
```bash
ls -al /var/lib/docker/volumes/my_volume/_data   # 아직 컨테이너에 마운트 전이라 비어 있음
```
- 이 볼륨을 컨테이너에 마운트하면, 컨테이너가 쓰는 모든 데이터가 실제로는 이 경로에 저장되며, 컨테이너가 죽어도 같은 볼륨을 다시 매핑하면 동일한 데이터를 그대로 사용할 수 있음.

### 볼륨을 마운트해 컨테이너 실행
```bash
docker run -itd --name data-persistence -v my_volume:/app ubuntu
```
- **`-itd`** — Interactive + Terminal + Detach(백그라운드) 모드를 함께 지정.
- **`-v my_volume:/app`** — `my_volume`을 컨테이너 내부의 `/app` 경로에 마운트(콜론 왼쪽이 볼륨 이름, 오른쪽이 컨테이너 내부 경로).
- 이미지로 Ubuntu 사용.
```bash
docker ps -a   # data-persistence 컨테이너가 Up 상태로 실행 중임을 확인
```

## 요약
- `docker volume create`로 만든 볼륨은 실제로 `/var/lib/docker/volumes/<볼륨명>/_data` 경로에 생성되며, `docker run -itd --name <이름> -v <볼륨명>:<컨테이너 경로> <이미지>`로 이 볼륨을 컨테이너에 마운트하면 컨테이너가 그 경로에 쓰는 데이터가 실제로는 Docker Host의 해당 볼륨 디렉터리에 저장된다.
