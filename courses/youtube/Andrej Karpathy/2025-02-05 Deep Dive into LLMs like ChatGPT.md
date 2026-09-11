# Deep Dive into LLMs like ChatGPT

## 개요
- 영상: [Deep Dive into LLMs like ChatGPT](https://www.youtube.com/watch?v=7xTGNNLPyMI)
- 채널: Andrej Karpathy
- 업로드일: 2025-02-05
- 길이: 3:31:23
- 핵심 주제: ChatGPT 같은 LLM이 어떻게 만들어지고, 어떻게 동작하며, 왜 강력하면서도 위험한 sharp edge를 갖는지 일반 청중도 이해할 수 있게 설명하는 긴 강의.

## 내용

### 1. LLM은 여러 단계의 pipeline으로 만들어진다
Karpathy는 ChatGPT를 하나의 마법 같은 textbox로 보지 말고, 여러 단계로 만들어진 시스템으로 이해하라고 설명한다.

큰 흐름은 다음과 같다.

1. 인터넷과 공개 텍스트 수집
2. 데이터 정제와 filtering
3. tokenization
4. next-token prediction 기반 pretraining
5. supervised fine-tuning
6. preference/reinforcement learning
7. tool use, safety, deployment layer

### 2. Pretraining은 인터넷 규모의 텍스트 압축이다
Pretraining의 첫 단계는 인터넷에서 대량의 고품질 텍스트를 모으는 것이다. Karpathy는 Hugging Face의 FineWeb 같은 공개 dataset을 예로 들며, 실제 LLM 기업들도 내부적으로 유사한 pipeline을 운영한다고 설명한다.

목표는 단순히 많은 데이터를 모으는 것이 아니라, 다양하고 품질 높은 문서를 대량으로 확보하는 것이다. 중복, 낮은 품질, spam, 깨진 문서를 제거해야 한다.

### 3. Text는 token으로 바뀐다
LLM은 글자를 그대로 다루지 않고 token sequence를 다룬다. Tokenizer는 text를 token ID의 sequence로 바꾸고, 모델은 이 token ID를 입력으로 받는다.

Tokenization은 겉보기보다 중요하다. 공백, 대소문자, 낯선 단어, 코드, 숫자, 다른 언어가 어떻게 token으로 쪼개지는지에 따라 모델의 효율과 행동이 달라질 수 있다.

### 4. 기본 학습 목표는 next-token prediction이다
Pretraining의 핵심 objective는 context token들이 주어졌을 때 다음 token을 맞히는 것이다.

모델은 수많은 문서에서 token window를 보고, 다음 token의 probability distribution을 예측한다. 틀리면 weight가 조금 수정되고, 이 과정을 수조 token 규모로 반복한다.

이 단순한 목표를 충분히 큰 scale에서 수행하면 grammar, world knowledge, reasoning pattern, code pattern 같은 능력이 emergent하게 생긴다.

### 5. Base model은 assistant가 아니다
Pretraining된 base model은 인터넷 문서의 continuation machine에 가깝다. 질문에 친절히 답하는 assistant가 되려면 후속 단계가 필요하다.

Supervised fine-tuning은 사람이 만든 instruction-answer 예시를 사용해 모델을 assistant처럼 대화하게 만든다. 이후 preference learning 또는 RLHF/RLAIF 계열 방법으로 더 선호되는 답변을 하도록 조정한다.

### 6. LLM은 memory가 아니라 context window로 작동한다
모델 자체는 입력을 받아 출력을 계산하는 거대한 함수에 가깝다. 대화에서 "기억"처럼 보이는 것은 대부분 context window에 이전 대화가 들어 있기 때문이다.

Context window 밖으로 나간 정보는 모델이 현재 계산에서 직접 볼 수 없다. 그래서 긴 작업에서는 context management, summarization, retrieval, external memory가 중요해진다.

### 7. Sampling은 답변의 다양성을 만든다
모델은 다음 token 하나를 deterministic하게 고르는 것이 아니라 probability distribution에서 sample할 수 있다. Temperature, top-k, top-p 같은 sampling 설정은 답변의 다양성과 안정성에 영향을 준다.

낮은 temperature는 더 보수적이고 반복 가능한 답변을, 높은 temperature는 더 다양하지만 불안정한 답변을 만든다.

### 8. LLM에는 sharp edge가 있다
Karpathy는 LLM이 매우 강력하지만 여러 취약점이 있다고 설명한다.

- hallucination
- confident wrong answer
- prompt injection
- jailbreak
- context에 없는 사실 추측
- tool use 실패
- long-context에서의 누락
- safety와 alignment 문제

LLM은 "생각하는 사람"이라기보다 token generator와 post-training된 assistant behavior가 결합된 시스템으로 봐야 한다.

### 9. Tool use와 agent는 모델 바깥 시스템까지 포함한다
ChatGPT 같은 제품은 단순 LLM 호출 하나가 아니다. 검색, code execution, file reading, function calling, memory, policy layer 같은 여러 system component가 함께 작동한다.

따라서 모델 성능뿐 아니라 harness, tool, retrieval, UI, safety guardrail이 최종 사용자 경험을 결정한다.

## 예시

### LLM 생성 pipeline
```text
raw internet text
  -> filtering / deduplication
  -> tokenizer
  -> token sequence
  -> pretraining
  -> base model
  -> supervised fine-tuning
  -> preference training / RLHF
  -> assistant product
```

### LLM을 사용할 때 기억할 점
```text
- 모델은 다음 token을 예측하는 방식으로 학습됐다.
- assistant behavior는 post-training으로 만들어진다.
- context window가 현재 작업 기억이다.
- tool use는 모델 자체가 아니라 system design의 일부다.
- 중요한 사실은 source나 tool로 확인해야 한다.
```

## 요약
- LLM은 인터넷 텍스트를 token sequence로 바꾸고 next-token prediction으로 pretrain된다.
- Base model은 assistant가 아니며, instruction tuning과 preference training을 거쳐 assistant가 된다.
- Context window는 LLM의 작업 기억처럼 작동하지만 영구 기억은 아니다.
- Sampling 설정은 답변의 다양성과 안정성을 바꾼다.
- LLM 제품은 모델, tool, retrieval, safety, UI가 결합된 시스템이다.
- Hallucination, prompt injection, jailbreak 같은 sharp edge를 이해하고 사용해야 한다.
