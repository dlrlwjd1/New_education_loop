# The Ultimate BPMN Course

MOOC / Packt · 강사 **Fabian**(기초) · **Sebastian**(고급) · Intermediate · 14개 모듈 · 강의 영상 95개(약 4시간) · MOOC Plus 포함

[강좌 페이지](https://www.mooc.org/learn/packt-the-ultimate-bpmn-course-maxcy)

## 개요

BPMN(Business Process Model and Notation) 2.0을 **표기법부터 조직 차원 적용까지** 다루는 강좌다. 이론 설명 후 곧바로 실제 시나리오에 적용하는 구성이며, 신발 매장·F1 pit stop·화장품 제조사·우주선 제조사·비자 발급·컨설팅 채용·두부 판매·병원 위험관리·은행 모바일 앱 등 **9개 사례**를 관통한다.

### 이 강좌를 듣는 이유

일을 **상자와 화살표로 그려내는 표기법과 훈련**을 제공한다. AI 에이전트 워크플로우를 설계할 때 필요한 어휘 — 분기(gateway), 이벤트(event), 하위 프로세스(sub-process), 병렬과 동기화 — 가 여기서 나온다. 특히 **Module 5(BPMN Traps)** 의 deadlock·multi-merge는 에이전트 워크플로우가 무한 대기하거나 중복 실행되는 상황과 같은 문제다.

관련 저장소 자료: [Agentic AI](../../../deeplearning-ai/Agentic%20AI/) (Task Decomposition · Design Patterns) · [Building AI Agents and Agentic Workflows](../../AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/)

## 핵심 개념 지도

### Gateway 5종

| 기호 | 이름 | 활성화 | 실무 빈도 |
|---|---|---|---|
| ◇ (X) | **Exclusive** | 정확히 하나 | 매우 높음 |
| ⊕ (+) | **Parallel** | 전부 + 동기화 | 매우 높음 |
| ◎ (O) | **Inclusive** | 임의 조합 | 보통 |
| ⬡ | **Event based** | 먼저 일어난 하나 | 보통 |
| ✳ | **Complex** | 커스텀 규칙 | **강사도 실무에서 본 적 없음** |

### Event 13종 (Module 12~13에서 완성)

**기본 5종** — Plain · Message · Timer · Conditional · Link
**고급 8종** — Signal · Error · Escalation · Termination · Compensation · Cancel · Multiple · Multiple parallel

핵심 판별 기준: **원래 작업을 계속할 수 있는가** (interrupting 실선 vs non-interrupting 점선)

### 구조화 도구

| 도구 | 방향 | 재사용 |
|---|---|---|
| **Link event** | 같은 레벨, 옆으로 자름 | — |
| **Sub-process** | 아래 레벨로 파고듦 | 그 프로세스 전용 |
| **Call activity** | 아래 레벨로 파고듦 | **전역 재사용** |

### 반드시 피해야 할 두 함정 (Module 5)

| 함정 | 원인 | 결과 |
|---|---|---|
| **Deadlock** | 여는 ◇ → 닫는 ⊕ | **프로세스가 영원히 멈춤** (기술적으로 틀림) |
| **Multi-merge** | 여는 ⊕ → 닫는 ◇ | **activity 중복 실행** (기술적으로는 맞지만 오해를 부름) |

### Best practice 5가지 (Module 7)

1. **15 task rule** — 비즈니스 사용자용은 task 15개 이하
2. **같은 pool 안은 sequence flow, pool 사이는 message event**
3. **각 pool은 완결·독립적인 프로세스**를 담는다
4. **Task는 능동형, Event는 수동형**으로 명명. Pool·Lane은 개인 이름이 아닌 역할
5. **Straight to success** — 성공 경로는 직선, 부정적 결과는 아래로 분기

## 모듈별 강의 목록

### 전반부 — BPMN 기초 (강사 Fabian)

#### [Module 1 - Introduction](Module%201%20-%20Introduction/)

1. [Welcome](Module%201%20-%20Introduction/01%20Welcome.md)
2. [Why BPMN?](Module%201%20-%20Introduction/02%20Why%20BPMN.md)

#### [Module 2 - The Shoe Shop](Module%202%20-%20The%20Shoe%20Shop/) — event · activity · gateway · pool · lane

1. [Introduction](Module%202%20-%20The%20Shoe%20Shop/01%20Introduction.md)
2. [Theory – Task, Start & End Event, Pools & Lanes](Module%202%20-%20The%20Shoe%20Shop/02%20Theory%20-%20Task%2C%20Start%20%26%20End%20Event%2C%20Pools%20%26%20Lanes.md)
3. [Practical – Process of Manual Tasks in the Retail Industry (Part 1)](Module%202%20-%20The%20Shoe%20Shop/03%20Practical%20-%20Process%20of%20Manual%20Tasks%20in%20the%20Retail%20Industry%20%28Part%201%29.md)
4. [Practical – Process of Manual Tasks in the Retail Industry (Part 2)](Module%202%20-%20The%20Shoe%20Shop/04%20Practical%20-%20Process%20of%20Manual%20Tasks%20in%20the%20Retail%20Industry%20%28Part%202%29.md)
5. [Summary](Module%202%20-%20The%20Shoe%20Shop/05%20Summary.md)
6. [Tool Demo](Module%202%20-%20The%20Shoe%20Shop/06%20Tool%20Demo.md)
7. [Exercise](Module%202%20-%20The%20Shoe%20Shop/07%20Exercise.md)

#### [Module 3 - The Race Track](Module%203%20-%20The%20Race%20Track/) — token concept · parallel gateway

1. [Intro Race](Module%203%20-%20The%20Race%20Track/01%20Intro%20Race.md)
2. [Theory – Token Concept](Module%203%20-%20The%20Race%20Track/02%20Theory%20-%20Token%20Concept.md)
3. [Theory – Parallel Gateway](Module%203%20-%20The%20Race%20Track/03%20Theory%20-%20Parallel%20Gateway.md)
4. [Practical – Process Racing](Module%203%20-%20The%20Race%20Track/04%20Practical%20-%20Process%20Racing.md)
5. [Summary](Module%203%20-%20The%20Race%20Track/05%20Summary.md)
6. [Exercise](Module%203%20-%20The%20Race%20Track/06%20Exercise.md)

#### [Module 4 - The Beauty Paradise](Module%204%20-%20The%20Beauty%20Paradise/) — inclusive gateway · message event · collapsed pool

1. [Intro](Module%204%20-%20The%20Beauty%20Paradise/01%20Intro.md)
2. [Theory – Inclusive Gateway](Module%204%20-%20The%20Beauty%20Paradise/02%20Theory%20-%20Inclusive%20Gateway.md)
3. [Theory – Collapsed Pools](Module%204%20-%20The%20Beauty%20Paradise/03%20Theory%20-%20Collapsed%20Pools.md)
4. [Theory – Message Event](Module%204%20-%20The%20Beauty%20Paradise/04%20Theory%20-%20Message%20Event.md)
5. [Theory – Plain Intermediate Event](Module%204%20-%20The%20Beauty%20Paradise/05%20Theory%20-%20Plain%20Intermediate%20Event.md)
6. [Practical – Beauty Process (Part 1)](Module%204%20-%20The%20Beauty%20Paradise/06%20Practical%20-%20Beauty%20Process%20%28Part%201%29.md)
7. [Practical – Beauty Process (Part 2)](Module%204%20-%20The%20Beauty%20Paradise/07%20Practical%20-%20Beauty%20Process%20%28Part%202%29.md)
8. [Summary](Module%204%20-%20The%20Beauty%20Paradise/08%20Summary.md)
9. [Exercise](Module%204%20-%20The%20Beauty%20Paradise/09%20Exercise.md)

#### [Module 5 - BPMN Traps](Module%205%20-%20BPMN%20Traps/) — deadlock · multi-merge

1. [Introduction](Module%205%20-%20BPMN%20Traps/01%20Introduction.md)
2. [The Deadlock](Module%205%20-%20BPMN%20Traps/02%20The%20Deadlock.md)
3. [The Multimerge](Module%205%20-%20BPMN%20Traps/03%20The%20Multimerge.md)
4. [Summary](Module%205%20-%20BPMN%20Traps/04%20Summary.md)

#### [Module 6 - Space Ship](Module%206%20-%20Space%20Ship/) — timer · conditional · attached event · event based gateway

1. [Introduction](Module%206%20-%20Space%20Ship/01%20Introduction.md)
2. [Theory – Timer and Conditional Event](Module%206%20-%20Space%20Ship/02%20Theory%20-%20Timer%20and%20Conditional%20Event.md)
3. [Theory – Attached Events](Module%206%20-%20Space%20Ship/03%20Theory%20-%20Attached%20Events.md)
4. [Theory – Event Based Gateway](Module%206%20-%20Space%20Ship/04%20Theory%20-%20Event%20Based%20Gateway.md)
5. [Practical – Space Ship Manufacturing Process (Part 1)](Module%206%20-%20Space%20Ship/05%20Practical%20-%20Space%20Ship%20Manufacturing%20Process%20%28Part%201%29.md)
6. [Practical – Space Ship Manufacturing Process (Part 2)](Module%206%20-%20Space%20Ship/06%20Practical%20-%20Space%20Ship%20Manufacturing%20Process%20%28Part%202%29.md)
7. [Summary](Module%206%20-%20Space%20Ship/07%20Summary.md) — **여기까지로 실무 프로세스의 약 90%를 만들 수 있다**
8. [Exercise](Module%206%20-%20Space%20Ship/08%20Exercise.md)

#### [Module 7 - Best Practices](Module%207%20-%20Best%20Practices/) — scoping · collaboration · naming · straight to success

1. [Introduction](Module%207%20-%20Best%20Practices/01%20Introduction.md)
2. [Process Scoping](Module%207%20-%20Best%20Practices/02%20Process%20Scoping.md)
3. [Process Collaboration](Module%207%20-%20Best%20Practices/03%20Process%20Collaboration.md)
4. [Consistent Process Flow](Module%207%20-%20Best%20Practices/04%20Consistent%20Process%20Flow.md) — ⚠️ 실제 영상 내용은 **naming convention**
5. [Naming Conventions](Module%207%20-%20Best%20Practices/05%20Naming%20Conventions.md) — ⚠️ 실제 영상 내용은 **consistent process flow**
6. [Straight to Success](Module%207%20-%20Best%20Practices/06%20Straight%20to%20Success.md)
7. [Summary](Module%207%20-%20Best%20Practices/07%20Summary.md)

> ⚠️ 4번과 5번은 **강좌 자체에 영상이 뒤바뀌어** 있다. 파일명은 MOOC 공식 제목을 따르고, 각 파일 상단에 실제 내용을 안내해 두었다.

#### [Module 8 - Travel](Module%208%20-%20Travel/) — link event · sub-process · call activity · data object · data store

1. [Introduction](Module%208%20-%20Travel/01%20Introduction.md)
2. [Theory – Link Event](Module%208%20-%20Travel/02%20Theory%20-%20Link%20Event.md)
3. [Theory – Sub Process](Module%208%20-%20Travel/03%20Theory%20-%20Sub%20Process.md)
4. [Theory – Call Activity](Module%208%20-%20Travel/04%20Theory%20-%20Call%20Activity.md)
5. [Theory – Data Object](Module%208%20-%20Travel/05%20Theory%20-%20Data%20Object.md)
6. [Theory – Data Store](Module%208%20-%20Travel/06%20Theory%20-%20Data%20Store.md)
7. [Visa Process Part 1](Module%208%20-%20Travel/07%20Visa%20Process%20Part%201.md)
8. [Visa Process Part 2](Module%208%20-%20Travel/08%20Visa%20Process%20Part%202.md)
9. [Visa Process Part 3](Module%208%20-%20Travel/09%20Visa%20Process%20Part%203.md)
10. [Summary](Module%208%20-%20Travel/10%20Summary.md)
11. [Exercise](Module%208%20-%20Travel/11%20Exercise.md)

#### [Module 9 - Case Study](Module%209%20-%20Case%20Study/) — 기초 종합

1. [Case Study](Module%209%20-%20Case%20Study/01%20Case%20Study.md) — 하이파이 도매업체 핵심 프로세스

### 후반부 — 고급 BPMN (강사 Sebastian)

#### [Module 10 - Fast Fore HR](Module%2010%20-%20Fast%20Fore%20HR/) — task types · 자동화

1. [½ Course Completion Check-in](Module%2010%20-%20Fast%20Fore%20HR/01%20Half%20Course%20Completion%20Check-in.md)
2. [Intro](Module%2010%20-%20Fast%20Fore%20HR/02%20Intro.md)
3. [Task Types](Module%2010%20-%20Fast%20Fore%20HR/03%20Task%20Types.md) — **7종 task type**
4. [Non Interrupting Attached Events](Module%2010%20-%20Fast%20Fore%20HR/04%20Non%20Interrupting%20Attached%20Events.md)
5. [Complex Gateway](Module%2010%20-%20Fast%20Fore%20HR/05%20Complex%20Gateway.md)
6. [Additional Process Participant](Module%2010%20-%20Fast%20Fore%20HR/06%20Additional%20Process%20Participant.md) — RACI · Signavio 전용
7. [Case Study – Fastfore Consulting](Module%2010%20-%20Fast%20Fore%20HR/07%20Case%20Study%20-%20Fastfore%20Consulting.md) — **다이어그램이 곧 시스템 요구사항**
8. [Summary](Module%2010%20-%20Fast%20Fore%20HR/08%20Summary.md)
9. [Exercise](Module%2010%20-%20Fast%20Fore%20HR/09%20Exercise.md)

#### [Module 11 - Tofisu](Module%2011%20-%20Tofisu/) — sub-process 3종 · loop types

1. [Intro](Module%2011%20-%20Tofisu/01%20Intro.md)
2. [Expanded Sub Process](Module%2011%20-%20Tofisu/02%20Expanded%20Sub%20Process.md)
3. [Event Sub Process](Module%2011%20-%20Tofisu/03%20Event%20Sub%20Process.md)
4. [Transaction Sub-Process](Module%2011%20-%20Tofisu/04%20Transaction%20Sub-Process.md)
5. [Loop Types](Module%2011%20-%20Tofisu/05%20Loop%20Types.md)
6. [Sequential Multi Instance](Module%2011%20-%20Tofisu/06%20Sequential%20Multi%20Instance.md)
7. [Parallel Multi Instance](Module%2011%20-%20Tofisu/07%20Parallel%20Multi%20Instance.md)
8. [Case Study – Tofisu](Module%2011%20-%20Tofisu/08%20Case%20Study%20-%20Tofisu.md) — 프로세스 명명 규칙 포함
9. [Summary](Module%2011%20-%20Tofisu/09%20Summary.md)
10. [Exercise](Module%2011%20-%20Tofisu/10%20Exercise.md)

#### [Module 12 - Nilla Core](Module%2012%20-%20Nilla%20Core/) — signal · error · escalation · termination

1. [Intro](Module%2012%20-%20Nilla%20Core/01%20Intro.md)
2. [Signal Event](Module%2012%20-%20Nilla%20Core/02%20Signal%20Event.md) — **event 변형 체계 참조표**
3. [Error Event](Module%2012%20-%20Nilla%20Core/03%20Error%20Event.md)
4. [Escalation Event](Module%2012%20-%20Nilla%20Core/04%20Escalation%20Event.md)
5. [Termination Event](Module%2012%20-%20Nilla%20Core/05%20Termination%20Event.md)
6. [Case Study – Nilla Care](Module%2012%20-%20Nilla%20Core/06%20Case%20Study%20-%20Nilla%20Care.md) — **취소 범위의 결정적 차이**
7. [Summary](Module%2012%20-%20Nilla%20Core/07%20Summary.md)
8. [Exercise](Module%2012%20-%20Nilla%20Core/08%20Exercise.md)

#### [Module 13 - Bankovia](Module%2013%20-%20Bankovia/) — compensation · cancel · multiple

1. [Intro](Module%2013%20-%20Bankovia/01%20Intro.md)
2. [Compensation Event](Module%2013%20-%20Bankovia/02%20Compensation%20Event.md)
3. [Cancel Event](Module%2013%20-%20Bankovia/03%20Cancel%20Event.md)
4. [Multiple Event](Module%2013%20-%20Bankovia/04%20Multiple%20Event.md)
5. [Multiple Parallel Event](Module%2013%20-%20Bankovia/05%20Multiple%20Parallel%20Event.md) — **강사는 multiple 계열 사용을 권하지 않음**
6. [Case Study – Bankovia](Module%2013%20-%20Bankovia/06%20Case%20Study%20-%20Bankovia.md) — **transaction 3상태 종합**
7. [Summary](Module%2013%20-%20Bankovia/07%20Summary.md)
8. [Exercise](Module%2013%20-%20Bankovia/08%20Exercise.md)

#### [Module 14 - BPM Scenarios](Module%2014%20-%20BPM%20Scenarios/) — 조직 차원 적용

1. [Intro](Module%2014%20-%20BPM%20Scenarios/01%20Intro.md)
2. [Agility](Module%2014%20-%20BPM%20Scenarios/02%20Agility.md)
3. [Efficiency](Module%2014%20-%20BPM%20Scenarios/03%20Efficiency.md) — **as-is / to-be 프로세스**
4. [Compliancy](Module%2014%20-%20BPM%20Scenarios/04%20Compliancy.md)
5. [Course Completion Award](Module%2014%20-%20BPM%20Scenarios/05%20Course%20Completion%20Award.md)

## 강의 외 커리큘럼 항목

정리본은 강의 영상 95개에 대해 작성했다. 아래 항목은 별도 파일을 만들지 않았다.

- **Supplement 1개** — Module 1 `Full Course Resources`
- **Coach 12개** — 모듈별 MOOC Coach 대화형 실습 (모듈 2~13에 각 1개)
- **Staff graded 15개** — 모듈별 과제 + Module 14의 `Full Course Practice Assessment`·`Full Course Assessment`

## 실습 도구

- **BPMN Modeler** · **Token Simulator** — `processcamp.io/profile/links`
- **코스 슬라이드** — `processcamp.io/course-slides`
- **수료 포스터** — `processcamp.io/course-award-poster`

Token Simulator는 모델의 기술적 유효성을 검증하는 도구다. 강사가 모든 실습에서 사용을 권한다.
