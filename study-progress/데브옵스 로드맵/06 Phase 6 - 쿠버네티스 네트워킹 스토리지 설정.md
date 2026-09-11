# Phase 6 — 쿠버네티스 네트워킹·스토리지·설정

- 목표: 서비스끼리 통신하게 만들고, 외부에 도메인으로 노출하고, 설정과 비밀값을 이미지에서 분리하고, 데이터를 살려 둔다.
- 분량: 약 10~12시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- Service 네 종류(ClusterIP·NodePort·LoadBalancer·ExternalName)를 언제 각각 쓰는지 안다.
- Ingress로 하나의 진입점에서 경로별로 여러 서비스에 라우팅할 수 있다.
- ConfigMap과 Secret으로 환경별 설정을 이미지 바깥으로 뺄 수 있다.
- PersistentVolume/PVC로 파드가 죽어도 데이터가 남게 만들 수 있다.
- StatefulSet이 Deployment와 무엇이 다르고 언제 필요한지 안다.
- Helm 차트로 배포를 패키징하고 값(values)만 바꿔 환경별로 배포할 수 있다.

## 6-A. 라벨과 셀렉터 — 쿠버네티스가 리소스를 묶는 방식

메인: Master DevOps, Course 4, Module 4 (앞부분)

- [ ] [01 Labels, Selectors and Annotations - Characteristics of Labels.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/01%20Labels,%20Selectors%20and%20Annotations%20-%20Characteristics%20of%20Labels.md) — **라벨** — Service가 어떤 파드로 트래픽을 보낼지 결정하는 유일한 근거. 여기가 틀리면 Service가 빈 엔드포인트를 갖는다
- [ ] [02 Labels, Selectors and Annotations - Types of Selectors.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/02%20Labels,%20Selectors%20and%20Annotations%20-%20Types%20of%20Selectors.md) — 셀렉터 종류
- [ ] [03 Labels, Selectors and Annotations - Example of Annotation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/03%20Labels,%20Selectors%20and%20Annotations%20-%20Example%20of%20Annotation.md)

## 6-B. Service — 파드에 안정적인 주소를 주기

메인: Master DevOps, Course 4, Module 4 (이어서)

- [ ] [04 Services - ClusterIP.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/04%20Services%20-%20ClusterIP.md) — **ClusterIP** — 기본값. 클러스터 내부 통신용
- [ ] [05 Services - ClusterIP (Default) Example.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/05%20Services%20-%20ClusterIP%20%28Default%29%20Example.md)
- [ ] [06 Services - NodePort Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/06%20Services%20-%20NodePort%20Service.md) — NodePort — 노드 포트로 노출. 개발용
- [ ] [07 Services - LoadBalancer Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/07%20Services%20-%20LoadBalancer%20Service.md) — LoadBalancer — 클라우드 로드밸런서 연동. 실서비스 외부 노출
- [ ] [08 Services - ExternalName Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/08%20Services%20-%20ExternalName%20Service.md) — ExternalName — 클러스터 밖 리소스를 서비스처럼
- [ ] [09 Services - Headless Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/09%20Services%20-%20Headless%20Service.md) — Headless — StatefulSet과 함께 쓴다 (6-F)
- [ ] [10 Services - Demonstration - Setting Up the Cluster.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/10%20Services%20-%20Demonstration%20-%20Setting%20Up%20the%20Cluster.md)
- [ ] [11 Services - Demonstration - Testing Communication with a Pod.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/11%20Services%20-%20Demonstration%20-%20Testing%20Communication%20with%20a%20Pod.md)
- [ ] [12 Services - Demonstration - Creating the NodePort Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/12%20Services%20-%20Demonstration%20-%20Creating%20the%20NodePort%20Service.md)
- [ ] [13 Services - Demonstration - NodePort and LoadBalancer for Internal and External Access.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/13%20Services%20-%20Demonstration%20-%20NodePort%20and%20LoadBalancer%20for%20Internal%20and%20External%20Access.md)
- [ ] [14 Services - Demonstration - ExternalName Service for External Resource Mapping.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/14%20Services%20-%20Demonstration%20-%20ExternalName%20Service%20for%20External%20Resource%20Mapping.md)
- [ ] [15 Services - Demonstration - ClusterIP, NodePort, LoadBalancer, and External Name for External Resource Mapping.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/15%20Services%20-%20Demonstration%20-%20ClusterIP,%20NodePort,%20LoadBalancer,%20and%20External%20Name%20for%20External%20Resource%20Mapping.md) — **네 종류 비교 데모** — 선택 기준이 여기서 정리된다
- [ ] [16 CNI plugins - Calico vs Flannel vs Weave Net.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/16%20CNI%20plugins%20-%20Calico%20vs%20Flannel%20vs%20Weave%20Net.md) — CNI 플러그인 비교 — 클러스터를 직접 구축할 때만 필요하다

