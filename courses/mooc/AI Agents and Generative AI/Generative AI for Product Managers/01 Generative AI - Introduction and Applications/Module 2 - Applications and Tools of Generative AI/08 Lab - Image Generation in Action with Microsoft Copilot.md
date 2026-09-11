# 08 Lab: Image Generation in Action with Microsoft Copilot and Microsoft Designer (선택 실습)

## 개요
- **Microsoft Copilot**과 **Microsoft Designer**를 이용한 45분 선택(optional) 실습 — Microsoft 계정으로 로그인 필요
- [07 Lab - Image Generation in Action](07%20Lab%20-%20Image%20Generation%20in%20Action.md)이 IBM 샌드박스(GPT Image 2)였다면, 이 랩은 **실제 상용 도구**(Copilot/Designer)로 이미지 캡션·썸네일·SNS 게시물까지 실무형 결과물을 만들어봄

### 학습 목표
- Microsoft Copilot·Designer로 생성형 AI의 이미지 생성 역량 탐색
- Copilot으로 이미지 캡션(caption) 생성
- Copilot으로 큰 이미지를 대표하는 썸네일(thumbnail) 이미지 제작
- Designer로 소셜 미디어 게시물(social media post) 생성

## 내용

### Microsoft Copilot이란
- Microsoft가 개발한 LLM 기반 챗봇 — OpenAI GPT-4 파운데이션 모델을 지도학습·강화학습으로 미세조정한 **Microsoft Prometheus 모델** 기반
- ChatGPT와 유사한 대화형 인터페이스, 다국어 지원
- 무료 버전으로도 **무제한 이미지 생성** 가능 (Microsoft 계정 필요)

### Exercise 1 — Copilot으로 이미지 캡션 생성
- **배경**: 이미지 캡션은 스크린 리더 등 보조 기술이 읽어줄 수 있어 시각장애인의 접근성(accessibility) 향상에 중요
- 절차: 캡션을 원하는 이미지 선택 → copilot.microsoft.com 접속·로그인 → 프롬프트 입력창에 이미지 업로드 → 메시지 입력
  - 예시 프롬프트: `Generate a caption for this image.`
- **Submit** 클릭 → 몇 초 내 캡션 생성. `Regenerate response`라고 입력하면 재생성 가능
- 연습: 자신이 고른 이미지 3장으로 캡션 생성 반복

### Exercise 2 — Copilot으로 썸네일 이미지 제작
- **배경**: 썸네일 = 영상·이미지·문서 등 큰 콘텐츠의 미리보기 이미지. 탐색성·사용자 경험·콘텐츠 정리·마케팅에 기여
- 절차: Copilot에 로그인 → 프롬프트 입력
  - 예시 프롬프트: `Create a thumbnail for a video based on the importance of IBM certification.`
- **Submit** → 결과 이미지를 **Download**로 저장
- 연습: 썸네일 3개 생성

### Exercise 3 — Microsoft Designer로 소셜 미디어 게시물 생성
- **Microsoft Designer란**: Microsoft 365에 포함된 AI 기반 그래픽 디자인 도구. OpenAI의 **DALL-E** 이미지 생성 모델을 활용해 전문가급 디자인을 빠르게 제작
- 절차: designer.microsoft.com 접속 → Copilot과 동일 계정으로 로그인 → **Social Posts** 옵션 선택 → Description 필드에 프롬프트 입력
  - 예시 프롬프트: `Create a social media post highlighting the significance of IBM certification.`
- 사이즈(예: Landscape) 선택 → **Create** 클릭 → 결과 확인 (자신의 이미지를 업로드해 활용도 가능)
- 연습: 소셜 게시물 3개 생성

## 요약
- [07 Lab - Image Generation in Action](07%20Lab%20-%20Image%20Generation%20in%20Action.md)이 "순수 이미지 생성"에 초점을 맞췄다면, 이 랩은 **캡션·썸네일·SNS 게시물처럼 실제 마케팅/커뮤니케이션 산출물**을 만드는 데 초점
- 사용 도구: **Microsoft Copilot**(캡션·썸네일, GPT-4/Prometheus 기반) + **Microsoft Designer**(소셜 게시물, DALL-E 기반)
- [06 Tools for Image Generation](06%20Tools%20for%20Image%20Generation.md)에서 언급된 이미지 생성기의 **API/제품 통합 사례**(Bing Image Creator, Adobe Firefly 등)와 같은 맥락 — 대기업들이 이미지 생성 모델을 자사 제품에 임베드해 실무 워크플로를 지원하는 방식을 보여줌
