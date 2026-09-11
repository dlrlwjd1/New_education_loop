# The Deadlock

## 개요

- 첫 번째 함정 **deadlock(교착)**
- 정의: **프로세스가 무한히 멈춰 버리는(gets stuck indefinitely) 상황**
- 원인: **여는 exclusive gateway를 닫는 parallel gateway로 잘못 닫았을 때**

## 내용

### 왜 멈추는가

1. **Exclusive gateway는 토큰을 하나만 발행**한다
2. **닫는 parallel gateway는 자신에게 들어오는 경로 수만큼 토큰을 기대**한다
3. exclusive gateway는 추가 토큰을 만들지 않는다
4. → **closing gateway가 영원히 오지 않을 두 번째 토큰을 계속 기다린다**

### 사례 — Gonzalez의 pit stop, 이번엔 잘못 만든 버전

성격 급한 레이서 Gonzalez의 pit stop 프로세스에 **핵심적인 오류 하나**를 넣었다.

> **여는 parallel gateway가 exclusive gateway로 바뀌어 있다.**

**진행 상황:**

1. 프로세스가 시작되면 gateway가 **fuel team과 wheel team 중 어느 쪽이 움직일지 결정**한다 (exclusive이므로 하나만 선택)
2. fuel team이 선택되었다고 하자. 토큰이 fuel team의 task들을 통과해 **닫는 parallel gateway에 도착**한다
3. 그런데 이 gateway는 **각 경로에서 하나씩, 총 두 개의 토큰을 기대**하고 있다
4. **토큰은 하나만 생성되었으므로 프로세스가 멈춘다**
5. **성격 급한 Gonzalez는 영원히 pit box에 갇혀** 결코 생성되지 않을 두 번째 토큰을 기다린다

> 이 예시는 **exclusive gateway와 parallel gateway를 정확히 구분하는 것이 왜 결정적인지** 보여준다.

## 예시

```text
✗ Deadlock — 잘못된 모델

              ┌─→ [Wheel team tasks] ──┐   (토큰 없음)
              │                         │
(●) → ◇ ──────┤                         ├──→ ⊕ ← 토큰 2개를 기다린다
   토큰 1개   │                         │       하지만 1개만 온다
   exclusive  └─→ [Fuel team tasks] ───┘       → 영원히 멈춤
   하나만 선택      (●) 여기만 토큰


✓ 올바른 모델

              ┌─→ [Wheel team tasks] ──┐  (●)
              │                         │
(●) → ⊕ ──────┤                         ├──→ ⊕ → (●) → (◎)
   토큰 1개   │                         │    토큰 2개 도착
   parallel   └─→ [Fuel team tasks] ───┘    → 병합 후 진행
   2개로 복제       (●)
```

**짝짓기 규칙**

```text
여는 ◇ (exclusive)  →  닫는 ◇ (exclusive)   ✓
여는 ⊕ (parallel)   →  닫는 ⊕ (parallel)    ✓
여는 ◇ (exclusive)  →  닫는 ⊕ (parallel)    ✗ Deadlock
```

## 요약

- **Deadlock은 프로세스가 무한정 멈추는 상황**이다
- 원인은 **여는 exclusive gateway + 닫는 parallel gateway** 조합
- exclusive는 토큰 1개만 만드는데, 닫는 parallel은 경로 수만큼 기다린다 → 영원한 대기
- **Deadlock은 기술적으로 잘못된 모델**이다. 프로세스가 완료될 수 없다
- BPMN 모델에서 deadlock이 의심되면 **Gonzalez가 pit box에 갇힌 장면**을 떠올린다
