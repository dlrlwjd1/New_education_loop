# Dynamic Provisioning and StorageClass in Kubernetes

## 개요
- 관리자가 수동으로 PV를 만들던 방식에서 벗어나 PVC 요청에 따라 자동으로 볼륨이 생성되는 동적 프로비저닝(Dynamic Provisioning)과, 이를 정의하는 **StorageClass** 리소스를 정리.

## 내용
### 왜 동적 프로비저닝인가
- 전통적으로 Kubernetes는 관리자가 PersistentVolume(PV)을 수동으로 만들고 관리해야 했음.
- **동적 프로비저닝**을 사용하면 이 작업이 Kubernetes로 넘어감 — 사용자의 요구(PVC)에 따라 PV가 **자동으로 생성**됨.
- 장점: 관리자 부담 감소, 클라우드·온프레미스 환경 전반에서의 유연성, 클라우드 네이티브 아키텍처에서 stateful 애플리케이션의 확장성 지원.

### 핵심 개념
- **PV(PersistentVolume)** — 실제 물리/클라우드 스토리지를 나타내는 클러스터 리소스, Pod와 독립적으로 존재.
- **PVC(PersistentVolumeClaim)** — 사용자/개발자의 스토리지 요청(크기, 접근 모드 등). Kubernetes는 미리 생성된 PV든 동적으로 프로비저닝된 PV든 요청과 일치하는 PV를 바인딩.
- **StorageClass** — 볼륨을 동적으로 프로비저닝하는 방법을 정의하는 추상화 리소스로, 다음 필드를 가짐:
  - `provisioner` — CSI 또는 내장 드라이버(예: `aws-ebs`, `gce-pd`).
  - `parameters` — 디스크 타입, `fsType`, IOPS 등.
  - `reclaimPolicy` — PVC 삭제 후 볼륨의 처리 방식(`Delete` 또는 `Retain`).
  - `volumeBindingMode` — `Immediate` 또는 `WaitForFirstConsumer`.
  - `allowVolumeExpansion`, `mountOptions` 등.

### StorageClass 예시
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp3
  fsType: ext4
reclaimPolicy: Delete
volumeBindingMode: Immediate
allowVolumeExpansion: true
```

### 동적 프로비저닝 워크플로우
1. 관리자가 하나 이상의 StorageClass를 정의.
2. 개발자가 해당 StorageClass를 참조하는 PVC를 생성.
3. Kubernetes 컨트롤러가 provisioner를 호출.
4. 새 PV가 생성되고 PVC와 바인딩됨.
5. PVC가 Pod에서 소비됨.
6. PVC가 삭제되면 `reclaimPolicy` 설정에 따라 PV가 재활용(recycle)되거나 보존(retain)됨.
- 이러한 자동화는 온디맨드 볼륨 생성, 정책 기반의 단순화된 스토리지 관리, 향상된 리소스 활용도를 가능하게 함.

### Provisioner와 볼륨 플러그인
- Kubernetes는 in-tree 드라이버와 CSI 드라이버를 통해 다양한 플러그인을 지원:
  - **클라우드 제공자 볼륨**: AWS EBS, GCE Persistent Disk, Azure Disk.
  - **온프레미스 솔루션**: Ceph RBD, 외부 provisioner를 통한 NFS.
  - **로컬 볼륨**: `hostPath`(클러스터 로컬) — external-provisioner Pod를 통한 동적 프로비저닝도 가능.
- 각 플러그인은 StorageClass의 `parameters`를 통해 복제(replication), 암호화, QoS, 리전 인지(region awareness) 등의 기능을 제공.

### 구성 전략
- **다중 플러그인 전략** — 워크로드에 맞춰 서로 다른 StorageClass를 만듦(예: I/O 집약적 서비스용 `fast-ssd`, 백업용 `slow-hdd`, 공유 용량용 `backup-nfs`).
- **기본(Default) StorageClass** — 하나의 StorageClass를 기본값으로 지정하면, StorageClass를 명시하지 않은 PVC는 자동으로 이 기본 StorageClass를 사용.
- **볼륨 바인딩 모드**:
  - `Immediate` — PV가 즉시 바인딩됨.
  - `WaitForFirstConsumer` — Pod가 스케줄링될 때까지 PV 생성을 지연시켜, 지역성(locality)과 활용도를 향상시킴.
- **볼륨 확장(Volume Expansion)** — `allowVolumeExpansion: true`이면 런타임에 PVC 크기를 조정할 수 있음.

### 문제 해결과 모범 사례
- **PVC가 Pending에 멈춤** — 설정 오류나 provisioner 누락이 흔한 원인.
- **접근 모드 불일치** — PV/PVC의 접근 모드(예: RWO vs RWX)가 일치하는지 확인 필요.
- **성능 저하** — 워크로드에 맞는 StorageClass 파라미터 선택 필요.
- **ReclaimPolicy 불일치** — 임시 개발/테스트에는 `Delete`, 중요 데이터에는 `Retain` 사용 권장.
- 권장 사항: 인프라를 반영하는 의미 있는 StorageClass 정의, 프로비저닝 활동과 스토리지 메트릭 모니터링, 리소스 고갈을 막기 위한 쿼터 적용, 프로덕션 적용 전 StorageClass YAML 검증(lint).

## 요약
- 동적 프로비저닝은 PVC 요청에 따라 Kubernetes가 자동으로 PV를 생성하는 방식이며, 이를 정의하는 **StorageClass**는 provisioner·parameters·reclaimPolicy·volumeBindingMode 등을 통해 어떤 스토리지를 어떻게 프로비저닝할지 결정하고, 워크로드별로 여러 StorageClass를 만들거나 기본 StorageClass를 지정할 수 있으며, PVC Pending·접근 모드 불일치·ReclaimPolicy 설정 등이 실무에서 흔히 겪는 문제이므로 모니터링·쿼터·검증을 통한 관리가 권장된다.
