# [Optional] Hands-on Lab: Agile Planning using Zenhub

> MOOC 실습 자료(Ungraded Plugin, 선택) · [원본 강의](https://www.mooc.org/learn/devops-capstone-project/ungradedWidget/d4fh2/optional-hands-on-lab-agile-planning-using-zenhub)

## 개요
- [[05 Hands-on Lab - Agile Planning using Github]]와 동일한 목표(Customer Accounts 마이크로서비스의 Sprint 0 계획 수립)를 GitHub 네이티브 칸반 대신 **Zenhub** 칸반 보드로 진행하는 선택 실습.

## 내용
### 목표
- GitHub 저장소 생성, GitHub 저장소를 Zenhub 칸반 보드에 추가, 사용자 스토리 템플릿 개발, 칸반 보드에 사용자 스토리 추가, 백로그 정제를 위한 스토리 정렬, 스프린트 준비를 위한 제품 백로그 정제, 스프린트 계획 구축.

### GitHub 랩과의 주요 차이점
- **Exercise 1 (저장소 생성)** — 동일하게 `https://github.com/ibm-developer-skills-network/aolwx-devops-capstone-template`를 `[Use this template]`로 복제해 `devops-capstone-project`라는 이름의 Public 저장소를 만듦. 이후 **Zenhub 계정을 GitHub 계정과 연결**하고, Zenhub에서 `capstone-project`라는 이름의 칸반 보드 워크스페이스를 만들어 저장소를 워크스페이스에 추가. (선택) Chrome/Firefox용 Zenhub 브라우저 확장 프로그램을 설치하면 GitHub 화면에서 바로 Zenhub 탭으로 칸반 보드를 볼 수 있음.
- **Exercise 2 (사용자 스토리 템플릿)** — GitHub 저장소에 `.github/ISSUE_TEMPLATES` 폴더를 만들고 동일한 형식(`As a / I need / So that` + Details and Assumptions + Gherkin 형식의 Acceptance Criteria)의 이슈 템플릿을 작성. GitHub 랩과 폴더명이 `ISSUE_TEMPLATE`(단수)가 아닌 `ISSUE_TEMPLATES`(복수)로 약간 다름.
- **Exercise 3 (제품 백로그 구성)** — GitHub 랩과 동일한 7개 사용자 스토리(개발 환경 설정, read/update/delete/list 계정, Docker 컨테이너화, Kubernetes 배포)를 Zenhub 칸반 보드에 만들어 `New Issues` 파이프라인에 배치.
- **Exercise 4 (신규 이슈 분류)** — GitHub 랩과 동일하게 즉시 작업할 스토리는 `Product Backlog`로, 나중에 할 스토리(Docker 컨테이너화, Kubernetes 배포)는 `Icebox`로 이동. 힌트: 5개 스토리는 지금 구현하고, 2개는 나중에 구현.
- **Exercise 5 (제품 백로그 정제)** — GitHub에 `technical debt` 라벨(노란색)을 만들어 저장소에 추가하고, 고객 가치를 주는 스토리는 `enhancement`, 개발자에게만 필요한 스토리는 `technical debt`로 라벨링. 최소 하나의 스토리는 `technical debt`로 라벨링되어야 함. 이후 `Product Backlog` 안에서 스토리를 우선순위 순으로 정렬.
- **Exercise 6 (첫 스프린트 구성)** — Zenhub에서 스프린트를 설정하고 1주일 기간으로 지정 — Zenhub가 자동으로 만드는 세 스프린트의 이름을 **Sprint 1, Sprint 2, Sprint 3**으로 각각 변경(추적과 채점 편의를 위함). 이후 GitHub 랩과 동일하게 `Product Backlog` 맨 위 스토리부터 스토리 포인트(`3, 5, 8, 13 = S, M, L, XL`)를 배정하고 `Sprint 1`에 할당한 뒤 `Sprint Backlog`로 옮기는 과정을 순위를 보존하며 5개 스토리에 대해 반복.
  - 체크리스트: 각 스토리가 "스프린트 준비 완료" 상태인지 확인 — 라벨이 있는지, 추정치(estimate)가 있는지, Sprint 1에 배정되었는지.

## 요약
- Zenhub 버전 실습은 GitHub 버전과 동일한 7개 사용자 스토리·백로그 정제·스프린트 계획 흐름을 따르되, 칸반 보드 관리 도구로 GitHub 네이티브 Projects 대신 Zenhub를 사용하며 계정 연동, 워크스페이스 생성, 스프린트 이름 변경 같은 Zenhub 특유의 설정 단계가 추가된 선택(optional) 실습이다.
