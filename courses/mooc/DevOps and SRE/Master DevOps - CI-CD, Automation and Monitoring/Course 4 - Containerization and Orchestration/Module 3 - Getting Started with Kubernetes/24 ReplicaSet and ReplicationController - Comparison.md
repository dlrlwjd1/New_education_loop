# ReplicaSet and ReplicationController - Comparison

## 개요
- ReplicationController YAML 예시를 살펴보고, ReplicaSet과의 핵심 차이(Selector 지원 범위, 필수 여부, 롤링 업데이트, 사용 현황·폐기 상태)를 표로 정리.

## 내용
### ReplicationController YAML 예시
```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: my-app-rc
spec:
  replicas: 3
  selector:
    app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app-container
          image: my-app-image
```
- ReplicaSet과 겉보기엔 매우 유사 — 주요 차이는 `kind: ReplicationController`, `apiVersion: v1`(ReplicaSet은 `apps/v1`).

### 핵심 차이점
| 항목 | ReplicationController | ReplicaSet |
|---|---|---|
| 목적 | 지정된 Pod Replica 수 유지 | 동일 목적 + 고급 기능 추가 |
| Selector 지원 | **Equality 기반**만 지원(레이블 1개만 지정 가능) | **Equality + Set 기반** 모두 지원(여러 레이블 조합 가능 — 그래서 이름이 "Set") |
| Selector 필수 여부 | **선택 사항**(생략해도 동작, 레거시 방식) | **필수** — 나중에 Kubernetes 커뮤니티가 의무화 |
| 롤링 업데이트 | 직접 지원 안 함, 수동 개입 필요 | 직접 지원하지 않지만 **Deployment와 함께 사용**하면 롤링 업데이트 가능(Deployment가 내부적으로 ReplicaSet을 활용) |
| 사용 현황 | 레거시 — 오래된 Kubernetes 버전(1.0)에서 사용 | Kubernetes 1.3 이상(현재 최신 1.33)에서 현대적으로 사용, 보통 **Deployment를 통해 간접적으로 사용** |
| 폐기(Deprecation) 상태 | **Deprecated** — 언젠가 제거될 예정(생성은 아직 가능) | **제거되지 않음** — Deployment의 빌딩 블록으로 계속 적극 사용됨 |

### 부연 설명
- ReplicationController의 Selector는 `key: value` 형태로 **하나의 레이블**만 지정 가능하지만, ReplicaSet은 `matchLabels`/`matchExpressions`로 **여러 레이블의 집합(Set)**을 지정할 수 있어 이름이 "Replica**Set**"이 됨.
- 두 컨트롤러 모두 롤링 업데이트를 직접 지원하지 않지만, ReplicaSet은 **Deployment**와 결합해 롤링 업데이트(예: 애플리케이션 버전 1.21 → 1.22)를 수행할 수 있다는 점이 실질적인 차이.
- Kubernetes 커뮤니티는 오래전 ReplicationController를 만들었으나, 이후 더 유연한 Selector와 확장성을 갖춘 ReplicaSet을 도입 — 오늘날 ReplicaSet은 대부분 Deployment 리소스를 통해 간접적으로 사용됨.

## 요약
- ReplicationController와 ReplicaSet 모두 desired Pod 수를 유지하는 컨트롤러이지만, ReplicationController는 Selector가 선택 사항이고 레이블 1개만 지원하는 레거시(Deprecated) 리소스인 반면, ReplicaSet은 Selector가 필수이며 여러 레이블(Set 기반) 지정이 가능하고 Deployment의 빌딩 블록으로 현재까지 적극 사용되는 현대적인 컨트롤러다.
