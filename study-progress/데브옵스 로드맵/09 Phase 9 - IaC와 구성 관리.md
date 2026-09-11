# Phase 9 — IaC와 구성 관리 (Terraform · CloudFormation · Ansible)

- 목표: 클러스터와 그 밑의 인프라를 손으로 만들지 않고 코드로 만든다. 지워도 같은 코드로 똑같이 복원되는 상태를 만든다.
- 분량: 약 12~14시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- IaC가 해결하는 문제(환경 불일치·재현 불가·문서 부패)를 설명할 수 있다.
- Terraform으로 클라우드 리소스를 만들고, 바꾸고, 지울 수 있다.
- Terraform 상태(state) 파일이 왜 위험하고 어떻게 관리해야 하는지 안다.
- 모듈로 인프라 코드를 재사용 가능하게 만들 수 있다.
- Ansible 플레이북으로 서버 구성을 반복 가능하게 만들 수 있다.
- Terraform과 Ansible의 역할 경계를 그을 수 있다.
- IaC 코드에서 비밀값을 다루는 방법을 안다.

> **비용 주의.** 이 Phase의 실습은 AWS에 실제 리소스를 만든다. 실습마다 끝에 `terraform destroy` 또는 스택 삭제를 반드시 실행한다. 예산 알림을 미리 걸어 두는 편이 안전하다.
>
> **컨테이너 시대에도 필요한 이유**: Phase 7에서 클러스터를 웹 콘솔에서 클릭해 만들었다. 그 클러스터를 지우면 다시 만들 수 없다. 이 Phase가 그 문제를 해결한다.

## 9-A. IaC 개념

메인: Master DevOps, Course 3, Module 1 (앞부분)

- [ ] [01 Specialization Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/01%20Specialization%20Introduction.md)
- [ ] [02 Welcome to Infrastructure as Code and Monitoring.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/02%20Welcome%20to%20Infrastructure%20as%20Code%20and%20Monitoring.md)
- [ ] [03 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/03%20Course%20Introduction.md)
- [ ] [04 Overview of Infrastructure as Code - Core Elements.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/04%20Overview%20of%20Infrastructure%20as%20Code%20-%20Core%20Elements.md) — **IaC의 핵심 요소** — 선언형·멱등성·버전 관리
- [ ] [05 Overview of Infrastructure as Code - Challenges and Tools.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/05%20Overview%20of%20Infrastructure%20as%20Code%20-%20Challenges%20and%20Tools.md) — 도구 지형도와 어려운 점
- [ ] [06 Role of IaC in DevOps.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/06%20Role%20of%20IaC%20in%20DevOps.md) — **DevOps 파이프라인에서 IaC의 자리** — [Phase 1-B](01%20Phase%201%20-%20DevOps%20%EA%B0%9C%EB%85%90%EA%B3%BC%20%EB%A6%AC%EB%88%85%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md)의 「구성 관리」 단계가 이것이다
- [ ] [07 Infrastructure Code Processing Lifecycle - Analysis and Design.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/07%20Infrastructure%20Code%20Processing%20Lifecycle%20-%20Analysis%20and%20Design.md) — 인프라 코드도 생애주기가 있다 — 설계와 리뷰
- [ ] [08 Infrastructure Code Processing Lifecycle - Implementation, Testing and Deployment.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/08%20Infrastructure%20Code%20Processing%20Lifecycle%20-%20Implementation,%20Testing%20and%20Deployment.md) — **인프라 코드 테스트** — 애플리케이션 코드처럼 테스트한다는 발상

함께 보기

- [ ] [07 Infrastructure as Code (IaC).md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/07%20Infrastructure%20as%20Code%20%28IaC%29.md) — IBM 강좌의 IaC 요약 — 짧다

- [ ] [04 Infrastructure as Code.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%203%20-%20Introduction%20to%20DevOps%20-%20Working%20DevOps/04%20Infrastructure%20as%20Code.md)

