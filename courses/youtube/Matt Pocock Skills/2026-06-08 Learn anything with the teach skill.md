# Learn anything with the teach skill

## 개요
- 영상: [Learn anything with the /teach skill](https://www.youtube.com/watch?v=s5T5oQJcJ6U)
- 채널: Matt Pocock
- 업로드일: 2026-06-08
- 길이: 13:04
- 핵심 주제: `/teach`는 AI를 단발 설명기가 아니라 장기 학습을 관리하는 stateful teacher로 만드는 스킬이다. 학습자의 목표, 현재 수준, 기록, 리소스, 레슨, 용어집을 파일 시스템에 저장해 다음 세션에서도 이어서 가르칠 수 있게 한다.

## 내용

### 1. `/teach`는 stateful skill이어야 한다
Matt는 좋은 teaching은 본질적으로 stateful하다고 본다. 좋은 선생은 학생이 왜 배우는지, 어디까지 이해했는지, 무엇을 어려워하는지, 다음에 무엇을 배워야 하는지 기억한다.

그래서 `/teach`는 단순히 "이 주제를 설명해줘"에 답하는 stateless skill이 아니다. 로컬 파일 시스템에 학습 상태를 저장하고, 다음 세션에서 그 상태를 다시 읽어 이어서 가르친다.

비교 예시로 `/grill-me`는 stateless에 가깝다. 반면 `/grill-with-docs`는 glossary와 ADR을 저장하므로 stateful하다. `/teach`는 후자처럼 시간이 지날수록 더 잘 맞춰지는 스킬로 설계됐다.

### 2. 첫 산출물은 mission이다
학습을 시작하면 `/teach`는 먼저 `mission.md`를 만든다. 여기에는 사용자가 왜 이 주제를 배우려는지, 성공 기준이 무엇인지가 담긴다.

영상 예시에서 Matt는 루빅스 큐브를 배우고 싶다고 한다. mission에는 "3x3 루빅스 큐브를 최소 한 번 스스로 풀 수 있게 되는 것"이 목표로 기록된다. 속도나 이론이 아니라 성취 자체가 목표라는 점도 명확히 한다.

이 mission은 이후 레슨의 범위를 조절하는 기준이 된다.

### 3. high-trust resources를 수집한다
`/teach`는 첫 실행에서 신뢰할 수 있는 리소스를 찾아 `resources`로 저장한다. 이후 학습이 진행되면서 이 리소스 목록도 업데이트될 수 있다.

핵심은 AI가 즉석에서 모든 내용을 지어내는 것이 아니라, primary/high-trust sources를 기반으로 레슨을 구성하도록 만드는 것이다.

### 4. 레슨은 HTML로 만든다
`/teach`는 레슨을 markdown이 아니라 HTML 파일로 만든다. Matt는 HTML이 더 풍부하고 표현력이 크기 때문에 학습 경험에 적합하다고 설명한다.

HTML 레슨에는 다음 요소가 들어갈 수 있다.

- 짧고 집중된 설명
- 다이어그램
- callout
- quiz
- interactive stepper 또는 guided mode
- practice instruction

영상에서는 루빅스 큐브의 corner cycle을 연습하기 위한 인터랙티브 레슨이 만들어진다. 버튼을 눌러 알고리즘 단계를 따라가고, guided mode를 켜고 끌 수 있다.

### 5. learning record로 학습 상태를 남긴다
학습자가 "white cross를 만들 수 있다"처럼 진행 상황을 보고하면, `/teach`는 이를 learning record에 저장한다.

이 기록은 다음 레슨을 조정하는 데 쓰인다. 예를 들어 Matt가 "corner cycle은 이해했지만 muscle memory가 아직 부족하다"고 말하면, AI는 개념 설명을 반복하기보다 반복 연습과 기억 강화를 위한 레슨을 만든다.

### 6. Zone of Proximal Development를 기준으로 레슨을 조절한다
Matt가 강조하는 teaching 개념은 zone of proximal development다. 학생이 지루하지도 않고 겁먹지도 않는, 딱 적절하게 도전적인 영역에서 가르쳐야 한다는 생각이다.

그래서 `/teach`의 레슨은 짧고, 현재 필요한 것만 다루며, 학습자의 상태에 맞춰 조절된다. 레슨이 너무 넓거나 너무 어려워지면 학습 경험이 무너진다.

### 7. 지식, 기술, 지혜를 구분한다
`/teach`는 teaching을 세 층으로 나눈다.

- knowledge: 신뢰할 수 있는 자료에서 온 개념과 사실
- skill: 실제로 할 수 있게 만드는 연습과 반복
- wisdom: 커뮤니티와 실전에서 얻는 판단력

AI가 모든 것을 끝까지 대신 가르치는 것이 목표가 아니다. 어느 정도 지식과 기술을 얻으면, 커뮤니티에 질문하고 실제 세계에서 피드백을 받도록 안내하는 것도 `/teach`의 역할이다.

### 8. reference material도 함께 만든다
학습 과정에서 `/teach`는 용어집, cheat sheet, solve card 같은 참고 자료를 만든다.

예를 들어 루빅스 큐브 학습에서는 anatomy, notation, grip, daisy 같은 용어가 glossary에 들어간다. 이 덕분에 이후 레슨은 같은 설명을 반복하지 않고 용어를 참조할 수 있다.

### 9. 코드베이스 onboarding에도 쓸 수 있다
Matt는 `/teach`가 엔지니어링 온보딩에도 유용할 수 있다고 말한다. 문서는 보통 유지보수가 어렵고, 읽는 사람의 수준과 맞지 않을 수 있다.

`/teach`는 신규 팀원이 자기 수준에서 코드베이스를 배우도록 돕는다. 이미 스택을 아는 사람은 도메인 중심으로, 도메인을 아는 사람은 TypeScript 같은 기술 중심으로 학습할 수 있다.

## 예시

### `/teach` 작업 공간 예시
```text
mission.md
resources.md
lessons/
  01 anatomy notation and white cross.html
  02 first layer corners.html
learning-records/
glossary.md
solve-card.md
notes.md
```

### 좋은 `/teach` 사용법
```text
Teach me how to solve a 3x3 Rubik's Cube.

I can now make the white cross, but I still cannot remember
the corner cycle without looking it up.
```

## 요약
- `/teach`는 장기 학습을 위해 stateful하게 설계된 스킬이다.
- mission, resources, lessons, learning records, glossary, notes를 파일로 저장한다.
- HTML 레슨을 사용해 다이어그램, 퀴즈, 인터랙션을 제공한다.
- 학습자의 zone of proximal development에 맞춰 다음 레슨을 만든다.
- 지식 전달뿐 아니라 실제 기술 연습과 커뮤니티로 이어지는 지혜 획득까지 고려한다.
- 코드베이스 온보딩처럼 사람마다 출발점이 다른 학습에도 적용할 수 있다.
