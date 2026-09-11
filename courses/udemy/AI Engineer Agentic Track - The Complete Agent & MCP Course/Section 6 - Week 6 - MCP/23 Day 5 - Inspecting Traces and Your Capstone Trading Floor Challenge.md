# Day 5 - Inspecting Traces and Your Capstone Trading Floor Challenge

## 개요
- 캡스톤 trace에서 자율 조사 흐름을 확인하고 확장 과제를 정한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50769781#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 상세 관측
사용자 화면의 요약과 SDK의 상세 trace를 구분한다. 영상에서는 한 트레이더가 조사자를 두 번 호출하고 많은 도구를 사용한다. 조사자 호출 횟수를 고정하지 않았기 때문에 생긴 자율적 행동이다.

### 확장 과제
Playwright·Qdrant 등 필요한 기능을 추가하거나 피드백 기준을 강화한다. 또는 같은 구조를 자신의 업무 영역에 적용한다. 도구가 많아지는 것 자체보다 측정 가능한 결과와 다음 실행에 반영할 피드백을 목표로 한다.

## 예시
```text
trace에서 조사 반복·도구 선택 확인
→ 비효율 또는 정보 부족 발견
→ 도구·프롬프트·평가 기준 변경
→ 동일 목표로 결과 비교
```

## 요약
- 자율 행동은 실제 trace에서 확인한다.
- 확장은 업무 결과를 측정하며 진행한다.