- [ ] [05 Introduction to SRE Automation.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/05%20Introduction%20to%20SRE%20Automation.md)
- [ ] [06 Infrastructure as Code (IaC).md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/06%20Infrastructure%20as%20Code%20%28IaC%29.md) — SRE 관점의 IaC
- [ ] [07 Configuration Management in SRE.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/07%20Configuration%20Management%20in%20SRE.md) — **구성 관리와 IaC의 구분** — 9-E의 판단 기준이 여기서 나온다
- [ ] [08 SRE Automation - Key Areas and Types.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/08%20SRE%20Automation%20-%20Key%20Areas%20and%20Types.md)
- [ ] [09 SRE Automation - Pipelines, Monitoring, Scaling, and Incident Response.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/09%20SRE%20Automation%20-%20Pipelines,%20Monitoring,%20Scaling,%20and%20Incident%20Response.md) — 자동화 대상 — 파이프라인·모니터링·스케일링·장애 대응

## 9-B. Terraform

메인: Master DevOps, Course 3, Module 1 (33개 강의)

- [ ] [09 Introduction to Terraform.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/09%20Introduction%20to%20Terraform.md) — **Terraform 개념**
- [ ] [12 Terraform Architecture - Key Components.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/12%20Terraform%20Architecture%20-%20Key%20Components.md) — 아키텍처 — 프로바이더·리소스·플랜
- [ ] [13 Terraform Architecture - State Management.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/13%20Terraform%20Architecture%20-%20State%20Management.md) — **상태(state) 관리** — Terraform에서 가장 중요하고 가장 사고가 잦은 부분. 상태 파일을 잃으면 인프라를 통제할 수 없게 된다
- [ ] [14 Creating an AWS Account.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/14%20Creating%20an%20AWS%20Account.md) — AWS 계정 준비 — **예산 알림을 먼저 걸어 둔다**
- [ ] [15 Setting up Terraform on AWS - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/15%20Setting%20up%20Terraform%20on%20AWS%20-%20Demonstration.md)
- [ ] [16 How to use Discussion Prompt.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/16%20How%20to%20use%20Discussion%20Prompt.md)
- [ ] [17 Terraform Configuration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/17%20Terraform%20Configuration.md) — 설정 문법 (HCL)
- [ ] [18 Terraform Basic Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/18%20Terraform%20Basic%20Commands.md) — **기본 명령** — `init`·`plan`·`apply`·`destroy`. `plan`을 항상 먼저 읽는 습관이 사고를 막는다
- [ ] [19 Writing and Running a Terraform Configuration - Terraform extension in VS Code.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/19%20Writing%20and%20Running%20a%20Terraform%20Configuration%20-%20Terraform%20extension%20in%20VS%20Code.md)
- [ ] [20 Writing and Running a Terraform Configuration - Configuring EC2 Instance.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/20%20Writing%20and%20Running%20a%20Terraform%20Configuration%20-%20Configuring%20EC2%20Instance.md) — 첫 리소스 (EC2 인스턴스) 만들기

리소스 관리와 구조화

- [ ] [21 Managing Resources in Terraform.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/21%20Managing%20Resources%20in%20Terraform.md)
- [ ] [22 Modifying Resources in Terraform - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/22%20Modifying%20Resources%20in%20Terraform%20-%20Demonstration.md) — **리소스 수정** — `plan`에서 「replace」가 나오면 무엇이 삭제·재생성되는지 반드시 확인한다
- [ ] [23 Meta Arguments in Resources.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/23%20Meta%20Arguments%20in%20Resources.md) — 메타 인수 — `count`·`for_each`·`depends_on`
- [ ] [24 Referencing Resources in Terraform - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/24%20Referencing%20Resources%20in%20Terraform%20-%20Demonstration.md)
- [ ] [25 Terraform Configuration Best Practices - Structuring and Organizing Code for Scalability.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/25%20Terraform%20Configuration%20Best%20Practices%20-%20Structuring%20and%20Organizing%20Code%20for%20Scalability.md) — **코드 구조화 관례** — 규모가 커질 때 필수
- [ ] [26 Terraform State Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/26%20Terraform%20State%20Commands.md) — 상태 명령
- [ ] [27 Terraform State subcommands - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/27%20Terraform%20State%20subcommands%20-%20Demonstration.md)
- [ ] [28 Terraform Modules.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/28%20Terraform%20Modules.md) — **모듈** — 재사용 단위. VPC·클러스터 같은 묶음을 한 번 만들고 여러 곳에서 쓴다
- [ ] [29 Terraform Provisioners.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/29%20Terraform%20Provisioners.md) — 프로비저너 — 되도록 안 쓰는 게 낫다는 것까지 알아 둔다

배포와 비밀값

