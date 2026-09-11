# AI Coding for Building Scripts

## 개요
- "코드를 짤 줄 몰라서 scripts 폴더를 못 만든다"는 걱정을 해소해주는 강의.
- 코드를 직접 짤 필요 없이, **AI에게 필요한 도구(스크립트)를 대신 작성하게 하고 이를 스킬에 패키징하는 방법**을 다룬다.

## 내용
### AI는 컴퓨팅 세계로의 번역가
- 사용자가 원하는 걸 말로 설명하면, AI가 그것을 코드로 **번역(translate)**해준다.
- 강사(오랜 소프트웨어 엔지니어링 강의·실무 경력자)는 "AI는 코드를 매우 잘 짠다(incredibly good at writing code)"고 단언 — 스킬에 넣을 스크립트 정도는 충분히 잘 작성한다.

### 스크립트 작성 요청 방법
- ChatGPT/Claude와의 대화에서 원하는 도구를 구체적으로 설명하면 된다.
- 예시 프롬프트: "Write a Python script that can take in a table of travel expenses in CSV format with name, vendor, amount, date, and category, and create a visualization of the amount split by category and vendor."
- 팁:
  - 특정 언어를 원하면 명시할 것 (강사는 기본적으로 **Python**을 권장).
  - 실제 다룰 파일이 있다면 프롬프트에 **직접 첨부**하고, "이 형식의 파일을 받아서 ~하는 스크립트를 써줘"라고 구체적으로 요청.
  - 코드 자체보다, **어떤 파일로 무엇을 하고 싶은지에 집중해서 설명**하면 된다.

### 생성된 스크립트를 스킬에 넣는 방법
- 방법 1: "이 도구를 스킬로 패키징해줘(use the skill creator skill to package this into a skill)"라고 요청 — 스킬 생성기가 코드 필요 여부까지 인식해서 처리해줌.
- 방법 2 (수동): "다운로드 링크를 줘"라고 요청 → 스크립트 파일을 받아서 직접 스킬 폴더의 `scripts/` 안에 저장.

### 스크립트 사용 지침(instructions)도 함께 받기
- 스크립트만 있어서는 부족하다. **"이 스크립트를 어떻게 쓰는지"에 대한 지침(instructions)도 SKILL.md에 포함**되어야 한다.
- 방법: "이제 이 스크립트 사용법에 대한 지침을 작성해줘"라고 요청 → AI가 사용법 목록을 작성 → 이를 SKILL.md에 복사/붙여넣기.
- 예: "만약 X를 해야 한다면, 경비 파일에서 시각화를 만드는 방법에 대한 이 지침을 읽어라" 같은 조건부 안내를 SKILL.md에 넣을 수 있음.

### 전체 워크플로 요약 (실전 절차)
1. 실제 다룰 파일(예: 엑셀 파일)을 AI에게 주고, 원하는 계산/처리를 시켜본다.
2. 그 계산을 "반복 가능하게" 만들기 위해 **스크립트로 작성**해달라고 요청한다.
3. 스크립트를 직접 실행해보게 하고 결과를 확인한다.
4. 마지막으로 "이제 이걸 스킬로 패키징해줘(agent skill creator)"라고 요청한다.
- 이는 앞서(Module 2) 다룬 "잘 풀린 대화에서 스킬을 시작하라"는 원칙과 동일한 흐름 — 여기서는 그 대화에 **계산/코드 작업**이 포함된 경우.

## 예시
- 프롬프트: "Write a Python script that can take in a table of travel expenses in CSV format with name, vendor, amount, date, and category, and create a visualization of the amount split by category and vendor."
- 후속 프롬프트: "Now write a set of instructions for how to use it." → 결과를 SKILL.md에 반영.

## 요약
- 스킬에 코드(scripts)가 필요하다고 해서 사용자가 직접 프로그래밍을 배울 필요는 없다 — **AI가 코드를 대신 작성**해준다.
- 절차: (1) 원하는 처리를 말로 설명 → (2) Python 스크립트 생성 요청 → (3) 스크립트 사용법(instructions)도 함께 요청 → (4) 스킬 생성기로 패키징하거나 수동으로 scripts 폴더에 저장.
- 핵심은 "무엇을, 어떤 파일로 하고 싶은지"를 구체적으로 설명하는 것이지, 코드 자체를 아는 것이 아니다.
