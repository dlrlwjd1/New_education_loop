# Docker Compose - Important Commands

## 개요
- Docker Compose의 주요 명령어(`up`/`down`/`build`/`ps`/`config`/`stop`/`start`/`restart`/`exec`)와 사용 사례(개발 편의성, 자동화 테스트, 단일 호스트 배포)를 정리.

## 내용
### 주요 명령어
- **`docker-compose up`** — YAML 파일을 실행해 정의된 모든 컨테이너(Nginx, Python, DB 등)를 생성.
- **`docker-compose down`** — 프론트엔드, 백엔드, 데이터베이스 등 시작된 모든 컨테이너를 종료·제거.
- **`docker-compose build`** — Dockerfile을 작성해 `docker build`로 이미지를 만드는 과정을 대신해, 이미지를 빌드하고 컨테이너로 배포하는 과정을 한 번에 처리.
- **`docker-compose ps`** — Compose가 시작한 프로세스(컨테이너) 목록을 표시.
- **`docker-compose config`** — 실행한 YAML 설정 파일(스택 전체 설정)을 보여줌 — 여기서 "스택(Stack)"은 Compose가 함께 배포하는 여러 애플리케이션(컨테이너)의 조합을 의미.
- **`docker-compose stop`** — Compose가 배포한 모든 컨테이너를 정지.
- **`docker-compose start`** — Compose가 배포한 모든 컨테이너를 다시 시작.
- **`docker-compose restart`** — 컨테이너들을 재시작.
- **`docker-compose exec`** — 특정 컨테이너 내부로 들어가 설정이나 로그 파일 등을 확인.

### 사용 사례
1. **개발자 친화적(Developer Friendly)** — 개발 환경에서 프론트엔드·백엔드·데이터베이스 컨테이너를 빠르게 띄워 애플리케이션이 정상 동작하는지, 어디서 문제가 생기는지 신속하게 테스트.
2. **자동화 테스트** — 프로덕션용은 아니지만, CI/CD에서 프론트엔드·백엔드·DB 등 모든 컴포넌트의 배포가 성공적인지 빠르게 확인하고, CI/CD 파이프라인을 위한 격리된 테스트 환경을 손쉽게 만들고 없앨 수 있음.
3. **단일 호스트 배포(Single Host Deployment)** — Docker Compose의 큰 제약: **단일 Docker Host에 국한**됨 — 여러 Docker Host에 걸쳐 컨테이너를 관리할 수 없음. 하나의 머신 안에서 멀티 컨테이너 애플리케이션을 관리해야 한다면 Docker Compose가 적합한 도구.

## 요약
- Docker Compose는 `up`(생성)·`down`(제거)·`build`(이미지 빌드+배포)·`ps`(목록)·`config`(설정 확인)·`stop`/`start`/`restart`(상태 제어)·`exec`(내부 접속) 명령으로 멀티 컨테이너 애플리케이션을 관리하며, 개발 환경 테스트와 CI/CD 자동화 테스트에 특히 유용하지만 단일 Docker Host 범위 안에서만 동작한다는 제약이 있다.
