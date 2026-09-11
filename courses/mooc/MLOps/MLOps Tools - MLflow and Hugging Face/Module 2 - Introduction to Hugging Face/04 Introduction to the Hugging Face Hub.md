# Introduction to the Hugging Face Hub

## 개요
- 계정/Access Token 설정부터 Models/Datasets/Spaces 세 핵심 제품을 실제로 둘러보는 5분 개괄 영상. 앞선 영상과 겹치는 부분도 있지만 **Access Token**과 **모델 랭킹/필터링**을 더 구체적으로 다룬다.

## 내용

### 계정과 Access Token
- 프로필 설정에서 이름·홈페이지 등록 외에 가장 중요한 것은 **Access Token 생성** — 이 토큰으로 GitHub Actions 같은 곳에서 Hugging Face Hub에 **프로그래매틱하게 접근**(아티팩트 푸시, 데이터셋 읽기/쓰기, Space 설정 등)할 수 있음.
- "계정 만들기 + Access Token 발급 후 안전한 곳에 저장하기"가 Hub 활용의 첫 단계.

### Models — 태스크 기반 탐색
- 이 시점 기준 **약 8만 개의 모델** 존재(계속 성장 중이라고 언급).
- **태스크(Task)**별로 필터링 가능: Image Classification, Translation 등. 더 상위 카테고리(Computer Vision, NLP, Audio 등)로도 좁혀볼 수 있음.
- 예: **Automatic Speech Recognition** 카테고리에서 **다운로드 수 기준 정렬(Sort by Most Downloads)** — 어떤 모델이 인기 있는지 파악하는 좋은 방법. 예시로 **OpenAI Whisper-large**를 언급(음성 인식/전사에 활용 가능).

### Datasets — 파인튜닝을 위한 자원
- 데이터셋의 존재 의의는 **사전학습 모델을 특정 문제에 맞게 파인튜닝**하는 것.
- **세부 태스크**(language-modeling, multi-class-classification 등)별로 탐색 가능.
- 데이터셋 페이지에서 **구조 정보, 미리보기(preview), API 호출 예시**(터미널에서 바로 쿼리 가능)를 확인할 수 있고, Hugging Face 환경 내에서 바로 학습(train)도 가능.

### Spaces — ML 앱을 쉽게 만들고 공유
- "Create new Space"로 이름·기술 스택(Streamlit/Gradio/Static)·라이선스를 설정해 손쉽게 생성.
- 다른 사람의 Space에 들어가 **실제 파일(앱 코드)을 열람**할 수 있어, 예제를 학습하기 좋은 자료가 됨 — 예: **Stable Diffusion Demo**가 Gradio로 만든 애플리케이션 파일을 그대로 공개.

## 요약
- Hugging Face Hub 활용의 첫걸음은 **계정 + Access Token**이며, Models(태스크별 탐색·다운로드 랭킹)/Datasets(파인튜닝용, 미리보기·API 쿼리 가능)/Spaces(Streamlit/Gradio/Static 기반 데모 앱, 코드 공개)라는 세 축을 중심으로 프로그래매틱하게 상호작용할 수 있다.
