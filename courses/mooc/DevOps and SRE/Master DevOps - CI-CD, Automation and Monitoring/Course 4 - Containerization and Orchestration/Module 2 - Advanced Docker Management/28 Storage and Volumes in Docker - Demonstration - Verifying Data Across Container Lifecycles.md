# Storage and Volumes in Docker - Demonstration - Verifying Data Across Container Lifecycles

## 개요
- 볼륨이 마운트된 경로(`/app`)와 마운트되지 않은 경로(`/root`)에 각각 파일을 만든 뒤 컨테이너를 삭제·재생성해, 볼륨 경로의 데이터만 살아남는 것을 실제로 검증.

## 내용
### 컨테이너 내부에서 마운트 확인
```bash
docker exec -it data-persistence bash
df -kh   # /app이 마운트되어 있고, Docker Host의 루트 파일시스템 크기가 표시됨(볼륨이 그 경로의 데이터를 가져오기 때문)
```

### 두 경로에 각각 파일 생성 — 하나는 볼륨, 하나는 이미지 기반
```bash
cd /app
touch file1 file2 file3   # 볼륨(my_volume)에 저장되는 경로

cd /root
touch file1 file2 file3   # 이미지에서 온 일반 경로 (볼륨 아님)
```
- `ls -al /app`, `ls -al /root` 모두 파일 3개씩 확인.

### 컨테이너 삭제
```bash
exit
docker rm -f data-persistence
```
- 컨테이너는 완전히 삭제되지만, `/app`은 애초에 `my_volume`을 가리키던 경로였으므로 **Docker Host의 볼륨 디렉터리(`/var/lib/docker/volumes/my_volume/_data`)에는 파일이 그대로 남아있음**(직접 확인 가능).

### 같은 볼륨을 다시 마운트해 새 컨테이너 생성
```bash
docker volume ls   # 볼륨 이름 확인(my_volume)
docker run -itd --name data-persistence-2 -v my_volume:/app ubuntu
docker exec -it data-persistence-2 bash
```
- **`/root` 확인** — file1/2/3이 **존재하지 않음**(이미지에서 온 경로였고 볼륨의 뒷받침이 없었으므로 새 컨테이너에는 반영되지 않음).
- **`/app` 확인** — file1/2/3이 **그대로 존재**(같은 볼륨을 재매핑했기 때문).
- `/app`에 파일을 추가로 생성(`touch file4 file5`)한 뒤 컨테이너를 빠져나와도, Docker Host의 `/var/lib/docker/volumes/my_volume/_data` 경로에서 file1~file5가 모두 확인됨.

## 요약
- 컨테이너 내부에서 볼륨이 마운트된 경로(`/app`)에 저장한 데이터는 컨테이너가 삭제되어도 Docker Host의 볼륨 디렉터리에 그대로 남아있어 같은 볼륨을 다시 마운트하면 그대로 복원되는 반면, 볼륨이 뒷받침되지 않은 일반 경로(`/root`)의 데이터는 컨테이너와 함께 완전히 사라진다는 것을 직접 확인한 실습이다.
