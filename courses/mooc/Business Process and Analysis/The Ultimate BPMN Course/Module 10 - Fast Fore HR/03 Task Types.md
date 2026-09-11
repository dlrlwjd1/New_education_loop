# Task Types

## 개요

- **Task type(작업 유형)** — 표준 task의 **왼쪽 위 모서리**에 기호를 붙여 task의 성격을 명시한다
- 목적: **자동화(automation) 시나리오를 모델링**하기 위해
- **7가지 유형**을 배우고, Space Z 생산 프로세스에 실제로 적용해 본다

## 내용

### 기본 — Generic task

지금까지 쓴 **generic(standard) task**는 **해야 할 일(job to be done)** 이면 무엇이든 표현할 수 있다. 그 이상으로 나아가려면 **왼쪽 위 모서리로 task type을 구체화**한다.

### 7가지 task type

**1. Send task (발신 작업)**

이름 그대로 **정해진 수신자에게 어떤 종류의 메시지나 소포를 보낸다.**

**2. Receive task (수신 작업)**

어떤 종류의 메시지든 **받는다**.

> **중요한 차이 — receive task는 수행자(performer)의 존재가 필요하다.** 즉 **누군가 능동적으로 메시지나 소포를 받아야 한다.**
>
> **Receive task vs Catching message event**
>
> - **Receive task**: 누군가 사무실로 들어와 소포를 건네주고 **여러분이 그것을 받는다** → **활동(activity)**
> - **Catching message event**: 송장이 그냥 배달되어 **여러분이 아무것도 하지 않았는데 우편함에 들어와 있다** → **발생(occurrence)**

**Send task에 대한 강사의 스타일 조언**

> 무언가를 보낼 때는 **같은 것을 표현하는 두 가지 방법**이 있다.
>
> 1. **Send task**를 쓰거나
> 2. **일반 task + 뒤이은 send message event**를 쓰거나
>
> **둘은 정확히 같은 의미**다. 어떻게 모델링할지는 여러분에게 달렸다.
>
> **일반 권장**: 프로세스의 **다른 모든 activity에도 task type을 쓰는 경우에만 send task를 쓴다.** task type 없이 모델링한다면 **일관성 유지를 위해 generic task + throwing message event**로 간다. **BPMN 관점에서는 둘 다 정확하다.**

**3. User task (사용자 작업)**

**IT 시스템 안에서 사용자가 실행하는 activity**를 나타낸다. 대부분의 경우 **사용자가 입력 폼을 작성하고 제출**한다.

- 예: **SAP 시스템에서 신규 공급업체 항목을 생성하는 사용자**

**4. Manual task (수동 작업)**

대조적으로 **IT 시스템과의 상호작용 없이 수행되는 task**다.

- 예: **배송을 위한 주문 포장**

**5. Business rule task (비즈니스 규칙 작업)**

**특정 비즈니스 규칙이 적용되는 task**다.

- 예: **은행이 신용도를 평가할 때** 소득·저축 등을 확인하는 엄격한 규칙을 따라 대출 금리를 결정한다

**6. Service task (서비스 작업)**

**모든 종류의 서비스의 자동 실행(automated execution)** 을 나타낸다. 보통 **웹 서비스를 호출하거나 상호작용할 때** 쓴다.

> **business process automation을 다룰 때 매우 유용해진다.**

**7. Script task (스크립트 작업)**

**런타임 환경에서 스크립트를 직접 실행**한다.

> **Service task와 Script task의 차이 (비기술자를 위한 설명)**
>
> - **Service task** — **이미 그 일을 하고 있는 기존 서비스를 활용하거나 호출**할 수 있을 때
> - **Script task** — **그 일을 직접 스크립트로 작성해서 실행**할 때

### Space Z 생산 프로세스에 적용하기

