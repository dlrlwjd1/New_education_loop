# Jenkins Security - Security Management

## 개요
- Jenkins가 다루는 보안 위험과 이를 관리하는 보안 시스템(Credentials, User, RBAC)을 설명.

## 내용
### 왜 Jenkins 보안이 중요한가
- Jenkins는 Git, Maven, Selenium, Terraform, Ansible, Prometheus 등 여러 도구를 통합하는 **중앙 허브**이므로, 데이터 보호와 올바른 접근·권한 부여가 매우 중요하다.

### 보안이 없을 때의 주요 위험
1. **플러그인/스크립트 위험** — 다운로드한 플러그인이나 서드파티 스크립트가 안전하지 않아 문제를 유발할 수 있음
2. **무단 접근(Unauthorized Access)** — 역할 기반 접근 통제가 없으면 아무나 로그인해 프로젝트/작업을 삭제할 수 있음
3. **민감 정보 노출** — 자격 증명(비밀번호, API 키, 시크릿)을 평문으로 저장하면 로그인한 누구나 볼 수 있어 위험

### Jenkins의 보안 관리 체계
- **Manage Jenkins → Security** 섹션에서 접근 권한 정의 (읽기 전용 접근 등 설정 가능)
- 사용자 정보는 기본적으로 `/var/lib/jenkins` 디렉터리의 내부 데이터베이스에 저장
- **Credentials Store** — API 키, 비밀번호, SSH 키 등 민감한 정보를 안전하게 저장. 전역(global) 자격 증명은 Jenkins 전체 페이지에서 사용 가능
- **User 관리** — 관리자 외에도 새 사용자를 생성해 읽기/읽기-쓰기 권한 부여 가능
- **Project-based Security** — 특정 job에만 접근 권한을 제한
- **Role-based Access Control(RBAC)** — Role-based Authorization Strategy 플러그인을 설치하면 사용자별로 역할과 권한을 세밀하게 부여 가능

## 요약
- Jenkins는 여러 도구를 통합하는 중앙 허브인 만큼 보안이 핵심이며, Credentials Store로 민감 정보를 안전하게 관리하고 User/Project-based Security와 RBAC 플러그인으로 접근 권한을 세밀하게 통제할 수 있다.
