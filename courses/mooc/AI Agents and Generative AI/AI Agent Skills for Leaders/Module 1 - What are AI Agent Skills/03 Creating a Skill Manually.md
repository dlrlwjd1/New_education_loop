# Creating a Skill Manually

## 개요
- 워드 문서(Word document) 하나로 스킬을 처음부터 수동으로 만들어보는 실습 강의.
- "Personal Performance Coach"라는 간단한 스킬을 예시로, ChatGPT에서 실제로 스킬을 등록하고 동작을 확인한다.

## 내용
### 스킬의 최소 구성 요소
스킬 문서는 다음 세 가지로 구성된다.
1. **name** — 스킬의 이름 (예: `Personal Performance Coach`)
2. **description** — 이 스킬을 **언제 사용해야 하는지**를 설명. AI 에이전트가 여러 스킬 중 어떤 것을 쓸지 판단하는 근거가 된다.
   - 예: "Use this skill to help the user identify strategic insights related to their work, professional career, etc."
3. **instructions** — 실제로 따라야 할 절차(process). 단계별로 명확하게 적는다.
   - 예시 절차:
     1. 사용자와 나눈 대화들을 되짚어 본다.
     2. 사용자가 아직 충분히 활용하지 못한, 스스로 인지하지 못한 패턴을 짚어준다.
     3. 이번 주에 시도해볼 수 있는 간단한 변화 하나를 제안한다.
     4. 그 변화의 진행 상황을 추적할 간단한 방법을 제안한다.
     5. 결과를 "무엇을(what)/왜(why)/어떻게(how)" 컬럼을 가진 표로 만들고, 다운로드 가능한 CSV로도 출력한다.

### ChatGPT에서 수동으로 스킬 만들기
1. 계정 메뉴 → **Skills** 클릭
2. 우측 상단 **New skill** 클릭
3. **Create with editor** 선택 (AI가 자동 생성하는 방식이 아니라, 사람이 직접 채워 넣는 방식)
4. Word 문서에 적어둔 name / description / instructions를 그대로 복사해서 붙여넣기
5. 저장(save)

### 동작 확인
- 새 대화에서 "이번 주에 시도할 전략적 변화 하나를 제안해줘" 같은 요청을 하면, ChatGPT가 프롬프트를 보고 **방금 만든 "Personal Coach" 스킬이 관련 있다고 스스로 판단**해 해당 스킬을 사용한다.
- description에 적어둔 "when to use" 조건과 실제 프롬프트 내용을 매칭해 스킬 사용 여부를 결정하는 것.
- 스킬 사용 결과: 숨겨진 패턴에 대한 인사이트 제시 → what/why/how 표 제공 → CSV 파일 생성까지, instructions에 적은 절차 그대로 수행됨.

### 스킬 작성 시 권장 워크플로
- **핵심은 텍스트일 뿐**: Word, Google Docs, 텍스트 파일 등 어디에든 "해야 할 일의 절차"를 적을 수 있다면 스킬을 만들 수 있다.
- 추천 방식:
  1. 사람이 먼저 앉아서 직접 초안을 작성(사람이 원하는 프로세스를 스스로 고민하며 뼈대를 잡음).
  2. 초안을 ChatGPT/Claude 같은 AI에게 주고 "이 스킬 초안을 개선해줘. 빠진 게 뭐야? 뭘 더 추가/제거/압축해야 할까?"라고 요청해 다듬는다.
  3. 사람이 쓴 매뉴얼을 AI와 함께 반복적으로 다듬는 과정 — 사람이 처음부터 끝까지 AI에게 자동 생성만 맡기는 것보다, **직접 초안을 잡고 iterate하는 방식**이 더 좋은 스킬을 만든다고 강조.

## 예시
- 스킬명: `Personal Performance Coach`
- description: "Use this skill to help the user identify strategic insights related to their work, professional career, etc."
- instructions: 대화 회고 → 숨은 패턴 짚기 → 이번 주 변화 제안 → 추적 방법 제안 → what/why/how 표 + CSV 출력

## 요약
- 스킬은 결국 **name + description(언제 쓸지) + instructions(어떻게 할지)**, 세 가지 텍스트 요소로 구성된다.
- ChatGPT의 "Create with editor"로 수동 등록하면, description을 근거로 AI가 관련 프롬프트에서 스킬을 자동으로 선택해 사용한다.
- 좋은 스킬은 AI에게 자동 생성을 맡기기보다, **사람이 초안을 쓰고 AI와 함께 반복적으로 다듬는 과정**에서 나온다.
