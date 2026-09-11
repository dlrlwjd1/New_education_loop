# Implementing Error Budgets and Building a Learning Culture (에러 버짓 구현과 학습 문화 구축)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 7: Performance Testing & Advanced SRE

## 개요
- **에러 버짓 구현** 단계와, SRE에 필수적인 **학습 문화(learning culture)**의 핵심 요소를 다룬다.

## 내용

### 에러 버짓 구현
1. **SLO 정의** — 사용자 기대 기반의 측정 가능한 목표.
2. **에러 버짓 계산** — 허용 가능한 불안정성 결정 (three nines? four nines?).
3. **소비 추적(monitor consumption)** — 서비스 기간 동안 얼마나 빨리 소진되는지. SLA가 three nines인데 그 이상 다운되면 버짓 소진 → 문제.
4. **정책 수립** — 소진 시 취할 조치를 명확히.
5. **혁신과 안정성 균형** — 남은 버짓으로 개발 속도·위험 감수를 안내. 필요 시 SLA 재검토.

### 학습 문화
- 인시던트와 실험을 좌절이 아닌 **기회로 전환** ("레몬으로 레모네이드 만들기").
- 핵심 요소:
  - **비난 없는 포스트모템(blameless postmortem)** — 개인 실수가 아닌 시스템적 이슈에 집중.
  - **지식 공유** — 통찰을 문서화하고 조직 전체에 널리 공유.
  - **실험(experimentation)** — 카오스 환경으로 통제된 실험 장려.
  - **지속적 개선** — 결과 기반으로 신뢰성 관행을 정기 검토·강화.

## 요약
- 에러 버짓 구현: **SLO 정의 → 버짓 계산 → 소비 추적 → 정책 수립 → 혁신·안정성 균형**.
- 학습 문화 = SRE 필수: **비난 없는 포스트모템·지식 공유·실험(카오스)·지속적 개선**.
