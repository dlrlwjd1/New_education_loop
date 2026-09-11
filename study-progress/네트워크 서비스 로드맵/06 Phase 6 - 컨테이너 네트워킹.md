# Phase 6 — 컨테이너 네트워킹

- 목표: 컨테이너가 서로를 **이름으로 부르고**, 밖에서는 **도메인·경로로 들어오는** 구조를 직접 만든다.
- 분량: 약 14시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- Docker 브리지 네트워크에서 컨테이너가 서로를 컨테이너 이름으로 찾는 원리를 설명한다
- `-p 8080:80` 의 두 숫자가 각각 어디의 포트인지 즉시 말한다
- ClusterIP · NodePort · LoadBalancer · ExternalName · Headless 다섯 Service 타입을 구분하고 고른다
- 클러스터 내부 DNS 이름(`svc-name.namespace.svc.cluster.local`)으로 서비스를 부른다
- Ingress로 **호스트·경로 기반 라우팅**을 걸고, Ingress 컨트롤러가 실제로는 Nginx라는 것을 안다
- 파드에서 다른 서비스로 연결이 안 될 때 Service → Endpoints → Pod 순으로 좁혀 진단한다

> **실습 환경**: 로컬이면 충분하다. Docker Desktop의 쿠버네티스, minikube, k3d 중 아무거나 쓴다. 클라우드 과금이 없는 Phase다.

## 6-A. Docker 네트워킹

메인: Master DevOps, Course 4 Module 1

- [ ] [21 Docker CLI Commands - Image Management and Networking Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/21%20Docker%20CLI%20Commands%20-%20Image%20Management%20and%20Networking%20Commands.md)
- [ ] [26 Port Binding - Introduction and Types.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/26%20Port%20Binding%20-%20Introduction%20and%20Types.md) — **호스트 포트와 컨테이너 포트의 구분.** 여기서 헷갈리면 뒤가 전부 꼬인다
- [ ] [27 Port Binding - Syntax and Example.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/27%20Port%20Binding%20-%20Syntax%20and%20Example.md)
- [ ] [28 Port Binding - Demonstration - Adding Port Binding.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/28%20Port%20Binding%20-%20Demonstration%20-%20Adding%20Port%20Binding.md)
- [ ] [29 Port Binding - Demonstration - Running nginx Server.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/29%20Port%20Binding%20-%20Demonstration%20-%20Running%20nginx%20Server.md)
- [ ] [30 Port Binding - Demonstration - Launching the Container in Web Browser.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/30%20Port%20Binding%20-%20Demonstration%20-%20Launching%20the%20Container%20in%20Web%20Browser.md)
- [ ] [31 Docker Networking Bridge Driver and User-Defined Networks.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/31%20Docker%20Networking%20Bridge%20Driver%20and%20User-Defined%20Networks.md) — **이 소절의 핵심.** 기본 브리지와 사용자 정의 네트워크의 차이, 그리고 **사용자 정의 네트워크에서만 컨테이너 이름으로 서로를 찾을 수 있다**는 것

함께 보기: Computer Science & Robotics - Linux to ROS 2, Section 3 (손으로 하는 랩이 붙어 있다)

- [ ] [02 Docker Architecture.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%203%20-%20Docker/02%20Docker%20Architecture.md)
- [ ] [08 Volumes and Networking.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%203%20-%20Docker/08%20Volumes%20and%20Networking.md)
- [ ] [10 [LAB] Volumes and Networking.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%203%20-%20Docker/10%20%5BLAB%5D%20Volumes%20and%20Networking.md) — **실습 랩**
- [ ] [15 Docker Compose.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%203%20-%20Docker/15%20Docker%20Compose.md) — compose가 자동으로 만드는 네트워크
- [ ] [16 [LAB] Docker Compose.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%203%20-%20Docker/16%20%5BLAB%5D%20Docker%20Compose.md)
- [ ] [17 [LAB] Advanced Docker Compose.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%203%20-%20Docker/17%20%5BLAB%5D%20Advanced%20Docker%20Compose.md)

## 6-B. 쿠버네티스 Service

메인: Master DevOps, Course 4 Module 4. **다섯 타입을 개념 → 데모 순으로 한 번에 훑는다.**

- [ ] [04 Services - ClusterIP.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/04%20Services%20-%20ClusterIP.md) — **기본값.** 클러스터 안에서만 보이는 주소
- [ ] [05 Services - ClusterIP (Default) Example.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/05%20Services%20-%20ClusterIP%20%28Default%29%20Example.md)
- [ ] [06 Services - NodePort Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/06%20Services%20-%20NodePort%20Service.md)
- [ ] [07 Services - LoadBalancer Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/07%20Services%20-%20LoadBalancer%20Service.md) — **Phase 5의 클라우드 로드밸런서가 여기서 다시 나온다.** 쿠버네티스가 클라우드에 LB를 대신 만들어 주는 구조
- [ ] [08 Services - ExternalName Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/08%20Services%20-%20ExternalName%20Service.md) — CNAME으로 외부 이름 매핑. Phase 2의 DNS와 이어진다
- [ ] [09 Services - Headless Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/09%20Services%20-%20Headless%20Service.md) — Pod IP를 그대로 돌려주는 경우
- [ ] [11 Services - Demonstration - Testing Communication with a Pod.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/11%20Services%20-%20Demonstration%20-%20Testing%20Communication%20with%20a%20Pod.md)
- [ ] [13 Services - Demonstration - NodePort and LoadBalancer for Internal and External Access.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/13%20Services%20-%20Demonstration%20-%20NodePort%20and%20LoadBalancer%20for%20Internal%20and%20External%20Access.md)
- [ ] [15 Services - Demonstration - ClusterIP, NodePort, LoadBalancer, and External Name for External Resource Mapping.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/15%20Services%20-%20Demonstration%20-%20ClusterIP,%20NodePort,%20LoadBalancer,%20and%20External%20Name%20for%20External%20Resource%20Mapping.md) — **네 타입을 나란히 비교하는 데모.** 이 강의 하나로 6-B를 정리할 수 있다
- [ ] [16 CNI plugins - Calico vs Flannel vs Weave Net.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/16%20CNI%20plugins%20-%20Calico%20vs%20Flannel%20vs%20Weave%20Net.md) — **파드 네트워크를 실제로 까는 계층.** 개념만 잡고 넘어가도 된다

