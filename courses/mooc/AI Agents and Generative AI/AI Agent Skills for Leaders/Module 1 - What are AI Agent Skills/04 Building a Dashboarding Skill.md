# Building a Dashboarding Skill

## 개요
- 텍스트로 된 대화 내용을 "대시보드(dashboard)"라는 시각적으로 임팩트 있는 결과물로 바꿔주는 범용 스킬을 실제로 만들어보는 강의.
- 스킬은 매우 짧은 지시문(3단계)만으로도 강력한 결과를 낼 수 있음을 보여준다.

## 내용
### 왜 대시보드 스킬인가
- 대화에서 나온 텍스트 답변은 정보로서는 유용하지만 "와우(wow)" 임팩트가 부족하다.
- 대화의 어느 시점에서든 트리거할 수 있는 **범용 대시보드 스킬**을 만들면, 어떤 대화든 시각적으로 멋진 결과물로 변환할 수 있다.

### 스킬 구성 (name / description / instructions)
- **name**: `Dashboard It`
- **description**: "Use this skill anytime you need to build a dashboard or the user says 'dashboard it'."
  - 트리거 문구(hot word)를 명시적으로 넣어두면, 사용자가 그 문구를 말할 때 AI가 확실하게 이 스킬을 선택하게 만들 수 있다.
- **instructions** (3단계):
  1. 디자인 전에, 대화 전체를 되짚어 핵심 의도(core intent), 주요 개체(key entities), 가장 중요한 인사이트를 추출한다.
  2. 대시보드를 위한 **HTML + JavaScript**를 작성해, 대화 안에서 사용자가 미리보기(preview) 할 수 있는 아티팩트(artifact)로 만든다.
     - 즉, "웹페이지를 만들어라"는 뜻 — 사용자가 HTML/JS를 몰라도 되고 배포 방법도 몰라도 된다. 이 웹페이지는 공개되지 않고 사용자 개인용이다.
  3. 사용자가 대화 밖에서도 브라우저로 열 수 있도록, 대시보드를 다운로드하는 방법을 안내한다.
  - 추가로 "항상 이 HTML/JavaScript 산출물을 만들어라"는 출력 형식 리마인더를 덧붙여, 다른 형태로 엉뚱하게 출력되지 않게 못박는다.
  - (선택) 디자인 관련 세부 지침(원하는 스타일 등)을 추가로 넣으면 더 보기 좋은 대시보드가 나온다.

### 실습 결과
- ChatGPT에서 Skills → Create with editor로 위 내용을 그대로 복사해 등록.
- 예시 1: "평균 12살 남자아이는 팔굽혀펴기를 몇 개 할 수 있나?"라는 평범한 텍스트 답변 대화 뒤에 **"dashboard it"**이라고 말하면, "used the dashboard skill"이라는 표시와 함께 코드가 생성되고, Preview 버튼을 누르면 같은 정보가 훨씬 임팩트 있는 시각적 대시보드로 변환됨.
- 예시 2: 주성분 분석(PCA, principal component analysis) 개념에 대한 대화 뒤 "dashboard it" → 인터랙티브(interactive)하게 동작 원리를 보여주는 시각화가 생성됨.
- 실제 사례: 동료가 보이스카우트 배지 데이터를 이 스킬로 분석해 대원별 진행 상황과 다음 단계를 보여주는 멋진 대시보드를 만든 사례.

## 예시
```
Name: Dashboard It
Description: Use this skill anytime you need to build a dashboard or the user says "dashboard it".
Instructions:
1. Before designing, reflect on the full conversation and extract the core intent, key entities, and most important insights.
2. Write the HTML plus JavaScript for the dashboard as an artifact that the user can preview in the conversation.
3. Explain to the user how to download the dashboard so they can open it in their web browser outside of the conversation.
(Output) Always produce this HTML and JavaScript.
```

## 요약
- "그냥 텍스트일 뿐"인 스킬 지시문 몇 줄로, **어떤 대화든 인터랙티브한 웹 대시보드로 바꾸는 범용 스킬**을 만들 수 있다.
- 핵심은 3단계뿐: (1) 대화 핵심 추출 → (2) HTML+JS 아티팩트로 대시보드 생성 → (3) 다운로드 방법 안내.
- description에 트리거 문구("dashboard it")를 명시하면, AI가 그 표현을 인식해 스킬을 확실히 호출하게 만들 수 있다.
- 스킬을 만드는 목적: 평범한 결과물을 반복적으로 "와우" 포인트가 있는 결과물로 바꾸는 작업을 코드화(codify)해서 온디맨드로 재사용하는 것.
