# Multi-container Deployment with Compose - Creating and Configuring a docker-compose File

## 개요
- WordPress(프론트엔드)와 MySQL(데이터베이스)로 구성된 2계층 애플리케이션을 `docker-compose.yaml` 하나로 정의하는 실습.

## 내용
### 사전 확인
```bash
docker --version
docker-compose --version
```

### 프로젝트 준비
```bash
mkdir wordpress
cd wordpress
vi docker-compose.yaml
```

### `docker-compose.yaml` 구조
```yaml
version: '3.1'

services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: wp_db
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress123
    volumes:
      - db-vol:/var/lib/mysql

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "31000:80"
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_NAME: wp_db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress123

volumes:
  db-vol:
```

### 구성 설명
- **`version: '3.1'`** — Compose 파일 포맷 버전(1.0, 2.0은 더 이상 사용되지 않으며 현재는 3.x 계열이 주로 사용됨).
- **`services`** — Compose가 만들 컨테이너들 — WordPress(멀티 컨테이너 애플리케이션)는 프론트엔드(웹 서버)와 데이터베이스(MySQL) 두 서비스로 구성.
- **`db` 서비스**
  - `image: mysql:5.7` — MySQL 5.7 이미지 사용.
  - `MYSQL_ROOT_PASSWORD`, `MYSQL_DATABASE`(`wp_db`, WordPress가 사용할 데이터베이스), `MYSQL_USER`/`MYSQL_PASSWORD`(WordPress가 연결에 사용할 계정) — 환경 변수로 지정.
  - `volumes: db-vol:/var/lib/mysql` — MySQL 데이터 저장 경로(`/var/lib/mysql`)에 볼륨을 마운트해 컨테이너가 삭제돼도 데이터가 유지되도록 함(볼륨은 하단 `volumes:` 섹션에서 먼저 정의되어야 함 — `docker volume create` 후 마운트하는 것과 같은 원리).
- **`wordpress` 서비스**
  - `depends_on: db` — Compose는 파일을 순차적으로 실행하므로, 이 의존성 덕분에 **데이터베이스가 먼저 생성**된 뒤 WordPress가 생성됨.
  - `image: wordpress:latest`.
  - `ports: "31000:80"` — 컨테이너 포트 80(WordPress 기본 포트)을 Docker Host 포트 31000에 매핑해 외부에서 접근 가능하게 함.
  - `WORDPRESS_DB_HOST: db:3306` — 프론트엔드가 데이터베이스에 연결할 때 서비스 이름(`db`)과 MySQL 기본 포트(3306)로 접속(서비스 이름이 곧 호스트 이름 역할을 함).
  - `WORDPRESS_DB_NAME`, `WORDPRESS_DB_USER`, `WORDPRESS_DB_PASSWORD` — 연결할 데이터베이스와 인증 정보.

## 요약
- 하나의 `docker-compose.yaml`에 `db`(MySQL, 볼륨 마운트로 데이터 지속)와 `wordpress`(`depends_on: db`로 순서 보장, Port Binding, DB 접속 환경 변수) 두 서비스를 정의하면, Compose가 서비스 이름을 호스트 이름 삼아 두 컨테이너를 연결하며 WordPress가 MySQL에 저장하는 데이터를 자동으로 처리하도록 구성할 수 있다.
