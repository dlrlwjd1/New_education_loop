# Welcome to Containerization and Orchestration

## 개요
- Course 4(Containerization and Orchestration) 전체 개요, 학습 목표, 5개 모듈 구조, 대상 수강생, 선수 지식을 안내하는 리딩.

## 내용
### 코스 목표
- Docker와 Kubernetes로 애플리케이션을 패키징·배포·관리·확장하는 역량을 갖추는 것이 목표.
- Docker 컨테이너화 기초 → Kubernetes 오케스트레이션 → Prometheus·Grafana 모니터링·Observability 통합까지 이어지는 흐름.

### 학습 목표
- DevOps에서 컨테이너화·오케스트레이션의 원칙과 장점 설명.
- Docker와 Docker CLI로 컨테이너를 빌드·실행·관리.
- 커스텀 Docker 이미지 생성과 멀티 컨테이너 애플리케이션 구성.
- Kubernetes 클러스터에서 컨테이너화된 애플리케이션을 배포·확장·관리.
- Prometheus·Grafana로 컨테이너·Kubernetes 성능 모니터링.
- 복원력 있고(resilient) 확장 가능하며 관측 가능한(observable) 컨테이너 오케스트레이션 워크플로우 설계.

### 대상 수강생과 선수 지식
- 신입, 소프트웨어 개발자, DevOps 엔지니어, 시스템 관리자, 클라우드 엔지니어, SRE, IT 운영 담당자에게 적합.
- 컨테이너화·오케스트레이션·모니터링 도구에 대한 사전 경험은 필요 없지만, Linux·네트워킹·컨테이너화 개념에 대한 기초 지식과 Prometheus·Grafana 사용 경험이 있으면 도움이 됨.

### 코스 개요
- 약 5주 과정으로 기초부터 고급까지 다룸. 영상 강의, 읽기 자료, 실습을 결합해 Docker, Kubernetes, 모니터링 도구로 실무 역량을 구축.
- 멀티 컨테이너 오케스트레이션, 퍼시스턴트 스토리지, Helm 패키지 관리, 종합적인 모니터링·알림 전략까지 다룸.

### 코스 구조 (5개 모듈)
1. **Module 1: Containerization using Docker** — 컨테이너 기술과 Docker의 기초. 컨테이너 아키텍처, 라이프사이클, CLI 명령어, 포트 바인딩을 영상과 실습으로 학습.
2. **Module 2: Advanced Container Management using Docker** — 컨테이너 모드, Dockerfile 작성, 이미지·볼륨 관리 등 Docker 고급 기능 심화. Docker Compose·Swarm으로 컨테이너 오케스트레이션 탐구, Prometheus·Grafana로 컨테이너 모니터링.
3. **Module 3: Getting Started with Kubernetes** — Pod, Controller, Service, 클러스터 구조 등 Kubernetes 기초 개념. `kubectl` 활용법, Pod 라이프사이클 관리, 스케일링, 배포 전략 실습.
4. **Module 4: Kubernetes Services, Persistent Storage, and Monitoring** — Kubernetes 네트워킹, 서비스, 퍼시스턴트 스토리지, StatefulSets·Helm 같은 고급 주제. Prometheus·Grafana로 Kubernetes 클러스터 모니터링과 대시보드·알림 구성.
5. **Module 5: Course Wrap-Up and Assessment** — 종합 실습 프로젝트와 채점형 평가로 컨테이너화·오케스트레이션 역량을 확인.

### 평가와 학습 자료
- 각 모듈마다 지식 점검(Knowledge Check)과 채점형 과제를 통해 학습 내용을 강화.
- 영상 강의 외에 Docker·Kubernetes·Prometheus·Grafana 핵심 개념을 다루는 읽기 자료 제공.
- 실습 과제와 실습 프로젝트를 통한 실전 적용, 토론 프롬프트를 통한 동료 학습.
- 최종 실습 프로젝트와 채점형 평가로 코스를 마무리.

## 요약
- Course 4는 Docker 기초(Module 1) → Docker 고급 기능·Compose/Swarm(Module 2) → Kubernetes 기초(Module 3) → Kubernetes 서비스·스토리지·모니터링(Module 4) → 종합 평가(Module 5) 순으로 구성되어, 컨테이너화부터 오케스트레이션, 모니터링까지 아우르는 실전 DevOps 워크플로우 역량을 완성하는 것을 목표로 한다.
