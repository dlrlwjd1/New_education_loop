# Phase 5 — 쿠버네티스 기초

- 목표: 쿠버네티스 클러스터에 앱을 올려 Deployment로 관리하고, 무중단 롤링 업데이트와 롤백을 손으로 해 본다.
- 분량: 약 8~10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- Docker만으로 부족한 지점(장애 복구·스케일·무중단 배포)을 설명할 수 있다.
- 컨트롤 플레인 구성 요소가 각각 무슨 일을 하는지 안다.
- `kubectl`로 리소스를 만들고, 상태를 보고, 로그를 읽고, 컨테이너에 들어갈 수 있다.
- Pod 생애주기와 `Pending`에서 멈추는 원인을 진단할 수 있다.
- Deployment로 롤링 업데이트와 롤백을 수행할 수 있다.
- liveness·readiness 프로브를 설정해 죽은 인스턴스로 트래픽이 가지 않게 만들 수 있다.
- HPA로 부하에 따라 파드 수가 늘어나게 만들 수 있다.

> **로컬 클러스터 준비**: minikube, kind, Docker Desktop 내장 쿠버네티스 중 하나. 강의는 minikube 기준이 많다.

## 5-A. 오케스트레이션이 왜 필요한가

메인: Master DevOps, Course 4, Module 3 (앞부분)

- [ ] [01 Kubernetes Case Study.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/01%20Kubernetes%20Case%20Study.md) — 실제 사례
- [ ] [02 What is Kubernetes - Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/02%20What%20is%20Kubernetes%20-%20Introduction.md) — **핵심 강의**
- [ ] [03 What is Kubernetes - Importance of Kubernetes.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/03%20What%20is%20Kubernetes%20-%20Importance%20of%20Kubernetes.md) — 무엇이 없으면 안 되는가

- [ ] [01 Container Orchestration.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%202%20-%20Kubernetes%20Basics/01%20Container%20Orchestration.md) — **컨테이너 오케스트레이션의 정의** — Phase 4의 Docker와 경계를 긋는 강의
- [ ] [02 Introduction to Kubernetes.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%202%20-%20Kubernetes%20Basics/02%20Introduction%20to%20Kubernetes.md)

## 5-B. 아키텍처와 핵심 오브젝트

메인: Master DevOps, Course 4, Module 3 (이어서)

- [ ] [04 Kubernetes Core Concepts - Overview.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/04%20Kubernetes%20Core%20Concepts%20-%20Overview.md)
- [ ] [05 Kubernetes Core Concepts - Nodes and Pods.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/05%20Kubernetes%20Core%20Concepts%20-%20Nodes%20and%20Pods.md) — **노드와 파드(Pod)** — 파드가 컨테이너가 아니라 컨테이너 묶음이라는 점이 중요하다
- [ ] [06 Kubernetes Core Concepts - ReplicaSets and Namespaces.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/06%20Kubernetes%20Core%20Concepts%20-%20ReplicaSets%20and%20Namespaces.md) — ReplicaSet과 네임스페이스
- [ ] [07 Kubernetes Control Plane Components in Depth.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/07%20Kubernetes%20Control%20Plane%20Components%20in%20Depth.md) — **컨트롤 플레인 상세** (API 서버 · etcd · 스케줄러 · 컨트롤러 매니저). 「왜 내 파드가 안 뜨는가」를 추적할 때 필요한 지도

함께 보기: IBM 강좌의 아키텍처·오브젝트 (더 짧다)

- [ ] [03 Kubernetes Architecture.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%202%20-%20Kubernetes%20Basics/03%20Kubernetes%20Architecture.md) — 아키텍처 요약
- [ ] [04 Kubernetes Objects - Part 1.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%202%20-%20Kubernetes%20Basics/04%20Kubernetes%20Objects%20-%20Part%201.md) — 오브젝트 1
- [ ] [05 Kubernetes Objects - Part 2.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%202%20-%20Kubernetes%20Basics/05%20Kubernetes%20Objects%20-%20Part%202.md) — 오브젝트 2
- [ ] [06 Using Kubectl.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%202%20-%20Kubernetes%20Basics/06%20Using%20Kubectl.md)

함께 보기: 실습 관점의 클러스터 투어

