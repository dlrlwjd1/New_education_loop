# Docker Metrics CPU, Memory, and Network Usage - Real-Time Monitoring with Docker stats and cAdvisor

## 개요
- 컨테이너 내부에서 패키지를 설치하며 `docker stats`의 CPU·메모리 변화를 재확인하고, cAdvisor를 Prometheus 없이 단독(standalone)으로 실행해 자체 UI로 컨테이너를 모니터링한 뒤 전체 환경을 정리.

## 내용
### 컨테이너 내부 작업으로 부하 재확인
```bash
docker exec -it web-container bash
apt install iputils-ping    # ping 유틸리티 설치 — 설치 중 CPU/메모리 스파이크 확인
apt install apache2-utils   # 다른 패키지로도 동일하게 스파이크 확인 후 안정화
```
- `docker stats`는 **외부 도구(Prometheus, cAdvisor) 없이도** 실시간 리소스 변화를 그대로 보여줌.

### cAdvisor를 Prometheus 없이 단독 실행
```bash
docker run -d \
  --name cadvisor \
  -p 8081:8080 \
  -v /:/rootfs:ro \
  -v /var/run:/var/run:ro \
  -v /sys:/sys:ro \
  -v /var/lib/docker:/var/lib/docker:ro \
  gcr.io/cadvisor/cadvisor:latest
```
- 이전 실습에서 Docker Compose로 Prometheus와 함께 구성했던 것과 동일한 볼륨 마운트를 그대로 사용하되, 이번엔 **cAdvisor 단독으로 컨테이너 실행**(포트는 8080이 이미 사용 중이 아니라면 8080도 가능, 여기서는 8081 사용).
```bash
docker ps -a   # cadvisor 컨테이너가 실행 중임을 확인
```

### cAdvisor 자체 UI로 확인
- `http://<Public IP>:8081` 접속 → cAdvisor 콘솔.
- **Docker Containers** 메뉴에서 실행 중인 3개 컨테이너(Nginx, cAdvisor, MySQL) 모두 확인.
- 각 컨테이너를 클릭하면 네트워크 사용량, 메모리 사용량 등 앞서 Prometheus 연동 시 봤던 것과 동일한 통계를 cAdvisor 자체 UI에서 바로 확인 가능(cAdvisor는 **Docker 내장 도구가 아니라 외부 도구**라는 점에 유의).

### 전체 정리
```bash
docker stop <컨테이너1> <컨테이너2> <컨테이너3>
docker rm <컨테이너1> <컨테이너2> <컨테이너3>
docker images
docker system prune -a
```
- **`docker system prune -a`** — 정지된 컨테이너, 미사용 네트워크, 미사용/댕글링 이미지, 빌드 캐시를 한 번에 모두 정리.
```bash
docker images   # 아무것도 없음
docker ps -a     # 아무것도 없음
```

## 요약
- `docker stats`만으로도 컨테이너 내부 작업(패키지 설치 등)에 따른 실시간 리소스 변화를 확인할 수 있으며, cAdvisor는 Prometheus 없이도 단독으로 실행해 자체 UI(포트 8081 등)로 컨테이너별 통계를 볼 수 있는 외부 도구이고, 실습 마무리는 `docker system prune -a`로 컨테이너·이미지·네트워크·빌드 캐시를 한 번에 정리한다.
