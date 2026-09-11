# Demonstration - Engineering Structured Intelligence - Schemas Hooks and Execution Lifecycle

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/multi-agent-ai-system-crewai/lecture/jrIjL/demonstration-engineering-structured-intelligence-schemas-hooks-and-execution-lifecycle)

## 개요
- '구조화된 지능 설계'에 대한 이번 데모에 오신 것을 환영합니다 Crew AI의 스키마, 훅, 그리고 실행 라이프사이클 실제 다중 에이전트 시스템에서 가장 큰 실패 원인 중 하나는 에이전트가 콘텐츠를 생성하지 못하는 것이 아닙니다.

## 내용
- '구조화된 지능 설계'에 대한 이번 데모에 오신 것을 환영합니다 Crew AI의 스키마, 훅, 그리고 실행 라이프사이클 실제 다중 에이전트 시스템에서 가장 큰 실패 원인 중 하나는 에이전트가 콘텐츠를 생성하지 못하는 것이 아닙니다.
- 이 파일에서는 agents.yaml의 에이전트 식별자, tasks.yaml의 작업 정의, 모델 구성, 구조화된 pydantic 출력, 콜백 및 실행 후크가 모두 통합되는 곳입니다.
- 즉, self.agents 구성이 자동으로 config agents.yaml을 로드하고, self.tasks 구성이 config tasks.yaml을 로드한다는 점을 명확히 문서화합니다.
- 또한 at crew base, at agent, at task, at crew와 같은 프로젝트 데코레이터와 'before kickoff' 및 'at after kickoff'와 같은 라이프사이클 훅을 가져옵니다.
- 그런 다음 pydantic의 base model과 field, list와 같은 타입 지정 유틸리티, 그리고 datetime, JSON, OS와 같은 운영 도구도 가져옵니다.
- 이 파일은 단순히 에이전트를 실행하는 것뿐만 아니라, 구조화된 출력을 검증, 측정 및 저장하는 구조화된 출력을 검증, 측정 및 저장하는 데 관한 것입니다.
- 이 모델은 GE를 1로 설정하여 모든 품질 점수가 1에서 10 사이여야 하며 , LE는 10으로 설정하여 모든 품질 점수가 1에서 10 사이여야 함을 강제합니다.

## 예시
- '구조화된 지능 설계'에 대한 이번 데모에 오신 것을 환영합니다 Crew AI의 스키마, 훅, 그리고 실행 라이프사이클 실제 다중 에이전트 시스템에서 가장 큰 실패 원인 중 하나는 에이전트가 콘텐츠를 생성하지 못하는 것이 아닙니다.

## 요약
- 이 파일은 단순히 에이전트를 실행하는 것뿐만 아니라, 구조화된 출력을 검증, 측정 및 저장하는 구조화된 출력을 검증, 측정 및 저장하는 데 관한 것입니다. 이 모델은 GE를 1로 설정하여 모든 품질 점수가 1에서 10 사이여야 하며 , LE는 10으로 설정하여 모든 품질 점수가 1에서 10 사이여야 함을 강제합니다.