- [ ] [30 Infrastructure Deployment with Terraform.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/30%20Infrastructure%20Deployment%20with%20Terraform.md) — **전체 인프라 배포**
- [ ] [31 Infrastructure Deployment with Terraform - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/31%20Infrastructure%20Deployment%20with%20Terraform%20-%20Demonstration.md)
- [ ] [32 Managing Secrets in Terraform - Best Practices and Tools.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/32%20Managing%20Secrets%20in%20Terraform%20-%20Best%20Practices%20and%20Tools.md) — **Terraform에서 시크릿 다루기** — 상태 파일에 평문으로 남는 문제와 대응. [Phase 10](10%20Phase%2010%20-%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%99%80%20%EB%B3%B4%EC%95%88%20%EA%B2%8C%EC%9D%B4%ED%8A%B8.md)과 이어진다
- [ ] [33 Summary - Provisioning using Terraform.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/33%20Summary%20-%20Provisioning%20using%20Terraform.md)

## 9-C. AWS CloudFormation

메인: Master DevOps, Course 3, Module 2 (25개 강의)

AWS만 쓴다면 Terraform 대신 이쪽을 택할 수 있다. **Terraform을 이미 익혔다면 개념 대응만 확인하고 빠르게 훑어도 된다.**

- [ ] [01 Introduction to AWS CloudFormation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/01%20Introduction%20to%20AWS%20CloudFormation.md) — **CloudFormation 개념** — Terraform의 `plan/apply`에 대응하는 것이 change set / stack
- [ ] [02 CloudFormation Templates.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/02%20CloudFormation%20Templates.md) — 템플릿
- [ ] [03 Stack in CloudFormation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/03%20Stack%20in%20CloudFormation.md) — **스택** — Terraform 상태에 해당하는 개념. AWS가 대신 관리해 준다는 점이 가장 큰 차이
- [ ] [04 Stacks Activities.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/04%20Stacks%20Activities.md)
- [ ] [05 Creating and Managing CloudFormation Stack.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/05%20Creating%20and%20Managing%20CloudFormation%20Stack.md)
- [ ] [09 CloudFormation Parameters and Outputs.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/09%20CloudFormation%20Parameters%20and%20Outputs.md) — 파라미터와 출력 — 환경별 값 분리
- [ ] [10 Creating an AWS CloudFormation stack to provision an EC2 instance.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/10%20Creating%20an%20AWS%20CloudFormation%20stack%20to%20provision%20an%20EC2%20instance.md) — 첫 스택으로 EC2 만들기
- [ ] [11 Intrinsic Functions in CloudFormation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/11%20Intrinsic%20Functions%20in%20CloudFormation.md)
- [ ] [12 CloudFormation Mappings.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/12%20CloudFormation%20Mappings.md)
- [ ] [14 CloudFormation Conditions.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/14%20CloudFormation%20Conditions.md)

운영 기능 — Terraform에 없거나 다른 부분

- [ ] [06 Managing stacks with StackSets.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/06%20Managing%20stacks%20with%20StackSets.md) — StackSets — 여러 계정·리전에 같은 스택
- [ ] [07 Managing stacks with StackSets - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/07%20Managing%20stacks%20with%20StackSets%20-%20Demonstration.md)
- [ ] [08 Understanding AWS CloudFormation StackSets - Service-Managed vs. Self-Managed.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/08%20Understanding%20AWS%20CloudFormation%20StackSets%20-%20Service-Managed%20vs.%20Self-Managed.md)
- [ ] [15 Nested Stacks in CloudFormation Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/15%20Nested%20Stacks%20in%20CloudFormation%20Demonstration.md) — 중첩 스택 — Terraform 모듈에 대응
- [ ] [17 Stack Policies and Change Sets.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/17%20Stack%20Policies%20and%20Change%20Sets.md) — **스택 정책과 change set** — 실수로 DB를 지우는 것을 막는 장치
- [ ] [18 Drift Detection in CloudFormation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/18%20Drift%20Detection%20in%20CloudFormation.md) — **드리프트 감지** — 누가 콘솔에서 손으로 바꿨는지 찾는다. IaC를 도입해도 이게 없으면 코드와 현실이 갈라진다
- [ ] [19 Detect drift in CloudFormation stack.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/19%20Detect%20drift%20in%20CloudFormation%20stack.md)
- [ ] [20 Automating Rollbacks and Updates.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/20%20Automating%20Rollbacks%20and%20Updates.md) — **자동 롤백** — 배포 실패 시 이전 상태로
- [ ] [21 Managing CloudFormation Stacks with AWS CLI.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/21%20Managing%20CloudFormation%20Stacks%20with%20AWS%20CLI.md)
- [ ] [22 AWS CodePipeline.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/22%20AWS%20CodePipeline.md) — AWS CodePipeline — 인프라 변경도 파이프라인으로
- [ ] [23 Monitoring and Logging CloudFormation Deployments.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/23%20Monitoring%20and%20Logging%20CloudFormation%20Deployments.md)
- [ ] [24 Managing CloudFormation Stacks Across Multiple Accounts and Regions with StackSets.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/24%20Managing%20CloudFormation%20Stacks%20Across%20Multiple%20Accounts%20and%20Regions%20with%20StackSets.md)
- [ ] [25 Summary - Infrastructure as Code with AWS CloudFormation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%202%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation/25%20Summary%20-%20Infrastructure%20as%20Code%20with%20AWS%20CloudFormation.md)

