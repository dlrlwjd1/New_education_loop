# Theory – Timer and Conditional Event

## 개요

- **Timer event(타이머 이벤트)** — 특정 날짜나 시간 기간을 나타낸다
- **Conditional event(조건 이벤트)** — 특정 조건이 참이 될 때 촉발된다
- 두 event의 공통점: **catching(수신) 유형만 존재한다**

## 내용

### 1. Timer event

**용도**: 특정 날짜(specific dates)나 시간 기간(time periods)을 표현한다

**예시**

- 매 분기 초에 촉발되는 감사(audit)
- 약 일주일이 걸리는 창고 재고 확인(warehouse inventory check)

**매우 중요한 원칙 — BPMN에는 catching timer event만 있다**

> **왜 throwing timer event가 없는가?**
>
> 지금까지 본 throwing event들을 생각해 보자. 이메일 발송처럼 **행동(action)에 의해 촉발**된다. 누군가 전송 버튼을 눌러야 일어난다.
>
> **하지만 시간은 그냥 흐른다(time just happens).** 조작하거나 통제할 수 있는 것이 아니다.
>
> 그래서 BPMN에는 **catching timer event만 존재한다.**

### 2. Conditional event

**용도**: 특정 조건이 **참(true)이 될 때** 촉발된다

**예시**: 창고에서 *"재고가 1개만 남음(only one unit left in stock)"*

이 조건은 참 아니면 거짓이다. **timer event와 마찬가지로 직접 영향을 줄 수 없다.** 그래서 **BPMN에는 throwing conditional event도 없다.**

**대기 지점(waiting point)으로 이해하기**

> conditional event는 **조건이 충족될 때까지 토큰을 붙잡아 두는 대기 지점**이다. 조건이 참이 되면 토큰이 풀려나고 프로세스가 계속된다.

### 정리 — 왜 두 event 모두 catching만 있는가

| Event | 촉발 주체 | Throwing 존재? |
|---|---|---|
| Message event | **사람/시스템의 행동** (전송 버튼) | **있음** |
| **Timer event** | **시간 자체** (통제 불가) | **없음** |
| **Conditional event** | **조건의 참/거짓** (통제 불가) | **없음** |

## 예시

```text
빵집(bakery) 프로세스

(⏱ Start timer event)        ← 매일 촉발
   "매일"
        ↓
   [반죽 준비]
        ↓
   (⏱ Catching timer event)  ← 25분 대기 (반죽 부풀기)
   "25분 대기"                   토큰이 여기서 머문다
        ↓
   [오븐에 넣기]
        ↓
   (◇ Intermediate            ← 조건이 참이 될 때까지 대기
      conditional event)         토큰이 여기서 멈춰 기다린다
   "빵이 갈색이 되었다"
        ↓
   [오븐에서 꺼내기]
        ↓
   (◎ 갓 구운 빵 완성)
```

**두 event의 역할 차이**

```text
⏱ Timer event      → "얼마나 기다리는가" (25분)
◇ Conditional event → "무엇이 참이 되면 진행하는가" (빵이 갈색)
```

## 요약

- **Timer event는 날짜나 기간**을, **conditional event는 조건의 성립**을 나타낸다
- **둘 다 catching 유형만 존재한다.** 시간과 조건은 우리가 통제할 수 있는 것이 아니기 때문이다
- 두 event 모두 **토큰을 붙잡아 두는 대기 지점**으로 작동한다
- throwing event가 있으려면 **누군가 행동으로 촉발**할 수 있어야 한다 (message event처럼)
