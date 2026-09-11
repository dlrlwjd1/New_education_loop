# 05 Lab: The Chain-of-Thought Approach in Prompt Engineering (실습)

## 개요
- Chain-of-Thought(CoT) 접근법을 실제로 적용해보는 20분 실습 (GPT-5 Nano 사용) — Few-shot CoT, Zero-shot CoT, 주제 탐색용 CoT 세 갈래를 예제로 확인

### 학습 목표
- Chain-of-Thought 접근법이 프롬프팅에 어떻게 쓰이는지 논의
- CoT 프롬프트 예시를 분석해 단계별 추론(step-by-step reasoning)이 모델 출력에 어떻게 영향을 미치는지 이해

## 내용

### 예시 1 — Few-shot CoT (Chain-of-Thought to the rescue)
- 프롬프트 구조: **질문 + 정확한 답(추론 과정 포함) → 같은 논리로 풀 수 있는 다른 질문**
- 훈련용 예시: "이탈리아 메뉴 5종 중 $30로 포만감을 최대화하려면?" → "포만감이 동일하다면 개당 가격이 가장 낮은 항목(Bruschetta $4.99)을 최대한 많이 사는 것이 최적" → "$30 ÷ $4.99 ≈ 6개" 라는 풀이 과정을 프롬프트에 포함
- 실제 질문: "관상어 4종(구피/금붕어/베타/엔젤피시) 중 $20로 마릿수를 최대화하려면?" → 모델이 같은 논리("가장 싼 항목을 최대한 많이") 적용 → "금붕어($1.99) 10마리, $19.90 지출, $0.10 남음"이라는 올바른 풀이 과정 + 정답 도출
- 두 번째 예시(상자 부피 최적화 문제)에서도 동일 패턴 확인: 모델이 "달러당 부피" 비율을 계산해 Large 3개 + Small 1개 = 124L라는 정답을 스스로 도출

### 예시 2 — Zero-Shot CoT (Kojima et al.)
- 예시 없이 **"Let's think step by step"** 또는 **"Let's work this out in a step-by-step way to be sure we have the right answer"** 같은 문구만 추가
- 이 문구는 "마법"이 아니라 **보조 수단** — 다른 기법과 함께 쓸 때 가장 효과적
- 실습에서 GPT 3.5 모델에 이 문구만 붙여 이탈리아 메뉴 문제를 다시 풀게 하자 **오답**(6개의 Bruschetta, $29.94)이 나옴 → 예시를 직접 보여주는 Few-shot CoT가 이 경우 더 정확함을 확인
- Zero-shot CoT는 **전체 추론 예시를 만들 필요 없이 빠르고 상세한 단계별 응답**(블로그 포스트, 에세이, 가이드 등 긴 글)을 얻고 싶을 때 특히 유용

### 예시 3 — 주제를 깊이 탐색하는 CoT (Chain-of-Thought to explore subjects)
- CoT의 또 다른 활용: 질문-답 템플릿이 아니라, **일반적 질문을 여러 하위 요소로 쪼개** 모델이 각 요소를 빠짐없이 다루게 함
- 나이브 질문 "What is space exploration?" → 무난하지만 일반적인 답변
- Prompt Instructions에 "다음 12개 요소(역사적 우주 임무, 달 착륙과 냉전, 위성 기술, 화성 식민지화, 외계 생명체 탐사, 우주 관광, 우주 쓰레기, ISS 협력, 로켓 기술 발전, 성간 여행의 과제, 민간 기업·억만장자 논란 등)를 모두 다뤄 포괄적으로 답하라" 지시 → 같은 질문을 다시 던지면 12개 요소를 각각 상세히 다룬 **훨씬 풍부한 답변**
- 장점: 모델을 재훈련할 필요 없이, 문제를 작은 단계로 쪼개 기존 학습 내용을 활용해 답을 계산하게 함
- 단점: 다뤄야 할 요소 목록을 만들려면 **주제에 대한 사전 지식이나 조사**가 필요해 시간이 듦
- CoT는 여러 방향으로 가지를 뻗어나갈 수 있어, 모델이 broader understanding을 보여준 뒤 특정 질문을 이어서 할 수도 있음

## 요약
- [04 Chain-of-Thought Approach](04%20Chain-of-Thought%20Approach.md)의 이론을 세 가지 실습으로 확인: **Few-shot CoT**(예시로 정확히 유도) vs **Zero-shot CoT**("step by step" 문구만, 때로 오답 가능) vs **주제 탐색형 CoT**(하위 요소를 나열해 포괄적 답변 유도)
- 핵심 교훈: Few-shot CoT가 정확도 면에서 더 안정적이지만, Zero-shot CoT는 사전 준비 없이 빠르게 상세한 응답을 얻는 데 유용 — 상황에 맞게 선택
