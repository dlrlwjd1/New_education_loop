# 09 Lab: Experimenting with Prompts (실습 — 프롬프트 실험)

## 개요
- IBM Generative AI Classroom에서 **GPT-5 Nano** 모델로 프롬프트 구조·명확성·형식·길이 제한을 실험하는 40분 실습

### 학습 목표
- 요구사항에 맞는 간결한 프롬프트를 위한 **프롬프트 구조** 설계
- 원하는 출력을 위한 **모호하지 않고 맥락 기반**인 프롬프트 작성
- 질문·진술·지시 등 **다양한 형식**의 프롬프트 작성

## 내용

### Exercise 1 — 프롬프트 구조(Prompt Structure)
- 제안 구조: `[작업 설명] [작업 대상 데이터] [선택: 응답 예시]`
- 예시(영→스페인어 번역): "영어 문장을 스페인어로 번역해줘: '생성형 AI를 비즈니스 운영에 도입하는 것은 시급한 과제다.' (예: 'My name is Sujan.'은 스페인어로 'Mi nombre es sujan.'입니다)"

### Exercise 2 — 모호하지 않은 프롬프트(Unambiguous Prompts)
- 비교 실험: `"콘텐츠 마케팅 분야에서 생성형 AI의 관련성에 대해 알려줘"`(모호) vs `"콘텐츠 마케팅 분야에서 생성형 AI의 핵심 응용을 설명해줘"`(구체적)
- 맥락과 구체적 입력을 추가할수록 응답이 더 일관되고(coherent) 명확해짐을 직접 비교

### Exercise 3 — 다양한 형식의 프롬프트
- 같은 주제(저수지의 이점)를 세 가지 형식으로 실험:
  - **질문형**: `What are the benefits of water reservoirs in a detailed paragraph?`
  - **진술형**: `Discuss the benefits of utilizing water reservoirs.`
  - **지시형**: `List the top five benefits of water reservoirs.`
- **결론**: 요약(summarization) 작업엔 **지시형**, 텍스트 완성(text completion)엔 **진술형**, 문장에서 특정 개체를 추출할 땐 **질문형**이 가장 적합

### Exercise 4 — 출력 길이 제한
- 예시: `"ABCTech에 리드 데이터 사이언티스트로 입사하게 된 것을 알리는 트윗 길이의 메시지를 만들어줘"`
- 직접 해보기 제안: AI 교육 최신 기술 리서치, 280자 제한 스마트폰 홍보 게시물, 우리 동네 추천 명소

## 요약
- 4개 실습 축: **구조화(구조 템플릿) → 명확성(모호함 제거) → 형식 선택(질문/진술/지시) → 길이 제어**
- 핵심 인사이트: **프롬프트 형식(질문/진술/지시)은 작업 유형에 따라 다르게 선택**해야 함 — 요약엔 지시형, 완성엔 진술형, 추출엔 질문형
- [05 What Is a Prompt](05%20What%20Is%20a%20Prompt.md)의 4대 구성요소, [06 What Is Prompt Engineering](06%20What%20Is%20Prompt%20Engineering.md)의 반복 정제 프로세스를 실제 프롬프트 작성 스킬로 구체화한 실습
