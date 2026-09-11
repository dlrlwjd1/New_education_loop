# Phase 3 — 빌드 자동화와 CI

- 목표: PR을 올리면 자동으로 빌드와 테스트가 돌고, 실패하면 머지가 막히는 상태를 만든다.
- 분량: 약 10~12시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 빌드 자동화 도구가 무엇을 대신해 주는지 설명할 수 있다 (의존성·라이프사이클·플러그인).
- CI 서버(Jenkins)와 SaaS형 CI(GitHub Actions)의 차이를 알고 프로젝트에 맞는 쪽을 고를 수 있다.
- Jenkinsfile 또는 워크플로 YAML로 파이프라인을 **코드로** 정의할 수 있다.
- CI를 저장소에 연결해 PR마다 테스트가 돌게 만들 수 있다.
- CI 파이프라인의 병목을 찾아 빌드 시간을 줄일 수 있다.

> **Java를 쓰지 않는다면** 3-B(Maven/Gradle)는 개념만 훑고 넘어간다. 대신 3-D(GitHub Actions)를 먼저 하고, 자기 언어의 빌드 도구(npm, pip, go build 등)로 같은 일을 한다. Maven의 라이프사이클 개념 자체는 다른 도구를 이해할 때도 그대로 쓰인다.

## 3-A. CI란 무엇인가

메인: IBM Continuous Integration and Delivery, Module 1~2 (개념)

- [ ] [01 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/01%20Course%20Introduction.md)
- [ ] [02 Pre-requisites.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/02%20Pre-requisites.md)
- [ ] [03 Course Overview.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/03%20Course%20Overview.md)
- [ ] [04 Module 1 Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/04%20Module%201%20Introduction.md)
- [ ] [05 What Is CI-CD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/05%20What%20Is%20CI-CD.md) — **CI와 CD의 정의와 경계.** 두 용어가 섞여 쓰이는 혼란을 여기서 정리한다
- [ ] [06 Platform and Tools.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/06%20Platform%20and%20Tools.md) — 도구 지형도
- [ ] [07 Infrastructure as Code (IaC).md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/07%20Infrastructure%20as%20Code%20%28IaC%29.md) — → Phase 9
- [ ] [08 Summary and Highlights - Introduction to CI-CD.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%201%20-%20Introduction%20to%20CI-CD/08%20Summary%20and%20Highlights%20-%20Introduction%20to%20CI-CD.md)

- [ ] [01 Module 2 Introduction.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/01%20Module%202%20Introduction.md)
- [ ] [02 What Is Continuous Integration (CI).md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/02%20What%20Is%20Continuous%20Integration%20%28CI%29.md) — **핵심 정의** — 「하루에 여러 번 통합한다」가 왜 품질을 올리는가
- [ ] [03 Benefits of CI.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/03%20Benefits%20of%20CI.md) — 이익
- [ ] [07 Tools of Continuous Integration (CI).md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/07%20Tools%20of%20Continuous%20Integration%20%28CI%29.md) — CI 도구 비교
- [ ] [08 Summary and Highlights - Understanding Continuous Integration (CI).md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/08%20Summary%20and%20Highlights%20-%20Understanding%20Continuous%20Integration%20%28CI%29.md)

메인: Master DevOps, Course 2, Module 2 (앞부분 — CI 개념)

- [ ] [01 Traditional Integration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/01%20Traditional%20Integration.md) — **통합을 미뤘을 때 무엇이 터지는가** — CI의 필요성을 체감시키는 강의
- [ ] [02 Introduction to Continuous Integration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/02%20Introduction%20to%20Continuous%20Integration.md)

## 3-B. 빌드 자동화 — Maven과 Gradle

메인: Master DevOps, Course 2, Module 1

