# Persistent Volumes and Persistent Volume Claims - Verifying the Volume and Pod Status

## 개요
- GCP 콘솔에서 프로비저닝된 3GB 볼륨을 확인하고, 그 볼륨을 참조하는 Pod를 생성해 실제로 볼륨이 노드를 거쳐 Pod에 마운트되는 과정을 실습.

## 내용
### GCP 콘솔에서 볼륨 확인
- Compute Engine → Disks에서 새로고침하면 앞서 프로비저닝한 **3GB 볼륨**(PVC 이름에서 파생된 이름, 예: `pvc-47b...11e`)이 나타남.
- 하지만 이 시점에는 볼륨이 **아직 어떤 노드에도 연결(in use)되어 있지 않음** — PVC/PV만 생성되었을 뿐 아직 Pod에 연결되지 않았기 때문. Pod를 만들어 이 PV를 지정하면 이 상태가 바뀌는 것을 뒤에서 확인.

### Pod YAML 작성 — PVC를 볼륨으로 매핑
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-pvc
spec:
  containers:
    - name: frontend
      image: nginx
      volumeMounts:
        - mountPath: /var/www/html
          name: my-pd
  volumes:
    - name: my-pd
      persistentVolumeClaim:
        claimName: test-pvc
```
- `containers`와 `volumes`가 **같은 들여쓰기 레벨**에 있음 — 즉 둘 다 Pod에 속하는 필드.
- `volumes` 아래에서 `my-pd`라는 이름의 볼륨을 정의하고, `persistentVolumeClaim.claimName: test-pvc`로 앞서 만든 PVC를 참조 — 이 볼륨(`my-pd`)의 크기는 PVC가 가리키는 PV의 크기(3GB)를 그대로 상속.
- 컨테이너의 `volumeMounts`에서 `name: my-pd`, `mountPath: /var/www/html`을 지정 — 애플리케이션이 이 경로에 저장하는 모든 데이터는 실제로는 이 PV(3GB)에 저장됨.

### Pod 생성 및 상태 확인
- Pod를 적용한 직후에는 바로 Running 상태가 되지 않음 — **먼저 볼륨이 마운트되고, 그 다음 컨테이너가 생성**되기 때문에 시간이 다소 걸림.
```bash
kubectl describe pod pod-pvc
```
- 이벤트 로그에서 다음 순서를 확인:
  1. Pod가 노드에 성공적으로 스케줄링됨(Successfully assigned).
  2. **볼륨 어태치 성공(AttachVolume succeeded)** — 앞서 만든 PVC(`pvc-47b...11e`)에 대한 볼륨 연결 성공.
  3. `nginx` 이미지 pull(약 5초 소요).
  4. 컨테이너 생성 및 시작(Created/Started container).
- 즉, **볼륨 어태치가 먼저 일어나고, 그 다음 컨테이너가 만들어짐**.

### GCP 콘솔에서 다시 확인 — "In Use By"
- Disks 목록을 새로고침하면, 이전에는 비어 있던 "In use by" 칸에 값이 채워짐 — 이 값은 **Pod의 이름이 아니라 Pod가 스케줄링된 노드의 이름**(예: `d0mx`).
- 즉, 클러스터에 2개의 워커 노드가 있을 때, 외부 볼륨은 먼저 **Pod가 스케줄링된 노드에 연결**되고, 그 다음 그 노드로부터 Pod에 제공(present)되는 방식으로 동작 — 그래서 "In use by"에 노드 이름이 표시됨.

## 요약
- Pod YAML에서 `volumes` 아래 `persistentVolumeClaim.claimName`으로 PVC를 참조하고 컨테이너의 `volumeMounts`로 특정 경로(`/var/www/html`)에 마운트하면, Kubernetes는 먼저 외부 볼륨을 Pod가 스케줄링된 노드에 어태치한 뒤 컨테이너를 생성하며, GCP 콘솔에서는 이 볼륨이 Pod가 아니라 **볼륨이 연결된 노드 이름**을 기준으로 "in use"로 표시된다.
