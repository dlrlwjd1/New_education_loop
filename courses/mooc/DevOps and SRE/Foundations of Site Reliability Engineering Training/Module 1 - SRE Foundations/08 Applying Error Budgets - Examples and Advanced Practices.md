# Applying Error Budgets: Examples and Advanced Practices (에러 버짓 적용 — 예시와 고급 실무)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 1: SRE Foundations

## 개요
- 에러 버짓의 구체적 계산 예시와 **고급 개념**(번 레이트·정책 관리·버짓 배분·이해관계자 소통)을 다룬다.

## 내용

### 에러 버짓 계산 예시
- 시나리오: **SLO 99.9% 가동시간 → 에러 버짓 0.1% 다운타임 → 30일 월 기준 허용 43분**.
- 버짓 사용:
  - 계획된 유지보수(planned maintenance): 15분.
  - 예상치 못한 장애(unexpected outage): 20분.
  - **남은 버짓(remaining): 8분** (43 − 15 − 20).

### 고급 개념
- **번 레이트(burn rate)** — 에러 버짓이 소비되는 속도. 높은 번 레이트는 심각한 이슈를 뜻함 (천천히 vs 급속 소비).
- **정책 관리(policy management)** — 에러 버짓 상태에 따른 사전 정의 조치. 예: **버짓 75% 소비 시 신규 릴리스 중단(halt)**. → 과소비 경고 필요.
- **버짓 배분(budget allocation)** — 여러 팀·서비스에 에러 버짓을 분배해 복잡한 시스템 전반의 신뢰성 관리.
- **이해관계자 소통(stakeholder communication)** — 에러 버짓 상태를 정기 보고해 엔지니어링·제품·비즈니스 팀 간 기대 정렬.

## 요약
- 예시: SLO 99.9% → 월 43분 버짓, 유지보수 15분 + 장애 20분 소비 → **남은 8분**.
- 고급 실무: **번 레이트(소비 속도), 정책 관리(75% 소비 시 릴리스 중단), 버짓 배분, 이해관계자 소통**.
