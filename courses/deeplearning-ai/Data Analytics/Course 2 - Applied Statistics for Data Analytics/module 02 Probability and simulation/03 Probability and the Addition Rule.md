# Probability and the Addition Rule

## 개요
- **확률(probability)** = 사건이 일어날 가능성. 세 용어: **실험(experiment)·사건(event)·결과(outcome)**.
- **확률 = 유리한 결과 수 / 가능한 결과 수(표본 공간)**, 0~1(또는 0~100%).
- **덧셈 규칙(addition rule)**: **상호 배타적(mutually exclusive)** 사건들의 확률은 더할 수 있다.

## 내용

### 기본 용어 (음악 구독 예: 10명 중 basic 3·premium 2·취소 5)
- **실험(experiment)**: 무작위로 고객 한 명 선택.
- **사건(event)**: 관심 있는 결과 집합(예: premium 구독자).
- **결과(outcome)**: 실험의 개별 결과(premium 고객 각각).
- **P(premium) = 유리한 결과 / 가능한 결과** = 2/10 = **20%**. 가능한 결과 전체 = **표본 공간(sample space)**.
- 확률은 **비율(0~1)** 또는 **퍼센트**로 표현.

### 덧셈 규칙(addition rule)
- "basic 또는 premium 구독자를 뽑을 확률?" → 분모 10 그대로, 분자는 basic 3 + premium 2 = 5 → **50%**.
- **상호 배타적(mutually exclusive)**: 한 사건이 두 결과를 동시에 가질 수 없음(basic이면 premium 아님) → 이때만 **더할 수 있다**.
- 확률은 **0 미만·1 초과 불가**(항상 일어남=1, 음의 확률 없음).

## 예시

### 확률 계산
```
P(사건) = 유리한 결과 수 / 표본 공간 크기
P(premium) = 2/10 = 20%
P(basic 또는 premium) = (3+2)/10 = 50%   ← 덧셈 규칙(상호 배타적)
```

## 요약
- **확률 = 유리한 결과 / 가능한 결과(표본 공간)**, 범위 0~1이며 **실험·사건·결과** 로 기술한다.
- **덧셈 규칙**은 **상호 배타적** 사건의 확률을 더하는 것(basic 또는 premium)이며, 배타적이 아니면 쓸 수 없다.
- 다음 강의는 **곱셈 규칙과 여사건 규칙(multiplication and complement rules)** 이다.
