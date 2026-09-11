# Headless Service - Introduction

## 개요
- StatefulSet을 다루기 직전에 Headless Service 개념을 다시 짚으며, Pod마다 DNS 항목이 생성되고 Pod가 죽어 IP가 바뀌어도 이 항목이 자동 갱신되는 구체적인 동작 방식을 설명. ([09 Services - Headless Service](09%20Services%20-%20Headless%20Service.md)에서 다룬 기본 개념의 심화판)
- 참고: 원본 자막(transcript)에는 "port"라는 단어가 반복되지만 문맥상 이는 자동 음성 인식 오류이며 실제로는 모두 **Pod**를 의미함 — 이 노트에서는 문맥에 맞게 Pod로 표기.

## 내용
### Headless Service = IP가 없는 Service
- Headless Service는 **IP 주소가 없는** 타입의 Service.
- 일반 Service(ClusterIP, NodePort, LoadBalancer)는 단일 IP로 트래픽을 로드밸런싱하지만, Headless Service는 **클라이언트가 프록시 없이 개별 Pod에 직접 연결**하도록 해줌 — 이것이 Headless Service의 핵심.

### 왜 필요한가 — Pod마다 DNS 항목 생성
- Headless Service의 역할은 Service 자체에 대한 DNS 항목이 아니라, **연결된 각 Pod를 Kubernetes DNS에 직접 노출**하는 것.
- 예를 들어 Pod가 4개 있고 이를 Headless Service로 노출하면, Pod1~Pod4 각각에 대해 자신의 IP(IP1~IP4)를 가리키는 **개별 DNS 항목**이 생성됨.
- 일반 Service(ClusterIP, NodePort, LoadBalancer)는 이런 개별 Pod용 DNS 항목을 만들지 않음 — Headless Service만의 특징.

### 사용 사례 — Pod 간 고정된 이름으로 통신
- Pod들이 서로 데이터를 복제(replicate)하는 상황을 가정: Pod가 죽으면 IP가 바뀌고, IP가 바뀌면 다른 Pod와의 복제 연결이 끊어질 수 있음.
- Headless Service 아래에서 Pod가 죽으면(주로 **StatefulSet**과 함께 사용됨 — StatefulSet은 다음 강의에서 다룸), 새 Pod가 자동으로 생성되고 **이름은 그대로 유지되지만 IP만 바뀜**.
- 이때 Headless Service가 **자동으로 DNS의 IP 항목을 갱신** — 예: Pod1의 IP가 바뀌어도 DNS에서 "Pod1"이라는 이름은 새 IP로 즉시 갱신됨.
- 그 결과 Pod2가 Pod1과 통신할 때 **IP가 아니라 이름으로 통신**하면, Pod1의 IP가 바뀌어도 Kubernetes DNS가 자동으로 최신 IP로 resolve해주므로 통신이 끊기지 않음.

### 일반 Service와의 차이
- ClusterIP, NodePort, LoadBalancer는 **단일 IP로 여러 Pod에 대한 트래픽을 로드밸런싱**하는 것이 목적.
- Headless Service는 로드밸런싱이 아니라, **각 Pod에 고유한 안정적 DNS 이름을 부여해 Pod 간 직접 통신**을 가능하게 하는 것이 목적 — Service 자체는 IP가 없으므로 DNS 항목도 Service가 아니라 각 Pod에 대해서만 생성됨.

## 요약
- Headless Service는 자기 자신은 IP를 갖지 않는 대신 연결된 각 Pod에 개별 DNS 항목을 생성하며, Pod가 죽어 재생성되어 IP가 바뀌어도 이름은 그대로 유지한 채 DNS 항목의 IP만 자동으로 갱신되므로, Pod들이 IP가 아니라 고정된 이름으로 서로 통신할 수 있게 해주고, 이 메커니즘은 주로 다음에 다룰 StatefulSet과 함께 사용된다.