함께 보기: 서비스 간 통신을 실제로 붙여 보기 (Udemy · 실습 중심)

- [ ] [16 Networking With Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/16%20Networking%20With%20Services.md) — **Service로 네트워킹하기**
- [ ] [17 Creating a NodePort Service.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/17%20Creating%20a%20NodePort%20Service.md)
- [ ] [18 Accessing NodePort Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/18%20Accessing%20NodePort%20Services.md)
- [ ] [19 Setting Up Cluster IP Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/19%20Setting%20Up%20Cluster%20IP%20Services.md) — ClusterIP 구성
- [ ] [20 Building a Deployment for the Event Bus.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/20%20Building%20a%20Deployment%20for%20the%20Event%20Bus.md)
- [ ] [21 Adding ClusterIP Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/21%20Adding%20ClusterIP%20Services.md)
- [ ] [22 How to Communicate Between Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/22%20How%20to%20Communicate%20Between%20Services.md) — **서비스끼리 어떻게 통신하는가** — DNS 이름 규칙. 실전에서 가장 자주 헷갈리는 부분
- [ ] [23 Updating Service Addresses.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/23%20Updating%20Service%20Addresses.md) — 주소 갱신 — 하드코딩된 `localhost`를 서비스 이름으로 바꾸는 작업
- [ ] [24 Verifying Communication.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/24%20Verifying%20Communication.md)
- [ ] [25 Adding Query, Moderation and Comments.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/25%20Adding%20Query,%20Moderation%20and%20Comments.md)
- [ ] [26 Testing Communication.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/26%20Testing%20Communication.md)
- [ ] [27 Load Balancer Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/27%20Load%20Balancer%20Services.md) — LoadBalancer 서비스

## 6-C. Ingress — 하나의 입구로 여러 서비스

메인: Microservices with Node JS and React, Section 4 (뒷부분)

쿠버네티스 강좌 중 **Ingress를 실제로 세워 보는 자료는 이곳뿐이다.** Master DevOps 쪽에는 없다.

- [ ] [28 Load Balancers and Ingress.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/28%20Load%20Balancers%20and%20Ingress.md) — **LoadBalancer와 Ingress의 관계** — 서비스마다 LB를 만들면 비용이 곱해진다. Ingress가 그걸 하나로 줄인다
- [ ] [29 Important - DO NOT SKIP - Ingress Nginx Installation Info.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/29%20Important%20-%20DO%20NOT%20SKIP%20-%20Ingress%20Nginx%20Installation%20Info.md)
- [ ] [30 Installing Ingress-Nginx.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/30%20Installing%20Ingress-Nginx.md) — **ingress-nginx 설치**
- [ ] [31 Ingress v1 API Required Update + pathType Warning.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/31%20Ingress%20v1%20API%20Required%20Update%20%2B%20pathType%20Warning.md)
- [ ] [32 Writing Ingress Config Files.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/32%20Writing%20Ingress%20Config%20Files.md) — **Ingress 설정 파일 작성** — 경로별 라우팅
- [ ] [33 Important Note About Port 80.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/33%20Important%20Note%20About%20Port%2080.md)
- [ ] [34 Hosts File Tweak.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/34%20Hosts%20File%20Tweak.md) — 로컬에서 도메인처럼 접속하기 (hosts 파일)
- [ ] [35 Important Note to Add Environment Variable.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/35%20Important%20Note%20to%20Add%20Environment%20Variable.md)
- [ ] [36 Deploying the React App.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/36%20Deploying%20the%20React%20App.md)
- [ ] [37 Unique Route Paths.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/37%20Unique%20Route%20Paths.md) — **경로 충돌 없는 라우팅 설계** — 마이크로서비스에서 필수
- [ ] [38 Final Route Config.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/38%20Final%20Route%20Config.md)

