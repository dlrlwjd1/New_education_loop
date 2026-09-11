# Services - ClusterIP (Default) Example

## 개요
- `type` 필드가 없으면 기본값이 ClusterIP가 되는 원리와, `selector`·`port`·`targetPort`가 실제로 어떻게 트래픽을 라우팅하는지 YAML 예시로 정리.

## 내용
### ClusterIP YAML 예시
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-clusterip-service
spec:
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 9376
```
- **`type` 필드가 없으면 기본적으로 ClusterIP**로 간주됨 — API 버전, Kind, 메타데이터, 스펙 네 섹션 중 스펙에 `type`을 명시하지 않은 것이 핵심 단서.

### `selector`의 역할
- `selector.app: my-app` — **레이블이 `app: my-app`인 Pod**로 트래픽을 전달한다는 의미. 클러스터에 Pod가 수백 개 있어도, 이 레이블과 일치하는 Pod에만 트래픽이 전달됨(그 Pod만 이 Service에 노출됨).

### `port`와 `targetPort`의 차이
- **`port: 80`** — Service가 실제로 트래픽을 **수신(listen)**하는 포트.
- **`targetPort: 9376`** — Service가 트래픽을 전달할 대상인, **Pod 안 컨테이너가 실제로 리스닝하는 포트**.
- 흐름: 클러스터 내 다른 Pod(또는 애플리케이션)가 이 Service의 포트 80으로 트래픽을 보내면 → Service가 레이블이 일치하는 Pod로 → Pod의 9376번 포트로 전달.
- 즉, "Service는 포트 80으로 트래픽을 받아 레이블이 `app`인 Pod의 포트 9376으로 라우팅한다"는 것이 이 예시의 핵심 동작.

## 요약
- `type` 필드를 생략한 Service YAML은 기본적으로 ClusterIP가 되며, `selector`로 레이블이 일치하는 Pod를 지정하고 `port`(Service가 수신하는 포트)와 `targetPort`(Pod 컨테이너가 실제로 리스닝하는 포트)를 통해 클러스터 내부 트래픽을 정확한 Pod로 라우팅한다.
