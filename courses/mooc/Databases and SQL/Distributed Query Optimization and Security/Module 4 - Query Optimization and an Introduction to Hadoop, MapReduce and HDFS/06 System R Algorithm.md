# System R* Algorithm

## 개요
- System R*는 분산 환경에서의 System R로, 사이트 간 조인을 수행할 때 테이블(또는 행)을 어떻게 전송할지에 대한 전략을 비용 모델로 비교해 최선의 전략을 선택한다.
- 조인을 위한 행 전송에는 크게 **테이블 전체를 통째로 전송(ship whole)**하는 방식과 **필요한 행만 그때그때 가져오는(fetch as needed)** 방식이 있으며, System R*는 이를 확장한 4가지 전략의 비용을 계산해 최소 비용 전략을 선택한다.

## 내용

### 두 가지 기본 전략
- **Ship whole (테이블 전체 전송)**: 관계 전체를 조인이 이루어질 사이트로 전송해 임시 관계(temporary relation)로 저장한다. 두 테이블이 모두 정렬(sorted)되어 있다면 merge join을 파이프라인 방식으로 처리할 수 있어 효율적이다.
- **Fetch as needed (필요 시 행 단위 전송)**: 외부 관계(external relation)를 순차 스캔(scan)하면서, 각 튜플의 조인 값을 내부 관계(internal relation)가 있는 사이트로 보내 일치하는 튜플을 찾고, 그 결과를 외부 사이트로 돌려받는다. 한 번에 한 행씩 주고받는다.
- 두 방식의 트레이드오프: ship whole은 전송되는 데이터량은 클 수 있지만 메시지 횟수는 적다(테이블을 한 번만 전송). fetch as needed는 관계가 작을 때는 오히려 ship whole이 유리할 수 있고, 관계가 크면서 선택도(selectivity factor)가 좋을(즉 적은 행만 필요할) 때는 fetch as needed가 유리할 수 있다. 결국 통계(statistics)를 통해 어느 전략이 더 저렴한지 판단해야 한다.

### 선택도(selectivity factor) S 정의
- R의 행을 S로 보내 세미조인(semi-join) 형태로 매칭되는 행 수를 구하고, 이를 R의 전체 행 수(card R)로 나눈 값을 선택도 S로 정의한다. 이 S 값이 이후 각 전략의 비용 계산에서 반복적으로 사용되는 상수다.

### 네 가지 조인 전략과 비용 모델
System R*는 R ⋈ S 조인에 대해 다음 네 가지 전략의 비용을 계산하고, 가장 비용이 낮은 전략을 선택한다. (T_CPU는 한 번의 CPU 읽기 비용을 의미)

1. **전략 1 — 외부 테이블 R을 내부 테이블 S가 있는 사이트로 전송(ship external R to internal S)**
   - R이 도착하는 대로 merge join으로 파이프라인 처리 가능
   - 비용 = R의 각 행을 읽는 비용(`T_CPU × card(R)`) + R 전체를 S가 있는 사이트로 전송하는 비용(size of R 전송) + S에서 실제로 조인에 필요한 행만 읽는 비용(`T_CPU × (S × card(R))`, 이는 선택도 S 덕분에 card(R)보다 작은 값)

2. **전략 2 — 내부 테이블 S를 외부 테이블 R이 있는 사이트로 전송(ship internal S back to external R)**
   - 이 경우 merge join을 바로 적용할 수 없고, S를 먼저 저장해야 한다.
   - 비용 = S 전체를 읽는 비용(`T_CPU × card(S)`) + S 전체를 전송하는 비용(size of S 전송) + R의 행들을 조회하며 S와 매칭하는 비용(`T_CPU × (card(R) × S)`, 선택도 S 적용)

3. **전략 3 — Fetch as needed (R의 각 튜플마다 S에서 필요한 만큼만 가져옴)**
   - 비용 = R의 각 행을 읽는 비용(`T_CPU × card(R)`) + 조인에 필요한 컬럼 값만 전송하는 비용(`length(A) × card(R)`) + S에서 대응되는 행을 조회하는 비용(`T_CPU × (S × card(R))`) + 결과 행을 R이 있는 사이트로 되돌려 보내는 전송 비용(`S × length(S) × card(R)`)

4. **전략 4 — 두 관계를 모두 제3의 사이트로 이동시켜 조인 수행(move both relations to a third site)**
   - 비용 = S 전체를 제3의 사이트로 가져와 저장하는 비용(전송 + 저장) + R 전체를 제3의 사이트로 가져와 저장하는 비용(전송 + 저장) + 저장 과정에서 R의 각 행에 대응하는 S의 행을 조회하는 비용(`T_CPU × (S × card(R))`)

### 최종 선택 방식
- System R*는 조인을 수행할 때마다 이 네 가지 전략의 비용을 모두 계산하고, 그중 가장 비용이 낮은(least cost) 전략을 그 조인의 실행 전략으로 선택한다.

## 예시
- 선택도(추정): `S = card(R semi-join S) / card(R)` (R의 행을 S와 매칭했을 때 선택되는 비율)
- 전략 1 비용: `T_CPU·card(R) + transfer(size(R)) + T_CPU·(S·card(R))`
- 전략 2 비용: `T_CPU·card(S) + transfer(size(S)) + T_CPU·(card(R)·S)`
- 전략 3 비용: `T_CPU·card(R) + length(A)·card(R) + T_CPU·(S·card(R)) + S·length(S)·card(R)`
- 전략 4 비용: `transfer(size(S)) + transfer(size(R)) + T_CPU·(S·card(R))`
- 관계가 작을 때는 ship-whole(전략 1, 2) 계열이, 관계가 크고 선택도가 좋을 때는 fetch-as-needed(전략 3)가 유리할 수 있다는 것이 강의에서 제시된 경험칙이다.

## 요약
- System R*는 R ⋈ S 조인을 수행할 때 (1) 외부 R을 내부 S 사이트로 전송, (2) 내부 S를 외부 R 사이트로 전송, (3) fetch-as-needed로 행 단위 전송, (4) 두 관계를 제3의 사이트로 이동 — 이렇게 네 가지 전략의 비용을 각각 계산한다.
- 비용 계산에는 T_CPU(CPU 읽기 비용), card(R)/card(S)(행 수), 전송 크기(transfer size), 그리고 세미조인 기반 선택도 S가 공통적으로 사용된다.
- 네 전략의 비용을 비교해 가장 저렴한 전략을 그 조인의 실행 방법으로 선택하는 것이 System R*의 핵심 원리다.
