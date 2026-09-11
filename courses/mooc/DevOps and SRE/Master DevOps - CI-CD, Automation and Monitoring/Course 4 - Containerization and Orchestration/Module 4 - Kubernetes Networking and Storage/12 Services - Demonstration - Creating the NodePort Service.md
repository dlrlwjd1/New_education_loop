# Services - Demonstration - Creating the NodePort Service

## 개요
- 기존 ClusterIP Service를 유지한 채, 같은 Deployment의 Pod에 NodePort Service를 추가로 만들어 외부 접근 경로를 구성하는 실습.

## 내용
### NodePort YAML 작성
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-nodeport
spec:
  selector:
    app: nginx
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30007
  type: NodePort
```
- 기존 ClusterIP YAML과 거의 동일하며, 추가된 것은 **`type: NodePort`**와 **`nodePort: 30007`**(선택 사항 — 지정하지 않으면 Kubernetes가 30000~32767 범위에서 무작위로 할당)뿐.
- 기존 ClusterIP 서비스는 삭제하지 않고 그대로 유지 — 같은 Pod에 대해 **여러 개의 서로 다른 타입 Service를 동시에 만들 수 있음**.

### 배포와 확인
```bash
kubectl apply -f nodeport.yaml
kubectl get svc
```
- `nginx-nodeport` 서비스 생성 확인 — **내부 IP**(외부에서 이 IP로는 접근 불가)와 서비스 포트 80, 그리고 5자리 NodePort(`30007`) 확인.
- 서비스는 이름 또는 내부 IP로 클러스터 내부에서 접근 가능하지만, 보통은 Kubernetes DNS로 해석되는 **이름**을 사용.

### 외부 접근 경로
- 어떤 노드(Master 또는 Worker)의 IP든 `<노드 IP>:30007`로 접속.
- 흐름: **노드 IP:30007 → Service IP:Service Port(80) → Pod IP:Target Port(80)**.
- 즉, ClusterIP 구간(Service→Pod)에 **한 단계(노드→Service)가 추가**된 것이 NodePort — 그래서 "Node"라는 이름이 붙음(노드에서 직접 포트를 열어 접근).

## 요약
- 기존 ClusterIP 서비스를 그대로 둔 채 같은 Pod에 대해 `type: NodePort`와 `nodePort: 30007`을 추가한 새 Service를 만들면, 어떤 노드의 IP로도 `<노드IP>:30007`로 접근할 수 있으며 이 요청은 Service의 포트 80을 거쳐 최종적으로 Pod의 Target Port 80으로 전달된다.
