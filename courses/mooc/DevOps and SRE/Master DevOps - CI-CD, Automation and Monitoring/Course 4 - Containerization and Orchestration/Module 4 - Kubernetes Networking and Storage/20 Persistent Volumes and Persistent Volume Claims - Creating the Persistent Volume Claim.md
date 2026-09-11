# Persistent Volumes and Persistent Volume Claims - Creating the Persistent Volume Claim

## 개요
- GKE 클러스터에서 실제 PVC(Persistent Volume Claim)를 생성해 Persistent Volume이 CSI 드라이버를 통해 자동으로 프로비저닝되는 과정을 실습.

## 내용
### 사전 준비
- 실습에는 Kubernetes 클러스터가 필요 — Minikube 또는 GKE(Google Kubernetes Engine) 모두 가능(강사는 GKE 사용).
```bash
kubectl get nodes
```
- 2개의 워커 노드로 구성된 클러스터 확인. 시작 시점에는 Pod, PVC 모두 존재하지 않는 상태.
- 실습 목표: PVC 생성 → PV 프로비저닝 → Pod에 마운트 → **Pod가 죽어도 데이터가 유지**되는지 확인.

### PVC YAML 작성
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: test-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi
  storageClassName: standard
```
- **`kind: PersistentVolumeClaim`**(PVC 전체 대문자로 시작하는 단어들의 약자).
- **`accessModes: ReadWriteOnce`(RWO)** — 단일 노드에서 read-write.
- **`storage: 3Gi`** — 3GB 크기의 볼륨 요청.
- **`storageClassName: standard`** — GKE 클러스터에 이미 프로비저닝되어 있는 `standard` StorageClass에서 볼륨을 만들도록 지정.

### StorageClass와 CSI 드라이버 확인
```bash
kubectl get storageclass
```
- GKE 클러스터에는 이미 여러 StorageClass가 준비되어 있으며, `standard` StorageClass는 **GCE PD(Google Compute Engine Persistent Disk)** 기반.
```bash
kubectl get pods -n kube-system
```
- `kube-system` 네임스페이스에서 **CSI 드라이버 Pod**(GCE Persistent Disk CSI 드라이버)가 실행 중인 것을 확인.
```bash
kubectl describe pod <csi-pod-name> -n kube-system
```
- 이 CSI 드라이버가 바로 Google Cloud와 통신해 실제 볼륨(Persistent Disk)을 생성하는 애플리케이션임을 확인.
- GCP 콘솔의 **Compute Engine → Disks**에서, 현재는 워커 노드에 연결된 100GB짜리 디스크만 있고 3GB 볼륨은 아직 없음을 확인 — PVC를 적용하면 이 3GB 볼륨이 새로 생성되어 Pod에 연결될 예정.

### PVC 적용 및 모니터링
```bash
kubectl get pvc,pv -w
```
- 처음에는 "no resources found" 상태.
```bash
kubectl apply -f pvc.yaml
```
- PVC를 적용한 직후에는 **Pending** 상태 — 볼륨이 프로비저닝되는 동안 잠시 대기.
- 잠시 후 볼륨이 생성되고 **Bound** 상태로 전환 — `test-pvc`라는 PVC와 3GB짜리 PV가 모두 생성되고 서로 바인딩된 것을 확인.

### 동작 원리 요약
- PVC는 스토리지에 대한 **요청**이며, Kubernetes는 이 요청을 CSI 드라이버에 전달 → CSI 드라이버가 실제 스토리지 시스템(여기서는 Google Compute Engine Persistent Disk)에 볼륨 생성을 요청 → 스토리지 시스템이 볼륨을 만들어 반환 → Kubernetes가 이 볼륨(PV)을 PVC와 바인딩.

## 요약
- GKE 클러스터에서 `accessModes: ReadWriteOnce`, `storage: 3Gi`, `storageClassName: standard`를 지정한 PVC YAML을 `kubectl apply`하면, `kube-system`에서 실행 중인 GCE Persistent Disk CSI 드라이버가 Google Cloud에 실제 3GB 디스크를 프로비저닝하도록 요청하고, 볼륨이 만들어지는 동안 PVC는 Pending 상태였다가 프로비저닝이 완료되면 PV와 Bound 상태로 전환된다.