- [ ] [01 Specialization Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/01%20Specialization%20Introduction.md)
- [ ] [02 Welcome to Continuous Integration and Continuous Deployment.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/02%20Welcome%20to%20Continuous%20Integration%20and%20Continuous%20Deployment.md)
- [ ] [03 Course Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/03%20Course%20Introduction.md)
- [ ] [04 What is Build Automation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/04%20What%20is%20Build%20Automation.md) — **「빌드 자동화」가 정확히 무엇을 자동화하는가** — 언어와 무관하게 통하는 개념
- [ ] [05 Scenario - Emergence of Maven.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/05%20Scenario%20-%20Emergence%20of%20Maven.md)
- [ ] [06 Introduction to Maven.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/06%20Introduction%20to%20Maven.md)
- [ ] [07 Maven Architecture - Core Components.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/07%20Maven%20Architecture%20-%20Core%20Components.md)
- [ ] [08 Maven Architecture - Maven Artifacts.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/08%20Maven%20Architecture%20-%20Maven%20Artifacts.md)
- [ ] [09 Dependencies in Maven.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/09%20Dependencies%20in%20Maven.md) — **의존성 관리** — 빌드 도구의 존재 이유 1순위
- [ ] [10 Maven Repositories.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/10%20Maven%20Repositories.md)
- [ ] [11 Installing and Setting Up Maven.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/11%20Installing%20and%20Setting%20Up%20Maven.md)
- [ ] [12 Importance of Maven in DevOps CI-CD Pipelines.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/12%20Importance%20of%20Maven%20in%20DevOps%20CI-CD%20Pipelines.md) — CI 파이프라인 안에서 빌드 도구의 자리
- [ ] [13 How to use Discussion Prompt.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/13%20How%20to%20use%20Discussion%20Prompt.md)
- [ ] [14 Creating a Maven Project.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/14%20Creating%20a%20Maven%20Project.md)
- [ ] [15 Customizing POM.xml.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/15%20Customizing%20POM.xml.md) — `pom.xml` — 빌드 설정을 코드로 두는 첫 경험
- [ ] [16 Maven Lifecycle Phases.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/16%20Maven%20Lifecycle%20Phases.md) — **라이프사이클 단계** (validate → compile → test → package → install → deploy). CI 스크립트의 골격이 이것이다
- [ ] [17 Working with Plugins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/17%20Working%20with%20Plugins.md)
- [ ] [18 Maven Profiles.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/18%20Maven%20Profiles.md)
- [ ] [19 Structuring a Maven Project - Best Practices for Maintainable Codebases.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/19%20Structuring%20a%20Maven%20Project%20-%20Best%20Practices%20for%20Maintainable%20Codebases.md)
- [ ] [20 Introduction to Gradle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/20%20Introduction%20to%20Gradle.md)
- [ ] [21 Why Gradle in DevOps.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/21%20Why%20Gradle%20in%20DevOps.md)
- [ ] [22 Gradle Architecture.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/22%20Gradle%20Architecture.md)
- [ ] [23 Dependencies in Gradle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/23%20Dependencies%20in%20Gradle.md)
- [ ] [24 Gradle vs Maven in DevOps Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/24%20Gradle%20vs%20Maven%20in%20DevOps%20Pipeline.md) — **Gradle vs Maven** — 선택 근거
- [ ] [25 Continuous Integration with Gradle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/25%20Continuous%20Integration%20with%20Gradle.md)
- [ ] [26 GradleWrapper.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/26%20GradleWrapper.md) — Gradle Wrapper — 팀원마다 다른 도구 버전 문제 해결
- [ ] [27 Setting up Gradle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/27%20Setting%20up%20Gradle.md)
- [ ] [28 Executing a Sample Gradle Application.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/28%20Executing%20a%20Sample%20Gradle%20Application.md)
- [ ] [29 Optimizing Gradle Build Performance.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/29%20Optimizing%20Gradle%20Build%20Performance.md) — **빌드 시간 줄이기** — CI가 느려지면 아무도 안 기다린다
- [ ] [30 Summary - Build Automation with Maven and Gradle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%201%20-%20Build%20Automation%20with%20Maven%20and%20Gradle/30%20Summary%20-%20Build%20Automation%20with%20Maven%20and%20Gradle.md)

## 3-C. Jenkins — 자체 호스팅 CI 서버

