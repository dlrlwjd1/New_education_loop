# Introduction to DevOps Capstone Project

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/lecture/7QRd4/introduction-to-devops-capstone-project)

## 개요
- 지난 12개 강좌에서 배운 DevOps 문화, Agile·Scrum, 클라우드 컴퓨팅, Python, GitHub, TDD, CI/CD, 컨테이너(Docker·Kubernetes), 마이크로서비스, 애플리케이션 보안·모니터링을 하나로 통합해 실제로 적용해보는 캡스톤 프로젝트를 소개.

## 내용
### 캡스톤 프로젝트의 목표
- 지금까지 배운 소프트웨어 엔지니어링 역량을 스스로 증명하는 것 — Agile 계획을 세우고 앞으로 진행할 3개 스프린트의 스토리를 담은 칸반(kanban) 보드를 구성하는 것으로 시작.

### Sprint 1 (Module 2에 해당)
- 좋은 테스트 주도 개발(TDD) 기법을 사용해 RESTful 마이크로서비스를 개발.
- 모델, 일부 테스트 케이스, REST API의 Create 메서드가 이미 작성된 프로젝트가 미리 제공됨 — 이를 바탕으로 List, Read, Update, Delete 엔드포인트를 구현.

### Sprint 2 (Module 3에 해당)
- 저장소에 GitHub Actions 형태의 지속적 통합(CI)을 추가 — 모든 pull request가 완전히 테스트되고 코드 커버리지가 측정되어 코드가 높은 품질을 유지하도록 보장.
- 코드에 좋은 보안 관행을 추가해 취약점 위험을 최소화하고, 새로 만든 GitHub Actions가 제대로 작동하는지 확인.

### Sprint 3 (Module 4~5에 해당)
- Docker 이미지를 빌드하고 마이크로서비스를 Kubernetes에 수동으로 배포 — YAML 매니페스트를 직접 작성.
- 스프린트 후반부에는 Tekton을 사용해 지속적 전달(CD) 파이프라인을 개발 — 컨테이너 이미지를 빌드하고 앞서 작성한 YAML 매니페스트를 사용해 OpenShift에 배포.

## 요약
- 이 캡스톤 프로젝트는 코딩·테스트부터 이미지 빌드, OpenShift 배포까지 모든 과정을 하나로 묶어 "You build it, you run it"이라는 DevOps 신조를 완전히 체화했음을 스스로와 다른 사람들에게 증명하는 것을 목표로 한다.
