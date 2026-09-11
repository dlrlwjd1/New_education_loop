# Chaos Engineering Fundamentals (카오스 엔지니어링 기초)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- **카오스 엔지니어링(chaos engineering)**의 정의, 기원(Netflix), 철학, 이점, 원칙을 다룬다.

## 내용

### 카오스 엔지니어링이란
- 시스템에 **의도적으로 실패를 주입**해, 프로덕션의 격동적 조건을 견디는 능력에 대한 **확신을 쌓는** 실험 규율.
- 시스템을 온갖 방법으로 crash 시켜 회복력(resilience)을 테스트하고, 거기서 배워 개선하는 것이 목적.

### 기원 — Netflix
- **Chaos Monkey (2011)** — 프로덕션 인스턴스를 무작위 종료 → 엔지니어가 회복력 있는 서비스를 만들도록 강제.
- 이후 **Simian Army**(카오스 도구 모음)로 확장.

### 철학
- **실패를 포용(embrace failure)** — 트래픽이 적은 시간에 **통제된 방식**으로 자주 실패를 테스트.
- 실패를 **비상이 아닌 예상된 일상**으로 정상화(normalize).

### 이점
- 미래 실패 감소, **중복성(redundancy)·페일오버(failover) 검증**.
- 인시던트 대응 절차의 효과성 테스트, **회복력 엔지니어링 문화** 강화.

### 원칙
1. **가설 수립(build a hypothesis)** — "이렇게 하면 crash 날까?".
2. **실제 이벤트 시뮬레이션** — 예: 10만 사용자 동시 접속.
3. **프로덕션에서 실험** 실행하되 **폭발 반경 최소화(minimize blast radius)** — 서브셋·오프피크 시간.
4. **실험 자동화** — 수동 개입 제거.

## 요약
- 카오스 엔지니어링은 **의도적 실패 주입으로 시스템 회복력에 확신**을 쌓는 규율 (Netflix **Chaos Monkey → Simian Army**).
- 철학: 실패 포용·정상화. 이점: 중복성·페일오버 검증, 대응 절차 테스트, 문화 강화.
- 원칙: **가설 → 실제 이벤트 시뮬레이션 → 프로덕션 실험(폭발 반경 최소화) → 자동화**.
