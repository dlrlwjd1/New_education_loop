# Continuous Integration and Continuous Delivery (CI/CD)

## 개요
- 지속적 통합·전달 파이프라인과 OpenShift 기반 DevOps·GitOps를 구현한다.

## 내용
- CI는 작은 변경을 자주 통합하고 build, lint, test, security scan으로 즉시 피드백한다.
- CD는 검증된 동일 artifact를 환경별 설정과 승인 정책으로 승격한다. delivery와 deployment의 자동화 경계를 구분한다.
- GitHub Actions·Tekton 같은 도구에서 최소 권한 secret, dependency cache, 병렬 job과 실패 차단을 구성한다.
- GitOps는 Git의 선언 상태를 기준으로 controller가 cluster를 reconcile하며 drift와 변경 이력을 관리한다.

## 예시
```text
commit -> test -> build image -> scan -> stage deploy -> verify -> production promote
```

## 요약
- 5개 모듈은 CI/CD 입문, CI, CD, OpenShift DevOps·GitOps, 최종 프로젝트다.