메인: Master DevOps, Course 2, Module 2 (39개 강의)

이 모듈이 Phase 3의 중심이다. Jenkins를 안 쓰더라도 **CI 서버가 내부적으로 무슨 일을 하는지**는 여기서만 배울 수 있다.

- [ ] [03 Introduction to Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/03%20Introduction%20to%20Jenkins.md)
- [ ] [04 Jenkins Architecture.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/04%20Jenkins%20Architecture.md) — **아키텍처**
- [ ] [05 Jenkins Master-Slave Architecture.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/05%20Jenkins%20Master-Slave%20Architecture.md) — **마스터-슬레이브(에이전트) 구조** — 빌드를 여러 대에 분산하는 원리. GitHub Actions의 러너(runner)와 같은 개념
- [ ] [06 Installing Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/06%20Installing%20Jenkins.md)
- [ ] [07 History of Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/07%20History%20of%20Jenkins.md)
- [ ] [08 Plugin Management in Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/08%20Plugin%20Management%20in%20Jenkins.md) — 플러그인 — Jenkins의 힘과 취약점이 동시에 여기서 나온다
- [ ] [09 Plugin Management - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/09%20Plugin%20Management%20-%20Demonstration.md)

보안 — CI 서버는 모든 자격 증명을 들고 있다. 건너뛰면 안 되는 묶음이다.

- [ ] [10 Jenkins Security - Security Management.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/10%20Jenkins%20Security%20-%20Security%20Management.md)
- [ ] [11 Jenkins Security - Access Controls.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/11%20Jenkins%20Security%20-%20Access%20Controls.md)
- [ ] [12 Jenkins Credentials.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/12%20Jenkins%20Credentials.md) — **자격 증명(credentials) 관리** — 파이프라인에 비밀값을 평문으로 두지 않는 법
- [ ] [13 Notifications in Jenkins (Email, SMS and Slack).md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/13%20Notifications%20in%20Jenkins%20%28Email,%20SMS%20and%20Slack%29.md)
- [ ] [14 Notifications in Jenkins (Email, SMS and Slack) - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/14%20Notifications%20in%20Jenkins%20%28Email,%20SMS%20and%20Slack%29%20-%20Demonstration.md)
- [ ] [15 Hardening Jenkins - A Comprehensive Security Checklist.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/15%20Hardening%20Jenkins%20-%20A%20Comprehensive%20Security%20Checklist.md) — **보안 체크리스트** — 자체 호스팅 CI를 운영한다면 필수

파이프라인 만들기

- [ ] [16 Building a Delivery Pipeline with Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/16%20Building%20a%20Delivery%20Pipeline%20with%20Jenkins.md)
- [ ] [17 Creating and Managing Pipeline Views.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/17%20Creating%20and%20Managing%20Pipeline%20Views.md)
- [ ] [18 Creating a View to Monitor Pipelines in Jenkins (Demo).md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/18%20Creating%20a%20View%20to%20Monitor%20Pipelines%20in%20Jenkins%20%28Demo%29.md)
- [ ] [19 Pipeline as Code with Jenkinsfile.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/19%20Pipeline%20as%20Code%20with%20Jenkinsfile.md) — **Pipeline as Code (Jenkinsfile)** — UI 클릭 설정을 버리고 파이프라인을 저장소에 커밋한다. **이 모듈에서 가장 중요한 개념**
- [ ] [20 Pipeline as Code with Jenkinsfile - Writing Pipeline Code.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/20%20Pipeline%20as%20Code%20with%20Jenkinsfile%20-%20Writing%20Pipeline%20Code.md)
- [ ] [21 Pipeline as Code with Jenkinsfile - Building Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/21%20Pipeline%20as%20Code%20with%20Jenkinsfile%20-%20Building%20Pipeline.md)
- [ ] [22 Connecting Jenkins to Version Control System.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/22%20Connecting%20Jenkins%20to%20Version%20Control%20System.md) — 저장소 연결 — 푸시가 빌드를 트리거하는 지점
- [ ] [23 Connecting Jenkins to Version Control System - Git Configuration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/23%20Connecting%20Jenkins%20to%20Version%20Control%20System%20-%20Git%20Configuration.md)
- [ ] [24 Connecting Jenkins to Version Control System - GitHub Repository.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/24%20Connecting%20Jenkins%20to%20Version%20Control%20System%20-%20GitHub%20Repository.md)
- [ ] [25 Integrating Jenkins with Maven.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/25%20Integrating%20Jenkins%20with%20Maven.md) — 빌드 도구 연결 (3-B와 이어짐)
- [ ] [26 Integrating Jenkins with Maven (Demo).md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/26%20Integrating%20Jenkins%20with%20Maven%20%28Demo%29.md)
- [ ] [27 Integrating Jenkins with Gradle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/27%20Integrating%20Jenkins%20with%20Gradle.md)
- [ ] [28 Implementing Jenkins Pipelines as Code.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/28%20Implementing%20Jenkins%20Pipelines%20as%20Code.md)
- [ ] [29 Automated Testing with Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/29%20Automated%20Testing%20with%20Jenkins.md) — **자동 테스트 실행** — CI가 실제로 값을 만드는 순간

