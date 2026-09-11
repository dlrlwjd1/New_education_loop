# Phase 4 — 컨테이너 (Docker)

- 목표: 앱을 이미지로 만들고, 로컬에서 여러 컨테이너를 묶어 돌린다. 쿠버네티스로 가기 전 반드시 통과해야 하는 관문이다.
- 분량: 약 12~14시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 컨테이너와 가상 머신의 차이를 아키텍처 수준에서 설명할 수 있다.
- Dockerfile을 직접 써서 앱 이미지를 만들 수 있다.
- 이미지 레이어와 빌드 캐시를 이해하고, 캐시가 깨지지 않게 Dockerfile 순서를 잡을 수 있다.
- 멀티스테이지 빌드로 이미지 크기를 줄일 수 있다.
- 볼륨으로 컨테이너가 사라져도 데이터가 남게 만들 수 있다.
- Docker Compose로 앱+DB+캐시를 한 명령으로 띄울 수 있다.
- 이미지를 레지스트리에 올리고 다른 곳에서 받아 쓸 수 있다.

> **여기서 시간을 아끼면 Phase 5에서 두 배로 쓴다.** 쿠버네티스 오류의 상당수는 실은 이미지 문제(태그, 빌드, 레지스트리 인증)다. Dockerfile을 손으로 여러 번 써 봐야 한다.

## 4-A. 컨테이너란 무엇인가

메인: Master DevOps, Course 4, Module 1 (앞부분)

- [ ] [01 Specialization Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/01%20Specialization%20Introduction.md)
- [ ] [02 Welcome to Containerization and Orchestration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/02%20Welcome%20to%20Containerization%20and%20Orchestration.md)
- [ ] [03 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/03%20Course%20Introduction.md)
- [ ] [04 Containerization Scenario Yelp - Challenges.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/04%20Containerization%20Scenario%20Yelp%20-%20Challenges.md) — 실제 사례 — 무엇이 문제였고 왜 컨테이너로 갔는가
- [ ] [05 Containerization Scenario Yelp - Transition to Docker.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/05%20Containerization%20Scenario%20Yelp%20-%20Transition%20to%20Docker.md)
- [ ] [06 Introduction to Containerization.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/06%20Introduction%20to%20Containerization.md)
- [ ] [07 Introduction to Containerization - History and Use Cases.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/07%20Introduction%20to%20Containerization%20-%20History%20and%20Use%20Cases.md)
- [ ] [08 How Containers Work.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/08%20How%20Containers%20Work.md) — **컨테이너가 실제로 무엇인지** (namespace·cgroup). 「가벼운 VM」이라는 흔한 오해를 여기서 푼다
- [ ] [09 Containers vs Virtual Machines - Architecture of Virtual Machines.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/09%20Containers%20vs%20Virtual%20Machines%20-%20Architecture%20of%20Virtual%20Machines.md) — VM 아키텍처
- [ ] [10 Containers vs Virtual Machines - Architecture Comparison.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/10%20Containers%20vs%20Virtual%20Machines%20-%20Architecture%20Comparison.md) — **컨테이너 vs VM 비교** — 면접·설명 자리에서 그대로 쓰는 내용
- [ ] [11 The Evolution of OS-Level Virtualization.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/11%20The%20Evolution%20of%20OS-Level%20Virtualization.md)
- [ ] [12 How to use Discussion Prompt.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/12%20How%20to%20use%20Discussion%20Prompt.md)

함께 보기: 왜 배포에 Docker가 필요한가 (실무 동기 · 짧다)

- [ ] [01 Deployment Issues.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%203%20-%20Running%20Services%20with%20Docker/01%20Deployment%20Issues.md) — **배포에서 실제로 터지는 문제들.** 개념보다 동기가 먼저 필요한 사람은 여기부터
- [ ] [02 Why Docker.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%203%20-%20Running%20Services%20with%20Docker/02%20Why%20Docker.md)
- [ ] [03 Why Kubernetes.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%203%20-%20Running%20Services%20with%20Docker/03%20Why%20Kubernetes.md) — Docker만으로 안 되는 이유 → Phase 5의 예고

