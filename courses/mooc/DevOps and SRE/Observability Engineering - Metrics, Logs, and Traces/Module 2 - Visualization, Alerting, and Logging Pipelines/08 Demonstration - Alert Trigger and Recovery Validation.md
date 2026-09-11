# Demonstration: Alert Trigger and Recovery Validation (데모 — 경고 발화·복구 검증)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- 통제된 **CPU 스파이크**를 발생시켜 경고가 **inactive → pending → firing → inactive** 생애주기를 거치는지 관찰하고, Alertmanager 수신과 **flap 방지(flap protection)**를 검증하는 데모.

## 내용 · 예시

### 사전 확인
- 탭 1: `localhost:9090/alerts` → `HighCPUUsage` 규칙이 **inactive** (로드됐지만 조건 미충족).
- 탭 2: `localhost:9093` → 활성 경고 없음.

### 경고 발화 (CPU 스파이크)
```bash
# stress 유틸 설치 후:
stress --cpu 2 --timeout 120   # 2코어로 120초간 CPU 부하 (예측 가능·일시적 스파이크)
```
- **경고 생애주기** (`/alerts` 10~15초마다 새로고침):
  1. **inactive → pending** (15~30초 후): 조건은 참이 됐지만, Prometheus가 설정된 **지속 시간(`for`)**을 강제 → 아직 발화 안 함.
  2. **pending → firing** (약 1분 지속 후): 조건이 요구 기간 내내 참 → 공식 발화. Prometheus가 Alertmanager로 전달.
  3. Alertmanager UI(`:9093`)에 `HighCPUUsage`(severity=warning) 표시 → **통합 정상 작동**.
- 역할 분리: **Prometheus = 탐지·생성**, **Alertmanager = 수신·그룹·라우팅**.

### 복구
- stress가 120초 후 자동 종료 → CPU 정상화 → 1~2 평가 주기 후(약 30초) 경고 **firing → inactive**로 자동 해소(resolve).

### flap 방지 시연
```bash
stress --cpu 2 --timeout 20    # 20초 — 전체 경고 지속 시간을 만족하지 못하는 짧은 스파이크
```
- 경고가 **pending까지만** 가고 **firing에 도달하지 않음** → 20초 후 inactive 복귀.
- 조건이 설정 지속 시간 내내 참이 아니었으므로 **발화 안 함** → 짧은 일시 스파이크가 불필요한 통지를 만들지 않아 **경고 피로 방지**.

## 요약
- 경고 생애주기: **inactive → pending → firing → (해소) inactive**. `for`(지속 시간)가 pending→firing 전이를 게이트한다.
- **firing** 시 Prometheus가 Alertmanager로 전달, 복구 시 자동 resolve.
- **flap 방지**: 지속 시간을 못 채운 짧은 스파이크는 pending에서 멈춰 발화하지 않아 경고 피로를 막는다.
