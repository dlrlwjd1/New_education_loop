# Signal Event

## 개요

- **Signal event(신호 이벤트)** — **특정 수신자를 정하지 않고 정보를 방송(broadcast)** 한다
- 비유: **라디오 방송국과 라디오 수신기**
- 이 강의에서 **event 변형 체계(event overview) 전체**가 소개된다 — 이후 모든 event에 적용되는 참조 틀이다

## 내용

### 개념 — 방송이다

message event가 **특정 수신자**에게 보내는 것이라면, signal event는 **특정 수신자에게 주소가 지정되지 않은 정보를 방송**한다.

### 사례 1 — Tofisu의 방송 (End signal event)

지난 챕터의 판매 프로세스 끝부분, 주간 보고서 생성 이후에 몇 단계가 추가되었다.

1. 주간 보고서 생성 후 **Jen이 이번 주에 신규 레퍼런스 고객을 확보했는지 평가**한다
2. 확보했다면 **그 레퍼런스 고객들을 발표(announce)** 한다. 방법은 하위 프로세스에 서술되어 있다
   - **Tofisu 블로그 포스트**
   - **웹사이트 로고 업데이트**
   - **신규 고객 발표 웨비나**
3. 이로써 **새로 확보한 레퍼런스 고객이 효과적으로 방송되었다** → **end signal event로 표현**한다

### 사례 2 — Vegan Watch의 수신 (Start signal event)

**Vegan Watch**는 **비건 식품 관련 모든 것을 블로깅하는 곳**이다. 프로세스는 단순하다.

1. **관련 뉴스가 접수되면** 블로거가 **뉴스를 평가**한다
2. 가치가 있으면 **블로그 초안 작성** → **편집자가 검토**
3. **편집자가 승인하면** 블로거가 **완성하고 발행**한다

**이 프로세스는 어떻게 촉발되는가?**

> **라디오 비유**
>
> - **signal event로 끝난 Tofisu의 판매 프로세스는 라디오 방송국처럼 뉴스를 방향 없이 세상에 방송한다**
> - **Vegan Watch의 촉발 signal event는 라디오 수신기처럼, 맞는 signal event에서 오는 관련 방송 전파를 받을 준비가 늘 되어 있는 수신기 역할을 한다**
>
> **Tofisu의 signal end event에서 나온 뉴스가 Vegan Watch의 triggering signal start event에 도달하는 즉시 프로세스가 시작된다.**

### Event 변형 체계 (Event Overview) — 이후 모든 event의 참조 틀

지난 챕터에서 **interrupting/non-interrupting event sub-process**라는 새 특성이 생겼으므로, **더 정교한 event 개요**가 필요하다.

> **signal event가 이 개요를 소개하기에 완벽한 event다. 모든 시나리오에서 사용할 수 있기 때문이다.**

**대분류: Start / Intermediate / End**

**① Start 계열 — 3가지 변형**

| 변형 | 설명 |
|---|---|
| **일반 start event** | 프로세스를 시작한다 (Vegan Watch 사례) |
| **Event sub-process를 interrupting 방식으로 촉발** | **부모 프로세스를 취소**한다 (고객이 주문을 취소한 사례) |
| **Event sub-process를 non-interrupting 방식으로 촉발** | 부모를 취소하지 않는다 (고객이 주문 상태만 물어본 사례) |

**② Intermediate 계열 — 4가지 변형**

| 변형 | 설명 |
|---|---|
| **Catch event** | **일반 catch event**. 토큰을 잡을 때까지의 **대기 시간**을 나타낸다 (고객이 보낸 돈이 도착하는 경우) |
| **Interrupting boundary event** | **task나 sub-process에 부착**되어 그것을 **취소하는 예외**를 나타낸다 (주문 취소가 송장 처리도 취소하는 경우) |
| **Non-interrupting boundary event** | **task를 취소하거나 중단하지 않는 예외**를 나타낸다 (부족 품목 조달이 예상보다 오래 걸려 고객에게 알리지만 조달은 계속하는 경우) |
| **Throwing intermediate event** | message event에서 이미 본 것. **나가는 메시지**를 나타낸다 |

