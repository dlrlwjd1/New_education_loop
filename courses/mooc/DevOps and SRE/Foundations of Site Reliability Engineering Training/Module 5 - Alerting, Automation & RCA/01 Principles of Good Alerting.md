# Principles of Good Alerting (좋은 경고의 원칙)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- 효과적인 경고(alerting)의 핵심 원칙을 다룬다.

## 내용

### 좋은 경고의 원칙
- **필요할 때만 통지(notify only when needed)** — 실제 주의가 필요한(에스컬레이션 수준) 경고만 발생, 단순 정보성 X.
- **명확·실행 가능한 메시지** — 무엇이 일어났나? 무엇을 해야 하나? 잠재 영향은? 을 앞에 제시해 빠른 결정.
- **사용자 영향 우선순위** — 치명적 실패·영향받은 사용자와, 일회성 이상(한 번의 500 오류·DNS 실패)을 구분.
- **경고 피로 회피** — 같은 비치명적 경고가 반복되면 "늑대야" 효과 → **적절한 경고를 적시에 적임자에게**.

## 요약
- 좋은 경고는 **필요할 때만·명확하고 실행 가능하게·사용자 영향 우선·경고 피로 회피**의 원칙을 따른다.