- [ ] [01 Installing Kubernetes.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/01%20Installing%20Kubernetes.md) — **로컬 클러스터 설치** — 여기서 시작한다
- [ ] [02 IMPORTANT Note for Minikube and MicroK8s Users.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/02%20IMPORTANT%20Note%20for%20Minikube%20and%20MicroK8s%20Users.md)
- [ ] [03 A Kubernetes Tour.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/03%20A%20Kubernetes%20Tour.md) — **클러스터 한 바퀴 둘러보기**
- [ ] [04 Important Kubernetes Terminology.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/04%20Important%20Kubernetes%20Terminology.md) — **용어 정리** — 파드·디플로이먼트·서비스가 실제로 무엇을 가리키는지
- [ ] [05 Notes on Config Files.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/05%20Notes%20on%20Config%20Files.md) — YAML 설정 파일 규칙

## 5-C. kubectl — 손에 붙여야 하는 도구

메인: Master DevOps, Course 4, Module 3 (이어서)

- [ ] [08 What is Kubectl.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/08%20What%20is%20Kubectl.md)
- [ ] [09 kubectl Installation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/09%20kubectl%20Installation.md)
- [ ] [10 Kubectl Basic Command - create, get, run, and expose.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/10%20Kubectl%20Basic%20Command%20-%20create,%20get,%20run,%20and%20expose.md) — **기본 명령** — `create`·`get`·`run`·`expose`
- [ ] [11 Kubectl Basic Command - delete, apply, and edit.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/11%20Kubectl%20Basic%20Command%20-%20delete,%20apply,%20and%20edit.md) — `delete`·`apply`·`edit`. **`apply`가 실전의 기본**이다 (선언형)
- [ ] [12 Kubectl Advanced Commands - rollout, scale, and set.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/12%20Kubectl%20Advanced%20Commands%20-%20rollout,%20scale,%20and%20set.md) — `rollout`·`scale`·`set` — 배포 조작
- [ ] [13 Kubectl Advanced Commands - describe, exec, and logs.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/13%20Kubectl%20Advanced%20Commands%20-%20describe,%20exec,%20and%20logs.md) — **`describe`·`exec`·`logs`** — 문제 진단의 3대 명령. 이 셋으로 대부분을 잡는다
- [ ] [14 Working with kubectl Commands - Setting Up and Verifying Kubernetes Cluster.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/14%20Working%20with%20kubectl%20Commands%20-%20Setting%20Up%20and%20Verifying%20Kubernetes%20Cluster.md)
- [ ] [15 Working with kubectl Commands - Creating the YAML File for Deployment.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/15%20Working%20with%20kubectl%20Commands%20-%20Creating%20the%20YAML%20File%20for%20Deployment.md) — **Deployment YAML 작성**
- [ ] [16 Working with kubectl Commands - Describing Deployments.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/16%20Working%20with%20kubectl%20Commands%20-%20Describing%20Deployments.md)
- [ ] [17 Working with kubectl Commands - Scaling Deployments.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/17%20Working%20with%20kubectl%20Commands%20-%20Scaling%20Deployments.md)
- [ ] [18 Kubectl Plugins and Client-Side Configuration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/18%20Kubectl%20Plugins%20and%20Client-Side%20Configuration.md)

함께 보기

- [ ] [09 Common Kubectl Commands.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/09%20Common%20Kubectl%20Commands.md) — 실무에서 실제로 치는 명령들
- [ ] [10 A Time-Saving Alias.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/10%20A%20Time-Saving%20Alias.md) — `alias k=kubectl` — 사소하지만 하루에 백 번 친다

- [ ] [06 Using Kubectl.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%202%20-%20Kubernetes%20Basics/06%20Using%20Kubectl.md)

## 5-D. Pod

메인: Master DevOps, Course 4, Module 3 (이어서)

