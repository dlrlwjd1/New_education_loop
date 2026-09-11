# Phase 7 — 쿠버네티스 배포 실전

- 목표: **이 로드맵의 도착점.** `git push` 하나로 테스트 → 이미지 빌드 → 클러스터 롤아웃이 사람 손 없이 도는 상태를 만든다.
- 분량: 약 8~10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 로컬에서 코드를 고치면 클러스터에 자동 반영되는 개발 루프를 갖출 수 있다.
- 클라우드에 관리형 쿠버네티스 클러스터를 만들고 `kubectl` 컨텍스트를 전환할 수 있다.
- CI에서 이미지를 빌드해 레지스트리에 올리고, 클러스터에 롤아웃하는 워크플로를 작성할 수 있다.
- 개발용 매니페스트와 운영용 매니페스트를 분리할 수 있다.
- 파이프라인에서 쓰는 자격 증명(레지스트리·클러스터)을 안전하게 주입할 수 있다.
- 도메인을 붙여 실제 주소로 서비스할 수 있다.

> **이 Phase는 [Microservices with Node JS and React](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/)가 거의 전부다.** 저장소 안에서 실제 앱을 처음부터 자동 배포까지 끌고 가는 자료가 이것뿐이다. Phase 3의 GitHub Actions와 Phase 5~6의 쿠버네티스가 여기서 합쳐진다.

## 7-A. 로컬 개발 루프 — Skaffold

메인: Microservices with Node JS and React, Section 4 (끝부분)

- [ ] [39 Introducing Skaffold.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/39%20Introducing%20Skaffold.md) — **Skaffold** — 파일을 저장하면 이미지 재빌드와 파드 재배포가 자동으로. 쿠버네티스에서 개발하는 것이 견딜 만해지는 지점
- [ ] [40 Skaffold API version Update.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/40%20Skaffold%20API%20version%20Update.md)

## 7-B. 멀티서비스 앱 구조 잡기

메인: Microservices with Node JS and React, Section 5

Phase 6에서 만든 것을 실제 앱 구조로 정돈하는 단계다. 아키텍처 결정과 쿠버네티스 설정이 어떻게 맞물리는지 보인다.

- [ ] [01 Big Ticket Items.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/01%20Big%20Ticket%20Items.md) — **결정해야 할 큰 항목들** — 서비스 경계, 데이터 소유, 이벤트
- [ ] [02 App Overview.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/02%20App%20Overview.md)
- [ ] [03 Resource Types.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/03%20Resource%20Types.md) — 리소스 타입 설계
- [ ] [04 Service Types.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/04%20Service%20Types.md)
- [ ] [05 Events and Architecture Design.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/05%20Events%20and%20Architecture%20Design.md) — **이벤트 기반 설계** — 서비스 간 직접 호출을 줄이는 방향
- [ ] [06 Note on Typescript.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/06%20Note%20on%20Typescript.md)
- [ ] [07 Auth Service Setup.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/07%20Auth%20Service%20Setup.md) — 인증 서비스 만들기
- [ ] [08 Auth K8s Setup.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/08%20Auth%20K8s%20Setup.md) — **그 서비스의 쿠버네티스 설정** — 6-B/6-E를 실제 앱에 적용
- [ ] [09 Adding Skaffold.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/09%20Adding%20Skaffold.md) — Skaffold 붙이기 (7-A와 이어짐)
- [ ] [10 Note on Code Reloading.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/10%20Note%20on%20Code%20Reloading.md)
- [ ] [11 Ingress v1 API Required Update.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/11%20Ingress%20v1%20API%20Required%20Update.md)
- [ ] [12 Ingress-Nginx Setup.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/12%20Ingress-Nginx%20Setup.md) — ingress-nginx 설정 (6-C와 이어짐)
- [ ] [13 Hosts File and Security Warning.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/13%20Hosts%20File%20and%20Security%20Warning.md)

## 7-C. 클라우드에 실제 클러스터 만들기

메인: Microservices with Node JS and React, Section 6

