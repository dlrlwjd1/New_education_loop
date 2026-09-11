# Day 1 - Build Your First Crew: crewai create crew and crewai run

## 개요
- 기본 연구용 Crew 프로젝트를 생성하고 네 핵심 파일을 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821133#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 프로젝트 생성
Crew 프로젝트 자체도 uv 프로젝트다. 생성 명령이 `src/{프로젝트}/config`의 YAML 두 개와 `crew.py`, `main.py`를 만든다. 생성기가 만든 내부 `.env`가 상위 설정을 가릴 수 있어 영상에서는 불필요한 내부 파일을 제거한다.

### 기본 연구 예제 수정
researcher와 reporting analyst의 역할·목표·배경·모델을 확인한다. YAML에서 llm 항목의 들여쓰기는 role·goal·backstory와 같아야 한다. main의 주제를 AI 에이전트 프레임워크로 바꾸고 저장한다.

### 결과 검토
프로젝트 안에서 실행하면 조사와 보고서 작성이 진행되고 `report.md`가 생성된다. 이 기본 예제는 아직 검색 도구를 붙이지 않았으므로 모델의 기존 지식에 의존한다. 보고서가 생성됐다는 사실과 최신 웹 조사가 이뤄졌다는 사실을 구분한다.

## 예시
```bash
crewai create crew researcher
cd researcher
crewai run
```

생성과 실행 사이에 네 파일과 환경 설정을 확인한다.

## 요약
- 스캐폴딩이 기본 에이전트와 과제를 만든다.
- 기본 연구 보고서는 검색 도구 없이도 생성될 수 있다.
