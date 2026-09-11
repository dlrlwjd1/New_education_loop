# Persistent Volumes - Access Modes and Persistent Volume Claims (PVCs)

## 개요
- Persistent Volume의 3가지 접근 모드(Access Mode)와, PVC(Persistent Volume Claim)를 통해 PV가 프로비저닝·바인딩되는 전체 과정을 설명.

## 내용
### 접근 모드(Access Mode) 3가지
- **RWO(ReadWriteOnce)** — 볼륨이 **단일 노드(single node)**에서만 read-write로 마운트 가능. 같은 노드 위의 다른 Pod들은 이 볼륨을 함께 사용할 수 있지만, 다른 노드에 있는 Pod는 이 볼륨을 마운트할 수 없음.
- **RWX(ReadWriteMany)** — 볼륨이 **여러 노드(multiple nodes)**에서 read-write로 마운트 가능 — 두 개든 그 이상이든 여러 노드의 Pod들이 동시에 같은 볼륨을 읽고 쓸 수 있음.
- **ROX(ReadOnlyMany)** — 볼륨이 **여러 노드에서 read-only**로만 마운트 가능 — 데이터를 쓸 수는 없음.

### PVC(Persistent Volume Claim)란
- PVC는 **스토리지에 대한 요청(request)** — 애플리케이션이 PV를 사용하려면 먼저 Kubernetes에 "볼륨을 달라"는 요청, 즉 PVC를 생성해야 함.
- PVC에는 **크기(size, 예: 5GB)**와 **접근 모드(예: RWX)** 같은 요구사항을 정의.
- Kubernetes는 이 요청을 바탕으로 **CSI(Container Storage Interface) 드라이버**와 해당 **StorageClass**를 호출해 볼륨을 프로비저닝하고, 프로비저닝된 볼륨을 PVC와 **바인딩(bind)**.
- Kubernetes는 **크기와 접근 모드**를 기준으로 PVC와 PV를 매칭해 바인딩함.

### 프로비저닝 전체 흐름 (예: NetApp 스토리지 연동)
1. Kubernetes 클러스터에 해당 스토리지 시스템(NetApp, Dell EMC, Ceph 등)의 **CSI 드라이버**를 설치 — CSI 드라이버는 Kubernetes와 외부 스토리지 사이의 통신을 담당하는 애플리케이션이며, 클러스터에서 **Pod로 실행**됨.
2. 해당 스토리지 시스템에 대응하는 **StorageClass**가 존재.
3. 애플리케이션이 볼륨을 얻으려면 **PVC**를 생성 — PVC에는 `StorageClass`, `size`, `access mode` 세 가지를 정의.
4. Kubernetes는 이 요청을 CSI를 통해 외부 스토리지(NetApp)로 전달하고, NetApp이 요청된 크기(예: 5GB)의 볼륨을 프로비저닝해 Kubernetes로 반환.
5. 이 반환된 5GB 볼륨이 바로 **Persistent Volume**이며, 요청한 크기·접근 모드가 일치하므로 Kubernetes가 이 PV를 해당 **PVC와 바인딩**.
6. 이제 PVC를 Pod에서 사용 — Pod 스펙에 이 PVC를 마운트하도록 지정하고, 컨테이너 안에서 이름을 참조해 데이터 저장에 사용.

### 기존 PV 재사용 vs 신규 프로비저닝
- Kubernetes는 PVC 요청이 들어오면 먼저 **이미 사용 가능한 PV가 있는지** 확인 — 있으면 그것을 바로 사용.
- 사용 가능한 PV가 없으면, CSI를 통해 외부 스토리지에 **새로 프로비저닝(dynamic provisioning)**을 요청하고, 프로비저닝이 완료되면 그 볼륨을 PVC와 연결.

## 요약
- Persistent Volume의 접근 모드는 단일 노드에서만 읽기·쓰기 가능한 **RWO**, 여러 노드에서 읽기·쓰기 가능한 **RWX**, 여러 노드에서 읽기 전용인 **ROX** 세 가지이며, PVC는 크기와 접근 모드를 명시한 스토리지 요청으로서 Kubernetes가 CSI 드라이버와 StorageClass를 통해 기존 PV를 재사용하거나 외부 스토리지에 새 볼륨을 동적으로 프로비저닝한 뒤 크기·접근 모드 기준으로 PVC와 PV를 바인딩하는 방식으로 동작한다.
