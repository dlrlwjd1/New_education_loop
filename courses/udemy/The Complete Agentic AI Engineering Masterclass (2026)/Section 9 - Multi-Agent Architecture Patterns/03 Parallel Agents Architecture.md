# Parallel Agents Architecture

## 개요
- 독립적인 연구 작업을 동시에 실행해 전체 지연 시간을 줄인다.

## 내용
### 병렬 조사와 집계
Tech, Health, Finance Researcher가 Google Search를 사용해 동시에 조사한다. 각 결과는 별도 상태 키에 저장되고 Aggregator Agent가 공통 주제, 연결점과 핵심 결론을 합친다.

구조는 세 연구 에이전트를 감싼 `ParallelAgent`와 Aggregator를 잇는 `SequentialAgent`다.

## 예시
```text
Tech ─┐
Health ├→ Aggregator
Finance┘
```

## 요약
- 서로 의존하지 않는 작업에만 병렬 패턴을 사용한다.
- 병렬 결과를 통합할 별도 단계가 필요하다.
