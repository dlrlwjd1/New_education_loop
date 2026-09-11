# Phase 8 — CD 파이프라인과 GitOps

- 목표: Phase 7에서 만든 배포를 더 나은 구조로 바꾼다. 배포 전략을 고를 수 있고, 파이프라인을 클러스터 안에서 돌리고, Git을 유일한 진실 원본으로 삼는다.
- 분량: 약 5~6시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 지속적 배포(continuous deployment)와 지속적 제공(continuous delivery)의 차이를 설명할 수 있다.
- 블루-그린·카나리 배포를 언제 쓰는지 판단할 수 있다.
- Jenkins로 배포 단계까지 파이프라인을 확장할 수 있다.
- Tekton처럼 쿠버네티스 안에서 도는 파이프라인의 구조를 이해한다.
- GitOps 방식(ArgoCD)이 push 방식 배포와 무엇이 다른지, 무엇이 좋아지는지 설명할 수 있다.

> **Phase 7 없이 이 Phase를 먼저 보지 않는다.** 여기 내용은 「이미 도는 배포를 더 낫게 만드는 방법」이라, 도는 배포가 없으면 비교 대상이 없어 남지 않는다.

## 8-A. CD란 무엇인가

메인: IBM Continuous Integration and Delivery, Module 3 (앞부분)

- [ ] [01 Module 3 Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/01%20Module%203%20Introduction.md)
- [ ] [02 What Is Continuous Delivery (CD).md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/02%20What%20Is%20Continuous%20Delivery%20%28CD%29.md) — **정의와 경계** — delivery(제공)와 deployment(배포)의 구분. 승인 게이트가 어디 있느냐의 문제다
- [ ] [03 Continuous Delivery Key Principles.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/03%20Continuous%20Delivery%20Key%20Principles.md) — 핵심 원칙
- [ ] [04 Continuous Delivery Practices.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/04%20Continuous%20Delivery%20Practices.md) — 실천 방법
- [ ] [05 Tools of Continuous Delivery (CD).md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/05%20Tools%20of%20Continuous%20Delivery%20%28CD%29.md) — 도구 지형도
- [ ] [06 Summary and Highlights - Understanding Continuous Delivery.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/06%20Summary%20and%20Highlights%20-%20Understanding%20Continuous%20Delivery.md)

- [ ] [06 Continuous Delivery.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%203%20-%20Introduction%20to%20DevOps%20-%20Working%20DevOps/06%20Continuous%20Delivery.md) — IBM DevOps 강좌의 CD 개념 요약

## 8-B. 배포 전략 — 블루-그린과 카나리

메인: Foundations of Site Reliability Engineering, Module 4 (앞부분)

배포 전략을 정면으로 다루는 자료는 SRE 강좌 쪽에 있다. 나머지는 **개발운영 로드맵**에서 다루고, 여기서는 배포 전략 부분만 가져온다.

- [ ] [02 Introduction to Reliability Engineering.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/02%20Introduction%20to%20Reliability%20Engineering.md)
- [ ] [03 Deployment Strategies in Reliability Engineering.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/03%20Deployment%20Strategies%20in%20Reliability%20Engineering.md) — **배포 전략 비교** — 롤링·블루-그린·카나리. Phase 5의 롤링 업데이트가 왜 기본값인지, 언제 부족한지
- [ ] [04 Demo - Implementing SRE with Blue-Green and Canary Deployment.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%204%20-%20Reliability%20Engineering%20%26%20Deployments/04%20Demo%20-%20Implementing%20SRE%20with%20Blue-Green%20and%20Canary%20Deployment.md) — **블루-그린과 카나리 실습** — 트래픽을 조금만 보내 확인하고 늘리는 구조

## 8-C. Jenkins로 배포까지

메인: Master DevOps, Course 2, Module 2 (배포 부분)

Phase 3-C에서 CI까지 봤다. 나머지가 여기다.

