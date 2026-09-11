# Kubernetes Control Plane Components in Depth

## 개요
- Kubernetes Control Plane을 구성하는 4대 핵심 컴포넌트(kube-apiserver, etcd, kube-scheduler, kube-controller-manager)의 역할과 동작 원리, 그리고 Pod 생성 시 전체 통신 흐름을 정리.

## 내용
### Control Plane이란
- 클러스터 전체를 조율 — 의사 결정, 리소스 사용량 모니터링, 워크로드·인프라의 desired state(원하는 상태) 유지를 담당.
- 4대 핵심 컴포넌트: **kube-apiserver**(프론트엔드), **etcd**(분산 데이터 저장소), **kube-scheduler**(배치 엔진), **kube-controller-manager**(조정 루프).

### kube-apiserver — Control Plane의 정문
- 중앙 HTTP/REST API 엔드포인트 — `kubectl`, 컨트롤러, kubelet을 통한 모든 작업이 이곳을 거침.
- **책임**:
  - **인증·인가(Authentication & Authorization)** — RBAC로 클라이언트(사용자, 컴포넌트)의 요청 허용 여부 확인.
  - **유효성 검증·스키마 강제** — Pod Spec, ConfigMap 등 요청 페이로드 검증.
  - **etcd에 영속화** — 클러스터 상태 변경을 etcd에 기록.
  - **Watch 메커니즘** — 클라이언트가 리소스 변경을 구독할 수 있게 지원 — 컨트롤러와 kubelet의 핵심 빌딩 블록.
- **아키텍처 특징**: 수평 확장 가능(로드밸런서 뒤에 여러 API Server 배치), **etcd와 직접 상호작용하는 유일한 컴포넌트**(다른 컴포넌트는 API Server의 캐시를 통해 읽음).

### etcd — 진실의 근원(Source of Truth)
- 클러스터의 모든 상태·설정·메타데이터를 담는 **분산·일관성 있는(consistent) 고가용성 key-value 저장소**.
- **Raft 합의 알고리즘**으로 복제본 간 데이터 일관성 보장.
- Watch를 지원해 API Server와 컨트롤러가 상태 변화에 반응 가능.
- **운영 베스트 프랙티스**:
  - **백업** — 재해 복구를 위해 `etcdctl snapshot save`로 정기 백업 필수.
  - **고가용성** — 쿼럼(quorum) 유지를 위해 홀수 개(3~5개) 노드로 클러스터 구성 권장.
  - **성능 영향** — etcd의 I/O 지연은 스케줄링 속도와 전반적인 응답성에 영향을 미침.

### kube-scheduler — Pod가 어디서 실행될지 결정
- 리소스 가용성, 제약 조건(Taint/Toleration, Affinity), 정책에 따라 스케줄되지 않은 Pod를 적절한 Worker Node에 배정.
- **스케줄링 프로세스**:
  1. API Server의 Watch를 통해 새 Pod 감지.
  2. 후보 노드 필터링(리소스·정책 일치 여부).
  3. 후보 점수화(Affinity, 우선순위 등).
  4. 배정 결정을 API Server에 다시 기록.
  5. API Server가 선택된 노드의 kubelet에 통지.
- **커스터마이징**: 커스텀 스케줄러 작성이나 점수화 알고리즘 수정 가능. Pod Spec의 `resources.requests/limits`, `nodeSelector`, Affinity/Anti-affinity, Taint/Toleration이 스케줄링 동작에 영향.

### kube-controller-manager — 조정 엔진(Reconciliation Engine)
- 여러 컨트롤러를 실행해 desired state를 강제(예: 복제본 수 유지, 노드 관리, 엔드포인트 동기화).
- **컨트롤러 워크플로우**: API Server를 통해 리소스 변경 Watch → 실제 상태와 원하는 상태 비교 → 필요한 조정 수행(Pod 생성, Service 업데이트, 고아 리소스 삭제 등).
- **내장 컨트롤러 예시**:
  | 컨트롤러 | 기능 |
  |---|---|
  | Node | 다운된 노드를 감지하고 교체를 트리거 |
  | ReplicaSet | 원하는 수의 Pod 복제본을 유지 |
  | Endpoints | Service 엔드포인트를 모니터링·업데이트 |
  | ServiceAccount | Namespace별 기본 계정/Secret 관리 |
  | Job, StatefulSet, DaemonSet 등 | 공식 문서 참고 |
- **아키텍처 참고**: 여러 컨트롤러가 하나의 바이너리로 묶여 있지만, 같은 프로세스 내에서 각각 독립적으로 동작.

### Control Plane 통신 흐름 (예: Nginx Pod 생성)
1. `kubectl run nginx...` → API Server로 전달.
2. API Server가 인증·검증 → Pod 오브젝트를 etcd에 기록.
3. etcd가 Watch를 트리거 → Scheduler가 Pod를 가져와 노드를 배정 → 다시 기록.
4. API Server가 배정 결과를 영속화 → 배정된 노드의 kubelet이 Pod를 감지 → 컨테이너 시작 → 상태 업데이트.
5. 상태 업데이트가 API Server를 거쳐 다시 전달 → etcd 갱신 → 필요 시 컨트롤러가 추가 조정.
- 이 지속적인 루프가 실제 클러스터 상태를 사용자가 선언한 desired state와 일치시킴.

## 요약
- Control Plane은 Kubernetes의 두뇌 역할을 하며, kube-apiserver(모든 요청의 관문이자 etcd와 직접 통신하는 유일한 컴포넌트), etcd(Raft 기반 분산 진실의 근원, 홀수 노드로 HA 구성), kube-scheduler(리소스·제약 조건에 따른 Pod 배치), kube-controller-manager(Node/ReplicaSet/Endpoints 등 다양한 컨트롤러로 desired state를 지속적으로 조정)가 유기적으로 작동해 클러스터의 실제 상태를 원하는 상태와 끊임없이 일치시킨다.
