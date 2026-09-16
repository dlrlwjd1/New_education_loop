# Phase 1 — DevOps 개념과 리눅스 기초

- 목표: DevOps가 무엇을 해결하려는 것인지, 파이프라인의 단계가 무엇인지 전체 지도를 갖는다. 그리고 리눅스에서 손이 막히지 않게 만든다.
- 분량: 약 5~6시간
- 마지막 학습일: 2026-09-17

## 이 단계가 끝나면 할 수 있어야 하는 것

- DevOps 파이프라인의 단계(버전 관리 → CI/테스트 → 배포 → 구성 관리 → 모니터링)를 순서대로 말할 수 있다.
- 지금 우리 팀이 각 단계에서 어디까지 자동화돼 있는지 진단표로 그릴 수 있다.
- "DevOps 팀을 만들자"가 왜 흔한 실패 패턴인지 설명할 수 있다.
- 허영 지표(vanity metric)와 실행 가능한 지표(actionable metric)를 구분할 수 있다.
- 리눅스에서 파일·권한·패키지·프로세스를 다룰 수 있다.

## 1-A. DevOps가 왜 나왔는가

메인: Master DevOps, Course 1, Module 1 (앞부분)

- [x] [01 Specialization Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/01%20Specialization%20Introduction.md) — 학습일 2026-09-15
- [x] [02 Welcome to DevOps Essentials and Version Control with Git.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/02%20Welcome%20to%20DevOps%20Essentials%20and%20Version%20Control%20with%20Git.md)
- [x] [03 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/03%20Course%20Introduction.md)
- [x] [04 Limitations of Software Development Models - Waterfall Model.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/04%20Limitations%20of%20Software%20Development%20Models%20-%20Waterfall%20Model.md) — **폭포수 모델의 한계** — 여기서 문제 정의가 시작된다
- [x] [05 Limitations of Software Development Models - Agile Model.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/05%20Limitations%20of%20Software%20Development%20Models%20-%20Agile%20Model.md) — 애자일도 개발까지만 빨라졌다. 배포가 병목으로 남는다는 것이 DevOps의 출발점
- [ ] [06 Scenario - Understanding DevOps.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/06%20Scenario%20-%20Understanding%20DevOps.md)
- [ ] [07 Introduction to DevOps.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/07%20Introduction%20to%20DevOps.md) — **핵심 강의**
- [ ] [08 DevOps Adoption.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/08%20DevOps%20Adoption.md) — 도입은 기술이 아니라 조직 문제다
- [ ] [10 Benefits of Working in a DevOps Environment.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/10%20Benefits%20of%20Working%20in%20a%20DevOps%20Environment.md)

## 1-B. 파이프라인의 단계 — 이 로드맵의 지도

메인: Master DevOps, Course 1, Module 1 (이어서)

- [ ] [11 DevOps Lifecycle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/11%20DevOps%20Lifecycle.md) — **DevOps 생애주기 전체 그림.** 이 로드맵의 Phase 배치가 여기서 나온다
- [ ] [12 DevOps Stages - Version Control.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/12%20DevOps%20Stages%20-%20Version%20Control.md) — → 이 로드맵 Phase 2
- [ ] [13 DevOps Stages - Continuous Integration and Testing.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/13%20DevOps%20Stages%20-%20Continuous%20Integration%20and%20Testing.md) — → Phase 3, 10
- [ ] [14 DevOps Stages - Continuous Deployment.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/14%20DevOps%20Stages%20-%20Continuous%20Deployment.md) — → Phase 4~8
- [ ] [15 DevOps Stages - Configuration Management.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/15%20DevOps%20Stages%20-%20Configuration%20Management.md) — → Phase 9
- [ ] [16 DevOps Stages - Continuous Monitoring.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/16%20DevOps%20Stages%20-%20Continuous%20Monitoring.md) — → **개발운영 로드맵**
- [ ] [17 DevOps Delivery Pipeline - Version Control and Build.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/17%20DevOps%20Delivery%20Pipeline%20-%20Version%20Control%20and%20Build.md)
- [ ] [18 DevOps Delivery Pipeline - Unit Test and Deploy.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/18%20DevOps%20Delivery%20Pipeline%20-%20Unit%20Test%20and%20Deploy.md)
- [ ] [19 DevOps Stages and Delivery Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/19%20DevOps%20Stages%20and%20Delivery%20Pipeline.md) — **가장 중요한 강의.** 단계와 파이프라인을 하나로 붙여 본다. 여기서 전체 지도가 완성된다

