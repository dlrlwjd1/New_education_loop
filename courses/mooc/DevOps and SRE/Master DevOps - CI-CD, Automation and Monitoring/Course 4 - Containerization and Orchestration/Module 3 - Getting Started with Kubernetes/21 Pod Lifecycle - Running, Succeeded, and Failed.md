# Pod Lifecycle - Running, Succeeded, and Failed

## 개요
- Pod 라이프사이클의 나머지 단계 — Running, Succeeded, Failed, Unknown — 을 상세히 정리하며 Pod 라이프사이클 전체를 마무리.

## 내용
### Running 단계
- Pod가 Worker Node에 스케줄되고 그 안의 모든 컨테이너가 생성된 상태 — **최소 하나의 컨테이너가 Running 상태**이고 Pod가 정상 동작 중(operational).
- Pod에 메인 컨테이너와 헬퍼 컨테이너가 함께 있을 수 있는데, 헬퍼 컨테이너의 작업이 끝나도 메인 애플리케이션이 계속 실행 중이면 여전히 Running 단계.
- 이 상태에서 Pod에 입출력 요청을 보낼 수 있음.

### Succeeded 단계
- Pod가 종료되었고 **자신의 작업을 성공적으로 마친** 상태.
- 예: 백업 작업을 수행하는 컨테이너 — 백업이 성공하면 더 이상 계속 실행할 필요가 없으므로 **Exit Code 0**으로 정상 종료 → Succeeded(Completed) 상태.
- Succeeded 상태의 Pod는 **다시 재시작되지 않음** — 다음 날 다시 백업이 필요하면 새로운 Pod가 생성되어 같은 과정을 반복.
- Succeeded 상태의 Pod를 삭제해도 아무런 영향이 없음(이미 작업이 끝난 상태이므로).

### Failed 단계
- Pod가 정상적으로 실행되지 않고 오류를 보이는 상태 — 모든 컨테이너가 종료되었고 그중 최소 하나가 **0이 아닌(non-zero) Exit Code**로 종료(오류를 나타냄).
- Failed 상태의 Pod는 **수동 개입 없이는 재시작되지 않음**.
- Failed 단계에 진입하는 주요 원인:
  1. **애플리케이션 크래시** — 컨테이너 안의 애플리케이션이 다운됨.
  2. **리소스 고갈(Resource Exhaustion)** — 노드의 CPU·메모리가 부족(OOM, Out of Memory 등)해 실패.
  3. **노드 이슈** — 노드가 갑자기 종료되거나 오프라인 상태가 됨.

### Unknown 단계
- Pod의 상태를 확정할 수 없는 상태 — Running도, Failed도, Succeeded도, Pending도 아닌 "유령(ghost)" 같은 상태.
- 주로 **Worker Node와 Master Node(Control Plane) 사이의 통신 장애**로 인해 발생 — Worker Node가 Master와 통신이 끊기면 Master는 그 위의 Pod 상태를 정확히 알 수 없어 Unknown으로 표시.

### Pod 라이프사이클 전체 정리
- **Pending → Running → (Succeeded 또는 Failed) → Completed**, 그리고 통신 장애 시 **Unknown**이라는 5가지 단계로 Pod의 전체 생애주기가 구성됨.

## 요약
- Pod는 최소 하나의 컨테이너가 정상 동작 중인 Running 단계를 거쳐, 작업을 정상적으로 마치면(Exit Code 0) 재시작되지 않는 Succeeded 상태로, 애플리케이션 크래시·리소스 고갈·노드 장애 등으로 실패하면 수동 개입이 필요한 Failed 상태로 전환되며, Worker-Master 간 통신 장애 시에는 상태를 알 수 없는 Unknown 상태에 놓일 수 있다.
