# Introduction to Docker - Key Components

## 개요
- Docker Daemon·Client·Image에 이어, Docker Container·Docker Registry·Dockerfile까지 나머지 핵심 구성 요소와 이들이 연결되는 전체 흐름을 정리.

## 내용
### Docker Container
- Docker 이미지의 실행형(running/execution form) — 컨테이너 안에서 애플리케이션과 그 의존성이 실행되며, 사용자는 컨테이너와 상호작용(즉, 컨테이너 안에서 실행 중인 애플리케이션과 상호작용)함.
- 단 하나의 애플리케이션과 그 의존성만 실행되는 완전히 격리된 환경.

### Docker Registry
- MySQL, HTTPD, Kafka처럼 여러 애플리케이션이 있을 때, 각 애플리케이션마다 별도의 Docker 이미지가 필요함 — 이 모든 이미지를 저장하는 **중앙 저장소**가 Docker Registry.
- Docker Daemon은 Registry에서 이미지를 가져와(pull) 그 이미지로 컨테이너를 생성.

### Dockerfile
- Docker 이미지를 만들기(synthesize) 위한 지시문(instruction)들을 담은 파일.
- 어떤 Base Image를 사용할지, 어떤 명령을 실행할지, 애플리케이션을 어떻게 시작할지, 어떤 포트를 리스닝할지 등 다양한 설정을 담음.
- `docker build` 명령으로 Dockerfile을 실행하면 그 결과물로 **Docker 이미지**가 만들어짐.

### 전체 흐름
1. Dockerfile 작성 → `docker build` 실행 → **Docker Image** 생성.
2. 생성된 이미지를 **Docker Registry**에 저장.
3. **Docker Daemon**이 Registry에서 이미지를 pull(다운로드).
4. 다운로드한 이미지로 **Docker Container**를 생성·실행.

## 요약
- Docker Container는 이미지의 실행형으로 애플리케이션이 격리된 채 동작하는 공간이고, Docker Registry는 여러 애플리케이션의 이미지를 저장하는 중앙 저장소이며, Dockerfile은 이미지 생성 지시문을 담은 파일로 `docker build` → 이미지 생성 → Registry 저장 → Daemon이 pull → Container 실행이라는 전체 파이프라인의 시작점이다.
