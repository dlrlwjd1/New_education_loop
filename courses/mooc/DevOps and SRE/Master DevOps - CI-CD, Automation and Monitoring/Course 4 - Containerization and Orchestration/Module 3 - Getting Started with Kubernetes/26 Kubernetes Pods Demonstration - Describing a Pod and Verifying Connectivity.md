# Kubernetes Pods Demonstration - Describing a Pod and Verifying Connectivity

## 개요
- `kubectl describe pod`로 Pod의 상세 정보(노드, IP, 컨테이너 런타임)를 확인하고, `kubectl port-forward`로 로컬에서 Pod에 연결해 동작을 검증하는 실습.

## 내용
### `kubectl describe pod`로 상세 정보 확인
```bash
kubectl describe pod nginx-pod
```
- Pod가 실행 중인 **노드 이름**, **노드 IP**, **Pod IP**, 컨테이너 이름(`nginx`), 사용된 **컨테이너 런타임**을 확인.
- 이 실습은 **GKE 클러스터**이며, GKE는 Docker가 아니라 **containerd**를 컨테이너 런타임으로 사용(Docker, containerd, Podman, CRI-O 등 여러 런타임 중 GKE는 containerd 채택).
- **이미지는 범용(Universal)** — Docker Hub(`docker.io`)에 있는 이미지는 Docker든 containerd든 CRI-O든 Podman이든 어떤 런타임에서도 동일하게 사용 가능 — **Kubernetes의 기본 컨테이너 레지스트리는 Docker Hub**.
- **Events** 섹션에서 "Successfully assigned", "Pulling image", "Successfully pulled image in 177ms", "Created container", "Started container" 등 Pod 생성 전 과정의 이벤트 로그 확인 가능.

### `kubectl port-forward`로 연결 확인
```bash
kubectl port-forward nginx-pod 8080:80
```
- 명령을 실행한 로컬 머신(Cloud Shell)의 포트 **8080**을 Pod 컨테이너가 리스닝하는 포트 **80**에 연결(forward).
- 출력: "Forwarding from 127.0.0.1:8080 -> 80".
- 다른 터미널에서 접속 테스트:
```bash
curl 127.0.0.1:8080
```
- 응답으로 **"Welcome to nginx!"** 확인 — 애플리케이션이 정상 작동 중임을 검증.

### 주의: Port-forward는 프로덕션 방식이 아님
- `kubectl port-forward`는 **테스트·PoC 목적**으로만 사용 — 실제 프로덕션에서는 **Service**(ClusterIP, NodePort, LoadBalancer)를 사용해 Pod와 통신하는 것이 표준적인 방법(다음 세션에서 다룰 예정).

## 요약
- `kubectl describe pod`로 Pod가 실행 중인 노드·IP·컨테이너 런타임(GKE는 containerd) 정보를 확인할 수 있으며, Docker Hub 이미지는 어떤 런타임에서도 범용적으로 사용 가능하고, `kubectl port-forward <Pod> <로컬포트>:<컨테이너포트>`로 로컬에서 Pod에 직접 연결해 `curl`로 동작을 검증할 수 있지만 이는 테스트 전용 방식이며 실제 운영에서는 Service를 사용해야 한다.
