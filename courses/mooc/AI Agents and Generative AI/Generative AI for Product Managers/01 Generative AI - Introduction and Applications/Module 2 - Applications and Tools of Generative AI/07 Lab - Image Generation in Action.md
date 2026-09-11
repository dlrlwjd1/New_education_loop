# 07 Lab: Image Generation in Action (실습 — 이미지 생성)

## 개요
- IBM **Generative AI Classroom**에서 **GPT Image 2** 모델을 사용해 텍스트 프롬프트로 사실적인 이미지를 생성하는 30분 실습
- [06 Tools for Image Generation](06%20Tools%20for%20Image%20Generation.md)에서 배운 이미지 생성 역량을 직접 체험

### 학습 목표
- 생성형 AI의 이미지 생성 역량 탐색
- 원하는 이미지를 얻기 위한 프롬프트 작성
- GPT Image 2 모델로 텍스트로부터 사실적인 이미지 생성
- 다양한 시나리오에 대해 이미지 생성 연습

### 유의 사항
- GPT Image 모델은 **일일 사용량 제한**이 있음 — 한도 도달 시 24시간(또는 안내된 시간) 대기 필요, 신중하게 사용 권장

## 내용

### Step 1 — AI Classroom 설정
- 채팅 이름 짓기 → 모델 드롭다운에서 **GPT Image 2** 선택 → 메시지 입력창에 프롬프트 작성

### Exercise 1 — 기본 이미지 생성
- 예시 프롬프트: `Create a captivating and scientifically accurate image of the solar system. Include depictions of the sun and the planets.`
- **Start chat**으로 전송 → 중앙 창에 생성 이미지 표시
- 같은 프롬프트라도 모델 특성상 결과가 매번 달라질 수 있음(non-deterministic)
- 마음에 안 들면 **Regenerate response**로 재생성, 이미지는 우클릭 → **Save image as**로 저장 가능

### Exercise 2 — 실무 시나리오별 이미지 생성
실제로 많은 기업이 패키지 디자인 아이디어, 로고 디자인, 브랜드 키트 제작 등에 AI 이미지 생성을 활용하고 있음. 두 가지 실무 시나리오 연습:

**시나리오 1 — 유기농 비누 패키지 디자인 아이디어**
- 예시 프롬프트: `Generate an image showing packaging ideas for skin-friendly, colorful organic soaps.`

**시나리오 2 — 음료 브랜드 마케팅 이미지**
- **New Chat**으로 새 대화 시작 → 채팅 이름 짓기 → GPT Image 2 모델 재선택
- 예시 프롬프트: `Generate a realistic image of people enjoying a cold beverage in a garden. There should be colorful flowers visible in the background with blue sky and white clouds.`

### Step 3 — 직접 해보기 (제안 시나리오)
- 물 절약을 통한 환경 보호 포스터
- 자연 환경 요소가 있는 강 위의 보트 풍경
- F1 자동차 경주 대회 배너

## 요약
- 이 랩은 [06 Tools for Image Generation](06%20Tools%20for%20Image%20Generation.md)의 이론(DALL-E, Stable Diffusion 등)을 IBM Generative AI Classroom의 **GPT Image 2** 모델로 직접 실습
- 핵심 흐름: **채팅 설정(이름·모델 선택) → 구체적인 프롬프트 작성 → 생성 → 불만족 시 재생성 → 저장**
- 패키지 디자인·마케팅 이미지처럼 **실무 PM 업무와 직결되는 시나리오**로 연습한다는 점이 특징 — 프롬프트가 구체적일수록(장면, 색감, 배경 요소 등) 결과 품질이 좋아짐
