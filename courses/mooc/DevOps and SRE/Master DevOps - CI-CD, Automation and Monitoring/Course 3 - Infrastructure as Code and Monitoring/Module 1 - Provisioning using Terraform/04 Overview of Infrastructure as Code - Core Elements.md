# Overview of Infrastructure as Code - Core Elements

## 개요
- 비유를 통해 Infrastructure as Code(IaC)의 개념을 소개하고, 핵심 인프라 요소와 IaC의 이점(자동화·확장성·버전 관리·일관성)을 설명.

## 내용
### 비유로 이해하는 IaC
- 시장(mayor)이 도시의 모든 집을 동일한 설계로 짓고 싶어할 때, 매번 건설팀을 고용해 수동으로 짓는 대신 청사진(blueprint)만 있으면 "마법의 로봇"이 정확히 똑같은 집을 지어주는 것과 같다.
- **Infrastructure as Code** — 서버·네트워크·DB 같은 인프라를 클라우드 콘솔/GUI에서 수동으로 클릭하며 설정하는 대신, **코드 파일로 정의**하는 관행. 버전 관리된 서술적(descriptive) 모델로 인프라를 지속적으로 정의·배포하는 DevOps 방법론.

### 핵심 인프라 요소
- **네트워크** — VPC, VNet
- **가상머신** — AWS EC2, Azure Virtual Machines, GCP Compute Instances
- **로드밸런서**
- **스토리지** — 다양한 저장소 유형

### IaC의 이점
1. **자동화(Automation)** — VM 생성 같은 반복 작업을 매번 수동으로 하지 않고 코드(블루프린트)를 실행해 자동 생성
2. **확장성(Scalability)** — 트래픽이 10K에서 30K로 늘면 VM을 20대 더 추가해야 하는데, IaC로 수요에 빠르게 대응 가능
3. **버전 관리(Version Control)** — 1차 버전엔 VM 1대+Kubernetes 클러스터, 2차 버전엔 S3 버킷 추가처럼, 애플리케이션 소스 코드처럼 인프라도 여러 버전을 관리 가능
4. **일관성(Consistency)** — 두 번째 VM을 만들 때 사람의 실수로 설정이 조금씩 달라질 수 있는데, IaC는 정의된 형식대로 인프라를 생성해 일관성을 유지

## 요약
- Infrastructure as Code는 네트워크·VM·로드밸런서·스토리지 같은 인프라를 코드로 정의해, 수동 설정보다 자동화·확장성·버전 관리·일관성 면에서 훨씬 유리한 방식으로 인프라를 구축·재현할 수 있게 한다.
