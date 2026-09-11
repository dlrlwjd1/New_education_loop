# Day 1 - Environment Setup Overview: UV, API Keys, Costs and GitHub Repo

## 개요
- 6주 과정에 필요한 저장소, Python 환경, API 키와 예상 비용을 설명한다.

## 내용
### 공통 개발 환경
과정의 GitHub 저장소를 로컬에 복제하고 Cursor 또는 VS Code에서 연다. Python 의존성과 가상환경은 `uv`로 관리하며, 저장소의 주차별 디렉터리와 가이드를 기준으로 실습한다.

OpenAI·Anthropic·Google 등 여러 모델 제공자의 키를 `.env`에 저장한다. 모든 유료 모델을 사용할 필요는 없고 무료·로컬 대안을 선택할 수 있다. 유료 프런티어 모델을 사용할 경우에도 과정의 일반적인 API 비용은 소액으로 안내된다.

## 예시
```text
GitHub 저장소 복제
→ Cursor/VS Code에서 프로젝트 열기
→ uv sync
→ .env에 필요한 API 키만 설정
```

## 요약
- 운영체제별 설정 강의를 따른 뒤 공통 실습 환경으로 합류한다.
- API 키는 소스 코드와 분리하고 필요한 제공자만 활성화한다.
- [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49770323#overview)
