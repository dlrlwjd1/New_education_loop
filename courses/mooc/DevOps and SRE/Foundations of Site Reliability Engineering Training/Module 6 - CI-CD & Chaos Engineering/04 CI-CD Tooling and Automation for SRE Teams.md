# CI/CD Tooling and Automation for SRE Teams (SRE 팀의 CI/CD 도구·자동화)

> 강좌: Foundations of Site Reliability Engineering Training (Simplilearn) · 모듈 6: CI/CD & Chaos Engineering

## 개요
- **GitOps**, **Jenkins**, **GitHub Actions**, 그리고 **롤백·안전 점검**을 SRE 관점에서 다룬다.

## 내용

### GitOps
- **Git을 단일 진실 공급원(single source of truth)**으로 사용 — 코드·빌드·인프라 정보가 모두 Git에 존재.
- 핵심 특성:
  - **버전 관리** — 코드와 인프라 모두.
  - **자동화 트리거** — Git push 시 pull→build→test→deploy 자동 실행.
  - **모든 변경 로깅** — 감사 추적(auditability) 내장.
- 이점: 프로덕션 변경의 인적 오류 최소화, 커밋 되돌리기로 **빠른 롤백**.
- 예: Git에서 YAML 설정 변경 → 병합 → **Argo CD가 자동 배포**, 적용 전 통합·스모크 테스트 실행.

### Jenkins
- 오픈소스 자동화 서버 — 파이프라인으로 빌드·테스트·배포. 엔터프라이즈에 깊이 자리 잡음, **풍부한 플러그인 생태계**(Kubernetes·클라우드·보안 도구 연동).
- 이점: 반복 작업 자동화, **표준화된** 빌드·배포 프로세스(일회성/독점 방식 지양), **병렬 실행**으로 전달 가속.

### GitHub Actions
- GitHub 내장 CI/CD 서비스 — **YAML로 파이프라인** 작성, 별도 서버 불필요.
- PR·이슈·패키지와 매끄러운 통합.
- 이점: PR에 **즉각적 피드백**, 클라우드 API 연동(Azure/GCP/AWS/IBM), 실패 시 **롤백 워크플로**.

### 롤백·안전 점검
- **롤백(rollback)** — 시스템을 이전 상태로 되돌림. 배포 실패 시 몇 시간 고치기보다 우선 롤백해 복구 후 원인 분석.
- **안전 점검(safety checks)** — 결함 변경이 사용자에게 영향 주지 않도록 보호. 예: **자동 카나리 분석**, **수동 승인 게이트**, **에러 버짓 점검 강제**.

## 요약
- **GitOps**: Git = 단일 진실 공급원, push가 자동화 트리거, 감사 추적 내장.
- **Jenkins**(플러그인·표준화·병렬), **GitHub Actions**(YAML·PR 피드백·클라우드 연동).
- **롤백**으로 빠른 복구, **안전 점검**(카나리·승인 게이트·에러 버짓)으로 결함 차단.