- [ ] [30 Continuous Deployment Using Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/30%20Continuous%20Deployment%20Using%20Jenkins.md) — **Jenkins로 지속적 배포**
- [ ] [31 Continuous Deployment Using Jenkins Pipelines - Configuring Source Code.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/31%20Continuous%20Deployment%20Using%20Jenkins%20Pipelines%20-%20Configuring%20Source%20Code.md)
- [ ] [32 Continuous Deployment Using Jenkins Pipelines - Building Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/32%20Continuous%20Deployment%20Using%20Jenkins%20Pipelines%20-%20Building%20Pipeline.md) — 파이프라인으로 배포까지 — Phase 7의 GitHub Actions 버전과 비교해 본다

## 8-D. Tekton — 쿠버네티스 안에서 도는 파이프라인

메인: IBM Continuous Integration and Delivery, Module 3 (뒷부분)

Jenkins는 클러스터 밖의 서버다. Tekton은 파이프라인 자체를 쿠버네티스 리소스로 정의한다. **이 접근을 다루는 자료는 저장소에서 여기뿐이다.**

- [ ] [07 Introduction to Tekton and Pipelines.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/07%20Introduction%20to%20Tekton%20and%20Pipelines.md) — **Tekton 개념** — Task·Pipeline·PipelineRun이 모두 CRD(쿠버네티스 리소스)다
- [ ] [08 Building a Tekton Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/08%20Building%20a%20Tekton%20Pipeline.md) — 파이프라인 만들기
- [ ] [09 Creating Tekton Triggers.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/09%20Creating%20Tekton%20Triggers.md) — **트리거** — 웹훅을 받아 파이프라인 실행
- [ ] [10 Leveraging the Tekton Catalog.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/10%20Leveraging%20the%20Tekton%20Catalog.md) — 카탈로그 — 기성 Task 재사용
- [ ] [11 Creating Tasks for Quality Checks and Testing.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/11%20Creating%20Tasks%20for%20Quality%20Checks%20and%20Testing.md) — **품질 검사 Task** → Phase 10과 이어진다
- [ ] [12 Building an Image.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/12%20Building%20an%20Image.md) — 이미지 빌드 Task
- [ ] [13 Deploying to Kubernetes.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/13%20Deploying%20to%20Kubernetes.md) — **쿠버네티스 배포 Task**
- [ ] [14 Summary and Highlights - Implementing Pipelines with Tekton.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%203%20-%20Continuous%20Delivery/14%20Summary%20and%20Highlights%20-%20Implementing%20Pipelines%20with%20Tekton.md)

## 8-E. GitOps와 ArgoCD

메인: IBM Continuous Integration and Delivery, Module 4

- [ ] [01 Introduction to DevOps and GitOps with OpenShift.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%204%20-%20Explore%20DevOps%20Pipeline%20Tools%20and%20Best%20Practices/01%20Introduction%20to%20DevOps%20and%20GitOps%20with%20OpenShift.md)
- [ ] [02 Components of DevOps Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%204%20-%20Explore%20DevOps%20Pipeline%20Tools%20and%20Best%20Practices/02%20Components%20of%20DevOps%20Pipeline.md) — 파이프라인 구성 요소 정리
- [ ] [03 CI-CD with OpenShift Pipelines.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%204%20-%20Explore%20DevOps%20Pipeline%20Tools%20and%20Best%20Practices/03%20CI-CD%20with%20OpenShift%20Pipelines.md) — OpenShift Pipelines (= Tekton)
- [ ] [04 Introduction to GitOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%204%20-%20Explore%20DevOps%20Pipeline%20Tools%20and%20Best%20Practices/04%20Introduction%20to%20GitOps.md) — **GitOps** — CI가 클러스터에 밀어 넣는(push) 대신, 클러스터가 Git을 보고 스스로 맞춘다(pull). Phase 7-D의 「파이프라인이 클러스터 자격 증명을 갖는」 문제가 사라진다
- [ ] [05 GitOps with ArgoCD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%204%20-%20Explore%20DevOps%20Pipeline%20Tools%20and%20Best%20Practices/05%20GitOps%20with%20ArgoCD.md) — **ArgoCD** — GitOps 구현체. 선언한 상태와 실제 상태의 차이를 계속 맞춘다
- [ ] [06 Summary and Highlights - Explore DevOps Pipeline Tools and Best Practices.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%204%20-%20Explore%20DevOps%20Pipeline%20Tools%20and%20Best%20Practices/06%20Summary%20and%20Highlights%20-%20Explore%20DevOps%20Pipeline%20Tools%20and%20Best%20Practices.md)

