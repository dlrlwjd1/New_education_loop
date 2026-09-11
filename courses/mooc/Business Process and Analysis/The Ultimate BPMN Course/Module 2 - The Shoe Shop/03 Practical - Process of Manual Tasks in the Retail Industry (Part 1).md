# Practical – Process of Manual Tasks in the Retail Industry (Part 1)

## 개요

- 앞서 배운 기초 요소를 실제 사례에 적용하는 첫 실습 강의
- 사례: 신발 매장의 **"고객이 원하는 신발 사이즈가 없을 때"** 프로세스
- 주인공은 신입 매장 직원 **Max**

## 내용

### 상황

Max는 새로 채용된 매장 직원이다. 지금까지는 잘 해왔지만 낯선 상황을 만난다.

> 고객이 원하는 신발을 찾는데 **맞는 사이즈가 없다.**

Max는 단순히 창고만 확인하면 되는 건지, 그 이상의 절차가 있는지 모른다. 상사도 자리에 없다. 이때 Max는 **"missing shoe size" 프로세스** 문서를 참고한다.

### 프로세스 단계별 분석

**1. Start event**

명확한 레이블이 붙어 있다 — *"고객이 자기 신발 사이즈를 찾을 수 없다"*. 이 이벤트가 프로세스를 촉발하고 Max에게 다음에 뭘 할지 안내한다.

**2. 첫 번째 task**

sequence flow(화살표)를 따라가면 첫 활동이 나온다 — **"매장 창고에서 신발 확인하기(check the local warehouse for the shoe)"**. 이 activity는 Max의 행동을 요구한다.

**3. 첫 번째 exclusive gateway**

decision point가 앞선 activity의 **결과**를 반영한다.

- **신발이 있는 경우** → 두 개의 최종 task로 진행
  1. 진열대에서 신발 꺼내기(take the shoes from the rack)
  2. 고객에게 판매하기(sell them to the customer)
  → **end event**로 성공적으로 종료

- **신발이 없는 경우** → 대체 branch로 이동

**4. 두 번째 task와 gateway**

재고가 없으면 다음 활동은 **"근처 두 번째 매장에 전화해 재고 확인하기"** 다. 또 다른 exclusive gateway가 다음 단계를 결정한다.

- **두 번째 매장에 있는 경우** → 고객에게 그 매장에서 구매하도록 안내(refer the customer). 이 경로는 **closing gateway**에서 다시 합류해 같은 end event로 이어진다
- **두 번째 매장에도 없는 경우** → 마지막 branch로 진행

**5. 마지막 branch**

1. 특급 배송 서비스에 전화(call the express delivery service)
2. 배송일 확인(check for the delivery date)
3. 고객에게 언제 수령 가능한지 안내(inform the customer)

→ 이 branch도 end event에서 종료된다

## 예시

```text
(○ 고객이 신발 사이즈를 찾을 수 없음)
        ↓
   [매장 창고 확인]
        ↓
   ◇ 신발이 있는가?
    ├─ yes → [진열대에서 신발 꺼내기] → [고객에게 판매] ─┐
    │                                                    │
    └─ no  → [두 번째 매장에 전화]                        │
                  ↓                                      │
             ◇ 두 번째 매장에 있는가?                      │
              ├─ yes → [고객을 두 번째 매장으로 안내] ─────┤
              │                                          │
              └─ no  → [특급 배송 서비스에 전화]           │
                            ↓                            │
                       [배송일 확인]                      │
                            ↓                            │
                       [고객에게 안내] ────────────────────┤
                                                          ↓
                                                    ◇ (closing)
                                                          ↓
                                                      (◎ End)
```

## 요약

- 실제 업무 상황을 start event → task → gateway → task → end event 순서로 그대로 옮길 수 있다
- **gateway는 앞선 activity의 결과를 반영**해 분기한다
- 분기된 branch는 **closing gateway로 다시 합칠 수 있다**
- BPMN의 힘은 **가능한 모든 시나리오(재고 있음 / 대체 옵션 / 최종 해결책)를 미리 그려두는 것**에 있다
- 그 덕분에 신입인 Max도 상사 없이 자신 있게 고객 요청을 처리할 수 있다