- [ ] [19 What are Pods.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/19%20What%20are%20Pods.md) — **파드의 정의**
- [ ] [20 Pod Lifecycle - Pending Phase.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/20%20Pod%20Lifecycle%20-%20Pending%20Phase.md) — **`Pending` 단계** — 파드가 안 뜰 때 가장 자주 만나는 상태. 원인(자원 부족·스케줄 불가·이미지)을 여기서 배운다
- [ ] [21 Pod Lifecycle - Running, Succeeded, and Failed.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/21%20Pod%20Lifecycle%20-%20Running,%20Succeeded,%20and%20Failed.md) — Running / Succeeded / Failed
- [ ] [25 Kubernetes Pods Demonstration - Pod Creation and Verification.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/25%20Kubernetes%20Pods%20Demonstration%20-%20Pod%20Creation%20and%20Verification.md)
- [ ] [26 Kubernetes Pods Demonstration - Describing a Pod and Verifying Connectivity.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/26%20Kubernetes%20Pods%20Demonstration%20-%20Describing%20a%20Pod%20and%20Verifying%20Connectivity.md)
- [ ] [27 Kubernetes Pods Demonstration - Testing Connectivity with Port Forwarding.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/27%20Kubernetes%20Pods%20Demonstration%20-%20Testing%20Connectivity%20with%20Port%20Forwarding.md) — 포트 포워딩으로 파드에 직접 접속 — Service 없이 확인하는 방법

함께 보기: 파드를 직접 만들며 오류를 만나 보기

- [ ] [06 Creating a Pod.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/06%20Creating%20a%20Pod.md) — 첫 파드 생성
- [ ] [07 ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/07%20ErrImagePull,%20ErrImageNeverPull%20and%20ImagePullBackoff%20Errors.md) — **`ErrImagePull`·`ImagePullBackOff`** — 초보자가 100% 만나는 오류. Phase 4의 레지스트리와 이어진다
- [ ] [08 Understanding a Pod Spec.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/08%20Understanding%20a%20Pod%20Spec.md) — 파드 스펙 해부

## 5-E. ReplicaSet과 Deployment — 실제로 쓰는 단위

메인: Master DevOps, Course 4, Module 3 (이어서)

- [ ] [22 ReplicaSet and ReplicationController - Defining ReplicaSet.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/22%20ReplicaSet%20and%20ReplicationController%20-%20Defining%20ReplicaSet.md) — ReplicaSet 정의
- [ ] [23 ReplicaSet and ReplicationController - Use Cases.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/23%20ReplicaSet%20and%20ReplicationController%20-%20Use%20Cases.md)
- [ ] [24 ReplicaSet and ReplicationController - Comparison.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/24%20ReplicaSet%20and%20ReplicationController%20-%20Comparison.md) — ReplicaSet과 ReplicationController 비교 — 후자는 구식이다
- [ ] [28 Deployment - Introduction and Key Features.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/28%20Deployment%20-%20Introduction%20and%20Key%20Features.md) — **Deployment** — 실무에서 파드를 직접 만들지 않고 이걸 만든다
- [ ] [29 Deployments - Strategies.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/29%20Deployments%20-%20Strategies.md) — **배포 전략** (RollingUpdate / Recreate)
- [ ] [30 Deployments - Use Cases.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/30%20Deployments%20-%20Use%20Cases.md)

- [ ] [01 ReplicaSet.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%203%20-%20Managing%20Applications%20with%20Kubernetes/01%20ReplicaSet.md) — IBM 쪽 ReplicaSet 요약

함께 보기

- [ ] [11 Introducing Deployments.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/11%20Introducing%20Deployments.md) — Deployment 도입 이유
- [ ] [12 Creating a Deployment.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/12%20Creating%20a%20Deployment.md)
- [ ] [13 Common Commands Around Deployments.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/13%20Common%20Commands%20Around%20Deployments.md)
- [ ] [14 Updating Deployments.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/14%20Updating%20Deployments.md) — **Deployment 업데이트** — 이미지 태그를 바꾸는 순간 무슨 일이 일어나는가
- [ ] [15 Preferred Method for Updating Deployments.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/15%20Preferred%20Method%20for%20Updating%20Deployments.md) — **권장 업데이트 방식** — `latest` 태그를 쓰면 안 되는 이유가 여기서 나온다. Phase 7의 CI가 커밋 해시로 태그를 붙이는 근거

## 5-F. 롤링 업데이트와 롤백

메인: Master DevOps, Course 4, Module 3 (이어서)

**이 묶음이 Phase 5의 핵심이다.** 무중단 배포와 사고 시 즉시 되돌리기가 여기서 가능해진다.

