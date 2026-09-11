# Learning Objectives (학습 목표)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 4: Reliability Engineering & Deployments

## 개요
- 신뢰성 엔지니어링·자동화·경고·인시던트 대응·포스트모템을 다루는 이 파트(모듈 4~5)의 학습 목표.

## 내용

### 학습 목표
- **신뢰성 엔지니어링(reliability engineering)의 핵심 원칙 정의**, 각 원칙이 사용자 경험에 미치는 영향 설명(이해관계자에게 설계 선택 정당화).
- **Ansible/IaC**로 HTTPS 지원 **Nginx 호스트 구성** → 수동 드리프트(drift) 제거, 반복 설정 가속.
- 기본 **모니터링·경고 스택 배포** + 서비스 SLO에 연결된 **경고 규칙 2개 이상** 작성.
- **다단계 경고·에스컬레이션(multi-level alerting & escalation)** 적용 → 적시에 적임자에게 페이지(page).
- **근본 원인 분석(RCA)** — **5 Whys·피시본(fishbone)·타임라인** 기법으로 간결한 근본 원인 진술 생성.
- 단일 EC2에 **Prometheus + Alertmanager** 스택 구성·검증, **Nginx down 경고** 엔드투엔드 트리거·확인 + **비난 없는 포스트모템 + 시정 조치 2개**.

## 요약
- 이 파트는 **신뢰성 원칙, IaC/Ansible로 Nginx 구성, SLO 연동 경고, 다단계 에스컬레이션, RCA(5 Whys·피시본·타임라인), Prometheus/Alertmanager + 포스트모템**을 다룬다.