- [ ] [01 Note on Remote Development.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/01%20Note%20on%20Remote%20Development.md)
- [ ] [02 Remote Dev with Skaffold.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/02%20Remote%20Dev%20with%20Skaffold.md)
- [ ] [03 Free Google Cloud Trial and Credits.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/03%20Free%20Google%20Cloud%20Trial%20and%20Credits.md) — 무료 크레딧 — **실습 후 클러스터를 반드시 삭제한다. 요금이 나온다**
- [ ] [04 Google Cloud Initial Setup.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/04%20Google%20Cloud%20Initial%20Setup.md)
- [ ] [05 Kubernetes Cluster Creation with Autopilot.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/05%20Kubernetes%20Cluster%20Creation%20with%20Autopilot.md) — **관리형 클러스터 생성** — 컨트롤 플레인을 직접 운영하지 않는 선택
- [ ] [06 Kubectl Contexts.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/06%20Kubectl%20Contexts.md) — **`kubectl` 컨텍스트** — 로컬과 클라우드를 오갈 때 사고가 나는 지점. 「운영에 실수로 배포」의 주 원인
- [ ] [07 Initializing the GCloud SDK.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/07%20Initializing%20the%20GCloud%20SDK.md)
- [ ] [08 Installing the GCloud Context.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/08%20Installing%20the%20GCloud%20Context.md)
- [ ] [09 Updating the Skaffold Config.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/09%20Updating%20the%20Skaffold%20Config.md) — 원격 클러스터용 Skaffold 설정
- [ ] [10 More Skaffold Updates.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/10%20More%20Skaffold%20Updates.md)
- [ ] [11 Creating a Load Balancer.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/11%20Creating%20a%20Load%20Balancer.md) — **로드밸런서 생성** — 외부에서 접속되는 첫 순간
- [ ] [12 Final Config and Test.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%206%20-%20Leveraging%20a%20Cloud%20Environment%20for%20Development/12%20Final%20Config%20and%20Test.md)

## 7-D. push → 자동 배포 파이프라인

메인: Microservices with Node JS and React, Section 23 (뒷부분)

**이 묶음이 로드맵 전체의 도착점이다.** Phase 3-D에서 CI까지 만들었고, 여기서 배포를 붙인다.

