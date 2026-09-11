# SRE Reliability (SRE 신뢰성)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- **SRE 신뢰성(reliability)**의 정의, 신뢰성 사이클, 그리고 신뢰성과 혁신의 균형을 다룬다.

## 내용

### SRE 신뢰성이란
- 시스템·엔터프라이즈·애플리케이션이 **시간에 걸쳐 일관되고 올바르게 수행**되는 것.
- SRE의 목표: **사용자 경험을 신뢰할 수 있고 중단 없게(dependable and uninterrupted)** 유지 (20년 전과 달리 오늘날 서비스가 항상 가용한 이유).

### SRE 신뢰성 사이클
1. **신뢰성을 위한 설계(design for reliability)** — 크래시 시 즉시 복구, 회복력·내결함성(fault tolerance) 내장.
2. **운영 자동화(automate operations)** — 인간 개입·복잡성 제거.
3. **모니터링·경고** — 모든 것을 로그·관찰해 문제 시 경고.
4. **인시던트 대응(respond to incidents)** — 적임 팀이 효과적으로 대응.
5. **학습(learn)** — 과거에서 배우고 미래를 개선 (문제는 결국 발생하므로 완화 + 학습).

### 신뢰성 vs 혁신의 균형
- **신뢰성은 현재 환경을 유지(maintain)**, **혁신은 미래 역량을 개발(develop)**.
- 한쪽에 치우치면 균형이 깨짐 → 혁신 지연 또는 불안정한 시스템.
- 이 균형을 이해·관리하기 위해 **에러 버짓(error budget)**을 도입한다.

## 요약
- **SRE 신뢰성**은 시스템이 시간에 걸쳐 일관·올바르게 수행되어 **신뢰할 수 있고 중단 없는 사용자 경험**을 보장하는 것이다.
- 사이클: **설계 → 자동화 → 모니터링/경고 → 인시던트 대응 → 학습**.
- **신뢰성(유지)과 혁신(개발)의 균형**을 에러 버짓으로 관리한다.
