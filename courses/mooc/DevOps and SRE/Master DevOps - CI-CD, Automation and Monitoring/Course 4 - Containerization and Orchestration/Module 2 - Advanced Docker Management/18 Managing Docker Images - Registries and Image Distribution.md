# Managing Docker Images - Registries and Image Distribution

## 개요
- Docker 이미지의 핵심 특성(이식성·버전 관리·레이어 저장)과, 이미지 배포·저장의 핵심 수단인 Docker Registry의 개념·대표 종류를 정리.

## 내용
### Docker 이미지의 핵심 특성
1. **이식성(Portability)** — 로컬 시스템에서 Registry로, 또는 Registry에서 컨테이너를 실행할 위치로 자유롭게 이동(migrate)할 수 있어야 함.
2. **버전 관리(Versioning)** — 개발자가 코드를 바꿀 때마다 DevOps 팀이 새로운 이미지를 빌드하므로, `v1`, `v1.1`, `v1.2` 등으로 이미지를 명확히 버전 관리해 어느 것이 최신인지 구분할 수 있어야 함.
3. **레이어 저장(Layered Storage)** — 이미지는 여러 레이어로 구성되므로(Dockerfile의 각 지시문이 레이어), 이미지를 Push할 때 모든 레이어가 함께 저장되고, Pull할 때 모든 레이어가 함께 검색(retrieve)되어야 함.

### Docker Registry란
- 모든 이미지를 저장하는 **중앙 집중식 저장소** — 한 엔지니어가 이미지를 만들어 업로드하면, 팀의 다른 엔지니어나 QA·테스트·프로덕션 팀이 같은 이미지를 받아 사용할 수 있게 하는 중앙 배포 메커니즘.
- 예: `docker pull nginx` — 이미 누군가 Nginx 이미지를 만들어 Registry에 올려두었기 때문에, 우리는 단순히 그 이미지를 받아(pull)와 컨테이너로 실행하는 것.
- Docker Registry는 이미지 배포(distribution)를 위한 표준적인 방법.

### 대표적인 Docker Registry 종류
- **Docker Hub** — Docker Inc.가 관리하는 공식 공개(public) Registry. 계정을 만들어 이미지를 업로드·다운로드 가능.
- **AWS ECR(Elastic Container Registry)** — AWS 클라우드가 제공.
- **GCR(Google Container Registry)** — Google Cloud Platform(GCP)이 제공.
- **Quay** — Red Hat이 관리하는 하이브리드 Registry(`quay.io`) — 퍼블릭·프라이빗 모두 가능하며, 파트너가 이미지를 올리려면 엄격한 인증(certification) 프로세스를 거쳐야 함.
- 그 외 **Nexus, Azure Container Registry(ACR), Harbor, JFrog** 등도 실무에서 널리 쓰이는 Registry.

## 요약
- Docker 이미지는 이식성·버전 관리·레이어 저장이라는 특성을 갖추어야 하며, 이러한 이미지를 중앙에서 저장·배포하는 Docker Registry에는 공식 공개 Registry인 Docker Hub 외에도 AWS ECR, GCR, Quay, Nexus, ACR, Harbor, JFrog 등 다양한 선택지가 있어 조직의 요구에 맞게 사용할 수 있다.
