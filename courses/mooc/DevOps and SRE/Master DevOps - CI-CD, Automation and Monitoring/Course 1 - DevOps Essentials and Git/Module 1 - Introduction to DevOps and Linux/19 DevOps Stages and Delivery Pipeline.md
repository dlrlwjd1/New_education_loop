# DevOps Stages and Delivery Pipeline

## 개요
- DevOps 파이프라인에 보안을 통합하는 DevSecOps의 6가지 베스트 프랙티스를 다루는 리딩.

## 내용
1. **"Shift Left" 보안 접근** — 개발 사이클 끝이 아니라 초반부터 보안을 통합해 취약점을 더 저렴하게 조기에 발견.
2. **견고한 접근 제어(Access Control)** — 최소 권한 원칙(Principle of Least Privilege), 역할 기반 접근 제어(RBAC), 다중 인증(MFA)으로 자격 증명 탈취 시에도 무단 접근을 방지.
3. **비밀 정보 관리(Secrets Management)** — API 키·비밀번호를 코드에 하드코딩하지 않고 HashiCorp Vault, AWS Secrets Manager, Kubernetes Secrets 같은 전용 도구로 관리.
4. **자동화된 보안 테스트를 CI/CD에 통합**
   - SAST(Static Application Security Testing) — 실행 없이 소스 코드의 보안 취약점 분석
   - SCA(Software Composition Analysis) — 서드파티·오픈소스 컴포넌트의 취약점 식별
   - Secrets Detection — 코드에 노출된 비밀번호/API 키 스캔
   - CI/CD 파이프라인 보안 도구 — 무단 코드 변경, 공급망 공격 등으로부터 파이프라인 보호
5. **정기적인 보안 감사·컴플라이언스 점검** — ISO/IEC 27001, GDPR 등 규정 준수 여부 확인
6. **보안 인식 문화 조성** — 보안은 전담팀만의 책임이 아니라 개발자부터 운영까지 전원의 책임이라는 문화 정착, 지속적 교육과 안전한 코딩 관행 장려

## 요약
- DevSecOps는 조기 보안 통합, 접근 제어, 비밀 관리, 자동화된 보안 테스트, 정기 감사, 보안 문화라는 여러 층위를 결합해 DevOps의 속도를 해치지 않으면서도 보안 태세를 강화한다.
