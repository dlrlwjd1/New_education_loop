# Jenkins Security - Access Controls

## 개요
- Jenkins의 인증(Authentication)과 인가(Authorization) 개념, 그리고 5가지 Authorization 전략을 설명.

## 내용
### 인증(Authentication) vs 인가(Authorization)
- **인증** — 사용자명·비밀번호·액세스 키·토큰으로 신원을 확인하는 것
- **인가** — 인증된 사용자가 서버에서 무엇을 할 수 있는지(권한)를 결정하는 것

### 인증 방식
1. **내부(Internal) 사용자 생성** — Manage Jenkins의 User 섹션에서 직접 사용자 생성
2. **LDAP 서버 연동** — 조직의 Active Directory(LDAP)에 그룹·사용자를 두고, Jenkins Security 섹션에 서버 정보를 입력하면 Jenkins가 LDAP에서 사용자 정보·비밀번호를 가져와 인증
3. **외부 인증 토큰/API 키** — 관련 플러그인 설치 후 사용. 예: AWS/GCP 같은 클라우드와 연동할 때 Access Key·Secret Key로 인증

### 인가(Authorization) 옵션 5가지
1. **Anyone can do anything** — 로그인 없이 IP·포트만 알면 누구나 모든 작업 가능. 매우 위험하며 실무에서 사용하지 않음.
2. **Legacy mode** — admin만 전체 권한, 나머지 사용자는 읽기 전용
3. **Logged-in users can do anything** — 로그인한 모든 사용자가 모든 작업 가능
4. **Matrix-based security** — 사용자/그룹별로 세밀한 권한 지정 가능 (예: admin은 전체 권한, Alice는 읽기 전용, Bob은 특정 job의 읽기 권한만)
5. **Project-based Matrix Authorization Strategy** — Matrix(전체 권한) + Project(Job 단위 권한)를 결합. 특정 사용자에게 전체 읽기 권한은 주되, 특정 job에만 추가 권한을 부여하는 등 세밀한 통제 가능.

## 요약
- Jenkins는 인증(신원 확인: 내부 계정/LDAP/API 키)과 인가(권한 결정: Anyone/Legacy/Logged-in/Matrix/Project-based Matrix)를 분리해 관리하며, 실무에서는 Matrix 또는 Project-based Matrix 전략으로 사용자·팀별 세밀한 접근 통제를 구현하는 것이 안전하다.
