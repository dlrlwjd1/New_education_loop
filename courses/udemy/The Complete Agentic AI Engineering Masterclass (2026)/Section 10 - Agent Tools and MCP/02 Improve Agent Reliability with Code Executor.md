# Improve Agent Reliability with Code Executor (Hands On)

## 개요
- LLM이 산술을 직접 하지 않고 Python 코드를 생성·실행하도록 구성한다.

## 내용
### 계산 에이전트
Calculation Agent는 계산 요청을 단일 Python 코드 블록으로 바꾸고 표준 출력에 결과를 출력한다. ADK의 샌드박스 코드 실행기가 코드를 실행하며, 루트 통화 에이전트는 Calculation Agent를 `AgentTool`로 호출한다.

## 예시
```text
수수료·환율 조회 → Python 코드 생성 → 샌드박스 실행
→ 계산 결과 → 통화 에이전트의 최종 설명
```

## 요약
- 수학처럼 결정성이 중요한 작업은 코드 실행으로 보강한다.
- 생성 코드와 실행 결과를 관찰할 수 있어야 디버깅할 수 있다.
