# Operationalizing CI/CD for SRE Teams (SRE 팀의 CI/CD 운영)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- SRE 팀을 위한 CI/CD **모범 사례·메트릭·구현 과제**와 실제 전환 사례를 다룬다.

## 내용

### 모범 사례
- **모든 것을 자동화(automate everything)**.
- **한 번 빌드, 여러 곳에 배포(build once, deploy many)** — 동일 설정으로 여러 환경에 배포.
- **파이프라인 상태 모니터링**.
- **지속적 테스트(continuous testing)** — 스크립트로 자동 실행.
- **피처 플래그(feature flags)** 도입.

### CI/CD 메트릭
- **KPI**: 배포 빈도(deployment frequency), 변경 리드 타임(lead time for changes), **변경 실패율(change failure rate)**, MTTR, 테스트 커버리지.
- **신뢰성 메트릭**: 빌드 성공률, 배포 성공률, 롤백 빈도, 이슈 탐지 시간, **에러 버짓 소비**.

### 구현 과제
- **레거시 시스템** — 잦은 배포용으로 설계되지 않음, 강한 결합·의존성, 자동 테스트 어려움.
- **문화적 저항(cultural resistance)** — "늘 이렇게 해왔다"는 변화 거부 → 조직 buy-in 필요.
- **파이프라인 복잡성** — 너무 많거나 중첩된 파이프라인은 유지·모니터링 곤란 → 얕게 유지.
- **테스트 환경 충실도(fidelity)** — 테스트 환경이 프로덕션과 정확히 일치해야 서프라이즈·디버깅 문제 방지.

### 사례 — CI/CD 전환
- 과제: 느린 릴리스 주기, 수동 배포 오류, 잦은 프로덕션 이슈, 긴 복구 시간, 개발·운영 사일로.
- 접근: CI/CD 도입, **월 1회 릴리스 → 일일 배포**, 개발·운영 협업으로 사일로 해소.
- 결과: **프로덕션 이슈 80% 감소, MTTR 24시간 → 1시간 미만, 일일 배포·자동 릴리스 파이프라인, 협업·생산성 향상**.

## 요약
- 모범 사례: **전면 자동화·build once/deploy many·파이프라인 모니터링·지속적 테스트·피처 플래그**.
- 메트릭: KPI(배포 빈도·변경 실패율·MTTR 등) + 신뢰성(빌드/배포 성공률·에러 버짓).
- 과제: **레거시·문화적 저항·파이프라인 복잡성·테스트 환경 충실도**.
