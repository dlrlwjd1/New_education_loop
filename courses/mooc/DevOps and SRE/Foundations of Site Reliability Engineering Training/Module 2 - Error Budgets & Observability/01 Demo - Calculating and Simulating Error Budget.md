# Demo: Calculating and Simulating Error Budget (데모 — 에러 버짓 계산·시뮬레이션)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 2: Error Budgets & Observability

## 개요
- 에러 버짓 메트릭으로 **릴리스 결정(feature release vs 신뢰성 개선)**을 계산·시뮬레이션하는 셸 스크립트 데모.
- 도구: EC2 인스턴스의 Cloud Shell.

## 내용 · 예시 (절차)

### 1. 환경 설정
```bash
mkdir -p SRE-Foundations/lab2-error-budget
cd SRE-Foundations/lab2-error-budget
```

### 2. 에러 버짓 계산기 스크립트 작성
```bash
sudo nano error_budget.sh
# 워크북의 셸 스크립트 내용 붙여넣기 → Ctrl+O, Enter, Ctrl+X
ls
```

### 3. 실행 권한 부여·실행
```bash
./error_budget.sh          # Permission denied 나면:
sudo chmod +x error_budget.sh   # 실행 권한 부여
./error_budget.sh          # 실행
# "Error Budget Calculator - Enter your target SLO percentage" → 99.9 입력
#   → Error Budget 0.1%, Allowed downtime 43분(30일)
#   → "Sufficient error budget, new release can be considered"
```
> 강사 팁: 워크북에서 복사 시 스크립트 끝의 `fi`가 대문자 `Fi`로 들어가 **문법 오류** 발생 → 소문자 `fi`로 수정해야 정상 실행.

### 4. 릴리스 결정 문서 작성
```bash
sudo nano release-decision.txt
# 워크북의 릴리스 결정 내용 붙여넣기 → Ctrl+O, Enter, Ctrl+X
ls                          # error_budget.sh + release-decision.txt
cat release-decision.txt    # 내용 확인
```

## 요약
- 셸 스크립트로 **SLO 입력 → 에러 버짓·허용 다운타임 계산 → 릴리스 가능 여부 판단**을 시뮬레이션.
- 예: SLO 99.9% → 버짓 0.1%, 43분/월 → 충분하면 릴리스 고려 가능.
- **release-decision.txt**로 릴리스 메트릭 기반 팀 의사결정을 문서화한다. (주의: 복사 시 `Fi`→`fi` 문법 오류)
