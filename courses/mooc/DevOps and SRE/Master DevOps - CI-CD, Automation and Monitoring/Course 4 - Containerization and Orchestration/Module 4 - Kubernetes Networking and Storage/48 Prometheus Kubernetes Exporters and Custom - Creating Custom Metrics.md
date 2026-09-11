# Prometheus Kubernetes Exporters and Custom - Creating Custom Metrics

## 개요
- 커스텀 메트릭(Custom Metrics)을 Prometheus에 노출시키는 실습의 시작 — 순수 `kube-prometheus`(Helm Chart 이름이 이번에는 `prometheus`) 배포 후, 커스텀 메트릭을 노출할 Node.js 애플리케이션 프로젝트를 초기화.

## 내용
### 사전 준비 및 Prometheus 설치
```bash
kubectl get nodes
helm version
helm repo list
helm repo update
helm install prometheus prometheus-community/prometheus
```
- 2노드 GKE 클러스터(`hello-cluster`)에 Helm으로 Prometheus를 설치(이번 실습에서는 Chart 이름이 `prometheus`이며, 이전 실습들의 `kube-prometheus-stack`과는 별개의 더 단순한 Chart).

### Prometheus UI 노출 — NodePort
```bash
kubectl edit svc prometheus-server
```
- `type`을 `ClusterIP`에서 **`NodePort`**로 변경(예: 포트 `31273` 할당).
```bash
kubectl get nodes -o wide
```
- 노드 External IP 확인 후 `http://<노드 IP>:31273`으로 Prometheus UI 접속, Status → Targets에서 기본 Kubernetes 타깃들을 확인.

### 왜 커스텀 메트릭이 필요한가
- 지금까지 본 타깃들은 Kubernetes가 기본 제공하는 표준 타깃(Node, Pod 등) — 만약 **직접 만든 애플리케이션의 지표**를 Prometheus에 노출하고 싶다면, 이를 Prometheus의 **타깃(target)으로 직접 등록**해야 함.
- 이번 실습의 전체 흐름: ① 커스텀 메트릭을 노출하는 애플리케이션 작성 → ② Docker 이미지 빌드 및 Docker Hub 업로드 → ③ 그 이미지로 Pod와 Service 생성 → ④ Prometheus의 `prometheus.yml`(Prometheus Pod 안의 설정 파일)에 이 애플리케이션을 **스크레이프 설정(scrape config)**으로 등록 → ⑤ Prometheus UI에서 이 커스텀 메트릭 확인.
- 이 과정에서 Docker와 Kubernetes 개념을 함께 복습하게 됨.

### Node.js 커스텀 메트릭 애플리케이션 초기화
```bash
mkdir custom-metric-app
cd custom-metric-app
npm init -y
```
- `package.json` 파일이 기본값으로 생성됨(스크립트 내용은 이후 직접 수정 예정).
```bash
npm install express prom-client
```
- **`express`**: Node.js 웹 서버 프레임워크.
- **`prom-client`**: Node.js 애플리케이션이 Prometheus 형식의 메트릭을 노출할 수 있게 해주는 공식 클라이언트 라이브러리 — Prometheus의 스크레이프 대상이 되려면 이 라이브러리로 메트릭 엔드포인트를 만들어야 함.
- 설치 결과: 70여 개 패키지 추가, 취약점 0건.

## 요약
- 이번 실습은 직접 만든 애플리케이션의 메트릭을 Prometheus에 노출시키는 전체 과정을 다루며, `helm install prometheus prometheus-community/prometheus`로 기본 Prometheus를 설치하고 Service를 NodePort로 바꿔 UI에 접근한 뒤, `express`와 `prom-client` 패키지를 설치한 Node.js 프로젝트(`custom-metric-app`)를 초기화하는 단계까지 진행했으며, 이후 Docker 이미지 빌드·Pod/Service 배포·Prometheus 스크레이프 설정 등록으로 이어질 예정이다.
