# Day 2 - Build AI Agents with Pydantic AI and Structured Outputs

## 개요
- Pydantic AI의 타입 중심 구성과 Agent·함수 도구·MCP 연결을 살펴본다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821605#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 프레임워크 특징
Pydantic 팀의 에이전트 프레임워크로 타입과 구조화 출력이 주요 특징이다. 영상은 사용 버전을 고정하고 Logfire 관측 연동은 별도 선택 사항으로 소개한다.

### Agent와 도구
모델과 instructions를 지정하고 Agent.run으로 실행한다. 보드 조회·계획·완료 함수를 도구 목록에 넣는다. 여러 데코레이터 방식이 있지만 이 실습은 단순 함수 전달 방식을 사용한다.

### MCP와 실습 결과
파일 시스템 MCP toolset을 연결한 뒤 notes.txt 요약을 확인한다. 전체 번역 목표를 보드에 넣으면 하위 단계를 만들고 Spanish.txt를 작성한다. 다른 프레임워크와 같은 다섯 단계를 반복해 개념의 공통점을 비교한다.

## 예시
```text
Agent 생성 → 간단한 실행 → 보드 도구
→ 파일 MCP 연결 → 번역 목표 실행
결과: Spanish.txt + 완료된 목표·단계
```

## 요약
- 타입·구조화 출력과 일반 에이전트 기능을 함께 제공한다.
- 같은 과제로 프레임워크의 문법 차이를 비교한다.
