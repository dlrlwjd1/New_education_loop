# Overview: Add Continuous Integration

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/supplement/vhNVs/overview-add-continuous-integration)

## 개요
- Sprint 1(TDD로 RESTful 서비스 개발)에 이어, GitHub Actions로 지속적 통합(CI) 워크플로우를 추가하는 Sprint 2 전반부의 흐름을 안내.

## 내용
### 이전 모듈과의 연결
- 이전 모듈에서 캡스톤 프로젝트의 RESTful 서비스를 개발하고, TDD로 마이크로서비스의 구성 요소를 빌드해 Sprint 1을 완료.
- 이번 모듈에서는 GitHub Actions를 사용한 지속적 통합 워크플로우를 추가해 코드의 빌드와 테스트를 자동화.

### 진행 흐름
1. **Sprint 2 계획** — 가이드가 있는 실습 랩(Sprint 2 Planning)을 따라 Sprint 2의 계획을 세움 — 다음 스프린트를 위한 스토리를 만들어 추가하고, 라벨과 추정치를 붙인 뒤 스프린트 백로그를 구성. 이 계획은 이번 모듈의 다음 랩으로 이어질 때 사용됨.
2. **CI 추가 실습(Add Continuous Integration)** — 저장소에서 이벤트가 발생할 때(예: main 브랜치로의 pull request 생성, main 브랜치로의 push) 트리거되는 GitHub Actions 워크플로우를 구성. 워크플로우는 순차적으로 또는 병렬로 실행될 수 있는 하나 이상의 job을 포함할 수 있음.
3. **Sprint 2 작업** — 저장소에 대한 모든 push/pull request를 빌드하고 테스트하는 워크플로우를 만들고, Flake8로 코드를 린팅해 CI 파이프라인에 품질 검사를 추가하며, `nosetests`로 코드 커버리지를 테스트하도록 구성.
4. **진행 상황 반영** — 작업이 진행됨에 따라 해당 사용자 스토리를 칸반 보드에서 이동 — 스토리를 완료하면 "Done"으로, 이후 "Closed"로 옮김.

## 요약
- Module 3 전반부는 Sprint 2 계획 수립 실습으로 시작해, GitHub Actions로 push/pull request마다 자동으로 빌드·테스트를 수행하고 Flake8 린팅과 nosetests 커버리지 검사를 포함하는 CI 워크플로우를 구성하는 것을 목표로 한다.
