# SRE Automation: Pipelines, Monitoring, Scaling, and Incident Response (SRE 자동화 상세)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 4: Reliability Engineering & Deployments

## 개요
- SRE 자동화의 네 영역 — **CI/CD 파이프라인, 모니터링/경고, 스케일링, 인시던트 대응** — 과 셀프서비스 자동화를 상세히 다룬다.

## 내용

### CI/CD 파이프라인 자동화
- 저장소(GitHub 등)에 코드 push → **트리거** → 빌드 → 단위 테스트 → dev/stage/prod 전반 **통합 테스트**(QA·SQA·unit) → 스테이징/프로덕션 배포. 템플릿 기반이면 환경이 동일.

### 알림(Alerting) 자동화 핵심 구성
- **메트릭 자동 수집**, **경고 임계값 정의**(예: CPU 80% 초과 시 경고), **경고 라우팅**(담당자에게), **인시던트 자동 생성**.
- 도구: **Prometheus**(메트릭), **Grafana**(시각화), **Alertmanager**(경고 라우팅), **PagerDuty**(온콜 관리).

### 스케일링 자동화
- **수평 스케일(horizontal)** — 인스턴스 추가.
- **수직 스케일(vertical)** — RAM·CPU·노드 증설.
- **예측 스케일(predictive)** — 패턴 기반 (예: 5시 타임시트 제출 시점에 미리 스케일업).
- 이점: **비용 최적화·부하 성능 향상·수동 개입 감소·자원 활용 극대화(right-sizing)**.

### 인시던트 대응 자동화 (핵심 단계)
- **진단(diagnosis)** — 정상 복귀 확인 테스트 자동화, **런북(runbook)**으로 사전 정의 복구 절차 실행.
- **탐지(detection)** / **완화(remediation)** — 진단 도구·로그 수집 자동화.
- **검증(verification)** — 모니터링으로 이상 탐지·경고 트리거.
- → **진단·탐지·완화·검증**이 인시던트 대응 자동화의 뼈대.

### 셀프서비스 자동화
- **환경 프로비저닝**(Terraform·ARM·CloudFormation), **DB 작업**(대량 데이터·인덱스), **접근 관리**(최소 권한), **배포 트리거**(gate check 후 stage/prod/UAT), **로그 접근·분석**.
- 이점: **SRE Toil 감소·개발자 워크플로 가속·운영 표준화·문서화 개선**.

## 요약
- **CI/CD**(push→빌드→테스트→배포), **알림 자동화**(수집·임계값·라우팅, Prometheus/Grafana/Alertmanager/PagerDuty).
- **스케일링**: 수평·수직·예측. **인시던트 대응**: 진단·탐지·완화·검증(런북).
- **셀프서비스 자동화**로 Toil 감소·워크플로 가속·표준화한다.
