# T4 Phase 2 — 자연어처리 II (Transformer와 LLM)

> 학부 교과 **자연어처리 II(3학년 2학기, 이론실습병행 3학점)** · 선이수 = 자연어처리 I
> 교과목해설: "Transformer, BERT, GPT와 같은 최신 딥러닝 기반 언어 모델의 구조와 활용 방법을 학습한다. 또한 문장 생성, 기계 번역, 질의응답, 텍스트 요약 등 고급 NLP 기법을 실제 데이터에 적용하며, 다양한 자연어 처리 시스템을 설계하고 구현하는 방법을 익히게 된다"

- 목표: Transformer 구조를 설명할 수 있고, 사전학습 모델을 가져다 내 문제에 붙인다.
- 분량: 약 26시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 어텐션(attention)이 무엇을 계산하는지 Q·K·V로 설명한다
- 셀프 어텐션과 멀티헤드 어텐션의 차이, 위치 인코딩이 왜 필요한지 말한다
- 인코더 전용(BERT)·디코더 전용(GPT) 모델이 각각 어떤 작업에 맞는지 고른다
- 파인튜닝과 RAG 중 무엇을 쓸지 상황을 보고 판단한다
- 문서를 청크로 나누고 임베딩해 벡터 DB에 넣는다
- 검색된 문맥으로 답을 만들게 하고, **답이 문맥에 근거했는지** 평가한다
- Hugging Face에서 모델을 골라 로컬이나 서버에 올린다

> **이 Phase가 캡스톤과 가장 가깝다.** [T6 Phase 3(인공지능 서비스 개발 II)](../T6%20%EA%B8%B0%ED%9A%8D%20%ED%86%B5%ED%95%A9%20%ED%98%84%EC%9E%A5/03%20Phase%203%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%20II.md)의 에이전트가 이 위에 선다.

## 2-A. 어텐션과 Transformer

메인: Deep Learning Specialization, `05 Sequence Models` week 3~4

week 3 — seq2seq와 어텐션 메커니즘

- [ ] [01 Basic Models.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/01%20Basic%20Models.md)
- [ ] [02 Picking the Most Likely Sentence.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/02%20Picking%20the%20Most%20Likely%20Sentence.md)
- [ ] [03 Beam Search.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/03%20Beam%20Search.md)
- [ ] [04 Refinements to Beam Search.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/04%20Refinements%20to%20Beam%20Search.md)
- [ ] [05 Error Analysis in Beam Search.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/05%20Error%20Analysis%20in%20Beam%20Search.md)
- [ ] [06 Bleu Score.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/06%20Bleu%20Score.md)
- [ ] [07 Attention Model Intuition.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/07%20Attention%20Model%20Intuition.md)
- [ ] [08 Attention Model.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/08%20Attention%20Model.md)
- [ ] [09 Speech Recognition.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/09%20Speech%20Recognition.md)
- [ ] [10 Trigger Word Detection.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week3%20Sequence%20Models%20and%20Attention%20Mechanism/10%20Trigger%20Word%20Detection.md)

week 4 — Transformer 네트워크. **이 절이 Phase 2의 뿌리다**

- [ ] [01 Transformer Network Intuition.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week4%20Transformer%20Network/01%20Transformer%20Network%20Intuition.md)
- [ ] [02 Self-Attention.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week4%20Transformer%20Network/02%20Self-Attention.md)
- [ ] [03 Multi-Head Attention.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week4%20Transformer%20Network/03%20Multi-Head%20Attention.md)
- [ ] [04 Transformer Network.md](../../../courses/deeplearning-ai/Deep%20Learning%20Specialization/05%20Sequence%20Models/week4%20Transformer%20Network/04%20Transformer%20Network.md)

## 2-B. LLM이 동작하는 방식과 파인튜닝 vs RAG

메인: The Complete Agentic AI Engineering Masterclass (Udemy)

Section 3 — LLM은 어떻게 동작하는가

- [ ] [01 How LLM Process User Input.md](../../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%203%20-%20How%20LLM%20Works/01%20How%20LLM%20Process%20User%20Input.md)

