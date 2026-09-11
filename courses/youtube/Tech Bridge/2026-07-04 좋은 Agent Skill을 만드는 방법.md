# [한영자막] 좋은 Agent Skill을 만드는 방법

## 개요
- 업로드일: 2026-07-04
- 원본: https://www.youtube.com/watch?v=69Tpanmk288
- 채널: Tech Bridge (해외 기술 강연에 한영자막을 붙여 소개하는 채널)
- 발표자: Matt Pocock — 영상 중 "we have Matt Pocock skills, which is my skills repo, which is one of the most popular engineering skill sets out there"라는 대목에서 본인이 직접 자신을 밝힌다. 원래 AI Engineer World's Fair(샌프란시스코)에서 발표할 예정이었으나 사정으로 현장에 갈 수 없어, 대신 하려고 했던 강연("The Missing Manual: How to Write Great Skills")을 이 영상으로 공개한 것이다.
- 관련 자료: 설명란 링크 — https://github.com/mattpocock/skills/blob/main/skills/productivity/writing-great-skills/SKILL.md (발표자의 skills 저장소에 실제로 포함된 "writing great skills" 스킬)
- 핵심 주제: 좋은 Agent Skill과 나쁜 Skill을 가르는 공통된 기준(rubric)이 없어서 생기는 "스킬 헬(Skill Hell)" 문제를 진단하고, 이를 해결할 4단계 체크리스트 프레임워크 — Trigger(호출 방식), Structure(내부 구조), Steering(행동 유도), Pruning(가지치기) — 를 제시한다.

## 내용

### 스킬 헬(Skill Hell)이란
- 개발자들은 새로운 형태의 "지옥"을 계속 만들어 왔다. 몇 년 전에는 튜토리얼만 전전하다 앞뒤를 못 맞추는 **튜토리얼 헬(tutorial hell)**, 그다음에는 새 JavaScript 프레임워크가 10분마다 나오는 **프레임워크 헬(framework hell)**이 있었다.
- 이제는 **스킬 헬(Skill Hell)**이다. 자유롭게 내려받고 기여할 수 있는 스킬은 넘쳐나지만, 이 조각들이 어떻게 맞물리는지 모르고, 좋은 스킬과 나쁜 스킬을 구분하지 못하는 상태다. 그 결과 여러 스킬 프레임워크를 한꺼번에 짜맞추려다 결국 스킬이 약속한 결과를 얻지 못한다.
- 이는 개인뿐 아니라 조직 단위에서도 마찬가지다. 조직들은 자신들의 운영 절차(operating procedure)를 에이전트가 실행할 수 있는 형태로 바꾸는 방법을 잘 모른다.
- 발표자는 자신의 "Matt Pocock skills" 저장소가 널리 쓰이는 만큼 이 문제에 책임감을 느낀다고 말하며, 정작 우리에게 없는 것은 **"무엇이 좋은 스킬을 만드는가"에 대한 공유된 기준(rubric)**이라고 짚는다. 스킬을 보고 "이건 잘하고 있고 이건 잘못하고 있다"고 판단할 틀이 없다는 것이다. 이 강연은 그 틀 — 스킬 체크리스트 — 을 제공하는 것이 목적이다.

### 체크리스트 프레임워크 개요
스킬을 점검하고 개선하는 4단계 체크리스트다.
1. **Trigger** — 스킬이 어떻게 호출되는가
2. **Structure** — 스킬이 내부적으로 어떻게 구성되는가
3. **Steering** — 에이전트에게 무엇을 하라고 어떻게 지시하는가
4. **Pruning** — 스킬을 최대한 작게 만들기 위해 불필요한 것(no-op 등)을 제거하는 방법

이 프레임워크는 발표자의 skills 저장소에 있는 "writing great skills"라는 스킬 자체로 인코딩되어 있어, 바로 내려받아 자신의 스킬을 개선하거나 새 스킬을 작성하는 데 쓸 수 있다.

