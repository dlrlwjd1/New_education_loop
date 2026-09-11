# Practical – Process Racing

## 개요

- parallel gateway와 token concept을 실전에 적용하는 강의
- 사례: **Formula One pit stop**
- 등장인물: 성공했지만 **성격이 급하기로 유명한** F1 레이서 **Gonzalez**

## 내용

### 상황

시즌 최종 레이스다. 챔피언십을 확정하려면 Gonzalez는 반드시 우승해야 한다. 10바퀴를 돌고 선두를 달리고 있지만 **pit stop 시간**이다.

정비팀은 **타이어 교체와 연료 주입을 동시에** 처리해야 한다.

### 팀 구성

pit stop 작업은 두 팀으로 나뉜다.

- **Wheel team(휠 팀)**
- **Fuel team(연료 팀)**

### 토큰 흐름 단계별 분석

**1. Start event — 토큰 생성**

프로세스가 start event에서 시작하며 **토큰 하나가 생성**된다.

**2. Parallel gateway — 토큰 복제**

토큰이 곧바로 parallel gateway로 굴러가 **두 개의 토큰으로 복제**된다. 각 토큰이 자기 branch로 독립적으로 이동한다.

**3. 첫 번째 task 동시 수행**

| Wheel team | Fuel team |
|---|---|
| 나사 풀기(loosening the screws) | 주유구 열기(opening the gas cap) |

각 토큰은 **자기 task가 완료될 때까지 머문다.**

**4. 두 번째 task 동시 수행**

초기 task가 끝나면 토큰이 풀려나 다음 task로 진행한다.

| Wheel team | Fuel team |
|---|---|
| 타이어 제거(removes the tires) | 연료 주입(refueling the tank) |

**여기서 속도 차이가 생긴다.** wheel team은 빠르게 효율적으로 끝내지만, **fuel team은 주유에 시간이 더 걸려 약간 뒤처진다.** Gonzalez는 초조해한다.

> **하지만 프로세스가 동기화를 보장한다.** 이것이 parallel gateway의 핵심 가치다.

**5. Closing parallel gateway — 대기 후 병합**

- wheel team이 나사 조이기(fastening the screws)를 마치고
- fuel team이 주유구 닫기(closes the gas cap)를 마치면

두 토큰 모두 **closing parallel gateway로 굴러간다.** gateway는 **두 토큰이 모두 도착할 때까지 기다려** 모든 작업이 완료되었음을 보장한다. 두 토큰이 모두 도착하면 **하나로 병합**하고 다음으로 내보낸다.

**6. 종료**

pit stop이 완료되고 Gonzalez는 트랙으로 복귀해 승리를 노린다.

## 예시

```text
F1 Pit Stop 프로세스

                    ┌─ Lane: Wheel team ──────────────────────┐
                    │                                          │
                    │  [나사 풀기] → [타이어 제거] → [나사 조이기] │  (빠름)
                    │                                          │
(○ Pit stop 시작)   │                                          │
    ● ──→ ⊕ ────────┤                                          ├──→ ⊕ ──→ (◎ 완료)
   토큰   복제       │                                          │   대기 후
   1개    2개로      ├─ Lane: Fuel team ───────────────────────┤   병합
                    │                                          │
                    │  [주유구 열기] → [연료 주입] → [주유구 닫기] │  (느림)
                    │                    ↑                     │
                    │              시간이 더 걸린다              │
                    └──────────────────────────────────────────┘

핵심: 닫는 ⊕ 가 느린 쪽(fuel team)을 기다린다 → 동기화 보장
```

## 요약

- parallel gateway는 **task를 동시에 실행**시키면서 동시에 **중요한 지점에서 동기화를 보장**한다
- 토큰 1개 → parallel gateway에서 2개로 복제 → 각 팀 branch로 독립 진행
- **branch마다 속도가 달라도 상관없다.** closing gateway가 느린 쪽을 기다린다
- 이 "기다림"이 없으면 타이어만 갈고 주유 없이 출발하는 사태가 생긴다 — 동기화가 parallel gateway의 존재 이유다