- [ ] [01 Final Project.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%205%20-%20Final%20Project/01%20Final%20Project.md) — 최종 프로젝트

## 8-F. 마이크로서비스와 서버리스 — 배포 단위의 다른 선택

함께 보기: IBM Microservices and Serverless

쿠버네티스가 항상 정답은 아니다. 배포 단위를 무엇으로 잡을지의 선택지를 보는 묶음이다.

- [ ] [01 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%201%20-%20Introduction%20to%20Microservices/01%20Course%20Introduction.md)
- [ ] [02 Twelve-Factor App Methodology.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%201%20-%20Introduction%20to%20Microservices/02%20Twelve-Factor%20App%20Methodology.md) — **12-Factor App** — 설정을 환경 변수로, 로그를 표준 출력으로. Phase 6-E와 **운영 로드맵**의 로깅이 모두 이 원칙에서 나온다
- [ ] [03 What are Microservices.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%201%20-%20Introduction%20to%20Microservices/03%20What%20are%20Microservices.md)
- [ ] [04 Comparison of Monolith vs. SOA vs. Microservices.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%201%20-%20Introduction%20to%20Microservices/04%20Comparison%20of%20Monolith%20vs.%20SOA%20vs.%20Microservices.md) — 모놀리스 vs SOA vs 마이크로서비스 — **분해하지 않는 것도 선택이다**
- [ ] [05 Microservices Patterns.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%201%20-%20Introduction%20to%20Microservices/05%20Microservices%20Patterns.md) — 패턴 정리

- [ ] [01 Introduction to Serverless Computing.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%203%20-%20Serverless%20Overview/01%20Introduction%20to%20Serverless%20Computing.md) — **서버리스** — 컨테이너도 클러스터도 없는 배포. 언제 이쪽이 나은가
- [ ] [02 Serverless Pros and Cons.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%203%20-%20Serverless%20Overview/02%20Serverless%20Pros%20and%20Cons.md)
- [ ] [03 Introduction to the FaaS Model.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%203%20-%20Serverless%20Overview/03%20Introduction%20to%20the%20FaaS%20Model.md)
- [ ] [04 The Serverless Framework.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%203%20-%20Serverless%20Overview/04%20The%20Serverless%20Framework.md)
- [ ] [05 Serverless Reference Architecture and Use Cases.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%203%20-%20Serverless%20Overview/05%20Serverless%20Reference%20Architecture%20and%20Use%20Cases.md)
- [ ] [06 Popular Serverless Platforms.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%203%20-%20Serverless%20Overview/06%20Popular%20Serverless%20Platforms.md)

- [ ] [01 IBM Cloud Code Engine.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%204%20-%20Create%20and%20Deploy%20Microservices%20using%20Serverless/01%20IBM%20Cloud%20Code%20Engine.md)
- [ ] [02 Project, Application, Build, and Jobs.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%204%20-%20Create%20and%20Deploy%20Microservices%20using%20Serverless/02%20Project,%20Application,%20Build,%20and%20Jobs.md)
- [ ] [03 Building Container Images for Microservices.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%204%20-%20Create%20and%20Deploy%20Microservices%20using%20Serverless/03%20Building%20Container%20Images%20for%20Microservices.md)
- [ ] [04 Deploying and Running Applications.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%204%20-%20Create%20and%20Deploy%20Microservices%20using%20Serverless/04%20Deploying%20and%20Running%20Applications.md)
- [ ] [05 Updating Deployed Applications.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%204%20-%20Create%20and%20Deploy%20Microservices%20using%20Serverless/05%20Updating%20Deployed%20Applications.md)

