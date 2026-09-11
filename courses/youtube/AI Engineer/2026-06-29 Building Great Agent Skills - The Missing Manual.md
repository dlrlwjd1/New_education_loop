# Building Great Agent Skills - The Missing Manual

## 개요
- 원본: https://www.youtube.com/watch?v=UNzCG3lw6O0
- 채널: AI Engineer
- 발표자: Matt Pocock
- 핵심 주제: 좋은 agent skill을 만들기 위한 체크리스트는 trigger, structure, steering, pruning 네 가지로 정리할 수 있다.

## 내용
### skill hell
발표자는 tutorial hell, framework hell에 이어 skill hell이 생겼다고 말한다. skill은 많아졌지만 어떤 skill이 좋은지, 조직의 운영 절차를 어떻게 agent가 수행 가능한 skill로 바꿀지에 대한 공통 기준이 부족하다는 문제다.

### 1. Trigger
skill은 사용자가 직접 호출할 수도 있고, 모델이 description을 보고 자동으로 호출할 수도 있다. model-invocable skill은 description이 agent context에 들어가므로 context load와 cognitive load를 발생시킨다.

따라서 모든 skill을 자동 호출 가능하게 만들기보다, 언제 모델이 알아서 발견해야 하는지와 언제 사용자가 명시적으로 불러야 하는지 구분해야 한다.

### 2. Structure
skill은 크게 steps와 reference로 구성된다. steps는 agent가 따라야 할 절차이고, reference는 그 절차를 수행하는 데 필요한 template, 정의, 예시, 보조 자료다.

`SKILL.md`는 작게 유지하는 것이 좋다. 특정 branch에서만 필요한 reference는 main file에 넣지 말고, context pointer로 외부 reference file을 가리키게 한다.

### 3. Steering
발표자는 agent를 조종하는 핵심 기법으로 leading words를 소개한다. leading word는 짧지만 많은 의미를 담는 표현이다. 예를 들어 agent가 layer-by-layer로 구현하는 문제를 줄이고 싶다면 "vertical slice"라는 단어를 skill 안에서 일관되게 사용해 agent의 계획과 reasoning에 반복되도록 할 수 있다.

또 다른 steering 기법은 leg work를 늘리기 위해 미래 단계를 숨기는 것이다. 예를 들어 plan mode에서 "질문하기"와 "계획 만들기"를 한 skill에 두면 agent가 계획을 만들고 싶어 질문을 얕게 끝낼 수 있다. 이때 질문 전용 skill과 PRD 작성 skill을 분리하면 현재 단계의 집중도가 올라간다.

### 4. Pruning
좋은 skill은 작고 명확하다. 반복, sediment, no-op을 제거해야 한다.

sediment는 여러 사람이 같은 markdown에 계속 내용을 덧붙여 생긴 퇴적물이다. no-op은 있어 보이지만 agent 행동을 실제로 바꾸지 않는 문장이다. 삭제해도 행동이 거의 같다면 skill에서 제거할 후보가 된다.

## 예시
### skill checklist
- Trigger: 자동 호출이 필요한가, 사용자 호출이면 충분한가?
- Structure: steps와 reference가 분리되어 있는가?
- Branches: 특정 branch에서만 필요한 자료가 `SKILL.md` 밖에 있는가?
- Steering: 원하는 행동을 leading word로 압축했는가?
- Leg work: 현재 단계에 충분히 집중하도록 skill을 분리했는가?
- Pruning: 중복, 오래된 내용, no-op이 제거되었는가?

### leading word 예시
`vertical slice`는 단순히 "조금씩 구현하라"보다 더 강한 steering word가 될 수 있다. agent가 계획에서 해당 표현을 반복하면, 데이터베이스부터 프론트엔드까지 얇은 end-to-end 흐름을 먼저 구현하는 방향으로 움직일 가능성이 높아진다.

## 요약
- 좋은 skill은 자동 호출 여부와 context 비용을 의식해 trigger를 설계한다.
- `SKILL.md`는 작게 유지하고, branch-specific reference는 context pointer 뒤로 이동한다.
- leading words는 agent 행동을 압축적으로 조종하는 강력한 도구다.
- skill은 완성 후 pruning pass를 통해 중복, sediment, no-op을 제거해야 한다.
