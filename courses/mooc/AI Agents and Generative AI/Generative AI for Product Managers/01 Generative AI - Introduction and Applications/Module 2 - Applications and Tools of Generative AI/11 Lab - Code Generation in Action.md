# 11 Lab: Code Generation in Action (실습 — 코드 생성·변환)

## 개요
- **ChatGPT**로 코드 생성 + 코드 변환(다른 언어로 전환)을 실습하는 45분 랩
- 코딩 경험이 없어도 무방 — 이해보다는 **데모 체험**이 목적
- 생성된 코드는 **CodeTester**(C 언어) / **Programiz 온라인 파이썬 컴파일러**로 직접 테스트하여 검증

### 학습 목표
- 생성형 AI의 코드 생성 역량 탐색
- ChatGPT로 Hello World 코드 생성
- 원하는 프로그래밍 언어로 코드 생성
- ChatGPT로 한 언어의 코드를 다른 언어로 변환

## 내용

### Exercise 1 — Hello World 코드 생성 및 테스트 (C 언어)
- ChatGPT(chat.openai.com)에 가입/로그인
- 예시 프롬프트: `Generate a simple C code that prints "Hello and welcome to the generative AI world!".`
- 생성된 코드를 복사 → **CodeTester**(codetester.io/runner) 접속 → 언어를 C로 선택 → 기본 코드 삭제 후 붙여넣기 → **Run**으로 실행·검증

### Exercise 2 — 코드 생성 후 다른 언어로 변환
- **Step 1**: JavaScript 코드 생성
  - 예시 프롬프트: `Create a JavaScript code to generate a random number between 1 and 100.`
- **Step 2**: 같은 대화창에서 이어서 변환 요청
  - 예시 프롬프트: `Convert the above code in Python.`
- **Step 3**: 변환된 파이썬 코드를 **Programiz 온라인 파이썬 컴파일러**에 붙여넣고 **Run**으로 검증 (다시 Run하면 난수가 바뀜)

### 유의 사항 (실무 적용 시 주의점)
- 생성된 코드의 **사실적 정확성(factual accuracy)**을 반드시 검증하고, 기술을 윤리적·책임 있게 사용해야 함
- ChatGPT는 단계별 설명·안내를 제공해 프로그래밍 학습에도 도움이 되지만, **크고 복잡한 코드를 처음부터 생성하는 데는 한계** — 훈련 데이터가 2021년 기준 라이브러리에 머물러 있어 제약이 있을 수 있음(= [10 Tools for Code Generation](10%20Tools%20for%20Code%20Generation.md)에서 언급한 "훈련 시점 이후 최신 프레임워크는 모름" 한계와 동일)

## 요약
- 이 랩은 [10 Tools for Code Generation](10%20Tools%20for%20Code%20Generation.md)에서 배운 **코드 생성 + 언어 간 변환** 역량을 ChatGPT로 직접 실습하고, **외부 온라인 컴파일러로 실제 실행 검증**까지 거치는 흐름
- 핵심 패턴: **프롬프트로 생성 → 복사해서 외부 도구로 실행 테스트 → 같은 대화에서 이어서 변환 요청 → 다시 테스트**
- 실무 적용 시 항상 **정확성 검증 + 윤리적 사용**을 전제로 해야 한다는 메시지가 두 실습 모두에서 반복 강조됨
