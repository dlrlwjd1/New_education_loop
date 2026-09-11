# Overview: Develop a RESTful Service Using Test Driven Development (TDD)

> MOOC 읽기 자료 · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/supplement/X0myW/overview-develop-a-restful-service-using-test-driven-development-tdd)

## 개요
- Sprint 0(계획 단계)에 이어 Sprint 1을 진행하며, TDD로 Customer Account 마이크로서비스를 개발하는 Module 2의 흐름을 안내.

## 내용
### 이전 모듈과의 연결
- 이전 모듈에서 캡스톤 프로젝트의 계획 단계인 Sprint 0을 완료 — 사용자 스토리를 만들고 정리해 Sprint 1을 위한 계획을 구성.
- 이번 모듈에서는 캡스톤 프로젝트 환경을 설정하고 테스트 주도 개발(TDD)로 Customer Account 마이크로서비스를 개발함으로써 Sprint 1을 완료.

### 진행 흐름
1. **환경 설정** — 제공된 스타터 템플릿으로 GitHub 저장소를 클론하고, 환경을 준비하기 위한 모든 사전 요구 소프트웨어를 설치.
2. **스토리 착수** — Customer Account 마이크로서비스 개발을 시작하기 전에, 칸반 보드에서 자신의 사용자 스토리를 찾아 "In progress"로 옮기고 스스로를 담당자로 배정.
3. **브랜치 작업** — GitHub 저장소의 새 브랜치에서 개발을 시작하고, 각 지점마다 pull request를 제출해 main 브랜치로 푸시.
4. **TDD로 테스트 작성** — RESTful Flask 서비스에 대한 테스트를 만들고, 테스트를 통과시키기에 충분한 코드를 작성. read, update, delete, list 함수에 대한 테스트 케이스를 작성.
5. **테스트 실행과 커버리지 확인** — 개발하면서 `nosetests`를 실행해 모든 단위 테스트가 통과하는지 확인하고, coverage 도구를 사용해 최소 95% 커버리지를 확보.
6. **진행 상황 반영** — 작업이 진행됨에 따라 칸반 보드에서 사용자 스토리를 이동 — 스토리를 완료하면 "Done"으로, 이후 "Closed"로 옮김.

## 요약
- Module 2는 Sprint 0에서 만든 계획을 바탕으로 캡스톤 환경을 설정하고, 칸반 보드에서 스토리를 진행 상태로 옮긴 뒤 새 브랜치에서 TDD로 read·update·delete·list 기능에 대한 테스트를 작성·통과시키며 `nosetests`와 coverage 도구로 95% 이상의 테스트 커버리지를 확보하고, 완료된 스토리를 칸반 보드에서 Done·Closed로 옮기는 Sprint 1의 전체 흐름을 안내한다.
