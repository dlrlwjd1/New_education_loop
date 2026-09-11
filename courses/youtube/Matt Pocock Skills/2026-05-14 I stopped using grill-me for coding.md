# I stopped using grill-me for coding

## 개요
- 영상: [I stopped using /grill-me for coding. Here’s what I use instead:](https://www.youtube.com/watch?v=6BB6exR8Zd8)
- 채널: Matt Pocock
- 업로드일: 2026-05-14
- 길이: 15:16
- 핵심 주제: coding 작업에서는 `/grill-me`보다 `/grill-with-docs`가 더 적합하다. 이유는 코드베이스와 도메인의 shared language, glossary, architectural decision record를 함께 축적할 수 있기 때문이다.

## 내용

### 1. `/grill-me`의 한계는 shared language가 저장되지 않는다는 점이다
`/grill-me`는 사용자를 질문해 요구사항을 명확히 하는 강력한 스킬이다. 하지만 coding 작업에서는 매번 같은 도메인 용어와 비명시적 맥락을 다시 설명해야 하는 문제가 생긴다.

예를 들어 Matt의 앱에는 course, lesson, video, standalone video, pitch 같은 도메인 용어가 있다. 사람은 이 용어를 자연스럽게 이해하지만 agent는 처음부터 알지 못한다.

Grilling session에서 좋은 언어를 찾아도 그것이 문서화되지 않으면 다음 session에서 다시 설명해야 한다.

### 2. Ubiquitous language가 필요하다
Matt는 Domain-Driven Design의 ubiquitous language 개념을 가져온다. 개발자, 도메인 전문가, 코드가 같은 언어를 쓰도록 만드는 것이다.

AI와 협업할 때도 같은 원리가 작동한다. agent가 도메인 언어를 알면 더 짧고 정확하게 말할 수 있고, 코드의 변수명/파일명/구조도 그 언어와 정렬된다.

### 3. `/grill-with-docs`는 grill과 documentation을 결합한다
`/grill-with-docs`는 `/grill-me`의 질문 방식에 문서 축적을 더한 스킬이다.

주요 기능은 다음과 같다.

- 기존 `context.md`를 찾아 shared language를 읽는다.
- 모호한 용어를 challenge한다.
- concrete scenario로 언어를 검증한다.
- code와 cross-reference한다.
- session 중 새롭게 합의한 용어를 업데이트한다.

### 4. `context.md`는 bounded context의 glossary 역할을 한다
Matt는 `context.md`를 도메인 언어의 중심 문서로 사용한다. 작은 repo라면 root에 하나만 둘 수 있고, 큰 monorepo라면 context map을 두고 여러 bounded context를 나눌 수 있다.

영상 예시에서는 standalone video가 "lesson ID가 null인 video"처럼 정의된다. 이 정의가 있으면 agent는 다음 session에서도 같은 용어를 같은 뜻으로 사용한다.

### 5. 언어 결정은 code generation 전체에 영향을 준다
Matt는 용어 정리가 단순 bikeshedding이 아니라고 강조한다. 어떤 단어를 쓰느냐는 변수명, 파일명, UI label, database relationship, deletion cascade까지 영향을 준다.

예를 들어 pitch와 standalone video의 관계가 one-to-many인지, pitch가 없는 video를 무엇이라 부를지 같은 결정은 이후 구현 전체의 구조를 바꿀 수 있다.

### 6. ADR은 non-obvious decision을 기록한다
`context.md`가 shared language를 담는다면, ADR(Architectural Decision Record)은 맥락 없이는 이해하기 어려운 중요한 결정을 기록한다.

Matt가 ADR을 만들 기준은 다음과 같다.

- 되돌리기 어렵다.
- 맥락 없이는 놀랍거나 이상해 보인다.
- 실제 trade-off의 결과다.
- 이후 결정에 영향을 준다.

단순히 언제든 바꿀 수 있는 라이브러리 선택처럼 가벼운 결정은 ADR 대상이 아니다.

### 7. `/grill-with-docs`는 먼저 언어를 정렬한다
영상 시연에서 `/grill-with-docs`는 구현 질문으로 바로 들어가기 전에 glossary와 tension을 확인한다.

예를 들어 pitch와 standalone video 사이 cardinality, standalone video라는 기존 용어와 pitched video의 충돌, pitch status의 의미 등을 먼저 묻는다.

이 과정은 느려 보일 수 있지만, 이후 agent와 사용자가 훨씬 적은 단어로 정확히 소통하게 만든다.

### 8. `/grill-me`는 죽지 않았다
Matt는 `/grill-me`를 버린 것이 아니라 용도를 분리했다. 코드베이스가 있는 engineering 작업에는 `/grill-with-docs`가 더 낫다.

반면 코드베이스가 없는 일반 작업, 개인 글쓰기, 회고, 추모사 작성처럼 순수 대화 기반 질문이 필요한 경우에는 `/grill-me`가 여전히 적합하다.

## 예시

### `/grill-with-docs`가 관리하는 문서
```text
context.md
  - shared language
  - domain terms
  - entity definitions
  - relationship semantics

adr/
  - hard-to-reverse decisions
  - surprising decisions
  - trade-off records
```

### 언제 어떤 스킬을 쓸까
| 상황 | 추천 스킬 |
| --- | --- |
| 코드베이스가 있다 | `/grill-with-docs` |
| 도메인 용어를 계속 재사용해야 한다 | `/grill-with-docs` |
| 코드 없는 일반 사고 정리 | `/grill-me` |
| 추모사, 개인 회고, 글쓰기 아이디어 탐색 | `/grill-me` |

## 요약
- `/grill-me`는 강력하지만 coding 작업에서는 shared language를 저장하지 못한다.
- `/grill-with-docs`는 질문 과정과 `context.md`, ADR 생성을 결합한다.
- `context.md`는 도메인 용어와 bounded context를 저장한다.
- ADR은 되돌리기 어렵고 맥락 없이는 이해하기 힘든 trade-off를 기록한다.
- shared language는 AI 답변, thinking trace, 코드 이름, 파일 구조까지 정렬한다.
- 코드베이스가 있으면 `/grill-with-docs`, 없으면 `/grill-me`가 기본 선택이다.
