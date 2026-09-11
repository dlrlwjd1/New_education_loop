# 12 Common Prompt Engineering Tools (프롬프트 엔지니어링 도구들)

## 개요
- 프롬프트 엔지니어링 도구의 공통 기능과 대표 도구들의 역량을 다루는 영상 — NLP에 능숙하지 않아도 원하는 결과를 얻을 수 있도록 돕는 도구들

## 내용

### 프롬프트 엔지니어링 도구의 공통 기능
- 입력/원하는 출력을 바탕으로 **프롬프트 제안**
- 더 나은 맥락적 소통을 위한 **프롬프트 구조 제안**
- 초기 응답을 바탕으로 **반복적으로 프롬프트 정제**
- 생성형 AI 응답의 **편향(bias) 완화**를 돕는 기능
- 법률·의료·기술 등 **특정 도메인에 특화된 프롬프트** 생성 지원
- 다양한 유스케이스를 위한 **사전 정의된 프롬프트 라이브러리** 제공

### 대표 도구
- **IBM watsonx.ai** — 파운데이션 모델을 훈련·튜닝·배포·관리하는 통합 플랫폼. **Prompt Lab** 도구 포함 — 다양한 파운데이션 모델로 프롬프트를 실험. 요약·분류·생성·추출 등 유스케이스별 샘플 프롬프트 제공, 지시·예시를 추가해 모델을 원하는 응답 방식으로 훈련 가능
- **Spellbook**(Scale AI) — LLM 기반 애플리케이션을 만드는 IDE. 텍스트 생성·추출·분류·질의응답·자동완성·요약 등 프롬프트 실험 지원. 프롬프트 에디터, 프롬프트 템플릿, 사전 제작된 프롬프트 예시 제공
- **Dust** — 프롬프트를 작성하고 **체이닝(연결)**하는 웹 UI. 체인 프롬프트의 여러 버전 관리, LLM 출력을 처리하는 표준 블록 기반 커스텀 코딩 언어 제공, API 통합 지원
- **PromptPerfect** — 여러 LLM(GPT, Claude, StableLM, Llama)과 이미지 모델(DALL-E, Stable Diffusion)에 맞춰 프롬프트를 최적화. 모델별로 다른 최적화 전략 사용. **자동완성**, **Streamline 모드**(단계별로 작성→최적화→편집→재최적화를 반복)
- **GitHub** — 프롬프트 엔지니어링·LLM 관련 방대한 저장소(가이드·예시·도구)
- **OpenAI Playground** — GPT 등 OpenAI 모델로 프롬프트를 실험·테스트하는 웹 도구
- **Playground AI** — Stable Diffusion 모델로 이미지 생성 텍스트 프롬프트 실험
- **LangChain** — 프롬프트를 구축·체이닝하는 기능을 제공하는 **파이썬 라이브러리**
- **PromptBase** — 프롬프트 **마켓플레이스** — Midjourney, ChatGPT, DALL-E, Stable Diffusion, Llama 등 모델에 특화된 프롬프트를 사고팔 수 있음 (예: Midjourney용 만화 캐릭터 생성 프롬프트 구매). 프롬프트를 플랫폼에서 직접 만들어 판매도 가능

## 요약
- 프롬프트 엔지니어링 도구의 공통 기능: **제안 · 맥락 이해 지원 · 반복적 정제 · 편향 완화 · 도메인 특화 · 사전 정의 라이브러리**
- 목적별 분류: **모델 플랫폼**(watsonx.ai/Prompt Lab), **IDE형 개발 도구**(Spellbook, Dust), **최적화 도구**(PromptPerfect), **실험용 플레이그라운드**(OpenAI/Playground AI), **개발 라이브러리**(LangChain), **마켓플레이스**(PromptBase)
- [Course 1 Module 1 - 03 Course in Multiple Programs](../../01%20Generative%20AI%20-%20Introduction%20and%20Applications/Module%201%20-%20Introduction%20and%20Capabilities%20of%20Generative%20AI/03%20Course%20in%20Multiple%20Programs.md)에서 언급됐던 IBM watsonx, Spellbook, Dust 등의 도구가 여기서 구체적으로 설명됨
