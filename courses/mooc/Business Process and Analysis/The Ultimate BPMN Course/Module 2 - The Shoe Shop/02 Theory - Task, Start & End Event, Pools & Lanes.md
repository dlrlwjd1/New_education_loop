# Theory – Task, Start & End Event, Pools & Lanes

## 개요

- BPMN의 기초 요소(foundational elements)를 하나씩 정의하는 이론 강의
- **flow object 3종**(event · activity · gateway)과 **책임 표현 2종**(pool · lane)을 다룬다

## 내용

### 1. Event (이벤트) — 상태를 나타낸다

- **모양: 항상 원(round)**
- **상태(state)나 상황(situation)** 을 나타낸다
- **Start event** — 프로세스를 무엇이 **촉발(trigger)** 하는지 정의한다
- **End event** — 프로세스가 어디서 **종료**되는지 나타낸다

start event와 end event는 프로세스 흐름의 **경계(boundaries)** 를 규정한다.

### 2. Activity (활동) / Task (작업) — 행동을 요구한다

- event가 **상태를 서술**한다면, activity는 **행동(action)을 요구**한다
- **작업의 단위(a unit of work)** 를 나타낸다 — 수행되어야 할 task
- task라고 부르든 activity라고 부르든 개념은 같다. **해내야 할 일(the job to be done)** 이다

### 3. Gateway (게이트웨이) — 논리를 더한다

프로세스에 **논리(logic)** 를 추가하는 요소다.

**Exclusive gateway** — 가장 먼저 만나는 유형

- **결정 지점(decision point)** 역할을 한다
- "제품이 재고에 있는가?" 같은 **질문**이 어느 경로를 따를지 결정한다
- 이름 그대로 **오직 하나의 경로만 선택**된다
- 열린 gateway는 나중에 **닫아서(closing gateway)** 분기된 branch를 다시 합칠 수 있다

> event, activity, gateway 이 세 가지를 BPMN의 **core element** 또는 **flow object**라고 부르며, 모든 프로세스의 뼈대(backbone)가 된다.

### 4. Pool과 Lane — 책임을 정의한다

| 요소 | 나타내는 것 |
|---|---|
| **Pool** | 프로세스가 일어나는 **조직(organization)이나 주체(entity)** |
| **Lane** | 개별 task를 책임지는 **역할(role)이나 부서(department)** |

이 구조가 프로세스의 **소유권(ownership)과 실행 주체**를 명확하게 만든다.

## 예시

```text
[Pool: Megaworld]
 ┌─ Lane: Shop Assistant ─────────────────────────────┐
 │                                                     │
 │  (○ Start)  →  [Task]  →  ◇ Gateway ─ yes → [Task] → (◎ End)
 │   상태 서술      행동 수행    질문/분기      행동      종료 상태
 │                                │                     │
 │                                └─ no  → [Task] → ... │
 └─────────────────────────────────────────────────────┘
```

- `○` start event — 원, 프로세스를 촉발하는 상태
- `[  ]` task — 사각형, 수행할 작업
- `◇` exclusive gateway — 마름모, 하나의 경로만 선택
- `◎` end event — 굵은 원, 종료 상태

## 요약

- **Event는 원**이고 **상태**를 나타낸다. start event는 촉발 조건, end event는 종료 지점
- **Activity(= task)** 는 **행동**을 요구하는 작업 단위다
- **Gateway**는 논리를 더한다. **exclusive gateway**는 결정 지점이며 **하나의 경로만** 선택된다
- event · activity · gateway = **core element(flow object)**, 모든 프로세스의 뼈대
- **Pool**은 조직·주체, **Lane**은 역할·부서를 나타내며 책임 소재를 명확히 한다
