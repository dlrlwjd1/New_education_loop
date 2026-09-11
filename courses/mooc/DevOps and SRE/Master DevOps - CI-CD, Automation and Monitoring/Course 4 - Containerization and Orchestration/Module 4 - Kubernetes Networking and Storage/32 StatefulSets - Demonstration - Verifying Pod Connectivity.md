# StatefulSets - Demonstration - Verifying Pod Connectivity

## 개요
- StatefulSet YAML을 실제로 적용해 PVC와 Pod가 순서대로 생성되는 과정을 관찰하고, Headless Service의 DNS를 통해 Pod끼리 이름으로 통신 가능함을 `ping`/`curl`로 검증.
- 참고: 원본 자막에서 Pod를 가리킬 때 "part"/"port"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기(실제 네트워크 포트는 "port 80"처럼 그대로 유지).

## 내용
### StatefulSet 적용과 순서 있는 생성 관찰
```bash
kubectl get sts,pod,pvc
```
- 적용 전에는 Headless Service만 존재하고 StatefulSet·Pod·PVC는 없음.
```bash
kubectl apply -f statefulset.yaml
```
- `web` StatefulSet 생성됨(`web created`) — 첫 Pod가 곧바로 Running 상태가 되지 않고 **Pending → ContainerCreating** 순서를 거침. 이는 **Pod 생성 전에 먼저 PVC가 만들어지기 때문**.
- `kubectl get sts,pod,pvc`를 반복 관찰한 결과:
  1. 첫 번째 PVC(`www-web-0`)가 생성됨 — StorageClass `standard-rwo`에서 볼륨이 연결됨(Bound).
  2. PVC가 Bound된 후에야 해당 Pod(`web-0`)가 ContainerCreating 상태로 넘어감.
  3. 이 과정이 **PVC → Pod** 순서로 `web-0`, `web-1`, `web-2`까지 하나씩 순차적으로 반복됨.

### PVC 이름 규칙
- PVC 이름은 `volumeClaimTemplates.metadata.name`(예: `www`)과 **Pod 이름을 조합**해 만들어짐 — 형식은 `<template 이름>-<pod 이름>`.
- 그 결과: Pod 이름은 `web-0`, `web-1`, `web-2`, PVC 이름은 각각 **`www-web-0`, `www-web-1`, `www-web-2`**.
- `storageClassName`을 지정하지 않았으므로 Kubernetes가 자동으로 클러스터의 기본(default) StorageClass(`standard-rwo`)를 사용해 3개의 볼륨을 생성.

### 결과 확인
- GCP 콘솔의 Disks 목록에서 **1GB 볼륨 3개**(총 3GB)가 새로 생성된 것을 확인.
- `web-0`, `web-1`, `web-2` 세 Pod가 모두 정상적으로 Running 상태.

### IP를 이용한 Pod 간 통신 테스트
```bash
kubectl get pod -o wide
```
- 각 Pod의 IP 주소 확인.
```bash
kubectl exec -it web-1 -- bash
```
- `web-1` Pod의 컨테이너로 진입.
```bash
curl <web-1의 IP>:80
```
- nginx 응답("403 Forbidden"이지만 `nginx/1.21.6`이 응답하는 것으로 보아 정상 통신 확인 — 페이지 콘텐츠는 없지만 서버가 응답함).
```bash
apt-get update
apt-get install iputils-ping -y
ping <web-0의 IP>
ping <web-1의 IP>   # 자기 자신도 ping 가능
```
- `ping` 명령이 기본 이미지에 없어 설치 후 테스트 — **IP 기준으로 다른 Pod(`web-0`), 자기 자신(`web-1`) 모두 정상적으로 통신** 확인.

### 이름(DNS)을 이용한 Pod 간 통신 테스트 — Headless Service의 효과
```bash
kubectl get svc   # 서비스 이름 확인: nginx
ping web-0.nginx
```
- Pod의 **전체 DNS 이름**은 `<Pod 이름>.<Headless Service 이름>` 형식(예: `web-0.nginx`).
- `web-1` 컨테이너 안에서 `web-0.nginx`로 `ping`하면 **IP로 직접 ping했을 때와 동일한 주소(예: `10.1.0.8.5`)로 정상 resolve**됨 — DNS 해석이 정확히 동작함을 확인.
- 같은 방식으로 `web-2.nginx`도 해당 Pod의 IP(예: `10.1.0.8.6`)로 정상 resolve.
- 자기 자신도 이름으로 ping 가능(`web-1.nginx` → 자신의 IP, 예: `10.1.0.8.13`).
- 결론: Headless Service가 각 Pod에 대한 DNS 항목을 생성해주기 때문에, **Pod 안에서 실행되는 애플리케이션이 IP가 아니라 이름으로 서로 직접 통신**할 수 있음 — 이것이 Headless Service의 핵심 효과.

### 이번 데모에서 확인한 StatefulSet의 특징
- **네트워크 정체성(고정된 이름)**, **Persistent Volume(각 Pod 전용 PVC)**, **순서 있는 생성**을 모두 실습으로 확인 완료.

## 요약
- StatefulSet을 적용하면 각 Pod(`web-0`, `web-1`, `web-2`)마다 전용 PVC(`www-web-0` 등)가 먼저 생성된 뒤 순서대로 Pod가 만들어지며, Headless Service(`nginx`) 덕분에 각 Pod는 `<pod이름>.<서비스이름>`(예: `web-0.nginx`) 형식의 DNS 이름으로 IP 없이도 서로 정확히 resolve되어 통신할 수 있음을 `ping`과 `curl`로 직접 검증했다.
