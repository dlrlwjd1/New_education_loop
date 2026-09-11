# How ChatGPT (and All LLMs) Actually Work — The Context Advantage

## 개요
- 첫 번째이자 가장 널리 알려진 AI 도구 **ChatGPT**로 시작
- ChatGPT를 단순 챗봇이 아니라 **생각·작성·리서치를 돕는 AI 팀원(AI teammate)**으로 보라
- LLM의 작동 원리, 컨텍스트 윈도우(context window), PM으로서의 활용 이유(leverage)를 다룸

## 내용

### ChatGPT와 OpenAI
- **OpenAI**가 ChatGPT를 소유한 회사 — Dall-E, Sora, Codex 등 다수 제품 보유
- 녹화 시점 기준 시장 선두주자(market leader)이며 당분간 유지될 전망

### LLM은 마법이 아니다 — 패턴 인식 엔진
- ChatGPT, Claude, Grok 등은 모두 **거대 언어 모델(LLM, Large Language Model)**
- 본질은 **패턴 인식 엔진(pattern recognition engine)**
  - 인터넷의 방대한 텍스트(이제는 멀티모달)를 학습
  - **확률·통계적으로 다음 단어(next word)를 예측**하는 것
- 예시: "The capital of France is ___"
  - computer, table, Rome, Atlantic Ocean 등 여러 후보가 가능하지만
  - 가장 높은 확률의 단어 = **Paris**
  - 정보를 더 많이 줄수록 확률의 정확도(accuracy)가 올라감
- 중요: 모델이 파리·유럽·수도의 개념을 "알아서"가 아니라, 학습한 텍스트로 다음 단어를 **확률적으로 예측**하기 때문 → **맥락(context)이 중요한 이유**

### 컨텍스트 윈도우 (Context Window)
- 정의: AI가 볼 수 있는 항목들 = **단기 기억(short-term memory)**
- 모든 것을 기억하지 못하며, 전부를 담지 못함
- 비유: 사람과의 대화에서 다섯 살 학교 이야기부터 현재까지 30분간 쏟아내면
  상대가 "잠깐, 정보가 너무 많아. 30분 전에 뭐라 했는지 잊었어"라고 함 → 그게 그 사람의 컨텍스트 윈도우
- 생산적 대화를 위해선 **컨텍스트를 적절히 관리(manage the context window)**해야 함
  - "식료품점 어디야?"를 물으려면 위치 정도만 주면 됨
  - "작년 추수감사절에 칠면조 좋았지…"로 시작하는 건 부적절한 맥락 관리
- 예시 모델: **GPT-4o의 컨텍스트 윈도우 = 128,000 토큰(tokens) ≈ 100,000 단어 ≈ 텍스트 300페이지**
  - 회사에서 쓴 모든 PRD, 방대한 고객 인터뷰를 담을 수 있는 양
- 핵심: 컨텍스트 윈도우는 **크고 계속 커지지만(200K~2M 토큰) 무한하지 않다** → 사람 대화처럼 관리 필요

### PM에게의 활용 포인트 (Leverage)
1. **속도(speed) 레버**
   - 분석, PRD, 고객 인터뷰 종합(synthesis) 초안을 이전보다 수십 배 빠르게 생성
   - 단, 한 번에 뽑아(one-shot) 자기 작업인 척하면 안 됨 → 다듬어야 함(refine)
   - **저자(author)에서 편집자(editor)로** 사고방식 전환
2. **생각의 파트너(thinking partner)**
   - 다양한 아이디어 탐색, 자기 가정(assumptions)에 도전, 전략 다듬기
3. **같은 시간에 더 많은 일** 수행

## 예시
- 같은 PRD 작성 요청을 컨텍스트 없이 한 번, 사용자·문제·제약을 포함해 한 번 실행하여 결과의 구체성을 비교한다.

## 요약
- LLM은 마법이 아니라 방대한 텍스트로 **다음 단어를 확률적으로 예측**하는 패턴 인식 엔진
- **컨텍스트 윈도우 = AI의 단기 기억**: 크지만 무한하지 않으므로 대화처럼 관리해야 함 (GPT-4o ≈ 128K 토큰 ≈ 300페이지)
- ChatGPT는 PM에게 **속도 레버 + 생각의 파트너** → 저자가 아니라 편집자의 자세로 활용