Section 4 — 파인튜닝과 RAG의 선택

- [ ] [01 How RAG Works.md](../../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%204%20-%20Finetuning%20vs%20RAG/01%20How%20RAG%20Works.md)
- [ ] [02 When to use LLM Finetuning.md](../../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%204%20-%20Finetuning%20vs%20RAG/02%20When%20to%20use%20LLM%20Finetuning.md)

Section 5 — 오픈소스 LLM을 로컬에 올리기

- [ ] [01 Local LLM Deployment Strategy 1.md](../../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%205%20-%20Deploy%20Opensource%20LLM%20Locally/01%20Local%20LLM%20Deployment%20Strategy%201.md)
- [ ] [02 Local LLM Deployment Strategy 2.md](../../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%205%20-%20Deploy%20Opensource%20LLM%20Locally/02%20Local%20LLM%20Deployment%20Strategy%202.md)

Section 7 — Hugging Face 생태계

- [ ] [01 Huggingface AI Models Repository.md](../../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%207%20-%20Hugging%20Face%20Ecosystem/01%20Huggingface%20AI%20Models%20Repository.md)
- [ ] [02 Huggingface Opensource Finetuning Datasets.md](../../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%207%20-%20Hugging%20Face%20Ecosystem/02%20Huggingface%20Opensource%20Finetuning%20Datasets.md)
- [ ] [03 Huggingface Spaces.md](../../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%207%20-%20Hugging%20Face%20Ecosystem/03%20Huggingface%20Spaces.md)

## 2-C. RAG 시스템 만들기

메인: Retrieval Augmented Generation (DeepLearning.AI). **학부 교과목해설의 "질의응답·텍스트 요약"을 실제로 구현하는 부분**

- [ ] [01 A Conversation with Andrew Ng.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2001/01%20A%20Conversation%20with%20Andrew%20Ng.md)
- [ ] [02 Module 1 Introduction.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2001/02%20Module%201%20Introduction.md)
- [ ] [03 Introduction to RAG.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2001/03%20Introduction%20to%20RAG.md)
- [ ] [04 Applications of RAG.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2001/04%20Applications%20of%20RAG.md)
- [ ] [05 RAG Architecture Overview.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2001/05%20RAG%20Architecture%20Overview.md)
- [ ] [06 Introduction to LLMs.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2001/06%20Introduction%20to%20LLMs.md)
- [ ] [07 Introduction to Information Retrieval.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2001/07%20Introduction%20to%20Information%20Retrieval.md)
- [ ] [01 Module 2 Introduction.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/01%20Module%202%20Introduction.md)
- [ ] [02 Retriever Architecture Overview.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/02%20Retriever%20Architecture%20Overview.md)
- [ ] [03 Metadata Filtering.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/03%20Metadata%20Filtering.md)
- [ ] [04 Keyword Search - TF-IDF.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/04%20Keyword%20Search%20-%20TF-IDF.md)
- [ ] [05 Keyword Search - BM25.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/05%20Keyword%20Search%20-%20BM25.md)
- [ ] [06 Semantic Search - Introduction.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/06%20Semantic%20Search%20-%20Introduction.md)
- [ ] [07 Semantic Search - Embedding Model Deepdive.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/07%20Semantic%20Search%20-%20Embedding%20Model%20Deepdive.md)
- [ ] [08 Hybrid Search.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/08%20Hybrid%20Search.md)
- [ ] [09 Evaluating Retrieval.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/09%20Evaluating%20Retrieval.md)
- [ ] [01 Module 3 Introduction.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2003/01%20Module%203%20Introduction.md)
- [ ] [02 Approximate Nearest Neighbors (ANN).md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2003/02%20Approximate%20Nearest%20Neighbors%20%28ANN%29.md)
- [ ] [03 Vector Databases.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2003/03%20Vector%20Databases.md)
- [ ] [04 Chunking.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2003/04%20Chunking.md)
- [ ] [05 Advanced Chunking Techniques.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2003/05%20Advanced%20Chunking%20Techniques.md)
- [ ] [06 Query Parsing.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2003/06%20Query%20Parsing.md)
- [ ] [07 Cross-encoders and ColBERT.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2003/07%20Cross-encoders%20and%20ColBERT.md)
- [ ] [08 Reranking.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2003/08%20Reranking.md)
- [ ] [01 Module 4 Introduction.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/01%20Module%204%20Introduction.md)
- [ ] [02 Transformer Architecture.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/02%20Transformer%20Architecture.md)
- [ ] [03 LLM Sampling Strategies.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/03%20LLM%20Sampling%20Strategies.md)
- [ ] [04 Choosing Your LLM.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/04%20Choosing%20Your%20LLM.md)
- [ ] [05 Prompt Engineering - Building Your Augmented Prompt.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/05%20Prompt%20Engineering%20-%20Building%20Your%20Augmented%20Prompt.md)
- [ ] [06 Prompt Engineering - Advanced Techniques.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/06%20Prompt%20Engineering%20-%20Advanced%20Techniques.md)
- [ ] [07 Handling Hallucinations.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/07%20Handling%20Hallucinations.md)
- [ ] [08 Evaluating Your LLM's Performance.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/08%20Evaluating%20Your%20LLM's%20Performance.md)
- [ ] [09 Agentic RAG.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/09%20Agentic%20RAG.md)
- [ ] [10 RAG vs. Fine-Tuning.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/10%20RAG%20vs.%20Fine-Tuning.md)
- [ ] [01 Module 5 Introduction.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/01%20Module%205%20Introduction.md)
- [ ] [02 What Makes Production Challenging.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/02%20What%20Makes%20Production%20Challenging.md)
- [ ] [03 Implementing RAG Evaluation Strategies.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/03%20Implementing%20RAG%20Evaluation%20Strategies.md)
- [ ] [04 Logging, Monitoring, and Observability.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/04%20Logging,%20Monitoring,%20and%20Observability.md)
- [ ] [05 Customized Evaluation.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/05%20Customized%20Evaluation.md)
- [ ] [06 Quantization.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/06%20Quantization.md)
- [ ] [07 Cost vs Response Quality.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/07%20Cost%20vs%20Response%20Quality.md)
- [ ] [08 Latency vs Response Quality.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/08%20Latency%20vs%20Response%20Quality.md)
- [ ] [09 Security.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/09%20Security.md)
- [ ] [10 Multimodal RAG.md](../../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/10%20Multimodal%20RAG.md)

