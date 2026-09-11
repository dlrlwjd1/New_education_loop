# Helm Charts - Demonstration - Deploying and Testing the Chart

## 개요
- Helm Chart의 템플릿(`templates/`)과 값 파일(`values.yaml`)이 분리되어 있는 구조를 살펴보고, `helm lint`·`helm template`·`helm install`로 Chart를 검증·렌더링·배포.
- 참고: 원본 자막에서 Pod를 가리킬 때 "part"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기.

## 내용
### 템플릿과 값의 분리 — 왜 이렇게 만드는가
```bash
cat templates/deployment.yaml
```
- 이 파일 안에는 이름, 레이블, `replicas` 등의 값이 **하드코딩되어 있지 않고**, `{{ .Values.xxx }}` 같은 **Go 템플릿 문법**(Kubernetes 자체가 Go 언어로 작성됨)으로 되어 있음.
- 예: `replicas` 값은 YAML에 직접 쓰지 않고, `values.yaml`의 `replicaCount` 값을 그대로 가져와서 사용.
```bash
cat values.yaml    # replicaCount: 1 확인
cat templates/service.yaml
```
- `service.yaml`도 이름·레이블 정도만 고정되어 있고, **`type`(ClusterIP/NodePort/LoadBalancer 등)**을 포함한 나머지 값은 모두 `values.yaml`에서 가져옴.
- 이렇게 분리하는 이유: 운영 환경별로 요구사항이 다르기 때문 — 예를 들어 프로덕션은 LoadBalancer나 NodePort, 스테이징은 NodePort, 개발 환경은 ClusterIP를 쓰고 싶을 수 있고, 볼륨 크기도 개발 환경은 10GB, 프로덕션은 500GB처럼 다를 수 있음. YAML 템플릿 자체를 매번 고치면 실수하기 쉽고 번거로우므로, **`values.yaml`만 환경별로 바꾸고 템플릿은 그대로 유지**하는 것이 Helm의 핵심 이점.
```bash
grep -i type values.yaml   # service.type: ClusterIP 확인
```

### Chart 검증 — helm lint
```bash
helm lint mychart
```
- Chart 문법과 구조에 문제가 없는지 검사 — "1 chart linted, 0 failed" 같은 결과가 나오면 배포해도 안전하다는 뜻.

### 템플릿 렌더링 미리보기 — helm template
```bash
helm template mychart
```
- `values.yaml`의 값들이 각 템플릿(`deployment.yaml`, `service.yaml` 등)에 실제로 어떻게 반영되는지 **렌더링된 최종 YAML을 미리 화면에 출력**해줌.
- 이 명령을 실행해도 **Chart 안의 실제 파일(`templates/*.yaml`)은 전혀 변경되지 않음** — 단지 "이 값으로 배포하면 실제로 이런 YAML이 만들어진다"를 미리 확인하는 용도.
- 예: Service는 `ClusterIP` 타입에 `port: 80`, Deployment는 `replicas: 1`로 렌더링됨 — `values.yaml`의 설정과 일치.

### Chart 배포 — helm install
```bash
helm list   # 현재 설치된 릴리스 없음 확인
helm install my-app mychart
```
- **`helm install <릴리스 이름> <Chart 이름>`** 형식 — `my-app`은 사용자가 정하는 릴리스 이름, `mychart`는 로컬에 있는 Chart 디렉터리.
```bash
kubectl get deployment,pod,svc -w
```
- 배포가 완료되면 `my-app-mychart`라는 이름의 Deployment가 생성되고, `replicaCount: 1`이었으므로 **Pod가 1개** 생성되며, `values.yaml`에서 지정한 대로 **ClusterIP 타입의 Service**가 생성됨.
```bash
helm list
```
- `my-app`이 **Revision 1**로 설치된 것을 확인.

## 요약
- Helm Chart는 리소스 이름·레이블 등 최소한만 고정하고 나머지 값(레플리카 수, Service 타입 등)은 Go 템플릿 문법으로 `values.yaml`을 참조하게 만들어, 환경별로 `values.yaml`만 바꾸면 템플릿을 건드리지 않고도 다른 설정으로 배포할 수 있게 해주며, `helm lint`로 Chart 문법을 검증하고 `helm template`로 실제 배포될 YAML을 미리 렌더링해 확인한 뒤 `helm install <릴리스명> <Chart명>`으로 배포하면 `values.yaml`에 정의된 설정 그대로 Deployment와 Service가 생성된다.
