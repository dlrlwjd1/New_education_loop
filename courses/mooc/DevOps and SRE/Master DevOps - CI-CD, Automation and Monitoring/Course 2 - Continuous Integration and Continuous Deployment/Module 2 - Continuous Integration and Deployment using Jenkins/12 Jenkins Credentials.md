# Jenkins Credentials

## 개요
- Jenkins Credential의 종류, 범위(scope), 이점, 보안 고려사항을 설명.

## 내용
### Credential이란
- Jenkins가 자기 자신 또는 서드파티 도구(AWS, DB, 클라우드 서버, GitHub 등)에 연결하기 위한 다양한 접근 정보 — 사용자명, 비밀번호, 액세스 키, 토큰, 시크릿 텍스트 등.
- **Manage Jenkins → Credentials**(Credential Store)에서 생성·관리.

### Credential 종류
- **Secret Text** — GitHub Personal Access Token, Docker Hub token, Slack token 등 API 토큰 저장
- **SSH Username with Private Key** — EC2/VM 접속용 SSH 개인키+사용자명
- **Username with Password** — 서드파티 도구 연결용 사용자명+비밀번호
- **Certificate** — OpenSSL/PKCS 인증서가 필요한 클러스터 연결용
- **Secret File** — 사용자명·비밀번호가 담긴 시크릿 파일 업로드(주로 DB 연결용)
- **Docker Host Certificate Authentication** — Docker Trusted Registry 등 Docker 레지스트리 연결 전용

### Credential Scope (가시성 범위)
- **Global** — Jenkins의 모든 페이지(Job, Configure, Tools 등)에서 접근 가능
- **System** — 해당 credential과 관련된 설정·플러그인 페이지에서만 사용 가능(예: Docker 관련 페이지에서만)
- **Folder** — 특정 폴더에 속한 Job들에서만 사용 가능
- **Job** — 특정 단일 Job에서만 사용 가능 (Folder/Job scope는 별도 플러그인 설치 필요, Global/System은 기본 제공)

### 이점
- Jenkins 서버 보안 강화
- 여러 페이지·애플리케이션에서 자격 증명 재사용 가능
- 자동화 지원, 감사(auditing) 용이, 접근 통제 강화

### 보안 고려사항
1. Credential Store는 자격 증명을 반드시 **암호화**해 저장 (평문 저장 금지)
2. AWS Secrets Manager, HashiCorp Vault 같은 **Jenkins 외부** 도구 활용 가능
3. 자격 증명에 대한 접근을 제한 — 모두가 접근할 수 있게 하면 안 됨
4. **정기적인 로테이션**(예: 30일 또는 90일마다 재생성) 실시

## 요약
- Jenkins Credential은 Secret Text/SSH Key/Username-Password/Certificate/Secret File 등 다양한 형태로 저장되며, Global/System/Folder/Job 범위로 접근을 제한하고, 암호화·외부 시크릿 관리 도구·정기 로테이션을 통해 안전하게 관리해야 한다.
