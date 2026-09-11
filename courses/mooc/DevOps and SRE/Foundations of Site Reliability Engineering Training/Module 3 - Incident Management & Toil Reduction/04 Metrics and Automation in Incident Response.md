# Metrics and Automation in Incident Response (인시던트 대응의 메트릭과 자동화)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 3: Incident Management & Toil Reduction

## 개요
- 인시던트 대응 효과를 재는 **메트릭(MTTx)**과 **자동화**의 이점·유형을 다룬다.

## 내용

### 인시던트 메트릭 (MTT-)
| 메트릭 | 의미 |
|--------|------|
| **MTTD (Mean Time To Detect)** | 인시던트 시작 ~ 발견까지 평균 시간 |
| **MTTA (Mean Time To Acknowledge)** | 탐지 ~ 대응 시작(확인)까지 평균 시간 |
| **MTTR (Mean Time To Resolve)** | 탐지 ~ 완전 해결까지 평균 시간 |
| **MTBF (Mean Time Between Failures)** | 인시던트 발생 간 평균 시간 |
- 이 메트릭으로 **탐지·대응·해결 프로세스의 개선 영역**을 식별.

### 자동화 (Automation)
- **이점**: 빠른 대응 시간, 일관된 절차 실행, 인간 오류 감소, 운영 부담 감소, 확장 가능한 인시던트 관리.
- **흔한 자동화**: 자동 서비스 재시작, 트래픽 재라우팅, 자원 스케일링, 분석용 데이터 수집, 통지·에스컬레이션.

## 요약
- 인시던트 메트릭 **MTTD·MTTA·MTTR·MTBF**로 대응 효과를 측정한다.
- **자동화**는 빠르고 일관된 대응·인간 오류 감소를 제공하며, 서비스 재시작·트래픽 재라우팅·스케일링·데이터 수집·통지 등에 쓰인다.
