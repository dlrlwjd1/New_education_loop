# 01 Glossary: Generative AI: Introduction and Applications (용어집)

## 개요
- 이 코스 전체에서 쓰인 핵심 용어를 알파벳순으로 정리한 용어집 — 영상에 나오지 않은 추가 용어도 포함

## 내용

| 용어 (Term) | 정의 (Definition) |
|---|---|
| **Data augmentation** (데이터 증강) | 머신러닝·딥러닝에서 훈련 데이터의 다양성과 양을 늘리기 위해 흔히 쓰는 기법 |
| **Deep learning** (딥러닝) | 인공 신경망을 이용해 데이터로부터 작업을 학습하도록 컴퓨터를 훈련시키는 머신러닝의 하위 분야 |
| **Diffusion model** (디퓨전 모델) | 이미지 합성 등 고품질 샘플 생성에 널리 쓰이는 생성 모델. 이미지에 점진적으로 노이즈를 추가한 뒤 그 노이즈를 제거하는 법을 학습시키는 방식(diffusion)으로 훈련됨 |
| **Discriminative AI** (판별형 AI) | 서로 다른 데이터 클래스를 구분하는 AI 유형 |
| **Discriminative AI models** (판별형 AI 모델) | 훈련 데이터에서 관찰한 패턴을 바탕으로 식별·분류하는 모델. 일반적으로 예측·분류 작업에 사용 |
| **Foundation models** (파운데이션 모델) | 특정 사용 사례에 맞게 더 전문화된 모델·도구로 조정(adapt)할 수 있는, 폭넓은 역량을 가진 AI 모델 |
| **Generative adversarial network (GAN)** (생성적 적대 신경망) | 생성기(generator)와 판별기(discriminator) 두 신경망으로 구성된 생성 모델. 생성기는 방대한 데이터로 훈련되어 텍스트·이미지 같은 샘플을 만들고, 판별기는 그것이 진짜인지 가짜인지 구분하려 함 |
| **Generative AI** (생성형 AI) | 텍스트·이미지·오디오·비디오 등 새로운 콘텐츠를 만들 수 있는 AI 유형 |
| **Generative AI models** (생성형 AI 모델) | 훈련 데이터의 패턴과 근본 구조를 분석해 완전히 새롭고 독창적인 콘텐츠를 생성하는 모델. 일반적으로 자동화된 콘텐츠 제작과 대화형 커뮤니케이션에 사용 |
| **Generative pre-trained transformer (GPT)** | OpenAI가 개발한 대규모 언어 모델 계열로, 트랜스포머 아키텍처를 사용하며 방대한 텍스트 데이터로 사전훈련되어 인간과 유사한 언어를 이해·생성 |
| **Large language models (LLMs)** | 방대한 텍스트 데이터로 훈련되어 언어의 패턴·구조를 학습하는 딥러닝 모델 유형. 텍스트 생성·번역·요약·감성 분석 등 언어 관련 작업 수행 가능 |
| **Machine learning** (머신러닝) | 컴퓨터가 훈련 데이터로부터 학습해 예측·결정을 내릴 수 있게 하는 알고리즘·모델을 만드는 데 초점을 둔 AI 유형 |
| **Multimodal AI** (멀티모달 AI) | 텍스트·이미지·오디오·비디오 등 다양한 입력을 처리하고, 이를 다른 형식으로 변환할 수 있는 AI 프로그램 |
| **Natural language processing (NLP)** (자연어 처리) | 컴퓨터가 인간의 언어(자연어)를 이해·조작·생성할 수 있게 하는 AI 분야 |
| **Neural networks** (신경망) | 인간 뇌의 구조와 기능에서 영감을 받은 계산 모델. 딥러닝·AI의 근본적인 구성 요소 |
| **Prompt** (프롬프트) | 새로운 콘텐츠를 생성하도록 생성형 AI 모델을 안내하는 입력값 — 텍스트 지시, 질문, 이미지, 오디오 등 |
| **Training data** (훈련 데이터) | 머신러닝 모델을 가르치는 데 사용되는 데이터(일반적으로 예시가 포함된 대규모 데이터셋) |
| **Transformers** (트랜스포머) | 셀프 어텐션(self-attention) 메커니즘으로 순차 데이터를 처리하도록 설계된 딥러닝 아키텍처. 일관되고 맥락에 맞는 텍스트·멀티미디어를 생성하는 현대 LLM의 근본적인 기반 |
| **Variational autoencoder (VAE)** (변분 오토인코더) | 입력 데이터를 더 작은 공간으로 인코딩했다가 다시 원래 공간으로 디코딩하는 방식으로 효율적인 데이터 표현을 학습하도록 설계된 신경망 기반 생성 모델 |

## 요약
- 이 용어집은 Module 1~2에서 다룬 핵심 개념(생성형 vs 판별형 AI, GAN·VAE·트랜스포머·디퓨전 모델, LLM/GPT, 프롬프트, 파운데이션 모델 등)을 한 곳에 압축 정리한 참고 자료
- 특히 [08 Introduction to Generative AI](../Module%201%20-%20Introduction%20and%20Capabilities%20of%20Generative%20AI/08%20Introduction%20to%20Generative%20AI.md), [10 Capabilities of Generative AI](../Module%201%20-%20Introduction%20and%20Capabilities%20of%20Generative%20AI/10%20Capabilities%20of%20Generative%20AI.md)에서 다룬 개념들과 1:1로 대응됨 — 용어가 헷갈릴 때 되돌아와 확인하기 좋은 레퍼런스
