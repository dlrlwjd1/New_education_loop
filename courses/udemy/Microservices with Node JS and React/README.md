# Microservices with Node JS and React

- 플랫폼: Udemy
- 강사: Stephen Grider
- 구성: 26개 Section, 강의 654개 + 퀴즈 1개, 총 54시간 22분
- 언어: 영어
- 마지막 확인: 2026-07-24
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/)

## 개요

Node.js, React, Docker, Kubernetes를 사용해 확장 가능한 전자상거래 애플리케이션을 마이크로서비스 아키텍처로 설계·구현·배포하는 과정이다. 서비스별 데이터 소유권, 이벤트 기반 통신, 데이터 복제, 동시성 제어처럼 분산 시스템에서 발생하는 핵심 문제를 실제 프로젝트를 통해 해결한다.

프런트엔드는 React와 Next.js, 백엔드는 Node.js·Express·TypeScript, 데이터 저장소는 MongoDB·Redis를 사용한다. 서비스 간 이벤트 통신에는 NATS Streaming, 컨테이너 실행과 오케스트레이션에는 Docker·Kubernetes·Skaffold를 사용하며, 테스트와 CI/CD까지 전체 운영 흐름을 다룬다.

## 주요 학습 흐름

- 마이크로서비스 경계와 서비스별 데이터 소유권 설계
- 동기 요청과 이벤트 기반 비동기 통신 비교
- Docker 이미지 및 Kubernetes 인프라 구성
- 인증, 오류 처리, 데이터 모델링과 서비스 단위 테스트
- NATS 기반 이벤트 버스와 서비스 간 데이터 복제
- 이벤트 순서 및 낙관적 동시성 제어
- 주문 만료, Stripe 결제, React 클라이언트 통합
- GitHub Actions 기반 CI/CD와 클라우드 배포

## 선수 지식

- JavaScript와 Express 기본 지식
- 명령줄(command line) 사용 경험
- React 경험은 도움이 되지만 필수는 아님

## Section별 강의 목록

### Section 1 - Fundamental Ideas Around Microservices

- 구성: 강의 9개 + 퀴즈 1개 · 46분
- 마이크로서비스의 정의, 서비스별 데이터 소유권, 동기·비동기 통신의 장단점을 이해한다.

1. [How to Get Help](<Section 1 - Fundamental Ideas Around Microservices/01 How to Get Help.md>)
2. [Course Resources](<Section 1 - Fundamental Ideas Around Microservices/02 Course Resources.md>)
3. [What Is a Microservice?](<Section 1 - Fundamental Ideas Around Microservices/03 What Is a Microservice.md>)
4. [Data in Microservices](<Section 1 - Fundamental Ideas Around Microservices/04 Data in Microservices.md>)
5. [Quiz - Data in Microservices](<Section 1 - Fundamental Ideas Around Microservices/05 Quiz - Data in Microservices.md>)
6. [Big Problems with Data](<Section 1 - Fundamental Ideas Around Microservices/06 Big Problems with Data.md>)
7. [Sync Communication Between Services](<Section 1 - Fundamental Ideas Around Microservices/07 Sync Communication Between Services.md>)
8. [Event-Based Communication](<Section 1 - Fundamental Ideas Around Microservices/08 Event-Based Communication.md>)
9. [A Crazy Way of Storing Data](<Section 1 - Fundamental Ideas Around Microservices/09 A Crazy Way of Storing Data.md>)
10. [Pros and Cons of Async Communication](<Section 1 - Fundamental Ideas Around Microservices/10 Pros and Cons of Async Communication.md>)

### Section 2 - A Mini-Microservices App

- 구성: 강의 43개 · 3시간 35분
- 게시글·댓글 서비스와 React 클라이언트, 이벤트 버스를 직접 구성하며 비동기 이벤트 기반 아키텍처를 실습한다.

1. [Important - Optional Boilerplate](<Section 2 - A Mini-Microservices App/01 Important - Optional Boilerplate.md>)
2. [App Overview](<Section 2 - A Mini-Microservices App/02 App Overview.md>)
3. [Project Setup](<Section 2 - A Mini-Microservices App/03 Project Setup.md>)
4. [Posts Service Creation](<Section 2 - A Mini-Microservices App/04 Posts Service Creation.md>)
5. [Testing the Posts Service](<Section 2 - A Mini-Microservices App/05 Testing the Posts Service.md>)
6. [Implementing a Comments Service](<Section 2 - A Mini-Microservices App/06 Implementing a Comments Service.md>)
7. [Quick Comments Test](<Section 2 - A Mini-Microservices App/07 Quick Comments Test.md>)
8. [Note on the React App](<Section 2 - A Mini-Microservices App/08 Note on the React App.md>)
9. [Addressing Default Export and ReactDom.render Warnings](<Section 2 - A Mini-Microservices App/09 Addressing Default Export and ReactDom.render Warnings.md>)
10. [React Project Setup](<Section 2 - A Mini-Microservices App/10 React Project Setup.md>)
11. [Building Post Submission](<Section 2 - A Mini-Microservices App/11 Building Post Submission.md>)
12. [Handling CORS Errors](<Section 2 - A Mini-Microservices App/12 Handling CORS Errors.md>)
13. [Fetching and Rendering Posts](<Section 2 - A Mini-Microservices App/13 Fetching and Rendering Posts.md>)
14. [Creating Comments](<Section 2 - A Mini-Microservices App/14 Creating Comments.md>)
15. [Displaying Comments](<Section 2 - A Mini-Microservices App/15 Displaying Comments.md>)
16. [Completed React App](<Section 2 - A Mini-Microservices App/16 Completed React App.md>)
17. [Request Minimization Strategies](<Section 2 - A Mini-Microservices App/17 Request Minimization Strategies.md>)
18. [An Async Solution](<Section 2 - A Mini-Microservices App/18 An Async Solution.md>)
19. [Common Questions Around Async Events](<Section 2 - A Mini-Microservices App/19 Common Questions Around Async Events.md>)
20. [Event Bus Overview](<Section 2 - A Mini-Microservices App/20 Event Bus Overview.md>)
21. [Important Note about Node and Unhandled Promise Rejections](<Section 2 - A Mini-Microservices App/21 Important Note about Node and Unhandled Promise Rejections.md>)
22. [A Basic Event Bus Implementation](<Section 2 - A Mini-Microservices App/22 A Basic Event Bus Implementation.md>)
23. [Emitting Events](<Section 2 - A Mini-Microservices App/23 Emitting Events.md>)
24. [Emitting Comment Creation Events](<Section 2 - A Mini-Microservices App/24 Emitting Comment Creation Events.md>)
25. [Receiving Events](<Section 2 - A Mini-Microservices App/25 Receiving Events.md>)
26. [Creating the Data Query Service](<Section 2 - A Mini-Microservices App/26 Creating the Data Query Service.md>)
27. [Parsing Incoming Events](<Section 2 - A Mini-Microservices App/27 Parsing Incoming Events.md>)
28. [Using the Query Service](<Section 2 - A Mini-Microservices App/28 Using the Query Service.md>)
29. [Adding a Simple Feature](<Section 2 - A Mini-Microservices App/29 Adding a Simple Feature.md>)
30. [Issues with Comment Filtering](<Section 2 - A Mini-Microservices App/30 Issues with Comment Filtering.md>)
31. [A Second Approach](<Section 2 - A Mini-Microservices App/31 A Second Approach.md>)
32. [How to Handle Resource Updates](<Section 2 - A Mini-Microservices App/32 How to Handle Resource Updates.md>)
33. [Creating the Moderation Service](<Section 2 - A Mini-Microservices App/33 Creating the Moderation Service.md>)
34. [Adding Comment Moderation](<Section 2 - A Mini-Microservices App/34 Adding Comment Moderation.md>)
35. [Reminder about Error Catching](<Section 2 - A Mini-Microservices App/35 Reminder about Error Catching.md>)
36. [Handling Moderation](<Section 2 - A Mini-Microservices App/36 Handling Moderation.md>)
37. [Updating Comment Content](<Section 2 - A Mini-Microservices App/37 Updating Comment Content.md>)
38. [A Quick Test](<Section 2 - A Mini-Microservices App/38 A Quick Test.md>)
39. [Rendering Comments by Status](<Section 2 - A Mini-Microservices App/39 Rendering Comments by Status.md>)
40. [Dealing with Missing Events](<Section 2 - A Mini-Microservices App/40 Dealing with Missing Events.md>)
41. [Required Error Handling Update for Query Service](<Section 2 - A Mini-Microservices App/41 Required Error Handling Update for Query Service.md>)
42. [Implementing Event Sync](<Section 2 - A Mini-Microservices App/42 Implementing Event Sync.md>)
43. [Event Syncing in Action](<Section 2 - A Mini-Microservices App/43 Event Syncing in Action.md>)

### Section 3 - Running Services with Docker

- 구성: 강의 8개 · 30분
- 각 서비스를 Docker 이미지와 컨테이너로 패키징하고 기본 Docker 명령을 익힌다.

1. [Deployment Issues](<Section 3 - Running Services with Docker/01 Deployment Issues.md>)
2. [Why Docker?](<Section 3 - Running Services with Docker/02 Why Docker.md>)
3. [Why Kubernetes?](<Section 3 - Running Services with Docker/03 Why Kubernetes.md>)
4. [Don't Know Docker? Watch This.](<Section 3 - Running Services with Docker/04 Don't Know Docker Watch This..md>)
5. [Note About Docker Build Output and Buildkit](<Section 3 - Running Services with Docker/05 Note About Docker Build Output and Buildkit.md>)
6. [Dockerizing the Posts Service](<Section 3 - Running Services with Docker/06 Dockerizing the Posts Service.md>)
7. [Review Some Basic Commands](<Section 3 - Running Services with Docker/07 Review Some Basic Commands.md>)
8. [Dockerizing Other Services](<Section 3 - Running Services with Docker/08 Dockerizing Other Services.md>)

### Section 4 - Orchestrating Collections of Services with Kubernetes

- 구성: 강의 43개 · 3시간 25분
- Kubernetes의 Pod·Deployment·Service·Ingress를 구성하고 Skaffold로 개발 워크플로를 자동화한다.

