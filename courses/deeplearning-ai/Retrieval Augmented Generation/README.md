# Retrieval Augmented Generation (RAG)

**Course URL:** https://learn.deeplearning.ai/courses/retrieval-augmented-generation
**제공:** DeepLearning.AI
**강사:** Zain Hasan

## 개요
외부 지식 베이스에서 관련 정보를 검색(retrieval)해 LLM의 정확성을 높이는 **RAG(Retrieval Augmented Generation)** 시스템을 설계·구현·운영하는 방법을 다루는 중급 과정. 검색 기법(키워드·시맨틱·하이브리드), 벡터 데이터베이스(vector database), 청킹(chunking)·리랭킹(reranking), 프롬프트 설계, 그리고 프로덕션 배포(평가·모니터링·비용·보안)까지 5개 모듈로 구성된다. 모든 강의 노트는 한국어로 정리되어 있으며, 기술 용어는 영어 원문을 병기한다.

## 모듈 구성

### module 01 — RAG Overview
1. A Conversation with Andrew Ng
2. Module 1 Introduction
3. Introduction to RAG
4. Applications of RAG
5. RAG Architecture Overview
6. Introduction to LLMs
7. Introduction to Information Retrieval

### module 02 — Information Retrieval and Search Foundations
1. Module 2 Introduction
2. Retriever Architecture Overview
3. Metadata Filtering
4. Keyword Search - TF-IDF
5. Keyword Search - BM25
6. Semantic Search - Introduction
7. Semantic Search - Embedding Model Deepdive
8. Hybrid Search
9. Evaluating Retrieval

### module 03 — Information Retrieval with Vector Databases
1. Module 3 Introduction
2. Approximate Nearest Neighbors Algorithms (ANN)
3. Vector Databases
4. Chunking
5. Advanced Chunking Techniques
6. Query Parsing
7. Cross-encoders and ColBERT
8. Reranking

### module 04 — LLMs and Text Generation
1. Module 4 Introduction
2. Transformer Architecture
3. LLM Sampling Strategies
4. Choosing Your LLM
5. Prompt Engineering: Building Your Augmented Prompt
6. Prompt Engineering: Advanced Techniques
7. Handling Hallucinations
8. Evaluating Your LLM's Performance
9. Agentic RAG
10. RAG vs. Fine-Tuning

### module 05 — RAG Systems in Production
1. Module 5 Introduction
2. What Makes Production Challenging
3. Implementing RAG Evaluation Strategies
4. Logging, Monitoring, and Observability
5. Customized Evaluation
6. Quantization
7. Cost vs Response Quality
8. Latency vs Response Quality
9. Security
10. Multimodal RAG

> 각 모듈의 Code Example(예: Vector embeddings, Weaviate API, Chunking, Prompt engineering, Tracing 등), Lecture Notes(Reading), Graded Assignment, Quiz는 노트 대상에서 제외했습니다.

## 진행 상황
- [x] module 01 RAG Overview (7/7 영상 노트 완료)
- [x] module 02 Information Retrieval and Search Foundations (9/9 영상 노트 완료)
- [x] module 03 Information Retrieval with Vector Databases (8/8 영상 노트 완료)
- [x] module 04 LLMs and Text Generation (10/10 영상 노트 완료)
- [x] module 05 RAG Systems in Production (10/10 영상 노트 완료)

> 모든 영상 강의(44개) 노트가 실제 강의 트랜스크립트 기반으로 작성 완료되었습니다. Code Example·Lecture Notes(Reading)·Graded Assignment·Quiz는 노트 대상에서 제외했습니다.

## 강의 목록

<!-- course-inventory:start -->
### module 01

- [01 A Conversation with Andrew Ng](module%2001/01%20A%20Conversation%20with%20Andrew%20Ng.md)
- [02 Module 1 Introduction](module%2001/02%20Module%201%20Introduction.md)
- [03 Introduction to RAG](module%2001/03%20Introduction%20to%20RAG.md)
- [04 Applications of RAG](module%2001/04%20Applications%20of%20RAG.md)
- [05 RAG Architecture Overview](module%2001/05%20RAG%20Architecture%20Overview.md)
- [06 Introduction to LLMs](module%2001/06%20Introduction%20to%20LLMs.md)
- [07 Introduction to Information Retrieval](module%2001/07%20Introduction%20to%20Information%20Retrieval.md)