- [ ] [11 Deployment Options.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/11%20Deployment%20Options.md) — **배포 방식 선택** — 무엇을 자동화하고 무엇을 사람이 승인할 것인가
- [ ] [12 Creating a Hosted Cluster.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/12%20Creating%20a%20Hosted%20Cluster.md) — 호스팅 클러스터 준비
- [ ] [13 Reminder on Kubernetes Context.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/13%20Reminder%20on%20Kubernetes%20Context.md)
- [ ] [14 Reminder on Swapping Contexts.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/14%20Reminder%20on%20Swapping%20Contexts.md)
- [ ] [15 The Deployment Plan.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/15%20The%20Deployment%20Plan.md) — **배포 계획 설계** — 이 강의를 먼저 읽고 나머지를 본다
- [ ] [16 Building an Image in an Action.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/16%20Building%20an%20Image%20in%20an%20Action.md) — **액션 안에서 이미지 빌드** — Phase 4의 레지스트리 push가 CI로 옮겨 온다
- [ ] [17 Testing the Image Build.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/17%20Testing%20the%20Image%20Build.md)
- [ ] [18 Restarting the Deployment.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/18%20Restarting%20the%20Deployment.md) — **Deployment 재시작** — 롤아웃 트리거
- [ ] [19 Applying Kubernetes Manifests.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/19%20Applying%20Kubernetes%20Manifests.md) — **매니페스트 적용** — `kubectl apply`를 파이프라인에서
- [ ] [20 Prod vs Dev Manifest Files.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/20%20Prod%20vs%20Dev%20Manifest%20Files.md) — **개발용/운영용 매니페스트 분리** — Phase 6-E의 설정 분리가 여기서 값을 낸다
- [ ] [21 Manual Secret Creation.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/21%20Manual%20Secret%20Creation.md) — **시크릿은 파이프라인에 커밋하지 않고 수동 생성** — 실무의 현실적 타협점. Phase 10에서 더 나은 방법을 본다
- [ ] [22 Don't Forget Ingress-Nginx!.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/22%20Don%27t%20Forget%20Ingress-Nginx%21.md)
- [ ] [23 Testing Automated Deployment.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/23%20Testing%20Automated%20Deployment.md) — **자동 배포 테스트** — 여기서 도착점에 닿는다
- [ ] [24 Additional Deploy Files.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/24%20Additional%20Deploy%20Files.md)
- [ ] [25 A Successful Deploy!.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/25%20A%20Successful%20Deploy%21.md)

## 7-E. 도메인 붙이기

메인: Microservices with Node JS and React, Section 23 (끝부분)

- [ ] [26 Buying a Domain Name.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/26%20Buying%20a%20Domain%20Name.md) — 도메인 구입
- [ ] [27 Three Important Changes Needed to Deploy - Do Not Skip!.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/27%20Three%20Important%20Changes%20Needed%20to%20Deploy%20-%20Do%20Not%20Skip%21.md) — **배포 전 반드시 바꿔야 하는 세 가지** — 건너뛰면 안 되는 강의
- [ ] [28 Configuring the Domain Name.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/28%20Configuring%20the%20Domain%20Name.md) — DNS 설정
- [ ] [29 I Really Hope This Works.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/29%20I%20Really%20Hope%20This%20Works.md)
- [ ] [30 Next Steps.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/30%20Next%20Steps.md) — 다음 단계 제안

## 7-F. 같은 흐름을 다른 도구로 — IBM Capstone

함께 보기: IBM DevOps Capstone Project

같은 목표(CI → 보안 → 쿠버네티스 배포 → CD 파이프라인)를 **OpenShift·Tekton 기반**으로 다시 한 번 밟는다. 7-A~7-E를 GitHub Actions로 끝낸 뒤 비교용으로 보면 도구 선택 감각이 생긴다.

- [ ] [01 Introduction to DevOps Capstone Project.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%201%20-%20Create%20and%20Execute%20Sprint%20Plans/01%20Introduction%20to%20DevOps%20Capstone%20Project.md)
- [ ] [02 Capstone Overview.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%201%20-%20Create%20and%20Execute%20Sprint%20Plans/02%20Capstone%20Overview.md) — **Capstone 전체 개요** — 이것만 먼저 읽어도 흐름이 잡힌다

- [ ] [03 HTTP Methods and REST APIs.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%202%20-%20Develop%20a%20RESTful%20Service%20Using%20Test%20Driven%20Development%20%28TDD%29/03%20HTTP%20Methods%20and%20REST%20APIs.md)
- [ ] [04 Hands-On Lab - Develop a RESTful Service Using TDD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%202%20-%20Develop%20a%20RESTful%20Service%20Using%20Test%20Driven%20Development%20%28TDD%29/04%20Hands-On%20Lab%20-%20Develop%20a%20RESTful%20Service%20Using%20TDD.md) — TDD로 서비스 만들기 → Phase 10과 이어진다

- [ ] [01 Prerequisites - Add Continuous Integration.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%203%20-%20Add%20Continuous%20Integration%20%28CI%29%20and%20Security%20to%20a%20Repository/01%20Prerequisites%20-%20Add%20Continuous%20Integration.md)
- [ ] [02 Overview - Add Continuous Integration.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%203%20-%20Add%20Continuous%20Integration%20%28CI%29%20and%20Security%20to%20a%20Repository/02%20Overview%20-%20Add%20Continuous%20Integration.md)
- [ ] [03 Hands-on Lab - Sprint 2 Planning.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%203%20-%20Add%20Continuous%20Integration%20%28CI%29%20and%20Security%20to%20a%20Repository/03%20Hands-on%20Lab%20-%20Sprint%202%20Planning.md)
- [ ] [04 Hands-On Lab - Add Continuous Integration.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%203%20-%20Add%20Continuous%20Integration%20%28CI%29%20and%20Security%20to%20a%20Repository/04%20Hands-On%20Lab%20-%20Add%20Continuous%20Integration.md) — **CI 추가 실습**
- [ ] [05 Prerequisites - Add Security to Your RESTful Service.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%203%20-%20Add%20Continuous%20Integration%20%28CI%29%20and%20Security%20to%20a%20Repository/05%20Prerequisites%20-%20Add%20Security%20to%20Your%20RESTful%20Service.md)
- [ ] [06 Overview - Add Security to Your RESTful Service.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%203%20-%20Add%20Continuous%20Integration%20%28CI%29%20and%20Security%20to%20a%20Repository/06%20Overview%20-%20Add%20Security%20to%20Your%20RESTful%20Service.md)
- [ ] [07 Hands-On Lab - Add Security to Your RESTful Service.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%203%20-%20Add%20Continuous%20Integration%20%28CI%29%20and%20Security%20to%20a%20Repository/07%20Hands-On%20Lab%20-%20Add%20Security%20to%20Your%20RESTful%20Service.md) — **보안 추가 실습** → Phase 10
- [ ] [08 Module 3 Summary.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%203%20-%20Add%20Continuous%20Integration%20%28CI%29%20and%20Security%20to%20a%20Repository/08%20Module%203%20Summary.md)

- [ ] [01 Prerequisites - Deploy Your Application to Kubernetes.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%204%20-%20Deploy%20Your%20Application%20to%20Kubernetes/01%20Prerequisites%20-%20Deploy%20Your%20Application%20to%20Kubernetes.md)
- [ ] [02 Overview - Deploy Your Application to Kubernetes.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%204%20-%20Deploy%20Your%20Application%20to%20Kubernetes/02%20Overview%20-%20Deploy%20Your%20Application%20to%20Kubernetes.md)
- [ ] [03 Hands-on Lab - Sprint 3 Planning.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%204%20-%20Deploy%20Your%20Application%20to%20Kubernetes/03%20Hands-on%20Lab%20-%20Sprint%203%20Planning.md)
- [ ] [04 Hands-on Lab - Deploy Your Application to Kubernetes.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%204%20-%20Deploy%20Your%20Application%20to%20Kubernetes/04%20Hands-on%20Lab%20-%20Deploy%20Your%20Application%20to%20Kubernetes.md) — **쿠버네티스 배포 실습**
- [ ] [05 Module 4 Summary.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%204%20-%20Deploy%20Your%20Application%20to%20Kubernetes/05%20Module%204%20Summary.md)

- [ ] [01 Prerequisites - Build an Automated CD DevOps Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%205%20-%20Build%20an%20Automated%20CD%20DevOps%20Pipeline/01%20Prerequisites%20-%20Build%20an%20Automated%20CD%20DevOps%20Pipeline.md)
- [ ] [02 Overview - Build an Automated CD DevOps Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%205%20-%20Build%20an%20Automated%20CD%20DevOps%20Pipeline/02%20Overview%20-%20Build%20an%20Automated%20CD%20DevOps%20Pipeline.md)
- [ ] [03 Hands-On Lab - Build an Automated CD DevOps Pipeline Using Tekton and OpenShift.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%205%20-%20Build%20an%20Automated%20CD%20DevOps%20Pipeline/03%20Hands-On%20Lab%20-%20Build%20an%20Automated%20CD%20DevOps%20Pipeline%20Using%20Tekton%20and%20OpenShift.md) — **Tekton + OpenShift로 CD 파이프라인** — Phase 8의 예습
- [ ] [04 Module 5 Summary.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%205%20-%20Build%20an%20Automated%20CD%20DevOps%20Pipeline/04%20Module%205%20Summary.md)

- [ ] [01 Final Submission Checklist.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%206%20-%20Final%20Submission%20and%20Evaluation/01%20Final%20Submission%20Checklist.md) — **최종 체크리스트** — 자기 파이프라인 점검용으로 그대로 쓸 수 있다

## 7-G. 배포 파이프라인 점검표

Phase 7을 마쳤다면 다음이 모두 참이어야 한다.

- [ ] 기본 브랜치에 머지되면 사람 개입 없이 배포가 시작된다
- [ ] 테스트가 실패하면 배포가 진행되지 않는다
- [ ] 이미지 태그가 `latest`가 아니라 커밋 해시(또는 버전)다 → [Phase 5-E](05%20Phase%205%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md)
- [ ] 개발 환경과 운영 환경이 **같은 이미지**를 쓰고 설정만 다르다 → [Phase 6-E](06%20Phase%206%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9%20%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%20%EC%84%A4%EC%A0%95.md)
- [ ] 배포 중 요청이 실패하지 않는다 (프로브 설정 완료) → [Phase 5-G](05%20Phase%205%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md)
- [ ] 한 명령(또는 한 클릭)으로 직전 버전으로 되돌릴 수 있다 → [Phase 5-F](05%20Phase%205%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md)
- [ ] 파이프라인이 쓰는 자격 증명이 저장소에 평문으로 없다
- [ ] 실수로 운영 클러스터에 배포될 경로가 막혀 있다 (컨텍스트 분리) → 7-C

## 산출물 과제

1. **자동 배포 파이프라인 1개 완성** — 기본 브랜치 머지 → 테스트 → 이미지 빌드/푸시 → 클러스터 롤아웃. 7-G 점검표 전 항목 통과.
2. **배포 리드 타임 측정** — 커밋부터 운영 반영까지 걸린 시간을 기록한다. [Phase 1](01%20Phase%201%20-%20DevOps%20%EA%B0%9C%EB%85%90%EA%B3%BC%20%EB%A6%AC%EB%88%85%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md)의 진단표를 다시 꺼내 **전/후를 비교한다.** 이게 로드맵 전체의 성과 지표다.
3. **롤백 훈련 1회** — 일부러 깨진 버전을 배포하고, 되돌리기까지 걸린 시간을 측정한다.
4. **환경 두 개** — 개발용과 운영용 두 환경에 같은 이미지가 다른 설정으로 배포되게 만든다.

## 다음 단계

→ [08 Phase 8 - CD 파이프라인과 GitOps](08%20Phase%208%20-%20CD%20%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8%EA%B3%BC%20GitOps.md)

배포가 도는 상태가 됐다면, 다음 두 방향 중 하나를 고른다.

- **인프라까지 코드로** → [Phase 9](09%20Phase%209%20-%20IaC%EC%99%80%20%EA%B5%AC%EC%84%B1%20%EA%B4%80%EB%A6%AC.md)
- **배포한 것을 지켜보기** → **개발운영 로드맵**
