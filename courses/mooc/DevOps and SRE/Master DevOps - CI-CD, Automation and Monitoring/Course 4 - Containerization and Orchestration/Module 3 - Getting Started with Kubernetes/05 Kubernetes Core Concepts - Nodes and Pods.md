# Kubernetes Core Concepts - Nodes and Pods

## 개요
- Master Node(Control Plane)와 Worker Node의 역할 분담, Pod의 정의, 그리고 Service·Deployment의 기본 개념을 정리.

## 내용
### Node란
- Kubernetes에서 노드는 물리 서버일 수도 있지만, 비용 문제로 **보통 가상 머신(VM)**을 사용해 클러스터를 구성.
- 노드는 크게 두 종류:
  - **Master Node(Control Plane)** — Kubernetes API, Controller Manager, Scheduler, 클러스터 데이터베이스인 **etcd** 같은 컴포넌트가 실행되며, 클러스터의 모든 제어를 담당.
  - **Worker Node** — Master의 지시를 받아 사용자 애플리케이션(Pod)을 실제로 호스팅.
- 사용자가 (예: MySQL Pod를) 생성하고 싶으면 항상 **Master(Control Plane)에 요청을 보내고**, Master가 이를 받아 실제 Pod는 **Worker Node**에 생성됨.

### Pod란
- Kubernetes의 **가장 작고 단순한 오브젝트** — 클러스터 내에서 실행 중인 프로세스의 단일 인스턴스를 나타냄.
- Pod는 하나 이상의 컨테이너를 포함할 수 있음(보통은 Pod당 컨테이너 1개가 일반적이지만, 여러 개도 가능).
- 하나의 Pod 안에서 실행되는 컨테이너들은 그 Pod에 할당된 **스토리지와 네트워크를 공유**.

### Service란
- Pod와 통신하기 위한 Kubernetes 리소스 — 예: MySQL 데이터베이스에 쿼리를 보내거나, 웹 애플리케이션 Pod의 페이지를 열람하려면 반드시 **Service를 통해** 접근.
- Pod들의 논리적 집합과 그것에 접근하는 정책을 정의하는 추상화(often 마이크로서비스라고도 불림) — Pod 집합에 대한 네트워크 접근을 가능하게 함.

### Deployment란
- 리소스 축약형은 **`deploy`**(Service는 `svc`).
- Pod 애플리케이션에 **고가용성과 장애 허용**을 제공하는 리소스 — 단일 Pod로 애플리케이션을 배포하지 않고 여러 Pod로 운영하는 이유가 바로 이것(하나가 죽어도 나머지가 서비스 지속).
- 추가로 **롤링 업데이트(Rolling Update)**와 **롤백(Rollback)** 기능 제공.
- **desired state(원하는 상태)**를 항상 유지 — 예: 3개의 Pod로 시작했다면, 별도로 Up/Down 스케일하거나 오토스케일러를 설정하지 않는 한 항상 3개를 유지하도록 보장.

## 요약
- Kubernetes 클러스터는 사용자 요청을 받는 Master Node(Control Plane)와 실제 애플리케이션 Pod가 실행되는 Worker Node로 나뉘며, Pod는 하나 이상의 컨테이너를 담는 최소 오브젝트이고, Service는 이 Pod에 대한 네트워크 접근을 제공하며, Deployment는 desired state(원하는 Pod 개수)를 유지하고 롤링 업데이트·롤백을 지원해 고가용성과 장애 허용을 보장한다.
