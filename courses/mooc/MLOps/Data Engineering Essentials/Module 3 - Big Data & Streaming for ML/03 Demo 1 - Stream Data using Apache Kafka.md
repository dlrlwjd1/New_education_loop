# Demo 1: Stream Data using Apache Kafka

## 개요
- KodeKloud 플레이그라운드 랩에서 Python 가상환경을 설정하고 Docker Compose로 ZooKeeper + Kafka 클러스터를 띄우는 환경 구축 과정을 다루는 3분 데모(Kafka 실습 Part 1).

## 내용

### Apache Kafka — 이벤트 버스(Event Bus)
- Kafka는 **이벤트 버스** — 하나의 프로그램이 정보를 Kafka에 수집(ingest)하면, 여러 다른 프로그램들이 이를 실시간으로 소비(consume)할 수 있음.
- 이번 데모에서는 아주 기본적인 설정으로 Kafka가 메시지 버스로서 어떻게 동작하는지 구현.

### 환경 설정
1. `sudo apt update`로 환경 업데이트.
2. Python 3, Python 3 pip, Python 3 virtualenv 패키지 설치.
3. `python3 -m virtualenv kafka_venv`로 가상환경 생성 후 활성화.
   - 가상환경을 사용하는 이유: Python 패키지들은 운영체제에 설치되는데, 새 패키지 설치 시 기존 패키지와 충돌이 발생할 수 있음 — 이를 피하기 위해 가상환경을 만들어 터미널에 연결하고, 그 안에서 작업을 격리.
4. Python으로 Kafka와 상호작용하는 데 필요한 패키지들 설치.

### Docker Compose로 Kafka 클러스터 실행
- `vim docker-compose.yaml`로 Docker Compose 파일 작성:
  - **Confluent의 ZooKeeper 이미지**를 가져옴 — ZooKeeper는 Kafka 클러스터를 관리하는 데 필요.
  - **Confluent Kafka 이미지**를 가져옴 — 이는 ZooKeeper 이미지에 의존하므로, ZooKeeper 풀(pull)이 실패하면 Kafka도 실패.
  - Kafka는 **포트 9092**로 상호작용 가능하도록 설정.
- `docker-compose up -d`로 환경 실행(`-d`는 컨테이너를 터미널에서 분리해 백그라운드로 실행) — ZooKeeper와 Kafka 이미지를 가져와 두 컨테이너를 설정.

## 예시
```bash
# 환경 업데이트 및 패키지 설치
sudo apt update
sudo apt install python3 python3-pip python3-virtualenv

# 가상환경 생성 및 활성화
python3 -m virtualenv kafka_venv
source kafka_venv/bin/activate
```

```yaml
# docker-compose.yaml (개념 구조)
version: '3'
services:
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    ports:
      - "9092:9092"
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
```

```bash
# Kafka 클러스터 백그라운드 실행
docker-compose up -d
```

## 요약
- 이 데모는 Python 가상환경 격리와 Docker Compose(ZooKeeper + Kafka)를 통해 로컬 Kafka 클러스터를 띄우는 환경 구축 과정을 다루며, 다음 데모에서 실제 프로듀서·컨슈머 코드로 이어질 기반을 마련한다.
