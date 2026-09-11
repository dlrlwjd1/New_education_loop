# Demo 3: Stream Data using Apache Kafka

## 개요
- 앞선 데모의 프로듀서를 실행하고, 새로 작성한 Kafka **컨슈머(consumer)** 스크립트로 메시지를 소비해 실시간 프로듀서-컨슈머 흐름을 완성하는 4분 데모(Kafka 실습 Part 3, 마지막 파트).

## 내용

### 프로듀서 실행
- `python3 kafka_producer.py` 실행 → 랜덤 값들이 생성되어 화면에 출력됨과 동시에 Kafka의 `sample_topic`에도 저장됨.

### Kafka 컨슈머 스크립트 작성
- 새 터미널을 열고 동일한 가상환경(`source kafka_venv/bin/activate`)을 다시 활성화.
- `kafka_consumer.py` 작성:
  - `create_consumer()` 함수 — Kafka 토픽 이름 지정, **오프셋(offset)**과 자동 커밋(auto commit) 관련 설정(이 시점에서는 자세히 다루지 않음), 그리고 전송 시 직렬화(serialize)/인코딩된 정보를 **역직렬화(deserialize)**해 디코딩.
  - `kafka` 패키지에서 `KafkaConsumer` 임포트.
  - 메인 함수: `for message in consumer:` 루프로 컨슈머가 받는 모든 메시지를 출력.

### 실행 결과 — 실시간 프로듀서-컨슈머 흐름
- `python3 kafka_consumer.py` 실행 → 토픽에 있던 모든 메시지가 화면에 출력됨.
- 프로듀서 터미널에서 발행되는 최신 메시지(예: 85.73)가 컨슈머 터미널에도 그대로 나타남 — 지속적으로 생산되는 정보가 지속적으로 소비되는 것을 실시간으로 확인.

### 실전 활용 가능성
- 이 예시는 단순해 보이지만, 실제로는 이 정보로 평균값을 계산하고, 평균값이 특정 임계값 미만이면 이메일 발송·알림 발송 같은 액션을 취할 수 있음 — 값은 온도일 수도, 계좌 금액일 수도 있음.
- Kafka의 역할: 모든 정보를 저장하고, 여러 컨슈머가 동시에 이 정보를 소비할 수 있게 함.

### 프로듀서를 멈추면 어떻게 되는가
- 터미널 1에서 `Ctrl+C`로 프로듀서 중지 → 컨슈머는 여전히 실행 중이며, 토픽에 새 정보가 없으므로 아무것도 출력하지 않고 대기.
- 프로듀서를 다시 시작(예: 첫 값 74.47) → 컨슈머가 다시 해당 값을 즉시 소비·출력.
- 이는 Kafka가 "이벤트 버스" 혹은 "중앙 신경계" 역할을 한다는 것을 명확히 보여줌 — 프로듀서가 생성한 모든 메시지를 저장하고, 컨슈머가 이를 소비.

## 예시
```python
# kafka_consumer.py (개념 구조)
from kafka import KafkaConsumer

def create_consumer(topic):
    return KafkaConsumer(
        topic,
        bootstrap_servers='localhost:9092',
        auto_offset_reset='earliest',
        enable_auto_commit=True,
        value_deserializer=lambda x: x.decode('utf-8')
    )

if __name__ == "__main__":
    consumer = create_consumer("sample_topic")
    for message in consumer:
        print(message.value)
```

## 요약
- 이 데모는 `KafkaConsumer`로 프로듀서가 발행한 메시지를 실시간으로 소비하는 흐름을 완성하며, 프로듀서를 멈춰도 컨슈머가 대기 상태를 유지하다가 프로듀서 재시작 시 즉시 소비를 재개하는 모습을 통해 Kafka가 프로듀서와 컨슈머 사이의 비동기 이벤트 버스로 동작함을 실증한다.