## 9-D. Ansible — 서버 구성 관리

메인: Master DevOps, Course 2, Module 3 (24개 강의)

- [ ] [01 Scenario of an IT Company.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/01%20Scenario%20of%20an%20IT%20Company.md)
- [ ] [02 Introduction to Configuration Management.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/02%20Introduction%20to%20Configuration%20Management.md) — **구성 관리란 무엇인가** — 「서버 100대에 같은 설정을 넣기」 문제
- [ ] [03 Infrastructure as Code.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/03%20Infrastructure%20as%20Code.md) — IaC와의 관계
- [ ] [04 Schwarz Group Automating Growth.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/04%20Schwarz%20Group%20Automating%20Growth.md)
- [ ] [05 Comparative Analysis of Configuration Management Tools - Ansible vs Others.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/05%20Comparative%20Analysis%20of%20Configuration%20Management%20Tools%20-%20Ansible%20vs%20Others.md) — **도구 비교** (Ansible·Chef·Puppet·SaltStack) — 에이전트 없는 구조가 Ansible의 채택 이유
- [ ] [06 Introduction to Ansible.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/06%20Introduction%20to%20Ansible.md)
- [ ] [07 Ansible Architecture - Modules and Playbooks.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/07%20Ansible%20Architecture%20-%20Modules%20and%20Playbooks.md) — **모듈과 플레이북**
- [ ] [08 Ansible Architecture - Inventory and Plugins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/08%20Ansible%20Architecture%20-%20Inventory%20and%20Plugins.md) — 인벤토리 — 대상 서버 목록
- [ ] [09 Automation Using Ansible.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/09%20Automation%20Using%20Ansible.md)
- [ ] [10 Ad-Hoc Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/10%20Ad-Hoc%20Commands.md) — 애드혹 명령 — 플레이북 없이 한 번만
- [ ] [11 Ansible Best Practices for Beginners.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/11%20Ansible%20Best%20Practices%20for%20Beginners.md)

플레이북 작성

- [ ] [12 Ansible Playbooks.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/12%20Ansible%20Playbooks.md) — **플레이북** — 원하는 상태를 YAML로 선언
- [ ] [13 Playbook Structure.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/13%20Playbook%20Structure.md) — 구조
- [ ] [14 Running a Simple Playbook.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/14%20Running%20a%20Simple%20Playbook.md)
- [ ] [15 Variables.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/15%20Variables.md) — 변수 — 환경별 차이 처리
- [ ] [16 Variables in Ansible - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/16%20Variables%20in%20Ansible%20-%20Demonstration.md)
- [ ] [17 Handlers.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/17%20Handlers.md) — **핸들러** — 「설정이 바뀌었을 때만 서비스 재시작」. 멱등성의 실전 형태
- [ ] [18 Handlers in Ansible - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/18%20Handlers%20in%20Ansible%20-%20Demonstration.md)
- [ ] [19 Ansible Roles.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/19%20Ansible%20Roles.md) — **롤(role)** — 재사용 단위. Terraform 모듈에 대응
- [ ] [20 Ansible Roles - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/20%20Ansible%20Roles%20-%20Demonstration.md)
- [ ] [23 Advanced Features in Ansible Playbooks.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/23%20Advanced%20Features%20in%20Ansible%20Playbooks.md)
- [ ] [24 Summary - Configuration Management with Ansible.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/24%20Summary%20-%20Configuration%20Management%20with%20Ansible.md)

