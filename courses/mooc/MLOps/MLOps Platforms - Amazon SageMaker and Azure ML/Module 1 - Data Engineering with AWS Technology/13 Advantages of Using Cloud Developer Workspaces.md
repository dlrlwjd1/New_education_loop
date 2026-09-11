# Advantages of Using Cloud Developer Workspaces

## 개요
- 로컬 노트북/워크스테이션 개발 환경의 한계와, 클라우드 기반 개발자 워크스페이스(GitHub Codespaces, AWS Cloud9, GCP/Azure Cloud IDE, Colab, SageMaker Studio Lab 등)의 이점을 비교하는 4분 영상.

## 내용

### 로컬 노트북/워크스테이션의 한계
- **비결정적(non-deterministic)** 환경 — 보장된 일관된 환경이 없고, 원치 않는 패키지가 설치되어 있을 수 있음.
- GPU와 대용량 SSD를 갖추는 데 비용이 많이 들며, 실제 배포 환경과 로컬 환경이 동일하지 않은 경우가 많음(컨테이너로 어느 정도 우회 가능하지만).

### 클라우드 기반 개발 환경들
- **GitHub Codespaces**: GitHub Actions(CI 시스템), GitHub Copilot(OpenAI Codex 기반 코드 어시스턴트)과 손쉬운 통합, GitHub와 매우 긴밀하게 결합 — 강사가 가장 선호하는 개발 환경 중 하나.
- **Colab Notebooks**: 클라우드 기반 Jupyter 호환 시스템, GPU 사용 가능(Pro 버전도 존재) — 노트북 친화적 워크플로에 적합.
- **AWS SageMaker Studio Lab**: 무료로 GPU를 사용해 Jupyter Notebook을 실행할 수 있는 환경 — 역시 노트북 친화적 워크플로에 적합.
- **AWS Cloud9**: 역할 기반 권한(API 키를 직접 넣을 필요 없음), Lambda·S3·API Gateway 등 서버리스 애플리케이션 구축 서비스들과 긴밀한 통합 — 소프트웨어 엔지니어링·MLOps·ML 엔지니어링에 더 적합.
- **AWS CloudShell**: Cloud9보다 더 가벼운 버전, 경미한 소프트웨어 엔지니어링 작업에도 적합, bash/zsh/PowerShell 전환 가능.
- **GCP/Azure**: 각각 자체 Cloud 에디터와 Cloud Shell을 보유 — 유사한 패턴.

### 핵심 통찰
- 업계 전반이 **강력하고 폐기 가능(disposable)하며 사전 로드된, 클라우드와 깊이 통합된 환경**(SDK가 이미 설치되어 있고 데이터와 같은 위치에 co-located)으로 이동하고 있음.
- 만약 데이터가 이미 클라우드에 있고, 클라우드 기반 개발 환경을 그 자리에서 띄운다면 데이터와 **같은 위치(co-located)**에서 작업할 수 있음 — 카페에서 테라바이트급 데이터를 로컬로 복사해왔다 갔다 해야 한다면 사실상 불가능한 작업이 가능해짐.
- 클라우드 개발자 워크스페이스는 미래의 방향이며, 반드시 익혀볼 것을 권장.

## 요약
- 로컬 개발 환경은 비결정적이고 GPU 비용이 크며 배포 환경과 다를 수 있는 반면, 클라우드 개발자 워크스페이스(Codespaces, Cloud9, Colab, SageMaker Studio Lab 등)는 사전 설정된 SDK·데이터와의 co-location·GPU 접근성을 제공한다.
- 노트북 친화적 워크플로(Colab, SageMaker Studio Lab)와 소프트웨어 엔지니어링/MLOps 친화적 워크플로(Codespaces, Cloud9, CloudShell)로 대략 구분해 목적에 맞게 선택하는 것이 중요하다.
