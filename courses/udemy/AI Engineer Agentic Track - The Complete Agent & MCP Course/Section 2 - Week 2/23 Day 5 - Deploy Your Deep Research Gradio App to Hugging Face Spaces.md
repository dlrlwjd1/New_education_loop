# Day 5 - Deploy Your Deep Research Gradio App to Hugging Face Spaces

## 개요
- Deep Research를 Hugging Face Spaces에 배포하고 세 가지 확장 과제를 살펴본다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820815#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 배포와 환경 설정
Deep Research 폴더에서 Hugging Face 로그인을 확인하고 Gradio 배포 명령을 실행한다. 앱 파일은 `app.py`로 지정한다. Space 설정에 API 키 등 필요한 환경변수를 등록하고 재시작한 뒤 실제 질의를 실행한다.

### 발송 경로 점검
강의의 Spaces 배포에서는 SMTP 발송이 되지 않아 `USE_EMAIL=false`와 Pushover 설정을 사용한다. 메일이 필요하면 검증된 도메인을 사용하는 메일 서비스 대안을 설명한다. 이는 영상에서 다룬 배포 환경의 제약이다.

### 확장 과제
첫째, 검색 전 명확화 질문을 받아 사용자 답변을 검색 계획까지 전달한다. 둘째, 로그와 평가 기준을 두고 프롬프트를 개선한다. 셋째, Python의 고정 순서를 관리자 에이전트와 agents-as-tools로 바꿔 비교한다. 관리자는 필요에 따라 추가 질문·추가 검색을 선택할 수 있지만, 그 자유가 실제 품질 향상으로 이어지는지 평가해야 한다.

## 예시
```text
사용자 질문 → 명확화 질문 → 사용자 답변
→ 답변을 반영한 검색 → 보고서 → 배포 화면·알림 확인
```

같은 질문으로 고정 워크플로와 관리자 에이전트의 결과를 비교하는 것이 확장 과제다.

## 요약
- 배포 뒤에는 환경변수와 외부 발송까지 검증한다.
- 에이전트의 자율성은 신뢰성과 결과 품질을 함께 비교해 판단한다.