### 1. Trigger — user-invoked와 model-invoked
- 모든 스킬은 파일 시스템에 놓여 있고, 사용자가 직접 명령해 **수동으로 호출(user-invoked)**할 수 있다. (하네스에 따라 슬래시 커맨드 형태일 수도, 아닐 수도 있다.)
- 또 다른 호출 방식은 **에이전트 스스로 호출(model-invoked)**하는 것이다. 이때는 스킬의 설명(description)이 항상 에이전트의 컨텍스트에 들어가 있고, 에이전트가 그 설명을 보고 판단해 skill.md 파일 전체를 컨텍스트로 읽어들인다. 즉 description은 다른 파일(skill.md)을 가리키는 일종의 **컨텍스트 포인터(context pointer)**다.
- 이 포인터는 선택 사항이다. description을 에이전트에게 아예 보이지 않게 만들 수도 있는데, 이것이 **user-invoked 전용 스킬**이다. 예를 들어 "code base design" 스킬은 description이 에이전트 컨텍스트에 노출되는 model-invocable 스킬이지만, "grill me" 스킬은 `disable model invocation: true` 설정으로 description이 사용자에게만 보이고 에이전트에게는 보이지 않는다.
- **팁 1**: 스킬을 만들 때 user-invoked로 할지 model-invoked로 할지 먼저 결정하라.
- 언뜻 model-invoked가 항상 더 나아 보인다(에이전트도 사용자도 호출 가능하니 더 유연함). 하지만 model-invoked 스킬을 추가할 때마다 **컨텍스트 부하(context load)**가 늘어난다. description 하나가 매 요청마다 토큰 비용을 발생시키고, 에이전트가 고려해야 할 대상도 하나 늘어난다. model-invoked 스킬이 100개면 컨텍스트에 description이 100개 들어간다는 뜻이다.
- 반대로 user-invoked 스킬이 많아지면 **사용자의 인지 부하(cognitive load)**가 커진다. 사용자가 기억하고 직접 챙겨야 할 것이 늘어난다는 뜻이다.
- 이 관점에서 발표자는 자신의 스킬을 "superpowers"라는 또 다른 유명한 엔지니어링 스킬 세트와 비교한다. superpowers는 주로 model-invoked 스킬로 구성되어 에이전트에게 "초능력"을 부여하는 방식인 반면, 발표자는 자신이 **완전한 통제권**을 갖는 쪽을 선호해 user-invoked 스킬 위주로 만든다. 그렇게 하면 에이전트의 컨텍스트 부하는 최소화되지만, 대신 발표자 본인이 스킬을 깊이 이해해야 하는 인지 부하를 진다.
- user-invoked를 선호하는 이유는 model-invoked 스킬에는 **예측 불가능성(unpredictability)**이라는 비용이 따르기 때문이다. 컨텍스트 포인터가 있어도 에이전트가 그 작업에 완벽히 맞는 스킬임에도 호출하지 않기로 "선택"할 수 있다. 이 예측 불가능성을 없애면, 스킬이 적절한 시점에 호출되는지 계속 평가(eval)해야 하는 성가신 문제 자체를 제거할 수 있다.
- 결론: model-invoked와 user-invoked 모두 각자의 비용이 있으며, 어느 쪽이 낫다고 쉽게 답할 수 있는 문제가 아니다.

