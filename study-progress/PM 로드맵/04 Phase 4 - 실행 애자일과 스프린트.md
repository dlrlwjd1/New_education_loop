# Phase 4 — 실행: 애자일과 스프린트

- 목표: 검증된 것을 팀이 실제로 만들 수 있는 단위(사용자 스토리·백로그·스프린트)로 쪼개고 굴린다.
- 분량: 약 4~5시간
- 마지막 학습일: (미학습)

> **엔지니어 배경이라면 이 Phase가 가장 빨리 흡수된다.** 그리고 팀에서 당장 요구받을 가능성이 가장 높은 산출물(백로그, 스토리, 스프린트 계획)이 여기서 나온다. 시간이 없다면 Phase 1 다음에 바로 이 Phase를 해도 된다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- INVEST 기준에 맞는 사용자 스토리와 수락 기준(acceptance criteria)을 쓸 수 있다.
- 에픽을 스프린트에 들어갈 크기로 쪼갤 수 있다.
- 제품 백로그를 만들고 리파인먼트를 진행할 수 있다.
- 스프린트 플래닝·리뷰·회고를 운영할 수 있다.

## ⚠️ 자료 품질 주의

이 Phase의 주 교재인 `Introduction to Agile Development and Scrum` 노트는 **자동 번역 품질이 낮은 파일이 섞여 있다** (문장 사이 띄어쓰기가 깨져 있고, 요약이 원문 문단을 그대로 반복하는 경우가 있음). 개념 파악에는 쓸 수 있지만, 특히 Module 2의 사용자 스토리·스토리 포인트 강의는 원본 MOOC 강의를 함께 보는 편이 낫다. 대안으로 아래 3개 자료가 같은 내용을 더 깨끗하게 다룬다.

- Digital Product Management Module 2 / 08 (HDD & User Stories) — 한국어 정리본, 품질 양호
- [`courses/mooc/DevOps and SRE/IBM DevOps and Software Engineering/03 Introduction to Agile Development and Scrum/01 Integrated Course Notes.md`](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/01%20Integrated%20Course%20Notes.md) — 코스 통합 노트
- `pm-execution:user-stories`, `pm-execution:job-stories`, `pm-execution:wwas` 스킬

## 4-A. 애자일·스크럼 개요

메인: Introduction to Agile Development and Scrum, Module 1 — [`courses/mooc/DevOps and SRE/IBM DevOps and Software Engineering/03 Introduction to Agile Development and Scrum/Module 1 - Introduction to Agile and Scrum/`](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/)

- [ ] [01 Introduction to Agile Development and Scrum.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/01%20Introduction%20to%20Agile%20Development%20and%20Scrum.md)
- [ ] [02 Agile Principles.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/02%20Agile%20Principles.md)
- [ ] [03 Methodologies Overview.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/03%20Methodologies%20Overview.md)
- [ ] [04 Working Agile.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/04%20Working%20Agile.md)
- [ ] [05 Scrum Overview.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/05%20Scrum%20Overview.md)
- [ ] [06 The 3 Roles of Scrum.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/06%20The%203%20Roles%20of%20Scrum.md) — **PO / 스크럼 마스터 / 개발팀**
- [ ] [07 Artifacts, Events, and Benefits.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/07%20Artifacts,%20Events,%20and%20Benefits.md)
- [ ] [08 Organizational impact of Agile.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/08%20Organizational%20impact%20of%20Agile.md)
- [ ] [09 Mistaking Iterative Development for Agile.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%201%20-%20Introduction%20to%20Agile%20and%20Scrum/09%20Mistaking%20Iterative%20Development%20for%20Agile.md) — 반복 개발 ≠ 애자일

함께 보기: Digital Product Management, Module 2

- [ ] [03 Effectuating Better Product Pipelines with Agile.md](../../courses/mooc/Product%20Management/Digital%20Product%20Management%20-%20Modern%20Fundamentals/Module%202%20-%20Applying%20Today%27s%20Product%20Management%20Methods/03%20Effectuating%20Better%20Product%20Pipelines%20with%20Agile.md)
- [ ] [18 Making Time to Do Things Right.md](../../courses/mooc/Product%20Management/Digital%20Product%20Management%20-%20Modern%20Fundamentals/Module%202%20-%20Applying%20Today%27s%20Product%20Management%20Methods/18%20Making%20Time%20to%20Do%20Things%20Right.md)

## 4-B. 애자일 기획 — 이 Phase의 본체

메인: Introduction to Agile Development and Scrum, Module 2 — `Module 2 - Agile Planning/`

