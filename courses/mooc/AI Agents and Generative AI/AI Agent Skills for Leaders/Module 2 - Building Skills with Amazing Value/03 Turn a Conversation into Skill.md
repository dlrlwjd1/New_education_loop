# Turn a Conversation into Skill

## 개요
- 스킬을 만드는 가장 좋은 방법 중 하나로, **"이미 문제를 잘 해결했던 실제 대화"에서 출발하는 방법**을 다루는 강의.
- 백지 상태에서 지시문을 처음부터 작성하는 대신, 성공적인 대화를 워크플로/품질기준/포맷 3가지 표로 "소화(digest)"한 뒤 스킬로 변환하는 절차를 소개한다.

## 내용
### 왜 대화에서 시작하는가
- 처음부터 지시문을 백지에서 쓰는 것도 방법이지만, **문제를 정말 원하는 방식대로 잘 풀어낸 대화**가 있다면 그 대화가 가장 좋은 출발점이다.
- 이유:
  1. 이미 AI와 함께 시행착오를 거쳐 **올바른 워크플로(workflow)**를 찾아냈다.
  2. 대화 속에서 암묵적/명시적으로 **원하는 결과의 핵심 품질(qualities)**이 드러나 있다.
  3. 원하는 **출력 포맷(format)**이 정확히 무엇인지 이미 대화에 나타나 있다 (예: 특정 컬럼의 CSV, 특정 톤의 이메일 등).
  4. **실제로 잘 풀린 예시(example)**를 그대로 스킬에 담을 수 있다.

### 대화를 3개의 표로 "소화"하는 방법
- 프롬프트: "Reflect on what we did in this conversation. Write three tables: (1) workflow, (2) key qualities/characteristics of the output, (3) format for the output."
- **표 1 — 워크플로**: 문제를 풀기 위해 실제로 밟았던 단계들.
  - 예시(강사의 MOOC 강좌 공지 이메일 작성 사례): 이전 공지 검토 → 새 코스/전문과정 콘텐츠 파악 → 새 콘텐츠를 기존 이메일 패턴에 매핑 → 강력한 핵심 후크(hook) 중심으로 재구성 → 나열식 항목을 청중 중심의 베네핏(benefit)으로 번역.
- **표 2 — 핵심 품질/특성**: 좋은 결과물이란 무엇인지에 대한 성공 기준(success criteria)을 명시적으로 적어야 AI가 워크플로를 실행하다 나쁜 결과를 내는 걸 방지할 수 있다.
  - 예시: 명확한 후크(hook), 청중 관련성(audience relevance), 베네핏 중심(benefit-driven), 원칙 중심(principle-focused), 자신감 있되 과장되지 않은 톤.
- **표 3 — 포맷**: 결과물이 어떤 형식으로 제시되어야 하는지.
  - 예시: 이메일에 `%name%` 같은 개인화 placeholder가 들어가야 한다는 것도 대화 분석을 통해 자동으로 발견됨.

### 표를 다듬고 스킬로 변환하기
- 표 내용이 마음에 들지 않으면 대화를 이어가며 직접 수정 가능.
- 만족스러우면: "Use AI, create — turn this into an AI agent skill using the skill creator"라고 요청.
  - ChatGPT, Claude, Magic 등 대부분의 도구에는 이런 **스킬 생성용 스킬(skill creation skill)**이 내장되어 있다.

### 대화 속 예시(example)를 스킬에 명시적으로 포함시키기
- 스킬에는 지시문뿐 아니라 **"잘 해결된 예시(examples of good work)"**가 포함되어야 한다는 것이 이후 강의에서 더 다뤄질 핵심 원칙.
- 방법: 스킬 생성을 요청할 때 "이 대화에 있던 샘플 공지문을 예시(examples)로 레퍼런스(reference)에 포함시켜서, 스킬이 이 예시를 참조하도록 해줘"라고 명시적으로 지시.
- 결과: AI가 좋은 결과물이 어떤 모습인지 헷갈릴 때, 스킬에 포함된 실제 예시를 참조할 수 있게 됨.

## 예시
- 프롬프트 1: "Reflect on what we did in this conversation. Write three tables: a workflow table, a key qualities table, and a format table."
- 프롬프트 2: "Turn this into an AI agent skill using the skill creator. Make sure to include the sample announcements in this conversation as examples in the reference. Have the skill refer to these examples."

## 요약
- 스킬을 만드는 가장 강력한 출발점은 **이미 잘 풀린 실제 대화**다.
- 대화를 워크플로 / 핵심 품질 / 출력 포맷, 3개의 표로 요약(digest)한 뒤 다듬고, Skill Creator로 스킬화한다.
- 대화 속 실제 결과물을 "예시(example)"로 스킬에 명시적으로 포함시키면, AI가 헷갈릴 때 참조할 기준이 생긴다.
- 실습 과제: 잘 풀렸던 대화를 하나 찾아 워크플로/품질/포맷 표로 정리하고 스킬로 변환해볼 것.