## 6-D. 스토리지 — 데이터를 살려 두기

메인: Master DevOps, Course 4, Module 4 (이어서)

- [ ] [17 Persistent Volumes - Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/17%20Persistent%20Volumes%20-%20Introduction.md) — **PersistentVolume** — Phase 4의 Docker 볼륨과 같은 문제, 다른 해법
- [ ] [18 Persistent Volumes - Access Modes and Persistent Volume Claims (PVCs).md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/18%20Persistent%20Volumes%20-%20Access%20Modes%20and%20Persistent%20Volume%20Claims%20%28PVCs%29.md) — **액세스 모드와 PVC** — `ReadWriteOnce`가 무슨 제약인지 알아야 나중에 안 막힌다
- [ ] [19 Persistent Volumes - Lifecycle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/19%20Persistent%20Volumes%20-%20Lifecycle.md)
- [ ] [20 Persistent Volumes and Persistent Volume Claims - Creating the Persistent Volume Claim.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/20%20Persistent%20Volumes%20and%20Persistent%20Volume%20Claims%20-%20Creating%20the%20Persistent%20Volume%20Claim.md)
- [ ] [21 Persistent Volumes and Persistent Volume Claims - Verifying the Volume and Pod Status.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/21%20Persistent%20Volumes%20and%20Persistent%20Volume%20Claims%20-%20Verifying%20the%20Volume%20and%20Pod%20Status.md)
- [ ] [22 Persistent Volumes and Persistent Volume Claims - Terminating the Pod and Verifying Volume Detachment.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/22%20Persistent%20Volumes%20and%20Persistent%20Volume%20Claims%20-%20Terminating%20the%20Pod%20and%20Verifying%20Volume%20Detachment.md) — **파드를 죽여도 데이터가 남는지 확인** — 이 데모를 반드시 따라 한다
- [ ] [23 Ephemeral Volume - Creating the Pod with Ephemeral Volume.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/23%20Ephemeral%20Volume%20-%20Creating%20the%20Pod%20with%20Ephemeral%20Volume.md) — 임시 볼륨 — 캐시·스크래치 용도
- [ ] [24 Ephemeral Volume - Data Storage and Verification.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/24%20Ephemeral%20Volume%20-%20Data%20Storage%20and%20Verification.md)
- [ ] [25 Dynamic Provisioning and StorageClass in Kubernetes.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/25%20Dynamic%20Provisioning%20and%20StorageClass%20in%20Kubernetes.md) — **동적 프로비저닝과 StorageClass** — 클라우드에서 디스크가 자동으로 생기는 원리

## 6-E. ConfigMap과 Secret — 설정을 이미지에서 빼기

메인: Master DevOps, Course 4, Module 4 (이어서)

**Phase 7의 자동 배포에서 반드시 필요한 묶음이다.** 같은 이미지를 개발/운영에 쓰려면 설정이 바깥에 있어야 한다.

