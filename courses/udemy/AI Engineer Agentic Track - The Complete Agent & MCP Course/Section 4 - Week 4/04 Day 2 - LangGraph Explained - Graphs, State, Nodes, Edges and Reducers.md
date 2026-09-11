# Day 2 - LangGraph Explained: Graphs, State, Nodes, Edges and Reducers

## 개요
- LangGraph의 state·node·edge·reducer와 그래프 구성 순서를 설명한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821329#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 그래프와 상태
그래프는 작업 흐름이며 노드는 하나의 작업, 엣지는 작업 사이의 연결이다. 상태는 그 시점의 진행 정보다. 상태 타입을 정하고 builder를 만든 뒤 노드·엣지를 추가하고 실행 가능한 그래프로 구성한다.

### 상태 갱신
노드는 입력 상태를 직접 바꾸기보다 갱신할 값을 반환한다. Python 객체가 언어 차원에서 완전히 불변이라는 의미가 아니라, 상태 변경을 반환값으로 표현하는 실행 규칙을 말한다.

### reducer
여러 갱신을 기존 상태와 어떻게 합칠지 reducer가 정한다. 메시지 추가처럼 누적이 필요한 경우 단순 덮어쓰기와 구분해야 한다. 병렬 노드의 결과를 합치려면 데이터에 맞는 병합 규칙이 필요하다.

## 예시
```text
기존 count=2 → 노드가 count=3 갱신 반환
기존 메시지 목록 + 새 메시지 → 메시지 reducer로 병합
```

모든 필드를 무조건 덮어쓰거나 무조건 이어 붙이는 방식은 적절하지 않다.

## 요약
- 노드는 작업, 엣지는 순서·분기, state는 공유 진행 정보다.
- reducer는 상태 갱신을 합치는 규칙이다.
