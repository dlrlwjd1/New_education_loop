# Day 4 - Deep Agents Sub-Agents: Delegation and the Task Tool Explained

## 개요
- 차종별 연구 하위 에이전트를 두고 task 도구로 위임한 결과를 통합한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821391#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 하위 에이전트 정의
이름·설명·시스템 지침을 가진 vehicle researcher를 정의한다. 한 차량을 조사해 차량 구매 담당자가 알아야 할 핵심 사실을 반환하게 한다. lead는 전체 비교를 맡는다.

### 위임 실행
100대 규모 영업용 차량군의 후보로 Model Y와 Mustang Mach-E를 비교한다. lead가 task 도구를 두 번 호출해 조사 작업을 위임하고 fleet.md로 결과를 통합하는 것을 확인한다.

### trace 검토
할 일·검색·위임·파일 저장뿐 아니라 요약 및 공급자별 캐시 관련 middleware도 실행 구조에 보인다. 이런 추가 동작은 직접 작성한 코드 밖에서 프레임워크가 수행하는 기능이므로 관측으로 이해한다.

## 예시
```text
lead → task: Model Y 조사
     → task: Mustang Mach-E 조사
     → 두 결과 비교 → fleet.md
```

## 요약
- 하위 에이전트는 설명된 범위의 과제를 수행한다.
- 상위 에이전트의 위임과 결과 통합을 확인한다.
