# Kubernetes Health-Check Patterns

## 개요
- Kubernetes의 3가지 프로브(Liveness, Readiness, Startup)의 목적과 동작 방식, 타이밍 파라미터, 그리고 실전 YAML 예시와 시나리오별 튜닝 전략을 정리.

## 내용
### 3가지 프로브 유형
1. **Liveness Probe** — 컨테이너가 응답하지 않거나 교착(deadlock) 상태에 빠졌을 때 이를 감지해 **자동으로 재시작**. 무한 루프나 멈춘 상태에서 컨테이너를 복구하는 데 유용.
   - 동작: 프로브가 연속으로(`failureThreshold` 이상) 실패하면 kubelet이 컨테이너를 재시작.
2. **Readiness Probe** — 컨테이너가 **트래픽을 받을 준비가 되었는지** 나타냄. 실패하면 Pod가 Service 엔드포인트 목록에서 제외되지만 **컨테이너를 재시작하지는 않음**.
   - 동작: 지속적으로 평가되며, 롤링 업데이트 시 정상(healthy)인 Pod에만 트래픽 전환을 허용.
3. **Startup Probe** — **느리게 시작하는 컨테이너**를 위한 프로브. Readiness/Liveness보다 먼저 실행되며, 이 프로브가 성공해야 비로소 나머지 두 프로브가 작동 시작.
   - 적합한 경우: 시작에 시간이 오래 걸리는 애플리케이션(예: Java 앱, 대용량 파일을 로드하는 서비스).

### `initialDelaySeconds`와 프로브 타이밍
- **`initialDelaySeconds`** — 첫 프로브를 실행하기 전 대기 시간(기본값 0) — 느리게 시작하는 컨테이너가 조기에 실패 판정을 받지 않도록 방지하는 데 필수.
- **`periodSeconds`** — 프로브 간격(기본 10초).
- **`timeoutSeconds`** — 프로브 응답을 기다리는 최대 시간(기본 1초).
- **`failureThreshold`** — 프로브가 실패로 간주되기까지 허용되는 연속 실패 횟수.
- **`successThreshold`** — 정상(healthy)으로 표시되기 위해 필요한 연속 성공 횟수(주로 Startup Probe, 때때로 Readiness Probe에 사용).

### `initialDelay`와 프로브를 함께 쓰는 이유
- **거짓 실패 방지** — 느리게 시작하는 컨테이너가 Liveness Probe를 너무 일찍 실행하면 곧바로 죽을 수 있음.
- **시작 흐름 조율** — Startup Probe로 초기화가 끝난 뒤에야 헬스 체크가 시작되도록 보장.

### 패턴과 베스트 프랙티스
- **Startup → Readiness → Liveness** 계층화 — Startup Probe(전체 초기화 대기) → Readiness Probe(깨어나서 트래픽 받을 준비) → Liveness Probe(지속적인 건강 상태 보장).
- **HTTP 엔드포인트 매칭** — `/healthz` 같은 가벼운 엔드포인트를 Readiness·Liveness 모두에 사용 가능. Readiness는 DB 연결·캐시 같은 더 깊은 검사를 포함할 수 있는 반면, Liveness는 단순히 프로세스 생존 여부만 확인.
- **타이밍 전략**:
  - 빠른 실패 감지 — 짧은 `period`, `timeout`, `threshold`.
  - 일시적 결함에 강건함 — 높은 `failureThreshold`로 순간적인 실패를 허용.
  - 재시작 폭주 방지 — Liveness는 Readiness보다 더 보수적으로 설정.

### 예시 YAML
**a) 기본 HTTP 프로브**
```yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 15
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 3

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```
- Readiness는 일찍 작동해 트래픽 라우팅을 처리하고, Liveness는 불필요한 재시작을 막기 위해 더 드물게, 더 높은 임계치로 실행.

**b) Startup Probe 추가**
```yaml
startupProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 5
  failureThreshold: 20
```
- 약 100초(20×5초)의 시작 여유를 컨테이너에 제공한 뒤에야 Readiness/Liveness 체크가 시작됨.

### 시나리오별 튜닝 예시
- **빠르게 시작하는 웹 앱** — Startup Probe 불필요. 가벼운 Readiness Probe(연결 확인 정도). 낮은 임계치로 자주 실행되는 Liveness Probe.
- **느린 Java 앱이나 ML 모델 로더** — 넉넉한 지연·임계치를 가진 Startup Probe. 초기화 성공 후 Readiness. 재시작을 피하기 위한 보수적인 Liveness.
- **CPU 집약적 작업** — `timeoutSeconds`를 1초보다 크게 설정. 내부 상태나 파일 존재 여부를 확인하는 **Exec(Command) 프로브** 사용 고려.

### 요약 표
| 프로브 유형 | 목적 | Pod 상태에 대한 영향 | Initial Delay의 역할 |
|---|---|---|---|
| Startup | 느린 시작 허용 | 성공할 때까지 Readiness/Liveness 차단 | 초기화를 위한 여유 제공 |
| Readiness | 준비 안 된 컨테이너로의 트래픽 차단 | Pod는 계속 실행되지만 목록에서 제외 | 안정화를 위해 보통 작게 설정 |
| Liveness | 비정상·멈춤 상태 감지 | Pod가 재시작됨 | 조기 재시작 방지, 균형 잡힌 타이밍 필요 |

## 요약
- Startup Probe는 느린 초기화를 기다려주고, Readiness Probe는 준비되지 않은 Pod를 트래픽 라우팅에서 제외하며, Liveness Probe는 멈춘 컨테이너를 감지해 재시작하는 서로 다른 역할을 하므로, `initialDelaySeconds`·`periodSeconds`·`timeoutSeconds`·`failureThreshold`를 애플리케이션의 시작 속도와 특성에 맞게 조율해 Startup→Readiness→Liveness의 계층적 조합으로 설정하는 것이 베스트 프랙티스다.