- [ ] [34 ConfigMaps and Secrets - Overview of ConfigMaps.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/34%20ConfigMaps%20and%20Secrets%20-%20Overview%20of%20ConfigMaps.md) — **ConfigMap** — 환경 변수·설정 파일
- [ ] [35 ConfigMaps and Secrets - Types of Secrets.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/35%20ConfigMaps%20and%20Secrets%20-%20Types%20of%20Secrets.md) — Secret 종류 — 레지스트리 인증(`docker-registry` 타입)이 Phase 7에서 필요해진다
- [ ] [36 ConfigMaps and Secrets - Creating a ConfigMap.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/36%20ConfigMaps%20and%20Secrets%20-%20Creating%20a%20ConfigMap.md)
- [ ] [37 ConfigMaps and Secrets - Using ConfigMap and Secret in a Pod.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/37%20ConfigMaps%20and%20Secrets%20-%20Using%20ConfigMap%20and%20Secret%20in%20a%20Pod.md) — **파드에서 사용하는 두 방식** (환경 변수 / 볼륨 마운트)
- [ ] [38 ConfigMaps and Secrets - Creating Secrets.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/38%20ConfigMaps%20and%20Secrets%20-%20Creating%20Secrets.md) — Secret 생성

- [ ] [04 ConfigMaps and Secrets.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%203%20-%20Managing%20Applications%20with%20Kubernetes/04%20ConfigMaps%20and%20Secrets.md) — IBM 쪽 요약
- [ ] [05 Service Binding.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/09%20Containers%20Docker%20Kubernetes%20and%20OpenShift/Module%203%20-%20Managing%20Applications%20with%20Kubernetes/05%20Service%20Binding.md) — 서비스 바인딩 — 관리형 서비스 자격 증명을 파드에 주입

> **Secret은 기본적으로 base64 인코딩일 뿐 암호화가 아니다.** 실제로 안전하게 두는 방법은 [Phase 10](10%20Phase%2010%20-%20%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%99%80%20%EB%B3%B4%EC%95%88%20%EA%B2%8C%EC%9D%B4%ED%8A%B8.md)의 시크릿 관리에서 다룬다.

## 6-F. StatefulSet — 데이터베이스처럼 상태가 있는 것

메인: Master DevOps, Course 4, Module 4 (이어서)

- [ ] [26 Headless Service - Introduction.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/26%20Headless%20Service%20-%20Introduction.md) — Headless 서비스 — StatefulSet의 전제 조건
- [ ] [27 Headless Service - Use Cases and Example.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/27%20Headless%20Service%20-%20Use%20Cases%20and%20Example.md)
- [ ] [28 StatefulSets - Overview.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/28%20StatefulSets%20-%20Overview.md) — **StatefulSet** — 파드마다 고정된 이름과 자기 디스크를 갖는다. Deployment로는 안 되는 이유
- [ ] [29 StatefulSets - Components and Working.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/29%20StatefulSets%20-%20Components%20and%20Working.md)
- [ ] [30 StatefulSets - Demonstration - Headless Service Setup.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/30%20StatefulSets%20-%20Demonstration%20-%20Headless%20Service%20Setup.md)
- [ ] [31 StatefulSets - Demonstration - StatefulSet YAML Configuration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/31%20StatefulSets%20-%20Demonstration%20-%20StatefulSet%20YAML%20Configuration.md)
- [ ] [32 StatefulSets - Demonstration - Verifying Pod Connectivity.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/32%20StatefulSets%20-%20Demonstration%20-%20Verifying%20Pod%20Connectivity.md)
- [ ] [33 StatefulSets - Demonstration - Scaling StatefulSet.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/33%20StatefulSets%20-%20Demonstration%20-%20Scaling%20StatefulSet.md) — 스케일링 시 순서 보장

> **결정 지침**: 애플리케이션은 Deployment, 데이터베이스는 가능하면 클러스터 밖의 관리형 서비스. StatefulSet은 그 둘로 안 될 때의 선택지다.

## 6-G. Helm — 배포를 패키징하기

메인: Master DevOps, Course 4, Module 4 (이어서)