파이프라인 개선과 모니터링

- [ ] [33 Enhancing the CI-CD Pipelines - Common Bottlenecks.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/33%20Enhancing%20the%20CI-CD%20Pipelines%20-%20Common%20Bottlenecks.md) — **병목 찾기** — 빌드가 30분이면 CI는 사실상 없는 것과 같다
- [ ] [34 Enhancing the CI-CD Pipelines - Enhancing Build Processes.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/34%20Enhancing%20the%20CI-CD%20Pipelines%20-%20Enhancing%20Build%20Processes.md)
- [ ] [35 Monitoring Jenkins Jobs and Pipelines.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/35%20Monitoring%20Jenkins%20Jobs%20and%20Pipelines.md) — CI 자체를 관측하기. **개발운영 로드맵**의 관측성과 이어진다
- [ ] [36 Jenkins Monitoring - Load Statistics.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/36%20Jenkins%20Monitoring%20-%20Load%20Statistics.md)
- [ ] [37 Jenkins Monitoring - Jenkins Instance.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/37%20Jenkins%20Monitoring%20-%20Jenkins%20Instance.md)
- [ ] [38 Monitoring Jenkins - Tools and Techniques.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/38%20Monitoring%20Jenkins%20-%20Tools%20and%20Techniques.md)
- [ ] [39 Summary - Continuous Integration using Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/39%20Summary%20-%20Continuous%20Integration%20using%20Jenkins.md)

> 30~32번(Jenkins로 배포하기)은 CD 영역이라 [Phase 8](08%20Phase%208%20-%20CD%20%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8%EA%B3%BC%20GitOps.md)에서 다룬다.

## 3-D. GitHub Actions — 저장소에 붙는 CI

메인: IBM Continuous Integration and Delivery, Module 2 (뒷부분)

- [ ] [09 GitHub - Getting Started.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/09%20GitHub%20-%20Getting%20Started.md)
- [ ] [10 Introduction to GitHub Actions.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/10%20Introduction%20to%20GitHub%20Actions.md) — **GitHub Actions 입문** — 별도 서버 없이 저장소 안에서 CI를 돌린다. 개인·소규모 팀의 기본 선택
- [ ] [11 Deeper Dive into GitHub Actions - Part 1.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/11%20Deeper%20Dive%20into%20GitHub%20Actions%20-%20Part%201.md) — 워크플로 문법
- [ ] [12 Deeper Dive into GitHub Actions - Part 2.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/12%20Continuous%20Integration%20and%20Delivery/Module%202%20-%20Continuous%20Integration/12%20Deeper%20Dive%20into%20GitHub%20Actions%20-%20Part%202.md)

메인: Microservices with Node JS and React, Section 23 (앞부분 — 실전 CI)

**이 묶음이 Phase 3에서 가장 실전적이다.** 실제 저장소에 워크플로를 만들고, PR에서 테스트를 돌리고, 병렬 실행과 선택적 실행까지 간다.

