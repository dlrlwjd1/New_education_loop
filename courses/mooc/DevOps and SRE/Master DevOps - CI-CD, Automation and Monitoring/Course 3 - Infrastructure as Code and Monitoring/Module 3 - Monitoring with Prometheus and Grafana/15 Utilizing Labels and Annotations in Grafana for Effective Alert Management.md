# Utilizing Labels and Annotations in Grafana for Effective Alert Management

## 개요
- Grafana 알림 시스템에서 Alert Instance를 식별하는 Label과, 알림에 맥락을 더하는 Annotation의 차이, 템플릿 기능, 베스트 프랙티스를 정리.

## 내용
### Labels(레이블) — Alert Instance 식별자
- Alert Instance를 고유하게 식별하는 key-value 쌍 — 알림을 구분하고, 알림 라우팅(routing)과 무음 처리(silence)를 적용하는 데 핵심적 역할.
- 예: `{alertname="High CPU Usage", server="server1"}`과 `{alertname="High CPU Usage", server="server2"}`는 알림 이름이 같아도 서로 다른 알림으로 취급됨.

### 레이블의 종류
1. **사용자 지정 레이블(User-Configured Labels)** — Alert Rule에서 수동으로 정의(예: `severity`, `team`, `environment`).
2. **쿼리 레이블(Query Labels)** — 데이터 소스 쿼리에서 파생(예: `instance`, `job`).
3. **예약 레이블(Reserved Labels)** — Grafana가 자동으로 추가(예: `alertname`, `grafana_folder`).
- 레이블은 알림 라우팅과 무음 처리 메커니즘에 활용됨 — 예: `severity="critical"` 알림은 우선순위 높은 채널로, `team="backend"` 알림은 백엔드 팀의 Contact Point로 라우팅.

### Annotations(주석) — 알림의 맥락 정보
- Alert Instance에 부가 정보를 제공해 문제 이해와 해결을 돕는 key-value 쌍 — Label과 달리 알림을 식별하는 데는 사용되지 않음.
- 자주 쓰이는 Annotation:
  - **summary** — 알림에 대한 간단한 설명.
  - **description** — 알림 조건에 대한 상세 정보.
  - **runbook_url** — 대응 절차를 담은 Runbook이나 문서 링크.
- Annotation은 알림 메시지를 풍부하게 만들어 대응자에게 즉각적인 맥락과 가이드를 제공.

### Label과 Annotation의 템플릿화
- Grafana는 Go 템플릿 언어를 사용해 Label과 Annotation에 동적 콘텐츠(변수, 조건 로직)를 포함시킬 수 있음.
- 주요 변수:
  - **`$labels`** — 알림의 레이블 값에 접근.
  - **`$values`** — 평가된 지표 값에 접근.
  - **`$externalURL`** — Grafana 인스턴스의 외부 URL 제공.
- 예: CPU 사용량 값에 따라 `severity` 레이블을 동적으로 다르게 설정하는 템플릿을 작성할 수 있음.

### 베스트 프랙티스
1. **라우팅·식별용으로 Label 사용** — 알림을 효과적으로 분류·라우팅하는 레이블을 정의하되, 현재 지표 값처럼 동적인 값을 레이블에 넣지 않도록 주의(알림 중복 생성을 방지).
2. **맥락 제공용으로 Annotation 활용** — 명확하고 간결한 summary·description을 제공하고, 대시보드나 Runbook 링크를 포함해 관련 정보에 빠르게 접근 가능하게 함.
3. **일관된 네이밍 컨벤션** — 레이블과 Annotation에 표준화된 네이밍 스킴을 채택해 알림 전반의 명확성 유지.
4. **템플릿을 철저히 테스트** — Grafana의 미리보기(preview) 기능으로 템플릿이 예상대로 렌더링되는지 확인하고, 동적 콘텐츠가 올바르게 채워지는지 검증.

## 요약
- Label은 Alert Instance를 고유하게 식별해 라우팅과 무음 처리에 사용되는 반면 Annotation은 summary·description·runbook_url 같은 맥락 정보를 제공하며, Go 템플릿으로 `$labels`·`$values`·`$externalURL` 같은 변수를 활용해 동적인 레이블·주석을 만들되 레이블에는 동적 지표 값을 넣지 않는 것이 베스트 프랙티스다.