- [ ] [39 Helm Charts - Demonstration - Creating Your First Helm Chart.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/39%20Helm%20Charts%20-%20Demonstration%20-%20Creating%20Your%20First%20Helm%20Chart.md) — **첫 Helm 차트 만들기** — YAML 수십 개를 템플릿 하나 + values로 줄인다
- [ ] [40 Helm Charts - Demonstration - Deploying and Testing the Chart.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/40%20Helm%20Charts%20-%20Demonstration%20-%20Deploying%20and%20Testing%20the%20Chart.md)
- [ ] [41 Helm Charts - Upgrading Helm Charts.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/41%20Helm%20Charts%20-%20Upgrading%20Helm%20Charts.md) — 업그레이드와 롤백 — Helm 수준의 릴리스 관리
- [ ] [42 Helm Chart Development Best Practices.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/42%20Helm%20Chart%20Development%20Best%20Practices.md) — **차트 작성 관례** — 남이 만든 차트를 읽을 때도 필요하다

## 6-H. 클러스터 관측 — 여기서는 위치만

메인: Master DevOps, Course 4, Module 4 (뒷부분)

- [ ] [43 Setting Up Prometheus for Kubernetes Clusters - Installing Prometheus Using Helm.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/43%20Setting%20Up%20Prometheus%20for%20Kubernetes%20Clusters%20-%20Installing%20Prometheus%20Using%20Helm.md) — Helm으로 Prometheus 설치 — 6-G의 첫 실전 사용례
- [ ] [45 Kubernetes Metrics Pods, Nodes, and Deployments - Setting Up Prometheus and Grafana Dashboards.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/45%20Kubernetes%20Metrics%20Pods,%20Nodes,%20and%20Deployments%20-%20Setting%20Up%20Prometheus%20and%20Grafana%20Dashboards.md) — 클러스터 지표 대시보드
- [ ] [55 Alertmanager and Automated Remediation.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/55%20Alertmanager%20and%20Automated%20Remediation.md) — **Alertmanager와 자동 복구** — 개념만 잡고 넘어간다
- [ ] [56 Summary - Kubernetes Networking and Storage.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/56%20Summary%20-%20Kubernetes%20Networking%20and%20Storage.md)

> 44, 46~54번(커스텀 메트릭·익스포터·스크레이프 설정)은 관측성 영역이라 **개발운영 로드맵**에서 다룬다.

## 6-I. 정리

- [ ] [01 Course Summary.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%205%20-%20Course%20Wrap-Up%20and%20Assessment/01%20Course%20Summary.md)
- [ ] [02 Practice Project - ShopVerse DevOps Transformation Project - Building a Full-Stack CI-CD and Infrastructure Automation Pipeline.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%205%20-%20Course%20Wrap-Up%20and%20Assessment/02%20Practice%20Project%20-%20ShopVerse%20DevOps%20Transformation%20Project%20-%20Building%20a%20Full-Stack%20CI-CD%20and%20Infrastructure%20Automation%20Pipeline.md) — **실습 프로젝트** — Phase 4~6을 종합한 CI/CD + 인프라 자동화

## 산출물 과제

1. **2개 서비스 + DB 구성** — 프론트/백엔드를 각각 Deployment+ClusterIP로 띄우고, 백엔드가 DB에 붙게 한다. 백엔드는 서비스 이름(DNS)으로만 DB를 찾아야 한다.
2. **Ingress로 외부 노출** — `/` 는 프론트, `/api` 는 백엔드로 라우팅한다. 로컬 hosts로 도메인처럼 접속한다.
3. **설정 분리** — 앱의 모든 환경 의존값을 ConfigMap/Secret으로 뺀다. **이미지를 다시 빌드하지 않고** 값만 바꿔 재배포되는 것을 확인한다.
4. **데이터 영속성 검증** — DB 파드를 강제로 삭제하고, 새 파드가 뜬 뒤 데이터가 그대로 있는지 확인한다.
5. **Helm 차트로 패키징** — 2~4번의 매니페스트를 차트 하나로 묶고, `values-dev.yaml` / `values-prod.yaml` 두 개로 다르게 배포한다. **Phase 7의 자동 배포가 이 구조를 쓴다.**

## 다음 단계

→ [07 Phase 7 - 쿠버네티스 배포 실전](07%20Phase%207%20-%20%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%20%EB%B0%B0%ED%8F%AC%20%EC%8B%A4%EC%A0%84.md)
