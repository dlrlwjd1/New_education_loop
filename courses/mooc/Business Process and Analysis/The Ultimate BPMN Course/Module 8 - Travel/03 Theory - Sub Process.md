# Theory – Sub Process

## 개요

- **Sub-process(하위 프로세스)** — 정보를 압축하고 프로세스 모델을 효과적으로 조직하는 방법
- 핵심: **계층(hierarchy)** 을 도입한다
- Link event와의 결정적 차이: **link event는 같은 레벨, sub-process는 다른 레벨**

## 내용

### 개념

sub-process는 **더 상세한 다른 프로세스로 연결**되어 **다른 상세도 레벨(level of detail)로 이동**시킨다.

> **같은 레벨에서 작동하는 link event와 달리, sub-process는 프로세스를 계층적으로 구조화할 수 있게 해 준다.**

### 표시 방법

Bookworm 서점 프로세스에서 **`ship the item(물품 배송)` task에 작은 플러스(+) 기호**가 붙어 있다.

> **이 기호는 이 task 아래에 프로세스 전체가 있다는 뜻이다.**

### 동작 방식

1. **토큰이 해당 task에 도달**하면 → **아래의 sub-process가 통지받고 촉발**된다
2. **sub-process가 실행되는 동안 상위 프로세스의 토큰은 대기**한다
3. **sub-process가 end event에 도달**하면 → **상위 프로세스가 통지**받고
4. **대기 중이던 토큰이 풀려나** 상위 프로세스의 end event를 향해 계속 진행한다

### 계층 레벨(hierarchy levels)

sub-process는 BPMN에 **계층 레벨** 개념을 도입한다.

| 레벨 | 내용 |
|---|---|
| **Level 1** | 상위 프로세스 레벨. **`ship the item` 같은 고수준 추상화(high level abstraction)** |
| **Level 2** | 아래의 sub-process. **level 1에서 서술된 activity의 상세 단계**를 제공한다 |

**예시**

- **Level 1**: `ship the item` — **하나의 activity**
- **Level 2**: 같은 task가 **프로세스 전체로 확장**되어, 배송이 실제로 어떻게 준비되고 실행되는지 상세히 보여준다

### Sub-process와 Link event의 결정적 차이

> **둘은 매우 다른 목적을 갖는다.**
>
> - **Sub-process** — **다른 상세도 레벨로 리디렉트**한다. **추상화와 상세 서술을 가능하게 한다**
> - **Link event** — 프로세스를 **관리 가능한 부분으로 자른다.** **같은 상세도 레벨에 머문다**

## 예시

```text
Sub-process — 계층 구조

Level 1 (상위 프로세스)

(○) → [주문 처리] → [물품 배송 ⊞] → (◎)
                          │  ← 플러스 기호 = 아래에 프로세스가 있다
                          │     토큰이 여기서 대기한다
                          ↓
Level 2 (하위 프로세스)

        (○) → [포장재 준비] → [물품 포장] → [운송장 출력]
                                                  ↓
                            (◎) ← [배송업체 인계]
                             │
                             └─→ 상위 프로세스에 통지
                                 대기 중이던 토큰이 풀려난다


Link event vs Sub-process

Link event — 같은 레벨, 옆으로 자르기
  Part 1: (○) → [A] → [B] → (▶ 링크)
  Part 2: (▷ 링크) → [C] → [D] → (◎)
  ← 상세도는 같다. 길이만 나눴다

Sub-process — 다른 레벨, 아래로 파고들기
  Level 1: (○) → [A] → [B ⊞] → (◎)
                        │
  Level 2:             (○) → [b1] → [b2] → (◎)
  ← 같은 일을 더 자세히 본다
```

## 요약

- **Sub-process는 task 아래에 프로세스 전체를 숨긴다.** 표시는 **작은 플러스(+) 기호**
- **상위 토큰은 sub-process가 끝날 때까지 대기**한다
- **Level 1은 추상화, Level 2는 상세**라는 계층 구조를 만든다
- **Link event는 같은 레벨에서 옆으로 자르고, sub-process는 아래 레벨로 파고든다** — 이 차이가 핵심이다
- 높은 레벨에서 정보를 추상화하고 낮은 레벨에서 상세 단계를 제공하는 데 사용한다
