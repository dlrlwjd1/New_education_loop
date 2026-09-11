# Demonstration: Analyzing Request Latency Using Distributed Traces (데모 — 분산 트레이스로 요청 지연 분석)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 3: Distributed Tracing and End-to-End Observability

## 개요
- 계측된 앱에서 **빠른/느린/오류 요청** 패턴을 생성하고, Jaeger에서 스팬 지속 시간을 비교·필터링해 지연 원인을 분석하는 데모.

## 내용 · 예시 (절차)

### 1. Jaeger·앱 준비
```bash
docker run ... jaeger   # all-in-one, localhost UI 확인
```
- 샘플 앱에 세 엔드포인트:
  - **fast** — 빠르게 완료되는 경량 요청.
  - **slow** — 여러 내부 스팬 포함, 그중 **DB 쿼리 같은 연산이 눈에 띄게 오래** 걸림.
  - **error** — **에러 상태(error status)**를 가진 트레이스 생성.
- OpenTelemetry 설정 + service name 지정, 각 엔드포인트가 작업을 스팬으로 생성.

### 2. 컨테이너화·실행
```bash
# Dockerfile: 경량 Python 이미지, 작업 디렉터리, flask + OpenTelemetry 의존성 설치, 앱 복사, 시작 명령
docker build -t demo-service .
docker run --name demo-service --network observability -p ... demo-service
docker ps               # 실행 확인
```

### 3. 트래픽 생성·분석
```bash
# fast·slow·error 엔드포인트에 여러 요청 → 각 요청이 트레이스 생성, Jaeger로 자동 export
```
- Jaeger에서 service name으로 검색 → 트레이스 목록 + **지속 시간** → 빠름/느림/오류 즉시 구분.
- **slow 트레이스 열기**: 부모 스팬 + 자식 스팬 → **DB 쿼리 스팬이 지연의 주 원인**, 응답 포매팅 스팬은 짧음 → 시간 소모 지점 명확.
- **fast 트레이스**: 전체 지속 시간 짧음, 지연 적음 → 효율 vs 느림 경로 비교.
- **error 트레이스**: Jaeger가 스팬에 **에러 상태 강조** → 실패 요청 별도 식별·조사.

### 4. Jaeger 필터·비교
- **최소 지속 시간(min duration) 필터** → 느린 요청만 격리.
- **연산 이름(operation name) 필터** (예: database query) → 특정 느린 의존성이 포함된 트레이스만.
- **Compare 뷰** → 여러 트레이스를 나란히 비교, 타이밍 차이 시각화.

## 요약
- 빠른/느린/오류 트레이스를 생성해 Jaeger에서 **지속 시간으로 즉시 구분**하고, slow 트레이스의 **DB 쿼리 스팬**이 지연 주범임을 식별.
- Jaeger의 **min duration·operation name 필터**와 **Compare 뷰**로 중요 트레이스를 격리·비교해 조사한다. (모듈 3 완료)
