# Requests

## 개요
- RECIPE 프레임워크의 첫 글자 **R = Requests**를 다루는 강의.
- 스킬을 설계할 때 가장 먼저 생각해야 할 것은 "이 스킬이 다룰 **사용자의 요청(request)**이 무엇인가"라는 점을 설명한다.

## 내용
### 왜 "요청(request)" 중심으로 사고하는가
- Task, operation 등 다른 용어로 부를 수도 있지만, 강사는 **"requests"**로 생각하길 권장한다.
- 이유: 스킬의 핵심 목적 중 하나가 **"사용자가 한 말을 보고 AI 에이전트가 어떤 스킬을 써야 할지 매칭하는 것"**이기 때문 — 결국 사용자의 실제 발화(요청)로 되짚어가야 한다.
- 따라서 "사용자가 실제로 뭐라고 요청할까, 어떤 표현을 쓸까"를 스킬 설계에 반영해야 한다.
  - 예: "여행 경비 보고서를 감사(audit)해줘", "PPT 만들어줘", "CRM에 최근 등록된 고객 확인해줘", "과제 늦게 제출한 사람 있는지 확인해줘" 등.

### 단일 요청(single request) 스킬 vs. 다중 요청(multiple requests) 스킬
- 한 스킬이 **하나의 단순한 요청**만 다룰 수도 있고, **여러 관련 요청**(예: 경비 보고서와 관련된 모든 요청)을 하나의 스킬로 묶을 수도 있다.
- 정답은 없음(no right answer) — 상황에 따라 다르며 실험을 통해 알아내야 함.

### 단일 요청 스킬의 구성
- 요청을 **상위 헤더(header)**로 만들고, 그 아래에 곧바로 수행 절차를 적는다.
- 마크다운 헤더 레벨(`#` 개수)은 책의 장(chapter) 제목처럼 생각하면 됨 — `##`(레벨 2)은 `#`(레벨 1)보다 작은 폰트/하위 개념.
- 예: `## How to Audit an Expense Report` 아래 바로 절차 나열.

### 다중 요청 스킬의 구성 — "목차(table of contents)"처럼 설계하기
- 여러 요청을 다룰 때는 SKILL.md를 **목차처럼** 구성한다.
- 각 요청 항목마다: 제목(title) + (스킬의 name/description과 비슷하게) 언제 이 요청을 쓰는지에 대한 설명 + 더 자세한 내용이 담긴 **references로의 링크**.
- 즉 SKILL.md 안에서도, "요청" 단위로 name+description+참조 링크의 구조를 반복하는 셈.

### 핵심 개념 — 점진적 노출(progressive disclosure)
- AI 에이전트의 컨텍스트(context)는 **한정된 인지 용량(cognitive capacity)**으로 취급해야 한다.
- 10개의 요청이 있다고 모두 한 번에 컨텍스트에 욱여넣으면 인지 용량을 낭비하게 된다.
- 이상적인 방식: **다음에 무엇을 읽어야 할지 판단할 수 있을 만큼의 정보만** 먼저 주고, 필요한 세부사항은 그때그때 참조하도록(look up on demand) 만든다.
- 책의 목차를 읽는 것과 같음 — 목차 전체를 다 읽을 필요 없이, 필요한 챕터로 바로 넘어가면 됨.
- 결론: 단일 요청이면 그냥 SKILL.md에 다 넣어도 되지만, 다중 요청이면 **목차 형태로 조직해 필요한 부분만 참조하게** 만드는 것이 좋다.

### front matter의 description과 요청의 연결
- 스킬의 front matter에 있는 **description**에도 "이런 요청이 들어오면 이 스킬을 써라"는 식으로 요청 기반 설명을 넣는 것이 좋다.
  - 예: "Use this when the user is asking for [요청 A], or when you need to do [요청 B]."

## 예시
```markdown
## How to Audit an Expense Report
(단일 요청 스킬 — 절차를 바로 아래에 나열)
```

```markdown
## Expense Report Requests (목차형 — 다중 요청)
- Auditing an expense report → see references/audit.md
- Creating a new expense report → see references/create.md
- Reimbursing international travel → see references/international.md
```

## 요약
- 스킬 설계의 출발점은 **"사용자가 실제로 어떤 요청을 할 것인가"**를 파악하는 것이다.
- 요청이 하나면 SKILL.md에 절차를 직접 담고, 요청이 여러 개면 **목차(table of contents) 형태**로 구성해 references로 세부 내용을 분리한다.
- 이는 AI의 한정된 컨텍스트(인지 용량)를 아끼기 위한 **점진적 노출(progressive disclosure)** 원칙과 직결된다.
- front matter의 description도 "이 요청이 오면 이 스킬을 써라"는 형태로 요청 중심으로 작성하는 것이 좋다.
