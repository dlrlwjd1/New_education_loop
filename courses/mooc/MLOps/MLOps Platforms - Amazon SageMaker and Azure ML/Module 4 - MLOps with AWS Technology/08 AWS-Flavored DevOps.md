# AWS-Flavored DevOps

## 개요
- 소스 코드부터 컨테이너 배포까지 이어지는 "AWS 스타일 컨테이너화 DevOps" 파이프라인 전체 구조를 설명하는 1분 영상.

## 내용

### 파이프라인 구성 요소
1. **소스 컨트롤 저장소**(예: GitHub)에 코드 배치.
2. **멱등성(idempotent)** 있고 재현 가능한 배포 — 빌드 시스템 설정 파일도 배포의 일부, 인프라 자체도 배포의 일부(예: Amazon CDK 코드).
3. 소스 코드 자체와, 컨테이너에 무엇이 들어갈지 정의하는 **Dockerfile**.
- 빌드 시스템 설정, 인프라 설정, 컨테이너 설정까지 **모든 구성 요소가 한 곳**에 있음.

### 빌드와 배포 흐름
- 빌드를 트리거(예: **AWS CodeBuild**) → 빌드가 컨테이너를 **Amazon ECR(Container Registry)**에 푸시.
- Infrastructure as Code(CDK 등)가 이 컨테이너를 **AWS ECS**, **AWS Batch**, **AWS Lambda**, **AWS App Runner** 중 하나의 서비스에 배치 → 컨테이너로 실행되는 마이크로서비스를 제공.

### 핵심 통찰
- 이 방식의 핵심은 완전한 가시성(visibility)과 **선언적(noble/declarative) 인프라**를 얻는 것 — 모든 구성 요소가 특정 AWS 서비스와 직접적으로 대응됨. 이것이 "AWS 스타일 컨테이너화 DevOps"의 본질.

## 요약
- AWS 스타일 DevOps는 GitHub(소스) → CDK(인프라)+Dockerfile(컨테이너) → CodeBuild(빌드) → ECR(레지스트리) → ECS/Batch/Lambda/App Runner(서비스 실행)로 이어지는 파이프라인이며, 모든 구성 요소가 명시적인 AWS 서비스로 매핑되어 완전한 가시성을 제공한다.
