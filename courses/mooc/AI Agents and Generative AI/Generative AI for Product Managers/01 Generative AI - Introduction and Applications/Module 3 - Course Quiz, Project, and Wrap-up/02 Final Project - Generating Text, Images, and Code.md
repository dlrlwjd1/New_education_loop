# 02 Final Project: Generating Text, Images, and Code (최종 프로젝트)

## 개요
- 코스 전체를 종합하는 45분짜리 **선택 최종 프로젝트** — IBM Generative AI Classroom에서 **텍스트·이미지·코드 생성 3가지**를 모두 실습
- 학습 목표: 콘텐츠 마케팅용 텍스트 생성 / 사실적인 이미지 생성 / 간단한 웹페이지 코드 생성

## 내용

### Exercise 1 — 소셜 미디어 게시물 생성 (텍스트)
- **효과적인 SNS 게시물 작성 원칙**: 대상·메시지·플랫폼을 신중히 고려, 청중에게 가치 제공·참여 유도, 비주얼과 CTA(Call To Action)로 개인화
- 채팅 이름을 "Text Generation"으로, 모델은 **GPT-5 Nano** 선택
- **Prompt Instructions**(맥락 고정)에 예: `이번 달 말 신제품 모바일 MobiZ10을 출시할 예정. 기대감을 조성하는 트윗이 필요.`
- **Type your message**에 예: `What's a catchy way to share this news on Twitter?`
- Start chat → 결과 확인 → 불만족 시 Regenerate response
- 직접 해보기: 인스타그램 게시물, 페이스북 공지 등

### Exercise 2 — 사실적인 이미지 생성
- 시나리오: 식물 기반 세제(plant-based cleaning products)를 출시하는 가상의 소규모 기업 — 마케팅·제품개발팀이 그래픽/패키징 디자이너와 협업해 병 디자인을 결정해야 함
- 새 채팅 생성 → 이름 "Image generation" → 모델 **GPT Image 2** 선택
- 예시 프롬프트: `식물과 잎이 그려진 화려한 라벨, 반짝이는 깨끗한 표면을 배경으로 한 식물 기반 세제 병 디자인 사진을 만들어줘`
- 같은 대화에서 이어서 인포그래픽 요청: `식물 기반 세제 제품의 장점을 나타내는 인포그래픽 디자인`
- 직접 해보기: 사용자 매뉴얼(user manual) 이미지, 웹사이트 이미지

### Exercise 3 — HTML 코드 생성
- 새 채팅 생성 → 이름 "Code generation" → 모델 **GPT-5 Nano** 선택
- Prompt Instructions: `Simple HTML webpage creation`
- 메시지: `Generate a simple HTML webpage with a heading that says "Welcome to My Page."`
- 생성된 코드를 **JSFiddle**(HTML/CSS/JS를 브라우저에서 실시간으로 테스트하는 온라인 코드 편집기)의 HTML 테스트 창에 붙여넣고 **Run**으로 실행·검증

## 요약
- 이 최종 프로젝트는 Module 1~2에서 배운 **텍스트·이미지·코드 생성 3대 역량**을 하나의 통합 실습으로 마무리
- [11 Lab - Generate Text using Generative AI](../Module%201%20-%20Introduction%20and%20Capabilities%20of%20Generative%20AI/11%20Lab%20-%20Generate%20Text%20using%20Generative%20AI.md), [07 Lab - Image Generation in Action](../Module%202%20-%20Applications%20and%20Tools%20of%20Generative%20AI/07%20Lab%20-%20Image%20Generation%20in%20Action.md), [11 Lab - Code Generation in Action](../Module%202%20-%20Applications%20and%20Tools%20of%20Generative%20AI/11%20Lab%20-%20Code%20Generation%20in%20Action.md)에서 익힌 패턴(구체적 프롬프트 → 생성 → 외부 도구로 검증)을 **실무형 시나리오**(마케팅 트윗, 제품 패키징, 웹페이지)로 종합 적용
- 공통 교훈: 프롬프트의 **구체성**이 결과 품질을 좌우하며, 생성된 결과는 항상 검증 후 사용해야 함
