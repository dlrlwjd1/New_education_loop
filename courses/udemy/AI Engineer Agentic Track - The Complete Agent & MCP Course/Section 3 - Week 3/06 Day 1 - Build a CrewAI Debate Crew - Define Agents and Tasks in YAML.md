# Day 1 - Build a CrewAI Debate Crew: Define Agents and Tasks in YAML

## 개요
- 찬반 토론 프로젝트의 에이전트 두 개와 과제 세 개를 YAML로 정의한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821137#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 두 에이전트
`debater`는 설득력 있는 논증을 만들고 `judge`는 제시된 논증을 비교한다. 역할·목표·배경을 설정하고 목표에는 성공 기준을 넣는다. `{motion}`은 실행 시 주입할 토론 주제다.

### 세 과제
`propose`와 `oppose`를 같은 debater에게 배정하고 `decide`를 judge에게 배정한다. 에이전트 수와 과제 수는 같을 필요가 없다. 각 과제에는 설명·기대 출력·담당 에이전트·출력 파일을 지정한다.

### 설정과 코드의 분리
기본 연구 프로젝트 설정을 토론 설정으로 교체한다. 강사는 reference의 내용을 coursework에서 재구성하며, 실제 주제 입력은 다음 단계의 `main.py`에서 처리한다.

## 예시
```text
motion: LLM 규제를 위한 엄격한 법이 필요한가?
propose(debater) → oppose(debater) → decide(judge)
각 과제 결과 → 별도의 Markdown 파일
```

## 요약
- 두 에이전트가 세 과제를 수행한다.
- YAML의 placeholder는 실행 입력과 연결되어야 한다.
