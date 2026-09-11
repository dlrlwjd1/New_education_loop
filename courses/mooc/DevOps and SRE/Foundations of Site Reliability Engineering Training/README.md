# Foundations of Site Reliability Engineering Training

> 플랫폼: MOOC (Simplilearn) · [강좌 링크](https://www.mooc.org/learn/foundations-of-site-reliability-engineering-training)

## 개요
사이트 신뢰성 엔지니어링(Site Reliability Engineering, SRE)의 기초부터 고급 실무까지 다루는 강좌. SLI/SLO/SLA와 에러 버짓, 모니터링·관찰 가능성, 인시던트 관리와 토일 감소, 신뢰성 엔지니어링과 배포 전략, 경고·자동화·RCA, CI/CD·카오스 엔지니어링, 성능 테스트를 AWS EC2·Docker·Prometheus·Grafana·Ansible·Jenkins·Pumba·Locust 등 실습 데모와 함께 학습한다.

전체 **7개 모듈 · 78개 강의** 정리본으로 구성.

## 모듈 구성

### [Module 1 - SRE Foundations](<Module 1 - SRE Foundations>) (8)
SRE 소개, 핵심 개념, SLI/SLO/SLA, 에러 버짓 개념. EC2·SLI/SLO/SLA 생성 데모.

### [Module 2 - Error Budgets & Observability](<Module 2 - Error Budgets & Observability>) (7)
에러 버짓 계산·시뮬레이션, 모니터링·관찰 가능성, 경고 피로, 관찰 데이터 상관, AI/ML. Prometheus·Grafana 모니터링 데모.

### [Module 3 - Incident Management & Toil Reduction](<Module 3 - Incident Management & Toil Reduction>) (11)
인시던트 관리, 비난 없는 포스트모템, 인시던트 소통, 메트릭·자동화, 토일 감소, SRE 문화. Prometheus 인시던트 관리·자동 서비스 복구 데모.

### [Module 4 - Reliability Engineering & Deployments](<Module 4 - Reliability Engineering & Deployments>) (10)
신뢰성 엔지니어링, 배포 전략(블루-그린·카나리), SRE 자동화, IaC, 구성 관리, 자동화 파이프라인. Blue-Green/Canary·Ansible+HTTPS Nginx 데모.

### [Module 5 - Alerting, Automation & RCA](<Module 5 - Alerting, Automation & RCA>) (17)
좋은 경고 원칙, 경고 피로 관리, 경고 도구, 효과적 경고 설계, 인시던트 대응, RCA 기법, 포스트모템, SRE 신뢰성·에러 버짓. EC2 모니터링·시스템 모니터링/경고/대응 데모.

### [Module 6 - CI-CD & Chaos Engineering](<Module 6 - CI-CD & Chaos Engineering>) (12)
CI/CD 기초·운영·도구(GitOps·Jenkins·GitHub Actions), 카오스 엔지니어링 기초·실무·Kubernetes. Jenkins+Docker 파이프라인·Pumba 카오스 데모.

### [Module 7 - Performance Testing & Advanced SRE](<Module 7 - Performance Testing & Advanced SRE>) (13)
성능 테스트 개요·부하 프로파일·CI/CD 성능 테스트, SRE 핵심 원칙·구현·팀 구조·성숙도 모델·에러 버짓·학습 문화·미래 트렌드. Locust 부하 테스트·Docker 컨테이너 재시작 탐지 데모.

## 핵심 키워드
- **신뢰성 지표**: SLI, SLO, SLA, 에러 버짓, MTTD/MTTA/MTTR/MTBF, 골든 시그널(지연·트래픽·오류·포화)
- **관찰 가능성**: 로그·메트릭·트레이스, Prometheus, Grafana, Node Exporter, Alertmanager
- **인시던트/RCA**: 심각도(P0~P4), 비난 없는 포스트모템, 5 Whys, 피시본, 결함 트리, 타임라인 분석
- **배포/자동화**: 블루-그린, 카나리, IaC(Terraform/Ansible), CI/CD(Jenkins/GitOps)
- **회복력 검증**: 카오스 엔지니어링(Chaos Monkey·Pumba), 성능/부하 테스트(Locust)

## 학습 도구
AWS EC2 · Docker / Docker Compose · Prometheus · Grafana · Node Exporter · Alertmanager · Nginx · Ansible · Python/Flask · Jenkins · Pumba · Locust

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - SRE Foundations

- [01 Course Introduction - Site Reliability Engineering (SRE)](Module%201%20-%20SRE%20Foundations/01%20Course%20Introduction%20-%20Site%20Reliability%20Engineering%20%28SRE%29.md)
- [02 Learning Objectives](Module%201%20-%20SRE%20Foundations/02%20Learning%20Objectives.md)
- [03 Introduction to Site Reliability Engineering (SRE)](Module%201%20-%20SRE%20Foundations/03%20Introduction%20to%20Site%20Reliability%20Engineering%20%28SRE%29.md)
- [04 Core Concepts in SRE](Module%201%20-%20SRE%20Foundations/04%20Core%20Concepts%20in%20SRE.md)
- [05 Demo - Creating an EC2 Instance](Module%201%20-%20SRE%20Foundations/05%20Demo%20-%20Creating%20an%20EC2%20Instance.md)
- [06 Demo - Creating SLIs, SLOs, and SLAs for a Sample Service](Module%201%20-%20SRE%20Foundations/06%20Demo%20-%20Creating%20SLIs%2C%20SLOs%2C%20and%20SLAs%20for%20a%20Sample%20Service.md)
- [07 Understanding Error Budgets - Concepts and Benefits](Module%201%20-%20SRE%20Foundations/07%20Understanding%20Error%20Budgets%20-%20Concepts%20and%20Benefits.md)
- [08 Applying Error Budgets - Examples and Advanced Practices](Module%201%20-%20SRE%20Foundations/08%20Applying%20Error%20Budgets%20-%20Examples%20and%20Advanced%20Practices.md)

### Module 2 - Error Budgets & Observability

- [01 Demo - Calculating and Simulating Error Budget](Module%202%20-%20Error%20Budgets%20%26%20Observability/01%20Demo%20-%20Calculating%20and%20Simulating%20Error%20Budget.md)
- [02 Monitoring and Observability](Module%202%20-%20Error%20Budgets%20%26%20Observability/02%20Monitoring%20and%20Observability.md)
- [03 Overview of Alert Fatigue](Module%202%20-%20Error%20Budgets%20%26%20Observability/03%20Overview%20of%20Alert%20Fatigue.md)
- [04 Correlating Observability Data](Module%202%20-%20Error%20Budgets%20%26%20Observability/04%20Correlating%20Observability%20Data.md)
- [05 AI-ML in Observability](Module%202%20-%20Error%20Budgets%20%26%20Observability/05%20AI-ML%20in%20Observability.md)
- [06 Demo - Setting up Prometheus and Grafana for Monitoring (Part 1)](Module%202%20-%20Error%20Budgets%20%26%20Observability/06%20Demo%20-%20Setting%20up%20Prometheus%20and%20Grafana%20for%20Monitoring%20%28Part%201%29.md)
- [07 Demo - Setting up Prometheus and Grafana for Monitoring (Part 2)](Module%202%20-%20Error%20Budgets%20%26%20Observability/07%20Demo%20-%20Setting%20up%20Prometheus%20and%20Grafana%20for%20Monitoring%20%28Part%202%29.md)

### Module 3 - Incident Management & Toil Reduction

- [01 Incident Management](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/01%20Incident%20Management.md)
- [02 Blameless Postmortem](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/02%20Blameless%20Postmortem.md)
- [03 Overview and Types of Incident Communication](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/03%20Overview%20and%20Types%20of%20Incident%20Communication.md)
- [04 Metrics and Automation in Incident Response](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/04%20Metrics%20and%20Automation%20in%20Incident%20Response.md)
- [05 Demo - Implementing Incident Management with Prometheus (Part 1)](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/05%20Demo%20-%20Implementing%20Incident%20Management%20with%20Prometheus%20%28Part%201%29.md)
- [06 Demo - Implementing Incident Management with Prometheus (Part 2)](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/06%20Demo%20-%20Implementing%20Incident%20Management%20with%20Prometheus%20%28Part%202%29.md)
- [07 Toil Reduction](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/07%20Toil%20Reduction.md)
- [08 Demo - Toil Reduction with Automated Service Recovery (Part 1)](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/08%20Demo%20-%20Toil%20Reduction%20with%20Automated%20Service%20Recovery%20%28Part%201%29.md)
- [09 Demo - Toil Reduction with Automated Service Recovery (Part 2)](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/09%20Demo%20-%20Toil%20Reduction%20with%20Automated%20Service%20Recovery%20%28Part%202%29.md)
- [10 SRE Culture](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/10%20SRE%20Culture.md)
- [11 Key Takeaways](Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/11%20Key%20Takeaways.md)

### Module 4 - Reliability Engineering & Deployments

- [01 Learning Objectives](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/01%20Learning%20Objectives.md)
- [02 Introduction to Reliability Engineering](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/02%20Introduction%20to%20Reliability%20Engineering.md)
- [03 Deployment Strategies in Reliability Engineering](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/03%20Deployment%20Strategies%20in%20Reliability%20Engineering.md)
- [04 Demo - Implementing SRE with Blue-Green and Canary Deployment](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/04%20Demo%20-%20Implementing%20SRE%20with%20Blue-Green%20and%20Canary%20Deployment.md)
- [05 Introduction to SRE Automation](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/05%20Introduction%20to%20SRE%20Automation.md)
- [06 Infrastructure as Code (IaC)](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/06%20Infrastructure%20as%20Code%20%28IaC%29.md)
- [07 Configuration Management in SRE](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/07%20Configuration%20Management%20in%20SRE.md)
- [08 SRE Automation - Key Areas and Types](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/08%20SRE%20Automation%20-%20Key%20Areas%20and%20Types.md)
- [09 SRE Automation - Pipelines, Monitoring, Scaling, and Incident Response](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/09%20SRE%20Automation%20-%20Pipelines%2C%20Monitoring%2C%20Scaling%2C%20and%20Incident%20Response.md)
- [10 Demo - Automating SRE with Ansible and HTTPS Nginx](Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/10%20Demo%20-%20Automating%20SRE%20with%20Ansible%20and%20HTTPS%20Nginx.md)

### Module 5 - Alerting, Automation & RCA

- [01 Principles of Good Alerting](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/01%20Principles%20of%20Good%20Alerting.md)
- [02 Managing Alert Fatigue - Actionable Alerts and Prioritization Framework](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/02%20Managing%20Alert%20Fatigue%20-%20Actionable%20Alerts%20and%20Prioritization%20Framework.md)
- [03 Common Alerting Tools](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/03%20Common%20Alerting%20Tools.md)
- [04 Designing Effective Alerts - Multi-Level and SLO-Based Alerting](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/04%20Designing%20Effective%20Alerts%20-%20Multi-Level%20and%20SLO-Based%20Alerting.md)
- [05 Demo - Monitoring EC2 Instance and Alerting Strategy (Part 1)](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/05%20Demo%20-%20Monitoring%20EC2%20Instance%20and%20Alerting%20Strategy%20%28Part%201%29.md)
- [06 Demo - Monitoring EC2 Instance and Alerting Strategy (Part 2)](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/06%20Demo%20-%20Monitoring%20EC2%20Instance%20and%20Alerting%20Strategy%20%28Part%202%29.md)
- [07 Incident Response - Process, Escalation Paths, and the Incident Commander Role](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/07%20Incident%20Response%20-%20Process%2C%20Escalation%20Paths%2C%20and%20the%20Incident%20Commander%20Role.md)
- [08 Root Cause Analysis (RCA) and Its Importance in SRE](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/08%20Root%20Cause%20Analysis%20%28RCA%29%20and%20Its%20Importance%20in%20SRE.md)
- [09 Root Cause Analysis in SRE - Techniques and Implementation](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/09%20Root%20Cause%20Analysis%20in%20SRE%20-%20Techniques%20and%20Implementation.md)
- [10 Effective Postmortems - Blameless Practices and Continuous Improvement](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/10%20Effective%20Postmortems%20-%20Blameless%20Practices%20and%20Continuous%20Improvement.md)
- [11 Demo - System Monitoring, Incident Alerts and Response (Part 1)](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/11%20Demo%20-%20System%20Monitoring%2C%20Incident%20Alerts%20and%20Response%20%28Part%201%29.md)
- [12 Demo - System Monitoring, Incident Alerts and Response (Part 2)](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/12%20Demo%20-%20System%20Monitoring%2C%20Incident%20Alerts%20and%20Response%20%28Part%202%29.md)
- [13 Demo - System Monitoring, Incident Alerts and Response (Part 3)](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/13%20Demo%20-%20System%20Monitoring%2C%20Incident%20Alerts%20and%20Response%20%28Part%203%29.md)
- [14 SRE Reliability](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/14%20SRE%20Reliability.md)
- [15 Managing Reliability with Error Budgets](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/15%20Managing%20Reliability%20with%20Error%20Budgets.md)
- [16 Measuring and Improving Reliability](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/16%20Measuring%20and%20Improving%20Reliability.md)
- [17 Key Takeaways](Module%205%20-%20Alerting%2C%20Automation%20%26%20RCA/17%20Key%20Takeaways.md)

### Module 6 - CI-CD & Chaos Engineering

- [01 Learning Objectives](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/01%20Learning%20Objectives.md)
- [02 CI-CD Fundamentals for SRE](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/02%20CI-CD%20Fundamentals%20for%20SRE.md)
- [03 Operationalizing CI-CD for SRE Teams](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/03%20Operationalizing%20CI-CD%20for%20SRE%20Teams.md)
- [04 CI-CD Tooling and Automation for SRE Teams](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/04%20CI-CD%20Tooling%20and%20Automation%20for%20SRE%20Teams.md)
- [05 Demo - CI-CD Pipeline with Jenkins and Docker (Part 1)](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/05%20Demo%20-%20CI-CD%20Pipeline%20with%20Jenkins%20and%20Docker%20%28Part%201%29.md)
- [06 Demo - CI-CD Pipeline with Jenkins and Docker (Part 2)](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/06%20Demo%20-%20CI-CD%20Pipeline%20with%20Jenkins%20and%20Docker%20%28Part%202%29.md)
- [07 Demo - CI-CD Pipeline with Jenkins and Docker (Part 3)](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/07%20Demo%20-%20CI-CD%20Pipeline%20with%20Jenkins%20and%20Docker%20%28Part%203%29.md)
- [08 Chaos Engineering Fundamentals](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/08%20Chaos%20Engineering%20Fundamentals.md)
- [09 Chaos Engineering Practices](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/09%20Chaos%20Engineering%20Practices.md)
- [10 Chaos Engineering in Kubernetes and Use Cases](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/10%20Chaos%20Engineering%20in%20Kubernetes%20and%20Use%20Cases.md)
- [11 Demo - Implementing Chaos Engineering with Pumba (Part 1)](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/11%20Demo%20-%20Implementing%20Chaos%20Engineering%20with%20Pumba%20%28Part%201%29.md)
- [12 Demo - Implementing Chaos Engineering with Pumba (Part 2)](Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/12%20Demo%20-%20Implementing%20Chaos%20Engineering%20with%20Pumba%20%28Part%202%29.md)

### Module 7 - Performance Testing & Advanced SRE

- [01 Introduction to Performance Testing](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/01%20Introduction%20to%20Performance%20Testing.md)
- [02 Realistic Load Profiles](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/02%20Realistic%20Load%20Profiles.md)
- [03 Performance Testing in CI-CD](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/03%20Performance%20Testing%20in%20CI-CD.md)
- [04 Demo - Multi-User Load Testing with Chaos (Part 1)](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/04%20Demo%20-%20Multi-User%20Load%20Testing%20with%20Chaos%20%28Part%201%29.md)
- [05 Demo - Multi-User Load Testing with Chaos (Part 2)](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/05%20Demo%20-%20Multi-User%20Load%20Testing%20with%20Chaos%20%28Part%202%29.md)
- [06 SRE Fundamentals - Core Principles and Supporting Practices](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/06%20SRE%20Fundamentals%20-%20Core%20Principles%20and%20Supporting%20Practices.md)
- [07 Implementing SRE - Workflow, Team Structure, Tools, and Metrics](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/07%20Implementing%20SRE%20-%20Workflow%2C%20Team%20Structure%2C%20Tools%2C%20and%20Metrics.md)
- [08 Implementing Error Budgets and Building a Learning Culture](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/08%20Implementing%20Error%20Budgets%20and%20Building%20a%20Learning%20Culture.md)
- [09 Use Case - Integrated SRE Approach](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/09%20Use%20Case%20-%20Integrated%20SRE%20Approach.md)
- [10 SRE Implementation - Challenges, Strategies, and Future Trends](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/10%20SRE%20Implementation%20-%20Challenges%2C%20Strategies%2C%20and%20Future%20Trends.md)
- [11 Demo - Container Restart Detection and Alerting with Docker (Part 1)](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/11%20Demo%20-%20Container%20Restart%20Detection%20and%20Alerting%20with%20Docker%20%28Part%201%29.md)
- [12 Demo - Container Restart Detection and Alerting with Docker (Part 2)](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/12%20Demo%20-%20Container%20Restart%20Detection%20and%20Alerting%20with%20Docker%20%28Part%202%29.md)
- [13 Key Takeaways](Module%207%20-%20Performance%20Testing%20%26%20Advanced%20SRE/13%20Key%20Takeaways.md)

<!-- course-inventory:end -->
