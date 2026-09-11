# 03 Course Glossary (코스 용어집)

## 개요
- "Generative AI: Prompt Engineering Basics" 코스 전반에서 사용된 전문 용어를 알파벳순으로 정리한 공식 용어집

## 내용

### 프롬프트 엔지니어링 핵심 개념
- **Prompt** — 생성형 AI 모델이 새로운 콘텐츠를 생성하도록 주는 지시나 질문
- **Prompt engineering** — 더 낫고 원하는 응답을 생성하도록 효과적인 프롬프트를 설계하는 과정
- **Input data** — 프롬프트의 일부로 제공되는 정보
- **Output indicator** — 모델이 생성한 출력의 속성을 평가하는 기준
- **Naive prompting** — 가능한 가장 단순한 방식으로 모델에 질의하는 것
- **Zero-shot prompting** — 특정 프롬프트에 대한 사전 훈련 없이도 의미 있는 응답을 생성하는 방법
- **Few-shot prompting** — 프롬프트에 시연(demonstration)을 제공해 모델의 성능을 이끄는 인컨텍스트 학습 방법

### 신뢰성 향상 6대 기법 (Module 2 관련)
- **Contextual guidance** — LLM이 관련성 있는 출력을 생성하도록 구체적 지시를 제공하는 기법
- **Domain expertise** — 의료·법률·공학 같은 전문 분야에서 도메인 특화 용어를 사용하는 기법
- **Bias mitigation** — 중립적 응답을 생성하도록 명시적 지시를 제공하는 기법
- **Framing** — LLM이 요구되는 경계 내에서 응답을 생성하도록 안내하는 기법
- **User feedback loop** — 사용자가 텍스트 프롬프트에 피드백을 주고, LLM의 응답을 바탕으로 반복적으로 정제하는 기법
- **Explainability** — 사용자가 모델의 의사결정 과정과 생성된 출력의 이유를 이해·해석할 수 있는 정도

### 프롬프트 엔지니어링 접근법
- **Interview pattern approach** — 대화나 인터뷰 스타일로 상호작용하도록 프롬프트를 설계하는 전략
- **Role-play/Persona pattern** — 캐릭터나 페르소나의 관점을 프롬프트 구성에 반영하는 형식
- **Chain-of-Thought** — 복잡한 작업을 더 간단한 프롬프트의 연속을 통해 작고 다루기 쉬운 단계로 분해하는 접근법
- **Tree-of-Thought** — 원하는 추론 방향을 명시하기 위해 프롬프트/질의를 계층적으로 구조화하는 접근법
- **Comparison prompting** — 모델에게 여러 출력을 나란히 평가해 어느 것이 더 낫거나 정확한지 판단하도록 요청하는 기법
- **Play-off method** — 동일 입력에 대해 여러 출력을 생성한 뒤 비교·평가해 최선의 응답을 선택/정제하는 프롬프팅 기법
- **Self-reflection prompting** — 모델이 자신의 출력을 검토·비평하도록 지시해 정확성·창의성을 높이는 기법 (Play-off method와 함께 쓰이는 경우가 많음)

### 멀티모달 관련
- **Multi-modal models** — 텍스트·이미지·오디오·비디오 등 여러 유형의 데이터를 처리·생성할 수 있는 AI 모델
- **Multi-modal prompts** — 텍스트·이미지·오디오 등 여러 형태의 입력을 포함해 AI 모델을 안내하는 프롬프트
- **Cross-modal understanding** — 서로 다른 유형의 입력을 연결·추론하는 AI의 능력(예: 이미지 정보로 텍스트 질문에 답하기)

### 도구·플랫폼
- **ChatGPT** — 자연어 입력에 상세한 응답을 제공하도록 설계된 언어 모델
- **Claude** — 작업을 돕는 강력하고 유연한 AI 챗봇
- **DALL-E / Midjourney / Stable Diffusion** — 텍스트로부터 이미지를 생성하는 텍스트-투-이미지 모델
- **IBM watsonx.ai** — 파운데이션 모델을 훈련·튜닝·배포·관리하는 통합 도구 플랫폼
- **OpenAI Playground** — GPT 등 OpenAI의 다양한 모델로 프롬프트를 실험·테스트하는 웹 기반 도구
- **Dust** — 프롬프트 작성과 체이닝을 위한 웹 UI를 제공하는 프롬프트 엔지니어링 도구
- **LangChain** — 프롬프트를 구축·체이닝하는 기능을 제공하는 Python 라이브러리
- **PromptBase** — 프롬프트를 사고파는 마켓플레이스
- **PromptPerfect** — 다양한 LLM/텍스트-투-이미지 모델용 프롬프트를 최적화하는 도구
- **Prompt lab** — 다양한 파운데이션 모델 기반으로 프롬프트를 실험·구축할 수 있는 도구
- **Scale AI** — 데이터 라벨링·주석 서비스를 전문으로 하는 기술 기업

### 기반 기술
- **Generative AI** — 텍스트·이미지·오디오·비디오 등 새로운 콘텐츠를 만들 수 있는 인공지능 유형
- **Generative AI models** — 입력 콘텐츠의 맥락을 이해해 새 콘텐츠를 생성하는 모델
- **Generative pre-trained transformers (GPT)** — 트랜스포머 아키텍처를 사용해 사람과 유사한 텍스트/콘텐츠를 생성하는 신경망 계열
- **Large language models (LLMs)** — 방대한 텍스트 데이터로 훈련되어 텍스트 생성·요약·번역·감성 분석 등을 수행하는 딥러닝 모델
- **Natural language processing (NLP)** — 컴퓨터가 인간 언어를 이해·조작·생성하도록 하는 AI 분야
- **StableLM** — 수조 개 토큰의 콘텐츠로 구성된 데이터셋 기반 오픈소스 언어 모델
- **API integration** — 서로 다른 소프트웨어 시스템/애플리케이션을 API로 연결해 함께 작동하고 데이터·기능을 공유하게 하는 과정
- **Integrated Development Environment (IDE)** — 언어 모델과 상호작용하는 프롬프트를 작성·실행하는 소프트웨어 도구

## 요약
- 이 용어집은 코스 전체(Module 1~3)에서 다룬 핵심 개념·기법·도구를 알파벳순으로 총정리한 참고 자료
- 특히 [12 Reading - The Playoff Method](../Module%202%20-%20Prompt%20Engineering%20-%20Techniques%20and%20Approaches/12%20Reading%20-%20The%20Playoff%20Method%20-%20A%20Powerful%20Tool%20in%20Prompt%20Engineering.md)에서 다루지 않았던 **Self-reflection prompting**, **Comparison prompting** 같은 관련 신규 개념도 확인 가능
- 시험 대비나 실무 적용 전 빠르게 개념을 재확인하는 용도로 활용
