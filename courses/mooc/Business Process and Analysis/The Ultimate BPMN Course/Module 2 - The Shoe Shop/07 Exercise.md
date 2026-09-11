# Exercise

## 개요

- Module 2의 실습 과제와 해설
- 과제: Max를 도와 **도매업체로부터의 입고(shipment from the wholesaler)** 프로세스를 모델링한다
- 힌트로 activity 목록이 미리 제공된다

## 내용

### 과제

제공된 텍스트를 읽고 도매업체 입고 프로세스를 BPMN으로 그린다. 강사가 activity는 미리 준비해 두었으므로 **흐름과 분기 구조를 직접 구성**하는 것이 과제의 핵심이다.

> 참고: 강사는 코스 전체 슬라이드를 `processcamp.io/course-slides` 에서 이메일 입력 후 받을 수 있다고 안내한다.

### 해설 — 입고 프로세스

**1. Start event**

주문이 도착한 상태(the order being received)를 나타낸다.

**2. 첫 번째 activity**

**주문 품목과 송장(invoice)의 정확성 확인(checking the order items and the invoice for correctness)**

**3. 첫 번째 gateway — 주문과 송장이 정확한가?**

- **둘 중 하나라도 틀린 경우** → 배송 담당자에게 반품(the package is returned to the shipping clerk) → **"주문 반품됨" 상태의 end event**로 종료
- **둘 다 정확한 경우** → 다음 확인 단계로 진행

**4. 두 번째 gateway — 주문 유형이 무엇인가?**

standard 주문인지 custom 주문인지 판별한다.

- **standard** → **창고에 보관(stored in the warehouse)**
- **custom** → **데스크 뒤에 보관(stored behind the desk)**

**5. 종료**

두 activity 모두 **같은 end event**로 이어진다. **closing gateway**가 두 branch를 다시 합치고, 프로세스는 **"주문 입고됨" 상태**로 종료된다.

## 예시

```text
(○ 주문 도착)
      ↓
[주문 품목과 송장 정확성 확인]
      ↓
◇ 주문과 송장이 정확한가?
 ├─ no  → [배송 담당자에게 반품] → (◎ 주문 반품됨)
 │
 └─ yes → ◇ 주문 유형은?
           ├─ standard → [창고에 보관] ──┐
           │                             │
           └─ custom   → [데스크 뒤 보관] ┤
                                         ↓
                                    ◇ (closing)
                                         ↓
                                  (◎ 주문 입고됨)
```

## 요약

- 실무 텍스트를 읽고 **start event → task → gateway 분기 → end event**로 옮기는 훈련이다
- **end event가 두 개**인 것에 주목한다 — 반품과 정상 입고는 서로 다른 종료 상태다
- 반면 standard/custom 분기는 **같은 종료 상태**로 수렴하므로 **closing gateway로 합친다**
- 즉 **분기가 서로 다른 결과로 끝나면 end event를 나누고, 같은 결과로 끝나면 closing gateway로 합친다**
