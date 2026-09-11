# Designing Effective Alerts: Multi-Level and SLO-Based Alerting (효과적 경고 설계)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- 효과적인 경고 메시지 작성, **다단계 경고(multi-level)**, **SLO 기반 경고**를 다룬다.

## 내용

### 효과적 경고 메시지
- **나쁜 경고**: 모호함 (예: "CPU usage high" — 무엇이? 어디서?).
- **좋은 경고**: 구체적 (예: "결제 서비스 CPU 사용 95%") → 빠른 반응·누구를 부를지 판단.
- 효과적 경고 5요소: **What(무슨 이슈)·Where(영향받은 시스템/컴포넌트)·Impact(사용자/비즈니스 영향)·When(시각·지속시간)·Actions(제안 조치·런북 링크)**.

### 다단계 경고 전략 (Multi-Level)
| 임계값 | 동작 |
|--------|------|
| **경고(Warning)** | 모니터링 대시보드·팀 챗으로 |
| **치명(Critical)** | 즉시 온콜 호출 (911) |
| **에스컬레이션(Escalation)** | 2차 온콜 팀 페이지 (확인됐는지) |
| **긴급(Emergency)** | 전체 팀·경영진 총동원 (P0) |

### SLO 기반 경고 (SLO-Based)
- 이점: **사용자 영향 집중, 경고 노이즈 감소, 비즈니스 우선순위 정렬, 명확한 에러 버짓**.
- 예: **한 시간에 에러 버짓의 30% 소비** → 월 예산 대비 심각 → 즉시 주의 필요 (P0).

## 요약
- 효과적 경고는 **What·Where·Impact·When·Actions**를 담아 구체적이어야 한다.
- **다단계**: Warning → Critical → Escalation → Emergency로 대응 확대.
- **SLO 기반 경고**는 에러 버짓 소비율(예: 1시간에 30%)로 심각도를 판단해 사용자 영향에 집중한다.
