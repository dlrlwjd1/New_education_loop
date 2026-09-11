# Phase 10 — 코드로 만드는 네트워크

- 목표: Phase 7에서 **손으로 클릭해 만든 VPC를 코드로 되돌려**, 지우고 다시 만들어도 똑같이 서게 한다.
- 분량: 약 10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- VPC · 서브넷 · 라우팅 테이블 · 보안그룹 · 로드밸런서를 코드로 선언한다
- `plan` 출력을 읽고 **적용 전에 무엇이 바뀔지** 정확히 예측한다
- 상태 파일(state)이 무엇을 기억하는지, 왜 공유 저장소에 둬야 하는지 설명한다
- 콘솔에서 손으로 바꾼 변경(드리프트)을 탐지한다
- 네트워크 변경을 파이프라인으로 배포하고, 되돌릴 방법을 갖는다

> **주의**: 저장소의 IaC 강의는 **AWS 기준**이다. Phase 7을 NCP로 했다면 리소스 이름이 다르다. 개념(선언·상태·모듈·드리프트)은 그대로이므로, 실습은 AWS 프리티어로 하거나 NCP Terraform 프로바이더로 옮겨 쓴다.

## 10-A. IaC — 왜 코드로 만드는가

메인: Master DevOps, Course 3 Module 1

- [ ] [04 Overview of Infrastructure as Code - Core Elements.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/04%20Overview%20of%20Infrastructure%20as%20Code%20-%20Core%20Elements.md)
- [ ] [05 Overview of Infrastructure as Code - Challenges and Tools.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/05%20Overview%20of%20Infrastructure%20as%20Code%20-%20Challenges%20and%20Tools.md)
- [ ] [06 Role of IaC in DevOps.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/06%20Role%20of%20IaC%20in%20DevOps.md)
- [ ] [09 Introduction to Terraform.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/09%20Introduction%20to%20Terraform.md)
- [ ] [10 Terraform vs Ansible - Differences and Similarities.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/10%20Terraform%20vs%20Ansible%20-%20Differences%20and%20Similarities.md) — **프로비저닝과 설정 관리는 다른 일이다.** 네트워크는 프로비저닝 쪽
- [ ] [12 Terraform Architecture - Key Components.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/12%20Terraform%20Architecture%20-%20Key%20Components.md)
- [ ] [13 Terraform Architecture - State Management.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/13%20Terraform%20Architecture%20-%20State%20Management.md) — **상태 파일이 이 도구의 핵심이자 사고의 원천이다.** 여기를 대충 넘기지 않는다

함께 보기: SRE Foundations Module 4

- [ ] [06 Infrastructure as Code (IaC).md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20&%20Deployments/06%20Infrastructure%20as%20Code%20%28IaC%29.md) — 신뢰성 관점에서 본 IaC. 짧다

## 10-B. Terraform으로 실제 만들기

메인: Master DevOps, Course 3 Module 1 (이어서)

- [ ] [14 Creating an AWS Account.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/14%20Creating%20an%20AWS%20Account.md) — 계정이 있으면 건너뛴다
- [ ] [15 Setting up Terraform on AWS - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/15%20Setting%20up%20Terraform%20on%20AWS%20-%20Demonstration.md)
- [ ] [17 Terraform Configuration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/17%20Terraform%20Configuration.md)
- [ ] [18 Terraform Basic Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/18%20Terraform%20Basic%20Commands.md) — **`plan` 을 읽는 법.** 이 로드맵에서 가장 중요한 한 줄은 `plan` 출력이다
- [ ] [20 Writing and Running a Terraform Configuration - Configuring EC2 Instance.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/20%20Writing%20and%20Running%20a%20Terraform%20Configuration%20-%20Configuring%20EC2%20Instance.md)
- [ ] [21 Managing Resources in Terraform.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/21%20Managing%20Resources%20in%20Terraform.md)
- [ ] [23 Meta Arguments in Resources.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/23%20Meta%20Arguments%20in%20Resources.md) — `count`·`for_each`. **서브넷을 AZ마다 반복 생성할 때 쓴다**
- [ ] [24 Referencing Resources in Terraform - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/24%20Referencing%20Resources%20in%20Terraform%20-%20Demonstration.md) — **서브넷이 VPC를 참조하는 식으로 의존 관계가 생긴다**
- [ ] [25 Terraform Configuration Best Practices - Structuring and Organizing Code for Scalability.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/25%20Terraform%20Configuration%20Best%20Practices%20-%20Structuring%20and%20Organizing%20Code%20for%20Scalability.md)
- [ ] [26 Terraform State Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/26%20Terraform%20State%20Commands.md)
- [ ] [28 Terraform Modules.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/28%20Terraform%20Modules.md) — **VPC 하나를 모듈로 만들어 재사용한다**
- [ ] [30 Infrastructure Deployment with Terraform.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/30%20Infrastructure%20Deployment%20with%20Terraform.md)
- [ ] [31 Infrastructure Deployment with Terraform - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/31%20Infrastructure%20Deployment%20with%20Terraform%20-%20Demonstration.md)
- [ ] [32 Managing Secrets in Terraform - Best Practices and Tools.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/32%20Managing%20Secrets%20in%20Terraform%20-%20Best%20Practices%20and%20Tools.md) — **상태 파일에 비밀이 평문으로 남는 문제**