함께 보기: IBM Introduction to DevOps, Module 1 (개념 중심)

- [ ] [01 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%201%20-%20Introduction%20to%20DevOps%20-%20Overview%20of%20DevOps/01%20Course%20Introduction.md)
- [ ] [02 Business Case for DevOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%201%20-%20Introduction%20to%20DevOps%20-%20Overview%20of%20DevOps/02%20Business%20Case%20for%20DevOps.md) — **경영진에게 DevOps 투자를 설명할 때 쓰는 논리**
- [ ] [03 DevOps Adoption.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%201%20-%20Introduction%20to%20DevOps%20-%20Overview%20of%20DevOps/03%20DevOps%20Adoption.md)
- [ ] [04 Definition of DevOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%201%20-%20Introduction%20to%20DevOps%20-%20Overview%20of%20DevOps/04%20Definition%20of%20DevOps.md) — 정의
- [ ] [05 Essential Characteristics of DevOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%201%20-%20Introduction%20to%20DevOps%20-%20Overview%20of%20DevOps/05%20Essential%20Characteristics%20of%20DevOps.md) — 핵심 특징
- [ ] [06 Leading Up to DevOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%201%20-%20Introduction%20to%20DevOps%20-%20Overview%20of%20DevOps/06%20Leading%20Up%20to%20DevOps.md)
- [ ] [07 XP, Agile, and Beyond.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%201%20-%20Introduction%20to%20DevOps%20-%20Overview%20of%20DevOps/07%20XP,%20Agile,%20and%20Beyond.md)
- [ ] [08 Brief History of DevOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%201%20-%20Introduction%20to%20DevOps%20-%20Overview%20of%20DevOps/08%20Brief%20History%20of%20DevOps.md)

## 1-C. 문화와 조직 — 기술만으로는 안 되는 부분

메인: IBM Introduction to DevOps, Module 2~5

- [ ] [01 Social Coding Principles.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/01%20Social%20Coding%20Principles.md)
- [ ] [02 Git Repository Guidelines.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/02%20Git%20Repository%20Guidelines.md)
- [ ] [03 Working in Small Batches.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/03%20Working%20in%20Small%20Batches.md) — **작은 단위로 일하기** — CI가 왜 작동하는지의 근본 이유
- [ ] [04 Minimum Viable Product.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/04%20Minimum%20Viable%20Product.md)
- [ ] [05 Test Driven Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/05%20Test%20Driven%20Development.md) — → Phase 10
- [ ] [06 Behavior Driven Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/06%20Behavior%20Driven%20Development.md) — → Phase 10
- [ ] [07 Cloud Native Microservices.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/07%20Cloud%20Native%20Microservices.md)
- [ ] [08 Designing for Failure.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%202%20-%20Introduction%20to%20DevOps%20-%20Thinking%20DevOps/08%20Designing%20for%20Failure.md) — **실패를 전제로 설계하기** — 쿠버네티스의 존재 이유이기도 하다 (Phase 5)

- [ ] [01 Taylorism and Working in Silos.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%203%20-%20Introduction%20to%20DevOps%20-%20Working%20DevOps/01%20Taylorism%20and%20Working%20in%20Silos.md) — 사일로(silo) 문제
- [ ] [02 Software Engineering vs. Civil Engineering.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%203%20-%20Introduction%20to%20DevOps%20-%20Working%20DevOps/02%20Software%20Engineering%20vs.%20Civil%20Engineering.md)
- [ ] [03 Required DevOps Behaviors.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%203%20-%20Introduction%20to%20DevOps%20-%20Working%20DevOps/03%20Required%20DevOps%20Behaviors.md)
- [ ] [04 Infrastructure as Code.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%203%20-%20Introduction%20to%20DevOps%20-%20Working%20DevOps/04%20Infrastructure%20as%20Code.md) — → Phase 9
- [ ] [05 Continuous Integration.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%203%20-%20Introduction%20to%20DevOps%20-%20Working%20DevOps/05%20Continuous%20Integration.md) — → Phase 3
- [ ] [06 Continuous Delivery.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%203%20-%20Introduction%20to%20DevOps%20-%20Working%20DevOps/06%20Continuous%20Delivery.md) — → Phase 8

