# Demonstration: Analyzing Request Latency Across Services in Jaeger (데모 — Jaeger로 서비스 간 요청 지연 분석)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 3: Distributed Tracing and End-to-End Observability

## 개요
- **두 서비스**에 걸친 트레이스를 생성하고, Jaeger에서 **스팬 지속 시간**을 분석해 어느 서비스가 지연에 가장 기여하는지 찾는 데모.

## 내용 · 예시 (절차)

### 1. 환경·Jaeger
```bash
sudo apt update      # Python + pip 설치·확인
# Docker 확인/설치·시작
docker run ... jaeger   # 트레이싱 백엔드 + UI
# localhost 대시보드 로드(트레이스 없음)
```

### 2. 두 서비스 (트레이스 컨텍스트 전파)
- **inventory service** (다운스트림 의존성): 호출 시 재고 확인 수행, OpenTelemetry로 계측, **지연을 시뮬레이션**해 트레이스에서 관찰 가능하게.
- **order API service** (진입점): 요청 수신 → 스팬 생성 → **inventory service 호출**(재고 확인). **트레이싱 컨텍스트를 요청과 함께 전달** → 두 서비스가 **같은 분산 트레이스**로 나타남.
- 각 서비스를 별도 터미널에서 실행.

### 3. 트래픽·분석
```bash
# order API 엔드포인트로 요청 → 주문 워크플로가 inventory service 호출
# 두 서비스가 스팬 생성 → OTLP로 Jaeger collector에 전송
```
- Jaeger 대시보드 → Service 드롭다운에서 **order API** 선택 → Search traces.
- 트레이스를 열면:
  - **부모 스팬** = 주문 처리 연산.
  - **자식 스팬** = 다운스트림 재고 확인.
  - 각 스팬: 시작 시간·지속 시간·연산 이름·실행 서비스. **타임라인**으로 시각 비교.
- 분석 결과: **inventory check가 order API 연산보다 오래 걸림** → **inventory service가 전체 지연에 가장 기여**.

## 요약
- 트레이스 **컨텍스트 전파**로 두 서비스(order API → inventory)가 하나의 분산 트레이스로 묶인다.
- Jaeger 타임라인에서 **스팬 지속 시간 비교**로 지연 기여도가 큰 서비스(여기선 inventory)를 식별.
- 이것이 분산 추적의 핵심 이점 — 서비스 경계를 넘는 **성능 병목을 쉽게 찾고 최적화 대상을 판단**한다.
