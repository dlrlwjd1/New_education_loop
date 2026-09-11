# Services - ExternalName Service

## 개요
- LoadBalancer 서비스의 최종 통신 흐름을 복습하고, 클러스터 내부에서 외부 DNS 이름을 그대로 사용할 수 있게 해주는 ExternalName Service를 정리.

## 내용
### LoadBalancer 통신 흐름 (복습)
- 이 설정은 서비스에 외부(External) IP를 할당해, **로드밸런서로 들어온 트래픽을 노드로, 노드에서 다시 Service로, Service에서 최종적으로 Pod로** 전달.
- 흐름: 로드밸런서 → 노드 → Service → Pod.

### ExternalName Service란
- 포트 통신을 위한 것이 아니라, **Kubernetes Service를 외부 DNS 이름에 매핑(alias)**하기 위한 서비스 타입 — 상호운용성(interoperability) 시나리오에 사용.
- 예: Kubernetes 클러스터 외부에 있는 데이터베이스(사설 IP라 외부에서 직접 접근 불가)를 클러스터 내부 애플리케이션이 특정 DNS 이름으로 접근할 수 있게 하고 싶을 때 사용.
- **클러스터를 통해 트래픽을 프록시하지 않고도** 외부 서비스를 Kubernetes 환경에 통합할 수 있어 유용 — 예: 프론트엔드는 Kubernetes Pod로 실행되고 데이터베이스는 Kubernetes 외부에서 실행 중일 때, IP 주소 없이 DNS 이름만으로 두 시스템을 연동.

### YAML 예시
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-external-service
spec:
  type: ExternalName
  externalName: external.example.com
```
- 포트 설정이 전혀 필요 없음 — 서비스 타입을 `ExternalName`으로 지정하고 `externalName`에 매핑할 외부 호스트 이름만 지정.
- 클러스터 내에서 `my-external-service`로 보내는 모든 요청은 자동으로 `external.example.com`으로 리다이렉트됨.

## 요약
- ExternalName Service는 포트 기반 트래픽 전달이 아니라 Kubernetes Service 이름을 외부 DNS 이름(`externalName`)에 그대로 매핑하는 별칭(alias) 메커니즘으로, 클러스터 외부의 리소스(예: 외부 데이터베이스)를 IP 없이 DNS 이름만으로 클러스터 내부 애플리케이션과 연동할 때 유용하다.
