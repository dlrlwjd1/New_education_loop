# Core Concepts in SRE (SRE 핵심 개념)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 1: SRE Foundations

## 개요
- SRE의 측정 가능한 표준인 **SLI·SLO·SLA**의 정의·특성·예시, 그리고 **복합 SLO(composite SLO)**를 다룬다.

## 내용

### 세 가지 표준
| 용어 | 정의 |
|------|------|
| **SLI (Service Level Indicator)** | 서비스 성능/신뢰성의 특정 측면에 대한 **정량적 측정** (사용자 관점) |
| **SLO (Service Level Objective)** | SLI의 **목표 값/범위** (특정 기간, 허용 가능한 성능 수준) |
| **SLA (Service Level Agreement)** | 제공자-고객 간 **계약** (기대 신뢰성·성능, 법적·재무적 결과 수반) |

### SLI (지표)
- 특성: **사용자 중심**(사용자에 직접 영향), **SLO의 기초**(목표 정의용 데이터).
- 흔한 SLI:
  - **지연(Latency)** — 응답 시간.
  - **가동시간(Uptime)** — 가용성 (three nines/five nines).
  - **오류율(Error rates)** — 500 등 내부 서버 오류 비율.
  - **처리량(Throughput)** — 시간당 성공 요청 수 (→ 확장).
  - **포화도(Saturation)** — 자원 사용률(CPU 등, ROI 관점).

### SLO (목표)
- 특성: **SLI의 목표**(구체적·측정 가능), **내부 목표**(개발·운영용), **균형 조정**(배포 속도 vs 가동시간).
- 예시:
  - 월간 **99.9%(three nines)** 가동시간.
  - API 응답 시간 **95% 요청이 250ms 미만**.
  - **오류율 0.1% 미만** (500/400).

### SLA (계약)
- 특성: **공식 계약**, **외부 약속(external commitments)**, **넓은 범위**(미충족 지원 시간 포함). 미충족 시 법적·재무적 결과.
- **SLI vs SLO vs SLA 예시**:
  | 메트릭 | SLI(실제) | SLO(내부 목표) | SLA(계약) |
  |--------|-----------|----------------|-----------|
  | 가동시간 | 99.95% | 99.9% | 99% |
  | 지연 | <200ms | <250ms | <300ms |
- **SLA는 보통 내부 SLO보다 덜 엄격** → 여유(leeway) 확보.

### 복합 SLO (Composite SLO)
- 여러 SLI를 결합해 더 종합적인 신뢰성 척도 생성 → 서비스 건강의 총체적 뷰.
- 단계: ① 개별 SLI 정의(지연·신뢰성·가용성·오류율) → ② 임계값 설정 → ③ **가중치 공식으로 결합** → ④ 개별 메트릭과 함께 총체적 모니터링.

## 요약
- SRE는 **SLI(측정)·SLO(내부 목표)·SLA(외부 계약)**로 신뢰성을 대규모로 관리한다.
- 흔한 SLI: **지연·가동시간·오류율·처리량·포화도**.
- SLA는 SLO보다 덜 엄격하며(예: uptime SLI 99.95% > SLO 99.9% > SLA 99%), **복합 SLO**로 여러 SLI를 가중 결합해 종합 평가한다.