## 10-C. CloudFormation — 클라우드 네이티브 대안

메인: Master DevOps, Course 3 Module 2. **Terraform을 이미 했다면 개념 비교용으로 훑는다.**

- [ ] [01 Introduction to AWS CloudFormation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/01%20Introduction%20to%20AWS%20CloudFormation.md)
- [ ] [02 CloudFormation Templates.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/02%20CloudFormation%20Templates.md)
- [ ] [09 CloudFormation Parameters and Outputs.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/09%20CloudFormation%20Parameters%20and%20Outputs.md)
- [ ] [17 Stack Policies and Change Sets.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/17%20Stack%20Policies%20and%20Change%20Sets.md) — Terraform의 `plan` 에 해당하는 것
- [ ] [18 Drift Detection in CloudFormation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/18%20Drift%20Detection%20in%20CloudFormation.md) — **콘솔에서 손댄 것을 잡아낸다.** 코드와 실물이 어긋나는 사고를 막는 장치
- [ ] [19 Detect drift in CloudFormation stack.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/19%20Detect%20drift%20in%20CloudFormation%20stack.md)

## 10-D. 파이프라인으로 배포하기

- [ ] [22 AWS CodePipeline.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/22%20AWS%20CodePipeline.md)
- [ ] [23 Monitoring and Logging CloudFormation Deployments.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/23%20Monitoring%20and%20Logging%20CloudFormation%20Deployments.md) — **Phase 9의 관측이 인프라 배포에도 붙는다**
- [ ] [02 CI-CD Fundamentals for SRE.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%206%20-%20CI-CD%20&%20Chaos%20Engineering/02%20CI-CD%20Fundamentals%20for%20SRE.md)

파이프라인 자체를 깊게 파려면 [데브옵스 로드맵](../%EB%8D%B0%EB%B8%8C%EC%98%B5%EC%8A%A4%20%EB%A1%9C%EB%93%9C%EB%A7%B5/)으로 간다. 여기서는 **네트워크 변경이 파이프라인을 타고 나가는 것**까지만 본다.

## 산출물

**"Phase 7의 VPC를 코드로 재현" — 이 로드맵의 마지막 산출물이다.**

1. Phase 7에서 손으로 만든 VPC 구성(서브넷 4종 × AZ 2곳, 라우팅 테이블, 인터넷 게이트웨이, NAT, 보안그룹, 로드밸런서)을 **전부 코드로 선언**한다
2. `plan` 출력을 붙이고, **적용 전에 몇 개의 리소스가 생기는지 예측한 값과 실제 값을 비교**한다
3. `destroy` 로 전부 지운 뒤 `apply` 로 다시 세운다. **두 번째 구축이 처음과 동일하게 동작하는지** Phase 9의 진단 절차서로 검증한다
4. 콘솔에서 보안그룹 규칙 하나를 손으로 바꾼 뒤 **드리프트가 탐지되는 것**을 확인하고, 코드 쪽으로 되돌린다
5. 상태 파일을 원격 백엔드로 옮기고, **비밀이 상태 파일에 평문으로 남지 않도록** 처리한 방법을 적는다
6. 코드를 저장소에 올리고, PR을 올리면 `plan` 이 자동으로 돌아 **리뷰어가 변경 내용을 볼 수 있는** 파이프라인을 만든다

## 로드맵 완주 후

이 시점에서 도착점에 도달했다. 다음으로 갈 만한 곳:

- **서비스 메시와 gRPC** — 서비스가 수십 개로 늘었을 때의 네트워킹. 저장소에는 [`02 Service Mesh and Istio`](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%206%20-%20Optional%20-%20OpenShift%20Essentials%20-%20Working%20with%20OpenShift%20and%20Istio/02%20Service%20Mesh%20and%20Istio.md) 한 강의뿐이다
- **[데브옵스 로드맵](../%EB%8D%B0%EB%B8%8C%EC%98%B5%EC%8A%A4%20%EB%A1%9C%EB%93%9C%EB%A7%B5/)** — 이 인프라 위로 코드를 자동 배포하는 쪽
- **개발운영 로드맵** — 관측과 사고 대응을 더 깊게
- **[11 부록 - L2와 라우터 내부](11%20%EB%B6%80%EB%A1%9D%20-%20L2%EC%99%80%20%EB%9D%BC%EC%9A%B0%ED%84%B0%20%EB%82%B4%EB%B6%80.md)** — "왜 이렇게 동작하는가"가 남았다면
