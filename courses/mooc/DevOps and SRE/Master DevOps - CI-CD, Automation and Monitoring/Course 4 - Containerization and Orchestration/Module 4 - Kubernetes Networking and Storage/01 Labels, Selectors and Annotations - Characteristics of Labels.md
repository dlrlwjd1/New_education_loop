# Labels, Selectors and Annotations - Characteristics of Labels

## 개요
- Kubernetes 리소스에 부착하는 메타데이터인 Label(레이블)의 정의, 특징, 그리고 YAML에서의 작성법을 정리.

## 내용
### Label이란
- **key-value 쌍**으로, Kubernetes에서 리소스(Pod, Service, Deployment, Node 등 어떤 오브젝트든)를 식별하기 위해 붙이는 사용자 정의 태그.
- 주 목적: 특정 리소스를 레이블 기준으로 식별·선택(select)하는 것 — 예: ReplicationController나 ReplicaSet의 Selector가 특정 key-value와 일치하는 Pod만 선택하도록 사용.
- **레이블은 사용자에게 의미 있는 메타데이터를 제공할 뿐, Kubernetes의 핵심 기능에는 영향을 주지 않음**.
- 예: Nginx Pod에 `app: web`, `type: nginx`, `user: edureka` 같은 레이블을 붙이면, Pod 내부를 확인하지 않고도 레이블만 보고 "이 Pod는 web 애플리케이션이며 Nginx 타입이고 edureka가 만들었다"는 것을 알 수 있음.

### Label의 특징
1. **다중 레이블 가능** — 하나의 Pod(또는 다른 오브젝트)는 여러 개의 key-value 쌍을 가질 수 있음.
2. **레이블 기반 필터링** — 예: `kubectl get pod -l environment=dev`처럼 `-l` 플래그로 특정 레이블을 가진 리소스만 조회 가능(수백 개의 Pod 중 특정 레이블을 가진 10개만 선택).
3. **대소문자 구분(Case Sensitive)** — key와 value 모두 대소문자를 구분함. 예: `app=nginx`와 `App=nginx`는 서로 다른 레이블로 취급 — 실무에서는 보통 **소문자**를 표준으로 사용.
4. **여러 오브젝트에 부착 가능** — Pod, Service, Deployment, StatefulSet은 물론 **Node에도** 레이블을 붙일 수 있음.
5. **언제든 추가·제거 가능** — 오브젝트 생성 시점에 레이블을 부여할 수도 있고, 생성 후에 추가하거나 제거하는 것도 자유롭게 가능.

### YAML에서 Label 작성 예시
```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    app: nginx
    environment: dev
spec:
  ...
```
- 다른 클라우드 환경(예: AWS)에서는 이와 유사한 개념을 **"Tag"**라고 부름 — Label과 Tag는 사실상 같은 개념.

## 요약
- Label은 Kubernetes 리소스에 붙이는 대소문자 구분 key-value 메타데이터로, 핵심 기능에는 영향을 주지 않지만 `-l` 플래그를 통한 필터링·선택의 기준이 되며, Pod를 포함한 모든 오브젝트(Node 포함)에 여러 개를 자유롭게 추가·제거할 수 있다.
