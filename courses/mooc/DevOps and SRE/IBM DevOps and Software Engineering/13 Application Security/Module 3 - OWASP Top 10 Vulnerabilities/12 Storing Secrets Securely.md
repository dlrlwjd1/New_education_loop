# Storing Secrets Securely

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/application-security-for-developers-devops/lecture/KZqcF/storing-secrets-securely)

## 개요
- 비밀번호·인증서·API 암호화 키 같은 민감 정보를 안전하게 저장·관리하는 **시크릿 관리(Secrets Management)** 개념과, HashiCorp의 토큰 기반 시크릿 저장 도구 **Vault**의 제공 형태·이점·4단계 보안 절차·사용 방법을 정리.

## 내용
### 시크릿 관리(Secrets Management)란
- 비밀로 유지되어야 하는 모든 항목을 저장·관리하는 것 — 온프레미스든 클라우드든 코드를 잠재적 공격으로부터 보호하려면 시크릿을 안전하게 지켜야 함.
- 시크릿의 예: 비밀번호, 인증서, API 암호화 키.
- 시크릿 관리 솔루션을 사용해 이런 자산을 저장하고, 애플리케이션과 데이터베이스와 통합 관리 가능.
- 시크릿을 저장할 때 마주치는 과제: 미들웨어 애플리케이션·코드와 상호작용하는 데이터베이스 접근, 분리된 애플리케이션 간 통신을 위한 SOA(서비스 지향 아키텍처) 메시징, 클라우드 기반 애플리케이션이라면 클라우드 서비스, 누가 어떤 리소스에 접근하는지 모니터링·추적하는 감사와 로깅, 그리고 공격자로부터 저장소를 안전하게 지키는 것.

### Vault란
- HashiCorp가 개발한 토큰 기반 시크릿 관리 저장 솔루션.
- Vault에 접근하려면 사용자에게 토큰이 할당되거나 스스로 토큰을 생성 — Vault는 사용자가 Vault 서버와 상호작용할 때 접근과 권한을 제약하는 정책을 제공.

### Vault의 3가지 제공 형태
1. **오픈소스, 자체 관리(self-managed) Vault** — 신규 개발자와 소규모 조직이 다운로드해 테스트하기에 이상적. Vault를 실행·관리하는 법을 배우는 데 도움.
2. **엔터프라이즈 솔루션** — 마찬가지로 자체 관리되며 커스텀 배포에 맞게 커스터마이징 가능.
3. **클라우드 관리(cloud-managed) 솔루션** — HashiCorp가 SaaS(Software-as-a-Service)로 클라우드에서 관리.

### Vault를 시크릿 관리 도구로 사용하는 4가지 이점
1. **키 관리** — 암호화 키와 기타 시크릿 자산의 관리를 중앙화.
2. **EaaS(Encryption-as-a-Service)** — 저장되는 데이터를 암호화해 제공.
3. **데이터베이스 자격 증명 회전(rotation)** — 데이터베이스 자격 증명을 할당·회전시켜 보안을 향상시킴으로써 여러 데이터베이스를 동시에 보호.
4. **개발 시 시크릿 관리** — 온프레미스나 클라우드용 SSL(Secure Sockets Layer) 인증서 같은 시크릿을 개발 중 관리·저장하도록 도움.

### Vault의 4단계 보안 절차
1. **인증(Authentication)** — 사용자는 Vault와 상호작용하기 전에 내부 또는 외부 시스템으로 인증받아야 함 — 저장된 시크릿에 접근하는 보안을 강화. 인증되면 Vault가 토큰을 발급해 세션을 수립하는 데 사용.
2. **검증(Validation)** — 신뢰할 수 있는 제3자가 사용자 자격 증명을 검증하는 단계를 지원.
3. **권한 부여(Authorization)** — 세션을 승인하기 위해 Vault가 보안 정책을 적절한 사용자와 매칭.
4. **Vault 접근(Access)** — 사용자에게 확립·할당된 정책에 따라 시크릿에 대한 접근이 부여됨.

### Vault와 상호작용하는 3가지 방법
- **GUI(Graphical User Interface)** — 웹 기반 GUI로 인증, 언실(unseal), 정책·시크릿 엔진 관리 가능. Vault 서버 설정에서 `ui = true`로 설정하면 GUI가 활성화됨. GUI에 접근하려면 최소 하나의 리스너 주소와 포트가 정의되어 있어야 함 — 예: `localhost:8200`에서 실행 중이면 `https://127.0.0.1:8200/ui`로 접근 가능.
- **CLI(Command Line Interface)** — 로컬 머신에 Vault를 다운로드·설치한 뒤 다음 명령으로 기본 설정으로 개발 모드에서 실행:
  ```bash
  $ vault server –dev &
  ```
  이 명령은 Vault 서버를 백그라운드에서 실행해 Vault 명령을 사용할 수 있게 함. 명령 구조는 Vault 명령 → 옵션 → 경로 → 인자 순.
- **HTTP API** — 전체 Vault 서버는 `/v1/` 접두사를 사용한 HTTP API로 접근 가능. Vault를 조작하려면 클라이언트 토큰이 필요하며, `X-Vault-Token` HTTP 헤더와 Bearer 토큰을 통해 사용자에게 전달되어야 함. 토큰을 받은 뒤, localhost 8200 포트에서 실행 중인 Vault 서버에서 alice의 시크릿을 가져오려면 curl 명령을 실행.

### Python으로 시크릿 쓰기/읽기 예시
- **쓰기**: `secret/myapp` 경로 아래에 키/값 쌍을 씀 — Vault API의 "create or update secret" 함수를 호출하며 `path="myapp"`, `secret={"alice": "mypassword"}`를 전달하고 반환값을 `response` 변수에 저장.
- **읽기**: Vault API의 "read secret version" 함수를 호출하며 `path="myapp"`를 전달해 `read_response`에 저장 — `secret/myapp` 경로 아래 `alice` 키에 대한 값을 요청·출력. 출력 결과: `Value under path "secret/myapp" / key "alice": mypassword`.

## 요약
- 시크릿 관리는 비밀번호·인증서·API 키 같은 민감 정보를 안전하게 저장·관리하는 것이며, HashiCorp Vault는 오픈소스·엔터프라이즈·클라우드 관리형의 3가지 형태로 제공되고 키 관리·EaaS·데이터베이스 자격 증명 회전·개발용 시크릿 관리라는 4가지 이점을 가지며, 인증→검증→권한 부여→접근의 4단계 보안 절차를 거쳐 GUI·CLI·HTTP API로 시크릿을 쓰고 읽을 수 있다.
