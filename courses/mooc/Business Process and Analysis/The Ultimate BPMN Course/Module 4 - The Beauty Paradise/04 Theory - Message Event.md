# Theory – Message Event

## 개요

- **Message event(메시지 이벤트)** — 외부 당사자와의 상호작용(interaction)을 표현하는 BPMN 요소
- **네 가지 유형**이 있으며 각각 프로세스의 **단계(stage)와 방향(direction)** 에 맞춰져 있다

## 내용

### 기본 개념

고객이 주문을 넣는 것처럼 **외부 당사자와의 상호작용**을 message event로 포착한다.

**message event의 장점은 유연성이다.**

> **메시지의 정확한 유형을 특정할 필요가 없다.** 이메일이든, 계좌 이체든, 심지어 실물 소포든 상관없다. 이런 종류의 상호작용에는 **항상 message event가 정답**이다.

### 네 가지 message event 유형

왜 네 개가 필요한가? **각각이 프로세스의 서로 다른 단계와 방향에 맞춰져 있기 때문이다.**

| 유형 | 방향 | 역할 |
|---|---|---|
| **Start message event** | 수신 | **메시지를 받으면 프로세스를 시작**한다. plain start event처럼 **테두리가 얇다** |
| **Catching intermediate message event** | 수신 | 프로세스 **진행 중에 받는 수신 메시지** |
| **Throwing intermediate message event** | 발신 | 프로세스 **진행 중에 보내는 발신 메시지** |
| **End message event** | 발신 | **메시지를 보내면서 프로세스를 종료**한다. 배송 확인이나 완료 통보 등 |

> 프로세스가 **물품 배송으로 완결된다면 end message event가 적합한 선택**이다.

### Task와 Event의 차이 — 중요한 구분

Bookworm 서점의 주문 프로세스 예시에서 강사가 짚는 핵심:

- **Task는 행동(action)을 정의한다** — "책과 송장을 보낸다"는 **행위**
- **Event는 그 일이 일어났다는 사실만 진술한다** — 추가 행동을 요구하지 않는다

> throwing intermediate message event는 **"배송이 발생했다"** 는 상태를 말할 뿐, 별도의 행동을 요구하지 않는다.

## 예시

```text
Bookworm 서점 주문 프로세스

(◉ Start message event)          ← 고객으로부터 주문 수신 → 프로세스 시작
   "주문 접수됨"
        ↓
   [주문 처리 task]
        ↓
   [책과 송장 발송]              ← Task: 보내는 "행동"
        ↓
   (◑ Throwing intermediate      ← Event: "배송이 일어났다"는 사실
      message event)                추가 행동 요구 없음
   "책과 송장 발송됨"
        ↓
   (◍ End message event)         ← 완료 통보와 함께 종료
```

**네 가지 유형의 위치**

```text
프로세스 시작 ──────────── 진행 중 ──────────── 종료

  Start           Catching / Throwing            End
  message         intermediate message           message
  event           event                          event
  (수신)          (수신) / (발신)                 (발신)
```

## 요약

- **Message event는 외부 당사자와의 상호작용**을 표현한다
- **메시지의 매체(이메일·이체·소포)를 특정할 필요가 없다** — 이것이 유연성의 핵심
- 네 가지 유형은 **단계(시작/중간/종료)와 방향(수신/발신)** 의 조합이다
  - Start message event — 수신으로 시작
  - Catching intermediate — 중간 수신
  - Throwing intermediate — 중간 발신
  - End message event — 발신으로 종료
- **Task는 행동, event는 사실 진술**이라는 구분을 항상 유지한다
