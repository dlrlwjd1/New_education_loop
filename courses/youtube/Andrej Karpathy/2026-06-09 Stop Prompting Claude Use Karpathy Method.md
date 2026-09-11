# Stop Prompting Claude Use Karpathy Method

## 개요
- 영상: [Stop Prompting Claude. Use Karpathy's Method Instead.](https://www.youtube.com/watch?v=7zZy1QTvokM)
- 채널: Austin Marchese
- 업로드일: 2026-06-09
- 길이: 13:18
- 핵심 주제: Karpathy의 agentic engineering 관점을 실무 prompt/workflow로 해설한 영상. 핵심은 단순 prompting이 아니라 spec, verifier, context를 체계화하는 것이다.

## 내용

### 1. Layer 1: Spec
해설자는 Karpathy식 AI 사용의 첫 레이어를 spec이라고 정리한다.

AI는 계산과 패턴 처리에 강하지만, 사용자의 실제 목표와 맥락을 자동으로 알 수 없다. 따라서 goal, constraint, decision criteria를 spec으로 전달해야 한다.

단순히 "월말 report 만들어줘"라고 하는 것은 task일 뿐이다. 진짜 spec은 그 report가 어떤 의사결정을 돕는지, 어떤 conclusion이 필요한지, 어떤 형식과 기준을 만족해야 하는지 담아야 한다.

### 2. Interview로 goal을 뽑아낸다
해설자는 Claude에게 "나를 interview해서 project goal을 식별하라"고 시키는 방식을 제안한다.

이 방식은 사용자의 머릿속에 있는 implicit context를 spec으로 끌어내는 데 유용하다. Karpathy가 말한 "plan mode보다 detailed spec" 관점과 연결된다.

### 3. Agile speccing
AI agent에게 큰 일을 한 번에 맡기면 waterfall 방식이 되기 쉽다. 해설자는 작은 scope, clear checkpoint, review, adjustment를 반복하는 agile speccing을 추천한다.

좋은 spec은 작고 compartmentalized해야 한다. Agent가 한 번에 너무 많은 것을 가정하지 않게 해야 한다.

### 4. 명시적 decision verification
Spec을 AI가 작성하게 하더라도 사람이 읽고 생각해야 한다. 해설자는 "핵심 결정을 명시적으로 검증하게 하라"고 제안한다.

AI가 만든 spec은 final answer가 아니라 사람이 검토할 artifact다.

### 5. Layer 2: Verifier
두 번째 레이어는 검증이다. AI는 인간처럼 동기나 책임감을 갖고 움직이지 않으므로, output이 좋은지 판단할 external criteria가 필요하다.

해설자는 Karpathy의 "animals vs ghosts" 비유를 소개하며, AI를 사람처럼 다루지 말고 statistical simulation system처럼 의심하고 검증해야 한다고 설명한다.

### 6. Evaluation criteria를 먼저 세운다
검증을 잘하려면 작업 전에 "좋은 결과"의 기준을 정해야 한다.

나쁜 기준:
```text
Make this report look good.
```

더 나은 기준:
```text
The report must have three sections.
Each section must end with a recommendation.
The final page must include decision options and risks.
```

### 7. Second model critic을 쓴다
해설자는 다른 모델을 critic으로 사용해 첫 번째 모델의 output을 평가하게 하라고 제안한다. 이는 서로 다른 "library"를 가진 두 AI를 비교하는 방식으로 설명된다.

다만 critic도 절대적인 truth source는 아니므로, 사람의 최종 검토가 필요하다.

## 예시

### Spec 생성 prompt
```text
Interview me to identify the goal of this project.
Bias toward smaller and more compartmentalized specs.
Make me verify key decisions explicitly before implementation.
```

### Verification prompt
```text
Outline the evaluation criteria you will use to ensure a high-quality final product.
Be precise.
Then critique the output against those criteria.
```

## 요약
- Karpathy식 workflow는 단순 prompting이 아니라 detailed spec 설계다.
- AI에게 먼저 사용자를 interview하게 하면 implicit context를 끌어낼 수 있다.
- 큰 task를 한 번에 맡기지 말고 작은 spec과 checkpoint로 나눈다.
- AI가 만든 spec도 사람이 핵심 결정을 검토해야 한다.
- Verifier layer는 evaluation criteria와 critic model을 사용해 output 품질을 높인다.
- AI는 사람처럼 동기화된 존재가 아니라 검증 가능한 시스템으로 다뤄야 한다.
