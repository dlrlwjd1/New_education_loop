# Don't Ship Skills Without Evals

## 개요
- 업로드일: 2026-07-14
- 원본: https://www.youtube.com/watch?v=0vphxNt4wyk
- 채널: AI Engineer
- 발표자: Philipp Schmid (Google DeepMind, Staff Engineer)
- 발표자 참고 자료: [Practical Guide to Evaluating and Testing Agent Skills](https://www.philschmid.de/testing-skills), [8 Tips for Writing Agent Skills](https://www.philschmid.de/agent-skills-tips)
- 핵심 주제: agent skill을 몇 번의 수동 실행만으로 배포해서는 안 된다. 스킬의 트리거·결과·효율을 측정하는 작은 평가 하니스(eval harness)를 만들고, 실패 사례를 회귀 테스트로 축적해야 신뢰할 수 있는 스킬을 운영할 수 있다.

## 내용

### 스킬은 많지만 테스트는 거의 없다
Agent skill은 모델을 재학습하지 않고 지침·스크립트·참고 자료를 제공해 에이전트의 능력과 행동을 확장한다. 만들고 공유하기 쉬워 빠르게 늘어났지만, 상당수는 AI로 생성된 뒤 몇 번의 "vibe check"만 거쳐 배포된다.

코드를 테스트 없이 배포하지 않듯, 스킬도 eval 없이 배포해서는 안 된다. 스킬은 자연어 Markdown처럼 보여도 에이전트가 언제 호출되고 무엇을 실행하는지 바꾸는 **실행 가능한 동작 계층**이기 때문이다.

### 스킬의 세 층과 두 유형
스킬은 progressive disclosure 구조를 가진다.

1. **Frontmatter** — `name`과 `description`. 항상 context에 들어가며 스킬을 호출할지 결정하는 trigger다.
2. **SKILL.md 본문** — 호출된 뒤 읽는 작업 지침이다.
3. **Resources** — 필요할 때만 읽는 `scripts/`, `references/`, `assets/` 등이다.

평가 관점에서는 두 유형을 구분해야 한다.

- **Capability skill**: 기본 모델이 일관되게 하지 못하는 능력을 보완한다. 모델이 발전하면 더 이상 필요하지 않을 수 있다.
- **Preference skill**: 조직이나 개인의 작업 방식·규칙을 인코딩한다. 오래 유지될 수 있지만 실제 프로세스와 계속 일치하는지 검사해야 한다.

### 먼저 성공을 측정 가능하게 정의한다
eval을 작성하기 전에 "이 스킬이 성공했다는 것은 무엇인가"를 관찰 가능한 결과로 정의한다. 에이전트는 예상하지 못한 올바른 경로를 찾을 수 있으므로 내부 진행 방식보다 **결과(outcome)**를 평가한다.

평가 차원은 크게 세 가지다.

- **결과**: 코드가 실행되는가, 파일이 만들어졌는가, API가 유효한 응답을 주는가.
- **스타일과 지침 준수**: 올바른 SDK·모델·명명 규칙·출력 형식을 사용했는가.
- **효율**: 불필요한 재시도, 과도한 token 사용, command thrashing 없이 완료했는가.

같은 결과를 내도 한 실행이 세 배의 token을 썼다면 그것 역시 비용 회귀(regression)다.

### 1단계 — 수동 실행으로 실패 지점을 찾는다
처음부터 거대한 자동 평가 체계를 만들 필요는 없다. 스킬을 명시적으로 호출해 여러 번 실행하면서 숨은 가정을 찾는다.

- 설치되지 않은 dependency가 있다고 가정하는가.
- 경로나 실행 환경을 잘못 전제하는가.
- 사용자가 기대하는 단계를 건너뛰는가.
- 관련 없는 요청에서도 스킬이 호출되는가.

수동 실행에서 발견한 각 실패와 수정 사항이 이후 자동 check의 후보가 된다. 초기 수동 검증은 버려지는 작업이 아니라 eval dataset을 만드는 과정이다.

### 2단계 — 작고 다양한 prompt set을 만든다
한 스킬은 10~20개 prompt로 시작해도 충분하다. 각 test case는 prompt와 함께 고유한 성공 기준을 가져야 한다.

```json
{
  "id": "negative_unrelated",
  "prompt": "CSV를 읽어 막대그래프를 그려줘",
  "should_trigger": false,
  "expected_checks": []
}
```

prompt set에는 다음 범주가 필요하다.

- 대표적인 정상 사용 사례
- 오래된 API·금지된 방식 같은 guardrail 사례
- 본문 예시 밖의 확장 기능
- 관련 있어 보이지만 호출하면 안 되는 **negative case**
- 모호한 요청과 edge case

특히 negative test가 없으면 description이 지나치게 넓어져 모든 작업을 가로채는 스킬을 만들 수 있다. 스킬이 해야 할 일뿐 아니라 **하지 않아야 할 일**도 평가해야 한다.

### 3단계 — 실제 agent harness를 실행한다
사용자가 스킬을 경험하는 것과 같은 CLI·agent harness에서 prompt를 실행하고 결과를 구조화해 수집한다.

- 최종 응답과 생성 파일
- 종료 코드와 오류
- 사용 token과 실행 시간
- 스킬 호출 여부
- 도구 사용 기록

각 실행은 깨끗한 환경에서 격리한다. 이전 test의 파일이나 context가 다음 test에 남으면 실제로는 실패할 동작을 우연히 통과시킬 수 있다.

### 4단계 — 결정적 검사를 우선한다
검사 가능한 것은 regex, parser, compiler, test command, 파일 존재 여부 같은 deterministic check로 평가한다.

예를 들어 API 스킬이라면 다음을 기계적으로 확인할 수 있다.

- 올바른 SDK를 import했는가.
- deprecated model ID를 사용하지 않았는가.
- 요구한 API method를 호출했는가.
- multi-turn에 필요한 식별자를 전달했는가.

결정적 검사는 빠르고 저렴하며 결과를 설명하기 쉽다. check ID를 registry에 등록하면 test case가 필요한 검사만 선택해 실행할 수 있다.

### 5단계 — 정성적 결과에만 LLM-as-judge를 쓴다
디자인 품질, 코드 구조, 명명, 글의 명확성처럼 규칙만으로 판정하기 어려운 결과에는 LLM-as-judge를 추가할 수 있다. 이때 자유 형식 평문 대신 typed schema를 사용해 차원별 pass 여부, 점수, 근거를 구조화한다.

LLM judge는 비용과 변동성이 있으므로 deterministic check로 해결 가능한 문제까지 맡기지 않는다. **결정적 검사 우선, 정성적 판단 보완**이 기본 원칙이다.

### 한 번의 성공보다 분포를 본다
Agent 실행은 비결정적이다. 같은 prompt가 한 번 성공했다고 신뢰할 수 있는 스킬이 되는 것은 아니다.

- test case마다 3~5회 실행한다.
- 단일 pass/fail보다 성공률과 실패 유형의 분포를 본다.
- 여러 agent harness에서 쓴다면 각 환경에서 따로 평가한다.
- 모델이나 harness version을 바꿀 때 동일 suite를 다시 실행한다.

스킬 자체뿐 아니라 모델·도구·실행 환경과의 조합이 실제 제품이므로, 한 환경의 결과를 다른 환경에 그대로 일반화하면 안 된다.

### 실패가 스킬을 개선하는 방법
평가 결과가 나쁘면 지침을 무작정 늘리기 전에 description부터 확인한다. 발표자가 소개한 Gemini Interactions API skill 사례에서는 다음 두 변경이 특히 효과적이었다.

1. API 내부 용어보다 **사용자 의도**에 맞게 description을 다시 작성한다.
2. "이 방식이 권장된다"는 수동적 정보 대신 "항상 이 method를 사용하라"는 명시적 directive를 쓴다.

공식 사례에서는 약 20개 test case를 반복하며 pass rate를 66.7%에서 100%로 높였고, description 수정만으로도 여러 trigger 실패가 해결됐다. 긴 설명보다 정확한 trigger와 행동을 바꾸는 짧은 지침이 더 중요하다.

### Capability eval에서 regression eval로
초기의 capability eval은 현재 실패하는 사례를 일부 포함해야 개선할 언덕(hill)을 제공한다. 스킬을 고쳐 높은 성공률에 도달하면 그 사례들은 이후 변경이 기존 동작을 깨지 않도록 지키는 regression test가 된다.

운영 흐름은 다음과 같다.

```text
실제 실패 발견
  → 재현 prompt와 성공 기준 추가
  → 스킬 수정
  → 전체 eval suite 반복 실행
  → 통과하면 regression test로 유지
```

스킬 변경은 기존 eval을 악화시키지 않고 새 실패 사례를 개선할 때만 병합하는 CI 방식으로 관리할 수 있다.

### 스킬 없이도 평가한다
Capability skill은 모델이 발전하면서 가치가 사라질 수 있다. 같은 eval suite를 **스킬을 로드한 조건과 로드하지 않은 조건**에서 실행한다.

- 스킬이 있을 때만 성능이 좋아지면 유지할 가치가 있다.
- 양쪽 결과가 같다면 스킬이 불필요한 context와 유지보수 비용만 만들 수 있다.
- 스킬 없이 더 낫다면 스킬이 오히려 최신 모델을 방해하고 있을 수 있다.

Eval은 스킬을 개선할 시점뿐 아니라 **폐기할 시점**도 알려준다.

## 예시

### 최소 eval harness 구조
```text
evals/
├── prompts.json          # prompt, should_trigger, expected_checks
├── run_agent.py          # 실제 CLI/harness 실행과 결과 수집
├── checks.py             # regex, parser, compile/test 등 결정적 검사
├── judge.py              # 필요한 정성 평가만 담당
└── results/              # 모델·harness·skill version별 실행 결과
```

### 평가 설계 체크리스트
| 영역 | 확인할 질문 |
| --- | --- |
| Trigger | 사용해야 할 prompt에서 호출되고, negative prompt에서는 호출되지 않는가? |
| Outcome | 생성물이 실제로 실행·사용 가능한가? |
| Compliance | 필수 지침을 지키고 deprecated 방식은 피했는가? |
| Efficiency | 불필요한 token·재시도·도구 호출이 없는가? |
| Stability | 같은 test를 여러 번 실행해도 충분한 성공률을 보이는가? |
| Portability | 다른 모델이나 harness에서도 같은 가치를 주는가? |
| Increment | 스킬이 없는 baseline보다 실제로 나아지는가? |

## 요약
- Agent skill은 에이전트 행동을 바꾸는 실행 가능한 계층이므로 코드처럼 테스트해야 한다. 몇 번의 수동 vibe check만으로 배포해서는 안 된다.
- Eval은 결과·지침 준수·효율을 측정하며, 에이전트가 선택한 경로보다 사용 가능한 결과를 평가한다.
- 10~20개의 작은 prompt set으로 시작하고 정상·edge·negative case를 함께 넣는다.
- 실제 harness의 격리된 환경에서 실행하고, 비결정성을 고려해 test별로 3~5회 반복해 성공률 분포를 본다.
- regex·compiler·test command 같은 deterministic check를 우선하고, 정성적 품질에만 구조화된 LLM-as-judge를 사용한다.
- 실패가 발견될 때마다 재현 test를 추가해 capability eval을 regression suite로 성장시킨다.
- 많은 문제는 긴 본문보다 부정확한 `description`과 약한 directive에서 발생한다. 사용자 의도에 맞는 trigger부터 고친다.
- 스킬을 제거한 baseline도 측정해야 한다. 모델 자체가 같은 일을 잘하게 됐다면 capability skill을 폐기하는 것이 더 낫다.