- [ ] [01 Organizational Impact of DevOps.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%204%20-%20Introduction%20to%20DevOps%20-%20Organizing%20for%20DevOps/01%20Organizational%20Impact%20of%20DevOps.md)
- [ ] [02 There is No DevOps Team.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%204%20-%20Introduction%20to%20DevOps%20-%20Organizing%20for%20DevOps/02%20There%20is%20No%20DevOps%20Team.md) — **「DevOps 팀」을 만드는 게 왜 안티패턴인지.** 조직 개편 논의가 나올 때 근거가 되는 강의
- [ ] [03 Everyone is Responsible for Success.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%204%20-%20Introduction%20to%20DevOps%20-%20Organizing%20for%20DevOps/03%20Everyone%20is%20Responsible%20for%20Success.md)

- [ ] [01 Rewarding for “A” while hoping for “B”.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%205%20-%20Introduction%20to%20DevOps%20-%20Measuring%20DevOps/01%20Rewarding%20for%20%E2%80%9CA%E2%80%9D%20while%20hoping%20for%20%E2%80%9CB%E2%80%9D.md)
- [ ] [02 Vanity metrics vs. Actionable metrics.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%205%20-%20Introduction%20to%20DevOps%20-%20Measuring%20DevOps/02%20Vanity%20metrics%20vs.%20Actionable%20metrics.md) — **허영 지표 vs 실행 가능한 지표** — 배포 횟수만 세는 함정
- [ ] [03 How to Measure Your Culture.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%205%20-%20Introduction%20to%20DevOps%20-%20Measuring%20DevOps/03%20How%20to%20Measure%20Your%20Culture.md)
- [ ] [04 Comparison of DevOps to Site Reliability Engineering.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/01%20Introduction%20to%20DevOps/Module%205%20-%20Introduction%20to%20DevOps%20-%20Measuring%20DevOps/04%20Comparison%20of%20DevOps%20to%20Site%20Reliability%20Engineering.md) — DevOps와 SRE의 관계. **개발운영 로드맵**과 이어지는 지점

## 1-D. 리눅스 — 손이 막히지 않을 만큼

메인: Master DevOps, Course 1, Module 1 (뒷부분)

- [ ] [20 Why Linux for DevOps.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/20%20Why%20Linux%20for%20DevOps.md) — 왜 컨테이너와 서버가 다 리눅스인가
- [ ] [21 Components and Architecture of Linux.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/21%20Components%20and%20Architecture%20of%20Linux.md)
- [ ] [22 File System.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/22%20File%20System.md)
- [ ] [23 Software Package Management.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/23%20Software%20Package%20Management.md) — 패키지 매니저 — Dockerfile의 `RUN apt-get install`이 이것이다 (Phase 4)
- [ ] [24 Software Package Management - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/24%20Software%20Package%20Management%20-%20Demonstration.md)
- [ ] [25 Working with Files and Directories.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/25%20Working%20with%20Files%20and%20Directories.md)
- [ ] [26 Users in Linux.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/26%20Users%20in%20Linux.md) — **사용자와 권한** — 컨테이너를 root로 돌리지 않는 이유 (Phase 10)
- [ ] [27 File and System Operations in Linux - Creating and Managing Files.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/27%20File%20and%20System%20Operations%20in%20Linux%20-%20Creating%20and%20Managing%20Files.md)
- [ ] [28 File and System Operations in Linux - Archiving and Compressing.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/28%20File%20and%20System%20Operations%20in%20Linux%20-%20Archiving%20and%20Compressing.md)
- [ ] [29 Common Linux Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/29%20Common%20Linux%20Commands.md) — 자주 쓰는 명령 정리
- [ ] [30 Summary - Introduction to DevOps and Linux.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%201%20-%20DevOps%20Essentials%20and%20Git/Module%201%20-%20Introduction%20to%20DevOps%20and%20Linux/30%20Summary%20-%20Introduction%20to%20DevOps%20and%20Linux.md)

함께 보기: 리눅스가 처음이라면 (IBM 강좌, 더 천천히)

