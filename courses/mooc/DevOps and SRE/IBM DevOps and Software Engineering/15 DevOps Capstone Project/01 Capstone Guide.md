# DevOps Capstone Project

## 개요
- Agile sprint에서 REST 서비스 개발, TDD, CI·보안, Kubernetes와 자동 CD까지 전 과정을 수행한다.

## 내용
- backlog를 user story와 acceptance criteria로 만들고 sprint plan, kanban, daily execution으로 진행을 추적한다.
- Flask RESTful service를 red–green–refactor로 개발하고 DB persistence와 오류 계약을 검증한다.
- repository에 CI test·lint와 security scan을 추가하고 실패한 품질 gate는 배포를 막게 한다.
- image를 만들어 Kubernetes에 배포하고 health probe, resource, service를 구성한다.
- Tekton 등의 pipeline으로 build–test–deploy를 자동화하고 배포 결과와 rollback 경로를 확인한다.

## 예시
```text
Story -> TDD REST service -> CI/security -> container -> Kubernetes -> automated CD
```

## 요약
- 7개 모듈은 sprint, TDD 서비스, CI·보안, Kubernetes, CD 파이프라인, 제출, 최종 평가다.
