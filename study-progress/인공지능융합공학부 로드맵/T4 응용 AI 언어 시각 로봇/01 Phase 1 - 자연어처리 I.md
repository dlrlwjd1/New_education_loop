# T4 Phase 1 — 자연어처리 I

> 학부 교과 **자연어처리 I(3학년 1학기, 이론실습병행 3학점)** · 선이수 = 신경망
> 교과목해설: "텍스트 데이터의 전처리, 언어 모델링, 문서 분류, 감정 분석 등 다양한 NLP 기법을 배우며, 실제 데이터에 적용하여 자연어 처리 시스템을 구축하는 방법을 익히게 된다"

- 목표: 텍스트를 모델이 먹을 수 있는 숫자로 바꾸고, 순서가 있는 데이터를 다루는 신경망을 이해한다.
- 분량: 약 16시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 토큰화·정규화·불용어 제거 등 전처리 단계를 목적에 맞게 고른다
- 원-핫 인코딩의 한계를 말하고, 왜 임베딩이 필요한지 설명한다
- Word2Vec·GloVe가 만드는 벡터 공간에서 유사도와 유추(analogy)가 무엇인지 안다
- RNN이 순서를 다루는 방식과 기울기 소실 문제를 설명한다
- GRU·LSTM이 무엇을 고치는지 게이트 구조로 말한다
- 양방향 RNN이 필요한 상황을 안다
- 단어 임베딩에 들어 있는 편향(bias)을 확인하고 완화 방법을 안다

## 1-A. 텍스트 데이터 다루기

메인: Data Analytics, `Course 4` module 01 — 웹에서 텍스트를 긁어 정제하는 부분. **모델 이전 단계**다

- [ ] [01 Welcome to Course 4.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/01%20Welcome%20to%20Course%204.md)
- [ ] [02 Module 1 Introduction.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/02%20Module%201%20Introduction.md)
- [ ] [03 The Many Sources of Data.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/03%20The%20Many%20Sources%20of%20Data.md)
- [ ] [04 Data Cleaning and Processing.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/04%20Data%20Cleaning%20and%20Processing.md)
- [ ] [05 ETL and ELT.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/05%20ETL%20and%20ELT.md)
- [ ] [06 Introduction to Web Scraping.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/06%20Introduction%20to%20Web%20Scraping.md)
- [ ] [07 Scraping Tables with Pandas.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/07%20Scraping%20Tables%20with%20Pandas.md)
- [ ] [08 String Methods Replace.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/08%20String%20Methods%20Replace.md)
- [ ] [09 Casting.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/09%20Casting.md)
- [ ] [10 Handling Missing Values.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/10%20Handling%20Missing%20Values.md)
- [ ] [11 String Methods Contains.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/11%20String%20Methods%20Contains.md)
- [ ] [12 String Methods Split and Strip.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/12%20String%20Methods%20Split%20and%20Strip.md)
- [ ] [13 Networking.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/13%20Networking.md)
- [ ] [14 Scraping Webpages with Requests.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/14%20Scraping%20Webpages%20with%20Requests.md)
- [ ] [15 HTML.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/15%20HTML.md)
- [ ] [16 Planning HTML Parsing.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/16%20Planning%20HTML%20Parsing.md)
- [ ] [17 Parsing HTML with Beautiful Soup.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/17%20Parsing%20HTML%20with%20Beautiful%20Soup.md)
- [ ] [18 DataFrame Setup.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/18%20DataFrame%20Setup.md)
- [ ] [19 Regular Expressions.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/19%20Regular%20Expressions.md)
- [ ] [20 Writing Regular Expressions with LLMs.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/20%20Writing%20Regular%20Expressions%20with%20LLMs.md)
- [ ] [21 The Ethics of Web Scraping.md](../../../courses/deeplearning-ai/Data%20Analytics/Course%204%20-%20Data%20IO%20and%20Preprocessing%20with%20Python%20and%20SQL/module%2001%20Web%20scraping%20and%20text%20processing/21%20The%20Ethics%20of%20Web%20Scraping.md)

## 1-B. 순환 신경망 (RNN)

메인: Deep Learning Specialization, `05 Sequence Models` week 1

