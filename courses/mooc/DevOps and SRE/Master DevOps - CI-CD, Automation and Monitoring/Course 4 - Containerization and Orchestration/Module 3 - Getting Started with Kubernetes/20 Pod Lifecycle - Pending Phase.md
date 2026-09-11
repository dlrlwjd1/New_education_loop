# Pod Lifecycle - Pending Phase

## 개요
- Pod 라이프사이클의 전체 단계(Pending → Running → Succeeded/Failed → Completed, 그리고 Unknown)를 개괄하고, 그중 Pending 단계의 의미와 지연 원인을 상세히 정리.

## 내용
### Pod 라이프사이클이란
- Pod가 생성부터 종료까지 거치는 일련의 단계(phase) — 현재 상태를 이해하고 클러스터 내 동작을 관리하기 위한 프레임워크.

### 전체 흐름
1. Pod 생성 → **Pending** 상태로 시작.
2. Pending → **Running** 상태로 전환.
3. Running 상태에서 → **Succeeded**(정상 완료) 또는 **Failed**(실패)로 전환.
4. 그 외에 **Unknown** 상태도 존재(원인은 후속 강의에서 다룸).
5. Succeeded나 Failed에 도달하면 최종적으로 **Completed(종료)** 상태.
- 애플리케이션이 작업을 완료하면 Succeeded, 애플리케이션에 문제가 있으면 Failed, 계속 실행 중이면 Running 상태 유지.

### Pending 단계란
- Pod를 생성하는 명령(`kubectl run` 등)을 실행하면 **즉시 Pending 상태**가 됨.
- Kubernetes Master Node의 두 컴포넌트가 관여:
  - **API(kube-apiserver)** — Pod 생성 요청을 수락하고, 해당 Pod의 설정을 캐시 메모리에 저장하며 상태를 Pending으로 유지.
  - **Scheduler** — 이 Pod를 실행할 **Worker Node를 배정**. 노드가 배정되면 Pod는 Pending에서 벗어나 해당 Worker Node에 생성되며 Running 상태로 전환.
- 요약: Kubernetes 시스템이 Pod 생성을 수락했지만, **스케줄링 프로세스가 Worker Node를 배정하고 필요한 컨테이너 이미지를 다운로드하는 동안** Pod는 Pending 상태로 대기.

### Pending 단계를 지연시키는 요인
1. **리소스 제약(Resource Constraint)** — 여러 Worker Node가 있어도 Pod가 요구하는 CPU·메모리를 어느 노드도 충족하지 못하는 경우.
2. **충족되지 않은 의존성(Unsatisfied Dependency)** — 예: Pod가 볼륨을 필요로 하는데 그 볼륨이 아직 생성되지 않은 경우 — 볼륨이 먼저 준비되어야 Pod가 데이터를 저장할 수 있으므로, 볼륨 없이 Pod를 만들면 계속 Pending 상태로 머무름.
3. **이미지 풀 지연(Image Pull Delay)** — 이미지 크기가 크고(예: 200~500MB) 대역폭이 낮으면 이미지를 받아오는 데 2~3분 이상 걸릴 수 있음 — 그 기간 동안 Pod는 Pending 상태 유지.

## 요약
- Pod는 생성 즉시 Pending 상태가 되며, API 서버가 요청을 수락한 뒤 Scheduler가 Worker Node를 배정하고 필요한 이미지를 받아오는 동안 이 상태가 유지되고, 리소스 부족·볼륨 등 의존성 미충족·대용량 이미지 다운로드 지연이 Pending 상태를 길어지게 하는 주요 원인이다.
