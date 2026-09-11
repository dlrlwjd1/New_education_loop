# Introduction to Hugging Face Spaces

## 개요
- Noah Gift가 다시 등장해, 커뮤니티가 만든 재미있는 Spaces(DALL-E Mini, Stable Diffusion)를 둘러본 뒤, 직접 새 Space(`hello5000`, Gradio)를 만들어 웹 UI에서 바로 코드를 작성해보는 4분 실습.

## 내용

### 커뮤니티 Spaces 둘러보기
- **가장 좋아요 많은(most likes)** Spaces 필터로 탐색 — **DALL-E Mini**, **Stable Diffusion** 등 확인.
- **Stable Diffusion** Space에서 "Mickey Mouse on the moon" 같은 프롬프트를 넣어 이미지 생성 실행 — 사전학습 모델 기반 예측이 즉시 실행됨.
- Space의 **Files → app.py**에서 실제 애플리케이션 코드를 열람 가능 — "다른 사람의 좋은 아이디어를 훔쳐볼 수 있다."

### 모델 카드에서도 앱 사례 확인 가능
- Models 섹션에서 카테고리(예: Text → Summarization → **Google Pegasus**)로 들어가면, 이 모델을 실제로 사용한 애플리케이션들의 목록을 확인 가능.
- 위키피디아의 Python 관련 텍스트를 붙여넣어 요약을 직접 테스트 → 완료 후 해당 앱의 Files에서 코드를 그대로 복사해 활용 가능.

### 자신만의 Space 만들기 — 웹 UI에서 바로 코딩
- "Create new space" → 이름(`hello5000`) → SDK 선택: **Streamlit**(ML 시각화에 특화), **Gradio**(Hugging Face와 가장 밀접하게 연동), **Static** 중 **Gradio** 선택 → Create.
- 로컬로 클론해 작업할 수도 있지만, **웹 UI에서 바로 파일을 만들고 편집**하는 것도 가능 — Files → Add → Create new file → `app.py` 생성 후 코드 붙여넣기.
- 저장 즉시 **빌드가 자동 시작**되며, **실시간 빌드 로그** 확인 가능(공통 패키지 설치 → 이미지 푸시 진행 상황, 에러가 있으면 여기서 바로 확인).
- 빌드 완료 후 Hello World 애플리케이션이 실제로 실행되는 것을 확인 — 텍스트를 입력하면 실제로 동작.

### 핵심 통찰
- Spaces의 진짜 가치는 **데이터셋이나 모델을 아주 빠르게 프로토타이핑**할 수 있다는 것 — Hello World 같은 간단한 앱도 마찬가지로 손쉽게 만들어볼 수 있음.

## 요약
- Hugging Face Spaces는 커뮤니티가 만든 앱(Stable Diffusion, DALL-E Mini 등)의 코드를 직접 열람해 배우고, 자신만의 Space를 웹 UI에서 바로(로컬 클론 없이도) 만들어 실시간 빌드 로그로 확인하며 빠르게 프로토타이핑할 수 있는 환경이다.
