# 26 Hands-on Lab: Improve Customer Experience using Generative AI

## 개요
- 결함이 있는 은행 고객 지원 유스케이스(use case)를 생성형 AI(generative AI)로 개선하는 30분 분량 핸즈온 랩

## 내용

### 배경
- 제품 관리자의 **"Two-Hat Syndrome"**의 핵심은 고객 문제·pain point를 이해하고 효율적이면서도 개인화된 제품·지원 시스템을 개발하는 책임 ([09 Integrating Generative AI - Role of a Product Manager](09%20Integrating%20Generative%20AI%20-%20Role%20of%20a%20Product%20Manager.md) 참고)
- 이 랩은 결함이 있는 유스케이스를 제공 — 생성형 AI 도구로 문제를 공유하고 생성형 AI가 이 유스케이스와 고객 경험을 어떻게 개선할 수 있는지 판단하는 것이 과제

### 목표
- Innovative Bank의 현재 고객 지원 유스케이스 시나리오 검토
- 창의적인 프롬프트로 Google Gemini 또는 ChatGPT를 활용해 생성형 AI 기반 개선안 도출

### 시나리오
- **Innovative Bank**는 개인화되고 효율적인 고객 지원 제공에 어려움을 겪음 — 전통적인 콜 기반 시스템에서 상담원이 스크립트 응답에 의존해 지연과 고객 불만 초래
- 일일 문의량이 많아 대기 시간 증가, 많은 고객이 불만·불만족으로 계좌를 경쟁사로 이전 중

### 현재 Innovative Bank 고객 지원 유스케이스
- **목표**: 모든 고객에게 신속하고 양질의 지원 제공, 문의 해결·은행 서비스 지원, 고객 만족 극대화
- **문제 상황**: 스크립트 응답 의존, 다양한 문의에 응답하기 위해 다른 상담원에게 전환 필요, 지연과 불만 발생 / 지난 6개월간 고객 대기 시간 **20% 증가** / 지원 품질에 대한 불만이 잦고 많은 고객이 계좌 해지

### 콜 프로세스 (5단계)
1. 고객이 지원 라인에 전화 — 5개의 넓은 문의 카테고리 중 선택 후 상담원에게 라우팅
2. 모든 발신자는 자동으로 대기열에 배치 — 순서대로 응답, 대기 시간 발생
3. 상담원이 사전 정의된 스크립트로 응답 — 특이한 문의에는 대응 실패가 잦음
4. 해결되지 않은 문의는 문서화되어 추후 분석을 위해 보류 — 은행은 24시간 내 재연락을 목표로 함
5. 모든 통화와 조치는 문서화되어 검토·분류를 위해 데이터베이스에 저장

### 현재 프로세스의 이점
- 스크립트 응답이 일관성 보장, 상담원의 완만한 학습 곡선, 문의의 75% 이상이 30분 내 해결

### 메인 시나리오 vs 대안 시나리오 (분실 신용카드 문의 예시)
- **메인 시나리오**: 고객이 "분실/도난 카드" 선택 → 상담원에게 라우팅·대기 → 상담원 응답 → 타 부서로 전환해 통화 마무리 → 고객 만족스럽게 통화 완료 → "Inquiry Database"에 기록
- **대안 시나리오**: 동일하게 진행되다 상담원이 문제에 부딪힘 → 이슈를 문서화하고 24시간 내 재연락 약속 → 케이스가 "Pending Status"로 분류

### Task 1 — 워크시트 다운로드
- Customer Support Use Case Worksheet(Word 문서) 다운로드

### Task 2 — Gemini/ChatGPT로 개선 아이디어 도출
- 단일 초기 프롬프트 또는 연속된 프롬프트로 생성형 AI를 활용해 유스케이스 개선 아이디어 수집

### Task 3 — 유스케이스 개정
- 생성형 AI 활용을 반영해 유스케이스를 개정

### Task 4 — 동료 검증
- 친구·동료와 결과를 비교하고 생성형 AI 분석의 타당성에 대한 의견 구하기

### Task 5 — 모범 답안과 비교
- "Improve Customer Experience Potential Solution" PDF와 비교 — ChatGPT와 Gemini 양쪽의 솔루션이 모두 포함되어 있어 두 접근法의 유사점·차이점 확인 가능

## 요약
- 이 랩은 [25 Improving Customer Experiences with Generative AI](25%20Improving%20Customer%20Experiences%20with%20Generative%20AI.md)에서 다룬 은행 가상 어시스턴트 "Sara" 사례와 정확히 같은 산업(은행)·같은 문제(콜센터 지연, 고객 이탈)를 다루며, 이론으로 배운 것을 직접 실습으로 재현
- 스크립트 기반 응답의 한계(특이 문의 대응 실패, 24시간 재연락 지연)를 생성형 AI로 어떻게 해결할지 스스로 설계해보는 것이 핵심
- 이 랩을 끝으로 Lesson 2("Generative AI Across the Product Lifecycle")의 핵심 영상·랩이 마무리되며, 다음은 [Lesson 2 Practice Quiz는 건너뛰고, 27 Lesson 2 Summary](27%20Lesson%202%20Summary%20-%20Generative%20AI%20Across%20the%20Product%20Lifecycle.md)로 이어짐
