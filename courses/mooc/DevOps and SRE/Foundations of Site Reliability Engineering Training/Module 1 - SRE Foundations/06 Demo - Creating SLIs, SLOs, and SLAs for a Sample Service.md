# Demo: Creating SLIs, SLOs, and SLAs for a Sample Service (데모 — 샘플 서비스의 SLI·SLO·SLA 작성)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 1: SRE Foundations

## 개요
- 샘플 **체크아웃(checkout) 서비스**의 SLI·SLO·SLA 문서를 **마크다운 파일**로 작성하는 데모.
- 서비스 메트릭 정의, 신뢰성 목표 설정, 사용자 대면 계약(user-facing agreement) 초안 작성.
- 도구: **AWS EC2 인스턴스의 Cloud Shell(Linux 터미널)** (데모 1의 결과물 사용).

## 내용 · 예시 (절차)

### 1. 환경 설정
```bash
# EC2 인스턴스(My Server) → Connect → Cloud Shell
mkdir SRE-Foundations       # 파일을 담을 디렉터리
ls
cd SRE-Foundations
```

### 2. 체크아웃 서비스 마크다운 작성
```bash
sudo nano checkout-service-sli-slo-sla.md
# 워크북 템플릿 내용을 붙여넣기 → Ctrl+O(저장), Enter, Ctrl+X(종료)
ls
cat checkout-service-sli-slo-sla.md   # 내용 확인
```

### 3. 로그인 서비스 마크다운 작성
```bash
sudo nano login-service-sli-slo-sla.md
# 워크북의 로그인 서비스 데이터 붙여넣기 → Ctrl+O, Enter, Ctrl+X
ls                                    # 두 파일 확인
cat login-service-sli-slo-sla.md      # 내용 확인
```

## 요약
- EC2 Cloud Shell에서 **SLI·SLO·SLA 문서를 마크다운으로 작성** (checkout·login 서비스).
- 절차: **디렉터리 생성 → nano로 파일 작성(템플릿 붙여넣기) → cat으로 검증**.
- 서비스별로 **메트릭·신뢰성 목표·사용자 대면 계약**을 문서화하는 실습이다.
