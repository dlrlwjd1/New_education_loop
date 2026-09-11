# StatefulSets - Components and Working

## 개요
- StatefulSet을 구성하는 핵심 요소(Pod Selector, Headless Service, Volume Claim Templates)와 실제 동작 순서, 장점을 정리.
- 참고: 원본 자막의 "port"는 문맥상 자동 음성 인식 오류이며 실제로는 모두 **Pod**를 의미함 — 이 노트에서는 Pod로 표기.

## 내용
### StatefulSet의 구성 요소
- **Pod Selector** — 어떤 Pod를 관리할지 선택하는 셀렉터(다른 컨트롤러와 동일한 개념).
- **Service Name(Headless Service)** — StatefulSet은 반드시 **Headless Service**를 함께 정의해야 하며, 이것이 없으면 StatefulSet은 의미가 없음. Headless Service가 각 Pod를 Kubernetes DNS에 직접 노출시켜야만 Pod 이름으로 통신할 수 있기 때문.
  - 예: 마스터-슬레이브 아키텍처에서 0번 Pod가 마스터, 1번·2번 Pod가 슬레이브라면, 슬레이브는 마스터로부터 데이터를 복제(replicate)하기 위해 마스터와 통신해야 함. 읽기 요청은 슬레이브로도 갈 수 있지만, 마스터에 쓰여진 데이터는 슬레이브에도 있어야 하므로 슬레이브가 마스터에서 데이터를 가져와야 함.
  - 이 통신은 **Pod 이름**을 통해 이뤄지는데, Pod 이름으로 통신하려면 그 이름이 **DNS에 등록**되어 있어야 함 — 그래서 StatefulSet에는 반드시 Headless Service가 필요.
- **Volume Claim Templates** — Persistent Volume 없이는 StatefulSet이 Pod 생성을 허용하지 않음. `volumeClaimTemplates`는 Pod 템플릿처럼 **PVC 템플릿**을 정의하는 부분으로, StatefulSet이 Pod를 생성할 때 이 템플릿에 따라 **자동으로 볼륨도 함께 프로비저닝**하고 그 Pod에 매핑함.

### 동작 방식(순서)
1. StatefulSet(`replicas: 3`)이 **0번 Pod**를 먼저 생성 — 컨테이너와 볼륨 스토리지가 함께 연결됨.
2. 0번 Pod가 성공적으로 실행되면, 그다음 **1번 Pod**를 생성(컨테이너 + 볼륨).
3. 1번 Pod가 성공적으로 실행되면, **2번 Pod**를 생성(컨테이너 + 볼륨) — `replicas: 3`이므로 여기서 멈춤(0, 1, 2번 총 3개).
4. 만약 0번 Pod가 실패하면, StatefulSet은 **0번 Pod를 다시 만드는 데 집중**하며 1번·2번 Pod로 넘어가지 않음 — 0번이 정상화되어야만 1번, 2번 순서로 진행(순서 있는 프로비저닝, Ordered Provisioning).

### StatefulSet의 장점
- **안정적이고 고유한 네트워크 식별자(Stable Unique Network Identifiers)** — 각 Pod는 일관되고 고유한 호스트 이름을 가지며, Pod가 죽어도 같은 이름으로 다시 생성됨.
- **안정적인 영구 스토리지(Stable Persistent Storage)** — 각 Pod는 재시작 후에도 유지되는 스토리지에 연결되어 있어, Pod가 죽어도 같은 이름으로 재생성되며 **같은 이전 볼륨을 다시 받음** — 스토리지 걱정 불필요.
- **순서 있는 배포와 스케일링(Ordered Deployment and Scaling)** — 0번 → 1번 → 2번 순서로 생성.
- **순서 있는 종료(Ordered Termination)** — 삭제/스케일 다운 시에는 **생성의 역순**으로 종료됨 — 가장 높은 순번(ordinal)부터 먼저 삭제. 예: `replicas: 4`인 경우 생성은 0→1→2→3 순서, StatefulSet을 삭제하면 3번 → 2번 → 1번 → 0번 순서로 종료.

## 요약
- StatefulSet은 관리할 Pod를 정하는 Pod Selector, Pod 이름을 DNS에 등록해 Pod 간 통신을 가능하게 하는 필수 요소인 Headless Service, 그리고 Pod 생성 시 자동으로 전용 볼륨을 프로비저닝하는 Volume Claim Templates로 구성되며, Pod는 0번부터 순서대로 이전 Pod가 정상 기동된 후에만 생성되고 삭제 시에는 그 역순으로 종료되어, 안정적인 네트워크 식별자·영구 스토리지·순서 있는 배포와 종료라는 장점을 제공한다.
