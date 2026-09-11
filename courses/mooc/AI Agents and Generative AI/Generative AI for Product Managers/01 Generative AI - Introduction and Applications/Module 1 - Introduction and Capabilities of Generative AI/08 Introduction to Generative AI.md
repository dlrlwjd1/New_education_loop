# 08 Introduction to Generative AI (생성형 AI 소개)

## 개요
- Lesson 2 "Generative AI and Its Capabilities"의 첫 영상
- 목표: 생성형 AI(generative AI)를 정의하고 그 진화 과정을 설명하며, **판별형 AI(discriminative AI)와의 차이**를 이해하기

## 내용

### AI의 기본 정의와 학습
- AI(Artificial Intelligence) = **인간 지능을 기계로 시뮬레이션(simulation)**하는 것
- AI 모델은 방대한 기존 데이터로부터 학습하며, 이 과정을 **훈련(training)**이라 부름

### 두 가지 근본적인 AI 접근법
**1. 판별형 AI (Discriminative AI)**
- 서로 다른 데이터 클래스(class)를 **구분(distinguish)**하도록 학습
- 각 데이터 포인트에 클래스 레이블이 붙은 훈련 데이터를 사용
- 새 데이터 포인트가 **결정 경계(decision boundary)**의 어느 쪽에 속하는지로 클래스를 예측
- 패턴 식별·분류·결론 도출에 강함
- 예시: **이메일 스팸 필터** — 스팸/비스팸 이메일을 구분
- 분류(classification) 작업에 가장 적합. 다만 맥락(context)을 이해하거나 맥락적 이해에 기반해 새 콘텐츠를 생성하지는 못함

**2. 생성형 AI (Generative AI)**
- 훈련 데이터를 바탕으로 **새로운 콘텐츠를 생성**하도록 학습
- 훈련 데이터의 근본적인 분포(underlying distribution)를 포착해 **새로운 데이터 인스턴스**를 생성
- **프롬프트(prompt)**에서 시작 — 텍스트·이미지·비디오 등 모델이 처리할 수 있는 모든 입력이 프롬프트가 될 수 있음
- 출력: 텍스트·이미지·오디오·비디오·코드·데이터 등 새로운 콘텐츠
- 프롬프트와 **같은 형태**(text-to-text)로 출력하거나, **다른 형태**(text-to-image, image-to-video 등)로 출력 가능

### 판별형 vs 생성형 예시
- 판별형 AI 질문: "이 그림은 둥지(nest)인가 알(egg)인가?" (분류)
- 생성형 AI 요청: "알 3개가 들어있는 둥지 그림을 그려줘" (생성)
- 판별형 AI = 분석·예측 능력을 모방, 생성형 AI = 한 걸음 더 나아가 **창의적 능력(creative skills)**을 모방
- Harvard Business Review 인용: "AI는 분석·의사결정 능력을 향상시킬 뿐 아니라 창의성도 높일 수 있다"

### 딥러닝이라는 공통 기반
- 판별형·생성형 모델 모두 **딥러닝(deep learning)** 기법으로 만들어짐
- 딥러닝 = 인공 신경망(artificial neural network)을 방대한 데이터로 훈련하는 것
- 인공 신경망 = 인간 뇌의 정보 처리 방식을 모사한 작은 연산 단위(뉴런)들의 집합
- 생성형 AI의 창의적 능력은 다음 모델들에서 비롯: **GAN(생성적 적대 신경망)**, **VAE(변분 오토인코더)**, **트랜스포머(Transformer)**, **디퓨전 모델(Diffusion Model)** — 이들이 생성형 AI의 빌딩 블록(building blocks)

### 생성형 AI의 역사 — 타임라인
- **1950년대 말**: 머신러닝 제안 시점부터 이미 알고리즘으로 새 데이터를 만드는 아이디어 존재
- **1990년대**: 신경망의 부상 → 생성형 AI 발전에 활력
- **2010년대 초**: 딥러닝 + 대용량 데이터 + 강력한 컴퓨팅 파워 → 생성형 AI 추가 발전
- **2014년**: Ian Goodfellow 등이 **GAN** 도입 → 생성형 AI의 전환점, 이후 VAE·트랜스포머와 함께 파운데이션 모델·도구 성장의 토대 마련
- **파운데이션 모델(Foundation Models)**: 특정 용도에 맞게 조정(adapt)해 더 전문화된 모델·도구를 만들 수 있는, 폭넓은 역량을 가진 AI 모델
- **대규모 언어 모델(LLM)**: 파운데이션 모델 중 인간 언어를 이해하고 텍스트를 생성/처리하도록 훈련된 카테고리
- **2018년**: OpenAI가 트랜스포머 기반 LLM **GPT**(Generative Pre-trained Transformer) 발표
- 이후 GPT-3/GPT-4, Google의 **PaLM**(Pathways Language Model), Meta의 **LLaMA** 등이 텍스트 생성 품질을 크게 향상
- 이미지 생성: **Stable Diffusion**, **DALL-E**

### 도구 생태계 (용도별)
- 텍스트 생성: ChatGPT, Gemini
- 이미지 생성: DALL-E 2, MidJourney
- 비디오 생성: Synthesia
- 코드 생성: Copilot, AlphaCode

### 경제적 영향
- McKinsey 보고서 인용: 생성형 AI는 **개별 근로자의 활동 일부를 자동화**해 역량을 증강(augment)시킴으로써 **일의 본질(anatomy of work)** 자체를 바꿀 잠재력이 있음
- 생산성에 대한 영향으로 세계 경제에 **수조 달러(trillions of dollars)** 규모의 가치를 더할 것으로 전망

## 요약
- **판별형 AI**(분류·예측, 결정 경계 기반) vs **생성형 AI**(프롬프트 기반, 새 콘텐츠 창조) — 둘 다 딥러닝/신경망 기반이지만 목적이 다름
- 생성형 AI의 빌딩 블록: **GAN · VAE · 트랜스포머 · 디퓨전 모델**
- 역사: 1950년대 머신러닝 태동 → 1990년대 신경망 → 2010년대 딥러닝 → 2014년 GAN → 2018년 GPT → 현재의 멀티모달 생성형 AI 도구 생태계
- McKinsey 전망처럼, 생성형 AI는 일의 방식 자체와 세계 경제에 수조 달러급 영향을 줄 잠재력이 있음
