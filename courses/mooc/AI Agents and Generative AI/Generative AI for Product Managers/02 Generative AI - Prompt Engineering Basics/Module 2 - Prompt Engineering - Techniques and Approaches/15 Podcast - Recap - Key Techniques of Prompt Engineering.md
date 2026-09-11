# 15 Podcast: Recap: Key Techniques of Prompt Engineering

## 개요
- Module 2 전체(프롬프트 엔지니어링 기법과 접근법)를 두 진행자(William, Lilly)의 대화 형식으로 캐주얼하게 복습하는 3분 팟캐스트

## 내용

### Zero-shot vs Few-shot vs Chain-of-Thought
- **Zero-shot prompting**: 예시 없이 모델에게 작업을 수행하도록 요청하는 것
- **Few-shot prompting**: 프롬프트에 몇 가지 예시를 포함해 모델이 기대하는 패턴을 학습하도록 돕는 것
- **Chain-of-Thought prompting**: 답을 주기 전에 모델이 단계별로 추론하도록 안내하는 것
- 핵심은 **"무엇을 묻는가"보다 "어떻게 묻는가"**가 응답을 좌우한다는 것

### 어떤 기법을 언제 쓸까
- **빠른 창의성**이 필요하면 zero-shot이 효과적
- **정밀함이나 추론**이 필요하면 few-shot이나 Chain-of-Thought 프롬프팅이 더 강력한 결과를 냄
- Few-shot = 모델에게 "이렇게 하는 거야"를 먼저 보여준 뒤 혼자 해보게 하는 것과 같음 — 다소 까다로운 요청일 때 성능을 크게 높여줌
- **작업 명시(Task Specification)**와 **맥락적 안내(Contextual Guidance)**도 함께 언급됨 — 원하는 바를 명확히 하고, 모델이 맥락을 이해하도록 충분한 배경 정보를 제공하는 것

### 인터뷰 패턴(Interview Pattern)
- 상호작용을 **인터뷰 같은 주고받는 대화**로 다루는 방식 — 한 번에 완벽하게 다 담으려 하지 않고, 진행하면서 명확히 할 수 있어 더 동적임

### Chain-of-Thought vs Tree-of-Thought
- **Chain-of-Thought**: 모델에게 추론을 단계별로 분해하도록 요청 — 답만이 아니라 전체 사고 과정을 얻음
- **Tree-of-Thought**: 한 단계 더 나아가 모델에게 **가지 뻗는 구조(branching structure)**를 부여해, 추론하면서 여러 가능성과 경로를 탐색하게 함

### 왜 중요한가
- 이 기법들을 사용하면 모델의 답변이 **더 신뢰할 수 있고 사용자의 실제 필요에 맞게 맞춤화**됨
- **설명가능성(explainability)·윤리(ethics)·신뢰(trust)**에도 도움 — AI가 어떻게 답에 도달했는지 볼 수 있어 사용에 대한 확신이 커짐
- 핵심은 "아무 답이나"가 아니라 **"올바른 답 + 그 과정에 대한 이해"**를 얻는 것

## 요약
- [14 Reading - Lesson Summary](14%20Reading%20-%20Lesson%20Summary%20-%20Key%20Techniques%20of%20Prompt%20Engineering.md)에서 다룬 Module 2 전체 내용(Zero-shot/Few-shot, 인터뷰 패턴, Chain-of-Thought, Tree-of-Thought)을 대화체로 재확인
- 이 모듈에서 배운 모든 기법의 공통 목적: **더 신뢰할 수 있고, 맥락에 맞고, 설명 가능한 AI 응답**을 얻는 것