- [ ] [01 Red Hat OpenShift Recap.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%206%20-%20Optional%20-%20OpenShift%20Essentials%20-%20Working%20with%20OpenShift%20and%20Istio/01%20Red%20Hat%20OpenShift%20Recap.md)
- [ ] [02 Service Mesh and Istio.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%206%20-%20Optional%20-%20OpenShift%20Essentials%20-%20Working%20with%20OpenShift%20and%20Istio/02%20Service%20Mesh%20and%20Istio.md) — **서비스 메시(Istio)** — 트래픽 분할·재시도·mTLS를 애플리케이션 코드 밖으로. 카나리 배포(8-B)의 정교한 구현 수단
- [ ] [03 Microservices with OpenShift.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%206%20-%20Optional%20-%20OpenShift%20Essentials%20-%20Working%20with%20OpenShift%20and%20Istio/03%20Microservices%20with%20OpenShift.md)

- [ ] [01 Introduction to Red Hat OpenShift.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%204%20-%20The%20Kubernetes%20Ecosystem%20-%20OpenShift,%20Istio,%20etc/01%20Introduction%20to%20Red%20Hat%20OpenShift.md) — OpenShift — 쿠버네티스에 개발자 도구와 보안 기본값을 얹은 배포판
- [ ] [02 Builds.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%204%20-%20The%20Kubernetes%20Ecosystem%20-%20OpenShift,%20Istio,%20etc/02%20Builds.md)
- [ ] [03 Operators.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%204%20-%20The%20Kubernetes%20Ecosystem%20-%20OpenShift,%20Istio,%20etc/03%20Operators.md) — **오퍼레이터** — 운영 지식을 코드로 넣어 클러스터가 스스로 관리하게 하는 패턴
- [ ] [04 Istio.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%204%20-%20The%20Kubernetes%20Ecosystem%20-%20OpenShift,%20Istio,%20etc/04%20Istio.md) — Istio 요약

## 8-G. SRE 관점의 CI/CD

함께 보기: Foundations of Site Reliability Engineering, Module 6 (CI/CD 부분)

- [ ] [02 CI-CD Fundamentals for SRE.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/02%20CI-CD%20Fundamentals%20for%20SRE.md) — **신뢰성 관점에서 본 CI/CD** — 속도가 아니라 「안전하게 자주」가 목표라는 시각
- [ ] [03 Operationalizing CI-CD for SRE Teams.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/03%20Operationalizing%20CI-CD%20for%20SRE%20Teams.md) — 운영에 올릴 때의 실제 절차
- [ ] [04 CI-CD Tooling and Automation for SRE Teams.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%206%20-%20CI-CD%20%26%20Chaos%20Engineering/04%20CI-CD%20Tooling%20and%20Automation%20for%20SRE%20Teams.md)

> 카오스 엔지니어링(08~12번)은 **개발운영 로드맵**에서 다룬다.

## 산출물 과제

1. **배포 전략 선택 문서 1장** — 담당 서비스에 롤링·블루-그린·카나리 중 무엇을 쓸지 정하고, 근거와 필요한 조건(트래픽 분할 수단, 관측 지표, 롤백 기준)을 쓴다.
2. **승인 게이트 설계** — Phase 7의 파이프라인에서 어디까지 자동이고 어디에 사람 승인을 둘지 정한다. 「전부 자동」이 답이 아닐 수 있는 이유를 한 문단으로 쓴다.
3. **GitOps 비교 메모** — 지금 파이프라인(push 방식)과 GitOps(pull 방식)를 비교해, 우리 상황에서 옮길 가치가 있는지 판단하고 근거를 쓴다. 특히 **클러스터 자격 증명을 CI에 두는 위험**을 어떻게 다룰지 포함한다.
4. (선택) **ArgoCD 또는 Tekton 중 하나를 로컬 클러스터에 설치**해 Phase 6-G의 Helm 차트를 배포해 본다.

## 다음 단계

→ [09 Phase 9 - IaC와 구성 관리](09%20Phase%209%20-%20IaC%EC%99%80%20%EA%B5%AC%EC%84%B1%20%EA%B4%80%EB%A6%AC.md)