1. [Installing Kubernetes](<Section 4 - Orchestrating Collections of Services with Kubernetes/01 Installing Kubernetes.md>)
2. [IMPORTANT Note for Minikube and MicroK8s Users](<Section 4 - Orchestrating Collections of Services with Kubernetes/02 IMPORTANT Note for Minikube and MicroK8s Users.md>)
3. [A Kubernetes Tour](<Section 4 - Orchestrating Collections of Services with Kubernetes/03 A Kubernetes Tour.md>)
4. [Important Kubernetes Terminology](<Section 4 - Orchestrating Collections of Services with Kubernetes/04 Important Kubernetes Terminology.md>)
5. [Notes on Config Files](<Section 4 - Orchestrating Collections of Services with Kubernetes/05 Notes on Config Files.md>)
6. [Creating a Pod](<Section 4 - Orchestrating Collections of Services with Kubernetes/06 Creating a Pod.md>)
7. [ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors](<Section 4 - Orchestrating Collections of Services with Kubernetes/07 ErrImagePull, ErrImageNeverPull and ImagePullBackoff Errors.md>)
8. [Understanding a Pod Spec](<Section 4 - Orchestrating Collections of Services with Kubernetes/08 Understanding a Pod Spec.md>)
9. [Common Kubectl Commands](<Section 4 - Orchestrating Collections of Services with Kubernetes/09 Common Kubectl Commands.md>)
10. [A Time-Saving Alias](<Section 4 - Orchestrating Collections of Services with Kubernetes/10 A Time-Saving Alias.md>)
11. [Introducing Deployments](<Section 4 - Orchestrating Collections of Services with Kubernetes/11 Introducing Deployments.md>)
12. [Creating a Deployment](<Section 4 - Orchestrating Collections of Services with Kubernetes/12 Creating a Deployment.md>)
13. [Common Commands Around Deployments](<Section 4 - Orchestrating Collections of Services with Kubernetes/13 Common Commands Around Deployments.md>)
14. [Updating Deployments](<Section 4 - Orchestrating Collections of Services with Kubernetes/14 Updating Deployments.md>)
15. [Preferred Method for Updating Deployments](<Section 4 - Orchestrating Collections of Services with Kubernetes/15 Preferred Method for Updating Deployments.md>)
16. [Networking With Services](<Section 4 - Orchestrating Collections of Services with Kubernetes/16 Networking With Services.md>)
17. [Creating a NodePort Service](<Section 4 - Orchestrating Collections of Services with Kubernetes/17 Creating a NodePort Service.md>)
18. [Accessing NodePort Services](<Section 4 - Orchestrating Collections of Services with Kubernetes/18 Accessing NodePort Services.md>)
19. [Setting Up Cluster IP Services](<Section 4 - Orchestrating Collections of Services with Kubernetes/19 Setting Up Cluster IP Services.md>)
20. [Building a Deployment for the Event Bus](<Section 4 - Orchestrating Collections of Services with Kubernetes/20 Building a Deployment for the Event Bus.md>)
21. [Adding ClusterIP Services](<Section 4 - Orchestrating Collections of Services with Kubernetes/21 Adding ClusterIP Services.md>)
22. [How to Communicate Between Services](<Section 4 - Orchestrating Collections of Services with Kubernetes/22 How to Communicate Between Services.md>)
23. [Updating Service Addresses](<Section 4 - Orchestrating Collections of Services with Kubernetes/23 Updating Service Addresses.md>)
24. [Verifying Communication](<Section 4 - Orchestrating Collections of Services with Kubernetes/24 Verifying Communication.md>)
25. [Adding Query, Moderation and Comments](<Section 4 - Orchestrating Collections of Services with Kubernetes/25 Adding Query, Moderation and Comments.md>)
26. [Testing Communication](<Section 4 - Orchestrating Collections of Services with Kubernetes/26 Testing Communication.md>)
27. [Load Balancer Services](<Section 4 - Orchestrating Collections of Services with Kubernetes/27 Load Balancer Services.md>)
28. [Load Balancers and Ingress](<Section 4 - Orchestrating Collections of Services with Kubernetes/28 Load Balancers and Ingress.md>)
29. [Important - DO NOT SKIP - Ingress Nginx Installation Info](<Section 4 - Orchestrating Collections of Services with Kubernetes/29 Important - DO NOT SKIP - Ingress Nginx Installation Info.md>)
30. [Installing Ingress-Nginx](<Section 4 - Orchestrating Collections of Services with Kubernetes/30 Installing Ingress-Nginx.md>)
31. [Ingress v1 API Required Update + pathType Warning](<Section 4 - Orchestrating Collections of Services with Kubernetes/31 Ingress v1 API Required Update + pathType Warning.md>)
32. [Writing Ingress Config Files](<Section 4 - Orchestrating Collections of Services with Kubernetes/32 Writing Ingress Config Files.md>)
33. [Important Note About Port 80](<Section 4 - Orchestrating Collections of Services with Kubernetes/33 Important Note About Port 80.md>)
34. [Hosts File Tweak](<Section 4 - Orchestrating Collections of Services with Kubernetes/34 Hosts File Tweak.md>)
35. [Important Note to Add Environment Variable](<Section 4 - Orchestrating Collections of Services with Kubernetes/35 Important Note to Add Environment Variable.md>)
36. [Deploying the React App](<Section 4 - Orchestrating Collections of Services with Kubernetes/36 Deploying the React App.md>)
37. [Unique Route Paths](<Section 4 - Orchestrating Collections of Services with Kubernetes/37 Unique Route Paths.md>)
38. [Final Route Config](<Section 4 - Orchestrating Collections of Services with Kubernetes/38 Final Route Config.md>)
39. [Introducing Skaffold](<Section 4 - Orchestrating Collections of Services with Kubernetes/39 Introducing Skaffold.md>)
40. [Skaffold API version Update](<Section 4 - Orchestrating Collections of Services with Kubernetes/40 Skaffold API version Update.md>)
41. [Skaffold Setup](<Section 4 - Orchestrating Collections of Services with Kubernetes/41 Skaffold Setup.md>)
42. [First Time Skaffold Startup](<Section 4 - Orchestrating Collections of Services with Kubernetes/42 First Time Skaffold Startup.md>)
43. [A Few Notes on Skaffold](<Section 4 - Orchestrating Collections of Services with Kubernetes/43 A Few Notes on Skaffold.md>)

### Section 5 - Architecture of Multi-Service Apps

- 구성: 강의 13개 · 1시간 6분
- 티켓 판매 애플리케이션의 서비스 경계, 리소스, 이벤트와 전체 인프라 구조를 설계한다.

1. [Big Ticket Items](<Section 5 - Architecture of Multi-Service Apps/01 Big Ticket Items.md>)
2. [App Overview](<Section 5 - Architecture of Multi-Service Apps/02 App Overview.md>)
3. [Resource Types](<Section 5 - Architecture of Multi-Service Apps/03 Resource Types.md>)
4. [Service Types](<Section 5 - Architecture of Multi-Service Apps/04 Service Types.md>)
5. [Events and Architecture Design](<Section 5 - Architecture of Multi-Service Apps/05 Events and Architecture Design.md>)
6. [Note on Typescript](<Section 5 - Architecture of Multi-Service Apps/06 Note on Typescript.md>)
7. [Auth Service Setup](<Section 5 - Architecture of Multi-Service Apps/07 Auth Service Setup.md>)
8. [Auth K8s Setup](<Section 5 - Architecture of Multi-Service Apps/08 Auth K8s Setup.md>)
9. [Adding Skaffold](<Section 5 - Architecture of Multi-Service Apps/09 Adding Skaffold.md>)
10. [Note on Code Reloading](<Section 5 - Architecture of Multi-Service Apps/10 Note on Code Reloading.md>)
11. [Ingress v1 API Required Update](<Section 5 - Architecture of Multi-Service Apps/11 Ingress v1 API Required Update.md>)
12. [Ingress-Nginx Setup](<Section 5 - Architecture of Multi-Service Apps/12 Ingress-Nginx Setup.md>)
13. [Hosts File and Security Warning](<Section 5 - Architecture of Multi-Service Apps/13 Hosts File and Security Warning.md>)

### Section 6 - Leveraging a Cloud Environment for Development

- 구성: 강의 12개 · 40분
- 클라우드 기반 원격 개발 환경을 구성하고 Kubernetes 애플리케이션을 원격 클러스터에서 실행한다.

1. [Note on Remote Development](<Section 6 - Leveraging a Cloud Environment for Development/01 Note on Remote Development.md>)
2. [Remote Dev with Skaffold](<Section 6 - Leveraging a Cloud Environment for Development/02 Remote Dev with Skaffold.md>)
3. [Free Google Cloud Trial and Credits](<Section 6 - Leveraging a Cloud Environment for Development/03 Free Google Cloud Trial and Credits.md>)
4. [Google Cloud Initial Setup](<Section 6 - Leveraging a Cloud Environment for Development/04 Google Cloud Initial Setup.md>)
5. [Kubernetes Cluster Creation with Autopilot](<Section 6 - Leveraging a Cloud Environment for Development/05 Kubernetes Cluster Creation with Autopilot.md>)
6. [Kubectl Contexts](<Section 6 - Leveraging a Cloud Environment for Development/06 Kubectl Contexts.md>)
7. [Initializing the GCloud SDK](<Section 6 - Leveraging a Cloud Environment for Development/07 Initializing the GCloud SDK.md>)
8. [Installing the GCloud Context](<Section 6 - Leveraging a Cloud Environment for Development/08 Installing the GCloud Context.md>)
9. [Updating the Skaffold Config](<Section 6 - Leveraging a Cloud Environment for Development/09 Updating the Skaffold Config.md>)
10. [More Skaffold Updates](<Section 6 - Leveraging a Cloud Environment for Development/10 More Skaffold Updates.md>)
11. [Creating a Load Balancer](<Section 6 - Leveraging a Cloud Environment for Development/11 Creating a Load Balancer.md>)
12. [Final Config and Test](<Section 6 - Leveraging a Cloud Environment for Development/12 Final Config and Test.md>)

### Section 7 - Response Normalization Strategies

- 구성: 강의 21개 · 1시간 58분
- Express 서비스 전반에서 오류 응답, 요청 검증과 비동기 오류 처리를 일관되게 정규화한다.

1. [Creating Route Handlers](<Section 7 - Response Normalization Strategies/01 Creating Route Handlers.md>)
2. [Scaffolding Routes](<Section 7 - Response Normalization Strategies/02 Scaffolding Routes.md>)
3. [Adding Validation](<Section 7 - Response Normalization Strategies/03 Adding Validation.md>)
4. [Handling Validation Errors](<Section 7 - Response Normalization Strategies/04 Handling Validation Errors.md>)
5. [Postman HTTPS Issues](<Section 7 - Response Normalization Strategies/05 Postman HTTPS Issues.md>)
6. [Surprising Complexity Around Errors](<Section 7 - Response Normalization Strategies/06 Surprising Complexity Around Errors.md>)
7. [Other Sources of Errors](<Section 7 - Response Normalization Strategies/07 Other Sources of Errors.md>)
8. [Solution for Error Handling](<Section 7 - Response Normalization Strategies/08 Solution for Error Handling.md>)
9. [Building an Error Handling Middleware](<Section 7 - Response Normalization Strategies/09 Building an Error Handling Middleware.md>)
10. [Communicating More Info to the Error Handler](<Section 7 - Response Normalization Strategies/10 Communicating More Info to the Error Handler.md>)
11. [Encoding More Information In an Error](<Section 7 - Response Normalization Strategies/11 Encoding More Information In an Error.md>)
12. [Subclassing for Custom Errors](<Section 7 - Response Normalization Strategies/12 Subclassing for Custom Errors.md>)
13. [Determining Error Type](<Section 7 - Response Normalization Strategies/13 Determining Error Type.md>)
14. [Property 'param' does not exist on type 'AlternativeValidationError'](<Section 7 - Response Normalization Strategies/14 Property 'param' does not exist on type 'AlternativeValidationError'.md>)
15. [Converting Errors to Responses](<Section 7 - Response Normalization Strategies/15 Converting Errors to Responses.md>)
16. [Moving Logic Into Errors](<Section 7 - Response Normalization Strategies/16 Moving Logic Into Errors.md>)
17. [serializeErrors' not assignable to the same property in base type 'CustomError'](<Section 7 - Response Normalization Strategies/17 serializeErrors' not assignable to the same property in base type 'CustomError'.md>)
18. [Verifying Our Custom Errors](<Section 7 - Response Normalization Strategies/18 Verifying Our Custom Errors.md>)
19. [Final Error Related Code](<Section 7 - Response Normalization Strategies/19 Final Error Related Code.md>)
20. [How to Define New Custom Errors](<Section 7 - Response Normalization Strategies/20 How to Define New Custom Errors.md>)
21. [Uh Oh... Async Error Handling](<Section 7 - Response Normalization Strategies/21 Uh Oh... Async Error Handling.md>)

