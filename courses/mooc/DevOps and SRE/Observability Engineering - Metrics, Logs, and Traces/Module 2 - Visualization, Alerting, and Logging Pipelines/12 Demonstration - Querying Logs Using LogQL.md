# Demonstration: Querying Logs Using LogQL (데모 — LogQL로 로그 조회)

> 강좌: Observability Engineering: Metrics, Logs, and Traces · 모듈 2: Visualization, Alerting, and Logging Pipelines

## 개요
- Grafana Explore + Loki에서 **LogQL** 쿼리를 실행 — 단순 라벨 필터부터 고급 파싱, 메트릭 스타일 집계까지 — 하는 데모.

## 내용 · 예시

### 준비
- Loki 포트 3100 리슨 + `http://localhost:3100/ready` 확인.
- Grafana(`:3000`) → **Explore** → 데이터 소스 **Loki** 선택 → 시간 범위 Last 5 minutes.

### LogQL 쿼리 패턴
```logql
# 1) 라벨 필터 (LogQL의 기초, 라벨은 인덱싱됨 → 성능·확장성 위해 항상 먼저)
{job="myapp"}
{job="myapp", env="CloudLab"}          # 두 라벨 모두 매칭

# 2) 내용 필터 (line filter)
{job="myapp"} |= "checkout"            # "checkout" 포함
{job="myapp"} != "error"               # "error" 제외

# 3) 키-값 형식 텍스트 필터
{job="myapp"} |= "level=info"
{job="myapp"} |= "level=error"         # (에러 로그 없으면 비어 있음; 로그에 level=error 라인 추가 후 재실행)

# 4) 파이프라인 파싱 — logfmt로 key=value를 구조화 필드로 추출
{job="myapp"} | logfmt              # level, service, message, user_id 등이 개별 필드로

# 5) 로그 → 메트릭 (강력한 기능)
count_over_time({job="myapp"}[1m])                    # 분당 로그 수 (Graph 뷰 시계열)
count_over_time({job="myapp"} |= "level=error" [1m])  # 에러 추세 (에러 시 스파이크)
rate({job="myapp"}[1m])                               # 초당 로그 수 (수집률)

# 6) 그룹·집계
sum by (job) (count_over_time({job="myapp"} |= "level=error" [5m]))  # 서비스별 에러 분포
```

### 실제 조사 워크플로
1. 서비스의 **에러 로그 필터** + 구조화 필드 파싱 → 실패 이벤트로 좁힘.
2. 특정 **user_id 필터** → 문제가 특정 사용자에 영향인지 격리.
3. 시간 범위를 **Last 15 minutes**로 조정·재실행 → 에러 전후 맥락 확인 (근본 원인 분석).
- → 실제 트러블슈팅과 동일: **에러 탐지 → 영향 대상 격리 → 관련 활동 시간창 검사**.

### 핵심 원칙 3가지
1. **라벨은 인덱싱됨** → 내용 필터 전에 라벨로 먼저 필터 (성능).
2. **파이프라인 단계(logfmt 등)**로 로그를 구조화 → 정확·신뢰성 있는 필터링.
3. LogQL은 **`count_over_time`·`rate` 같은 메트릭 스타일 함수** 지원 → 로그에서 직접 대시보드·경고 생성.

## 요약
- LogQL은 **라벨 필터 → 내용 필터(`|=`, `!=`) → 파싱(`| logfmt`) → 메트릭 집계(`count_over_time`, `rate`, `sum by`)** 순으로 확장된다.
- 같은 데이터 소스로 **깊은 로그 조사 + 고수준 추세 분석**이 모두 가능하며, 로그에서 직접 대시보드·경고를 만들 수 있다. (모듈 2 완료)
