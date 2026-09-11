# Kubernetes Core Concepts - Overview

## 개요
- Kubernetes의 핵심 개념(Cluster, Node, Pod, Service, Deployment, ReplicaSet, Namespace, ConfigMap/Secret, Volume, Ingress)을 간략히 소개하고, Cluster의 Control Plane/Worker Node 구조를 정리.

## 내용
### 핵심 개념 요약
- **Cluster** — 컨테이너 런타임이 설치된 노드(머신)들의 집합.
- **Node** — Kubernetes 클러스터에 속한 개별 머신(VM).
- **Pod** — Kubernetes가 스케줄링하는 **최소 단위** — 실행 중인 컨테이너는 Pod 안에서 동작하며, Pod는 Node 위에서 실행됨.
- **Service** — Pod를 외부와 통신 가능하게 노출(expose)하는 리소스.
- **Deployment** — Pod 애플리케이션의 고가용성과 장애 허용을 제공.
- **ReplicaSet** — Deployment와 유사하게 고가용성·장애 허용을 제공하지만, Deployment는 추가로 **롤링 업데이트/롤백**, **오토스케일링** 기능을 지원하는 반면 ReplicaSet 단독으로는 이 기능들을 사용할 수 없음 — 실무에서는 Deployment와 ReplicaSet이 함께 손발을 맞춰 동작.
- **Namespace** — 리소스(Pod들)를 격리하는 용도. 예: MySQL용 Pod, Hadoop용 Pod, Kafka용 Pod, 웹 애플리케이션용 Pod를 각각의 애플리케이션 Namespace로 나눠 관리.
- **ConfigMap** — 애플리케이션(컨테이너)에 사용자 이름, 환경 변수 같은 **설정 정보**를 전달.
- **Secret** — **민감한(confidential) 정보**를 컨테이너 애플리케이션에 전달.
- **Volume** — 퍼시스턴트 스토리지 제공 — Docker Volume과 유사하게, Pod/컨테이너가 죽고 재생성되어도 데이터가 유지되도록 함.
- **Ingress** — HTTP/HTTPS 프로토콜로 여러 Pod에 걸쳐 트래픽을 분산하는 **애플리케이션 로드밸런서**(경로 기반 로드밸런싱).

### Kubernetes 클러스터 구조
- 여러 머신(노드) 위에 동일한 OS와 동일한 컨테이너 런타임(Docker, CRI-O, Podman 등)을 설치 — 환경의 일관성을 위해 보통 통일함.
- 각 노드 위에 Pod가 실행되고, Pod 안에 컨테이너(예: MySQL)가 동작.
- 이런 노드들이 모여 하나의 **Kubernetes 클러스터**를 구성.

### Control Plane과 Worker Node
- 모든 클러스터에는 최소 하나의 **Control Plane**과 여러 개의 **Worker Node**가 존재.
- **Control Plane(Master Node)** — API Server, Controller Manager, Scheduler, 클러스터 데이터베이스인 **etcd** 같은 Kubernetes 핵심 컴포넌트가 실행되는 서버. 클러스터의 모든 운영(예: Pod 생성)을 담당 — **Master가 비정상이거나 다운되면 어떤 Kubernetes 작업도 수행할 수 없음**.
- **Worker Node(Slave Node)** — MySQL, Hadoop, Nginx, HTTPD 같은 최종 사용자 애플리케이션 Pod가 실제로 실행(호스팅)되는 노드.

## 요약
- Kubernetes 클러스터는 Control Plane(API Server·Scheduler·Controller Manager·etcd로 클러스터 전체를 관리)과 여러 Worker Node(실제 애플리케이션 Pod가 실행됨)로 구성되며, Pod(최소 스케줄링 단위)·Service(노출)·Deployment/ReplicaSet(고가용성)·Namespace(격리)·ConfigMap/Secret(설정·민감 정보)·Volume(퍼시스턴트 스토리지)·Ingress(HTTP 로드밸런싱)라는 핵심 리소스로 애플리케이션을 관리한다.
