# Ephemeral Volume - Creating the Pod with Ephemeral Volume

## 개요
- Ephemeral Volume(임시 볼륨) 개념과 용도를 소개하고, `emptyDir`을 사용하는 Pod를 실제로 생성하는 실습.

## 내용
### Ephemeral Volume이란
- Persistent Volume과 반대로, **Pod가 죽으면 데이터도 함께 사라지는 볼륨** — 이 볼륨의 생명주기는 **Pod의 생명주기에 종속**됨.
- 주로 **비프로덕션 환경(테스트, PoC, 데모)**에서 사용 — 데이터 손실이 중요한 프로덕션 애플리케이션이나 stateful 애플리케이션에는 사용하면 안 됨.

### emptyDir의 동작 원리
- Ephemeral Volume 중 흔히 쓰는 형태가 **`emptyDir`** — 이 볼륨은 **Pod가 스케줄링된 노드의 RAM(메모리)**에서 공간을 가져와 사용.
- 문제점:
  - 워커 노드의 메모리를 소비하므로 **노드 메모리가 가득 찰(choke) 위험**이 있음.
  - **Pod가 죽으면 저장된 데이터가 모두 사라짐** — 데이터베이스나 stateful 애플리케이션에는 부적합.

### 사전 준비
```bash
kubectl get nodes
```
- 2개의 워커 노드로 구성된 GKE 클러스터(`hello-cluster`) 확인.

### Pod YAML 작성 — emptyDir 볼륨
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: ephemeral-demo-pod
spec:
  containers:
    - name: busybox
      image: busybox
      command: ["/bin/sh", "-c", "sleep 3600"]
      volumeMounts:
        - name: ephemeral-storage
          mountPath: /data
  volumes:
    - name: ephemeral-storage
      emptyDir: {}
```
- **`busybox`** 이미지 사용 — 가벼운 테스트용 OS 이미지.
- **`command: sleep 3600`** — 컨테이너를 1시간 동안 유지시켜 실습할 시간을 확보(안 그러면 할 일이 없어 바로 종료됨).
- **`volumeMounts`**로 `ephemeral-storage` 볼륨을 컨테이너의 `/data` 경로에 마운트.
- **`volumes.emptyDir: {}`** — 이 볼륨을 PVC에 매핑하지 않고, **빈 디렉터리(empty directory)**로 정의 — Pod가 실행되는 노드의 RAM에서 자동으로 공간을 할당받음. Pod가 죽으면 이 데이터는 모두 사라짐.

### Pod 생성 및 확인
```bash
kubectl apply -f emptydir.yaml
kubectl get pod
kubectl describe pod ephemeral-demo-pod
```
- Pod가 노드(`d0mx`)에 할당되고 `busybox` 이미지가 pull되어 컨테이너가 생성·시작됨.
- Persistent Volume 데모와 달리, 이번에는 이벤트 로그에 **"volume attached successful" 메시지가 나타나지 않음** — PVC를 사용하지 않고 `emptyDir`을 사용했기 때문. `emptyDir`은 Pod와 생명주기를 공유하는 임시 디렉터리이며, Pod가 사라지면 데이터도 함께 사라짐.

## 요약
- Ephemeral Volume은 Pod의 생명주기에 데이터가 종속되는 볼륨으로, 대표적으로 워커 노드의 RAM에서 공간을 가져오는 `emptyDir`이 있으며, PVC 없이 `volumes.emptyDir: {}`만 지정하면 되지만 노드 메모리를 소비하고 Pod가 죽으면 데이터가 완전히 사라지므로 프로덕션이 아닌 테스트/PoC 용도로만 사용해야 한다.
