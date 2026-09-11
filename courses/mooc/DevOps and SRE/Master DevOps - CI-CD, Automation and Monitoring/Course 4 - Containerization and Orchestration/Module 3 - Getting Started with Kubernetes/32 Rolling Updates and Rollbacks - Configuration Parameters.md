# Rolling Updates and Rollbacks - Configuration Parameters

## 개요
- Rolling Update 전략을 세밀하게 통제하는 두 핵심 파라미터 `maxSurge`와 `maxUnavailable`의 의미와 동작 방식을 구체적인 예시로 정리.

## 내용
### `strategy: RollingUpdate`
- Deployment 생성 시 전략 타입을 `RollingUpdate`로 지정 — 업데이트 시 롤링 업데이트 방식을 사용하겠다는 선언.
- 이 전략 아래 두 옵션 **`maxSurge`**와 **`maxUnavailable`**로 세부 동작을 제어(둘 다 롤링 업데이트가 진행되는 동안에만 영향을 미침).

### `maxSurge` — 초과 생성 가능한 Pod 수
- **desired 복제본 수를 초과해 얼마나 많은 새 Pod를 추가로 만들 수 있는지** 제어.
- 예: Replica 3개인 Deployment에서 `maxSurge: 1`로 설정하면, 업데이트 중 새 ReplicaSet이 새 Pod(예: `pod1-new`)를 하나 추가로 만들어 **일시적으로 총 4개**(기존 3 + Surge 1)까지 허용 — 새 Pod가 완전히 준비(예: 최소 60초 대기)되면 기존 Pod 하나를 종료해 다시 3개로 맞춤. 이 과정을 Pod마다 반복.
- `maxSurge: 0`으로 설정하면 초과 생성이 전혀 허용되지 않음 — 반드시 **기존 Pod를 먼저 종료한 뒤에야** 새 Pod를 생성(총 Pod 수는 항상 3을 넘지 않음).

### `maxUnavailable` — 사용 불가능해도 되는 최대 Pod 수
- **업데이트 도중 최대 몇 개의 Pod까지 사용 불가능(unavailable) 상태를 허용**할지 제어.
- `maxUnavailable: 0` — 항상 desired 개수(예: 3개)를 유지해야 함 — Pod 수가 그 아래로 절대 내려가면 안 됨. (`maxSurge: 1`과 함께라면, 새 Pod를 먼저 만들어 4개로 늘린 뒤에야 기존 Pod를 하나 삭제하는 방식으로 항상 3개 이상을 유지.)
- `maxUnavailable: 1` — 최대 1개까지는 사용 불가능해도 허용 — desired 3에서 1을 뺀 **2개까지 줄어드는 것**을 허용. 이 경우 새 Pod가 아직 온라인 상태가 아니어도 기존 Pod를 먼저 삭제할 수 있음(그래도 최소 2개는 유지).

### 두 파라미터의 관계
- **`maxSurge`**는 "얼마나 더 많이 만들 수 있는가"(상한 초과), **`maxUnavailable`**은 "얼마나 부족해도 되는가"(하한 미달)를 각각 제어 — 두 값을 조합해 조직의 위험 감수 성향에 맞는 롤링 업데이트 속도와 안정성의 균형을 잡을 수 있음.

## 요약
- 롤링 업데이트는 `maxSurge`(desired 수를 초과해 새 Pod를 미리 얼마나 만들 수 있는지)와 `maxUnavailable`(desired 수 아래로 얼마나 내려가도 되는지) 두 파라미터로 세밀하게 제어되며, 예를 들어 `maxSurge=1, maxUnavailable=0`이면 새 Pod를 먼저 만들어 늘린 뒤 기존 것을 지우는 안전한 방식으로, `maxUnavailable=1`이면 기존 Pod를 먼저 지워도 되는 더 빠르지만 가용성이 다소 낮아지는 방식으로 롤링 업데이트가 진행된다.