| Task | 적용한 type | 이유 |
|---|---|---|
| 자재 가용성 확인 | **User task** | 기획팀이 **ERP 시스템에서 정보를 조회**한다 |
| 부족 부품 신규 주문 발송 | **Send task** | 주문을 보낸다 |
| 물품 수령 | **Receive task** | **작업자가 능동적으로 물품을 받는다.** 그렇지 않았다면 catching message event를 썼을 것 |
| 공급업체에서 직접 부품 수거 | **Manual task** | 3일 내 배송이 안 되면 **누군가 차를 몰고 가서 직접 가져온다** |
| 생산 계획 수립 | **User task** | **기획 시스템에 상세 내용을 입력**하면 시스템이 계획을 산출한다 |
| 샘플 크기 계산 | **Script task** | 기업용 소프트웨어가 모든 단계를 커버하지 못해 **기획팀이 자체 스크립트를 만들어 도구 밖에서 실행**한다 |
| 생산 계획 평가 (QA) | **Business rule task** | **사전 정의된 비즈니스 규칙을 적용**한다. 예: 샘플 크기가 실가동 생산의 5%를 넘으면 계획을 반려 |
| 직원에게 계획 공지 | (구식 방식) | **회의를 열어 알리는 방식** |
| 기계 조정 | **Manual task** | 일부 기계에 UI가 있을 수 있지만 **주된 작업은 수동**이다 |
| 샘플 생산 | **Service task** | 앞서 설정한 **기계가 모든 작업을 하고 샘플 생성이라는 서비스를 제공**한다 |
| 신규 샘플 평가 (QA) | **Business rule task** | 사전 정의된 규범 준수 여부 등 **명확한 비즈니스 규칙을 적용** |
| 계획 수동 수정 | **Manual task** | user task로 예상했겠지만, **Space Z의 기획 시스템이 낡아서 한 번 만든 계획을 수정할 수 없다.** 그래서 **기획팀이 인쇄된 계획을 연필로 수정**한다 |

### 매우 중요한 원칙 — 애매하면 덜 자동화된 쪽으로

> **애매할 때는 항상 덜 자동화된 task type을 선택한다.**
>
> **왜냐하면 우리가 지금 하고 있는 것은 현재 상태(status quo), 즉 as-is 프로세스를 문서화하면서 자동화 잠재력(automation potential)을 드러내는 일이기 때문이다.**
>
> 일부 단계는 자동이고 일부는 수동인 **하이브리드 작업**이라면, **task를 쪼개거나 manual task로 간다.**

> 강사의 첨언: **"이런 절차(낡은 시스템 때문에 연필로 수정하는 것)가 여러분이 생각하는 것보다 많은 기업에서 훨씬 현실에 가깝다."**

## 예시

```text
7가지 task type — 자동화 스펙트럼

수동 ←───────────────────────────────────────→ 자동

[Manual task]      IT 시스템 없이 사람이 (포장, 연필로 수정)
     ↓
[User task]        사람이 IT 시스템 안에서 (폼 입력, ERP 조회)
     ↓
[Send task]        메시지·소포를 보낸다
[Receive task]     사람이 능동적으로 받는다
     ↓
[Business rule]    정해진 규칙을 적용 (사람 또는 시스템)
     ↓
[Service task]     기존 서비스를 호출 (웹 서비스, 기계)
     ↓
[Script task]      직접 작성한 스크립트를 실행


Receive task vs Catching message event

[Receive task]        누군가 소포를 건네주고 내가 받는다 → 활동
(✉ Catching event)    우편함에 그냥 들어와 있다        → 발생


Service vs Script

[Service task]  이미 있는 서비스를 부른다  →  남이 만든 것
[Script task]   내가 짠 스크립트를 돌린다  →  내가 만든 것


애매할 때의 원칙

  이 task는 자동인가 수동인가?
        │
    애매하다
        ↓
  덜 자동화된 쪽을 선택한다
  (as-is를 문서화해 자동화 잠재력을 드러내는 것이 목적)
```

## 요약

- **Task type은 왼쪽 위 모서리 기호**로 task의 성격을 명시해 **자동화 시나리오를 모델링**한다
- 7종: **send · receive · user · manual · business rule · service · script**
- **Receive task는 수행자가 필요**하다. catching message event는 그냥 일어나는 것이다
- **Service task는 기존 서비스 호출, script task는 직접 작성한 스크립트 실행**
- **애매하면 덜 자동화된 쪽을 고른다** — as-is를 정직하게 그려야 자동화 잠재력이 보이기 때문이다
- **일관성이 중요하다** — task type을 쓰기로 했으면 전부 쓰고, 안 쓰기로 했으면 generic task + message event로 통일한다
