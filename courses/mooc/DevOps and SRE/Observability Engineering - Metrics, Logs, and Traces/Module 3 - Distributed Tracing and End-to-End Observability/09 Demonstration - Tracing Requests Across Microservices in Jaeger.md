# Demonstration: Tracing Requests Across Microservices in Jaeger (데모 — Jaeger로 마이크로서비스 간 요청 추적)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 3: Distributed Tracing and End-to-End Observability

## 개요
- **3개 마이크로서비스**(API gateway → order → inventory)에 걸친 단일 요청을 추적하고, **트레이스 컨텍스트를 전파**해 Jaeger에서 하나의 연결된 트레이스로 시각화하는 데모.

## 내용 · 예시 (절차)

### 1. 환경·Jaeger
```bash
# Python·pip·앱 라이브러리(웹 프레임워크, 서비스 간 통신, OpenTelemetry) 설치
docker run ... jaeger   # 트레이싱 백엔드 + UI
# localhost 대시보드 (아직 트레이스 없음)
mkdir <project>         # 3개 서비스용 워크스페이스
```

### 2. 3개 서비스 (트레이스 컨텍스트 전파)
| 서비스 | 역할 |
|--------|------|
| **inventory service** | 다운스트림 백엔드 — 재고 확인, 스팬 생성, 지연 시뮬레이션(트레이스에서 기여 가시화) |
| **order service** | 중간 계층 — 요청 수신, 자체 스팬 생성, **inventory 호출 + 컨텍스트 전파** |
| **API gateway service** | 진입점 — 클라이언트 요청 수신, **최상위 스팬** 생성, order로 전달 + 컨텍스트 전파 |
- 세 서비스를 각각 별도 터미널에서 실행.

### 3. 요청 생성·추적
```bash
# API gateway 엔드포인트로 요청 1개 → 내부적으로 gateway → order → inventory 순 이동
```
- 각 서비스가 스팬 생성 → OTLP로 Jaeger 전송. **컨텍스트 전파** 덕분에 Jaeger가 전체 경로를 **하나의 연결된 트레이스**로 재구성.

### 4. Jaeger에서 확인
- API gateway를 진입점으로 트레이스 검색 → 트레이스 열기 → **스팬 계층(hierarchy)**:
  - 최상위: **gateway request span** (시스템 진입).
  - 중첩: **order processing span** (gateway가 order 호출).
  - 그 아래: **inventory check span** (order가 inventory 호출).
- 각 스팬 지속 시간 비교 → **어느 서비스가 가장 많은 지연**을 유발하는지 식별.

## 요약
- 3계층 마이크로서비스(gateway → order → inventory)에서 **트레이스 컨텍스트 전파**로 단일 요청이 하나의 트레이스로 묶인다.
- Jaeger의 **중첩 스팬 계층**이 서비스 의존성·요청 흐름을 드러내고, 지속 시간 비교로 지연 기여 서비스를 찾는다.
- 느린 요청 트러블슈팅과 마이크로서비스 동작 이해에 분산 추적이 매우 유용하다.
