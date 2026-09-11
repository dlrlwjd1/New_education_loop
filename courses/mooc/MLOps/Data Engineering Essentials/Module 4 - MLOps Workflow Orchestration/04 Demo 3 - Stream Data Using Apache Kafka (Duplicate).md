# Demo 3: Stream Data Using Apache Kafka (중복 항목)

## 개요
- 이 항목은 Module 3의 [`05 Demo 3 - Stream Data using Apache Kafka.md`](../Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/05%20Demo%203%20-%20Stream%20Data%20using%20Apache%20Kafka.md)와 **완전히 동일한 영상**(트랜스크립트 100% 일치 — Kafka 프로듀서 실행 → 컨슈머 작성·실행 → 프로듀서 중지/재시작 시 컨슈머 동작 확인)이다.
- MOOC 플랫폼상 Module 4에 잘못 재배치되었거나 중복 등록된 것으로 보인다(Module 4는 원래 Airflow/Prefect 오케스트레이션을 다루는 모듈인데, 이 항목만 Kafka 컨슈머 데모임).

## 내용
- 상세 내용은 Module 3의 동일 파일을 참고할 것 — Kafka 컨슈머 스크립트 작성(`KafkaConsumer`, 역직렬화, 메시지 출력 루프)과, 프로듀서-컨슈머 간 실시간 메시지 흐름 검증(프로듀서 중지 시 컨슈머 대기, 재시작 시 즉시 재개)을 다룬다.

## 요약
- 새로운 내용이 아니라 Module 3의 Kafka 컨슈머 데모가 그대로 반복된 항목이므로, 별도 요약 없이 원본 노트를 참조한다.
