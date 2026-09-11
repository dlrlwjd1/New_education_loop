# Docker Compose Advanced Features

## 개요
- Docker Compose의 고급 기능 — 커스텀 네트워크, YAML 앵커·확장(`x-`), 서비스 확장(`extends`), 변수 보간(Variable Interpolation) — 을 정리.

## 내용
### 커스텀 네트워크(Custom Networks)
- **기본 동작** — Compose는 자동으로 `<프로젝트명>_default`라는 Bridge 네트워크를 만들어 컨테이너 이름으로 서비스 디스커버리를 지원.
- **커스텀 네트워크** — `networks:` 키 아래 이름 붙인 네트워크를 선언하고 `bridge`, `overlay` 드라이버나 외부(external) 네트워크를 지정, 정적 IP도 할당 가능.
```yaml
networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge

services:
  api:
    networks: [frontend, backend]
  web:
    networks: [frontend]
  db:
    networks: [backend]
```
  - 이 구성은 `web ↔ api ↔ db`는 통신 가능하지만 `web ↔ db`는 직접 통신할 수 없게 강제해 격리와 명확성을 높임.
- **기본 네트워크 수정** — `networks.default`에 드라이버·옵션을 지정해 컨테이너 간 통신(ICC)을 제한하는 등 커스터마이징 가능.
- **외부(External) 네트워크** — 다른 Compose 프로젝트와 공유되는 기존 네트워크를 그대로 사용(`external: true`) — 네트워크 재생성을 피하고 레거시 스택과 통합 가능.

### YAML 확장(Anchors & Aliases, `x-` 접두사)
- Compose 파일이 커지고 반복될 때, YAML 앵커(`&`)·별칭(`*`, `<<`)과 Compose 전용 `x-` 확장으로 설정 중복을 줄일 수 있음(DRY 원칙).
- **`x-` 접두사** — 최상위 키가 `x-`로 시작하면 Compose가 무시하지만 템플릿으로 재사용 가능.
```yaml
x-common: &common
  environment:
    - APP_ENV=prod
    - LOG_LEVEL=info
  restart: unless-stopped

services:
  web:
    <<: *common
    image: example/webapp
  worker:
    <<: *common
    image: example/worker
```
- 여러 조각(fragment)을 모듈식으로 정의해 리스트 형태(`<<: [*logging, *redis_net]`)로 조합 가능 — 유연하고 조합 가능한 설정 구성.
- **서비스 확장(`extends`)** — 한 파일의 서비스가 다른 서비스를 상속받아 재사용:
```yaml
services:
  base:
    image: ubuntu
    volumes: ["/data"]
  web:
    extends:
      service: base
    command: bash
```

### 변수 보간(Variable Interpolation)
- 환경 변수를 이용해 Compose 설정을 동적이고 재사용 가능하며 환경에 맞게 만들 수 있음.
- **문법**: `$VAR`, `${VAR}`, `${VAR:-default}`(기본값), `${VAR:?error}`(필수값, 없으면 오류), `${VAR+alt}`.
- **값의 출처와 우선순위** — 셸 환경 변수, 프로젝트 루트의 `.env` 파일(또는 `--env-file`로 지정) — 기본 `.env` 동작은 재정의 가능.
- 예시:
```yaml
services:
  app:
    image: "myapp:${TAG:-latest}"
    environment:
      - DEBUG=${DEBUG:-false}
```
- **변수 이스케이프** — `$$VAR`로 보간을 방지 — 컨테이너 엔트리포인트에 변수를 그대로 전달할 때 유용(`command: bash -c 'echo $$HOME'`은 호스트가 아니라 컨테이너의 `$HOME`을 출력).
- **필수값 강제** — `${VAR:?need VAR}`로 중요한 변수가 반드시 설정되도록 강제, 없으면 오류 발생.
- **중첩 보간** — `HOST=${HOSTNAME:-${DEFAULT_HOST:-localhost}}`처럼 가능하지만 복잡해질 수 있음(임의의 문자열 치환까지는 지원하지 않음).

### 종합 예시
```yaml
version: "3.9"

x-common-env: &common-env
  environment:
    - NODE_ENV=${NODE_ENV:-production}
    - LOG_LEVEL=${LOG_LEVEL:-info}

networks:
  frontend:
    driver: bridge
  backend:
    driver: overlay

services:
  web:
    <<: *common-env
    image: "webapp:${WEB_TAG:-latest}"
    networks: [frontend]
    ports: ["${WEB_PORT:-8080}:80"]

  api:
    <<: *common-env
    image: "api:${API_TAG:-1.0}"
    networks: [frontend, backend]

  db:
    image: "postgres:${PG_VERSION:?PG_VERSION not set}"
    networks: [backend]
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```
- **환경 변수**: `x-common-env`로 공유. **네트워크**: 프론트엔드/백엔드 명확히 분리. **보간**: 태그·포트·필수값(`PG_VERSION`)을 `${}` 문법으로 처리.

### 중요한 이유
- **유지보수성** — 대규모·멀티 스택 설정에서 중복과 오류 가능성을 줄임.
- **유연성** — YAML을 편집하지 않고도 환경 변수나 `.env` 파일만으로 설정을 쉽게 조정.
- **격리와 보안** — 서비스별로 명확한 네트워크 가시성과 접근 제한을 정의.
- **베스트 프랙티스 정렬** — 프로덕션 배포, CI/CD, 환경 이식성을 위한 기반을 마련.

## 요약
- Docker Compose는 커스텀 네트워크로 서비스 간 통신 범위를 세밀하게 통제하고, YAML 앵커·`x-` 확장·`extends`로 설정 중복을 줄이며, `${VAR:-default}`/`${VAR:?error}` 같은 변수 보간으로 환경별로 유연하고 안전하게 재사용 가능한 설정을 구성할 수 있는 고급 기능을 제공한다.