- [ ] [01 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%201%20-%20Containers%20and%20Containerization/01%20Course%20Introduction.md)
- [ ] [02 Introduction to Containers.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%201%20-%20Containers%20and%20Containerization/02%20Introduction%20to%20Containers.md) — IBM 강좌의 컨테이너 개념 요약 — 빠르게 훑는 용도
- [ ] [03 Introduction to Docker.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%201%20-%20Containers%20and%20Containerization/03%20Introduction%20to%20Docker.md)
- [ ] [04 Building and Running Container Images.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%201%20-%20Containers%20and%20Containerization/04%20Building%20and%20Running%20Container%20Images.md)
- [ ] [05 Docker Objects.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%201%20-%20Containers%20and%20Containerization/05%20Docker%20Objects.md) — 이미지·컨테이너·볼륨·네트워크 네 가지 객체
- [ ] [06 Docker Architecture.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%201%20-%20Containers%20and%20Containerization/06%20Docker%20Architecture.md)

## 4-B. Docker 아키텍처와 CLI

메인: Master DevOps, Course 4, Module 1 (이어서)

- [ ] [13 Introduction to Docker.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/13%20Introduction%20to%20Docker.md)
- [ ] [14 Introduction to Docker - Key Components.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/14%20Introduction%20to%20Docker%20-%20Key%20Components.md)
- [ ] [15 Introduction to Docker - Popularity.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/15%20Introduction%20to%20Docker%20-%20Popularity.md)
- [ ] [16 Docker Architecture - Architectural Diagram.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/16%20Docker%20Architecture%20-%20Architectural%20Diagram.md) — **아키텍처 다이어그램** — 클라이언트 / 데몬 / 레지스트리 세 부분
- [ ] [17 Docker Architecture - Client, Host, and Registry.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/17%20Docker%20Architecture%20-%20Client,%20Host,%20and%20Registry.md)
- [ ] [18 Docker Container Lifecycle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/18%20Docker%20Container%20Lifecycle.md) — **컨테이너 생애주기** — created → running → paused → stopped → removed
- [ ] [19 Understanding dockerd's Role, REST APIs, and Plugin System.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/19%20Understanding%20dockerd%27s%20Role,%20REST%20APIs,%20and%20Plugin%20System.md) — `dockerd`가 실제로 하는 일
- [ ] [20 Docker CLI Commands - General and Container Management Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/20%20Docker%20CLI%20Commands%20-%20General%20and%20Container%20Management%20Commands.md) — **자주 쓰는 명령 1** — 컨테이너 관리
- [ ] [21 Docker CLI Commands - Image Management and Networking Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/21%20Docker%20CLI%20Commands%20-%20Image%20Management%20and%20Networking%20Commands.md) — 자주 쓰는 명령 2 — 이미지와 네트워크
- [ ] [22 Docker Installation - Update Package and Enable Docker.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/22%20Docker%20Installation%20-%20Update%20Package%20and%20Enable%20Docker.md)
- [ ] [23 Docker Installation - Running Docker.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/23%20Docker%20Installation%20-%20Running%20Docker.md)
- [ ] [24 Docker CLI Commands - Demonstration - Running a Container.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/24%20Docker%20CLI%20Commands%20-%20Demonstration%20-%20Running%20a%20Container.md)
- [ ] [25 Docker CLI Commands - Demonstration - Listing Containers.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/25%20Docker%20CLI%20Commands%20-%20Demonstration%20-%20Listing%20Containers.md)

## 4-C. 포트 바인딩과 네트워크

메인: Master DevOps, Course 4, Module 1 (이어서)

- [ ] [26 Port Binding - Introduction and Types.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/26%20Port%20Binding%20-%20Introduction%20and%20Types.md) — **포트 바인딩** — 컨테이너 안의 포트를 호스트로 꺼내는 것. 「분명 떴는데 접속이 안 된다」의 원인 1순위
- [ ] [27 Port Binding - Syntax and Example.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/27%20Port%20Binding%20-%20Syntax%20and%20Example.md)
- [ ] [28 Port Binding - Demonstration - Adding Port Binding.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/28%20Port%20Binding%20-%20Demonstration%20-%20Adding%20Port%20Binding.md)
- [ ] [29 Port Binding - Demonstration - Running nginx Server.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/29%20Port%20Binding%20-%20Demonstration%20-%20Running%20nginx%20Server.md)
- [ ] [30 Port Binding - Demonstration - Launching the Container in Web Browser.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/30%20Port%20Binding%20-%20Demonstration%20-%20Launching%20the%20Container%20in%20Web%20Browser.md)
- [ ] [31 Docker Networking Bridge Driver and User-Defined Networks.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/31%20Docker%20Networking%20Bridge%20Driver%20and%20User-Defined%20Networks.md) — 브리지 네트워크와 사용자 정의 네트워크 — 컨테이너끼리 이름으로 통신하는 방법. Compose가 이걸 자동으로 해 준다
- [ ] [32 Summary - Containerization using Docker.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/32%20Summary%20-%20Containerization%20using%20Docker.md)

## 4-D. Dockerfile과 이미지 만들기

메인: Master DevOps, Course 4, Module 2 (앞부분)

- [ ] [01 Docker Container Running Modes - Detached Mode.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/01%20Docker%20Container%20Running%20Modes%20-%20Detached%20Mode.md) — detached 모드 — 백그라운드 실행
- [ ] [02 Docker Container Running Modes - Foreground Mode.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/02%20Docker%20Container%20Running%20Modes%20-%20Foreground%20Mode.md)
- [ ] [03 Starting Containers in Different Modes - Interactive Mode.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/03%20Starting%20Containers%20in%20Different%20Modes%20-%20Interactive%20Mode.md)
- [ ] [04 Starting Containers in Different Modes - Detached Mode.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/04%20Starting%20Containers%20in%20Different%20Modes%20-%20Detached%20Mode.md)
- [ ] [05 Dockerfile - Instruction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/05%20Dockerfile%20-%20Instruction.md) — **Dockerfile 지시어(instruction)** — `FROM`·`RUN`·`COPY`·`CMD`·`ENTRYPOINT`
- [ ] [06 Dockerfile - Instruction Example.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/06%20Dockerfile%20-%20Instruction%20Example.md)
- [ ] [07 Dockerfile - Creating Dockerfile.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/07%20Dockerfile%20-%20Creating%20Dockerfile.md)
- [ ] [08 Docker Daemon.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/08%20Docker%20Daemon.md)
- [ ] [09 Docker Daemon - Creating a Dockerfile.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/09%20Docker%20Daemon%20-%20Creating%20a%20Dockerfile.md)
- [ ] [10 Docker Daemon - Build the Docker Image.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/10%20Docker%20Daemon%20-%20Build%20the%20Docker%20Image.md)
- [ ] [11 Docker Image - Principles and Features.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/11%20Docker%20Image%20-%20Principles%20and%20Features.md) — **이미지 레이어 구조** — 캐시가 어떻게 동작하는지의 근거
- [ ] [12 Docker Image - Components.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/12%20Docker%20Image%20-%20Components.md)
- [ ] [13 Docker Image - Creating, Building, and Running Dockerfile.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/13%20Docker%20Image%20-%20Creating,%20Building,%20and%20Running%20Dockerfile.md)
- [ ] [14 Dockerfile Instructions.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/14%20Dockerfile%20Instructions.md) — 지시어 전체 정리 — 옆에 두고 보는 참조 강의
- [ ] [15 Writing a Dockerfile to Create an Image - Installing node.js.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/15%20Writing%20a%20Dockerfile%20to%20Create%20an%20Image%20-%20Installing%20node.js.md) — 실전 Dockerfile 작성 시작
- [ ] [16 Writing a Dockerfile to Create an Image - Installing Dependencies and Creating Server.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/16%20Writing%20a%20Dockerfile%20to%20Create%20an%20Image%20-%20Installing%20Dependencies%20and%20Creating%20Server.md)
- [ ] [17 Writing a Dockerfile to Create an Image - Building Image.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/17%20Writing%20a%20Dockerfile%20to%20Create%20an%20Image%20-%20Building%20Image.md) — 이미지 빌드

함께 보기: Docker 기초를 처음부터 천천히 (Udemy Appendix A · 46개 강의)

이 부록은 **Dockerfile과 캐시를 가장 자세히** 다룬다. Dockerfile에서 계속 막히면 이쪽이 낫다.

- [ ] [25 Creating Docker Images.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/25%20Creating%20Docker%20Images.md)
- [ ] [26 Buildkit for Docker Desktop.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/26%20Buildkit%20for%20Docker%20Desktop.md)
- [ ] [27 Building a Dockerfile.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/27%20Building%20a%20Dockerfile.md) — 직접 빌드
- [ ] [28 Dockerfile Teardown.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/28%20Dockerfile%20Teardown.md) — **Dockerfile 한 줄씩 해부**
- [ ] [29 What's a Base Image.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/29%20What%27s%20a%20Base%20Image.md) — 베이스 이미지 선택 — 이미지 크기와 보안의 출발점
- [ ] [30 The Build Process in Detail.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/30%20The%20Build%20Process%20in%20Detail.md) — **빌드 과정 상세** — 각 지시어가 중간 이미지를 만드는 원리
- [ ] [31 A Brief Recap.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/31%20A%20Brief%20Recap.md)
- [ ] [32 Rebuilds with Cache.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/32%20Rebuilds%20with%20Cache.md) — **캐시 재사용** — 빌드 시간의 핵심
- [ ] [33 Tagging an Image.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/33%20Tagging%20an%20Image.md)
- [ ] [35 Manual Image Generation with Docker Commit.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/35%20Manual%20Image%20Generation%20with%20Docker%20Commit.md)

- [ ] [36 Project Outline.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/36%20Project%20Outline.md)
- [ ] [37 Node Server Setup.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/37%20Node%20Server%20Setup.md)
- [ ] [38 Reminder on Build Kit.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/38%20Reminder%20on%20Build%20Kit.md)
- [ ] [39 A Few Planned Errors.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/39%20A%20Few%20Planned%20Errors.md) — **의도적으로 오류를 내 보고 고친다.** 실전에서 가장 도움이 되는 방식
- [ ] [40 Base Image Issues.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/40%20Base%20Image%20Issues.md)
- [ ] [41 A Few Missing Files.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/41%20A%20Few%20Missing%20Files.md)
- [ ] [42 Copying Build Files.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/42%20Copying%20Build%20Files.md)
- [ ] [43 Container Port Forwarding.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/43%20Container%20Port%20Forwarding.md) — 컨테이너 포트 포워딩
- [ ] [44 Specifying a Working Directory.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/44%20Specifying%20a%20Working%20Directory.md) — `WORKDIR`
- [ ] [45 Unnecessary Rebuilds.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/45%20Unnecessary%20Rebuilds.md)
- [ ] [46 Minimizing Cache Busting and Rebuilds.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2024%20-%20%5BAppendix%20A%5D%20-%20Basics%20of%20Docker/46%20Minimizing%20Cache%20Busting%20and%20Rebuilds.md) — **캐시 깨짐 최소화** — `COPY package.json` 먼저, `COPY . .` 나중에. 이 순서 하나로 빌드 시간이 몇 배 달라진다

## 4-E. 이미지 레지스트리

메인: Master DevOps, Course 4, Module 2 (이어서)

- [ ] [18 Managing Docker Images - Registries and Image Distribution.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/18%20Managing%20Docker%20Images%20-%20Registries%20and%20Image%20Distribution.md) — **레지스트리와 이미지 배포** — CI가 만든 이미지를 쿠버네티스가 받아 가는 통로. Phase 7의 핵심 연결점
- [ ] [19 Managing Docker Images - Docker Hub.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/19%20Managing%20Docker%20Images%20-%20Docker%20Hub.md)
- [ ] [20 Managing Docker Images - Securing and Managing Images.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/20%20Managing%20Docker%20Images%20-%20Securing%20and%20Managing%20Images.md) — 이미지 보안·서명·스캔 → Phase 10과 이어진다
- [ ] [21 Pulling and Pushing Images - Pushing an Image.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/21%20Pulling%20and%20Pushing%20Images%20-%20Pushing%20an%20Image.md) — `docker push`
- [ ] [22 Pulling and Pushing Images - Pulling an Image.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/22%20Pulling%20and%20Pushing%20Images%20-%20Pulling%20an%20Image.md) — `docker pull`
- [ ] [23 Setting up Docker Hub - Logging into Docker Hub.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/23%20Setting%20up%20Docker%20Hub%20-%20Logging%20into%20Docker%20Hub.md)
- [ ] [24 Setting up Docker Hub - Pull and Run Image from Docker Hub.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/24%20Setting%20up%20Docker%20Hub%20-%20Pull%20and%20Run%20Image%20from%20Docker%20Hub.md)

## 4-F. 데이터 — 볼륨과 멀티스테이지 빌드

메인: Master DevOps, Course 4, Module 2 (이어서)

- [ ] [25 Storage and Volumes in Docker - Managing Storage.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/25%20Storage%20and%20Volumes%20in%20Docker%20-%20Managing%20Storage.md) — **컨테이너는 사라진다.** 데이터를 어디에 둘 것인가 — Phase 6의 PersistentVolume과 같은 문제
- [ ] [26 Storage and Volumes in Docker - Volumes.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/26%20Storage%20and%20Volumes%20in%20Docker%20-%20Volumes.md) — 볼륨
- [ ] [27 Storage and Volumes in Docker - Demonstration - Creating and Listing Docker Volumes.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/27%20Storage%20and%20Volumes%20in%20Docker%20-%20Demonstration%20-%20Creating%20and%20Listing%20Docker%20Volumes.md)
- [ ] [28 Storage and Volumes in Docker - Demonstration - Verifying Data Across Container Lifecycles.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/28%20Storage%20and%20Volumes%20in%20Docker%20-%20Demonstration%20-%20Verifying%20Data%20Across%20Container%20Lifecycles.md)
- [ ] [29 Multistage Dockerfile Builds.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/29%20Multistage%20Dockerfile%20Builds.md) — **멀티스테이지 빌드** — 빌드 도구는 빌드 단계에만, 최종 이미지에는 실행에 필요한 것만. 이미지 크기와 공격 표면이 함께 줄어든다

## 4-G. Docker Compose — 여러 컨테이너를 한 번에

메인: Master DevOps, Course 4, Module 2 (이어서)

- [ ] [30 Docker Compose - Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/30%20Docker%20Compose%20-%20Introduction.md) — **Compose** — 앱·DB·캐시를 한 파일로. 로컬 개발 환경의 표준
- [ ] [31 Docker Compose - Important Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/31%20Docker%20Compose%20-%20Important%20Commands.md)
- [ ] [32 Docker Compose Installation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/32%20Docker%20Compose%20Installation.md)
- [ ] [33 Multi-container Deployment with Compose - Creating and Configuring a docker-compose File.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/33%20Multi-container%20Deployment%20with%20Compose%20-%20Creating%20and%20Configuring%20a%20docker-compose%20File.md) — `docker-compose.yml` 작성
- [ ] [34 Multi-container Deployment with Compose - Full Stack Setup and Verification.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/34%20Multi-container%20Deployment%20with%20Compose%20-%20Full%20Stack%20Setup%20and%20Verification.md)
- [ ] [35 Multi-container Deployment with Compose - Managing WordPress, MySQL, and Full Lifecycle Operations.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/35%20Multi-container%20Deployment%20with%20Compose%20-%20Managing%20WordPress,%20MySQL,%20and%20Full%20Lifecycle%20Operations.md) — 실제 스택(WordPress + MySQL) 전체 생애주기
- [ ] [42 Docker Compose Advanced Features.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/42%20Docker%20Compose%20Advanced%20Features.md) — 고급 기능 — 프로필, 오버라이드, 의존 순서

함께 보기: 실제 앱을 컨테이너화하는 흐름

- [ ] [04 Don't Know Docker Watch This..md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%203%20-%20Running%20Services%20with%20Docker/04%20Don%27t%20Know%20Docker%20Watch%20This..md)
- [ ] [05 Note About Docker Build Output and Buildkit.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%203%20-%20Running%20Services%20with%20Docker/05%20Note%20About%20Docker%20Build%20Output%20and%20Buildkit.md)
- [ ] [06 Dockerizing the Posts Service.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%203%20-%20Running%20Services%20with%20Docker/06%20Dockerizing%20the%20Posts%20Service.md) — **서비스 하나를 Dockerize하는 전체 과정**
- [ ] [07 Review Some Basic Commands.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%203%20-%20Running%20Services%20with%20Docker/07%20Review%20Some%20Basic%20Commands.md)
- [ ] [08 Dockerizing Other Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%203%20-%20Running%20Services%20with%20Docker/08%20Dockerizing%20Other%20Services.md) — 나머지 서비스도 같은 방식으로 — 반복이 패턴을 만든다

## 4-H. Docker Swarm — 선택

메인: Master DevOps, Course 4, Module 2 (이어서)

쿠버네티스로 갈 계획이면 **건너뛰어도 된다.** 다만 오케스트레이션의 핵심 개념(서비스, 스케일, 노드 장애 대응)을 훨씬 단순한 형태로 먼저 볼 수 있어, Phase 5의 예습으로는 효율이 좋다.

- [ ] [36 Docker Swarm - Introduction and Swarm Nodes.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/36%20Docker%20Swarm%20-%20Introduction%20and%20Swarm%20Nodes.md) — Swarm 개념
- [ ] [37 Docker Swarm - Architecture and Uses.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/37%20Docker%20Swarm%20-%20Architecture%20and%20Uses.md)
- [ ] [38 Running Docker in Swarm Mode - Setting Up Docker Swarm.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/38%20Running%20Docker%20in%20Swarm%20Mode%20-%20Setting%20Up%20Docker%20Swarm.md)
- [ ] [39 Running Docker in Swarm Mode - Adding Workers and Deploying Services in Docker Swarm.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/39%20Running%20Docker%20in%20Swarm%20Mode%20-%20Adding%20Workers%20and%20Deploying%20Services%20in%20Docker%20Swarm.md)
- [ ] [40 Running Docker in Swarm Mode - Scaling and Fault Tolerance in Docker Swarm.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/40%20Running%20Docker%20in%20Swarm%20Mode%20-%20Scaling%20and%20Fault%20Tolerance%20in%20Docker%20Swarm.md) — **스케일링과 장애 대응** — 쿠버네티스가 하는 일의 축소판
- [ ] [41 Running Docker in Swarm Mode - Accessing and Cleaning Up Docker Swarm Services.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/41%20Running%20Docker%20in%20Swarm%20Mode%20-%20Accessing%20and%20Cleaning%20Up%20Docker%20Swarm%20Services.md)

## 4-I. Docker 모니터링 — 여기서는 맛만

메인: Master DevOps, Course 4, Module 2 (뒷부분)

- [ ] [43 Docker Container Monitoring.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/43%20Docker%20Container%20Monitoring.md) — 컨테이너 모니터링이 왜 다른 문제인가
- [ ] [48 Docker Metrics CPU, Memory, and Network Usage - Analyzing CPU and Network Usage.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/48%20Docker%20Metrics%20CPU,%20Memory,%20and%20Network%20Usage%20-%20Analyzing%20CPU%20and%20Network%20Usage.md) — CPU·메모리·네트워크 지표
- [ ] [49 Docker Metrics CPU, Memory, and Network Usage - Real-Time Metrics with Docker Stats and Inspect.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/49%20Docker%20Metrics%20CPU,%20Memory,%20and%20Network%20Usage%20-%20Real-Time%20Metrics%20with%20Docker%20Stats%20and%20Inspect.md) — `docker stats`·`docker inspect` — 지금 당장 쓸 수 있는 도구
- [ ] [60 Summary - Advanced Docker Management and Orchestration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%202%20-%20Advanced%20Docker%20Management/60%20Summary%20-%20Advanced%20Docker%20Management%20and%20Orchestration.md) — 모듈 정리

> 44~47, 50~59번(Prometheus·cAdvisor·Grafana 대시보드 구축)은 관측성 영역이라 **개발운영 로드맵**에서 다룬다. 지금은 「지표를 어디서 얻는가」만 알고 넘어간다.

## 산출물 과제

1. **자기 앱의 Dockerfile 1개** — 멀티스테이지로 작성한다. 최종 이미지 크기를 기록한다.
2. **캐시 최적화 전/후 비교** — `COPY` 순서를 잘못 둔 버전과 올바른 버전의 빌드 시간을 각각 측정해 **숫자로 남긴다.** 코드 한 줄만 바꿔 재빌드하는 시나리오로 측정한다.
3. **Compose 로컬 스택** — 앱 + 데이터베이스 최소 2개 컨테이너를 `docker compose up` 하나로 띄운다. 컨테이너를 지웠다 다시 띄워도 DB 데이터가 남아 있어야 한다(볼륨).
4. **레지스트리에 push** — Docker Hub 또는 다른 레지스트리에 이미지를 올리고, 로컬 이미지를 모두 삭제한 뒤 pull해서 실행되는 것을 확인한다. **Phase 7의 자동 배포가 이 동작에 의존한다.**
5. **이미지를 root로 돌리지 않게** — `USER` 지시어를 넣고 동작을 확인한다. Phase 10의 보안 항목이 여기서 시작된다.

## 다음 단계

→ [05 Phase 5 - 쿠버네티스 기초](05%20Phase%205%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EA%B8%B0%EC%B4%88.md)
