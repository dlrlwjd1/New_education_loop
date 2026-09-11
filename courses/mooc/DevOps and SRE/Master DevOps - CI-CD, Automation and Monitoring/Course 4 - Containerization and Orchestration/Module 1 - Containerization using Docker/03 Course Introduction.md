# Course Introduction

## 개요
- 강사가 직접 소개하는 Course 4 강의 목표와 5개 모듈 구조, 대상 수강생 안내.

## 내용
### 코스 목표
- Docker로 애플리케이션을 컨테이너화하고, Kubernetes(컨테이너 오케스트레이터)로 이를 오케스트레이션하며, Prometheus·Grafana로 컨테이너·Pod로 실행되는 애플리케이션의 성능을 모니터링하는 확장 가능하고 효율적인 인프라를 만드는 것이 목표.
- 핵심 학습 내용: 컨테이너화의 핵심 개념, 전통적인 물리 서버·가상 서버 대비 컨테이너의 장점, Docker·Docker Compose·Docker Swarm으로 애플리케이션을 빌드·오케스트레이션하는 방법, Pod·Deployment·Service를 이용한 Kubernetes 배포·확장, Prometheus·Grafana를 이용한 Observability와 CI/CD 통합 알림.

### 모듈별 구조
1. **Module 1: Containerization using Docker** — Docker 기초, Docker 아키텍처, Docker CLI, Docker 이미지, 포트 바인딩.
2. **Module 2: Advanced Docker Management** — Docker Compose·Swarm을 이용한 멀티 컨테이너 애플리케이션·마이크로서비스 아키텍처 관리, Prometheus·Grafana를 이용한 Docker 컨테이너 모니터링.
3. **Module 3: Getting Started with Kubernetes** — Kubernetes란 무엇인지, 아키텍처, 필요성, `kubectl` 기본 명령어로 Pod 실행.
4. **Module 4: Kubernetes Services, Persistent Storage, and Monitoring** — Service, Controller, Deployment, StatefulSet, Helm Chart 설정과 Helm Chart를 이용해 Kubernetes 플랫폼에 Prometheus·Grafana 모니터링 애플리케이션 배포.
5. **Module 5: Course Wrap-Up and Assessment** — 전체 내용을 복습하고 학습을 통합하며, 최종 프로젝트와 최종 평가로 역량을 검증.

### 대상 수강생
- 신입, 컨테이너·오케스트레이터·Kubernetes를 탐구하려는 소프트웨어 개발자, CI/CD 파이프라인을 다루다가 컨테이너화에 집중하고 싶은 DevOps 엔지니어, 프로덕션 애플리케이션을 컨테이너화하려는 시스템 관리자·SRE 엔지니어 등 어떤 수준이든 수강 가능.

## 요약
- Course 4는 Docker(컨테이너화) → Docker 모니터링 → Kubernetes(오케스트레이션) → Kubernetes 모니터링 순서로 진행되며, Docker·Kubernetes·Prometheus·Grafana라는 실무 도구로 컨테이너 기반 애플리케이션을 빌드·배포·확장·모니터링하는 실전 역량을 목표로 한다.
