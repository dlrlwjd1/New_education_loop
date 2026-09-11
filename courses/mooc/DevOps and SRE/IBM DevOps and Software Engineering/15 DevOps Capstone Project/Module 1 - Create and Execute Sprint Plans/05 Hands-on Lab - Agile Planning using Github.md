# Hands-on Lab: Agile Planning using Github

> MOOC 실습 자료(Ungraded Plugin) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedWidget/s3zSu/hands-on-lab-agile-planning-using-github)

## 개요
- Customer Accounts 마이크로서비스 개발 프로젝트의 첫 스프린트를 준비하는 스프린트 계획("Sprint 0")을 GitHub에서 직접 수립하는 60분짜리 실습. 이 실습은 랩 환경이 아니라 실제 GitHub에서 진행.

## 내용
### 프로젝트 개요
- 전자상거래 웹사이트의 고객 계정 관리자로부터 고객을 추적하는 계정 마이크로서비스 개발을 요청받은 상황을 가정 — 마이크로서비스이므로 다른 마이크로서비스가 호출할 수 있는 잘 구성된 REST API를 갖춰야 함. 초기에는 고객을 create, read, update, delete, list할 수 있어야 함.
- 이미 다른 사람이 이 작업을 시작해 데이터베이스 모델과 계정 생성 엔드포인트가 있는 Python Flask 기반 REST API를 개발해 둔 상태 — 나머지 read, update, delete, list REST API를 추가하는 계획을 세워야 함. 온라인 랩 환경에서 작업하게 되므로, 개발을 위해 그 환경을 준비하는 계획도 세워야 함.

### Exercise 1 — GitHub 저장소 생성
- 제공되는 스타터 템플릿(`https://github.com/ibm-developer-skills-network/aolwx-devops-capstone-template`)을 열고, 초록색 **[Use this template]** 버튼(Fork가 아님)으로 자신의 개인 GitHub 계정에 복제.
- 저장소 이름은 `devops-capstone-project`로 지정(채점자가 찾는 이름)하고, **Public**으로 생성.
- 새 저장소의 `README.md`를 열어 프로젝트 이름과 캡스톤 프로젝트에 대한 간단한 설명을 추가한 뒤 저장·커밋.
- 랩 환경은 일시적(ephemeral)이며 언제든 삭제될 수 있으므로, 모든 작업은 GitHub에 저장해 쉽게 복원할 수 있도록 해야 함.

### Exercise 2 — GitHub 칸반 보드 생성
- GitHub Projects를 사용해 저장소에 칸반 보드를 설정하고, 다음 7개 컬럼을 구성: **New issues → Icebox → Product backlog → Sprint backlog → In progress → Review/QA → Done**.
- 설정에 어려움이 있으면 *Introduction to Agile Development and Scrum* 강좌의 "Get Set Up In GitHub" 랩을 참고 가능.

### Exercise 3 — 사용자 스토리 템플릿 생성
- 저장소에 `.github/ISSUE_TEMPLATE` 폴더를 만들고, 그 안에 `user-story.md`라는 이름의 사용자 스토리 템플릿을 작성.
- 템플릿 구조:
  ```markdown
  **As a** [role]
  **I need** [function]
  **So that** [benefit]

  ### Details and Assumptions
  * [document what you know]

  ### Acceptance Criteria
  ```gherkin
  Given [some context]
  When [certain action is taken]
  Then [the outcome of action is observed]
  ```
  ```

### Exercise 4 — 제품 백로그 구성
- Customer Accounts 마이크로서비스 개발에 필요한 다음 7개 사용자 스토리를 칸반 보드에 만들어 모두 `New Issues` 파이프라인에 배치:
  1. 개발 환경 설정
  2. 서비스에서 계정 읽기(read)
  3. 서비스의 계정 업데이트(update)
  4. 서비스에서 계정 삭제(delete)
  5. 서비스의 모든 계정 목록 조회(list)
  6. Docker로 마이크로서비스 컨테이너화
  7. Docker 이미지를 Kubernetes에 배포

### Exercise 5 — 신규 이슈 분류(Triage)
- 백로그 정제(Backlog Refinement)의 시작으로, `New Issues`의 이슈들을 점검해 언제 작업할지에 따라 `Product Backlog` 또는 `Icebox`로 옮김.
- Docker 컨테이너화와 Kubernetes 배포는 몇 스프린트 뒤에 할 일이므로 당장 급하지 않음 — 즉시 작업할 스토리는 `Product Backlog`로, 나머지는 `Icebox`로 이동.

### Exercise 6 — 제품 백로그 정제
- 제품 소유자(product owner) 입장에서 백로그 정제 회의를 진행해 모든 스토리를 "스프린트 준비 완료" 상태로 만듦 — 특히 Acceptance Criteria에 "완료(done)"의 정의가 명확히 담겨 있는지 확인.
- `technical debt`라는 이름의 라벨을 노란색으로 만들어 저장소에 추가 — 고객에게 가치를 주는 것은 `enhancement`, 개발자에게 필요하지만 고객에게 보이는 가치는 없는 것은 `technical debt`로 라벨링.
- `Product Backlog`의 스토리들을 우선순위가 높은 순서에서 낮은 순서로 파이프라인 컬럼 안에서 드래그해 순위를 매김 — 구현할 순서를 고려.

### Exercise 7 — 제품 백로그로부터 첫 스프린트 구성
- GitHub에 **Sprint 1, Sprint 2, Sprint 3** 세 개의 스프린트를 만들고 각각 1주일 기간으로 설정.
- `Product Backlog` 맨 위 스토리부터 열어 예상 스토리 포인트를 배정 — 척도는 `3, 5, 8, 13 = S, M, L, XL`.
- 해당 스토리를 `Sprint 1`에 배정하고, `Product Backlog`에서 `Sprint Backlog`로 옮기되 순위 순서를 그대로 보존.
- 나머지 4개 스토리에 대해서도 같은 과정(스토리 포인트 배정 → Sprint 1 배정 → Sprint Backlog로 이동, 순위 보존)을 반복.
- 실제 팀이라면 스프린트 계획 회의에서 팀 전체와 함께 스프린트 계획을 세우지만, 이 프로젝트는 혼자 진행하므로 그 회의 과정을 스스로 시뮬레이션.

## 요약
- 이 실습은 GitHub에 `devops-capstone-project` 저장소와 7단 칸반 보드를 만들고, 사용자 스토리 템플릿을 작성해 계정 서비스의 read·update·delete·list·컨테이너화·배포를 아우르는 7개 스토리로 제품 백로그를 구성한 뒤, 이를 분류·정제·라벨링하고 3개의 1주일짜리 스프린트로 나눠 첫 스프린트 백로그를 완성하는 전체 Agile 계획 수립 과정을 다룬다.
