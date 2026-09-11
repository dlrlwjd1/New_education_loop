# Managing Docker Images - Docker Hub

## 개요
- Docker Inc.의 공식 Registry인 Docker Hub의 역할, Public/Private 저장소 개념, 그리고 Docker Hub의 여러 장점(협업, 자동 빌드, Webhook, 공식 검증 이미지)을 정리.

## 내용
### Docker Hub란
- Docker가 제공하는 **클라우드 기반 저장소 서비스** — 컨테이너 이미지를 저장·공유·관리하는 중앙 허브.
- 로컬 시스템에서 Docker Hub로 이미지를 다운로드(pull)하려면 **인터넷 연결이 필수** — 인터넷이 없는 Docker Host는 이미지를 pull할 수 없음.
- 이런 경우를 위해 인터넷 없이 Docker Host에서만 접근 가능한 **Private Registry**를 별도로 운영할 수도 있음 — Registry는 **Public**(누구나 접근 가능)과 **Private**(제한된 접근)로 나뉨.

### Docker Hub의 용도
1. **미리 빌드된 이미지 접근** — Nginx, Python, Node.js처럼 다른 회사·오픈소스 커뮤니티가 만든 이미지를 그대로 가져다 사용.
2. **커스텀 이미지 업로드** — 계정을 만들어 자신이 만든(예: Flask, Node.js 애플리케이션) 이미지를 Docker Hub에 업로드 가능.
3. **협업(Collaboration)** — 만든 이미지를 테스트팀·비프로덕션 팀 등 다른 팀과 공유해 그들의 환경에서 컨테이너로 배포하게 함.

### Public vs Private 저장소
- Docker Hub 계정에서 저장소(Repository)를 만들고 이미지를 업로드하면 **Public**(전 세계 누구나 볼 수 있음) 또는 **Private**(본인만 접근 가능)로 설정 가능.
- **무료 계정은 Private 저장소를 1개만 제공** — 더 많은 Private 저장소가 필요하면 유료 플랜 필요(월 최소 약 $5부터 시작).

### Docker Hub의 그 밖의 장점
1. **자동화된 빌드(Automated Builds)** — 예: Jenkins 같은 DevOps 도구로 이미지를 빌드한 뒤, Docker 명령으로 Docker Hub 계정에 곧바로 Push해 이어지는 테스트 프로세스를 진행할 수 있음.
2. **Webhook** — 이미지 업로드가 완료되면 특정 액션을 트리거하는 메커니즘 — 예를 들어 이미지 업로드 완료 시 Webhook을 통해 Kubernetes나 비프로덕션·스테이징 환경에 자동으로 배포되도록 구성 가능.
3. **공식·검증된 이미지(Official & Verified Images)** — Python, Node.js, Nginx, HTTPD 같은 이미지는 Docker 자체 또는 파트너사가 공식적으로 제공. 예: Ubuntu 이미지는 Ubuntu를 관리하는 회사인 **Canonical**이 검증된 이미지를 제공.

## 요약
- Docker Hub는 인터넷을 통해 이미지를 저장·공유하는 Docker의 공식 클라우드 Registry로, Public/Private 저장소를 구분해 관리할 수 있고(무료 계정은 Private 1개 제한), 자동화된 빌드·Webhook 연동·공식 검증 이미지 제공이라는 장점 덕분에 팀 간 이미지 협업과 CI/CD 파이프라인 통합에 널리 활용된다.
