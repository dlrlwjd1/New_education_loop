# Model Context Protocol & AI Problem Solving with Tools

## 개요
- "AI에게 도구(tool)를 준다"는 것이 실제로는 복잡한 훈련이나 로보틱스가 아니라, **AI와의 대화 속에서 도구를 설명해주는 것**임을 스파게티 요리라는 간단한 예제로 보여주는 강의.

## 내용
### "도구를 준다"는 것의 실체 — 그냥 대화일 뿐
- AI는 근본적으로 **대화(conversation)** 기반으로 작동한다.
- "도구를 준다"는 것은 대화 속에서 **"너에게는 이런 도구들이 있다"고 설명해주는 것**에 불과하다 — 복잡한 로봇공학이나 별도 훈련이 필요 없다.

### 실습 프롬프트 — 스파게티 요리하기
- 프롬프트 구성:
  ```
  Here are the tools available to you: strainer, pot, faucet, and stove.
  Instructions: You may use one tool per step. Each time you use a tool, it must be in the format:
  use: tool, notes
  ```
- 핵심 요소 두 가지:
  1. **도구 목록(tool list)** 제공 — "네가 쓸 수 있는 도구는 이것들이다."
  2. **통신 형식(protocol/format)** 지정 — AI가 도구를 쓰고 싶을 때 반드시 `use: 도구, 메모` 형식으로 명확히 표현하도록 규정.
- 이는 실제 세계에서 AI가 직접 물리적으로 도구를 조작할 수 없기 때문에, **사람이 그 "손(hands)" 역할**을 대신 해줘야 한다는 점을 반영한 설계 — AI가 "이 도구를 이렇게 쓰고 싶다"고 말하면, 사람이 실제로 그 행동을 수행하고 결과를 알려준다.

### 실전 진행 — AI와 사람의 턴제 상호작용
1. 과제: "Cook spaghetti. What's your first step?"
2. AI: `use: pot, fill the pot with water from the faucet.`
3. 사람(결과 보고): `result: pot filled.`
4. AI: `use: stove, place the pot on the stove and turn it on to bring the water to a boil.`
5. 사람: `result: the stove is heating.`
6. AI: `use: pot, add the spaghetti into the pot of boiling water.`
7. 사람: `result: spaghetti in a pot.`
8. AI: `use: strainer, pour the contents of the pot into the strainer.`

### AI의 적응력(adaptiveness) 테스트 — 일부러 "커브볼" 던지기
- 저자가 일부러 "result: hard noodles poured into strainer" (면이 덜 익은 채로 걸러졌다)라는 예상 밖의 결과를 알려줌.
- AI의 대응: `use: pot, return the spaghetti to the pot with fresh water and continue boiling until the noodles soften.` — 즉, **문제를 인식하고 스스로 수정 행동을 제시**함.
- 이는 과거의 소프트웨어/도구들과 달리, **예상치 못한 상황에도 적응(adapt)할 수 있는 AI의 강력한 특징**을 보여준다.

### 왜 "통신 형식(구조화된 표현)"이 중요한가
- AI와의 대화는 보통 자유로운 텍스트이기 때문에, **AI가 실제로 도구를 쓰고 싶어 하는 것인지, 그냥 이야기하는 것인지 구분할 방법이 필요**하다.
- 그래서 `use: tool, notes` 같은 **명확한 구조(protocol)**가 필요하며, 이것이 바로 Model Context Protocol의 핵심 아이디어 중 하나다.
- MCP는 결국:
  1. AI가 **어떤 도구가 있는지 발견(discover)**할 수 있게 하고,
  2. 각 단계에서 **어떤 도구를 어떻게 쓰고 싶은지 명확히 표현**할 수 있게 하며,
  3. 그 결과로 실제 문제를 해결하도록 돕는 것.

### 핵심 통찰 — 침팬지의 도구 사용과의 비교
- 침팬지가 풀줄기로 흰개미를 잡아먹는 도구 사용을 발견했을 때 사람들이 놀랐던 것처럼, **AI가 스파게티 요리라는 극히 단순한 문제에서도 도구 사용 순서를 즉각적으로 이해하고 수행**하는 것은 그 자체로 놀라운 일이다.

## 예시
```
프롬프트 구조:
"Here are the tools available to you: [도구 목록].
Instructions: You may use one tool per step.
Each time you use a tool, it must be in the format: use: tool, notes"

이후 사람은 각 단계마다 "result: [실제 결과]"로 응답하며 대화를 이어감.
```

## 요약
- AI에게 "도구를 준다"는 것은 대화 속에서 **도구 목록**과 **도구 사용을 표현하는 명확한 형식(protocol)**을 알려주는 것뿐이다.
- AI는 도구 목록만 주어져도 문제 해결 순서를 스스로 계획하고, 예상치 못한 상황(덜 익은 면)에도 **적응적으로 대응**할 수 있다.
- Model Context Protocol의 핵심은 AI가 도구를 발견하고, 사용 의사를 명확히 표현하고, 그 결과를 반영해 문제를 해결하도록 만드는 **구조화된 통신 방식**이다.