### module 02

- [01 Module 2 Introduction](module%2002/01%20Module%202%20Introduction.md)
- [02 Retriever Architecture Overview](module%2002/02%20Retriever%20Architecture%20Overview.md)
- [03 Metadata Filtering](module%2002/03%20Metadata%20Filtering.md)
- [04 Keyword Search - TF-IDF](module%2002/04%20Keyword%20Search%20-%20TF-IDF.md)
- [05 Keyword Search - BM25](module%2002/05%20Keyword%20Search%20-%20BM25.md)
- [06 Semantic Search - Introduction](module%2002/06%20Semantic%20Search%20-%20Introduction.md)
- [07 Semantic Search - Embedding Model Deepdive](module%2002/07%20Semantic%20Search%20-%20Embedding%20Model%20Deepdive.md)
- [08 Hybrid Search](module%2002/08%20Hybrid%20Search.md)
- [09 Evaluating Retrieval](module%2002/09%20Evaluating%20Retrieval.md)

### module 03

- [01 Module 3 Introduction](module%2003/01%20Module%203%20Introduction.md)
- [02 Approximate Nearest Neighbors (ANN)](module%2003/02%20Approximate%20Nearest%20Neighbors%20%28ANN%29.md)
- [03 Vector Databases](module%2003/03%20Vector%20Databases.md)
- [04 Chunking](module%2003/04%20Chunking.md)
- [05 Advanced Chunking Techniques](module%2003/05%20Advanced%20Chunking%20Techniques.md)
- [06 Query Parsing](module%2003/06%20Query%20Parsing.md)
- [07 Cross-encoders and ColBERT](module%2003/07%20Cross-encoders%20and%20ColBERT.md)
- [08 Reranking](module%2003/08%20Reranking.md)

### module 04

- [01 Module 4 Introduction](module%2004/01%20Module%204%20Introduction.md)
- [02 Transformer Architecture](module%2004/02%20Transformer%20Architecture.md)
- [03 LLM Sampling Strategies](module%2004/03%20LLM%20Sampling%20Strategies.md)
- [04 Choosing Your LLM](module%2004/04%20Choosing%20Your%20LLM.md)
- [05 Prompt Engineering - Building Your Augmented Prompt](module%2004/05%20Prompt%20Engineering%20-%20Building%20Your%20Augmented%20Prompt.md)
- [06 Prompt Engineering - Advanced Techniques](module%2004/06%20Prompt%20Engineering%20-%20Advanced%20Techniques.md)
- [07 Handling Hallucinations](module%2004/07%20Handling%20Hallucinations.md)
- [08 Evaluating Your LLM's Performance](module%2004/08%20Evaluating%20Your%20LLM%27s%20Performance.md)
- [09 Agentic RAG](module%2004/09%20Agentic%20RAG.md)
- [10 RAG vs. Fine-Tuning](module%2004/10%20RAG%20vs.%20Fine-Tuning.md)

### module 05

- [01 Module 5 Introduction](module%2005/01%20Module%205%20Introduction.md)
- [02 What Makes Production Challenging](module%2005/02%20What%20Makes%20Production%20Challenging.md)
- [03 Implementing RAG Evaluation Strategies](module%2005/03%20Implementing%20RAG%20Evaluation%20Strategies.md)
- [04 Logging, Monitoring, and Observability](module%2005/04%20Logging%2C%20Monitoring%2C%20and%20Observability.md)
- [05 Customized Evaluation](module%2005/05%20Customized%20Evaluation.md)
- [06 Quantization](module%2005/06%20Quantization.md)
- [07 Cost vs Response Quality](module%2005/07%20Cost%20vs%20Response%20Quality.md)
- [08 Latency vs Response Quality](module%2005/08%20Latency%20vs%20Response%20Quality.md)
- [09 Security](module%2005/09%20Security.md)
- [10 Multimodal RAG](module%2005/10%20Multimodal%20RAG.md)

<!-- course-inventory:end -->
