# Intro to OWASP (Top 10) Sec Vulnerabilities

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/application-security-for-developers-devops/lecture/6LMIb/intro-to-owasp-top-10-sec-vulnerabilities)

## 개요
- OWASP(Open Web Application Security Project)와 매년 갱신되는 **OWASP Top 10** 리스트를 소개하고, 2021년판 10대 취약점 카테고리 전체 개요와 이 리스트가 만들어지는 5단계 과정을 설명.

## 내용
### OWASP란
- Open Web Application Security Project — 2003년에 설립되어 소프트웨어 보안에 초점을 맞추는 재단.
- OWASP는 **OWASP Top 10**으로 보안 업계를 지원 — 현재의 소프트웨어 보안 취약점 우려 사항을 식별하는 리포트. OWASP 핵심 팀, 보안 분석가, 보안 조직, 다른 보안 전문가들의 합의를 대표.
- OWASP Top 10은 웹 애플리케이션 보안에 대한 사실상(de facto)의 표준 점검 목록으로 전 세계적으로 사용됨. 매년 바뀌며, 10개 카테고리 각각은 CWE(Common Weakness Enumeration) 매핑, 발생률, 조직 전반의 테스트 커버리지 같은 데이터 요소를 포함.
- OWASP는 개발자들이 자신의 작업에서 목격한 것을 공유하도록 장려 — OWASP 웹사이트에서 데이터를 제출하고 리스트를 위한 콘텐츠를 만들 수 있음. OWASP Top 10을 사용해 위험을 식별하고, 조직의 프로세스를 개선하고, 코드를 안전하게 지킬 수 있음.

### 현재(2021년) OWASP Top 10 보안 취약점
1. **Broken Access Control(취약한 접근 제어)** — 정보 노출과 데이터 무결성을 위태롭게 할 수 있는 실패.
2. **Cryptographic Failures(암호화 실패)** — 데이터 노출과 관련된 취약점.
3. **Injection(인젝션)** — 적대적 데이터 사용, 공격, 안전하지 않은 쿼리를 포함.
4. **Insecure Design(안전하지 않은 설계)** — 통제 설계의 약점과 결함을 다룸.
5. **Security Misconfiguration(보안 설정 오류)** — 잘못 활성화되었거나 다른 설정 이슈가 있는 기능과 관련.
6. **Vulnerable and Outdated Components(취약하고 오래된 구성 요소)** — 버전 관리와 다른 호환성 이슈를 포함하는 실패.
7. **Identification and Authentication Failures(식별과 인증 실패)** — 비밀번호 이슈, 크리덴셜 스터핑(credential stuffing) 같은 자동화된 공격, 세션 식별자 이슈를 다룸.
8. **Software and Data Integrity Failures(소프트웨어와 데이터 무결성 실패)** — 종종 신뢰할 수 없는 소스로부터 발생하는 무결성 위반을 포함.
9. **Security Logging and Monitoring Failures(보안 로깅과 모니터링 실패)** — 침해 탐지와 대응을 다룸.
10. **Server-Side Request Forgery(서버 사이드 요청 위조)** — URL 검증 실패로 이어지는 취약점.
- 각 카테고리별로 어떻게 식별·완화할지에 대해 OWASP Top 10을 참고 가능.

### OWASP Top 10 개발 과정 — 5단계
1. **일정 계획과 데이터 요청 공고** — OWASP 핵심 팀이 일정을 계획하고 데이터 제출 요청을 발표.
2. **설문 내용 결정과 업계 참여 요청** — 설문 내용을 정하고 업계 참여를 요청.
3. **데이터 수집·정규화·분석** — 수집한 데이터를 정규화하고 분석.
4. **카테고리 결정과 초안 공개** — 데이터에서 8개 카테고리, 설문에서 2개 카테고리를 결정. 그런 다음 OWASP가 리스트의 초안 버전을 공개 리뷰용으로 공개해, 최종 결정에 반영될 이슈를 제기받음.
5. **합의 도달과 발표** — 합의에 도달한 뒤 OWASP 핵심 팀이 최신 OWASP Top 10을 발표.

## 요약
- OWASP는 2003년 설립된 소프트웨어 보안 재단으로, 매년 업계 합의를 통해 갱신되는 OWASP Top 10 리스트를 통해 취약한 접근 제어·암호화 실패·인젝션·안전하지 않은 설계·보안 설정 오류·취약한 구성 요소·인증 실패·무결성 실패·로깅/모니터링 실패·서버 사이드 요청 위조라는 10대 보안 취약점을 식별하며, 이 리스트는 일정 계획→업계 설문→데이터 분석→초안 공개 리뷰→합의 도달이라는 5단계를 거쳐 만들어진다.
