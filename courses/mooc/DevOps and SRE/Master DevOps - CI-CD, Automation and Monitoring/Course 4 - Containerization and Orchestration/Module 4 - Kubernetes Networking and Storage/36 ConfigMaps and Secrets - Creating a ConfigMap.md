# ConfigMaps and Secrets - Creating a ConfigMap

## 개요
- `kubectl create configmap`으로 ConfigMap을 생성해 평문 저장을 확인하고, `kubectl create secret`으로 Secret을 생성해 Base64 인코딩되어 저장되는 것을 `describe`와 YAML 출력으로 비교·검증.

## 내용
### 사전 준비
```bash
kubectl get nodes
```
- 2노드 GKE 클러스터(`hello-cluster`) 사용.

### ConfigMap 생성 — from-literal
```bash
kubectl create configmap my-config \
  --from-literal=app_name=demo-app \
  --from-literal=env=dev
```
- `app_name=demo-app`, `env=dev` 두 개의 key-value 쌍을 담은 `my-config` ConfigMap 생성.
```bash
kubectl get configmap    # 또는 kubectl get cm
kubectl describe configmap my-config
```
- `describe` 출력의 `Data` 섹션에서 **`app_name: demo-app`, `env: dev`가 평문(clear text) 그대로** 보임.
```bash
kubectl get configmap my-config -o yaml
```
- YAML 출력에서도 마찬가지로 값이 **그대로 노출**됨을 재확인.

### Secret 생성 — generic 타입, from-literal
```bash
kubectl create secret generic my-secret \
  --from-literal=user=admin \
  --from-literal=password=secret123
```
- **`generic`** 타입 Secret(Opaque와 유사하게 사용자 이름/비밀번호 등 임의 값을 담는 범용 타입) 생성.
```bash
kubectl get secret
kubectl describe secret my-secret
```
- `describe` 출력에서는 **실제 값이 보이지 않고 바이트 수만 표시**됨(예: `password: 9 bytes`, `user: 5 bytes`) — Secret은 민감한 정보이므로 값을 노출하지 않음.

### Secret의 YAML 출력 — Base64 인코딩 확인
```bash
kubectl get secret my-secret -o yaml
```
- `data` 섹션에 `user`, `password` 값이 **Base64로 인코딩된 문자열**(예: `cGFzc3dvcmQ...`, `YWRtaW4=`)로 표시됨 — ConfigMap과 달리 평문이 아님.

### Base64 디코딩으로 원본 값 확인
```bash
echo "<인코딩된 password 값>" | base64 --decode; echo
# 출력: secret123

echo "<인코딩된 user 값>" | base64 --decode; echo
# 출력: admin
```
- `base64 --decode`로 인코딩된 문자열을 원래 값(`secret123`, `admin`)으로 되돌릴 수 있음 — 즉 Secret은 etcd에 Base64 인코딩된 형태로 저장되며, 필요할 때 디코딩해서 원래 값을 확인 가능.

### ConfigMap과 Secret의 근본적 차이 재확인
- **ConfigMap**: 값이 **평문**으로 저장·노출됨.
- **Secret**: 값이 **Base64로 인코딩**되어 저장되며, `kubectl describe`로는 값이 직접 보이지 않고, YAML로 조회해야 인코딩된 값을 볼 수 있음(필요시 디코딩 가능).

## 요약
- `kubectl create configmap --from-literal`로 만든 ConfigMap은 `describe`와 YAML 출력 모두에서 값이 평문 그대로 보이는 반면, `kubectl create secret generic --from-literal`로 만든 Secret은 `describe`에서는 바이트 수만 표시되고 YAML 출력에서는 Base64로 인코딩된 값만 보이며 `base64 --decode`로 디코딩해야 원래 값(`admin`, `secret123`)을 확인할 수 있어, Secret이 민감한 정보를 다루기 위해 실제로 인코딩되어 저장됨을 직접 검증했다.
