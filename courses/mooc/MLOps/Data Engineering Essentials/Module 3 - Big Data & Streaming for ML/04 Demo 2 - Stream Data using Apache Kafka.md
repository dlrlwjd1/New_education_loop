# Demo 2: Stream Data using Apache Kafka

## 개요
- Kafka **토픽(topic)**의 개념을 설명하고 실제로 토픽을 생성한 뒤, Python `kafka` 패키지로 랜덤 메시지를 지속적으로 발행(produce)하는 프로듀서 스크립트를 작성하는 4분 데모(Kafka 실습 Part 2).

## 내용

### Kafka 토픽 확인·컨테이너 확인
- 컨테이너 중 하나에 로그인해 Kafka 명령으로 토픽 목록 확인 → 아직 토픽이 없어 아무것도 나타나지 않음.
- `docker container ls`로 실행 중인 컨테이너 2개(ZooKeeper, Kafka) 확인.

### Kafka 토픽이란
- Kafka는 이벤트 버스이므로, 여러 프로그램이 정보를 쏟아부으면 한곳에 다 모으는 것은 관리가 어려움.
- 각 프로그램은 관련 정보를 **토픽**에 수집(ingest)하고, 이를 소비하려는 쪽은 해당 토픽을 찾아감 — 예: IoT 관련 정보는 `iot` 토픽으로, 서버 관련 정보는 `server` 토픽으로.
- 토픽은 프로듀서의 정보나 발생하는 이벤트를 조직적으로 저장하는 분리된 방식이며, 확장 가능(scalable)하다는 장점이 있음(세부사항은 이 영상에서 다루지 않음).
- Kafka를 시작하려면 토픽 생성이 필수.

### 토픽 생성과 속성 확인
- 컨테이너에 연결해 Kafka 명령으로 토픽 생성 → 다시 목록을 조회해 생성 확인.
- `describe` 명령으로 토픽의 속성(파티션 수, 복제 팩터 등) 확인 가능.
- 예시에서는 **파티션 수 1, 복제 팩터(replication factor) 1**로 설정 — 복제를 늘리려면 인프라도 함께 늘려야 함(서버에 볼륨 추가 등). 토픽 생성 시 필요한 복제 팩터와 파티션 수를 신중히 결정해야 함.

### Python Kafka 프로듀서 스크립트 작성
- `vim kafka_producer.py`로 파일 생성 — 핵심 함수 2개: `create_producer()`(프로듀서 생성), `generate_message()`(메시지 생성).
- `kafka` 패키지에서 `KafkaProducer`를 임포트 → 로컬호스트의 부트스트랩 서버(bootstrap server)로 Kafka에 연결.
- 메시지에는 타임스탬프(datetime, 랜덤 생성)와 값(value, 랜덤 생성)이 포함됨.
- 메인 함수: 프로듀서 생성 → **토픽(topic) 필수** 지정(토픽 없이는 Kafka에 정보를 발행할 수 없음) → `producer.send(topic_name, message)`로 생성된 메시지를 `sample_topic`에 전송 → 1초씩 sleep하며 반복(키보드 인터럽트로 예외가 발생할 때까지 계속).

## 예시
```bash
# 컨테이너 확인
docker container ls

# 토픽 목록 확인
docker exec -it <kafka-container> kafka-topics --list --bootstrap-server localhost:9092

# 토픽 생성
docker exec -it <kafka-container> kafka-topics --create --topic sample_topic \
    --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1

# 토픽 속성 확인
docker exec -it <kafka-container> kafka-topics --describe --topic sample_topic \
    --bootstrap-server localhost:9092
```

```python
# kafka_producer.py (개념 구조)
import time
import random
from datetime import datetime
from kafka import KafkaProducer

def create_producer():
    return KafkaProducer(bootstrap_servers='localhost:9092')

def generate_message():
    return {
        "timestamp": str(datetime.now()),
        "value": random.randint(1, 100)
    }

if __name__ == "__main__":
    producer = create_producer()
    topic = "sample_topic"
    try:
        while True:
            message = generate_message()
            producer.send(topic, str(message).encode('utf-8'))
            time.sleep(1)
    except KeyboardInterrupt:
        pass
```

## 요약
- 이 데모는 Kafka 토픽 생성(파티션·복제 팩터 설정 포함)과, Python `kafka` 패키지로 `KafkaProducer`를 만들어 무작위 타임스탬프·값 메시지를 1초 간격으로 특정 토픽에 계속 발행하는 프로듀서 스크립트 작성을 다룬다.
