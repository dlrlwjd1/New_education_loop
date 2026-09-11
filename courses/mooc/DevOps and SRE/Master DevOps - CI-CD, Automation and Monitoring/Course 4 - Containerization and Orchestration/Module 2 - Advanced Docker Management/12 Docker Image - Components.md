# Docker Image - Components

## 개요
- Docker 이미지의 구성 요소(Layer, Base Image, Dockerfile, ID, Tag)와, LAMP 스택을 예로 든 레이어 누적 구조를 정리.

## 내용
### 이미지의 구성 요소
1. **Layer(레이어)** — Dockerfile의 각 지시문(`FROM`, `RUN`, `COPY`, `EXPOSE` 등)에 대응하는 계층.
2. **Base Image(베이스 이미지)** — 애플리케이션을 빌드하는 토대가 되는 이미지. 예: Java 애플리케이션(JAR)이면 JDK, Flask 애플리케이션이면 Python이 베이스 이미지가 됨.
3. **Dockerfile** — 여러 지시문이 순차적으로 담긴 파일 — `docker build`로 이 지시문들을 하나씩 실행해 이미지를 생성.
4. **ID** — 모든 이미지가 갖는 고유 식별자 — Docker는 이름이 아니라 **ID로 리소스를 식별**함(이름은 사람이 이해하기 쉽도록 붙이는 것일 뿐).
5. **Tag** — 사용자가 정의하는 이미지의 **버전** — 이미지는 불변(immutable)이므로 변경이 필요하면 새 버전을 만들어 `v1`, `v2`, `v3`처럼 태그를 붙이고, 최종 안정 버전에는 보통 `latest` 태그를 붙임.

### Base Image
- Python, Java, Ubuntu, CentOS 등 애플리케이션이 올라갈 런타임/기반 환경.
- Docker는 **UFS(Union File System)**를 사용해 베이스 이미지 위에 새로운 이미지 레이어를 계속 추가하는 방식으로 변경 사항을 추적.
- 예: 베이스 이미지가 Python이고, 그 위에 `WORKDIR /app`(작업 디렉터리 생성) 지시문을 추가하면 이 지시문 하나가 새로운 레이어가 되어 `/app` 폴더가 그 레이어 안에 생성됨. 그다음 `COPY`, `RUN` 지시문이 각각 또 다른 레이어가 됨.
- 즉, 이미지는 **Layer 1(FROM) → Layer 2(WORKDIR) → Layer 3(COPY) → Layer 4(RUN)**처럼 여러 레이어의 집합이며, 각 지시문에서 요청한 변경 사항은 오직 그 레이어에만 존재하고, 최종 이미지는 이 모든 레이어의 합집합(union).

### 예시: LAMP 스택
- LAMP(Linux, Apache, MySQL, PHP) 스택을 배포한다면:
  1. **Layer 1** — Linux(베이스 OS).
  2. **Layer 2** — Apache 설치.
  3. **Layer 3** — MySQL 설치.
  4. **Layer 4** — PHP 설치(웹페이지 배포용).
- 최종 사용자가 보는 이미지는 이 4개 레이어가 모두 합쳐진 하나의 이미지.
- 이 레이어들은 모두 **읽기 전용(read-only)**이며 어떤 레이어도 개별적으로 수정할 수 없음 — 변경하려면 이미지를 처음부터 다시 만들어야 함(불변성).

## 요약
- Docker 이미지는 Layer(지시문 단위)·Base Image(런타임 기반)·Dockerfile(지시문 집합)·ID(고유 식별자)·Tag(버전)라는 구성 요소로 이루어지며, LAMP 스택 예시처럼 베이스 이미지 위에 여러 지시문이 레이어로 차례차례 쌓여 하나의 읽기 전용·불변 이미지를 형성한다.
