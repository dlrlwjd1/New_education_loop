# Day 1 - CrewAI Core Concepts: Agents, Tasks, Crews, and YAML Files

## 개요
- CrewAI의 Agent·Task·Crew와 실행 방식, YAML 설정 및 환경변수 주의점을 설명한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821125#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### Agent와 Task
Agent는 모델·도구·메모리를 가지며 `role`, `goal`, `backstory`로 시스템 지침을 구성한다. Task는 수행할 일의 설명과 기대 출력이며 담당 에이전트를 지정한다. 강사는 에이전트의 장황한 배경보다 명확한 과제와 기대 결과가 중요하다고 강조한다.

### Crew와 실행 방식
Crew는 에이전트와 과제의 묶음이다. sequential은 정해진 과제 흐름을, hierarchical은 관리자 모델의 조율을 사용한다. 앞 주의 코드 기반 조율과 LLM 기반 조율에 대응해 이해한다.

### 파일과 설정
`agents.yaml`, `tasks.yaml`은 프롬프트 설정을, `crew.py`는 연결을, `main.py`는 실행 입력을 맡는다. 영상은 LiteLLM을 통한 공급자 전환을 설명한다. Gemini 키 이름, 하위 프로젝트에 생성된 `.env`, 시스템에 남아 있는 오래된 키가 설정 오류의 원인이 될 수 있다. 로드 우선순위를 확인해야 한다.

## 예시
```text
agents.yaml: 조사자의 역할·목표·배경
 tasks.yaml: 조사할 내용·기대 보고서·담당자
    crew.py: Agent와 Task를 Crew로 연결
    main.py: 입력값을 전달하고 실행
```

## 요약
- CrewAI는 지침 구조와 프로젝트 구성에 정해진 방식을 제공한다.
- 설정 이름과 환경변수 우선순위가 실제 실행에 영향을 준다.