- [ ] [01 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%201%20-%20Introduction%20to%20Linux/01%20Course%20Introduction.md)
- [ ] [02 Introducing Linux and Unix.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%201%20-%20Introduction%20to%20Linux/02%20Introducing%20Linux%20and%20Unix.md)
- [ ] [03 Linux Distributions.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%201%20-%20Introduction%20to%20Linux/03%20Linux%20Distributions.md)
- [ ] [04 Overview of Linux Architecture.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%201%20-%20Introduction%20to%20Linux/04%20Overview%20of%20Linux%20Architecture.md)
- [ ] [05 Linux Terminal Overview.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%201%20-%20Introduction%20to%20Linux/05%20Linux%20Terminal%20Overview.md)
- [ ] [06 Creating and Editing Text Files.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%201%20-%20Introduction%20to%20Linux/06%20Creating%20and%20Editing%20Text%20Files.md)
- [ ] [07 Installing Software and Updates.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%201%20-%20Introduction%20to%20Linux/07%20Installing%20Software%20and%20Updates.md)

- [ ] [01 Overview of Common Linux Shell Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/01%20Overview%20of%20Common%20Linux%20Shell%20Commands.md)
- [ ] [02 Informational Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/02%20Informational%20Commands.md)
- [ ] [03 File and Directory Navigation Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/03%20File%20and%20Directory%20Navigation%20Commands.md)
- [ ] [04 File and Directory Management Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/04%20File%20and%20Directory%20Management%20Commands.md)
- [ ] [05 Viewing File Content.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/05%20Viewing%20File%20Content.md)
- [ ] [06 Useful Commands for Wrangling Text Files.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/06%20Useful%20Commands%20for%20Wrangling%20Text%20Files.md)
- [ ] [07 Networking Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/07%20Networking%20Commands.md)
- [ ] [08 File Archiving and Compression Commands.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%202%20-%20Introduction%20to%20Linux%20Commands/08%20File%20Archiving%20and%20Compression%20Commands.md)

- [ ] [01 Shell Scripting Basics.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%203%20-%20Introduction%20to%20Shell%20Scripting/01%20Shell%20Scripting%20Basics.md) — **셸 스크립트는 CI 파이프라인의 실제 내용이다.** Phase 3에서 곧 쓴다
- [ ] [02 Filters, Pipes, and Variables.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%203%20-%20Introduction%20to%20Shell%20Scripting/02%20Filters,%20Pipes,%20and%20Variables.md)
- [ ] [03 Useful Features of the Bash Shell.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%203%20-%20Introduction%20to%20Shell%20Scripting/03%20Useful%20Features%20of%20the%20Bash%20Shell.md)
- [ ] [04 Scheduling Jobs using Cron.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/06%20Linux%20Commands%20and%20Shell%20Scripting/Module%203%20-%20Introduction%20to%20Shell%20Scripting/04%20Scheduling%20Jobs%20using%20Cron.md)

## 산출물 과제

1. **우리 팀 DevOps 진단표** — 1-B의 5단계(버전 관리 / CI·테스트 / 배포 / 구성 관리 / 모니터링)를 세로축에 두고, 각 단계마다 다음 세 칸을 채운다.

   | 단계 | 지금 어떻게 하고 있나 | 사람 손이 들어가는 지점 | 자동화하면 무엇이 줄어드나 |
   |---|---|---|---|

   이 표가 이 로드맵을 끝까지 갈 이유이고, Phase 7이 끝난 뒤 다시 채워 비교할 대상이다.

2. **허영 지표 골라내기** — 지금 팀이 보고하는 지표 중 1-C의 기준으로 허영 지표에 해당하는 것을 하나 찾고, 무엇으로 바꿔야 하는지 한 문장으로 쓴다.

3. **리눅스 실습** — 서버(또는 로컬 VM/컨테이너) 하나에 접속해 사용자를 만들고, 권한을 제한하고, 패키지를 설치하고, 로그 파일을 찾아 마지막 50줄을 본다. 각 단계에서 쓴 명령을 그대로 메모에 남긴다.

## 다음 단계

→ [02 Phase 2 - Git과 협업 워크플로](02%20Phase%202%20-%20Git%EA%B3%BC%20%ED%98%91%EC%97%85%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C.md)