### Section 8 - Database Management and Modeling

- 구성: 강의 16개 · 1시간 27분
- MongoDB와 Mongoose를 Kubernetes에서 실행하고 TypeScript 친화적인 도메인 모델을 설계한다.

1. [Creating Databases in Kubernetes](<Section 8 - Database Management and Modeling/01 Creating Databases in Kubernetes.md>)
2. [Connecting to MongoDB](<Section 8 - Database Management and Modeling/02 Connecting to MongoDB.md>)
3. [Understanding the Signup Flow](<Section 8 - Database Management and Modeling/03 Understanding the Signup Flow.md>)
4. [Getting TypeScript and Mongoose to Cooperate](<Section 8 - Database Management and Modeling/04 Getting TypeScript and Mongoose to Cooperate.md>)
5. [Creating the User Model](<Section 8 - Database Management and Modeling/05 Creating the User Model.md>)
6. [Type Checking User Properties](<Section 8 - Database Management and Modeling/06 Type Checking User Properties.md>)
7. [Adding Static Properties to a Model](<Section 8 - Database Management and Modeling/07 Adding Static Properties to a Model.md>)
8. [Defining Extra Document Properties](<Section 8 - Database Management and Modeling/08 Defining Extra Document Properties.md>)
9. [What's That Angle Bracket For?](<Section 8 - Database Management and Modeling/09 What's That Angle Bracket For.md>)
10. [User Creation](<Section 8 - Database Management and Modeling/10 User Creation.md>)
11. [Proper Error Handling](<Section 8 - Database Management and Modeling/11 Proper Error Handling.md>)
12. [Note on Password Hashing](<Section 8 - Database Management and Modeling/12 Note on Password Hashing.md>)
13. [Reminder on Password Hashing](<Section 8 - Database Management and Modeling/13 Reminder on Password Hashing.md>)
14. [Adding Password Hashing](<Section 8 - Database Management and Modeling/14 Adding Password Hashing.md>)
15. [Comparing Hashed Password](<Section 8 - Database Management and Modeling/15 Comparing Hashed Password.md>)
16. [Mongoose Pre-Save Hooks](<Section 8 - Database Management and Modeling/16 Mongoose Pre-Save Hooks.md>)

### Section 9 - Authentication Strategies and Options

- 구성: 강의 26개 · 2시간 48분
- 쿠키와 JWT를 이용한 마이크로서비스 인증 전략, 회원가입·로그인·현재 사용자 확인 흐름을 구현한다.