**③ End 계열 — 1가지**

**매우 단순하다.** 이미 아는 것 하나뿐이다. signal event의 경우 **Tofisu 판매 프로세스의 끝에서 신규 레퍼런스 고객 확보 소식을 방송**하는 것이 그 예다.

### 강사의 조언 — 외울 필요 없다

> **너무 걱정하지 마라. 똑똑한 BPMN 모델러를 쓰면 도구가 허용된 조합만 모델링하게 해 준다.**
>
> **기본 개념을 이해하는 것은 좋지만, 어떤 event가 어떤 시나리오에서 허용되는지를 전부 외울 필요는 없다.** 모델러가 유효하지 않은 시나리오는 애초에 모델링하지 못하게 막기 때문이다.

## 예시

```text
Signal event — 방송과 수신

프로세스 A: Tofisu 판매                    프로세스 B: Vegan Watch 블로깅
                                          (완전히 다른 조직)
[주간 보고서 생성]
      ↓
◇ 신규 레퍼런스 고객이 있는가? ── yes
      ↓
[레퍼런스 고객 발표 ⊞]
  (블로그 · 로고 · 웨비나)
      ↓
(◍ End signal event)  ))) ~~~~~~~~~~~~~~~~> (((  (◉ Start signal event)
   "신규 레퍼런스 고객"                              "관련 뉴스 접수됨"
   방송국처럼 방향 없이 방송        수신기처럼 늘 대기         ↓
                                                    [뉴스 평가]
                                                          ↓
                                                    [초안 작성]
                                                          ↓
                                                    [편집자 검토] → [발행]


Message event vs Signal event

✉ Message  →  특정 수신자에게 (1:1)
◬ Signal   →  수신자 미지정 방송 (1:N, 누가 받을지 모른다)


Event 변형 체계 (모든 event에 적용되는 참조 틀)

┌─ START ─────────────────────────────────────────┐
│ ① 일반 start event         프로세스를 시작        │
│ ② event sub-process 촉발 (interrupting, 실선)    │
│    → 부모 프로세스를 취소                         │
│ ③ event sub-process 촉발 (non-interrupting, 점선)│
│    → 부모는 계속 진행                             │
└─────────────────────────────────────────────────┘

┌─ INTERMEDIATE ──────────────────────────────────┐
│ ① Catch event              토큰을 잡을 때까지 대기 │
│ ② Interrupting boundary    부착 + 취소함 (실선)   │
│ ③ Non-interrupting boundary 부착 + 취소 안 함(점선)│
│ ④ Throwing                 내보낸다               │
└─────────────────────────────────────────────────┘

┌─ END ───────────────────────────────────────────┐
│ ① End event                종료하며 내보낸다      │
└─────────────────────────────────────────────────┘

Signal event는 이 8가지 변형을 모두 쓸 수 있다.
(다른 event는 일부만 쓸 수 있다 — 다음 강의들에서 확인)
```

## 요약

- **Signal event는 수신자를 지정하지 않고 방송**한다. **message event(1:1)와의 결정적 차이**다
- **라디오 비유** — end signal은 방송국, start signal은 늘 켜져 있는 수신기
- **서로 완전히 무관한 조직의 프로세스가 signal로 연결**될 수 있다 (Tofisu → Vegan Watch)
- **Event 변형 체계는 start 3종 · intermediate 4종 · end 1종**으로 정리된다. 이후 모든 event를 이 틀로 비교한다
- **signal event는 8가지 변형을 모두 사용할 수 있는 유일한 만능 event**다
- **조합을 외울 필요 없다.** 좋은 모델러가 유효하지 않은 조합을 막아 준다
