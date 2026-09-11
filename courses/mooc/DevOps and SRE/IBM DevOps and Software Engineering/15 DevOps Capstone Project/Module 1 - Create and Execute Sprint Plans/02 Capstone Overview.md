# Capstone Overview

> MOOC 실습 자료(Ungraded Plugin) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedWidget/2ETcA/capstone-overview)

## 개요
- 이 캡스톤 프로젝트 전체(7개 모듈)에서 완성하게 될 **Customer Accounts 마이크로서비스**의 개발 여정을 모듈별로 미리 조망.

## 내용
### 이 캡스톤에서 만드는 것
- 앞선 강좌들에서 배운 여러 기술과 개념을 적용해 완전하게 작동하는 **Customer Accounts 마이크로서비스**를 빌드하고 전달.

### Module 1 — Agile 계획 수립
- RESTful 마이크로서비스를 빌드하기 위한 Agile 계획을 세우는 것으로 캡스톤 여정을 시작.
- GitHub 저장소와 칸반(Kanban) 보드를 만들어 프로젝트를 관리하고, 잘 구조화된 사용자 스토리를 작성하기 위한 user story 템플릿을 만들며, Customer Accounts 마이크로서비스 구현에 필요한 모든 스토리로 **Product Backlog**를 채움.
- 백로그 작성 후 스프린트를 설정하고, 스토리 포인트를 추정하고, 스토리를 적절한 스프린트에 배정해 **Sprint Backlog**를 구성하는 스프린트 계획을 준비.
- 캡스톤 전 과정에서 최종 제출을 위한 증거로 스크린샷을 찍고 GitHub URL을 기록.

### Module 2 — Sprint 1: TDD로 RESTful 서비스 개발
- 프로젝트 환경을 설정하고, **테스트 주도 개발(TDD)**을 사용해 Customer Accounts 마이크로서비스를 개발.
- 각 스토리를 작업하면서 칸반 보드에서 "Backlog" → "In Progress" → "Done" → "Closed"로 옮겨감.
- 스프린트 작업을 위한 개발 브랜치를 만들고 pull request를 제출해 GitHub에 변경 사항을 푸시.
- RESTful Flask 서비스의 read, update, delete, list 함수에 대한 테스트 케이스를 작성하고, 각 테스트를 통과시키기에 딱 필요한 만큼의 코드만 작성.
- `nosetests`를 실행해 모든 테스트가 통과하는지 확인하고, coverage 도구를 사용해 최소 **95% 테스트 커버리지**를 유지.

### Module 3 — Sprint 2: CI와 보안 강화
- **GitHub Actions 지속적 통합(CI) 워크플로우**를 구성해, main 브랜치에 pull request나 push가 있을 때마다 자동으로 실행되도록 함.
- Sprint 2의 일부로 **Flake8**로 린팅을 수행하고, 테스트를 실행하고, 코드 커버리지를 확인하고, 코드 품질을 검증하는 워크플로우를 빌드.
- 보안 헤더를 위한 **Flask-Talisman**과 CORS(Cross-Origin Resource Sharing) 정책을 수립하기 위한 **Flask-CORS**를 추가해 안전한 코딩 관행으로 마이크로서비스를 강화.
- TDD를 따라 실패하는 테스트를 작성하고, 필요한 보안 기능을 구현하고, 테스트를 통과시킨 뒤 작업을 main 브랜치에 병합.

### Module 4 — Sprint 3: Kubernetes 배포
- 배포 관련 사용자 스토리를 작업하는 Sprint 3을 시작.
- **Dockerfile**을 만들고 Customer Accounts 서비스의 Docker 이미지를 빌드해 IBM Cloud Container Registry에 푸시.
- OpenShift/Kubernetes 클러스터에 애플리케이션을 수동으로 배포.
- OpenShift에 **PostgreSQL 서비스**를 만들고, 마이크로서비스 배포에 필요한 Kubernetes deployment와 service YAML 매니페스트를 작성.
- 이전 스프린트와 마찬가지로 각 스토리를 진행하며 변경 사항을 커밋·푸시·병합.

### Module 5 — 자동화된 CD 파이프라인 구축
- **Tekton 지속적 전달(CD) 파이프라인**을 만들어 마이크로서비스의 Kubernetes 배포를 자동화함으로써 배포 작업을 확장.
- 트리거되면 이 파이프라인은 저장소를 클론하고, 코드를 린팅·테스트하고, Docker 이미지를 빌드하고, 수동 개입 없이 업데이트된 서비스를 클러스터에 배포.

### Module 6 — 최종 제출과 평가
- 실습에서 나온 모든 필수 증거(스크린샷, URL, 산출물)를 수집·정리해 제출.
- 작업물은 **Option 1: AI 채점 제출 및 평가** 또는 **Option 2: 동료 채점 제출 및 평가** 중 하나로 평가됨.

### Module 7 — 기말고사
- 캡스톤 프로젝트 전반에 걸쳐 적용한 DevOps 개념과 실천법에 대한 이해를 검증하는 **기말고사(Final Exam)**를 완료.

## 요약
- 이 캡스톤은 Module 1의 Agile 계획 수립부터 Module 2~3의 TDD 기반 RESTful 서비스 개발과 CI/보안 강화(Sprint 1~2), Module 4~5의 Kubernetes 수동 배포와 Tekton CD 파이프라인 자동화(Sprint 3), Module 6의 최종 제출·평가, Module 7의 기말고사까지 이어지는 하나의 통합된 Customer Accounts 마이크로서비스 개발 여정이다.