1. [Fundamental Authentication Strategies](<Section 9 - Authentication Strategies and Options/01 Fundamental Authentication Strategies.md>)
2. [Huge Issues with Authentication Strategies](<Section 9 - Authentication Strategies and Options/02 Huge Issues with Authentication Strategies.md>)
3. [So Which Option?](<Section 9 - Authentication Strategies and Options/03 So Which Option.md>)
4. [Solving Issues with Option #2](<Section 9 - Authentication Strategies and Options/04 Solving Issues with Option %232.md>)
5. [Reminder on Cookies vs JWT's](<Section 9 - Authentication Strategies and Options/05 Reminder on Cookies vs JWT's.md>)
6. [Microservices Auth Requirements](<Section 9 - Authentication Strategies and Options/06 Microservices Auth Requirements.md>)
7. [Issues with JWT's and Server Side Rendering](<Section 9 - Authentication Strategies and Options/07 Issues with JWT's and Server Side Rendering.md>)
8. [Cookies and Encryption](<Section 9 - Authentication Strategies and Options/08 Cookies and Encryption.md>)
9. [Adding Session Support](<Section 9 - Authentication Strategies and Options/09 Adding Session Support.md>)
10. [Generating a JWT](<Section 9 - Authentication Strategies and Options/10 Generating a JWT.md>)
11. [JWT Signing Keys](<Section 9 - Authentication Strategies and Options/11 JWT Signing Keys.md>)
12. [Securely Storing Secrets with Kubernetes](<Section 9 - Authentication Strategies and Options/12 Securely Storing Secrets with Kubernetes.md>)
13. [Creating and Accessing Secrets](<Section 9 - Authentication Strategies and Options/13 Creating and Accessing Secrets.md>)
14. [Accessing Env Variables in a Pod](<Section 9 - Authentication Strategies and Options/14 Accessing Env Variables in a Pod.md>)
15. [Common Response Properties](<Section 9 - Authentication Strategies and Options/15 Common Response Properties.md>)
16. [Formatting JSON Properties](<Section 9 - Authentication Strategies and Options/16 Formatting JSON Properties.md>)
17. [The Signin Flow](<Section 9 - Authentication Strategies and Options/17 The Signin Flow.md>)
18. [Common Request Validation Middleware](<Section 9 - Authentication Strategies and Options/18 Common Request Validation Middleware.md>)
19. [Sign In Logic](<Section 9 - Authentication Strategies and Options/19 Sign In Logic.md>)
20. [Quick Sign In Test](<Section 9 - Authentication Strategies and Options/20 Quick Sign In Test.md>)
21. [Current User Handler](<Section 9 - Authentication Strategies and Options/21 Current User Handler.md>)
22. [Returning the Current User](<Section 9 - Authentication Strategies and Options/22 Returning the Current User.md>)
23. [Signing Out](<Section 9 - Authentication Strategies and Options/23 Signing Out.md>)
24. [Creating a Current User Middleware](<Section 9 - Authentication Strategies and Options/24 Creating a Current User Middleware.md>)
25. [Augmenting Type Definitions](<Section 9 - Authentication Strategies and Options/25 Augmenting Type Definitions.md>)
26. [Requiring Auth for Route Access](<Section 9 - Authentication Strategies and Options/26 Requiring Auth for Route Access.md>)

### Section 10 - Testing Isolated Microservices

- 구성: 강의 22개 · 1시간 22분
- Jest와 Supertest를 사용해 독립된 마이크로서비스의 라우트, 인증과 오류 동작을 테스트한다.

1. [Scope of Testing](<Section 10 - Testing Isolated Microservices/01 Scope of Testing.md>)
2. [Testing Goals](<Section 10 - Testing Isolated Microservices/02 Testing Goals.md>)
3. [Testing Architecture](<Section 10 - Testing Isolated Microservices/03 Testing Architecture.md>)
4. [Index to App Refactor](<Section 10 - Testing Isolated Microservices/04 Index to App Refactor.md>)
5. [Replacing --only=prod Install Flag](<Section 10 - Testing Isolated Microservices/05 Replacing --only=prod Install Flag.md>)
6. [A Few Dependencies](<Section 10 - Testing Isolated Microservices/06 A Few Dependencies.md>)
7. [Required MongoMemoryServer Updates](<Section 10 - Testing Isolated Microservices/07 Required MongoMemoryServer Updates.md>)
8. [Test Environment Setup](<Section 10 - Testing Isolated Microservices/08 Test Environment Setup.md>)
9. [Our First Test](<Section 10 - Testing Isolated Microservices/09 Our First Test.md>)
10. [An Important Note](<Section 10 - Testing Isolated Microservices/10 An Important Note.md>)
11. [Testing Invalid Input](<Section 10 - Testing Isolated Microservices/11 Testing Invalid Input.md>)
12. [Requiring Unique Emails](<Section 10 - Testing Isolated Microservices/12 Requiring Unique Emails.md>)
13. [Changing Node Env During Tests](<Section 10 - Testing Isolated Microservices/13 Changing Node Env During Tests.md>)
14. [Tests Around Sign In Functionality](<Section 10 - Testing Isolated Microservices/14 Tests Around Sign In Functionality.md>)
15. [Cookie Request is Possibly Undefined Error](<Section 10 - Testing Isolated Microservices/15 Cookie Request is Possibly Undefined Error.md>)
16. [Testing Sign Out](<Section 10 - Testing Isolated Microservices/16 Testing Sign Out.md>)
17. [Issues with Cookies During Testing](<Section 10 - Testing Isolated Microservices/17 Issues with Cookies During Testing.md>)
18. [No Overload Matches This Call Error with Cookie](<Section 10 - Testing Isolated Microservices/18 No Overload Matches This Call Error with Cookie.md>)
19. [Easy Auth Solution](<Section 10 - Testing Isolated Microservices/19 Easy Auth Solution.md>)
20. [globalThis has no index signature TS Error](<Section 10 - Testing Isolated Microservices/20 globalThis has no index signature TS Error.md>)
21. [Auth Helper Function](<Section 10 - Testing Isolated Microservices/21 Auth Helper Function.md>)
22. [Testing Non-Authed Requests](<Section 10 - Testing Isolated Microservices/22 Testing Non-Authed Requests.md>)

### Section 11 - Integrating a Server-Side-Rendered React App

- 구성: 강의 40개 · 3시간 1분
- Next.js 기반 서버 사이드 렌더링 React 앱을 서비스들과 연결하고 브라우저·서버 요청 차이를 처리한다.

1. [Starting the React App](<Section 11 - Integrating a Server-Side-Rendered React App/01 Starting the React App.md>)
2. [Reminder on Server Side Rendering](<Section 11 - Integrating a Server-Side-Rendered React App/02 Reminder on Server Side Rendering.md>)
3. [Suggestion Regarding a Default Export Warning](<Section 11 - Integrating a Server-Side-Rendered React App/03 Suggestion Regarding a Default Export Warning.md>)
4. [Basics of Next JS](<Section 11 - Integrating a Server-Side-Rendered React App/04 Basics of Next JS.md>)
5. [Building a Next Image](<Section 11 - Integrating a Server-Side-Rendered React App/05 Building a Next Image.md>)
6. [Running Next in Kubernetes](<Section 11 - Integrating a Server-Side-Rendered React App/06 Running Next in Kubernetes.md>)
7. [Small Update for Custom Webpack Config](<Section 11 - Integrating a Server-Side-Rendered React App/07 Small Update for Custom Webpack Config.md>)
8. [Note on File Change Detection](<Section 11 - Integrating a Server-Side-Rendered React App/08 Note on File Change Detection.md>)
9. [Adding Global CSS](<Section 11 - Integrating a Server-Side-Rendered React App/09 Adding Global CSS.md>)
10. [Adding a Sign Up Form](<Section 11 - Integrating a Server-Side-Rendered React App/10 Adding a Sign Up Form.md>)
11. [Handling Email and Password Inputs](<Section 11 - Integrating a Server-Side-Rendered React App/11 Handling Email and Password Inputs.md>)
12. [Successful Account Signup](<Section 11 - Integrating a Server-Side-Rendered React App/12 Successful Account Signup.md>)
13. [Handling Validation Errors](<Section 11 - Integrating a Server-Side-Rendered React App/13 Handling Validation Errors.md>)
14. [The useRequest Hook](<Section 11 - Integrating a Server-Side-Rendered React App/14 The useRequest Hook.md>)
15. [Using the useRequest Hook](<Section 11 - Integrating a Server-Side-Rendered React App/15 Using the useRequest Hook.md>)
16. [An onSuccess Callback](<Section 11 - Integrating a Server-Side-Rendered React App/16 An onSuccess Callback.md>)
17. [Overview on Server Side Rendering](<Section 11 - Integrating a Server-Side-Rendered React App/17 Overview on Server Side Rendering.md>)
18. [A note about ECONNREFUSED errors](<Section 11 - Integrating a Server-Side-Rendered React App/18 A note about ECONNREFUSED errors.md>)
19. [Fetching Data During SSR](<Section 11 - Integrating a Server-Side-Rendered React App/19 Fetching Data During SSR.md>)
20. [Why the Error?](<Section 11 - Integrating a Server-Side-Rendered React App/20 Why the Error.md>)
21. [Two Possible Solutions](<Section 11 - Integrating a Server-Side-Rendered React App/21 Two Possible Solutions.md>)
22. [Cross Namespace Service Communication](<Section 11 - Integrating a Server-Side-Rendered React App/22 Cross Namespace Service Communication.md>)
23. [When is GetInitialProps Called?](<Section 11 - Integrating a Server-Side-Rendered React App/23 When is GetInitialProps Called.md>)
24. [On the Server or the Browser](<Section 11 - Integrating a Server-Side-Rendered React App/24 On the Server or the Browser.md>)
25. [Ingress-Nginx Namespace and Service - Important Update](<Section 11 - Integrating a Server-Side-Rendered React App/25 Ingress-Nginx Namespace and Service - Important Update.md>)
26. [Specifying the Host](<Section 11 - Integrating a Server-Side-Rendered React App/26 Specifying the Host.md>)
27. [Passing Through the Cookies](<Section 11 - Integrating a Server-Side-Rendered React App/27 Passing Through the Cookies.md>)
28. [A Reusable API Client](<Section 11 - Integrating a Server-Side-Rendered React App/28 A Reusable API Client.md>)
29. [Content on the Landing Page](<Section 11 - Integrating a Server-Side-Rendered React App/29 Content on the Landing Page.md>)
30. [The Sign In Form](<Section 11 - Integrating a Server-Side-Rendered React App/30 The Sign In Form.md>)
31. [A Reusable Header](<Section 11 - Integrating a Server-Side-Rendered React App/31 A Reusable Header.md>)
32. [Moving GetInitialProps](<Section 11 - Integrating a Server-Side-Rendered React App/32 Moving GetInitialProps.md>)
33. [Issues with Custom App GetInitialProps](<Section 11 - Integrating a Server-Side-Rendered React App/33 Issues with Custom App GetInitialProps.md>)
34. [Handling Multiple GetInitialProps](<Section 11 - Integrating a Server-Side-Rendered React App/34 Handling Multiple GetInitialProps.md>)
35. [Passing Props Through](<Section 11 - Integrating a Server-Side-Rendered React App/35 Passing Props Through.md>)
36. [Error - Invalid `Link` with `a` child](<Section 11 - Integrating a Server-Side-Rendered React App/36 Error - Invalid Link with a child.md>)
37. [Building the Header](<Section 11 - Integrating a Server-Side-Rendered React App/37 Building the Header.md>)
38. [Conditionally Showing Links](<Section 11 - Integrating a Server-Side-Rendered React App/38 Conditionally Showing Links.md>)
39. [Signing Out](<Section 11 - Integrating a Server-Side-Rendered React App/39 Signing Out.md>)
40. [React App Catchup & Checkpoint](<Section 11 - Integrating a Server-Side-Rendered React App/40 React App Catchup & Checkpoint.md>)

### Section 12 - Code Sharing and Reuse Between Services

- 구성: 강의 11개 · 52분
- 여러 Node 서비스가 공유하는 오류·이벤트 코드를 커스텀 NPM 패키지로 배포하고 재사용한다.

1. [Shared Logic Between Services](<Section 12 - Code Sharing and Reuse Between Services/01 Shared Logic Between Services.md>)
2. [Options for Code Sharing](<Section 12 - Code Sharing and Reuse Between Services/02 Options for Code Sharing.md>)
3. [NPM Organizations](<Section 12 - Code Sharing and Reuse Between Services/03 NPM Organizations.md>)
4. [Publishing NPM Modules](<Section 12 - Code Sharing and Reuse Between Services/04 Publishing NPM Modules.md>)
5. [Project Setup](<Section 12 - Code Sharing and Reuse Between Services/05 Project Setup.md>)
6. [Typo in package.json "files" Field - Do Not Skip](<Section 12 - Code Sharing and Reuse Between Services/06 Typo in package.json 'files' Field - Do Not Skip.md>)
7. [An Easy Publish Command](<Section 12 - Code Sharing and Reuse Between Services/07 An Easy Publish Command.md>)
8. [Relocating Shared Code](<Section 12 - Code Sharing and Reuse Between Services/08 Relocating Shared Code.md>)
9. [Updating Import Statements](<Section 12 - Code Sharing and Reuse Between Services/09 Updating Import Statements.md>)
10. [NPM Update Command](<Section 12 - Code Sharing and Reuse Between Services/10 NPM Update Command.md>)
11. [Updating the Common Module](<Section 12 - Code Sharing and Reuse Between Services/11 Updating the Common Module.md>)

### Section 13 - Create-Read-Update-Destroy Server Setup

- 구성: 강의 26개 · 2시간 28분
- 티켓 서비스의 생성·조회·수정 API와 권한·검증·테스트를 구현한다.

1. [Ticketing Service Overview](<Section 13 - Create-Read-Update-Destroy Server Setup/01 Ticketing Service Overview.md>)
2. [Project Setup](<Section 13 - Create-Read-Update-Destroy Server Setup/02 Project Setup.md>)
3. [Running the Ticket Service](<Section 13 - Create-Read-Update-Destroy Server Setup/03 Running the Ticket Service.md>)
4. [Mongo Connection URI](<Section 13 - Create-Read-Update-Destroy Server Setup/04 Mongo Connection URI.md>)
5. [Quick Auth Update](<Section 13 - Create-Read-Update-Destroy Server Setup/05 Quick Auth Update.md>)
6. [Test-First Approach](<Section 13 - Create-Read-Update-Destroy Server Setup/06 Test-First Approach.md>)
7. [Creating the Router](<Section 13 - Create-Read-Update-Destroy Server Setup/07 Creating the Router.md>)
8. [Adding Auth Protection](<Section 13 - Create-Read-Update-Destroy Server Setup/08 Adding Auth Protection.md>)
9. [Faking Authentication During Tests](<Section 13 - Create-Read-Update-Destroy Server Setup/09 Faking Authentication During Tests.md>)
10. [A Required Session Fix and a Global Signin Reminder](<Section 13 - Create-Read-Update-Destroy Server Setup/10 A Required Session Fix and a Global Signin Reminder.md>)
11. [Building a Session](<Section 13 - Create-Read-Update-Destroy Server Setup/11 Building a Session.md>)
12. [Testing Request Validation](<Section 13 - Create-Read-Update-Destroy Server Setup/12 Testing Request Validation.md>)
13. [Validating Title and Price](<Section 13 - Create-Read-Update-Destroy Server Setup/13 Validating Title and Price.md>)
14. [Reminder on Mongoose with TypeScript](<Section 13 - Create-Read-Update-Destroy Server Setup/14 Reminder on Mongoose with TypeScript.md>)
15. [Defining the Ticket Model](<Section 13 - Create-Read-Update-Destroy Server Setup/15 Defining the Ticket Model.md>)
16. [Creation via Route Handler](<Section 13 - Create-Read-Update-Destroy Server Setup/16 Creation via Route Handler.md>)
17. [Testing Show Routes](<Section 13 - Create-Read-Update-Destroy Server Setup/17 Testing Show Routes.md>)
18. [Unexpected Failure!](<Section 13 - Create-Read-Update-Destroy Server Setup/18 Unexpected Failure!.md>)
19. [What's that Error?!](<Section 13 - Create-Read-Update-Destroy Server Setup/19 What's that Error!.md>)
20. [Better Error Logging](<Section 13 - Create-Read-Update-Destroy Server Setup/20 Better Error Logging.md>)
21. [Complete Index Route Implementation](<Section 13 - Create-Read-Update-Destroy Server Setup/21 Complete Index Route Implementation.md>)
22. [Ticket Updating](<Section 13 - Create-Read-Update-Destroy Server Setup/22 Ticket Updating.md>)
23. [Handling Updates](<Section 13 - Create-Read-Update-Destroy Server Setup/23 Handling Updates.md>)
24. [Permission Checking](<Section 13 - Create-Read-Update-Destroy Server Setup/24 Permission Checking.md>)
25. [Final Update Changes](<Section 13 - Create-Read-Update-Destroy Server Setup/25 Final Update Changes.md>)
26. [Manual Testing](<Section 13 - Create-Read-Update-Destroy Server Setup/26 Manual Testing.md>)

### Section 14 - NATS Streaming Server - An Event Bus Implementation

- 구성: 강의 23개 · 2시간 57분
- NATS Streaming Server를 이벤트 버스로 구성하고 채널, 구독, 큐 그룹과 내구성 구독을 이해한다.

1. [What Now?](<Section 14 - NATS Streaming Server - An Event Bus Implementation/01 What Now.md>)
2. [NATS Server Status - IMPORTANT NOTE](<Section 14 - NATS Streaming Server - An Event Bus Implementation/02 NATS Server Status - IMPORTANT NOTE.md>)
3. [Three Important Items](<Section 14 - NATS Streaming Server - An Event Bus Implementation/03 Three Important Items.md>)
4. [Creating a NATS Streaming Deployment](<Section 14 - NATS Streaming Server - An Event Bus Implementation/04 Creating a NATS Streaming Deployment.md>)
5. [Big Notes on NATS Streaming](<Section 14 - NATS Streaming Server - An Event Bus Implementation/05 Big Notes on NATS Streaming.md>)
6. [Building a NATS Test Project](<Section 14 - NATS Streaming Server - An Event Bus Implementation/06 Building a NATS Test Project.md>)
7. [Port-Forwarding with Kubectl](<Section 14 - NATS Streaming Server - An Event Bus Implementation/07 Port-Forwarding with Kubectl.md>)
8. [Publishing Events](<Section 14 - NATS Streaming Server - An Event Bus Implementation/08 Publishing Events.md>)
9. [Small Required Command Change](<Section 14 - NATS Streaming Server - An Event Bus Implementation/09 Small Required Command Change.md>)
10. [Listening For Data](<Section 14 - NATS Streaming Server - An Event Bus Implementation/10 Listening For Data.md>)
11. [Accessing Event Data](<Section 14 - NATS Streaming Server - An Event Bus Implementation/11 Accessing Event Data.md>)
12. [Client ID Generation](<Section 14 - NATS Streaming Server - An Event Bus Implementation/12 Client ID Generation.md>)
13. [Queue Groups](<Section 14 - NATS Streaming Server - An Event Bus Implementation/13 Queue Groups.md>)
14. [Manual Ack Mode](<Section 14 - NATS Streaming Server - An Event Bus Implementation/14 Manual Ack Mode.md>)
15. [Client Health Checks](<Section 14 - NATS Streaming Server - An Event Bus Implementation/15 Client Health Checks.md>)
16. [Graceful Client Shutdown](<Section 14 - NATS Streaming Server - An Event Bus Implementation/16 Graceful Client Shutdown.md>)
17. [Core Concurrency Issues](<Section 14 - NATS Streaming Server - An Event Bus Implementation/17 Core Concurrency Issues.md>)
18. [Common Questions](<Section 14 - NATS Streaming Server - An Event Bus Implementation/18 Common Questions.md>)
19. [\[Optional\] More Possible Concurrency Solutions](<Section 14 - NATS Streaming Server - An Event Bus Implementation/19 [Optional] More Possible Concurrency Solutions.md>)
20. [Solving Concurrency Issues](<Section 14 - NATS Streaming Server - An Event Bus Implementation/20 Solving Concurrency Issues.md>)
21. [Concurrency Control with the Tickets App](<Section 14 - NATS Streaming Server - An Event Bus Implementation/21 Concurrency Control with the Tickets App.md>)
22. [Event Redelivery](<Section 14 - NATS Streaming Server - An Event Bus Implementation/22 Event Redelivery.md>)
23. [Durable Subscriptions](<Section 14 - NATS Streaming Server - An Event Bus Implementation/23 Durable Subscriptions.md>)

### Section 15 - Connecting to NATS in a Node JS World

- 구성: 강의 17개 · 1시간 22분
- Node.js에서 재사용 가능한 NATS 리스너와 퍼블리셔를 구현하고 이벤트 타입을 안전하게 관리한다.

1. [Reusable NATS Listeners](<Section 15 - Connecting to NATS in a Node JS World/01 Reusable NATS Listeners.md>)
2. [The Listener Abstract Class](<Section 15 - Connecting to NATS in a Node JS World/02 The Listener Abstract Class.md>)
3. [Extending the Listener](<Section 15 - Connecting to NATS in a Node JS World/03 Extending the Listener.md>)
4. [Quick Refactor](<Section 15 - Connecting to NATS in a Node JS World/04 Quick Refactor.md>)
5. [Leveraging TypeScript for Listener Validation](<Section 15 - Connecting to NATS in a Node JS World/05 Leveraging TypeScript for Listener Validation.md>)
6. [Subjects Enum](<Section 15 - Connecting to NATS in a Node JS World/06 Subjects Enum.md>)
7. [Custom Event Interface](<Section 15 - Connecting to NATS in a Node JS World/07 Custom Event Interface.md>)
8. [Enforcing Listener Subjects](<Section 15 - Connecting to NATS in a Node JS World/08 Enforcing Listener Subjects.md>)
9. [Quick Note - 'readonly' in Typescript](<Section 15 - Connecting to NATS in a Node JS World/09 Quick Note - 'readonly' in Typescript.md>)
10. [Enforcing Data Types](<Section 15 - Connecting to NATS in a Node JS World/10 Enforcing Data Types.md>)
11. [Where Does this Get Used?](<Section 15 - Connecting to NATS in a Node JS World/11 Where Does this Get Used.md>)
12. [Custom Publisher](<Section 15 - Connecting to NATS in a Node JS World/12 Custom Publisher.md>)
13. [Using the Custom Publisher](<Section 15 - Connecting to NATS in a Node JS World/13 Using the Custom Publisher.md>)
14. [Awaiting Event Publication](<Section 15 - Connecting to NATS in a Node JS World/14 Awaiting Event Publication.md>)
15. [Common Event Definitions Summary](<Section 15 - Connecting to NATS in a Node JS World/15 Common Event Definitions Summary.md>)
16. [Updating the Common Module](<Section 15 - Connecting to NATS in a Node JS World/16 Updating the Common Module.md>)
17. [Restarting NATS](<Section 15 - Connecting to NATS in a Node JS World/17 Restarting NATS.md>)

### Section 16 - Managing a NATS Client

- 구성: 강의 19개 · 1시간 37분
- 서비스 전체에서 공유할 NATS 클라이언트를 관리하고 연결·종료·환경 변수 처리를 안정화한다.

1. [Publishing Ticket Creation](<Section 16 - Managing a NATS Client/01 Publishing Ticket Creation.md>)
2. [More on Publishing](<Section 16 - Managing a NATS Client/02 More on Publishing.md>)
3. [NATS Client Singleton](<Section 16 - Managing a NATS Client/03 NATS Client Singleton.md>)
4. [Node Nats Streaming Installation](<Section 16 - Managing a NATS Client/04 Node Nats Streaming Installation.md>)
5. [Remember Mongoose?](<Section 16 - Managing a NATS Client/05 Remember Mongoose.md>)
6. [TS Error - Did you forget to include 'void' in your type argument](<Section 16 - Managing a NATS Client/06 TS Error - Did you forget to include 'void' in your type argument.md>)
7. [Singleton Implementation](<Section 16 - Managing a NATS Client/07 Singleton Implementation.md>)
8. [Accessing the NATS Client](<Section 16 - Managing a NATS Client/08 Accessing the NATS Client.md>)
9. [Graceful Shutdown](<Section 16 - Managing a NATS Client/09 Graceful Shutdown.md>)
10. [Successful Listen!](<Section 16 - Managing a NATS Client/10 Successful Listen!.md>)
11. [Ticket Update Publishing](<Section 16 - Managing a NATS Client/11 Ticket Update Publishing.md>)
12. [Failed Event Publishing](<Section 16 - Managing a NATS Client/12 Failed Event Publishing.md>)
13. [Handling Publish Failures](<Section 16 - Managing a NATS Client/13 Handling Publish Failures.md>)
14. [Fixing a Few Tests](<Section 16 - Managing a NATS Client/14 Fixing a Few Tests.md>)
15. [Redirecting Imports](<Section 16 - Managing a NATS Client/15 Redirecting Imports.md>)
16. [Providing a Mock Implementation](<Section 16 - Managing a NATS Client/16 Providing a Mock Implementation.md>)
17. [Test-Suite Wide Mocks](<Section 16 - Managing a NATS Client/17 Test-Suite Wide Mocks.md>)
18. [Ensuring Mock Invocations](<Section 16 - Managing a NATS Client/18 Ensuring Mock Invocations.md>)
19. [NATS Env Variables](<Section 16 - Managing a NATS Client/19 NATS Env Variables.md>)

### Section 17 - Cross-Service Data Replication In Action

- 구성: 강의 28개 · 2시간 44분
- 주문 서비스를 구축하며 서비스 간 데이터 복제, 이벤트 수신과 주문 생성·취소 흐름을 구현한다.

1. [The Orders Service](<Section 17 - Cross-Service Data Replication In Action/01 The Orders Service.md>)
2. [Scaffolding the Orders Service](<Section 17 - Cross-Service Data Replication In Action/02 Scaffolding the Orders Service.md>)
3. [A Touch More Setup](<Section 17 - Cross-Service Data Replication In Action/03 A Touch More Setup.md>)
4. [Ingress Routing Rules](<Section 17 - Cross-Service Data Replication In Action/04 Ingress Routing Rules.md>)
5. [Scaffolding a Few Route Handlers](<Section 17 - Cross-Service Data Replication In Action/05 Scaffolding a Few Route Handlers.md>)
6. [Subtle Service Coupling](<Section 17 - Cross-Service Data Replication In Action/06 Subtle Service Coupling.md>)
7. [Associating Orders and Tickets](<Section 17 - Cross-Service Data Replication In Action/07 Associating Orders and Tickets.md>)
8. [Order Model Setup](<Section 17 - Cross-Service Data Replication In Action/08 Order Model Setup.md>)
9. [The Need for an Enum](<Section 17 - Cross-Service Data Replication In Action/09 The Need for an Enum.md>)
10. [Creating an Order Status Enum](<Section 17 - Cross-Service Data Replication In Action/10 Creating an Order Status Enum.md>)
11. [More on Mongoose Refs](<Section 17 - Cross-Service Data Replication In Action/11 More on Mongoose Refs.md>)
12. [Defining the Ticket Model](<Section 17 - Cross-Service Data Replication In Action/12 Defining the Ticket Model.md>)
13. [Order Creation Logic](<Section 17 - Cross-Service Data Replication In Action/13 Order Creation Logic.md>)
14. [Finding Reserved Tickets](<Section 17 - Cross-Service Data Replication In Action/14 Finding Reserved Tickets.md>)
15. [Convenience Document Methods](<Section 17 - Cross-Service Data Replication In Action/15 Convenience Document Methods.md>)
16. [Order Expiration Times](<Section 17 - Cross-Service Data Replication In Action/16 Order Expiration Times.md>)
17. [globalThis has no index signature TS Error](<Section 17 - Cross-Service Data Replication In Action/17 globalThis has no index signature TS Error.md>)
18. [Test Suite Setup](<Section 17 - Cross-Service Data Replication In Action/18 Test Suite Setup.md>)
19. [Small Update for "Value of type 'typeof ObjectId' is not callable"](<Section 17 - Cross-Service Data Replication In Action/19 Small Update for 'Value of type 'typeof ObjectId' is not callable'.md>)
20. [Asserting Tickets Exist](<Section 17 - Cross-Service Data Replication In Action/20 Asserting Tickets Exist.md>)
21. [Asserting Reserved Tickets](<Section 17 - Cross-Service Data Replication In Action/21 Asserting Reserved Tickets.md>)
22. [Testing the Success Case](<Section 17 - Cross-Service Data Replication In Action/22 Testing the Success Case.md>)
23. [Fetching a User's Orders](<Section 17 - Cross-Service Data Replication In Action/23 Fetching a User's Orders.md>)
24. [A Slightly Complicated Test](<Section 17 - Cross-Service Data Replication In Action/24 A Slightly Complicated Test.md>)
25. [Fetching Individual Orders](<Section 17 - Cross-Service Data Replication In Action/25 Fetching Individual Orders.md>)
26. [Does Fetching Work?](<Section 17 - Cross-Service Data Replication In Action/26 Does Fetching Work.md>)
27. [Cancelling an Order](<Section 17 - Cross-Service Data Replication In Action/27 Cancelling an Order.md>)
28. [Can We Cancel?](<Section 17 - Cross-Service Data Replication In Action/28 Can We Cancel.md>)

### Section 18 - Understanding Event Flow

- 구성: 강의 6개 · 30분
- 주문과 티켓 서비스 사이의 이벤트 흐름을 설계하고 이벤트 발행 동작을 테스트한다.

1. [Orders Service Events](<Section 18 - Understanding Event Flow/01 Orders Service Events.md>)
2. [Creating the Events](<Section 18 - Understanding Event Flow/02 Creating the Events.md>)
3. [Implementing the Publishers](<Section 18 - Understanding Event Flow/03 Implementing the Publishers.md>)
4. [Publishing the Order Creation](<Section 18 - Understanding Event Flow/04 Publishing the Order Creation.md>)
5. [Publishing Order Cancellation](<Section 18 - Understanding Event Flow/05 Publishing Order Cancellation.md>)
6. [Testing Event Publishing](<Section 18 - Understanding Event Flow/06 Testing Event Publishing.md>)

### Section 19 - Listening for Events and Handling Concurrency Issues

- 구성: 강의 48개 · 4시간 13분
- 이벤트 버전 관리와 낙관적 동시성 제어로 순서가 어긋난 이벤트 및 예약된 티켓 수정 문제를 해결한다.

1. [Heads Up Regarding Some Mongoose TS Errors](<Section 19 - Listening for Events and Handling Concurrency Issues/01 Heads Up Regarding Some Mongoose TS Errors.md>)
2. [Time for Listeners!](<Section 19 - Listening for Events and Handling Concurrency Issues/02 Time for Listeners!.md>)
3. [Reminder on Listeners](<Section 19 - Listening for Events and Handling Concurrency Issues/03 Reminder on Listeners.md>)
4. [Blueprint for Listeners](<Section 19 - Listening for Events and Handling Concurrency Issues/04 Blueprint for Listeners.md>)
5. [A Few More Reminders](<Section 19 - Listening for Events and Handling Concurrency Issues/05 A Few More Reminders.md>)
6. [Simple onMessage Implementation](<Section 19 - Listening for Events and Handling Concurrency Issues/06 Simple onMessage Implementation.md>)
7. [ID Adjustment](<Section 19 - Listening for Events and Handling Concurrency Issues/07 ID Adjustment.md>)
8. [Ticket Updated Listener Implementation](<Section 19 - Listening for Events and Handling Concurrency Issues/08 Ticket Updated Listener Implementation.md>)
9. [Initializing the Listeners](<Section 19 - Listening for Events and Handling Concurrency Issues/09 Initializing the Listeners.md>)
10. [A Quick Manual Test](<Section 19 - Listening for Events and Handling Concurrency Issues/10 A Quick Manual Test.md>)
11. [Clear Concurrency Issues](<Section 19 - Listening for Events and Handling Concurrency Issues/11 Clear Concurrency Issues.md>)
12. [Reminder on Versioning Records](<Section 19 - Listening for Events and Handling Concurrency Issues/12 Reminder on Versioning Records.md>)
13. [Optimistic Concurrency Control](<Section 19 - Listening for Events and Handling Concurrency Issues/13 Optimistic Concurrency Control.md>)
14. [Mongoose Update-If-Current](<Section 19 - Listening for Events and Handling Concurrency Issues/14 Mongoose Update-If-Current.md>)
15. [Implementing OCC with Mongoose](<Section 19 - Listening for Events and Handling Concurrency Issues/15 Implementing OCC with Mongoose.md>)
16. [Test functions cannot both take a 'done' callback and return something Error](<Section 19 - Listening for Events and Handling Concurrency Issues/16 Test functions cannot both take a 'done' callback and return something Error.md>)
17. [Testing OCC](<Section 19 - Listening for Events and Handling Concurrency Issues/17 Testing OCC.md>)
18. [One More Test](<Section 19 - Listening for Events and Handling Concurrency Issues/18 One More Test.md>)
19. [Who Updates Versions?](<Section 19 - Listening for Events and Handling Concurrency Issues/19 Who Updates Versions.md>)
20. [Including Versions in Events](<Section 19 - Listening for Events and Handling Concurrency Issues/20 Including Versions in Events.md>)
21. [Updating Tickets Event Definitions](<Section 19 - Listening for Events and Handling Concurrency Issues/21 Updating Tickets Event Definitions.md>)
22. [Property 'version' is missing TS Errors After Running Skaffold](<Section 19 - Listening for Events and Handling Concurrency Issues/22 Property 'version' is missing TS Errors After Running Skaffold.md>)
23. [Applying a Version Query](<Section 19 - Listening for Events and Handling Concurrency Issues/23 Applying a Version Query.md>)
24. [Did it Work?](<Section 19 - Listening for Events and Handling Concurrency Issues/24 Did it Work.md>)
25. [Abstracted Query Method](<Section 19 - Listening for Events and Handling Concurrency Issues/25 Abstracted Query Method.md>)
26. [\[Optional\] Versioning Without Update-If-Current](<Section 19 - Listening for Events and Handling Concurrency Issues/26 [Optional] Versioning Without Update-If-Current.md>)
27. [Testing Listeners](<Section 19 - Listening for Events and Handling Concurrency Issues/27 Testing Listeners.md>)
28. [A Complete Listener Test](<Section 19 - Listening for Events and Handling Concurrency Issues/28 A Complete Listener Test.md>)
29. [Testing the Ack Call](<Section 19 - Listening for Events and Handling Concurrency Issues/29 Testing the Ack Call.md>)
30. [Testing the Ticket Updated Listener](<Section 19 - Listening for Events and Handling Concurrency Issues/30 Testing the Ticket Updated Listener.md>)
31. [Success Case Testing](<Section 19 - Listening for Events and Handling Concurrency Issues/31 Success Case Testing.md>)
32. [Out-Of-Order Events](<Section 19 - Listening for Events and Handling Concurrency Issues/32 Out-Of-Order Events.md>)
33. [The Next Few Videos](<Section 19 - Listening for Events and Handling Concurrency Issues/33 The Next Few Videos.md>)
34. [Fixing a Few Tests](<Section 19 - Listening for Events and Handling Concurrency Issues/34 Fixing a Few Tests.md>)
35. [Listeners in the Tickets Service](<Section 19 - Listening for Events and Handling Concurrency Issues/35 Listeners in the Tickets Service.md>)
36. [Building the Listener](<Section 19 - Listening for Events and Handling Concurrency Issues/36 Building the Listener.md>)
37. [Strategies for Locking a Ticket](<Section 19 - Listening for Events and Handling Concurrency Issues/37 Strategies for Locking a Ticket.md>)
38. [Reserving a Ticket](<Section 19 - Listening for Events and Handling Concurrency Issues/38 Reserving a Ticket.md>)
39. [Setup for Testing Reservation](<Section 19 - Listening for Events and Handling Concurrency Issues/39 Setup for Testing Reservation.md>)
40. [Test Implementation](<Section 19 - Listening for Events and Handling Concurrency Issues/40 Test Implementation.md>)
41. [Missing Update Event](<Section 19 - Listening for Events and Handling Concurrency Issues/41 Missing Update Event.md>)
42. [Private vs Protected Properties](<Section 19 - Listening for Events and Handling Concurrency Issues/42 Private vs Protected Properties.md>)
43. [Publishing While Listening](<Section 19 - Listening for Events and Handling Concurrency Issues/43 Publishing While Listening.md>)
44. [Mock Function Arguments](<Section 19 - Listening for Events and Handling Concurrency Issues/44 Mock Function Arguments.md>)
45. [Order Cancelled Listener](<Section 19 - Listening for Events and Handling Concurrency Issues/45 Order Cancelled Listener.md>)
46. [A Lightning-Quick Test](<Section 19 - Listening for Events and Handling Concurrency Issues/46 A Lightning-Quick Test.md>)
47. [Don't Forget to Listen!](<Section 19 - Listening for Events and Handling Concurrency Issues/47 Don't Forget to Listen!.md>)
48. [Rejecting Edits of Reserved Tickets](<Section 19 - Listening for Events and Handling Concurrency Issues/48 Rejecting Edits of Reserved Tickets.md>)

### Section 20 - Worker Services

- 구성: 강의 19개 · 1시간 36분
- Bull과 Redis를 사용하는 만료 작업 서비스를 구축해 시간 제한이 지난 주문을 자동 취소한다.

1. [The Expiration Service](<Section 20 - Worker Services/01 The Expiration Service.md>)
2. [Expiration Options](<Section 20 - Worker Services/02 Expiration Options.md>)
3. [Initial Setup](<Section 20 - Worker Services/03 Initial Setup.md>)
4. [Skaffold errors - Expiration Image Can't be Pulled](<Section 20 - Worker Services/04 Skaffold errors - Expiration Image Can't be Pulled.md>)
5. [A Touch of Kubernetes Setup](<Section 20 - Worker Services/05 A Touch of Kubernetes Setup.md>)
6. [File Sync Setup](<Section 20 - Worker Services/06 File Sync Setup.md>)
7. [Listener Creation](<Section 20 - Worker Services/07 Listener Creation.md>)
8. [What's Bull All About?](<Section 20 - Worker Services/08 What's Bull All About.md>)
9. [Creating a Queue](<Section 20 - Worker Services/09 Creating a Queue.md>)
10. [Queueing a Job on Event Arrival](<Section 20 - Worker Services/10 Queueing a Job on Event Arrival.md>)
11. [Testing Job Processing](<Section 20 - Worker Services/11 Testing Job Processing.md>)
12. [Delaying Job Processing](<Section 20 - Worker Services/12 Delaying Job Processing.md>)
13. [Defining the Expiration Complete Event](<Section 20 - Worker Services/13 Defining the Expiration Complete Event.md>)
14. [Publishing an Event on Job Processing](<Section 20 - Worker Services/14 Publishing an Event on Job Processing.md>)
15. [Handling an Expiration Event](<Section 20 - Worker Services/15 Handling an Expiration Event.md>)
16. [Emitting the Order Cancelled Event](<Section 20 - Worker Services/16 Emitting the Order Cancelled Event.md>)
17. [Testing the Expiration Complete Listener](<Section 20 - Worker Services/17 Testing the Expiration Complete Listener.md>)
18. [A Touch More Testing](<Section 20 - Worker Services/18 A Touch More Testing.md>)
19. [Listening for Expiration](<Section 20 - Worker Services/19 Listening for Expiration.md>)

### Section 21 - Handling Payments

- 구성: 강의 31개 · 2시간 40분
- 결제 서비스를 만들고 Stripe 결제, 주문 상태 검증, 결제 이벤트와 중복 처리 방지를 구현한다.

1. [The Payments Service](<Section 21 - Handling Payments/01 The Payments Service.md>)
2. [globalThis has no index signature TS Error](<Section 21 - Handling Payments/02 globalThis has no index signature TS Error.md>)
3. [Initial Setup](<Section 21 - Handling Payments/03 Initial Setup.md>)
4. [Replicated Fields](<Section 21 - Handling Payments/04 Replicated Fields.md>)
5. [Another Order Model!](<Section 21 - Handling Payments/05 Another Order Model!.md>)
6. [Update-If-Current](<Section 21 - Handling Payments/06 Update-If-Current.md>)
7. [Replicating Orders](<Section 21 - Handling Payments/07 Replicating Orders.md>)
8. [Testing Order Creation](<Section 21 - Handling Payments/08 Testing Order Creation.md>)
9. [Marking an Order as Cancelled](<Section 21 - Handling Payments/09 Marking an Order as Cancelled.md>)
10. [Cancelled Testing](<Section 21 - Handling Payments/10 Cancelled Testing.md>)
11. [Starting the Listeners](<Section 21 - Handling Payments/11 Starting the Listeners.md>)
12. [Payments Flow with Stripe](<Section 21 - Handling Payments/12 Payments Flow with Stripe.md>)
13. [Implementing the Create Charge Handler](<Section 21 - Handling Payments/13 Implementing the Create Charge Handler.md>)
14. [Validating Order Payment](<Section 21 - Handling Payments/14 Validating Order Payment.md>)
15. [Testing Order Validation Before Payment](<Section 21 - Handling Payments/15 Testing Order Validation Before Payment.md>)
16. [Testing Same-User Validation](<Section 21 - Handling Payments/16 Testing Same-User Validation.md>)
17. [Stripe Setup](<Section 21 - Handling Payments/17 Stripe Setup.md>)
18. [Creating a Stripe Secret](<Section 21 - Handling Payments/18 Creating a Stripe Secret.md>)
19. [Creating a Charge with Stripe](<Section 21 - Handling Payments/19 Creating a Charge with Stripe.md>)
20. [Manual Testing of Payments](<Section 21 - Handling Payments/20 Manual Testing of Payments.md>)
21. [Automated Payment Testing](<Section 21 - Handling Payments/21 Automated Payment Testing.md>)
22. [Mocked Stripe Client](<Section 21 - Handling Payments/22 Mocked Stripe Client.md>)
23. [A More Realistic Test Setup](<Section 21 - Handling Payments/23 A More Realistic Test Setup.md>)
24. [Realistic Test Implementation](<Section 21 - Handling Payments/24 Realistic Test Implementation.md>)
25. [Tying an Order and Charge Together](<Section 21 - Handling Payments/25 Tying an Order and Charge Together.md>)
26. [Testing Payment Creation](<Section 21 - Handling Payments/26 Testing Payment Creation.md>)
27. [Publishing a Payment Created Event](<Section 21 - Handling Payments/27 Publishing a Payment Created Event.md>)
28. [More on Publishing](<Section 21 - Handling Payments/28 More on Publishing.md>)
29. [Marking an Order as Complete](<Section 21 - Handling Payments/29 Marking an Order as Complete.md>)
30. [Important Info About the Next Lecture - Don't Skip](<Section 21 - Handling Payments/30 Important Info About the Next Lecture - Don't Skip.md>)
31. [Don't Cancel Completed Orders!](<Section 21 - Handling Payments/31 Don't Cancel Completed Orders!.md>)

### Section 22 - Back to the Client

- 구성: 강의 21개 · 1시간 43분
- React 클라이언트에 티켓 생성·구매·주문·결제 화면을 연결해 전체 사용자 흐름을 완성한다.

1. [A Few More Pages](<Section 22 - Back to the Client/01 A Few More Pages.md>)
2. [Reminder on Data Fetching with Next](<Section 22 - Back to the Client/02 Reminder on Data Fetching with Next.md>)
3. [Two Quick Fixes](<Section 22 - Back to the Client/03 Two Quick Fixes.md>)
4. [Scaffolding a Form](<Section 22 - Back to the Client/04 Scaffolding a Form.md>)
5. [Sanitizing Price Input](<Section 22 - Back to the Client/05 Sanitizing Price Input.md>)
6. [Ticket Creation](<Section 22 - Back to the Client/06 Ticket Creation.md>)
7. [Listing All Tickets](<Section 22 - Back to the Client/07 Listing All Tickets.md>)
8. [Reminder on Invalid `Link` with `a` child Errors](<Section 22 - Back to the Client/08 Reminder on Invalid Link with a child Errors.md>)
9. [Linking to Wildcard Routes](<Section 22 - Back to the Client/09 Linking to Wildcard Routes.md>)
10. [Creating an Order](<Section 22 - Back to the Client/10 Creating an Order.md>)
11. [Programmatic Navigation to Wildcard Routes](<Section 22 - Back to the Client/11 Programmatic Navigation to Wildcard Routes.md>)
12. [The Expiration Timer](<Section 22 - Back to the Client/12 The Expiration Timer.md>)
13. [Displaying the Expiration](<Section 22 - Back to the Client/13 Displaying the Expiration.md>)
14. [Showing a Stripe Payment Form](<Section 22 - Back to the Client/14 Showing a Stripe Payment Form.md>)
15. [Module not found - Can't resolve 'prop-types'](<Section 22 - Back to the Client/15 Module not found - Can't resolve 'prop-types'.md>)
16. [Configuring Stripe](<Section 22 - Back to the Client/16 Configuring Stripe.md>)
17. [Test Credit Card Numbers](<Section 22 - Back to the Client/17 Test Credit Card Numbers.md>)
18. [Paying for an Order](<Section 22 - Back to the Client/18 Paying for an Order.md>)
19. [Filtering Reserved Tickets](<Section 22 - Back to the Client/19 Filtering Reserved Tickets.md>)
20. [Header Links](<Section 22 - Back to the Client/20 Header Links.md>)
21. [Rendering a List of Orders](<Section 22 - Back to the Client/21 Rendering a List of Orders.md>)

### Section 23 - CI/CD

- 구성: 강의 30개 · 2시간 17분
- GitHub Actions와 클라우드 Kubernetes 환경을 이용해 테스트·빌드·배포 CI/CD 파이프라인을 구성한다.

1. [Development Workflow](<Section 23 - CI-CD/01 Development Workflow.md>)
2. [Git Repository Approaches](<Section 23 - CI-CD/02 Git Repository Approaches.md>)
3. [Creating a GitHub Action](<Section 23 - CI-CD/03 Creating a GitHub Action.md>)
4. [Adding a CI Test Script](<Section 23 - CI-CD/04 Adding a CI Test Script.md>)
5. [Tests in GitHub Actions Hang - Jest did not exit](<Section 23 - CI-CD/05 Tests in GitHub Actions Hang - Jest did not exit.md>)
6. [Running Tests on PR Creation](<Section 23 - CI-CD/06 Running Tests on PR Creation.md>)
7. [Output of Failing Tests](<Section 23 - CI-CD/07 Output of Failing Tests.md>)
8. [Running Tests in Parallel](<Section 23 - CI-CD/08 Running Tests in Parallel.md>)
9. [Verifying a Test Run](<Section 23 - CI-CD/09 Verifying a Test Run.md>)
10. [Selective Test Execution](<Section 23 - CI-CD/10 Selective Test Execution.md>)
11. [Deployment Options](<Section 23 - CI-CD/11 Deployment Options.md>)
12. [Creating a Hosted Cluster](<Section 23 - CI-CD/12 Creating a Hosted Cluster.md>)
13. [Reminder on Kubernetes Context](<Section 23 - CI-CD/13 Reminder on Kubernetes Context.md>)
14. [Reminder on Swapping Contexts](<Section 23 - CI-CD/14 Reminder on Swapping Contexts.md>)
15. [The Deployment Plan](<Section 23 - CI-CD/15 The Deployment Plan.md>)
16. [Building an Image in an Action](<Section 23 - CI-CD/16 Building an Image in an Action.md>)
17. [Testing the Image Build](<Section 23 - CI-CD/17 Testing the Image Build.md>)
18. [Restarting the Deployment](<Section 23 - CI-CD/18 Restarting the Deployment.md>)
19. [Applying Kubernetes Manifests](<Section 23 - CI-CD/19 Applying Kubernetes Manifests.md>)
20. [Prod vs Dev Manifest Files](<Section 23 - CI-CD/20 Prod vs Dev Manifest Files.md>)
21. [Manual Secret Creation](<Section 23 - CI-CD/21 Manual Secret Creation.md>)
22. [Don't Forget Ingress-Nginx!](<Section 23 - CI-CD/22 Don't Forget Ingress-Nginx!.md>)
23. [Testing Automated Deployment](<Section 23 - CI-CD/23 Testing Automated Deployment.md>)
24. [Additional Deploy Files](<Section 23 - CI-CD/24 Additional Deploy Files.md>)
25. [A Successful Deploy!](<Section 23 - CI-CD/25 A Successful Deploy!.md>)
26. [Buying a Domain Name](<Section 23 - CI-CD/26 Buying a Domain Name.md>)
27. [Three Important Changes Needed to Deploy - Do Not Skip!](<Section 23 - CI-CD/27 Three Important Changes Needed to Deploy - Do Not Skip!.md>)
28. [Configuring the Domain Name](<Section 23 - CI-CD/28 Configuring the Domain Name.md>)
29. [I Really Hope This Works](<Section 23 - CI-CD/29 I Really Hope This Works.md>)
30. [Next Steps](<Section 23 - CI-CD/30 Next Steps.md>)

### Section 24 - [Appendix A] - Basics of Docker

- 구성: 강의 46개 · 3시간 3분
- Docker 이미지, 컨테이너, Dockerfile, 포트와 볼륨 등 강의에 필요한 Docker 기초를 학습한다.

1. [Finished Code and Diagrams](<Section 24 - [Appendix A] - Basics of Docker/01 Finished Code and Diagrams.md>)
2. [Why Use Docker?](<Section 24 - [Appendix A] - Basics of Docker/02 Why Use Docker.md>)
3. [What is Docker?](<Section 24 - [Appendix A] - Basics of Docker/03 What is Docker.md>)
4. [Docker for Mac - Windows](<Section 24 - [Appendix A] - Basics of Docker/04 Docker for Mac - Windows.md>)
5. [Installing Docker on macOS](<Section 24 - [Appendix A] - Basics of Docker/05 Installing Docker on macOS.md>)
6. [Installing Docker with WSL2 on Windows 10-11](<Section 24 - [Appendix A] - Basics of Docker/06 Installing Docker with WSL2 on Windows 10-11.md>)
7. [Installing Docker on Linux](<Section 24 - [Appendix A] - Basics of Docker/07 Installing Docker on Linux.md>)
8. [Using the Docker Client](<Section 24 - [Appendix A] - Basics of Docker/08 Using the Docker Client.md>)
9. [But Really... What's a Container?](<Section 24 - [Appendix A] - Basics of Docker/09 But Really... What's a Container.md>)
10. [How's Docker Running on Your Computer?](<Section 24 - [Appendix A] - Basics of Docker/10 How's Docker Running on Your Computer.md>)
11. [Docker Run in Detail](<Section 24 - [Appendix A] - Basics of Docker/11 Docker Run in Detail.md>)
12. [Overriding Default Commands](<Section 24 - [Appendix A] - Basics of Docker/12 Overriding Default Commands.md>)
13. [Listing Running Containers](<Section 24 - [Appendix A] - Basics of Docker/13 Listing Running Containers.md>)
14. [Container Lifecycle](<Section 24 - [Appendix A] - Basics of Docker/14 Container Lifecycle.md>)
15. [Restarting Stopped Containers](<Section 24 - [Appendix A] - Basics of Docker/15 Restarting Stopped Containers.md>)
16. [Removing Stopped Containers](<Section 24 - [Appendix A] - Basics of Docker/16 Removing Stopped Containers.md>)
17. [Retrieving Output Logs](<Section 24 - [Appendix A] - Basics of Docker/17 Retrieving Output Logs.md>)
18. [Stopping Containers](<Section 24 - [Appendix A] - Basics of Docker/18 Stopping Containers.md>)
19. [Multi-Command Containers](<Section 24 - [Appendix A] - Basics of Docker/19 Multi-Command Containers.md>)
20. [Executing Commands in Running Containers](<Section 24 - [Appendix A] - Basics of Docker/20 Executing Commands in Running Containers.md>)
21. [The Purpose of the 'it' Flag](<Section 24 - [Appendix A] - Basics of Docker/21 The Purpose of the 'it' Flag.md>)
22. [Getting a Command Prompt in a Container](<Section 24 - [Appendix A] - Basics of Docker/22 Getting a Command Prompt in a Container.md>)
23. [Starting with a Shell](<Section 24 - [Appendix A] - Basics of Docker/23 Starting with a Shell.md>)
24. [Container Isolation](<Section 24 - [Appendix A] - Basics of Docker/24 Container Isolation.md>)
25. [Creating Docker Images](<Section 24 - [Appendix A] - Basics of Docker/25 Creating Docker Images.md>)
26. [Buildkit for Docker Desktop](<Section 24 - [Appendix A] - Basics of Docker/26 Buildkit for Docker Desktop.md>)
27. [Building a Dockerfile](<Section 24 - [Appendix A] - Basics of Docker/27 Building a Dockerfile.md>)
28. [Dockerfile Teardown](<Section 24 - [Appendix A] - Basics of Docker/28 Dockerfile Teardown.md>)
29. [What's a Base Image?](<Section 24 - [Appendix A] - Basics of Docker/29 What's a Base Image.md>)
30. [The Build Process in Detail](<Section 24 - [Appendix A] - Basics of Docker/30 The Build Process in Detail.md>)
31. [A Brief Recap](<Section 24 - [Appendix A] - Basics of Docker/31 A Brief Recap.md>)
32. [Rebuilds with Cache](<Section 24 - [Appendix A] - Basics of Docker/32 Rebuilds with Cache.md>)
33. [Tagging an Image](<Section 24 - [Appendix A] - Basics of Docker/33 Tagging an Image.md>)
34. [Quick Note for Windows Users](<Section 24 - [Appendix A] - Basics of Docker/34 Quick Note for Windows Users.md>)
35. [Manual Image Generation with Docker Commit](<Section 24 - [Appendix A] - Basics of Docker/35 Manual Image Generation with Docker Commit.md>)
36. [Project Outline](<Section 24 - [Appendix A] - Basics of Docker/36 Project Outline.md>)
37. [Node Server Setup](<Section 24 - [Appendix A] - Basics of Docker/37 Node Server Setup.md>)
38. [Reminder on Build Kit](<Section 24 - [Appendix A] - Basics of Docker/38 Reminder on Build Kit.md>)
39. [A Few Planned Errors](<Section 24 - [Appendix A] - Basics of Docker/39 A Few Planned Errors.md>)
40. [Base Image Issues](<Section 24 - [Appendix A] - Basics of Docker/40 Base Image Issues.md>)
41. [A Few Missing Files](<Section 24 - [Appendix A] - Basics of Docker/41 A Few Missing Files.md>)
42. [Copying Build Files](<Section 24 - [Appendix A] - Basics of Docker/42 Copying Build Files.md>)
43. [Container Port Forwarding](<Section 24 - [Appendix A] - Basics of Docker/43 Container Port Forwarding.md>)
44. [Specifying a Working Directory](<Section 24 - [Appendix A] - Basics of Docker/44 Specifying a Working Directory.md>)
45. [Unnecessary Rebuilds](<Section 24 - [Appendix A] - Basics of Docker/45 Unnecessary Rebuilds.md>)
46. [Minimizing Cache Busting and Rebuilds](<Section 24 - [Appendix A] - Basics of Docker/46 Minimizing Cache Busting and Rebuilds.md>)

### Section 25 - [Appendix B] - Basics of Typescript

- 구성: 강의 75개 · 5시간 41분
- TypeScript의 타입, 인터페이스, 클래스, 제네릭과 Node·Express·React 적용 방법을 기초부터 학습한다.

1. [How to Get Help](<Section 25 - [Appendix B] - Basics of Typescript/01 How to Get Help.md>)
2. [TypeScript Overview](<Section 25 - [Appendix B] - Basics of Typescript/02 TypeScript Overview.md>)
3. [Environment Setup](<Section 25 - [Appendix B] - Basics of Typescript/03 Environment Setup.md>)
4. [Important Update About ts-node and Axios](<Section 25 - [Appendix B] - Basics of Typescript/04 Important Update About ts-node and Axios.md>)
5. [A First App](<Section 25 - [Appendix B] - Basics of Typescript/05 A First App.md>)
6. [Executing Typescript Code](<Section 25 - [Appendix B] - Basics of Typescript/06 Executing Typescript Code.md>)
7. [One Quick Change](<Section 25 - [Appendix B] - Basics of Typescript/07 One Quick Change.md>)
8. [Catching Errors with TypeScript](<Section 25 - [Appendix B] - Basics of Typescript/08 Catching Errors with TypeScript.md>)
9. [Catching More Errors!](<Section 25 - [Appendix B] - Basics of Typescript/09 Catching More Errors!.md>)
10. [Do Not Skip - Course Overview](<Section 25 - [Appendix B] - Basics of Typescript/10 Do Not Skip - Course Overview.md>)
11. [Types](<Section 25 - [Appendix B] - Basics of Typescript/11 Types.md>)
12. [More on Types](<Section 25 - [Appendix B] - Basics of Typescript/12 More on Types.md>)
13. [Examples of Types](<Section 25 - [Appendix B] - Basics of Typescript/13 Examples of Types.md>)
14. [Where Do We Use Types?](<Section 25 - [Appendix B] - Basics of Typescript/14 Where Do We Use Types.md>)
15. [Type Annotations and Inference](<Section 25 - [Appendix B] - Basics of Typescript/15 Type Annotations and Inference.md>)
16. [Annotations With Variables](<Section 25 - [Appendix B] - Basics of Typescript/16 Annotations With Variables.md>)
17. [Object Literal Annotations](<Section 25 - [Appendix B] - Basics of Typescript/17 Object Literal Annotations.md>)
18. [Annotations Around Functions](<Section 25 - [Appendix B] - Basics of Typescript/18 Annotations Around Functions.md>)
19. [Understanding Inference](<Section 25 - [Appendix B] - Basics of Typescript/19 Understanding Inference.md>)
20. [The Any Type](<Section 25 - [Appendix B] - Basics of Typescript/20 The Any Type.md>)
21. [Fixing the "Any" Type](<Section 25 - [Appendix B] - Basics of Typescript/21 Fixing the 'Any' Type.md>)
22. [Delayed Initialization](<Section 25 - [Appendix B] - Basics of Typescript/22 Delayed Initialization.md>)
23. [When Inference Doesn't Work](<Section 25 - [Appendix B] - Basics of Typescript/23 When Inference Doesn't Work.md>)
24. [More on Annotations Around Functions](<Section 25 - [Appendix B] - Basics of Typescript/24 More on Annotations Around Functions.md>)
25. [Inference Around Functions](<Section 25 - [Appendix B] - Basics of Typescript/25 Inference Around Functions.md>)
26. [Annotations for Anonymous Functions](<Section 25 - [Appendix B] - Basics of Typescript/26 Annotations for Anonymous Functions.md>)
27. [Void and Never](<Section 25 - [Appendix B] - Basics of Typescript/27 Void and Never.md>)
28. [Destructuring with Annotations](<Section 25 - [Appendix B] - Basics of Typescript/28 Destructuring with Annotations.md>)
29. [Annotations Around Objects](<Section 25 - [Appendix B] - Basics of Typescript/29 Annotations Around Objects.md>)
30. [Arrays in TypeScript](<Section 25 - [Appendix B] - Basics of Typescript/30 Arrays in TypeScript.md>)
31. [Why Typed Arrays?](<Section 25 - [Appendix B] - Basics of Typescript/31 Why Typed Arrays.md>)
32. [Multiple Typees in Arrays](<Section 25 - [Appendix B] - Basics of Typescript/32 Multiple Typees in Arrays.md>)
33. [When to Use Typed Arrays](<Section 25 - [Appendix B] - Basics of Typescript/33 When to Use Typed Arrays.md>)
34. [Tuples in TypeScript](<Section 25 - [Appendix B] - Basics of Typescript/34 Tuples in TypeScript.md>)
35. [Tuples in Action](<Section 25 - [Appendix B] - Basics of Typescript/35 Tuples in Action.md>)
36. [Why Tuples?](<Section 25 - [Appendix B] - Basics of Typescript/36 Why Tuples.md>)
37. [Interfaces](<Section 25 - [Appendix B] - Basics of Typescript/37 Interfaces.md>)
38. [Long Type Annotations](<Section 25 - [Appendix B] - Basics of Typescript/38 Long Type Annotations.md>)
39. [Fixing Annotations With Interfaces](<Section 25 - [Appendix B] - Basics of Typescript/39 Fixing Annotations With Interfaces.md>)
40. [Syntax Around Interfaces](<Section 25 - [Appendix B] - Basics of Typescript/40 Syntax Around Interfaces.md>)
41. [Functions in Interfaces](<Section 25 - [Appendix B] - Basics of Typescript/41 Functions in Interfaces.md>)
42. [Code Reuse with Interfaces](<Section 25 - [Appendix B] - Basics of Typescript/42 Code Reuse with Interfaces.md>)
43. [General Plan with Interfaces](<Section 25 - [Appendix B] - Basics of Typescript/43 General Plan with Interfaces.md>)
44. [Classes](<Section 25 - [Appendix B] - Basics of Typescript/44 Classes.md>)
45. [Basic Inheritance](<Section 25 - [Appendix B] - Basics of Typescript/45 Basic Inheritance.md>)
46. [Class Method Modifiers](<Section 25 - [Appendix B] - Basics of Typescript/46 Class Method Modifiers.md>)
47. [Fields in Classes](<Section 25 - [Appendix B] - Basics of Typescript/47 Fields in Classes.md>)
48. [Fields with Inheritance](<Section 25 - [Appendix B] - Basics of Typescript/48 Fields with Inheritance.md>)
49. [Where to Use Classes](<Section 25 - [Appendix B] - Basics of Typescript/49 Where to Use Classes.md>)
50. [App Overview](<Section 25 - [Appendix B] - Basics of Typescript/50 App Overview.md>)
51. [Updated Parcel Instructions](<Section 25 - [Appendix B] - Basics of Typescript/51 Updated Parcel Instructions.md>)
52. [Bundling with Parcel](<Section 25 - [Appendix B] - Basics of Typescript/52 Bundling with Parcel.md>)
53. [Project Structure](<Section 25 - [Appendix B] - Basics of Typescript/53 Project Structure.md>)
54. [IMPORTANT Info About Faker Installation](<Section 25 - [Appendix B] - Basics of Typescript/54 IMPORTANT Info About Faker Installation.md>)
55. [Generating Random Data](<Section 25 - [Appendix B] - Basics of Typescript/55 Generating Random Data.md>)
56. [Type Definition Files](<Section 25 - [Appendix B] - Basics of Typescript/56 Type Definition Files.md>)
57. [Using Type Definition Files](<Section 25 - [Appendix B] - Basics of Typescript/57 Using Type Definition Files.md>)
58. [Export Statements in TypeScript](<Section 25 - [Appendix B] - Basics of Typescript/58 Export Statements in TypeScript.md>)
59. [Defining a Company](<Section 25 - [Appendix B] - Basics of Typescript/59 Defining a Company.md>)
60. [Important Note About Google Maps Key](<Section 25 - [Appendix B] - Basics of Typescript/60 Important Note About Google Maps Key.md>)
61. [Adding Google Maps Support](<Section 25 - [Appendix B] - Basics of Typescript/61 Adding Google Maps Support.md>)
62. [Required Update for New @types Library](<Section 25 - [Appendix B] - Basics of Typescript/62 Required Update for New @types Library.md>)
63. [Google Maps Integration with TypeScript](<Section 25 - [Appendix B] - Basics of Typescript/63 Google Maps Integration with TypeScript.md>)
64. [Exploring Type Definition Files](<Section 25 - [Appendix B] - Basics of Typescript/64 Exploring Type Definition Files.md>)
65. [Hiding Functionality](<Section 25 - [Appendix B] - Basics of Typescript/65 Hiding Functionality.md>)
66. [Why Use Private Modifiers? Here's Why](<Section 25 - [Appendix B] - Basics of Typescript/66 Why Use Private Modifiers Here's Why.md>)
67. [Adding Markers](<Section 25 - [Appendix B] - Basics of Typescript/67 Adding Markers.md>)
68. [Duplicate Code](<Section 25 - [Appendix B] - Basics of Typescript/68 Duplicate Code.md>)
69. [One Possible Solution](<Section 25 - [Appendix B] - Basics of Typescript/69 One Possible Solution.md>)
70. [Restricting Access with Interfaces](<Section 25 - [Appendix B] - Basics of Typescript/70 Restricting Access with Interfaces.md>)
71. [Implicit Type Checks](<Section 25 - [Appendix B] - Basics of Typescript/71 Implicit Type Checks.md>)
72. [Showing Popup Windows](<Section 25 - [Appendix B] - Basics of Typescript/72 Showing Popup Windows.md>)
73. [Updating Interface Definitions](<Section 25 - [Appendix B] - Basics of Typescript/73 Updating Interface Definitions.md>)
74. [Optional Implements Clauses](<Section 25 - [Appendix B] - Basics of Typescript/74 Optional Implements Clauses.md>)
75. [App Wrapup](<Section 25 - [Appendix B] - Basics of Typescript/75 App Wrapup.md>)

### Section 26 - Bonus!

- 구성: 강의 1개 · 1분
- 과정과 관련된 추가 자료 및 보너스 안내를 확인한다.

1. [Bonus!](<Section 26 - Bonus!/01 Bonus!.md>)
