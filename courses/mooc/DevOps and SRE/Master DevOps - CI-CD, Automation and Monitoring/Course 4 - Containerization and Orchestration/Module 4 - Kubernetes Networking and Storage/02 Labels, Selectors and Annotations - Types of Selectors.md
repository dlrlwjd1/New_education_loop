# Labels, Selectors and Annotations - Types of Selectors

## 개요
- Selector의 정의와 용도(그룹핑, 컨트롤러의 관리 대상 선정, Service 라우팅), 그리고 Equality 기반 vs Set 기반 Selector의 차이를 정리.

## 내용
### Selector란
- 레이블(Label)을 기준으로 오브젝트(Pod, Service, Deployment 등)를 **필터링**하는 것.
- 예: Pod 100개 중 `app=nginx` 레이블이 붙은 10개만 조회:
```bash
kubectl get pod -l app=nginx
```

### Selector의 주요 용도
1. **리소스 그룹핑** — 레이블 기준으로 리소스를 묶어서 조회.
2. **Deployment/ReplicaSet/StatefulSet 관리** — 컨트롤러가 Selector에 정의된 레이블과 일치하는 Pod를 자신의 관리 대상으로 인식.
3. **Service 구성** — Pod를 외부에 노출하려면 Service가 필요한데, 수백 개의 Pod 중 어떤 Pod로 트래픽을 보낼지는 **Pod의 레이블을 Selector로 지정**해 결정.

### Selector의 두 유형
1. **Equality 기반 선택(Equality-based Selection)** — 단순한 key-value 쌍 하나(`matchLabels`)로 지정.
   - 연산자: **`=`(같음), `!=`(다름)**.
   - 예: `environment=production` 또는 `tier!=frontend`.
   - **제약**: 하나의 key에 여러 값을 지정할 수 없음(예: `environment=staging OR environment=production` 같은 것은 불가능) — key는 항상 고유해야 함.
2. **Set 기반 선택(Set-based Selection)** — 여러 값의 집합을 지정 가능.
   - 연산자: **`In`, `NotIn`, `Exists`**.
   - 예: `environment In (production, staging)` — 하나의 key(`environment`)에 대해 여러 값(`production` 또는 `staging`) 중 하나라도 일치하면 선택.
   - 예: `tier NotIn (frontend, backend)` — 지정한 값들에 해당하지 않는 리소스를 선택.

### 핵심 차이 요약
- Equality 기반: 하나의 key에 정확히 하나의 값만 매칭 가능(단순하지만 제한적).
- Set 기반: 하나의 key에 여러 값을 지정해, 그중 하나라도 일치하면(`In`) 또는 어느 것도 일치하지 않으면(`NotIn`) 선택 가능(더 유연함).

## 요약
- Selector는 레이블을 기준으로 리소스를 필터링·그룹핑하고 컨트롤러·Service의 관리·라우팅 대상을 정하는 메커니즘이며, Equality 기반(`=`, `!=`, key당 값 하나만 가능)과 Set 기반(`In`, `NotIn`, `Exists`, key당 여러 값 지정 가능)이라는 두 방식으로 구분된다.
