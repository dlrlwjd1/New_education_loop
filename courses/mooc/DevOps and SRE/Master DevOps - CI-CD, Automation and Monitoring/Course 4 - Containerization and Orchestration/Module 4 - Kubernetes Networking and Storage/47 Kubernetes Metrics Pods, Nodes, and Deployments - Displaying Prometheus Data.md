# Kubernetes Metrics Pods, Nodes, and Deployments - Displaying Prometheus Data

## 개요
- Import한 Pod 대시보드에서 실제 데이터를 확인하고, 추가로 **Node 대시보드(ID 159)**와 **Deployment 대시보드(ID 741)**를 Import해 인프라 레벨·워크로드 레벨의 메트릭까지 폭넓게 시각화.

## 내용
### Pod 대시보드(21298) 데이터 읽기
```bash
kubectl get nodes
kubectl get pod -n kube-system
```
- 클러스터 업타임(예: 약 1시간 3분)과 `kube-state-metrics` Pod의 나이(age)가 대시보드에 표시된 값과 정확히 일치함을 확인.
- 대시보드에서 확인 가능한 항목: Pod의 상태(Health, 재시작 여부 없음), **CPU 사용률**(예: 1.51%), **메모리 사용률**(예: 62.61%), 리소스 **요청(request)**과 **제한(limit)** 값(예: CPU 요청 0.105 core / 제한 1 core, 메모리 사용 136MB / 제한 556MB).
- 대시보드에서 **네임스페이스**를 선택하면(`monitoring` 등) 해당 네임스페이스의 Pod들만 필터링해서 볼 수 있음.
```bash
kubectl get pod -n monitoring
```
- 대시보드에 표시된 Prometheus Pod의 나이(예: 약 12분)가 `kubectl` 결과와 일치함을 재확인 — 네트워크 사용량, 스레드 수, 메모리 요청/제한(예: 210MB, 제한 없음=infinity)도 함께 확인 가능.

### Node 대시보드(ID 159) Import — 인프라 모니터링
- Grafana에서 새 대시보드 Import → ID **`159`**(Kubernetes/Node 모니터링용) 입력 → 데이터 소스로 Prometheus 선택 → Import.
- 이 대시보드는 Pod가 아니라 **노드(가상 머신) 자체의 상태**를 보여줌 — 노드 개수, 비정상(unhealthy) 노드 여부, 노드 업타임, CPU/메모리 가용량 등.
- 이 대시보드는 Kubernetes 노드뿐 아니라 Prometheus/Grafana로 모니터링하는 **일반 애플리케이션 서버**에도 널리 쓰이는 범용 시스템 모니터링 대시보드.
- 확인 내용 예시: 노드 업타임(약 1.1시간), 노드당 vCPU 2개, 노드별 가용 메모리(약 2.60~2.61GB, 사용률 68%), CPU 사용량, Load Average, 메모리 분포, 프로세스/포크(fork) 수 등 — **인프라(노드) 관점**의 모니터링.

### Deployment 대시보드(ID 741) Import — 워크로드 레벨 모니터링
- 새 대시보드 Import → ID **`741`**(Kubernetes Deployment 메트릭) 입력 → 데이터 소스 Prometheus 선택 → Import.
- 여러 Deployment를 운영할 때 각 Deployment의 통계를 보여주는 대시보드 — 확인 내용: Deployment의 메모리 사용률(예: 42.1%), CPU 사용률(예: 6%), 레플리카 가동률(100% Running), 사용 중/전체 리소스 대비, 컨테이너별 CPU 사용량, 프로세스별 CPU/메모리 사용량 등 **매우 세밀한(micro) 수준**의 모니터링까지 가능.

### 왜 Grafana를 쓰는가 — 결론
- Prometheus 자체 UI에는 이런 종류의 화려한 대시보드 기능이 없음 — 강조 색상, 큰 숫자 하이라이트, 그래프, 커스터마이징 기능이 Grafana의 강점.
- Prometheus가 데이터를 **수집**하고, 그 데이터를 Grafana가 넘겨받아 **시각화**하는 구조 — 이것이 Prometheus와 Grafana를 함께 쓰는 이유.

## 요약
- Import한 Kubernetes Pod 대시보드(21298)에서 실제 CPU/메모리 사용률과 리소스 요청/제한값이 `kubectl` 결과와 정확히 일치함을 확인했고, 추가로 Node 대시보드(159)로 노드(가상 머신) 단위의 CPU/메모리/업타임 등 인프라 모니터링을, Deployment 대시보드(741)로 Deployment·컨테이너·프로세스 단위의 세밀한 워크로드 모니터링을 각각 확인했으며, Prometheus는 데이터 수집을, Grafana는 그 데이터를 그래프·하이라이트가 포함된 풍부한 대시보드로 시각화하는 역할을 분담한다.
