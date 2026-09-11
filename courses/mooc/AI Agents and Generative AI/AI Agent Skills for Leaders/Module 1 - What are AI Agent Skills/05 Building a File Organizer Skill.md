# Building a File Organizer Skill

## 개요
- 스킬(skill)이 단순히 텍스트를 예쁘게 표현하는 것(대시보드)을 넘어, **실제 노동(labor)을 대신 수행**할 수 있음을 보여주는 강의.
- 이름 없는 스크린샷 더미를 AI가 내용을 이해해서 자동으로 이름을 바꾸고 폴더별로 정리해주는 "File Organizer" 스킬을 예시로 다룬다.

## 내용
### 문제 상황
- 강의 제작 중 찍은 스크린샷들이 촬영 시각으로만 이름 붙여져 폴더에 쌓임 → 이름만 봐서는 내용을 알 수 없고, 순서도 뒤죽박죽이라 정리가 매우 번거로움.

### 스킬 구성
- **name**: `Organize Files`
- **description**: "Use the skill when the user needs some files organized."
- **instructions** (process):
  1. 사용자의 핵심 목표와, 사용자가 파일을 어떻게 찾고 싶어 하는지를 파악한다.
  2. 파일을 열어보지 않아도 이해되는, 명확하고 일관된 **명명 규칙(naming scheme)**을 만든다.
  3. 가장 중요한 기준(dimension)을 우선으로 그룹화하는 논리적인 **폴더 구조**를 설계한다.
  4. 그 기준에 따라 모든 파일의 이름을 바꾸고 재배치하며, 중복·비일관성을 정리한다.
  5. 전체를 다운로드 가능한 하나의 **zip 압축 파일**로 패키징하고, 명명 규칙을 간단히 설명한다.

### 실습 결과
- 약 15개의 스크린샷을 ChatGPT에 업로드하고 "이 파일들을 내용과 어떤 AI 스킬 개념을 보여주는지에 따라 정리해줘"라고 요청.
- AI가 시간을 들여 파일 내용을 분석한 뒤 `organized_ai_skill_files.zip`을 생성.
- 압축 해제 결과, 다음과 같은 4개 폴더로 자동 분류됨:
  - 스킬 정의 및 지시문(skill definition and instructions)
  - 대화 속 스킬 사용(skill usage in chat)
  - 생성된 대시보드(generated dashboards)
  - 참고 예시(reference examples)
- 예: "03 generated dashboards" 폴더 안에 PCA 관련 스크린샷들이 모여 있음 — 파일명이 날짜뿐이었음에도, **AI가 스크린샷 이미지 자체(대시보드 화면)를 보고 내용을 이해해** 관련 파일들을 하나로 묶어냄.
- 팔굽혀펴기 벤치마크 스크린샷도 마찬가지로 내용을 인식해 이름을 바꾸고 재배치.
- 부가 산출물로 **readme.txt**가 함께 생성되어, 정리 로직(어떤 기준으로 분류했는지)을 설명해줌 — 이때 대화 중 다뤘던 AI 스킬 개념들에 대한 맥락(memory)까지 반영된 것으로 보임.

### 확장 가능성
- 스크린샷뿐 아니라 세금 관련 스캔 문서, 개인 예산 관련 영수증(사용자가 정의한 카테고리 기준), PDF, Word, Excel 파일 등 어떤 파일 묶음에도 동일한 방식 적용 가능.
- Magic이나 Claude Co-Work 같은 도구를 쓰면 zip 다운로드 없이 컴퓨터 폴더에서 직접 정리도 가능.

## 예시
```
Name: Organize Files
Description: Use the skill when the user needs some files organized.
Instructions:
1. Identify the user's core goal and how they'll want to find files.
2. Create a clear, consistent naming scheme that makes the files more understandable without opening them.
3. Design a logical folder structure that groups files by the most important dimension first.
4. Rename and organize all files accordingly, cleaning up inconsistencies and duplicates.
5. Package everything into a single downloadable zip archive and briefly explain the naming scheme.
```

## 요약
- 스킬은 텍스트를 "보기 좋게 만드는" 것을 넘어, **파일 이해 → 명명 → 폴더 구조 설계 → 정리 → 패키징**까지 실질적인 노동을 대신 수행하도록 만들 수 있다.
- 파일명이 아무 정보가 없어도, AI가 파일 내용(이미지 등) 자체를 분석해 의미 있는 분류를 해낼 수 있다는 점이 핵심 포인트.
- "AI가 노동력이고, 스킬은 그 노동력을 온디맨드로 끌어내는 관문(gateway)"이라는 것이 이 강의의 결론.
