# Overview of Alert Fatigue (경고 피로 개요)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 2: Error Budgets & Observability

## 개요
- **경고 피로(alert fatigue)** — 시끄럽고 과도한 경고로 인한 신뢰성 위험 — 과 그 원인·해결책을 다룬다.

## 내용

### 경고 피로란
- 노이즈가 많거나 과도한 경고(이메일·문자로 "문제 있음"을 반복)로 생기는 신뢰성 위험.
- SRE는 경고를 **실행 가능(actionable)**하게 하고 **SLO에 연결**하며, **시스템 신뢰성 + 엔지니어의 웰빙**을 함께 보호하도록 설계해 경고 피로를 줄인다.

### 원인과 해결책
| 원인 | 해결책 |
|------|--------|
| **경고 과다(too many alerts)** | **경고 통합(alert consolidation)** — 같은 경고 15개 대신 1개로, 중복 발송 억제 |
| **시끄러운 임계값(noisy thresholds)** | **임계값 튜닝(tuning)** |
| **실행 불가능한 경고(non-actionable)** | **실행 가능한 경고만** — 나머지는 로그만 남기고 경고 미발송 |
| **중복 알림(duplicate notifications)** | **심각도 기반 라우팅(severity-based routing)** — 예: 경고·경고성만 발송, 정보성은 제외 |

## 요약
- **경고 피로**는 과도·노이즈 경고로 인한 신뢰성 위험이다.
- SRE는 경고를 **실행 가능·SLO 연결**로 설계한다.
- 해결책: **경고 통합, 임계값 튜닝, 실행 가능한 경고만, 심각도 기반 라우팅**.
