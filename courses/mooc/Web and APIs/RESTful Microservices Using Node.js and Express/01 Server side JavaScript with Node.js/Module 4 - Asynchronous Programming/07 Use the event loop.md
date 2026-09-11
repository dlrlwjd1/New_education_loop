# Use the event loop

## 개요
- Node.js의 심장인 **이벤트 루프** — 시작 방식, 비동기 처리(워커 스레드 풀), **5단계(timers·pending callbacks·poll·check·close callbacks)**, refs 카운터와 종료, **`process.nextTick`** 과 마이크로태스크 큐, `nextTick` vs `setTimeout` — 을 설명하는 강의

## 내용

### 이벤트 루프란
- Node.js의 **심장이자 영혼**이며 비동기 연산을 효과적으로 수행하게 한다. **가장 오래된 작업부터** 실행한다.
- Node.js 환경이 시작될 때 이벤트 루프가 시작된다 — Node.js가 이벤트 루프를 초기화하고, 입력 스크립트를 처리하고(비동기 API 호출·타이머 예약 가능), 이벤트 루프 처리를 시작한다.
- **콜백과 Promise** 를 쓸 수 있게 해 준다. **여러 단계(phase)** 로 비동기 함수를 처리하며 **각 단계에 콜백 큐**가 있다.

### 비동기 연산 처리
- 이벤트 루프는 들어오는 파일 자체를 다루지 않고 **콜백을 다룬다.** 파일 읽기·네트워크 호출 같은 오래 걸리는 비동기 연산은 **워커 스레드 풀**에 보낸다 — 풀이 무거운 일을 하고 여러 스레드를 돌리며 OS와 연결되지만 코드와는 분리되어 있다.
- 연산이 끝나면 워커 스레드가 그 연산의 **콜백을 트리거**하고 Node.js가 콜백을 실행한다.
- `setTimeout`은 **타이머 콜백**으로 이벤트 루프의 **타이머 큐**에 줄을 선다.

### 5단계
| 단계 | 실행하는 것 |
|---|---|
| **timers** | `setTimeout`·`setInterval`이 예약한 콜백 |
| **pending callbacks** | 파일·네트워크 등 I/O 연산과 블로킹 연산. 블로킹 연산이 너무 많이 쌓이면 다음 단계로 넘어가 **다음 반복**에서 완료 |
| **poll** | 새 I/O 이벤트를 찾아 가능하면 **즉시** 콜백 실행. 안 되면 pending callback으로 표시해 다음 반복에서 실행. 이 단계에서 **대기 중인 타이머 콜백이 있는지 확인**하고 있으면 **타이머 단계로 돌아가** 실행 |
| **check** | **`setImmediate`** 콜백. 타이머 콜백 비슷하지만 현재 반복에서 실행된 콜백 **직후** 실행 |
| **close callbacks** | `socket.on('close')` 같은 **close 이벤트** 콜백 |

### 종료 조건
- 이벤트 루프는 처리한 콜백을 **카운터**로 추적한다. 콜백이 실행되면 카운터가 줄고, 등록된 콜백이 남지 않아 **`refs` 변수가 0** 이 되면 이벤트 루프가 **종료**한다.

### 콜백 큐 두 가지
- 각 단계에 타이머·I/O·immediate·close용 콜백 큐가 있다. 중요한 큐 둘:
  - **`process.nextTick`** — 이벤트 루프의 한 단계 **직후에 무언가를 즉시 실행**하려면 쓴다. `setImmediate`와 비슷하지만 `setImmediate`는 **I/O poll 단계 뒤에만** 실행되고, `nextTick`은 전체 루프를 기다리지 않고 **어느 단계가 끝나든 즉시** 실행된다. 이벤트 루프 한 사이클을 **틱(tick)** 이라 한다.
  - **마이크로태스크 큐** — **Promise가 해결(resolve)되는 큐**. I/O·타이머 작업이 더 없으면 이벤트 루프가 종료하고, 아니면 큐가 빌 때까지 실행한다.

### `process.nextTick`
- `process`는 Node.js 코어 API가 제공하는 소수의 **전역 객체** 중 하나라 어디서든 접근할 수 있다.
- 실시간 앱 개발자들이 **함수 실행을 다음 이벤트 루프 반복까지 미루기** 위해 `process.nextTick`을 쓴다. 다음 반복에서 실행되므로 **시간에 묶이지 않은 콜백**만 받는다.
- **언제 쓰나**: 불필요한 자원 정리, 사용자가 오류를 처리하게 허용, 다음 반복 시작 전에 요청 실행 시도, **콜 스택 뒤·다음 반복 전에** 콜백 실행 허용.
- 이벤트 루프가 모든 단계를 한 바퀴 돌면 **틱** 이다. `process.nextTick`에 함수를 넘기면 **현재 틱 끝, 다음 틱 시작 전에** 호출하라고 엔진에 지시하는 것이다.

### `nextTick` vs `setTimeout`
- 비슷해 보이지만 **`setTimeout`은 다음 틱 끝에**(훨씬 뒤에) 실행되고, **`nextTick`은 다음 틱 시작 직전에 우선** 실행된다.

## 예시
```javascript
console.log('start');

setTimeout(() => console.log('timeout 0'), 0);        // timers 단계
setImmediate(() => console.log('immediate'));         // check 단계 (poll 뒤)
process.nextTick(() => console.log('nextTick'));      // 현재 틱 끝, 다음 틱 전 — 최우선
Promise.resolve().then(() => console.log('promise')); // 마이크로태스크 큐

console.log('end');
// start → end → nextTick → promise → timeout 0 → immediate
```

```text
이벤트 루프 한 틱
┌─▶ timers ─▶ pending callbacks ─▶ poll ─▶ check ─▶ close callbacks ─┐
│    (setTimeout/       (I/O 콜백)      (새 I/O,   (setImmediate) (close 이벤트)│
│     setInterval)                      타이머 확인)                          │
└───────────────────────────── refs > 0 이면 반복 ────────────────────────────┘
각 단계 사이: process.nextTick 큐 → 마이크로태스크(Promise) 큐 비우기
refs == 0 → 종료
```

| | `process.nextTick` | `setImmediate` | `setTimeout(fn, 0)` |
|---|---|---|---|
| 실행 시점 | 현재 단계 직후, 다음 틱 전 | poll 단계 뒤(check) | 다음 틱의 timers 단계 |
| 우선순위 | 가장 높음 | 중간 | 가장 낮음 |

## 요약
- 이벤트 루프는 Node 시작 시 초기화되어 가장 오래된 작업부터 처리하며, 오래 걸리는 I/O는 워커 스레드 풀에 맡기고 완료된 콜백만 실행한다.
- 한 틱은 timers → pending callbacks → poll(타이머 확인 후 되돌아갈 수 있음) → check(setImmediate) → close callbacks 5단계이며, refs가 0이 되면 종료한다.
- `process.nextTick`은 어느 단계가 끝나든 즉시(다음 틱 전) 실행되어 `setImmediate`·`setTimeout`보다 우선하고, Promise 해결은 마이크로태스크 큐에서 처리된다.
