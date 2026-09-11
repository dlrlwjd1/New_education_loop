# 13 Expert Viewpoints: Exploring the Evolution of Generative AI (전문가 관점 — 생성형 AI의 진화)

## 개요
- 전문가들이 생성형 AI의 **진화 과정**과 **전통적 AI와의 차이**를 설명하는 영상
- [08 Introduction to Generative AI](08%20Introduction%20to%20Generative%20AI.md)·[09 Podcast](09%20Podcast%20-%20History%20and%20Evolution%20of%20Generative%20AI.md)의 역사를 기술적 계보(rule-based → ML → 딥러닝 → GAN/VAE → 트랜스포머) 관점에서 다시 정리

## 내용

### 생성형 AI는 왜 "최근에" 뜬 것처럼 보이는가
- 생성형 AI는 AI와 함께 진화해왔지만, **20년 넘게 대중적으로 주목받지 못한 채(dormant) 존재**해왔음
- 최근 **GAN**과 **VAE(Variational Autoencoder)** 같은 기술의 등장으로 큰 관심을 받으며 산업의 미래처럼 여겨지게 됨
- 초기 생성형 AI 모델은 **일관성(coherence)과 품질(quality)** 면에서 다소 부족했으나, **GPT-3 → GPT-4**, **DALL-E**를 거치며 매우 정교한 텍스트·이미지를 만들어냄

### 기술 계보 (진화 단계)
1. **규칙 기반(rule-based) 시스템** — 주어진 맥락 안에서 규칙만 따름
2. **머신러닝·통계 모델** — 데이터셋에서 패턴을 발견 (지도/준지도/강화학습 포함) → 규칙 기반보다 더 지능적으로 동작
3. **VAE와 GAN**
   - VAE: 패턴을 학습해 **유사한 것**을 만들어냄
   - GAN: 두 모델이 경쟁(battle)하며 매우 사실적인 이미지·아트를 생성
4. **자기회귀 모델(Autoregressive models)** — 한 단계씩 순차적으로 생성 → 대화·글쓰기 등 언어 작업에 특히 적합
5. **딥러닝·신경망** — 더 정교한 방식으로 패턴을 발견하고, 비정형(unstructured) 데이터를 다룰 수 있게 됨
6. **GAN(Generative Adversarial Network)의 본격 등장** — 생성 작업과 새로운 데이터셋 생성의 새 시대를 엶
7. **LSTM·RNN(Recurrent Neural Network)** — 비정형 데이터·시계열(time series) 데이터를 다루는 데 더 발전된 방식 제공

### 생성형 AI vs 전통적(판별형) AI
- **전통적 AI**: 기존 데이터를 분석·예측하는 데 초점 — 분류(classification), 회귀(regression), 추천(recommendation) 작업
- **생성형 AI**: GAN과 트랜스포머(transformer)의 등장과 함께, 훈련 데이터와 유사한 **새로운 데이터**를 만들어냄
- AI는 지난 50~60년간 기본적인 수준에서 응용·예측 수준으로 성장해왔고, 생성형 AI는 그중에서도 **인간 수준의 품질(human-quality output)**을 생성하는 데 초점
- **2017년 논문 "Attention Is All You Need"** — 트랜스포머 아키텍처를 제시한 이 논문이 생성형 작업의 새로운 시대를 열었으며, 이후 다수의 GPT 계열 모델(오픈소스 커뮤니티 포함)의 토대가 됨
  - 핵심 아이디어: 거대한 데이터셋으로 **사전 훈련(pre-trained)**한 모델을 특정 작업에 맞게 쉽게 **미세조정(fine-tune)**할 수 있다는 것

### 핵심 차이 한 줄 요약
- **기존 AI**: 시키는 대로만 함 (follows instructions)
- **생성형 AI**: 스스로 새로운 것을 창조·발명함 (invents and creates on its own) — "차가운 AI 발명가(cold AI inventor)"에 비유

## 요약
- 생성형 AI는 하루아침에 등장한 게 아니라, **규칙 기반 → 머신러닝 → 딥러닝/신경망 → VAE/GAN → 자기회귀·트랜스포머**로 이어지는 수십 년간의 기술 계보 위에 있음
- 2017년 트랜스포머 논문("Attention Is All You Need")이 결정적 전환점 — **사전 훈련 + 미세조정** 패러다임으로 GPT 계열 모델들의 폭발적 발전을 이끔
- 전통적 AI(분석·예측)와 생성형 AI(창조)의 차이를 다시 한번 명확히 함 — [08 Introduction to Generative AI](08%20Introduction%20to%20Generative%20AI.md)의 판별형 vs 생성형 구분과 같은 맥락
