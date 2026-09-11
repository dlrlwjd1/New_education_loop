# Persistent Volumes - Introduction

## 개요
- Kubernetes에서 Pod가 재생성될 때 데이터가 사라지는 문제를 소개하고, 이를 해결하는 Persistent Volume(PV)·Persistent Volume Claim(PVC) 개념을 도입.

## 내용
### 문제 상황: Pod가 죽으면 데이터도 사라진다
- Pod 안의 컨테이너에서 애플리케이션이 실행되며 사용자 데이터·설정 데이터를 저장한다고 가정.
- Pod가 죽으면(crash) Deployment, ReplicationController, ReplicaSet 등 컨트롤러가 Pod를 **재생성**하고 컨테이너도 원본 이미지로부터 다시 만들어지지만, **Pod가 죽기 전에 있던 데이터는 사라짐** — 새 컨테이너에는 그 데이터가 없음.
- 일반 Volume의 문제점:
  - **일시적(ephemeral) 특성** — Pod가 죽으면 컨테이너 안의 데이터도 함께 사라짐.
  - **Pod 중심 스코프** — 데이터가 Pod/컨테이너에 종속되어 있음.
  - **수동 관리 필요** — 데이터 백업이나 외부 볼륨 연동을 직접 관리해야 함.

### 해결책: Persistent Volume(PV)과 Persistent Volume Claim(PVC)
- Kubernetes는 **PV(Persistent Volume)**와 **PVC(Persistent Volume Claim)** 개념을 도입해 데이터를 컨테이너로부터 **분리(segregate)**.
- 데이터는 컨테이너 바깥에 유지되고, 컨테이너는 이 볼륨을 **마운트(mount)**해서 접근.
- Pod/컨테이너가 죽고 새로 만들어져도, **같은 볼륨을 다시 마운트**하면 이전 데이터를 그대로 이어서 사용 가능.

### 동작 방식
- Pod 안에 컨테이너가 있고, 컨테이너는 **Volume**을 함께 가짐 — 이 Volume은 **PV**이며 **PVC**에 매핑됨.
- **PVC**는 볼륨에 대한 **스토리지 요청(request)**이고, **PV**는 실제 볼륨이며, 이 PV는 외부 스토리지(external storage)로부터 제공됨.
- 이 볼륨을 컨테이너 안의 특정 경로(예: `/var/www/html` — 실제 애플리케이션 데이터가 저장되는 경로)에 마운트 — 그러면 모든 데이터가 실제로는 이 볼륨에 저장됨.
- Pod가 죽으면 Deployment 같은 컨트롤러가 Pod를 재생성하고 컨테이너를 이미지로부터 다시 만들지만, **동일한 PVC가 새 Pod에 다시 매핑**되어 이전과 동일한 데이터가 담긴 볼륨을 그대로 마운트 — 데이터 손실 없음.
- 실제로 PVC를 만들고 컨테이너에 볼륨을 마운트하는 방법은 이후 데모 세션에서 다룸.

### 추가로 다룰 개념
- **스토리지 생명주기(storage lifecycle)의 분리** — 컴퓨트(컨테이너)와 스토리지를 분리해서 관리.
- **클러스터 전역 가용성** — Persistent Volume은 특정 네임스페이스에 국한되지 않고 클러스터 전체(모든 네임스페이스)에서 사용 가능.
- **StorageClass를 통한 동적 프로비저닝(Dynamic Provisioning)** — NetApp, Dell EMC, Ceph Storage 같은 다양한 외부 스토리지를 Kubernetes 클러스터와 연동할 수 있으며, 이런 스토리지 티어(tier)를 정의한 것이 **StorageClass**. StorageClass를 활용하면 볼륨 프로비저닝을 동적으로 처리 가능.

## 요약
- Kubernetes에서 Pod가 재생성될 때마다 컨테이너 안에 있던 데이터는 사라지는 문제가 있는데, 이를 해결하기 위해 데이터를 컨테이너 바깥의 별도 스토리지로 분리하는 **Persistent Volume(실제 볼륨)**과 **Persistent Volume Claim(볼륨에 대한 요청)** 개념을 사용하며, PVC는 Pod가 재생성되어도 동일한 PV를 다시 매핑해 데이터 연속성을 보장하고, 향후에는 클러스터 전역 가용성과 StorageClass 기반 동적 프로비저닝도 다룰 예정이다.