함께 보기: Microservices with Node JS and React, Section 4 (같은 내용을 실제 앱을 만들며)

- [ ] [16 Networking With Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/16%20Networking%20With%20Services.md)
- [ ] [17 Creating a NodePort Service.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/17%20Creating%20a%20NodePort%20Service.md)
- [ ] [18 Accessing NodePort Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/18%20Accessing%20NodePort%20Services.md)
- [ ] [19 Setting Up Cluster IP Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/19%20Setting%20Up%20Cluster%20IP%20Services.md)
- [ ] [22 How to Communicate Between Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/22%20How%20to%20Communicate%20Between%20Services.md) — **클러스터 내부 DNS 이름으로 부르는 지점**
- [ ] [23 Updating Service Addresses.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/23%20Updating%20Service%20Addresses.md)
- [ ] [24 Verifying Communication.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/24%20Verifying%20Communication.md)
- [ ] [27 Load Balancer Services.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/27%20Load%20Balancer%20Services.md)

## 6-C. Ingress — 도메인·경로 기반 라우팅

메인: Microservices with Node JS and React, Section 4~5. **Ingress를 실제로 설치하고 규칙을 쓴다.**

- [ ] [28 Load Balancers and Ingress.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/28%20Load%20Balancers%20and%20Ingress.md) — **LoadBalancer Service와 Ingress의 관계.** 이 구분이 이 소절의 핵심
- [ ] [29 Important - DO NOT SKIP - Ingress Nginx Installation Info.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/29%20Important%20-%20DO%20NOT%20SKIP%20-%20Ingress%20Nginx%20Installation%20Info.md) — 제목대로 건너뛰지 않는다
- [ ] [30 Installing Ingress-Nginx.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/30%20Installing%20Ingress-Nginx.md) — **Ingress 컨트롤러의 실체가 Nginx라는 것.** Phase 5의 Nginx 설정 지식이 여기서 다시 쓰인다
- [ ] [31 Ingress v1 API Required Update + pathType Warning.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/31%20Ingress%20v1%20API%20Required%20Update%20+%20pathType%20Warning.md) — API 버전 차이로 막히는 지점. 미리 읽는다
- [ ] [32 Writing Ingress Config Files.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/32%20Writing%20Ingress%20Config%20Files.md) — **경로 기반 라우팅 규칙을 직접 쓴다**
- [ ] [33 Important Note About Port 80.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/33%20Important%20Note%20About%20Port%2080.md)
- [ ] [34 Hosts File Tweak.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/34%20Hosts%20File%20Tweak.md) — **DNS 없이 도메인 라우팅을 테스트하는 방법.** Phase 2의 DNS와 대비해서 이해한다
- [ ] [37 Unique Route Paths.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/37%20Unique%20Route%20Paths.md)
- [ ] [38 Final Route Config.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%204%20-%20Orchestrating%20Collections%20of%20Services%20with%20Kubernetes/38%20Final%20Route%20Config.md)
- [ ] [12 Ingress-Nginx Setup.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/12%20Ingress-Nginx%20Setup.md)
- [ ] [13 Hosts File and Security Warning.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%205%20-%20Architecture%20of%20Multi-Service%20Apps/13%20Hosts%20File%20and%20Security%20Warning.md) — 자체 서명 인증서 경고. Phase 4의 신뢰 사슬이 왜 필요한지 체감하는 지점
- [ ] [04 Ingress Routing Rules.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%2017%20-%20Cross-Service%20Data%20Replication%20In%20Action/04%20Ingress%20Routing%20Rules.md) — 규칙이 늘어났을 때의 정리

## 산출물

**로컬 쿠버네티스에서 도는 멀티서비스 앱 + 네트워크 구성도.**

1. 서비스 3개(프론트 1 + API 2)를 로컬 클러스터에 올리고, **API끼리는 ClusterIP + 내부 DNS 이름으로만 통신**하게 만든다. 어떤 서비스에도 NodePort를 열지 않는다
2. Ingress 하나로 `/api/users` 와 `/api/orders` 를 서로 다른 서비스로 보낸다. 나머지는 프론트로 보낸다
3. **일부러 고장 낸다** — Service의 셀렉터를 잘못된 라벨로 바꾸고, `kubectl get endpoints` 가 비는 것을 확인한다. 여기서 **Service → Endpoints → Pod 순으로 좁히는 진단 절차**를 문서로 정리한다
4. 파드 안에서 `nslookup` 또는 `getent hosts` 로 다른 서비스의 클러스터 DNS 이름을 조회한 출력을 캡처한다
5. 요청이 **브라우저 → Ingress 컨트롤러 → Service → Pod** 로 가는 경로를 그림으로 그리고, 각 구간에서 쓰이는 주소(도메인 / ClusterIP / Pod IP)를 표시한다

## 다음 단계

→ [07 Phase 7 - 클라우드 VPC 설계](07%20Phase%207%20-%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20VPC%20%EC%84%A4%EA%B3%84.md)
