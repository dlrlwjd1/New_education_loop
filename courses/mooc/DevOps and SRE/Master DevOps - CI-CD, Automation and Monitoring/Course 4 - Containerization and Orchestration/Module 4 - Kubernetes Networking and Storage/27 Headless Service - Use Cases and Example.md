# Headless Service - Use Cases and Example

## 개요
- Headless Service의 대표적인 사용 사례(Stateful 애플리케이션, 커스텀 로드밸런싱, 서비스 디스커버리)와 최소 YAML 예시를 정리.
- 참고: 원본 자막의 "port"는 문맥상 자동 음성 인식 오류이며 실제로는 **Pod**를 의미함 — 이 노트에서는 Pod로 표기.

## 내용
### 사용 사례 1 — Stateful 애플리케이션
- MySQL, MongoDB, PostgreSQL 같은 데이터베이스처럼 여러 Pod에 걸쳐 **데이터·설정을 복제(replicate)**해야 하는 stateful 애플리케이션에서 Headless Service가 필요.
- Headless Service는 이런 Pod들에 대해 **직접 접근(direct access)**을 허용하면서 **상태 일관성(state consistency)**과 **데이터 복제**를 유지할 수 있게 해줌.

### 사용 사례 2 — 커스텀 로드밸런싱(Custom Load Balancing)
- ClusterIP, LoadBalancer, NodePort는 트래픽을 **모든 Pod에 균등하게 분산**함.
- 하지만 트래픽을 **항상 특정 Pod로만** 보내고 싶은 경우(예: 위치(location) 기준, 리소스 사용량 기준)에는 이런 균등 분산 방식이 맞지 않음.
- 예: 미국 동부(US East), 서부(US West), 중부(US Central)에 각각 워커 노드가 있고, 뉴욕에서 접속하는 사용자는 가장 가까운 US East의 Pod에 접근하고 싶은 경우 — Headless Service를 쓰면 트래픽을 원하는 특정 Pod로 직접 지정해 보낼 수 있음.

### 사용 사례 3 — 서비스 디스커버리(Service Discovery)
- 마이크로서비스 아키텍처에서 Headless Service는 서비스들이 서로를 **찾고 직접 통신**할 수 있게 도와줌 — Pod와 Pod가 직접 통신하며 동적인 통신(dynamic communication)이 가능해짐.
- 일반 Service가 필요한 이유는 Pod의 IP가 바뀌기 때문에 IP로 통신할 수 없고, Pod 이름 자체는 원래 DNS로 해석되지 않기 때문.
- 하지만 **Headless Service가 노출하는 Pod들은 Kubernetes DNS로 이름 해석(resolve)이 가능**해짐 — 그래서 마이크로서비스 간 직접 통신이 필요할 때 Headless Service를 사용.

### Headless Service YAML 예시
```yaml
apiVersion: v1
kind: Service
metadata:
  name: headless-service
spec:
  clusterIP: None
  selector:
    app: web
  ports:
    - port: 80
      targetPort: 8080
```
- 일반 Service YAML과 거의 동일하며, **`clusterIP: None`**이 유일한 차이 — 이 한 줄이 있으면 Headless Service가 됨.
- `selector: app: web` — 이 레이블을 가진 모든 Pod를 이 Headless Service가 관리(노출).
- `port: 80`, `targetPort: 8080` — Service는 80번 포트로 요청을 받아 Pod의 컨테이너 포트 8080으로 전달.
- 핵심은 **`clusterIP: None`**이며, 이 필드가 있는 Service는 무조건 Headless Service.

### 다음 단계
- 이후 강의에서 **StatefulSet**을 먼저 다루고, 그 다음 Headless Service를 StatefulSet과 함께 사용하는 데모를 진행 예정.

## 요약
- Headless Service는 데이터베이스 같은 Stateful 애플리케이션의 상태 일관성·복제 유지, 위치나 리소스 기준의 커스텀 로드밸런싱, 마이크로서비스 간 직접 통신을 위한 서비스 디스커버리에 주로 사용되며, YAML에서는 일반 Service와 동일한 구조에 `clusterIP: None`만 추가하면 되고, 이렇게 노출된 각 Pod는 Kubernetes DNS로 이름 해석이 가능해진다.
