# Implement messaging using RabbitMQ

## 개요
- `amqplib`로 producer와 consumer 프로그램을 만드는 절차, RabbitMQ의 라우팅 흐름, 서버 콘솔에서 큐를 확인하는 방법을 다루는 강의

## 내용

### 구현 절차
1. **프로젝트에 `amqplib` 를 설치**한다.
2. **메시지를 생산하는 프로그램(producer)** 을 작성한다.
3. **메시지를 소비하는 프로그램(consumer)** 을 작성한다.

### producer 코드
1. **`amqplib` 의존성을 import** 한다.
2. **RabbitMQ 서버에 연결**한다.
3. **큐로 메시지를 보낼 채널(channel)과 큐를 생성**한다. 큐에는 이름을 준다 — 예: **`test que`**
4. **큐로 메시지를 보낸다.**

### consumer 코드
1. **`amqplib` 의존성을 import** 한다.
2. **RabbitMQ 서버에 연결**을 만든다.
3. **큐에서 메시지를 받을 채널을 생성**하고, **그 이름의 큐가 존재하는지 확인**한다.
4. **큐에서 메시지를 소비**한다.

### RabbitMQ의 라우팅 흐름
"Hello world" 메시지를 예로 한 라우팅:
1. **publisher가 메시지를 발행**한다. **메시지는 큐로 직접 발행되지 않는다.** publisher는 메시지를 **exchange로 보낸다.**
2. **exchange** 는 RabbitMQ에서 **가상 호스트(virtual host)에 의해 정의되는 메시지 라우팅 에이전트**다.
3. **exchange가 메시지를 큐로 라우팅**한다. **큐는 메시지가 저장되는 곳**이다.
4. **consumer가 큐에서 메시지를 소비**한다.

### 서버 콘솔에서 확인
- RabbitMQ 서버에 큐의 메시지들이 목록으로 표시된다.
- **그래프**는 큐의 **메시지 전송률(message rates)** 을 나타낸다.
- **표**는 큐에 등록된 **메시지 consumer 목록**을 보여 준다.

## 예시

```bash
npm install amqplib
```

```javascript
// producer.js
const amqp = require('amqplib');

async function produce() {
  // ② RabbitMQ 서버에 연결
  const connection = await amqp.connect('amqp://localhost');

  // ③ 채널과 큐 생성
  const channel = await connection.createChannel();
  const queue = 'test que';
  await channel.assertQueue(queue);

  // ④ 큐로 메시지 전송
  channel.sendToQueue(queue, Buffer.from('Hello world'));
  console.log('message sent');
}

produce();
```

```javascript
// consumer.js
const amqp = require('amqplib');

async function consume() {
  // ② RabbitMQ 서버에 연결
  const connection = await amqp.connect('amqp://localhost');

  // ③ 채널 생성 + 큐 존재 확인
  const channel = await connection.createChannel();
  const queue = 'test que';
  await channel.assertQueue(queue);

  // ④ 큐에서 메시지 소비
  channel.consume(queue, (message) => {
    console.log(message.content.toString());
    channel.ack(message);
  });
}

consume();
```

```text
[라우팅 흐름]
publisher ──publish──> [exchange] ──route──> [queue] ──consume──> consumer
                        (가상 호스트가 정의)   (메시지 저장)

메시지는 큐로 직접 발행되지 않는다 — 항상 exchange를 거친다
```

```text
[서버 콘솔 (http://localhost:15672)]
그래프 → 큐의 message rates
표     → 큐에 등록된 consumer 목록
```

| 단계 | producer | consumer |
|---|---|---|
| 1 | `amqplib` import | `amqplib` import |
| 2 | 서버 연결 | 서버 연결 |
| 3 | 채널 + 큐 생성 | 채널 생성 + 큐 존재 확인 |
| 4 | 큐로 메시지 전송 | 큐에서 메시지 소비 |

## 요약
- `amqplib`를 설치하고 producer와 consumer 두 프로그램을 작성하는 것이 구현의 전부다.
- 양쪽 모두 서버 연결 → 채널 생성 → 큐 확보 순서를 따르고, 마지막 단계만 전송과 소비로 갈린다.
- 메시지는 큐로 직접 발행되지 않고 가상 호스트가 정의한 exchange를 거쳐 큐로 라우팅된다.
- 서버 콘솔의 그래프로 메시지 전송률을, 표로 등록된 consumer 목록을 확인한다.