### 2. Structure — steps와 reference로 나누기
- 대부분의 스킬은 두 가지 단위로 구성된다고 보면 된다. **steps**(스킬이 따라갈 단계별 절차)와 **reference**(그 단계를 수행하는 데 필요한 부가 정보)다. steps만 있고 reference가 없는 스킬도, reference만 있고 steps가 없는 스킬도 있을 수 있다.
- 예: "2 PRD" 스킬(현재 컨텍스트로부터 제품 요구사항 문서를 작성)은 3단계로 구성된다 — ① 관련 컨텍스트 찾기, ② 테스트 심(test seam)을 사용자와 확인(사람이 개입하는 체크포인트), ③ PRD 작성. 이 3단계를 지원하는 reference는 "테스트 심이 무엇인가"에 대한 설명과 PRD 템플릿 마크다운 두 가지다.
- **팁 3**: 메인 skill.md 파일은 최대한 작게 유지하라. 스킬은 description + skill.md + 거기서 뻗어나가는 reference로 구성되는데, skill.md가 작을수록 유지보수와 감사(audit)가 쉬워지고, 단어 하나를 줄일 때마다 토큰 비용도 줄어든다.
- skill.md를 작게 만드는 핵심 기법은 스킬이 쓰이는 **여러 갈래(branch)**를 생각하는 것이다. 특정 브랜치에서만 쓰이는 reference는 메인 skill.md 밖으로 뺄 후보다.
  - "2 PRD"는 매번 PRD를 작성하고 매번 test seam을 확인하므로 브랜치가 하나뿐이다. 따라서 두 reference 모두 skill.md 안에 남아 있는 게 맞다.
  - 반면 "domain modeling" 스킬은 두 가지 일을 한다 — 로컬 용어집(context.md) 갱신, 그리고 아키텍처 결정 기록(ADR) 작성. 경우에 따라 둘 다 안 할 수도 있다. 즉 2~3개의 브랜치가 있다는 뜻이며, 이 경우 ADR 템플릿과 context.md 템플릿을 메인 skill.md에 넣을 필요가 없다.
  - 이럴 때는 skill.md 안에 **컨텍스트 포인터**만 두고, 실제 템플릿은 스킬 폴더 안의 별도 마크다운 파일로 분리한다("템플릿이 필요하면 이 파일로 가라"는 식). 발표자는 이를 **외부 참조(external reference)**라 부르는데, 스킬과 함께 번들되어 있어 에이전트가 필요할 때 쉽게 끌어올 수 있다.
- 이 기법을 요약하면: **브랜치별로 갈리는 reference는 컨텍스트 포인터 뒤에 숨겨라.**

### 3. Steering — leading words로 행동 유도하기
- "분명히 지시했다고 생각했는데 에이전트가 그대로 하지 않는" 문제를 해결하는 핵심 기법은 **leading words**(문학 이론 용어로는 loaded word에 가까움)다. 아주 작은 공간에 많은 의미를 압축해 담는 단어를 스킬 텍스트 안에 넣어두면, 에이전트가 그 단어를 자신의 사고 과정(thinking tokens)과 출력에서 반복하게 되고, 그 재강조 효과로 실제 행동이 바뀐다.
- 예시: 에이전트는 큰 작업을 주면 보통 DB 레이어 전체 → 스키마 전체 → API 엔드포인트 전체 → 프론트엔드 순으로 **레이어 단위(layer by layer)**로 코드를 짠다. 사람처럼 일찍 피드백을 구하며 작은 단위로 먼저 동작시키는 습관이 없다. "레이어 단위로 짜지 말고 작은 조각부터 만들어라"라고 풀어서 말하는 대신, **"vertical slice"**라는 leading word를 쓴다. 이는 개발자들에게 이미 익숙한 용어라 에이전트의 사전 지식(prior)을 자극한다.
- 이 기법이 통했는지는 추론 과정(reasoning trace)에서 확인할 수 있다. 스킬에 "vertical slice"를 넣으면 에이전트가 "이걸 얇은 vertical slice로 하겠다"는 식으로 그 표현을 반복하고, 실제로 더 나은 구현 계획을 내놓는다.
- 조언: 스킬 안에서 leading word를 일관되게 사용하고, 추론 흔적에서 그 단어가 실제로 채택되는지 지켜봐라. 영어는 폭넓은 "API"라서 leading word 후보는 많고, 에이전트 자신도 좋은 후보를 함께 생각해 줄 수 있다.
- 두 번째 스티어링 레버는 **단계별 레그워크(legwork) 조절**이다. 에이전트가 특정 단계에 충분한 노력을 들이지 않는 경우가 있다. 대표적 사례가 **plan mode**다. plan mode는 보통 ① 명확화 질문하기, ② 계획 작성하기 두 단계로 되어 있는데, 어떤 구현에서든 "명확화 질문하기" 단계가 충분한 레그워크를 하지 않는다. 에이전트는 최종 목표(계획 작성)를 이미 알고 있기 때문에 질문을 대충 몇 개만 하고 서둘러 계획을 만들어 버린다.
- 해결책: plan mode를 통째로 쓰는 대신, "명확화 질문하기" 단계를 **grill with docs**라는 별도 스킬로 분리한다. 에이전트는 그 단계에 있는 동안 전체 프로세스 중 그 부분만 보게 되고, grill with docs가 끝난 뒤에야 "2 PRD" 스킬로 넘어간다. 즉 단계 ①과 ②는 존재하지만 에이전트는 한 번에 한 단계만 본다.
- 이렇게 **미래 단계를 숨기면 현재 단계에 대한 레그워크가 늘어난다.** 항상 스킬을 단계별로 쪼갤 필요는 없지만, 특정 단계에서 추가 노력이 꼭 필요할 때 이보다 효과적인 기법은 없다고 강조한다.

