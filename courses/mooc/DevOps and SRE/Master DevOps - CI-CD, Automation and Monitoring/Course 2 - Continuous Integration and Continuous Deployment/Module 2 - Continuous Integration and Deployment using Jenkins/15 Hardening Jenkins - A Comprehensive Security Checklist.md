# Hardening Jenkins: A Comprehensive Security Checklist

## 개요
- Jenkins CI/CD 환경을 강화하기 위한 10가지 보안 체크리스트.

## 내용
1. **Jenkins·플러그인 최신 상태 유지** — Jenkins Core와 플러그인을 정기 업데이트, 사용하지 않는 플러그인은 제거해 공격 표면 최소화
2. **강력한 인증 메커니즘** — LDAP/Active Directory/SSO 연동, MFA(다중 인증) 추가, 익명 사용자 접근 비활성화
3. **세밀한 인가(Authorization) 통제** — Matrix-based Security, Role Strategy Plugin, Project-based Authorization으로 최소 권한 원칙 적용
4. **Jenkins Agent와 통신 보안** — SSH 키 기반 암호화 통신, Agent 권한 최소화, 컨테이너 등으로 빌드 격리
5. **CSRF 방어** — Configure Global Security에서 CSRF 보호(crumb issuer) 활성화, Markup Formatter를 "Safe HTML"로 설정해 XSS 방지
6. **자격 증명(Credentials) 안전 관리** — Credentials Plugin으로 저장, 빌드 스크립트/Jenkinsfile에 시크릿 하드코딩 금지, 역할·권한에 따라 접근 제한
7. **호스트 OS 강화** — OS·패키지 최신 업데이트, 방화벽으로 포트 제한, 불필요한 서비스 비활성화, 침입 탐지 시스템(IDS) 도입
8. **활동 모니터링·감사** — Audit Trail Plugin으로 사용자 활동 기록, Job Configuration History Plugin으로 설정 변경 추적, 정기적인 로그 검토
9. **HTTPS로 보안 강화** — SSL 인증서 설정, HTTP를 HTTPS로 리다이렉트
10. **정기 백업** — Jenkins 설정·Job·플러그인 자동 백업, 안전한(오프사이트/클라우드) 저장소에 보관, 복원 테스트 정기 실시

## 요약
- Jenkins 보안 강화는 업데이트·인증·인가·Agent 보안·CSRF 방어·자격 증명 관리·OS 강화·모니터링·HTTPS·백업이라는 10가지 축을 모두 갖춰야 완성되며, 하나라도 소홀히 하면 CI/CD 파이프라인 전체가 공격 지점이 될 수 있다.
