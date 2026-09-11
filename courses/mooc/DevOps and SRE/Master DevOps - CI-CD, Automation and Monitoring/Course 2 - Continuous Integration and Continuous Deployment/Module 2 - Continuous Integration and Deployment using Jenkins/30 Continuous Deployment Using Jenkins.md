# Continuous Deployment Using Jenkins

## 개요
- Continuous Deployment의 정의, 필요한 Jenkins 플러그인, 그리고 3가지 배포 전략(Rolling Update, Blue-Green, Canary)을 설명.

## 내용
### Deployment vs Continuous Deployment
- **Deployment** — 아티팩트/빌드를 서버에 올려 다음 팀이나 최종 사용자가 사용할 수 있게 하는 것.
- **Continuous Deployment** — 사람 개입 없이 애플리케이션을 여러 환경으로 자동으로 이동시키는 프로세스. 개발자가 커밋하면 Jenkins가 즉시 빌드해 다음 환경에 배포.

### 필요한 Jenkins 플러그인
- **Pipeline** — CI/CD 프로세스 구현(Pipeline, Multi-branch Pipeline, Organization Folder 등 다양한 템플릿)
- **SSH** — 다른 VM(Linux/Windows/Mac)에 연결해 배포
- **Docker** — 컨테이너 기반 continuous deployment 도구로 활용
- **Cloud(AWS/Azure/GCP)** — 클라우드 제공자 위에 서버를 생성하거나 배포 기술 활용

### 배포 전략이 필요한 이유
- 빌드를 곧바로 환경에 배포하는 것은 위험하므로, 빈번한 업데이트를 최소한의 다운타임·리스크로 수행하기 위한 전략이 필요하다.

### 1. Rolling Update
- 애플리케이션을 여러 서버(배치)에 순차적으로 배포하는 전략. 롤백도 가능하며 일부 CD 도구의 기본 전략.
- **max unavailable**(한 번에 삭제 가능한 VM 수), **max surge**(한 번에 새로 만들 수 있는 VM 수) 파라미터로 제어.
- 예: 서버 3대 중 한 대씩 순서대로 새 버전으로 교체(state 1 → 2 → 3) — Kubernetes의 Rolling Update와 동일한 개념(오래된 이미지 컨테이너 삭제, 새 이미지 컨테이너 생성).
- 시스템의 일부만 영향받아 점진적인 롤아웃 가능.

### 2. Blue-Green Deployment
- **Blue** 환경(현재 버전, 사용자 트래픽이 향하는 곳)과 **Green** 환경(신규 버전 배포·테스트용)을 동시에 유지.
- 로드밸런서가 Blue로 트래픽을 보내는 동안 Green에 새 버전을 배포·테스트.
- 준비가 완료되면 로드밸런서가 트래픽을 Green으로 전환.

### 3. Canary Deployment
- 하나의 환경만 존재하며 대부분의 인프라·트래픽이 버전 1(v1)에 있다.
- 신규 버전(v2)이 준비되면 트래픽의 일부(예: 20%)만 v2로 라우팅해 반응을 모니터링.
- 문제가 없으면 점진적으로 트래픽 비중을 늘려 결국 전체 인프라가 v2로 전환됨.

## 요약
- Continuous Deployment는 Pipeline·SSH·Docker·Cloud 플러그인으로 구현되며, Rolling Update(순차 교체)·Blue-Green(두 환경 전환)·Canary(트래픽 일부만 신규 버전으로) 세 가지 전략을 통해 다운타임과 리스크를 최소화하며 배포한다.