### 4. Pruning — sediment, crud, no-op 제거하기
가지치기(pruning)는 스킬이 비대해지는 여러 실패 유형을 빠르게 훑는 단계다. 거대한 스킬(massive skill)은 그 자체로 문제라기보다 아래 실패 유형 중 하나의 **증상**인 경우가 많다.
1. **중복(don't repeat yourself)**: 스킬의 모든 부분은 단일한 정보원(single source of truth)을 가져야 한다. PRD 템플릿처럼 큰 것이든 "test seam이 무엇인가" 같은 작은 것이든, 같은 내용이 여러 곳에 반복되거나 같은 단계가 여러 군데서 다뤄지지 않도록 해야 한다.
2. **침전물(sediment)**: 여러 사람이 같은 마크다운 파일에 계속 자기 내용을 추가하면서, 남의 내용을 지우거나 고칠 용기는 없어 결국 관련 없거나 제대로 정리되지 않은 내용이 쌓이는 현상이다. 침전물이 많은 스킬은 먼저 **구조(structure)**부터 다시 봐야 한다 — 특정 브랜치에만 관련 있으면 그 브랜치로 옮기고, 완전히 무관하면 삭제하며, 완전히 낡았으면(stale) 그냥 죽여버려야(kill) 한다.
3. **노옵(no-op)**: 에이전트가 스킬을 직접 작성했을 때 흔히 생기는 문제로, 겉보기엔 뭔가 하는 것 같지만 실제로는 에이전트 행동에 아무 영향을 주지 않는 부분이다. 예: implement 스킬 안에 "커밋 메시지를 길고 자세하게 써라"는 문단이 통째로 있다고 하자. 이 문단을 지워도 에이전트는 어차피 비슷하게 좋은 커밋 메시지를 쓸 가능성이 높다 — 즉 이 문단은 no-op이다. 발표자는 스킬을 그렇게 작게 유지하는 비결이 바로 이런 **삭제 테스트(deletion test)**, leading words로의 압축, 무관한 내용·침전물을 남기지 않는 것이라고 말한다.

### 체크리스트 정리와 자료 위치
정리하면 다음 4단계를 스킬에 대해 점검한다.
1. Trigger — 올바른 시점에 발동되는가, 컨텍스트 부하와 인지 부하 중 무엇을 감수하는가
2. Structure — 브랜치를 고려했는가, steps와 reference로 나뉘어 있는가, 한 브랜치에만 관련된 자료는 메인 skill.md 밖에 있는가
3. Steering — 텍스트를 leading words로 압축했는가, 추론 흔적에서 그 단어가 나타나는지 확인했는가, 미래 단계를 숨겨 레그워크를 늘릴지 검토했는가
4. Pruning — 침전물(sediment), 잡동사니(crud), 특히 no-op을 걷어내는 마지막 점검을 했는가

이 프레임워크를 시작하는 가장 좋은 방법은 발표자의 skills 저장소("book of skills")에 있는 **writing great skills** 스킬을 내려받아, 자기 스킬을 개선하거나 새 스킬을 쓰는 데 쓰는 것, 또는 커뮤니티가 만든 스킬을 이 스킬로 점검해 실제로 쓸 만한지 확인하는 것이다.

## 예시

### Trigger / Structure / Steering / Pruning 체크리스트 표

| 항목 | 핵심 질문 | 기법 | 강연 속 예시 |
| --- | --- | --- | --- |
| Trigger | 스킬을 누가/언제 호출하는가 | user-invoked vs model-invoked 결정, 컨텍스트 부하 vs 인지 부하 트레이드오프 | "grill me"(`disable model invocation: true`, 사용자에게만 노출) vs "code base design"(description이 에이전트 컨텍스트에 노출) |
| Structure | 스킬 내부를 어떻게 구성하는가 | steps + reference 분리, 브랜치 전용 reference는 external reference(컨텍스트 포인터)로 분리 | "2 PRD"(브랜치 1개, reference 모두 skill.md 안) vs "domain modeling"(브랜치 2~3개, ADR/context.md 템플릿을 외부 파일로 분리) |
| Steering | 에이전트가 원하는 대로 움직이는가 | leading words를 반복 사용, 미래 단계를 숨겨 현재 단계의 legwork를 늘림 | leading word "vertical slice"; plan mode를 "grill with docs" → "2 PRD" 두 스킬로 분리 |
| Pruning | 불필요한 것을 제거했는가 | 중복 제거(single source of truth), sediment 제거, no-op 삭제(deletion test) | 커밋 메시지 관련 문단을 지워도 행동이 안 바뀌면 no-op |

### skill.md 브랜치 분리 예시 (2 PRD vs domain modeling)

```
[2 PRD] — 브랜치 1개
skill.md
 ├─ steps: ① 관련 컨텍스트 찾기 → ② test seam 확인 → ③ PRD 작성
 └─ reference (모두 skill.md 안에 유지):
     - test seam이란 무엇인가
     - PRD 템플릿

[domain modeling] — 브랜치 2~3개
skill.md (작게 유지)
 ├─ branch A: context.md(로컬 용어집) 갱신 ─▶ external reference ─▶ context.md 템플릿(별도 파일)
 ├─ branch B: ADR(아키텍처 결정 기록) 작성 ─▶ external reference ─▶ ADR 템플릿(별도 파일)
 └─ branch C: 둘 다 하지 않음(템플릿 불필요)
```

## 요약
- 스킬이 자유롭게 넘쳐나지만 좋고 나쁨을 가릴 공유된 기준이 없는 상태를 발표자는 **스킬 헬(Skill Hell)**이라 부른다(튜토리얼 헬 → 프레임워크 헬 → 스킬 헬로 이어지는 계보). 이를 해결하려고 Trigger·Structure·Steering·Pruning 4단계 체크리스트를 제시한다.
- **Trigger**: 스킬은 user-invoked(사용자가 직접 호출) 또는 model-invoked(description이 컨텍스트 포인터가 되어 에이전트가 스스로 호출)로 나뉜다. model-invoked가 늘수록 에이전트의 **컨텍스트 부하**가, user-invoked가 늘수록 **사용자의 인지 부하**가 커진다 — 둘 다 비용이 있어 쉬운 정답은 없다. (발표자 자신의 스킬은 user-invoked 위주로 통제권을 유지하는 쪽, "superpowers"는 model-invoked 위주.)
- **Structure**: 스킬은 **steps**(단계)와 **reference**(참고 자료) 두 단위로 구성하고, skill.md는 최대한 작게 유지한다. 스킬이 여러 **브랜치**로 쓰인다면 특정 브랜치에만 필요한 reference는 skill.md 밖의 **external reference**(컨텍스트 포인터로 연결된 별도 파일)로 분리한다.
- **Steering**: **leading words**(예: "vertical slice")를 스킬 텍스트에 반복 배치해 에이전트가 추론 과정에서 그 단어를 재사용하도록 유도한다. 또한 plan mode처럼 특정 단계의 노력(legwork)이 부족할 때는 미래 단계를 숨기도록 스킬을 여러 개(예: "grill with docs" → "2 PRD")로 쪼개면 현재 단계에 더 집중시킬 수 있다.
- **Pruning**: 중복 제거(single source of truth), 여러 사람이 계속 덧붙여 쌓이는 **sediment** 정리, 실제로는 에이전트 행동에 영향을 주지 않는 **no-op** 제거(삭제 테스트로 확인)를 통해 스킬을 계속 작게 유지한다.
- 이 프레임워크 전체는 발표자의 skills 저장소에 있는 **writing great skills** 스킬로 실제 구현되어 있으며, 자신의 스킬을 개선하거나 커뮤니티 스킬의 품질을 점검하는 데 바로 사용할 수 있다.
