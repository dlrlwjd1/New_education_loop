# Managing Alert Fatigue: Actionable Alerts and Prioritization Framework (경고 피로 관리)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 5: Alerting, Automation & RCA

## 개요
- **경고 피로(alert fatigue)** 관리, **실행 가능/불가능 경고 구분**, **우선순위 프레임워크(P0~P4)**를 다룬다.

## 내용

### 경고 피로의 결과
- 같은 경고 반복 → 둔감화(desensitized) → 치명적 경고 누락. 결과: **치명적 경고 누락, 대응 지연, 스트레스·번아웃, 시스템 신뢰성 저하**.

### 회피 방법
- **심각도 라벨(severity labels)** — Critical/Informational/Non-critical로 우선순위.
- **적절한 임계값(thresholds)** — 오탐(false positive) 감소.
- **관련 경고 그룹화** — 적절한 그룹·담당자에게.
- **정기 검토** — 효과성·발송 대상·빈도 지속 검토.

### 실행 가능 vs 불가능 경고
| | 실행 가능(Actionable) | 실행 불가능(Non-actionable) |
|---|---|---|
| 특성 | 인간 개입 필요, 사용자 영향, 명확한 조치 단계 | 자가 치유(self-healing, 런북), 즉각 사용자 영향 없음 |
| 예 | 결제 서비스 다운 → 구매 불가 (즉시 수정) | CPU 10초간 85% 스파이크 후 정상 복귀 (반응 불필요, 관찰만) |

### 경고 우선순위 프레임워크
| 우선순위 | 수준 | 대응 |
|----------|------|------|
| **P0** | Critical | 모든 것 중단, 심각 대응 |
| **P1** | High | 신속 수정 |
| **P2** | Medium | 수정 필요하나 비치명 |
| **P3** | Low | 최소 영향, 비근무 시간·며칠 후 처리 |
| **P4** | Informational | 사용자 영향 없음, 향후 개선 검토 |
- 많은 기업이 **P1(stop the presses)·P2** 중심으로 운영.

## 요약
- 경고 피로는 치명적 경고 누락·번아웃을 낳으므로 **심각도 라벨·임계값·그룹화·정기 검토**로 관리한다.
- **실행 가능**(즉시 조치, 예: 결제 다운) vs **실행 불가능**(자가 치유, 예: 순간 CPU 스파이크)을 구분한다.
- **P0(치명)~P4(정보)** 우선순위 프레임워크로 대응 수준을 정한다.
