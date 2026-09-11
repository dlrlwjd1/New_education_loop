# Helm Charts - Upgrading Helm Charts

## 개요
- `values.yaml`을 수정한 뒤 `helm upgrade`로 배포된 릴리스를 업그레이드하고, `helm status`로 리비전(revision) 이력을 확인한 뒤 `helm uninstall`로 정리하는 실습.
- 참고: 원본 자막에서 Pod를 가리킬 때 "part"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기.

## 내용
### Chart 변경만으로는 자동 적용되지 않는다
- `values.yaml`에서 `replicaCount`를 1에서 3으로 수정해도, **이미 배포된 릴리스는 자동으로 반영되지 않음** — 여전히 Pod가 1개인 상태.
- 변경 사항을 실제로 반영하려면 반드시 **`helm upgrade`** 명령을 실행해야 함.

### helm upgrade — 레플리카 수 변경 반영
```bash
helm upgrade my-app mychart
```
- `helm list`로 릴리스 이름을 확인한 뒤, `helm upgrade <릴리스 이름> <Chart 이름>` 형식으로 실행.
- 실행 결과 **Revision 2**로 업그레이드되고, `replicaCount: 3`이 반영되어 **Pod가 3개**로 늘어남.

### helm upgrade — Service 타입 변경 반영
```yaml
# values.yaml
service:
  type: NodePort   # 기존 ClusterIP에서 변경
```
```bash
helm upgrade my-app mychart
```
- Service 타입을 `ClusterIP`에서 `NodePort`로 바꾸고 다시 `helm upgrade` 실행 — **Revision 3**으로 업그레이드.
- **주의**: `helm upgrade` 명령을 실행할 때는 반드시 **Chart 디렉터리 바깥에서** 실행해야 함 — Chart 디렉터리 안에서 실행하면 `Chart.yaml`을 찾지 못해 명령이 실패함. Chart가 있는 폴더 이름(Chart 이름과 동일)을 인자로 넘기는 방식.

### helm status로 배포 상태 확인
```bash
helm status my-app
```
- 배포 상태(성공 여부)와 **현재 리비전 번호(3)**를 확인 — 총 3번의 업그레이드 이력(1차: 레플리카 1개로 최초 배포, 2차: 레플리카 3개로 증가, 3차: Service 타입을 NodePort로 변경)을 보여줌.
```bash
kubectl get deployment,rs,pod,svc
```
- Deployment 내부적으로 ReplicaSet을 사용하므로, ReplicaSet도 함께 확인 가능.

### 정리 — helm uninstall
```bash
helm list          # 릴리스 이름 확인
helm uninstall my-app
```
- `helm install`의 반대 명령은 **`helm uninstall`**이며, Chart 이름은 필요 없이 **릴리스 이름만** 지정.
- 이 명령 한 번으로 Deployment, Pod, Service 등 해당 릴리스와 관련된 모든 Kubernetes 리소스가 함께 제거됨.

## 요약
- Helm Chart의 `values.yaml`을 수정해도 이미 배포된 릴리스에는 자동 반영되지 않으므로 Chart 디렉터리 바깥에서 `helm upgrade <릴리스명> <Chart명>`을 실행해야 하며, 매 업그레이드마다 리비전 번호가 증가해 `helm status`로 이력을 확인할 수 있고, 애플리케이션을 완전히 제거할 때는 `helm uninstall <릴리스명>` 한 번으로 관련된 Deployment·Pod·Service를 모두 정리할 수 있다.
