# 11 Lab: Generate Text using Generative AI (실습 — 텍스트 생성)

## 개요
- IBM의 **Generative AI Classroom**(SN Labs) 도구를 이용한 15분 실습 (Ungraded App Item)
- 계정 생성 없이 브라우저에서 바로 여러 LLM과 채팅하며 프롬프트를 비교해볼 수 있는 학습용 샌드박스

### 학습 목표
- 생성형 AI 모델의 텍스트 생성 역량 탐색
- 원하는 콘텐츠를 얻기 위한 프롬프트 작성(prompting)
- 언어 모델을 이용한 생성 텍스트의 변환·수정

## 내용

### AI Classroom 도구 구성
- 화면 좌측: 실습 안내(instructions), 우측: 실제 채팅 인터페이스
- 사용법 4단계: **① 채팅 이름 짓기 → ② 모델 선택(예: GPT-5 Nano) → ③ Prompt Instructions에 맥락/지침 입력(대화 시작 후 수정 불가) → ④ 메시지 입력창에 프롬프트를 써서 대화**
- 여러 모델을 동시에 켜서 비교하는 "Compare Models" 기능도 제공

### Step 1 — 텍스트 생성 (원하는 맥락의 텍스트 만들기)
- 예시 프롬프트: `Write a short poem about the moon.`
- **Start chat**을 누르면 화면 중앙에 응답이 나타남
- 결과가 마음에 들지 않으면 **Regenerate response**로 재생성 가능

### Step 2 — 텍스트 형식 변환
- 같은 대화창에서 이어서 형식 변환 요청 가능
- 예시 프롬프트: `Convert this poem into a short story.`
- 방금 생성한 시(poem)를 짧은 이야기(story)로 변환

### Step 3 — 대화형(conversational) 능력 테스트
- 변환된 결과를 바탕으로 추가 요청 가능
- 예시 프롬프트: `Create a summary of this story.`
- 이전 응답들을 맥락으로 삼아 요약을 생성 — 생성형 AI가 **대화 맥락을 유지**하며 후속 질의에 응답함을 확인

### Step 4 — 직접 해보기
- 위 3단계 패턴(생성 → 변환 → 요약/추가 질의)을 자신만의 프롬프트로 반복 실습

## 요약
- 이 랩은 [10 Capabilities of Generative AI](10%20Capabilities%20of%20Generative%20AI.md)에서 배운 **텍스트 생성 역량**을 직접 체험하는 실습
- 핵심 흐름: **프롬프트로 생성 → 같은 대화에서 형식 변환 요청 → 이전 결과를 바탕으로 추가 질의(요약 등)** — 이 반복 대화 패턴이 생성형 AI의 **맥락 유지형 대화 능력**을 보여줌
- 결과가 만족스럽지 않으면 재생성(regenerate)하거나 프롬프트를 더 구체적으로 다듬는 것이 실무에서도 유효한 전략