- [ ] [01 Development Workflow.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/01%20Development%20Workflow.md) — **개발 워크플로 설계** — Phase 2의 브랜치 전략과 CI를 붙이는 지점
- [ ] [02 Git Repository Approaches.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/02%20Git%20Repository%20Approaches.md) — 모노레포냐 멀티레포냐 — CI 구성이 여기서 갈린다
- [ ] [03 Creating a GitHub Action.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/03%20Creating%20a%20GitHub%20Action.md) — **첫 워크플로 만들기**
- [ ] [04 Adding a CI Test Script.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/04%20Adding%20a%20CI%20Test%20Script.md)
- [ ] [05 Tests in GitHub Actions Hang - Jest did not exit.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/05%20Tests%20in%20GitHub%20Actions%20Hang%20-%20Jest%20did%20not%20exit.md)
- [ ] [06 Running Tests on PR Creation.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/06%20Running%20Tests%20on%20PR%20Creation.md) — **PR 생성 시 테스트 실행** — 이 Phase의 목표 상태
- [ ] [07 Output of Failing Tests.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/07%20Output%20of%20Failing%20Tests.md) — 실패한 테스트의 출력 읽기
- [ ] [08 Running Tests in Parallel.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/08%20Running%20Tests%20in%20Parallel.md) — **병렬 실행** — 빌드 시간 단축의 가장 쉬운 방법
- [ ] [09 Verifying a Test Run.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/09%20Verifying%20a%20Test%20Run.md)
- [ ] [10 Selective Test Execution.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2023%20-%20CI-CD/10%20Selective%20Test%20Execution.md) — 바뀐 서비스만 테스트하기 — 모노레포에서 필수

> 11번 이후(배포)는 [Phase 7](07%20Phase%207%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%B0%B0%ED%8F%AC%20%EC%8B%A4%EC%A0%84.md)에서 이어 본다. 쿠버네티스를 먼저 알아야 하기 때문이다.

## 3-E. 정리

- [ ] [01 Course Summary.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%204%20-%20Course%20Wrap-Up%20and%20Assessment/01%20Course%20Summary.md)
- [ ] [02 Practice Project - Designing and Automating a CI-CD Pipeline for a Healthcare Web App Using Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%204%20-%20Course%20Wrap-Up%20and%20Assessment/02%20Practice%20Project%20-%20Designing%20and%20Automating%20a%20CI-CD%20Pipeline%20for%20a%20Healthcare%20Web%20App%20Using%20Jenkins.md) — **실습 프로젝트** — Jenkins로 CI/CD 파이프라인 설계. Phase 3과 8을 아우른다

## 산출물 과제

1. **PR CI 파이프라인 1개** — 자기 저장소에 워크플로를 만들어 다음이 자동으로 돌게 한다.
   - 의존성 설치 → 린트 → 테스트 → 빌드
   - PR에서 실패하면 머지 버튼이 막히도록 브랜치 보호 규칙 설정
2. **파이프라인을 코드로** — 설정이 UI가 아니라 저장소 파일(`Jenkinsfile` 또는 `.github/workflows/*.yml`)에 있어야 한다. 파일을 지우면 CI가 사라지는 상태가 정답이다.
3. **빌드 시간 측정과 단축** — 현재 파이프라인 소요 시간을 기록하고, 캐시나 병렬 실행을 적용해 다시 측정한다. **전/후 숫자를 남긴다.**
4. **도구 선택 근거 한 문단** — Jenkins와 GitHub Actions 중 왜 그쪽을 골랐는지 쓴다. 판단 기준은 [12 부록](12%20%EB%B6%80%EB%A1%9D%20-%20%EB%8F%84%EA%B5%AC%20%EC%84%A0%ED%83%9D%EA%B3%BC%20%EC%B9%98%ED%8A%B8%EC%8B%9C%ED%8A%B8.md)에 정리해 뒀다.

## 다음 단계

→ [04 Phase 4 - 컨테이너 Docker](04%20Phase%204%20-%20%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%20Docker.md)
