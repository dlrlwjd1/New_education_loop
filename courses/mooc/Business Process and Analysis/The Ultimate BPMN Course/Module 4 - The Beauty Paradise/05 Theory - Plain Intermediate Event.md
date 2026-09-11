# Theory – Plain Intermediate Event

## 개요

- 세 번째 plain event 유형인 **plain intermediate event(일반 중간 이벤트)**
- 용도: **프로세스 내 이정표(milestone) 시각화**
- 핵심: **프로세스 흐름에 영향을 주지 않는다**

## 내용

### 위치

코스 초반에 **plain start event**와 **plain end event**를 다뤘다. 여기에 세 번째 유형을 추가한다.

| Plain event 3종 | 역할 |
|---|---|
| Plain start event | 프로세스를 촉발 |
| **Plain intermediate event** | **이정표 표시** |
| Plain end event | 프로세스 종료 |

### 성격

- start·end event보다 **덜 중요하다(less significant)**
- 주로 **프로세스 내의 이정표(milestone)를 시각화**하는 데 쓴다
- **프로세스 흐름에 영향을 주지 않는다** — 토큰은 아무 방해 없이 그냥 굴러 지나간다(rolls through without any interruption)

### 예시 — Bookworm 서점 주문 프로세스

강사는 **"고객 주문 이행됨(customer order fulfilled)"** 이라는 레이블의 plain intermediate event를 추가한다.

- 프로세스의 중요한 이정표를 표시한다
- 토큰이 이 event에 도착하면 **흐름에 영향 없이 통과**한다
- 그러면서 **주문의 상태를 "이행됨"으로 설정**한다

## 예시

```text
Bookworm 서점 주문 프로세스에 이정표 추가

(◉ 주문 접수)
     ↓
[주문 처리]
     ↓
(○ 고객 주문 이행됨)   ← plain intermediate event
     ●                   토큰이 그냥 통과한다
     ↓                   흐름을 바꾸지 않는다
[배송 준비]              단지 "여기까지 왔다"를 표시
     ↓
(◍ End)


Gateway와의 차이

◇ Gateway            → 흐름을 바꾼다 (분기·병합)
○ Plain intermediate → 흐름을 바꾸지 않는다 (표시만)
```

## 요약

- **Plain intermediate event는 이정표(milestone)를 표시**하는 용도다
- **프로세스 로직에 영향을 주지 않는다.** 토큰은 그대로 통과한다
- start·end event만큼 중요하지는 않지만, **"프로세스가 어디까지 왔는지" 상태를 명시**하는 데 유용하다
- 이후 강의에서 자주 등장하므로 익숙해질 기회가 많다
