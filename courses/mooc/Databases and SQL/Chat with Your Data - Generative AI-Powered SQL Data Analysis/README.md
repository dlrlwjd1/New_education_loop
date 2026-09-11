# Chat with Your Data: Generative AI-Powered SQL Data Analysis

**Course URL:** [mooc.org/learn/generative-ai-for-sql](https://www.mooc.org/learn/generative-ai-for-sql)

Vanderbilt University (Dr. Jules White) 강좌. 생성형 AI를 활용해 **질문 → SQL 쿼리 → 결과 분석 → 시각화 → 검증/재현**까지 데이터베이스 작업 전체를 대화로 처리하는 방법을 다룬다. 총 2개 모듈, 11개 비디오 강의로 구성.

## 모듈 구성

- [Module 1 - Translating Questions and Goals into Queries](Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/) — 질문을 쿼리로 변환하는 법, 데이터베이스 컨텍스트 확립, 질문 브레인스토밍
- [Module 2 - From Query Results to Visualizations and Analyses](Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/) — 결과 분석, 새니티 체크, 재현/자동화, 시각화, 디버깅

## 강의 목록

### Module 1 - Chat with Your Data: Translating Questions and Goals into Queries
1. [Introduction to Chatting with Your Data Using Generative AI](Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/01%20Introduction%20to%20Chatting%20with%20Your%20Data%20Using%20Generative%20AI.md)
2. [From Conversation to Query](Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/02%20From%20Conversation%20to%20Query.md)
3. [Establishing Database Context](Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/03%20Establishing%20Database%20Context.md)
4. [Flipped Interaction Context Setting](Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/04%20Flipped%20Interaction%20Context%20Setting.md)
5. [Co-exploration of Questions and Databases](Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/05%20Co-exploration%20of%20Questions%20and%20Databases.md)
6. [From Question to Query](Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/06%20From%20Question%20to%20Query.md)

### Module 2 - Talking to Your Results: From Query Results to Visualizations & Analyses
1. [Collaborative Data Analysis with Generative AI](Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/01%20Collaborative%20Data%20Analysis%20with%20Generative%20AI.md)
2. [Sanity Checking Queries, Results, and Analyses](Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/02%20Sanity%20Checking%20Queries%2C%20Results%2C%20and%20Analyses.md)
3. [Supporting Replication and Automation Outside Generative AI](Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/03%20Supporting%20Replication%20and%20Automation%20Outside%20Generative%20AI.md)
4. [Collaborative Data Visualization of Query Results with Generative AI](Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/04%20Collaborative%20Data%20Visualization%20of%20Query%20Results%20with%20Generative%20AI.md)
5. [Collaborative Debugging of SQL Queries with Generative AI](Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/05%20Collaborative%20Debugging%20of%20SQL%20Queries%20with%20Generative%20AI.md)

## 핵심 개념 요약

- **"데이터와 채팅하기"의 두 축**: (1) 질문 → 쿼리 → 데이터 추출, (2) 추출한 데이터 → 분석 → 시각화. 둘 다 대화로 처리한다.
- **데이터베이스 컨텍스트(Context)가 핵심**: DB 종류/버전, 접속 클라이언트, 테이블 구조·관계, 그리고 **실제 데이터 샘플**까지 줘야 AI가 가정(환각)에 기대지 않고 정확한 쿼리를 만든다.
- **플립드 인터랙션 패턴으로 컨텍스트 수집**: "네가 하나씩 질문하고 명령을 제시해라, 나는 실행 결과(텍스트/스크린샷)만 돌려주겠다"는 방식으로 AI가 스스로 필요한 정보를 모으게 한다.
- **질문 먼저, 쿼리는 그다음**: 쿼리로 바로 넘어가지 말고 AI와 함께 "어떤 질문을 물을지" 브레인스토밍(co-exploration)한다. 질문이 틀리면 쿼리가 맞아도 소용없다.
- **실험적 쿼리 생성**: 복잡한 쿼리는 한 번에 요청하지 말고, 먼저 샘플 SELECT 쿼리들을 실행시켜 데이터 형태를 파악한 뒤 최종 쿼리를 생성하게 한다.
- **협업적 분석 (코드 인터프리터)**: CSV로 내보낸 쿼리 결과를 ChatGPT에 올리면, AI가 Python 코드를 작성·실행해 고수준 질문에 답한다 — "개인 데이터 과학자를 고용한 것"과 같다.
- **새니티 체크는 AI로 오히려 강화된다**: AI에게 데이터/쿼리에 대한 검증 아이디어를 브레인스토밍시키고 직접 실행하게 하면, 사람이 놓쳤을 이상치나 오류를 발견할 수 있다.
- **재현·자동화**: 대화 속 분석을 하나의 Python 스크립트 + README + zip 패키지로 만들어, 대화 밖에서도 재현·자동화할 수 있다.
- **시각화도 대화로**: 원하는 시각화를 먼저 그리고 쿼리를 설계하거나, 원하는 스타일의 이미지를 보여주거나, 여러 다른 시각화를 한꺼번에 요청해 패턴을 탐색할 수 있다.
- **디버깅에 필요한 컨텍스트는 오류 성격에 따라 다르다**: 순수 문법 오류는 컨텍스트가 거의 불필요하지만, 클라이언트/DB 버전 특이적 오류는 풍부한 컨텍스트(에러 메시지, 클라이언트 종류 등)가 반드시 필요하다.
