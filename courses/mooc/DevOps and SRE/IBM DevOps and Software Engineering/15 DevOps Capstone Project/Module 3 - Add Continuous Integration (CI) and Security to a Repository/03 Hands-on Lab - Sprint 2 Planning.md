# Hands-on Lab: Sprint 2 Planning

> MOOC 실습 자료(Ungraded Plugin) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedWidget/AdbsB/hands-on-lab-sprint-2-planning)

## 개요
- Sprint 1 완료 후 Sprint 2를 계획하는 30분짜리 실습 — CI 자동화와 보안 기능 추가를 위한 2개의 새 사용자 스토리를 만들어 스프린트 백로그를 구성.

## 내용
### 새로운 요구 사항
- 경영진이 개발자 생산성을 높일 방법을 찾다가, 개발자들이 각 pull request를 승인하기 전 모든 테스트가 통과하는지 확인하는 데 많은 시간을 쓰고 있음을 발견 — GitHub Actions를 사용한 **지속적 통합(CI)**으로 이 작업을 자동화하기로 결정.
- 보안 침해와 익스플로잇에 대한 뉴스가 많아지면서 경영진이 마이크로서비스의 보안을 우려 — 선제적으로 보안 헤더와 CORS(Cross-Origin Resource Sharing) 정책 형태의 방어적 보안 조치를 추가하기로 결정.
- 이 두 요구 사항을 충족하기 위해 Sprint Backlog에 2개의 새 스토리를 추가.

### Story 1 — CI 검사 자동화 능력 필요
```markdown
Title: Need the ability to automate continuous integration checks
**As a** Developer
**I need** automation to build and test every pull request
**So that** I do not have to rely on manual testing of each request, which is time-consuming

#### Assumptions
* GitHub Actions will be used for the automation workflow
* The workflow must include code linting and testing
* The Docker image should be postgres:alpine for the database
* A GitHub Actions badge should be added to the README.md to reflect the build status

#### Acceptance Criteria
Given code is ready to be merged
When a pull request is created
Then GitHub Actions should run linting and unit tests
And the badge should show that the build is passing
```
- 이 스토리는 이해관계자에게 눈에 보이는 가치를 주지 않고 주로 개발 효율성을 위한 것이므로 `technical debt` 라벨을 배정.
- 스토리 포인트 추정치를 부여(Small=3, Medium=5, Large=8, Extra Large=13), Sprint 2에 배정한 뒤 Sprint Backlog 맨 위로 이동.

### Story 2 — 보안 헤더와 CORS 정책 추가 필요
```markdown
Title: Need to add security headers and CORS policies
**As a** service provider
**I need** my service to use security headers and CORS policies
**So that** my web site is not vulnerable to CORS attacks

#### Assumptions
* Flask-Talisman will be used for security headers
* Flask-Cors will be used to establish cross-origin resource sharing (CORS) policies

#### Acceptance Criteria
Given the site is secured
When a REST API request is made
Then secure headers and a CORS policy should be returned
```
- 이 스토리는 마이크로서비스를 더 안전하게 만들며, 더 나은 보안은 이해관계자 가치를 더하므로 적절한 라벨(`enhancement`)을 배정.
- 마찬가지로 스토리 포인트를 추정하고 Sprint 2에 배정한 뒤, Sprint Backlog에서 두 번째 순위로 이동.

## 요약
- 이 실습은 CI 자동화를 위한 `technical debt` 라벨의 스토리(GitHub Actions로 린팅·테스트 자동화, README 배지 추가)와 보안 강화를 위한 `enhancement` 라벨의 스토리(Flask-Talisman·Flask-CORS로 보안 헤더·CORS 정책 추가)를 만들어 Sprint 2 백로그를 구성하며, 이 두 스토리는 이후 두 개의 핸즈온 랩([[04 Hands-On Lab - Add Continuous Integration]], [[05 Hands-On Lab - Add Security to Your RESTful Service]])에서 실제로 구현된다.
