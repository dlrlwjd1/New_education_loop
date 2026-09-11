# Configuring Prometheus to Scrape Kubernetes Metrics - Capturing and Viewing Kubernetes Data

## 개요
- Prometheus UI만으로 Pod, 노드, ConfigMap, Secret 등 클러스터 전반의 데이터를 직접 쿼리해서 확인하고, `kubectl` 명령 결과와 대조해 정확성을 검증.
- 참고: 원본 자막에서 Pod를 가리킬 때 "part"라는 단어가 반복 등장하는 것은 자동 음성 인식 오류이며, 이 노트에서는 문맥에 맞게 Pod로 표기.

## 내용
### Prometheus가 모니터링하는 대상(Target) 확인
- Prometheus UI → **Status → Targets**에서 확인 가능한 기본 타깃들: **Kubernetes API**, **Kubernetes 노드**, **cAdvisor**, **Pod**, **서비스 엔드포인트**, **Prometheus 자신**, **Push Gateway** 등 — Prometheus는 이 모든 곳에서 데이터를 수집.

### Grafana 없이 수동 쿼리로 데이터 확인 — Prometheus UI의 한계
- Grafana에서는 대시보드를 Import하기만 하면 자동으로 시각화됐지만, **Prometheus UI에서는 직접 쿼리(query)를 입력**해야 데이터를 볼 수 있음 — 상대적으로 번거로움.

### Pod 정보 조회 및 kubectl과 대조
```text
# Prometheus 쿼리
kube_pod_info
```
- Pod들의 IP 주소 목록이 반환됨.
```bash
kubectl get pod -A -o wide
```
- `kubectl` 결과의 Pod IP(예: `10.1.1.6.17` 형태)와 Prometheus 쿼리 결과의 IP가 **정확히 일치**함을 확인.
- Prometheus 쿼리 결과 하단에 표시된 **"27개 결과(series)"**가, `kubectl get pod -A | wc -l`(전체 줄 수, 헤더 1줄 제외)로 센 실제 Pod 개수와 일치함을 검증.

### 노드 정보 조회
```text
node_boot_time_seconds
```
- 클러스터의 2개 노드에 대한 부팅 시간(boot time, 초 단위) 확인.
```text
node_disk_info
```
- 노드의 디스크 정보 — 디스크 개수, 사용 위치, 마운트 포인트 등 상세 정보 확인 가능.

### Kubernetes API 리소스(ConfigMap, Secret) 조회
```text
kube_configmap_info
```
- 클러스터에 생성된 ConfigMap 목록과 정보 확인.
```text
kube_secret_info
```
- 클러스터의 Secret 목록 확인 — 예시에서는 **7개의 Secret**이 조회됨. 각 Secret의 **이름**, **타입**(대부분 `Opaque`, 일부는 `helm.sh` 관련 타입), **소속 Pod**, **소속 네임스페이스**(예: `gmp-system`)까지 확인 가능.
- 중요: Prometheus가 Secret에 대해 보여주는 것은 **메타데이터(이름, 타입, 소속)**이며, Secret 안에 담긴 실제 민감한 값(비밀번호 등)을 노출하는 것은 아님.

### 결과를 표/그래프로 보기
- Prometheus UI에는 쿼리 결과를 **테이블(Table)** 형태와 **그래프(Graph)** 형태로 전환해서 볼 수 있는 옵션이 있음 — 데이터가 충분히 쌓이면 그래프로도 추이를 확인 가능.

## 요약
- Prometheus UI는 Grafana처럼 자동 시각화 대시보드는 없지만, `kube_pod_info`, `node_boot_time_seconds`, `node_disk_info`, `kube_configmap_info`, `kube_secret_info` 같은 메트릭을 직접 쿼리하면 Pod IP·노드 부팅 시간·디스크 정보·ConfigMap·Secret 메타데이터까지 클러스터 전반의 데이터를 확인할 수 있으며, 실습에서는 Prometheus 쿼리 결과(Pod IP, Pod 개수)가 `kubectl` 명령 결과와 정확히 일치함을 직접 대조해 검증했다.
