# Advanced technologies: Beyond prompting quiz

## 개요
- 이 퀴즈는 Week 2의 고급 기술인 RAG, fine-tuning, pretraining, reasoning engine 개념을 점검한다.
- 핵심 구분은 "정보를 검색해 프롬프트에 제공하는 RAG"와 "모델을 추가 데이터로 학습시키는 fine-tuning", 그리고 "처음부터 모델을 학습시키는 pretraining"이다.
- LLM을 지식 저장소가 아니라, 제공된 정보를 처리하는 추론 엔진(reasoning engine)으로 이해하는 관점이 중요하다.

## 내용

### Question 1
**문제**  
True or False. Because of the knowledge cut-off, an LLM cannot answer questions about today's news. But with RAG to supply it articles from the news, it would be able to.

**선택지**
- True
- False

**정답: True**

**해설**  
LLM은 지식 컷오프 이후의 최신 뉴스를 기본적으로 알지 못할 수 있다. 하지만 RAG를 사용해 관련 뉴스 기사를 프롬프트의 맥락으로 제공하면, LLM은 그 기사를 읽고 질문에 답할 수 있다.

### Question 2
**문제**  
An ecommerce company is building a software application to route emails to the right department (Apparel, Electronics, Home Appliances, etc.) It wants to do so with a small, 1 billion parameter model, and needs high accuracy. Which of these is an appropriate technique?

**선택지**
- Fine-tune a 1 billion parameter model on around 1,000 examples of emails and the appropriate department.
- Fine-tune a 1 billion parameter model on around 1 billion examples of emails and the appropriate department.
- Pretrain a 1 billion parameter model on around 1 billion examples of emails and the appropriate department.
- Pretrain a 1 billion parameter model on around 1,000 examples of emails and the appropriate department.

**정답: Fine-tune a 1 billion parameter model on around 1,000 examples of emails and the appropriate department.**

**해설**  
이메일을 부서로 라우팅하는 작업은 특정 분류 작업이다. 작은 모델을 높은 정확도로 특정 작업에 맞추려면, 수백~수천 개 정도의 예시로 fine-tuning하는 것이 적절하다. Pretraining은 모델을 처음부터 학습시키는 매우 비싼 과정이므로 이런 애플리케이션에는 보통 적합하지 않다.

### Question 3
**문제**  
True or False. By making trusted sources of information available to an LLM via RAG, we can reduce the risk of hallucination.

**선택지**
- True, because RAG allows the LLM to reason through accurate information retrieved from a trusted source to arrive at the correct answer.
- True, because the LLM is now restricted to outputting paragraphs of text exactly as written in the provided document, which we trust.
- False, because giving the LLM more information only confuses the LLM more and causes it to be more likely to hallucinate.
- False, because the LLM has learned from a lot of text from the internet (perhaps >100 billion words) to hallucinate, so adding one more short piece of text to the prompt as in RAG won't make any meaningful difference.

**정답: True, because RAG allows the LLM to reason through accurate information retrieved from a trusted source to arrive at the correct answer.**

**해설**  
RAG는 신뢰할 수 있는 출처에서 관련 정보를 검색해 LLM에 제공한다. LLM이 정확한 정보를 바탕으로 답하도록 하므로 환각 위험을 줄일 수 있다. 단, LLM이 반드시 원문 문단을 그대로만 출력하도록 제한되는 것은 아니다.

### Question 4
**문제**  
What does the idea of using an LLM as a reasoning engine refer to?

**선택지**
- This refers to the idea of using an LLM not as a source of information, but to process information (wherein we provide it the context it needs, through techniques like RAG).
- The idea of using an LLM to play games (like chess) that require complex reasoning, but having its output moves in the game.
- Reasoning engine is another term for RAG.
- This refers to pre-training an LLM on a lot of text so that it acquires general reasoning capabilities.

**정답: This refers to the idea of using an LLM not as a source of information, but to process information (wherein we provide it the context it needs, through techniques like RAG).**

**해설**  
LLM을 reasoning engine으로 쓴다는 것은 LLM 자체를 정보 저장소로 보는 것이 아니라, 필요한 맥락을 제공했을 때 그 정보를 읽고 처리해 답을 도출하는 엔진으로 보는 것이다. RAG는 이런 관점을 구현하는 대표적인 방법이다.

### Question 5
**문제**  
You want to build an application to answer questions based on information found in your emails. Which of the following is the most appropriate technique?

**선택지**
- Prompting (without RAG), where we iteratively refine the prompt until the LLM gets the answers right.
- RAG, where the LLM is provided additional context based on retrieving emails relevant to your question.
- Fine-tuning an LLM on your emails, whereby we take a pre-trained LLM and further train it on your emails.
- Pretraining an LLM on your emails.

**정답: RAG, where the LLM is provided additional context based on retrieving emails relevant to your question.**

**해설**  
이메일에 포함된 정보를 근거로 질문에 답해야 하므로, 질문과 관련된 이메일을 검색해 LLM에 맥락으로 제공하는 RAG가 가장 적절하다. 단순 prompting은 이메일 내용을 제공하지 않으면 답할 수 없고, fine-tuning이나 pretraining은 이 목적에 비해 부적절하거나 과도하다.

## 예시

### 핵심 기술 구분
| 기술 | 핵심 아이디어 | 적합한 상황 |
|------|------|------|
| Prompting | 프롬프트를 개선해 LLM 응답을 유도 | 간단한 지시, 빠른 실험 |
| RAG | 관련 정보를 검색해 프롬프트에 추가 | 문서, 이메일, 최신 뉴스 기반 질의응답 |
| Fine-tuning | 추가 예시 데이터로 모델을 조정 | 특정 분류 작업, 특정 출력 스타일, 작은 모델 성능 향상 |
| Pretraining | 모델을 처음부터 대규모 데이터로 학습 | 매우 많은 데이터와 자원이 있는 특수한 경우 |

### 정답 요약
| 문항 | 정답 |
|------|------|
| Q1 | True |
| Q2 | Fine-tune a 1 billion parameter model on around 1,000 examples |
| Q3 | True, trusted source 기반 RAG는 환각 위험을 줄일 수 있음 |
| Q4 | LLM을 정보 출처가 아니라 정보를 처리하는 reasoning engine으로 사용 |
| Q5 | RAG |

## 요약
- 최신 뉴스나 이메일처럼 LLM이 기본적으로 알지 못하는 정보를 기반으로 답하려면 RAG가 적합하다.
- 작은 모델을 특정 분류 작업에 높은 정확도로 맞추려면 fine-tuning이 적절하다.
- Pretraining은 매우 비싸고 큰 자원이 필요하므로 일반 애플리케이션에서는 보통 피한다.
- RAG는 신뢰할 수 있는 정보를 제공해 LLM이 추론하도록 하므로 환각 위험을 줄이는 데 도움이 된다.