CI/CD와 붙이기

- [ ] [21 Integrating Ansible and Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/21%20Integrating%20Ansible%20and%20Jenkins.md) — **Jenkins에서 Ansible 실행** — 배포 파이프라인에 구성 관리를 끼워 넣는다
- [ ] [22 Integrating Ansible and Jenkins - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%203%20-%20Configuration%20Management%20with%20Ansible/22%20Integrating%20Ansible%20and%20Jenkins%20-%20Demonstration.md)

함께 보기: SRE 강좌의 Ansible 실습

- [ ] [10 Demo - Automating SRE with Ansible and HTTPS Nginx.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/10%20Demo%20-%20Automating%20SRE%20with%20Ansible%20and%20HTTPS%20Nginx.md) — Ansible로 Nginx + HTTPS 자동 구성 — 짧고 실전적인 예제

## 9-E. Terraform과 Ansible, 무엇을 어디에

메인: Master DevOps, Course 3, Module 1 (비교 강의)

- [ ] [10 Terraform vs Ansible - Differences and Similarities.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/10%20Terraform%20vs%20Ansible%20-%20Differences%20and%20Similarities.md) — **차이와 공통점**
- [ ] [11 Terraform vs Ansible - Configuration Approach and Use Cases.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%201%20-%20Provisioning%20using%20Terraform/11%20Terraform%20vs%20Ansible%20-%20Configuration%20Approach%20and%20Use%20Cases.md) — **접근 방식과 사용 사례** — 이 Phase의 산출물 2번의 근거

> **실무 경험 법칙**: 리소스를 **만드는** 일(VPC, 클러스터, DB 인스턴스)은 Terraform. 만들어진 서버 **안을 채우는** 일(패키지, 설정 파일, 서비스)은 Ansible. 단, 쿠버네티스를 쓰면 「안을 채우는」 일의 대부분이 컨테이너 이미지(Phase 4)로 이동해 Ansible의 몫이 줄어든다.

## 9-F. 정리

- [ ] [01 Course Summary.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%204%20-%20Course%20Wrap-Up%20and%20Assessment/01%20Course%20Summary.md)
- [ ] [02 Practice Project - CloudNova DevOps Enablement through IaC and Monitoring.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%204%20-%20Course%20Wrap-Up%20and%20Assessment/02%20Practice%20Project%20-%20CloudNova%20DevOps%20Enablement%20through%20IaC%20and%20Monitoring.md) — **실습 프로젝트** — IaC와 모니터링 종합

## 산출물 과제

1. **Terraform으로 인프라 만들기** — Phase 7에서 콘솔로 만든 클러스터(또는 최소한 VPC + 서버 1대)를 Terraform 코드로 다시 만든다. `destroy` 후 `apply`로 같은 상태가 복원되는 것을 확인한다.
2. **역할 경계 문서 1장** — 담당 시스템의 구성 요소를 나열하고, 각각을 「Terraform / Ansible / 컨테이너 이미지 / 쿠버네티스 매니페스트」 중 어디서 관리할지 배정한다. 중복 관리되는 항목이 있으면 하나로 정리한다.
3. **상태 파일 원격 저장** — 로컬 `terraform.tfstate`를 원격 백엔드(S3 등)로 옮기고 잠금(locking)을 설정한다. **팀으로 쓰려면 필수다.**
4. **드리프트 실험** — 콘솔에서 리소스 설정을 손으로 바꾼 뒤 `terraform plan`을 돌려 차이가 잡히는지 확인한다. 이때 어떻게 대응할지(코드에 반영 / 되돌리기) 팀 규칙을 한 줄로 정한다.
5. **비밀값 처리** — 데이터베이스 비밀번호를 IaC 코드에 평문으로 두지 않는 방법 하나를 적용한다. → [Phase 10](10%20Phase%2010%20-%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%99%80%20%EB%B3%B4%EC%95%88%20%EA%B2%8C%EC%9D%B4%ED%8A%B8.md)

## 다음 단계

→ [10 Phase 10 - 테스트와 보안 게이트](10%20Phase%2010%20-%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%99%80%20%EB%B3%B4%EC%95%88%20%EA%B2%8C%EC%9D%B4%ED%8A%B8.md)