- [ ] [31 Rolling Updates and Rollbacks - Overview.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/31%20Rolling%20Updates%20and%20Rollbacks%20-%20Overview.md) — **롤링 업데이트 개념**
- [ ] [32 Rolling Updates and Rollbacks - Configuration Parameters.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/32%20Rolling%20Updates%20and%20Rollbacks%20-%20Configuration%20Parameters.md) — `maxSurge`·`maxUnavailable` — 무중단의 실제 조건
- [ ] [33 Rolling Updates and Rollbacks - Performing a Rolling Update.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/33%20Rolling%20Updates%20and%20Rollbacks%20-%20Performing%20a%20Rolling%20Update.md)
- [ ] [34 Deployments, Rolling Updates and Scaling in Kubernetes - Setting up Deployments.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/34%20Deployments,%20Rolling%20Updates%20and%20Scaling%20in%20Kubernetes%20-%20Setting%20up%20Deployments.md) — 실습 시작
- [ ] [35 Deployments, Rolling Updates and Scaling in Kubernetes - Exposing Deployments via NodePort.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/35%20Deployments,%20Rolling%20Updates%20and%20Scaling%20in%20Kubernetes%20-%20Exposing%20Deployments%20via%20NodePort.md)
- [ ] [36 Deployments, Rolling Updates and Scaling in Kubernetes - Performing Rolling Updates.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/36%20Deployments,%20Rolling%20Updates%20and%20Scaling%20in%20Kubernetes%20-%20Performing%20Rolling%20Updates.md) — **롤링 업데이트 수행**
- [ ] [37 Deployments, Rolling Updates and Scaling in Kubernetes - Performing Rollback.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/37%20Deployments,%20Rolling%20Updates%20and%20Scaling%20in%20Kubernetes%20-%20Performing%20Rollback.md) — **롤백** — `kubectl rollout undo`. 장애 대응의 첫 수단

- [ ] [03 Rolling Updates.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%203%20-%20Managing%20Applications%20with%20Kubernetes/03%20Rolling%20Updates.md)

## 5-G. 스케일링과 헬스 체크

메인: Master DevOps, Course 4, Module 3 (이어서)

- [ ] [38 Deployments, Rolling Updates and Scaling in Kubernetes - Autoscaling with HPA.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/38%20Deployments,%20Rolling%20Updates%20and%20Scaling%20in%20Kubernetes%20-%20Autoscaling%20with%20HPA.md) — **HPA 오토스케일링** — 부하에 따라 파드 수 자동 조절
- [ ] [39 Kubernetes Health-Check Patterns.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/39%20Kubernetes%20Health-Check%20Patterns.md) — **liveness·readiness 프로브** — 이게 없으면 롤링 업데이트가 무중단이 아니다. 준비 안 된 파드로 트래픽이 간다
- [ ] [40 Summary - Introduction to Kubernetes.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%203%20-%20Getting%20Started%20with%20Kubernetes/40%20Summary%20-%20Introduction%20to%20Kubernetes.md)

- [ ] [02 Autoscaling.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%203%20-%20Managing%20Applications%20with%20Kubernetes/02%20Autoscaling.md) — IBM 쪽 오토스케일링 요약

## 산출물 과제

1. **Deployment로 앱 띄우기** — Phase 4에서 만든 이미지를 로컬 클러스터에 Deployment로 배포한다. `kubectl port-forward`로 접속 확인.
2. **롤링 업데이트 + 롤백 실습** — 앱 코드를 바꿔 새 태그로 빌드·푸시하고 이미지를 교체한다. 업데이트 중 `kubectl get pods -w`로 파드 교체 과정을 관찰한다. 그 다음 `rollout undo`로 되돌린다.
3. **무중단 검증** — 롤링 업데이트 중에 1초마다 요청을 보내는 스크립트를 돌려 **실패한 요청 수를 센다.** 프로브를 넣기 전/후로 각각 측정해 숫자를 남긴다. 이 숫자가 이 Phase의 진짜 산출물이다.
4. **HPA 적용** — 부하를 걸어 파드가 늘어나는 것을 확인한다.
5. **진단 훈련** — 일부러 잘못된 이미지 태그로 Deployment를 만들고, `describe`·`logs`만으로 원인을 찾아 고친다.

## 다음 단계

→ [06 Phase 6 - 쿠버네티스 네트워킹·스토리지·설정](06%20Phase%206%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9%20%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%20%EC%84%A4%EC%A0%95.md)
