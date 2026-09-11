# Introduction to Docker - Popularity

## 개요
- Docker가 인기 있는 이유(이식성·효율성·확장성·생태계)와 2024년 기준 컨테이너 도구 시장 점유율을 정리.

## 내용
### Docker가 인기 있는 이유
1. **이식성(Portability)과 일관성(Consistency)** — Production, Non-production, Testing, Staging 등 어떤 환경에서도 동일한 설정으로 컨테이너를 실행 가능. 예: Windows에서 실행하던 컨테이너를 Red Hat Linux로 손쉽게 이식 가능 — 애플리케이션 버전이 모든 환경에서 동일하게 유지됨.
2. **효율적인 리소스 사용** — 컨테이너는 OS나 커널을 포함하지 않아 경량(lightweight)이며 빠르게 기동됨. 예: CPU 1개, RAM 256MB 정도로도 애플리케이션 실행이 충분해 더 적은 리소스로 더 많은 애플리케이션을 운영 가능.
3. **배포 단순화(Simplified Deployment)** — 이미지 하나만 있으면 Ubuntu, Red Hat Linux, Rocky Linux 등 어떤 플랫폼·환경에서도 그대로 동작 — 이미지가 애플리케이션과 모든 의존성을 담고 있기 때문에 배포가 매우 단순.
4. **확장성(Scalability)과 유연성(Flexibility)** — 컨테이너 수를 필요에 따라 늘리거나(Scale Up) 줄일 수 있고(Scale Down), 애플리케이션 버전 업그레이드(예: 1.0 → 1.1 → 1.2)도 유연하게 진행 가능.
5. **활발한 생태계와 커뮤니티 지원** — 2013년 출시 이후 개발자들 사이에서 널리 쓰이는 사용자 친화적 도구로 자리잡음. Docker Swarm, Docker Compose, Docker Stack, Docker Networking, Docker Storage 등 다른 컨테이너 도구 대비 견고한 기능·생태계를 보유.

### 2024년 컨테이너 도구 시장 점유율 (Statista 기준)
- **Docker** — 33.74%(시장 선두).
- **Kubernetes** — 26.37%.
- **기타 도구(합산)** — 16.61%.
- **Red Hat OpenShift** — 4.37%.
- **Packer** — 7.57%.
- **LXC** — 11.36%.
- Docker와 Kubernetes가 가장 큰 시장 점유율을 차지하며, 컨테이너화된 워크로드를 운영하는 기업들이 늘어남에 따라 이 비율은 매년 증가하는 추세.

## 요약
- Docker는 이식성·일관성, 경량 리소스 사용, 배포 단순화, 확장성·유연성, 그리고 견고한 생태계와 커뮤니티 지원 덕분에 2024년 기준 컨테이너 도구 시장에서 33.74%로 1위를 차지하며(Kubernetes 26.37%), 컨테이너화 채택이 늘어남에 따라 두 도구의 점유율은 계속 증가하는 추세다.