## 2-D. 사전학습 모델을 가져다 쓰기

메인: MLOps Tools - MLflow and Hugging Face, Module 2~4

- [ ] [01 Key Terms - Introduction to Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/01%20Key%20Terms%20-%20Introduction%20to%20Hugging%20Face.md)
- [ ] [02 What is Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/02%20What%20is%20Hugging%20Face.md)
- [ ] [03 Overview of the Hugging Face Hub.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/03%20Overview%20of%20the%20Hugging%20Face%20Hub.md)
- [ ] [04 Introduction to the Hugging Face Hub.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/04%20Introduction%20to%20the%20Hugging%20Face%20Hub.md)
- [ ] [05 Practical Scenario - Hugging Face Components.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/05%20Practical%20Scenario%20-%20Hugging%20Face%20Components.md)
- [ ] [06 Using Hugging Face Repositories.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/06%20Using%20Hugging%20Face%20Repositories.md)
- [ ] [07 Using Hugging Face Spaces.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/07%20Using%20Hugging%20Face%20Spaces.md)
- [ ] [08 Hugging Face Hub (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/08%20Hugging%20Face%20Hub%20%28Reading%29.md)
- [ ] [09 Practical Scenario - Sharing a Model Interactively.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/09%20Practical%20Scenario%20-%20Sharing%20a%20Model%20Interactively.md)
- [ ] [10 Lesson Reflection - Introduction to Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/10%20Lesson%20Reflection%20-%20Introduction%20to%20Hugging%20Face.md)
- [ ] [11 Key Terms - Introduction to Applied Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/11%20Key%20Terms%20-%20Introduction%20to%20Applied%20Hugging%20Face.md)
- [ ] [12 Introduction to Applied Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/12%20Introduction%20to%20Applied%20Hugging%20Face.md)
- [ ] [13 Using GPU Enabled Codespaces.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/13%20Using%20GPU%20Enabled%20Codespaces.md)
- [ ] [14 Using the Hugging Face CLI.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/14%20Using%20the%20Hugging%20Face%20CLI.md)
- [ ] [15 Practical Scenario - GPU Codespaces and CLI Login.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/15%20Practical%20Scenario%20-%20GPU%20Codespaces%20and%20CLI%20Login.md)
- [ ] [16 Hugging Face CLI (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/16%20Hugging%20Face%20CLI%20%28Reading%29.md)
- [ ] [17 Lesson Reflection - Introduction to Applied Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/17%20Lesson%20Reflection%20-%20Introduction%20to%20Applied%20Hugging%20Face.md)
- [ ] [18 Key Terms - Using Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/18%20Key%20Terms%20-%20Using%20Hugging%20Face.md)
- [ ] [19 Using the Model Hub.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/19%20Using%20the%20Model%20Hub.md)
- [ ] [20 Practical Scenario - Creating a Repository via CLI.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/20%20Practical%20Scenario%20-%20Creating%20a%20Repository%20via%20CLI.md)
- [ ] [21 Downloading Models.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/21%20Downloading%20Models.md)
- [ ] [22 Working with Models.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/22%20Working%20with%20Models.md)
- [ ] [23 Adding Datasets.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/23%20Adding%20Datasets.md)
- [ ] [24 Using Datasets.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/24%20Using%20Datasets.md)
- [ ] [25 Working with Datasets.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/25%20Working%20with%20Datasets.md)
- [ ] [26 Hugging Face Fundamentals (Graded Assignment).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/26%20Hugging%20Face%20Fundamentals%20%28Graded%20Assignment%29.md)
- [ ] [27 Introduction to Hugging Face Lab.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/27%20Introduction%20to%20Hugging%20Face%20Lab.md)
- [ ] [28 Datasets (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/28%20Datasets%20%28Reading%29.md)
- [ ] [29 Lesson Reflection - Using Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%202%20-%20Introduction%20to%20Hugging%20Face/29%20Lesson%20Reflection%20-%20Using%20Hugging%20Face.md)

- [ ] [01 Key Terms - Packaging Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/01%20Key%20Terms%20-%20Packaging%20Hugging%20Face.md)
- [ ] [02 Hugging Face and FastAPI.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/02%20Hugging%20Face%20and%20FastAPI.md)
- [ ] [03 Containerizing Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/03%20Containerizing%20Hugging%20Face.md)
- [ ] [04 Practical Scenario - Defining a JSON Schema for Text Generation.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/04%20Practical%20Scenario%20-%20Defining%20a%20JSON%20Schema%20for%20Text%20Generation.md)
- [ ] [05 Running FastAPI with Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/05%20Running%20FastAPI%20with%20Hugging%20Face.md)
- [ ] [06 CI-CD Packaging with GitHub Actions.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/06%20CI-CD%20Packaging%20with%20GitHub%20Actions.md)
- [ ] [07 FastAPI (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/07%20FastAPI%20%28Reading%29.md)
- [ ] [08 Quiz - Packaging Hugging Face (Practice Assignment).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/08%20Quiz%20-%20Packaging%20Hugging%20Face%20%28Practice%20Assignment%29.md)
- [ ] [09 Lesson Reflection - Packaging Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/09%20Lesson%20Reflection%20-%20Packaging%20Hugging%20Face.md)
- [ ] [10 Key Terms - Hugging Face and Azure ML Studio.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/10%20Key%20Terms%20-%20Hugging%20Face%20and%20Azure%20ML%20Studio.md)
- [ ] [11 Hugging Face and Azure ML Studio.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/11%20Hugging%20Face%20and%20Azure%20ML%20Studio.md)
- [ ] [12 Registering a Hugging Face Dataset on Azure.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/12%20Registering%20a%20Hugging%20Face%20Dataset%20on%20Azure.md)
- [ ] [13 Practical Scenario - Tracking Model Versions.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/13%20Practical%20Scenario%20-%20Tracking%20Model%20Versions.md)
- [ ] [14 Registering a Hugging Face Model on Azure.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/14%20Registering%20a%20Hugging%20Face%20Model%20on%20Azure.md)
- [ ] [15 Inspecting a Hugging Face Dataset on Azure.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/15%20Inspecting%20a%20Hugging%20Face%20Dataset%20on%20Azure.md)
- [ ] [16 Azure ML Python SDK.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/16%20Azure%20ML%20Python%20SDK.md)
- [ ] [17 Azure ML Python SDK (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/17%20Azure%20ML%20Python%20SDK%20%28Reading%29.md)
- [ ] [18 Hugging Face and Azure (Practice Assignment).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/18%20Hugging%20Face%20and%20Azure%20%28Practice%20Assignment%29.md)
- [ ] [19 Lesson Reflection - Hugging Face and Azure ML Studio.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/19%20Lesson%20Reflection%20-%20Hugging%20Face%20and%20Azure%20ML%20Studio.md)
- [ ] [20 Key Terms - Hugging Face Automation.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/20%20Key%20Terms%20-%20Hugging%20Face%20Automation.md)
- [ ] [21 Using GitHub Actions for Model Deployments.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/21%20Using%20GitHub%20Actions%20for%20Model%20Deployments.md)
- [ ] [22 Using Azure Container Registry.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/22%20Using%20Azure%20Container%20Registry.md)
- [ ] [23 Automating Packaging with Azure Container Registry.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/23%20Automating%20Packaging%20with%20Azure%20Container%20Registry.md)
- [ ] [24 Automating Packaging with Docker Hub.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/24%20Automating%20Packaging%20with%20Docker%20Hub.md)
- [ ] [25 Deploying Hugging Face (Graded Assignment).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/25%20Deploying%20Hugging%20Face%20%28Graded%20Assignment%29.md)
- [ ] [26 Packaging Hugging Face Lab.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/26%20Packaging%20Hugging%20Face%20Lab.md)
- [ ] [27 Docker Overview (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/27%20Docker%20Overview%20%28Reading%29.md)
- [ ] [28 Lesson Reflection - Hugging Face Automation.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%203%20-%20Deploying%20Hugging%20Face/28%20Lesson%20Reflection%20-%20Hugging%20Face%20Automation.md)

- [ ] [01 Key Terms - Hugging Face with Azure Containers.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/01%20Key%20Terms%20-%20Hugging%20Face%20with%20Azure%20Containers.md)
- [ ] [02 Create an Azure Container Application.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/02%20Create%20an%20Azure%20Container%20Application.md)
- [ ] [03 Configure an Azure Container Application.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/03%20Configure%20an%20Azure%20Container%20Application.md)
- [ ] [04 Deploy Hugging Face to Azure.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/04%20Deploy%20Hugging%20Face%20to%20Azure.md)
- [ ] [05 Troubleshooting Container Deployment.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/05%20Troubleshooting%20Container%20Deployment.md)
- [ ] [06 Quiz - Hugging Face with Azure Containers (Practice Assignment).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/06%20Quiz%20-%20Hugging%20Face%20with%20Azure%20Containers%20%28Practice%20Assignment%29.md)
- [ ] [07 Lesson Reflection - Hugging Face with Azure Containers.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/07%20Lesson%20Reflection%20-%20Hugging%20Face%20with%20Azure%20Containers.md)
- [ ] [08 Key Terms - Fine-Tuning and ONNX Exporting.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/08%20Key%20Terms%20-%20Fine-Tuning%20and%20ONNX%20Exporting.md)
- [ ] [09 Introduction to Fine-Tuning Theory.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/09%20Introduction%20to%20Fine-Tuning%20Theory.md)
- [ ] [10 Performing Fine-Tuning.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/10%20Performing%20Fine-Tuning.md)
- [ ] [11 Introduction to ONNX and Hugging Face.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/11%20Introduction%20to%20ONNX%20and%20Hugging%20Face.md)
- [ ] [12 Exporting Hugging Face Models to ONNX.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/12%20Exporting%20Hugging%20Face%20Models%20to%20ONNX.md)
- [ ] [13 Hugging Face and ONNX Lab.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/13%20Hugging%20Face%20and%20ONNX%20Lab.md)
- [ ] [14 Quiz - Fine-Tuning and ONNX Exporting (Practice Assignment).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/14%20Quiz%20-%20Fine-Tuning%20and%20ONNX%20Exporting%20%28Practice%20Assignment%29.md)
- [ ] [15 Lesson Reflection - Fine-Tuning and ONNX Exporting.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/15%20Lesson%20Reflection%20-%20Fine-Tuning%20and%20ONNX%20Exporting.md)
- [ ] [16 Key Terms - Beyond Hugging Face Spaces.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/16%20Key%20Terms%20-%20Beyond%20Hugging%20Face%20Spaces.md)
- [ ] [17 Introduction to Hugging Face Spaces.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/17%20Introduction%20to%20Hugging%20Face%20Spaces.md)
- [ ] [18 Hugging Face Spaces Walkthrough.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/18%20Hugging%20Face%20Spaces%20Walkthrough.md)
- [ ] [19 Deploying Hugging Face Spaces.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/19%20Deploying%20Hugging%20Face%20Spaces.md)
- [ ] [20 Deploying Hugging Face Lab.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/20%20Deploying%20Hugging%20Face%20Lab.md)
- [ ] [21 Applied Hugging Face (Graded Assignment).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/21%20Applied%20Hugging%20Face%20%28Graded%20Assignment%29.md)
- [ ] [22 Profit Sharing Concepts.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/22%20Profit%20Sharing%20Concepts.md)
- [ ] [23 Tragedy of the GenAI commons.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/23%20Tragedy%20of%20the%20GenAI%20commons.md)
- [ ] [24 Game Theory of GenAI.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/24%20Game%20Theory%20of%20GenAI.md)
- [ ] [25 Practical Scenario - Profit Sharing.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/25%20Practical%20Scenario%20-%20Profit%20Sharing.md)
- [ ] [26 Perfect Competition.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/26%20Perfect%20Competition.md)
- [ ] [27 Negative Externalities.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/27%20Negative%20Externalities.md)
- [ ] [28 Regulatory Entrepreneurship.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/28%20Regulatory%20Entrepreneurship.md)
- [ ] [29 Final Sandboxes.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/29%20Final%20Sandboxes.md)
- [ ] [30 Regulatory Entrepreneurship (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/30%20Regulatory%20Entrepreneurship%20%28Reading%29.md)
- [ ] [31 Ethical Sourcing of Datasets (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/31%20Ethical%20Sourcing%20of%20Datasets%20%28Reading%29.md)
- [ ] [32 Glaze (Reading).md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/32%20Glaze%20%28Reading%29.md)
- [ ] [33 Lesson Reflection - Beyond Hugging Face Spaces.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/33%20Lesson%20Reflection%20-%20Beyond%20Hugging%20Face%20Spaces.md)
- [ ] [34 Next Steps.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/34%20Next%20Steps.md)
- [ ] [35 Share your learning experience.md](../../../courses/mooc/MLOps/MLOps%20Tools%20-%20MLflow%20and%20Hugging%20Face/Module%204%20-%20Applied%20Hugging%20Face/35%20Share%20your%20learning%20experience.md)

## 산출물

**내 문서로 답하는 RAG 시스템 하나.** 웹 UI는 없어도 되고 CLI로 충분하다.

1. 문서 20개 이상을 청크로 나눠 벡터 DB에 적재 — **청크 크기를 바꿔 가며 검색 품질이 어떻게 변하는지** 기록
2. 질문 20개로 평가표를 만든다. 각 질문에 대해: 검색된 문맥이 맞았는가 / 답이 문맥에 근거했는가 / 환각(hallucination)이 있었는가
3. 같은 질문을 RAG 없이 LLM에만 물었을 때와 비교
4. 한 문단: "이 문제에 파인튜닝이 나았을까, RAG가 나았을까, 왜"

## 다음 단계

→ [03 Phase 3 - 컴퓨터비전](03%20Phase%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%EB%B9%84%EC%A0%84.md)
