# Complex Gateway

## 개요

- **Complex gateway(복합 게이트웨이)** — **자체 커스텀 라우팅 규칙**을 정의할 수 있다
- **강사의 솔직한 평가: 실무에서 거의 쓸 일이 없다**

## 내용

### 개념

complex gateway를 쓰면 **자신만의 커스텀 라우팅 규칙(custom routing rules)** 을 정의할 수 있다.

> **다만 이상적으로는 다른 어떤 gateway로도 시나리오를 적절히 표현할 수 없을 때만 사용한다.**

즉 비즈니스 프로세스에서 **이미 배운 gateway들로 해결할 수 없는 라우팅 상황에 막혔을 때**, complex gateway를 쓰고 **필요에 맞게 정의**하면 된다.

> **기본적으로 complex gateway는 일종의 조커(joker) gateway다.**

### 강사의 솔직한 경험담

> **하지만 솔직히 말하면, 나는 지금까지 complex gateway가 실제로 필요한 use case를 단 하나도 만나 본 적이 없다.**
>
> 내가 본 바로는 **이미 배운 네 가지 gateway의 조합으로 항상 상황을 모델링할 방법을 찾을 수 있었다.**
>
> **완전성을 위해 여기서 언급하는 것이다.**
>
> **짧게 말해, 내 경험상 99.9%의 경우 complex gateway 없이 프로세스를 정의할 수 있다.**
>
> **다양한 산업의 여러 회사와 일해 온 오랜 세월 동안, 이것이 적용되거나 필요한 것을 한 번도 본 적이 없다.**

## 예시

```text
BPMN gateway 5종 — 실무 사용 빈도

◇ Exclusive     (X)  ★★★★★  결정 지점, 하나만
⊕ Parallel      (+)  ★★★★★  전부 동시, 동기화
◎ Inclusive     (O)  ★★★☆☆  임의 조합
⬡ Event based        ★★★☆☆  event에 수동적으로 반응
✳ Complex            ☆☆☆☆☆  커스텀 규칙 — 강사도 실무에서 본 적 없음


판단 순서

  이 라우팅을 4가지 gateway로 표현할 수 있는가?
        │
   ┌────┴────┐
  예         아니오
   │           │
그렇게 한다   complex gateway
(99.9%)      (0.1%, 사실상 없음)
```

## 요약

- **Complex gateway는 커스텀 라우팅 규칙을 직접 정의**하는 조커 gateway다
- **강사는 오랜 실무 경험에서 이것이 필요한 사례를 한 번도 보지 못했다**고 명시한다
- **99.9%의 경우 exclusive · parallel · inclusive · event based 네 가지 조합으로 해결된다**
- 존재는 알아두되, **complex gateway를 쓰고 싶어지면 먼저 네 가지 조합을 다시 생각해 보는 편이 낫다**
