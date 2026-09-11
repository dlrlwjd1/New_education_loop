# Demonstration: Exporting Traces to Jaeger (데모 — Jaeger로 트레이스 내보내기)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 3: Distributed Tracing and End-to-End Observability

## 개요
- 계측된 서비스가 텔레메트리를 생성하고, **OTLP 익스포터로 Jaeger에 트레이스를 내보내** 요청 실행 생애주기를 Jaeger UI에서 시각화하는 데모. (수동으로 스팬을 만드는 주문 처리 서비스 예제)

## 내용 · 예시 (절차)

### 1. 환경 준비 + Jaeger 배포
```bash
sudo apt update
# Python + pip 설치, python --version 확인
# Docker 확인/설치, docker 서비스 시작 (부팅 자동 시작 선택)
docker run ... jaeger   # all-in-one: collector + storage + UI
# 브라우저 localhost(Jaeger 대시보드) → 로드되지만 아직 트레이스 없음(앱 미전송)
```

### 2. 프로젝트·의존성
```bash
mkdir <project> && cd <project>
pip install <opentelemetry-api> <sdk> <OTLP exporter> <flask instrumentation>
```
- OpenTelemetry API·SDK·OTLP 익스포터·Flask 계측 → 트레이스 생성, 스팬 관리, 백엔드로 내보내기.

### 3. 애플리케이션 (주문 처리 서비스)
- 요청을 받아 **주문 검증(order validation)·결제 처리(payment processing)** 수행.
- 코드에서 **OpenTelemetry 설정 + service name 정의**(Jaeger에서 식별) + **익스포터를 로컬 Jaeger collector로** 설정.
- Flask 엔드포인트가 요청 시 **요청 및 내부 연산의 스팬 생성**.

### 4. 실행·트래픽·시각화
```bash
# 앱 실행 (로컬 포트 리슨)
# 다른 터미널에서 주문 처리 엔드포인트로 요청 → 각 요청이 트레이스 생성, OTLP로 Jaeger에 전송
```
- Jaeger 대시보드 → Service 드롭다운에서 주문 처리 서비스 선택 → **Search traces**.
- 트레이스를 열면: **부모 스팬(메인 요청 핸들러)** + **자식 스팬(주문 검증, 결제 처리)**.
- 각 스팬: **시작 시간·지속 시간·연산 이름·서비스 정체성**. 타임라인으로 시각화 → 각 연산 소요·지연 위치 파악.

## 요약
- **Jaeger**를 트레이스 백엔드로 배포하고, **OpenTelemetry로 계측**한 서비스가 **OTLP 익스포터**로 트레이스를 전송한다.
- Jaeger UI에서 **부모(요청 핸들러)·자식(검증·결제) 스팬**을 타임라인으로 보며 병목·지연을 진단한다.
- (이전 데모의 자동 계측과 달리, 여기서는 애플리케이션 코드에서 스팬을 직접 구성하는 방식.)
