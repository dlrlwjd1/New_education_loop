# ConfigMaps and Secrets - Using ConfigMap and Secret in a Pod

## 개요
- 앞서 만든 ConfigMap과 Secret을 실제 Pod의 환경 변수로 주입하고, `env` 명령으로 값을 확인한 뒤 리소스를 정리하는 실습.

## 내용
### Pod YAML — ConfigMap과 Secret을 환경 변수로 주입
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: simple-pod
spec:
  containers:
    - name: simple-container
      image: alpine
      command: ["sleep", "3600"]
      env:
        - name: APP_NAME
          valueFrom:
            configMapKeyRef:
              name: my-config
              key: app_name
        - name: USER_NAME
          valueFrom:
            secretKeyRef:
              name: my-secret
              key: user
```
- **`image: alpine`**, **`command: sleep 3600`** — 가벼운 Linux Alpine 이미지로 1시간 동안 컨테이너를 유지.
- **`env.valueFrom.configMapKeyRef`** — 환경 변수 `APP_NAME`의 값을 ConfigMap `my-config`의 키 `app_name`에서 가져옴. `my-config`에는 `app_name`, `env` 두 키가 있는데 그중 `app_name`(값: `demo-app`)만 참조.
- **`env.valueFrom.secretKeyRef`** — 환경 변수 `USER_NAME`의 값을 Secret `my-secret`의 키 `user`에서 가져옴. `my-secret`에는 `user`, `password` 두 키가 있는데 그중 `user`(값: `admin`)만 참조.

### Pod 적용 및 확인
```bash
kubectl apply -f pod.yaml
kubectl get pod
```
- `simple-pod`가 생성되어 실행 중.
```bash
kubectl exec simple-pod -- env | grep -E 'APP_NAME|USER_NAME'
```
- 결과:
  - **`APP_NAME=demo-app`** — ConfigMap `my-config`의 `app_name` 값이 그대로 주입됨.
  - **`USER_NAME=admin`** — Secret `my-secret`의 `user` 값이 (컨테이너 내부에서는 평문으로 복호화되어) 주입됨.
- 즉 컨테이너 안에서는 ConfigMap이든 Secret이든 환경 변수로 접근하면 **평문 값**을 그대로 사용할 수 있음 — Secret이 인코딩되어 저장되는 것은 etcd(저장소) 수준의 보호이며, Pod에 전달될 때는 Kubernetes가 자동으로 디코딩해서 넘겨줌.

### 리소스 정리
```bash
kubectl delete -f pod.yaml
kubectl delete secret my-secret
kubectl delete configmap my-config
```
- Pod, Secret, ConfigMap 순서로 삭제.
```bash
kubectl get secret,configmap
```
- 삭제 후에는 사용자가 만든 리소스는 사라지고, **Kubernetes 클러스터가 기본 제공하는 CA 인증서 ConfigMap**(클러스터 생성 시 자동으로 만들어짐)만 남아 있음 — 이 기본 ConfigMap은 삭제 대상이 아니므로 그대로 둠.

## 요약
- Pod YAML의 `env` 필드에서 `valueFrom.configMapKeyRef`와 `valueFrom.secretKeyRef`로 각각 ConfigMap과 Secret의 특정 키를 참조해 환경 변수(`APP_NAME`, `USER_NAME`)로 주입할 수 있으며, Pod 내부에서 `env` 명령으로 확인하면 Secret의 값도 평문(`admin`)으로 정상 노출되어 애플리케이션이 바로 사용할 수 있고, 실습 마지막에는 Pod → Secret → ConfigMap 순으로 정리하되 클러스터 기본 CA 인증서 ConfigMap은 삭제하지 않는다.
