# Using Prometheus to Query and Visualize Docker Metrics - Adding a MySQL Container

## 개요
- MySQL 컨테이너를 추가로 실행해 Grafana 대시보드에서 5개 컨테이너를 확인하려 했으나, 실습 서버의 메모리 부족(1GB)으로 인해 문제가 발생하고 이를 해결하는 과정.

## 내용
### MySQL 컨테이너 추가
```bash
docker run -d --name mysql-server \
  -e MYSQL_ROOT_PASSWORD=root123 \
  -e MYSQL_DATABASE=test_db \
  mysql:latest
docker ps -a   # 5개 컨테이너(Prometheus, cAdvisor, Grafana, Nginx, MySQL) 확인
```

### 메모리 부족 문제 발생
- Grafana 대시보드를 새로고침해도 5개 컨테이너가 제대로 반영되지 않고 응답이 느려짐.
```bash
docker stats   # 명령 자체가 응답하지 않을 정도로 서버 부하 심각
```
- 원인: 실습에 사용 중인 AWS 서버가 **총 메모리 1GB**밖에 되지 않는데, MySQL 컨테이너 하나가 이전 세션 기준 약 450MB 이상을 소비 — 서버 전체 메모리의 상당 부분을 잠식.

### 문제 해결 시도
1. `docker rm -f mysql-server`로 MySQL 컨테이너를 강제 삭제하려 했으나 서버가 응답하지 않음.
2. 결국 **AWS 콘솔에서 인스턴스를 재부팅(Reboot)** — 이 인스턴스는 스팟 인스턴스(Spot Instance)라 직접 정지(Stop)는 불가능하고 재부팅 또는 종료(Terminate)만 가능.
3. 재부팅되면 모든 컨테이너가 함께 종료되므로, 서버가 다시 살아난 뒤 필요한 컨테이너들을 다시 실행하고 Grafana 대시보드에서 다시 확인할 계획.

## 요약
- 리소스가 제한된(1GB RAM) 실습 서버에서 MySQL 같은 무거운 컨테이너를 추가로 실행하면 메모리 부족으로 `docker stats`조차 응답하지 않을 정도로 서버가 다운될 수 있으며, 이 경우 컨테이너를 직접 정리하기 어려우면 인스턴스 자체를 재부팅해 상태를 초기화하고 다시 컨테이너를 구성하는 것이 실질적인 해결책이 된다.
