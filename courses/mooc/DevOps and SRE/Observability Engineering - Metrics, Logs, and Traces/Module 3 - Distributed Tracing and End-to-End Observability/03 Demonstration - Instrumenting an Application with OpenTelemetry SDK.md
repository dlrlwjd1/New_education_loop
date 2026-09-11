# Demonstration: Instrumenting an Application with OpenTelemetry SDK (데모 — OpenTelemetry SDK로 애플리케이션 계측)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 3: Distributed Tracing and End-to-End Observability

## 개요
- **Jaeger**(트레이스 백엔드)를 설치하고, Flask 앱을 **OpenTelemetry로 계측(instrument)**해 **OTLP로 트레이스를 내보내(export)**, Jaeger UI에서 분산 트레이스를 시각화하는 데모.
- 메트릭="어떻게", 로그="무엇이", **트레이스="요청이 서비스 전반을 어떻게 흐르는지"**.

## 내용 · 예시 (절차)

### 1. Jaeger 설치 (Docker)
```bash
docker version                      # Docker 확인
docker run ... jaegertracing/all-in-one   # all-in-one 이미지
#   포트 16686(UI), 4317·4318(OTLP 수집)
docker ps                           # 컨테이너 활성 확인
# 브라우저 localhost:16686 → Jaeger UI 로드 확인
```

### 2. 앱 환경·의존성
```bash
mkdir ~/app && cd ~/app
python3 -m venv venv && source venv/bin/activate
pip install flask requests                              # 아웃바운드 호출하는 웹 앱
pip install <opentelemetry distro> <OTLP exporter>      # OTel 배포판 + OTLP 익스포터
pip install <flask + requests instrumentation>          # 프레임워크 호출 자동 래핑 → 수동 추적 코드 불필요
```

### 3. 애플리케이션 (app.py)
- `/health` — 단순 상태 응답.
- `/checkout` — 짧은 랜덤 지연(처리 시뮬레이션) 후 **httpbin으로 아웃바운드 HTTP 요청** → Jaeger에서 **부모·자식 스팬** 시연용.

### 4. OpenTelemetry 환경 변수
```bash
export OTEL_SERVICE_NAME=<service>                       # Jaeger가 트레이스를 이 서비스로 그룹화
export OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317 # Jaeger의 OTLP gRPC 포트
export OTEL_TRACES_EXPORTER=otlp                         # OTLP 트레이스 익스포터 활성화
```

### 5. 자동 계측 실행·트래픽 생성
```bash
opentelemetry-instrument python app.py    # 래퍼가 자동 계측 활성화, Flask는 포트 5000
# 다른 터미널:
curl localhost:5000/health
curl localhost:5000/checkout              # 인바운드 HTTP 스팬 + 아웃바운드 HTTP 클라이언트 스팬
# 루프로 여러 checkout 요청 → 다수 트레이스 생성
```

### 6. Jaeger UI 확인
- `localhost:16686` → Service 드롭다운에서 설정한 서비스 선택 → **Find Traces**.
- 트레이스 하나를 열면: **루트 스팬**(Flask 수신 HTTP) + **자식 스팬**(requests 라이브러리 아웃바운드 호출), 지연 분해·타이밍 관계 표시.

## 요약
- **Jaeger**(포트 16686 UI, 4317/4318 OTLP)를 Docker로 띄우고, **OpenTelemetry 자동 계측**(`opentelemetry-instrument`)으로 수동 코드 없이 스팬 생성.
- **환경 변수**(`OTEL_SERVICE_NAME`, `OTEL_EXPORTER_OTLP_ENDPOINT`, `OTEL_TRACES_EXPORTER=otlp`)로 OTLP 내보내기 설정.
- Jaeger UI에서 **부모(인바운드)·자식(아웃바운드) 스팬**과 지연 분해로 요청 흐름을 시각화한다.
