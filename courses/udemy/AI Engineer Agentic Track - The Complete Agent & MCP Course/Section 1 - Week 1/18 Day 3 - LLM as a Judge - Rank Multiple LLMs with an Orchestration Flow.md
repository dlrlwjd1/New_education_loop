# Day 3 - LLM as a Judge: Rank Multiple LLMs with an Orchestration Flow

## 개요
- 모델 응답을 익명화하고 별도 LLM이 평가·순위를 내도록 구성한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49771155#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 답변 정리와 익명화
`zip`으로 모델명·응답 리스트를 함께 순회하고 `enumerate`로 응답에 번호를 붙인다. 평가 프롬프트에는 모델명을 빼고 참가자 1~9의 응답만 넣어 이름에 따른 편향을 줄이려 한다.

### 평가 프롬프트
원래 질문과 모든 답변을 제공하고 명확성·논증의 설득력을 기준으로 최상부터 최하까지 순위를 내도록 요청한다. 결과는 JSON 형식으로 요구한다. 모델의 출력 토큰을 코드가 읽을 수 있는 결정으로 해석하는 사례다.

### 판정과 이름 복원
답변 생성에 참여하지 않은 Grok를 심판으로 사용하고, 반환된 참가자 번호를 원래 모델명으로 되돌린다. 영상에서는 Kimi가 1위, Claude가 다음으로 평가되지만 강사는 자신의 선호와 결과가 다를 수 있음을 지적한다. 이 순위는 해당 질문과 심판에 대한 실습 결과다.

### 확장 과제
질문 생성 → 여러 독립 답변 → 심판이라는 흐름에 어떤 설계 패턴이 섞였는지 판단한다. 추가 호출이나 다른 패턴으로 워크플로를 개선해 보는 것이 과제다. 하나의 특정 패턴명만 정답으로 암기하도록 하지 않는다.

## 예시
실습에서 쓰는 리스트 순회 방식을 독립적으로 확인하는 예시다.

```python
competitors = ["model-a", "model-b"]
answers = ["첫 번째 답변", "두 번째 답변"]
for number, (model, answer) in enumerate(zip(competitors, answers), start=1):
    print(number, model, answer)
```

심판에게 전달하는 텍스트에서는 `model`을 제외하고 번호와 답변만 사용한다.

## 요약
- 익명화는 모델 이름이 평가에 미치는 영향을 줄이려는 장치다.
- JSON 순위의 번호를 원래 모델명으로 매핑한다.
- LLM 심판의 결과도 질문·평가기준·심판 모델에 의존한다.
