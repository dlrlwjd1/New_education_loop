# 13 Hands-on Lab: Getting Hands-on with a Simple Generative AI Model

## 개요
- ChatGPT 3.5를 활용해 제품 기능을 도출하고 우선순위를 매기는 30분 분량 핸즈온 랩(hands-on lab)

## 내용

### 목표
- ChatGPT 3.5를 사용해 제품 기능을 식별하고 우선순위화

### 시나리오
- 고객이 다양한 용도로 사용할 수 있는 **AI 기반 전문 사진 생성기**(앱 형태, 적당한 비용으로 다운로드)를 설계 중
- 초기 단계로 제품 요구사항 문서(product requirements document, PRD) 작성 필요 — 제품이 타깃 시장 세그먼트의 니즈를 충족하는 데 어떤 기능이 필요한지 파악하고, 이후 중요도 순으로 우선순위화

### Task 1 — ChatGPT 접속
- openai.com/chatgpt를 통해 ChatGPT 접속

### Task 2 — 초기 프롬프트로 제품 기능 목록 도출
- 프롬프트는 단순하게, 모호함 없이, 필요한 배경 정보를 포함해 작성 ([08 Reading - The Power of Prompts](08%20Reading%20-%20The%20Power%20of%20Prompts.md) 참고)
- **예시 프롬프트**: "나는 생성형 AI 기반 전문 사진 생성기를 개발하고 있다. 이 제품은 앱 기반이다. 폭넓은 시장 세그먼트에 어필하려면 어떤 핵심 기능을 고려해야 하는가?"
- **ChatGPT 응답 요약** — 다음과 같은 핵심 기능 제시:
  - 고품질 출력(High-Quality Output) — 전문가급 해상도·사실적 디테일
  - 커스터마이징 옵션(Customization Options) — 조명·색보정·구도 조절
  - 다양한 스타일·테마(Diverse Styles and Themes) — 풍경·인물·추상·빈티지 등
  - 사용자 친화적 인터페이스(User-Friendly Interface) — 드래그앤드롭, 실시간 미리보기
  - 편집 도구 통합(Integration with Editing Tools) — Photoshop·Lightroom 등과 연동
  - 배치 처리(Batch Processing) — 여러 사진 동시/일괄 생성
  - AI 기반 보정(AI-Powered Enhancements) — 노이즈 감소, 선명도 향상, 객체 제거
  - 클라우드 기반 처리(Cloud-Based Processing) — 기기 사양과 무관한 빠른 처리
  - 공유·협업(Sharing and Collaboration) — 소셜 공유, 협업 도구, 클라우드 저장소 연동
  - 프라이버시·보안(Privacy and Security) — GDPR 등 규제 준수, 데이터 사용 투명성
  - 피드백 메커니즘(Feedback Mechanism) — 사용자 의견 수집 및 반영

### Task 3 — 워크시트 작성
- ChatGPT Worksheet를 다운로드해 상위 5개 기능을 우선순위 순으로 문서화

### Task 4 — 후속 프롬프트로 우선순위화
- **예시 프롬프트**: "이 기능들 각각을 고객에게 얼마나 중요한지 기준으로 우선순위화해 줄 수 있나?"
- **ChatGPT 응답 요약** — 우선순위 순서:
  1. 고품질 출력 (가장 핵심 — 다른 기능이 의미를 가지려면 전제 조건)
  2. 커스터마이징 옵션 (사용자 비전에 맞춘 유연성)
  3. 사용자 친화적 인터페이스 (긍정적 사용자 경험의 핵심)
  4. 편집 도구 통합 (활용도·범용성 향상)
  5. 다양한 스타일·테마 (기본 니즈 충족 후 가치 추가)
  6. 배치 처리 (특정 사용자의 워크플로 효율성 향상)
  7. AI 기반 보정 (부차적이나 품질에 기여)
  8. 클라우드 기반 처리 (확장성·성능이나 모든 고객에게 우선순위는 아님)
  9. 공유·협업 (소셜·협업 측면 강화하나 필수는 아님)
  10. 프라이버시·보안 (당연히 전제되는 경우가 많으나 신뢰도에 중요)
  11. 피드백 메커니즘 (백엔드 성격이 강해 사용자 경험에 직접 영향은 적음)

### Task 5 — 동료 검증
- 동료·친구·지인과 결과를 비교하고 출력의 타당성에 대한 의견 구하기

## 요약
- 이 랩은 [08 Reading - The Power of Prompts](08%20Reading%20-%20The%20Power%20of%20Prompts.md)의 "구체적·구조화·맥락·현실적" 프롬프트 원칙을 실제로 적용해보는 실습
- 핵심 패턴: **1차 프롬프트(기능 브레인스토밍) → 2차 프롬프트(우선순위화)** — 대화를 이어가며 점진적으로 결과를 구체화하는 생성형 AI의 대화형(conversational) 특성을 활용
- ChatGPT가 제시한 "고품질 출력이 최우선"이라는 우선순위는 [11 AI-Powered Product Manager for a Day](11%20AI-Powered%20Product%20Manager%20for%20a%20Day.md) 역할극의 동일 제품 시나리오와 직접 연결됨
- 다음 [Lesson 1 Practice Quiz는 건너뛰고, 14 Lesson 1 Summary](14%20Lesson%201%20Summary%20-%20The%20AI%20Impact%20on%20the%20Product%20Lifecycle.md)로 이어짐
