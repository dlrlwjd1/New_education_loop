# Day 5 - Run the Multi-Agent Loop: Six Frameworks Build in Parallel

## 개요
- 여러 프레임워크의 worker가 게임을 병렬 제작하고 QA하는 전체 실행을 관찰한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821669#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 실제 실행
ADK 조율자가 Strands·Pydantic AI·Microsoft Agent Framework·Agno·Mastra worker에 서로 다른 게임을 맡긴다. 각 worker의 목표와 하위 단계가 보드에 나타나고 완료 처리된다.

### 결과 확인
QA 브라우저가 각 게임을 시험하고 최종 사이트에서 색상 맞추기 등 결과물을 확인한다. HTML 생성 자체보다 바깥 조율 루프와 안쪽 작업 루프가 함께 움직이는 구조가 학습의 핵심이다.

### 확장 과제
자신의 업무 문제로 목표를 바꾸고 자동 채점 가능한 기준을 만든다. 주관적인 LLM 평가만으로 끝내지 말고 점수에 따라 외부 피드백 루프를 개선하도록 제안한다. 자율 조율은 실행마다 결과가 달라질 수 있다.

## 예시
```text
전체 사이트 목표
→ 다섯 worker가 독립 게임 제작
→ 공통 보드에서 진행 확인
→ 브라우저 QA → 통합 사이트 검토
```

## 요약
- 다른 프레임워크도 공통 과제 계약으로 협력할 수 있다.
- 개선의 기준을 자동 측정 가능한 결과로 만든다.