- [ ] [01 Destination Unknown.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/01%20Destination%20Unknown.md)
- [ ] [02 Agile Roles and the Need for Training.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/02%20Agile%20Roles%20and%20the%20Need%20for%20Training.md)
- [ ] [03 Kanban and Agile Planning Tools.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/03%20Kanban%20and%20Agile%20Planning%20Tools.md)
- [ ] [04 Creating Good User Stories.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/04%20Creating%20Good%20User%20Stories.md) — **역할 + 필요 기능 + 비즈니스 이익**, Gherkin 구문 수락 기준, INVEST, 에픽 쪼개기
- [ ] [05 Effectively using Story Points.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/05%20Effectively%20using%20Story%20Points.md)
- [ ] [06 Building the Product Backlog.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/06%20Building%20the%20Product%20Backlog.md)
- [ ] [07 Backlog Refinement - Getting Started.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/07%20Backlog%20Refinement%20-%20Getting%20Started.md)
- [ ] [08 Backlog Refinement Finishing Up.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/08%20Backlog%20Refinement%20Finishing%20Up.md)
- [ ] [09 Sprint Planning.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%202%20-%20Agile%20Planning/09%20Sprint%20Planning.md)

## 4-C. 일일 실행과 회고

메인: Introduction to Agile Development and Scrum, Module 3 — `Module 3 - Daily Execution/`

- [ ] [01 Workflow for Daily Plan Execution.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%203%20-%20Daily%20Execution/01%20Workflow%20for%20Daily%20Plan%20Execution.md)
- [ ] [02 The Daily Stand Up.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%203%20-%20Daily%20Execution/02%20The%20Daily%20Stand%20Up.md)
- [ ] [03 Using Burndown Charts.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%203%20-%20Daily%20Execution/03%20Using%20Burndown%20Charts.md)
- [ ] [04 The Sprint Review.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%203%20-%20Daily%20Execution/04%20The%20Sprint%20Review.md)
- [ ] [05 The Sprint Retrospective.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%203%20-%20Daily%20Execution/05%20The%20Sprint%20Retrospective.md)
- [ ] [06 Using Measurements Effectively.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%203%20-%20Daily%20Execution/06%20Using%20Measurements%20Effectively.md)
- [ ] [07 Getting Ready for the Next Sprint.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%203%20-%20Daily%20Execution/07%20Getting%20Ready%20for%20the%20Next%20Sprint.md)
- [ ] [08 Agile Anti-Patterns and Health Check.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/03%20Introduction%20to%20Agile%20Development%20and%20Scrum/Module%203%20-%20Daily%20Execution/08%20Agile%20Anti-Patterns%20and%20Health%20Check.md) — **자기 팀 진단용으로 쓸 수 있다**

## 4-D. 스프린트 계획 실습 (선택)

- [ ] [`courses/mooc/DevOps and SRE/IBM DevOps and Software Engineering/15 DevOps Capstone Project/Module 1 - Create and Execute Sprint Plans/`](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/15%20DevOps%20Capstone%20Project/Module%201%20-%20Create%20and%20Execute%20Sprint%20Plans/) — 실제 스프린트 계획 수립 실습

## 4-E. 요구사항을 설계로 옮기기 (선택, 엔지니어에게 유리한 보강)

> 아래 두 강좌는 **맛보기다.** 요구사항을 설계로 옮기는 것 자체를 제대로 배우려면 **제품 개발 로드맵**이 `Software Design and Architecture` 87강 전체를 Phase 1·3~6으로 소유한다.

- [ ] [`courses/mooc/Computer Science Fundamentals/Software Design and Architecture/Course 1 - Object-Oriented Design/Module 1 - Object-Oriented Analysis and Design/`](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%201%20-%20Object-Oriented%20Design/Module%201%20-%20Object-Oriented%20Analysis%20and%20Design/)
- [ ] [`courses/mooc/Computer Science Fundamentals/Software Design and Architecture/Course 3 - Software Architecture/Module 1 - UML Architecture Diagrams/`](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%203%20-%20Software%20Architecture/Module%201%20-%20UML%20Architecture%20Diagrams/) — 기획 문서에 넣을 다이어그램

## 산출물 과제

1. **사용자 스토리 5개 + 수락 기준** — Phase 3에서 우선순위 1위였던 해법을 쪼갠다.
   - 형식: "[역할]로서, [기능]을 원한다. [비즈니스 이익]을 얻기 위해."
   - 수락 기준은 Gherkin(Given / When / Then)으로.
   - INVEST 자기 점검: Independent, Negotiable, Valuable, Estimable, Small, Testable
2. **제품 백로그 1개** — 우선순위 순으로 정렬. 각 항목에 "이걸 왜 이 순위에 뒀는지" 한 줄.
3. **스프린트 계획 1회분** — 팀 캐파, 선택한 스토리, 의존성, 리스크.
4. **완료의 정의(Definition of Done)** — Phase 3에서 배운 HDD를 적용해, 배포가 아니라 **사용자 행동 변화**로 쓴다.

> `pm-execution:write-stories`, `pm-execution:sprint`(계획/회고/릴리스 노트), `pm-execution:test-scenarios`(스토리에서 테스트 시나리오 도출)를 쓰면 초안이 빨리 나온다.

## 다음 단계

→ [05 Phase 5 - 출시 성장 분석](05%20Phase%205%20-%20출시%20성장%20분석.md)
