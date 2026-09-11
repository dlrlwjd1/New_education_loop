# Cancel Event

## 개요

- **Cancel event(취소 이벤트)** — **유일한 목적은 transaction task나 transaction sub-process를 취소**하는 것
- Module 11에서 배운 **transaction의 세 결과 중 `canceled`** 를 담당한다
- **변형이 2가지뿐**이다

## 내용

### 개념

이 event의 use case는 매우 단순하다.

> **유일한 목적은 transaction task 또는 transaction sub-process를 취소하는 것이다.**

**Transaction task/sub-process는 세 가지 결과를 갖는 논리적 작업 단위**였다 — **succeeded · canceled · hazard**. 그중 **transaction이 취소되는 경우에 cancellation event를 사용**한다.

### 사례 — Deluxe

**transaction sub-process에 부착된 cancellation event**의 동작:

1. **고객의 취소를 통해 이 event가 촉발**된다
2. 즉 **수신된 취소를 나타내는 message event가 transaction sub-process의 cancel event를 촉발**한다
3. **모든 취소형 부착 event와 마찬가지로 토큰을 대체 경로로 보낸다**
4. 최종적으로 **케이스가 종료**된다

### Cancel event의 변형 — 2가지뿐

> **방금 본 것처럼 transaction을 취소하는 데만 사용할 수 있다. 그래서 event 유형이 두 가지뿐이다.**

| 변형 | 설명 |
|---|---|
| **Intermediate boundary event** | **transaction에 부착해 대체 취소 경로를 촉발**한다 (Deluxe 사례) |
| **Transaction 내부의 cancel event** | **transaction 자체가 어떻게 취소되는지를 강조**하기 위해 transaction 안에서 직접 사용한다 |

## 예시

```text
Deluxe — transaction sub-process의 취소

┌═ Transaction: 송장 처리 ═══════════════════┐
║  (○) → [송장 생성] → [송장 발송] → (◎)     ║
║                                            ║
║        (⊘ 내부 cancel event)               ║  ← 변형 2
║         transaction이 어떻게 취소되는지 표시  ║
╚═══════════════(⊘ 부착 cancel)══════════════╝
                      ↑  ← 변형 1
(✉ 고객 취소 수신) ────┘
                      ↓
              [대체 취소 경로]
                      ↓
                 (◎ 케이스 종료)


Transaction의 세 가지 결과와 담당 event

╔═ Transaction ═╗
║               ║── succeeded → 정상 흐름
║               ║── canceled  → ⊘ Cancel event      ← 이 강의
║               ║── hazard    → ⚡ Error event 계열
╚═══════════════╝


Cancel event 변형 — 2가지

┌─ START ─────────────────────────────────────────┐
│ ✗ 모두 불가                                      │
└─────────────────────────────────────────────────┘
┌─ INTERMEDIATE ──────────────────────────────────┐
│ ✓ Boundary event  (transaction에 부착)           │
│ ✗ Non-interrupting                              │
│ ✗ Throwing                                      │
└─────────────────────────────────────────────────┘
┌─ END ───────────────────────────────────────────┐
│ ✓ Transaction 내부에서 취소를 표현                │
└─────────────────────────────────────────────────┘

※ cancel event는 transaction 전용이다.
  일반 task나 일반 sub-process에는 쓸 수 없다.
```

## 요약

- **Cancel event는 transaction 전용**이다. 일반 task나 일반 sub-process에는 쓸 수 없다
- **transaction의 세 결과 중 `canceled`** 를 담당한다
- **변형은 2가지** — **transaction에 부착하는 boundary event**, **transaction 내부에서 취소를 표현하는 event**
- 다른 취소형 부착 event와 마찬가지로 **토큰을 대체 경로로 보낸다**
