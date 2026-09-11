# 08 Lab: Getting to Know Our AI Prompting Tool (실습 — 도구 익히기)

## 개요
- IBM **Generative AI Classroom** 인터페이스 자체를 익히는 20분 입문 실습 — 이후 이 코스의 모든 랩에서 반복 사용할 도구

### 학습 목표
- 채팅 히스토리·프롬프트 입력창·모델 선택 등 인터페이스 핵심 구성 요소 식별
- 채팅 이름 변경/삭제, 프롬프트 지시(instruction) 입력 같은 기본 조작 수행
- 간단한 프롬프트를 실행해보고 모델 응답 행동 관찰

## 내용

### 인터페이스 구성
- 상단 "Untitled chat" — 연필 아이콘으로 이름 변경 가능. 채팅이 여러 개 쌓이면 식별에 유용
- 좌측 햄버거 메뉴 — 채팅 목록, 삭제(휴지통 아이콘)
- 우측 상단 드롭다운 — 기본값 **GPT-5 Nano**, 다른 LLM으로 교체 가능
- **New Chat / Reset Chat(대화 초기화, 단 Prompt Instructions는 유지) / Duplicate** 아이콘

### PROMPT INSTRUCTIONS vs 일반 프롬프트 — 차이점
- **PROMPT INSTRUCTIONS**: 대화 전체에 일관되게 적용되는 맥락/행동 지시. 예: `Sound extra cheerful in your replies.`
- 이후 **Type your message**에 실제 질문 입력. 예: `List 10 people who contributed to the development of LLMs.`
- 지시를 프롬프트 안에 직접 포함시킬 수도 있지만, **PROMPT INSTRUCTIONS로 분리하면 매번 반복할 필요 없이 전체 대화에 일관 적용됨**. 반대로 **한 질문에만 한정하고 싶다면 프롬프트 텍스트 안에 직접 넣는 것이 유리**

### 실습 예시
- Prompt Instructions: `Talk to me like I'm a 5-year-old.`
- 이어서 어려운 질문: `How does Artificial Intelligence work?`, `What is the difference between Generative AI and traditional AI?`
- → 같은 질문이라도 Prompt Instructions에 따라 답변의 **톤과 눈높이**가 완전히 달라짐을 체험

## 요약
- 이 랩은 **도구 사용법 자체**가 핵심 — Prompt Instructions(대화 전체에 적용되는 맥락)와 개별 프롬프트(단발성 질문)를 구분해서 쓰는 것이 이후 모든 실습의 기초가 됨
- [06 What Is Prompt Engineering](06%20What%20Is%20Prompt%20Engineering.md)에서 배운 "맥락(Context)" 요소를 도구 차원에서 어떻게 구현하는지 보여주는 실습
