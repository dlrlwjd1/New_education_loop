# Practical – Beauty Process (Part 1)

## 개요

- Module 4의 새 요소들을 더 복잡한 프로세스에 적용하는 실습
- 무대: 대형 화장품 제조사 **Beauty Paradise**
- 등장인물: 고객 만족(customer satisfaction) 담당 **Susan**
- 초점: **inclusive gateway가 토큰 흐름에 미치는 영향**

## 내용

### 상황

Susan은 **제품 샘플을 요청하는 고객에게 응대**하는 일을 한다. 이 업무는 경쟁이 치열해서, Susan은 **일부를 자동화해 다른 업무에 쓸 시간을 확보**하고 싶어 한다.

> **개선하고 자동화하려면 현재 프로세스를 문서화하는 것이 첫 단계다.**

Susan은 이미 문서화를 마쳤다.

### 프로세스 구조

**1. Start message event** — 고객 요청이 **전화나 이메일로** 도착한다

> 매체를 특정하지 않고 message event 하나로 처리하는 것이 앞서 배운 유연성이다.

**2. 첫 번째 task** — **고객 등급 확인(check the customer status)**

고객을 **gold · silver · normal** 로 분류한다.

**3. Inclusive gateway** — 이 등급에 따라 **어떤 사은품(giveaway)을 보낼지** 결정한다

inclusive gateway를 쓰기 때문에 **다양한 제품 조합**이 가능하다.

### 토큰 흐름 시나리오

**시나리오 A — 아이라이너만 선택**

1. inclusive gateway가 토큰을 **가장 아래 경로로** 보낸다
2. closing gateway가 이를 인지하고 **그 경로에서 오는 토큰 1개를 기다린다**
3. 토큰이 통과하면 Susan이 **포장 준비 → 배송 → 배송 확인 발송**

**시나리오 B — 샤워젤만 선택**

1. 토큰이 **가운데 경로**로 이동
2. closing gateway가 **토큰 1개를 기대하고 처리**
3. 이후 단계는 시나리오 A와 동일

**시나리오 C — 둘 다 선택**

1. 여는 gateway가 **아래 경로와 가운데 경로 양쪽으로 토큰을 보낸다**
2. closing gateway가 **토큰 2개**(각 경로에서 하나씩)를 기다린 뒤 최종 단계로 진행

### 핵심 개념 — 기대 토큰 수는 동적으로 바뀐다

> **여는 gateway가 closing gateway에 알려준 뒤에도, 기대하는 토큰 개수는 변할 수 있다.**

**예시 — 바우처만 보내는 경우**

바우처 경로는 다시 두 가지 하위 옵션으로 나뉜다.

- **디지털 바우처** → **exclusive gateway가 물리적 토큰이 불필요하다고 판단**하고, **closing inclusive gateway의 기대치가 그에 맞춰 갱신된다**
- **실물 바우처** → closing gateway는 계속 토큰 1개를 기대하고, 도착하는 즉시 처리해 후속 task를 활성화한다

## 예시

```text
Beauty Paradise 샘플 요청 프로세스

(◉ 고객 요청 수신 - 전화/이메일)
        ↓
   [고객 등급 확인: gold / silver / normal]
        ↓
        ◎  ← inclusive gateway: 등급에 따라 조합 선택
        │
   ┌────┼────────────┐
   │    │            │
[바우처] [샤워젤]  [아이라이너]
   │    │            │
   ◇    │            │   ← 바우처는 다시 exclusive로 분기
 디지털/실물          │      (디지털이면 물리 토큰 불필요)
   │    │            │
   └────┼────────────┘
        ◎  ← closing inclusive gateway
        │    활성화된 경로의 토큰만 기다린다
        │    그 개수는 도중에 갱신될 수 있다
        ↓
   [포장 준비] → [배송] → [배송 확인 발송]
```

## 요약

- **프로세스 개선·자동화의 첫 단계는 현재 프로세스를 문서화하는 것**이다
- **inclusive gateway는 조합을 자유롭게** 만든다 — 1개, 2개, 또는 전부
- **closing inclusive gateway는 활성화된 경로 수만큼만 토큰을 기다린다**
- **기대 토큰 수는 프로세스 도중에 동적으로 갱신될 수 있다** — 하위 exclusive gateway가 경로를 없애면 closing gateway의 기대치도 줄어든다