- [ ] [01 Why Sequence Models.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/01%20Why%20Sequence%20Models.md)
- [ ] [02 Notation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/02%20Notation.md)
- [ ] [03 Recurrent Neural Network Model.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/03%20Recurrent%20Neural%20Network%20Model.md)
- [ ] [04 Backpropagation Through Time.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/04%20Backpropagation%20Through%20Time.md)
- [ ] [05 Different Types of RNNs.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/05%20Different%20Types%20of%20RNNs.md)
- [ ] [06 Language Model and Sequence Generation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/06%20Language%20Model%20and%20Sequence%20Generation.md)
- [ ] [07 Sampling Novel Sequences.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/07%20Sampling%20Novel%20Sequences.md)
- [ ] [08 Vanishing Gradients with RNNs.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/08%20Vanishing%20Gradients%20with%20RNNs.md)
- [ ] [09 Gated Recurrent Unit (GRU).md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/09%20Gated%20Recurrent%20Unit%20%28GRU%29.md)
- [ ] [10 Long Short Term Memory (LSTM).md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/10%20Long%20Short%20Term%20Memory%20%28LSTM%29.md)
- [ ] [11 Bidirectional RNN.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/11%20Bidirectional%20RNN.md)
- [ ] [12 Deep RNNs.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week1%20Recurrent%20Neural%20Networks/12%20Deep%20RNNs.md)

## 1-C. 단어 임베딩과 감정 분석

메인: Deep Learning Specialization, `05 Sequence Models` week 2. **학부 교과목해설의 "감정 분석"이 정확히 여기다**

- [ ] [01 Word Representation.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/01%20Word%20Representation.md)
- [ ] [02 Using Word Embeddings.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/02%20Using%20Word%20Embeddings.md)
- [ ] [03 Properties of Word Embeddings.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/03%20Properties%20of%20Word%20Embeddings.md)
- [ ] [04 Embedding Matrix.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/04%20Embedding%20Matrix.md)
- [ ] [05 Learning Word Embeddings.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/05%20Learning%20Word%20Embeddings.md)
- [ ] [06 Word2Vec.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/06%20Word2Vec.md)
- [ ] [07 Negative Sampling.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/07%20Negative%20Sampling.md)
- [ ] [08 GloVe Word Vectors.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/08%20GloVe%20Word%20Vectors.md)
- [ ] [09 Sentiment Classification.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/09%20Sentiment%20Classification.md)
- [ ] [10 Debiasing Word Embeddings.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week2%20NLP%20and%20Word%20Embeddings/10%20Debiasing%20Word%20Embeddings.md)

## 1-D. 언어 모델이 실제로 학습되는 방식 — 배경 영상

함께 보기 (선택): 저장소의 Andrej Karpathy 영상 노트. 강의는 아니지만 **토큰화와 언어 모델 학습의 실체**를 훑기에 좋다

- [ ] [2025-02-05 Deep Dive into LLMs like ChatGPT.md](../../../courses/youtube/Andrej%20Karpathy/2025-02-05%20Deep%20Dive%20into%20LLMs%20like%20ChatGPT.md)
- [ ] [2025-06-19 Software Is Changing Again.md](../../../courses/youtube/Andrej%20Karpathy/2025-06-19%20Software%20Is%20Changing%20Again.md)
- [ ] [2026-03-20 Skill Issue Code Agents AutoResearch and the Loopy Era.md](../../../courses/youtube/Andrej%20Karpathy/2026-03-20%20Skill%20Issue%20Code%20Agents%20AutoResearch%20and%20the%20Loopy%20Era.md)
- [ ] [2026-04-29 From Vibe Coding to Agentic Engineering.md](../../../courses/youtube/Andrej%20Karpathy/2026-04-29%20From%20Vibe%20Coding%20to%20Agentic%20Engineering.md)
- [ ] [2026-06-09 Stop Prompting Claude Use Karpathy Method.md](../../../courses/youtube/Andrej%20Karpathy/2026-06-09%20Stop%20Prompting%20Claude%20Use%20Karpathy%20Method.md)
- [ ] [2026-07-02 New AI Workflow and Omnipresent Claude.md](../../../courses/youtube/Andrej%20Karpathy/2026-07-02%20New%20AI%20Workflow%20and%20Omnipresent%20Claude.md)

## 산출물

감정 분석 모델 하나. 조건:

1. 전처리 단계를 함수로 분리하고, 각 단계를 **뺐을 때 성능이 어떻게 변하는지** 표로 남긴다
2. 임베딩을 직접 학습한 버전과 사전학습 임베딩을 쓴 버전을 비교
3. RNN·LSTM 중 하나 이상으로 구현
4. 틀린 예측 20건을 읽고 **왜 틀렸는지** 유형별로 분류

## 다음 단계

→ [02 Phase 2 - 자연어처리 II Transformer와 LLM](02%20Phase%202%20-%20%EC%9E%90%EC%97%B0%EC%96%B4%EC%B2%98%EB%A6%AC%20II%20Transformer%EC%99%80%20LLM.md)
