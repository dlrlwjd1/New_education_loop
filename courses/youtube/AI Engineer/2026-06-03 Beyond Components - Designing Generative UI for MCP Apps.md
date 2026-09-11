# Beyond Components - Designing Generative UI for MCP Apps

## 개요
- 영상: [Beyond Components: Designing Generative UI for MCP Apps — Ruben Casas, Postman](https://www.youtube.com/watch?v=hCMrEfPG2Yg)
- 채널: AI Engineer
- 발표자: Ruben Casas, Postman
- 게시일: 2026-06-03
- 핵심 주제: AI 모델이 UI 코드를 매우 잘 생성하게 된 시대에, agent UI는 static components를 넘어 declarative UI와 runtime generative components, 그리고 MCP Apps 기반 sandboxed delivery로 진화할 수 있다는 관점.

## 내용

### 1. UI 생성 능력의 급격한 변화
발표자는 2022년 말 ChatGPT 초기에는 component code를 요청하고, code block을 복사하고, 다시 수정 요청을 반복하는 방식이었다고 설명한다.

이를 "poor man's vibe coding"에 가깝다고 표현한다.

하지만 2025년 말 이후 모델 성능이 크게 올라가면서 상황이 달라졌다.

언급된 모델:
- GPT-5.2
- Claude Opus 4.5

이 모델들은 long-horizon task뿐 아니라 high-fidelity UI generation에서도 강해졌고, 빠르고 꽤 사려 깊은 UI를 생성하기 시작했다.

발표자는 자신의 blog를 단일 prompt로 다시 만들게 했을 때, 모델이 요청하지 않은 search box, blur animation, accessibility 처리까지 만들어낸 경험을 예로 든다.

### 2. 새 컴퓨터에는 아직 GUI가 없다
발표자는 Karpathy의 비유를 가져와, 지금의 AI는 "새 컴퓨터"와 같다고 말한다.

현재 우리는 이 새 컴퓨터와 terminal처럼 text로 직접 대화하고 있다.

핵심 문제:
- super intelligence에 가까운 능력은 생겼다.
- 하지만 그것을 다루는 성숙한 interface language는 아직 없다.
- 1970년대 terminal 시대처럼, 아직 GUI가 발명되지 않은 상태에 가깝다.

그래서 질문은 다음이다.

```text
이 새 컴퓨터의 interface는 무엇인가?
```

### 3. Chat everywhere는 최종 UI가 아니다
많은 SaaS 회사가 homepage나 product 안에 chat box를 붙이고 있다.

발표자는 chat이 지금 당장은 유용하지만, 최종 UI라고 보지는 않는다.

Chat의 역할:
- 현재 가장 쉬운 agent interface
- text 기반 request/response에 익숙함
- 빠르게 도입 가능

하지만 한계:
- 모든 앱에 chat을 붙이는 것은 임시적 해법일 수 있음
- 사용자가 원하는 모든 interaction을 text로만 처리하기 어렵다.
- UI가 agent의 능력을 충분히 활용하지 못한다.

### 4. Super app과 MCP Apps
또 다른 방향은 ChatGPT, Claude, Gemini 같은 super app 안에서 여러 third-party UI를 렌더링하는 방식이다.

이때 MCP Apps가 중요하다.

MCP Apps의 역할:
- agent environment 안에 third-party UI를 렌더링
- tool calling, authentication, message passing 제공
- sandboxed iframe 기반 delivery 제공

즉, 각 SaaS에 chat을 붙이는 대신, 하나의 agent app 안에서 여러 앱의 UI를 호출하고 사용할 수 있다.

### 5. 중요한 질문은 "UI가 어디서 실행되는가"와 "모델이 무엇을 생성하는가"다
발표자는 두 질문을 구분한다.

첫 번째 질문:

```text
Where does the UI run?
```

예:
- 각 SaaS 안의 chat UI
- ChatGPT/Claude 같은 super app
- MCP Apps 안의 third-party UI

두 번째 질문:

```text
What is the model generating?
```

예:
- predefined component props
- declarative JSON/YAML descriptor
- HTML/CSS/JavaScript code
- collaborative artifact

발표의 핵심은 두 번째 질문, 즉 model이 어떤 형태의 UI를 생성하는가에 있다.

### 6. Static components
현재 대부분의 agent UI는 static components 방식이다.

동작:
1. Agent가 tool call을 한다.
2. Tool call 결과로 data와 parameters가 나온다.
3. 개발자가 미리 만든 React component에 props로 전달된다.
4. Client가 그 component를 렌더링한다.

이는 지난 20년간의 UI 방식과 크게 다르지 않다.

차이점은 server가 아니라 agent가 data와 props를 만든다는 점이다.

예:
- AG-UI protocol의 client tool -> React component mapping
- Goose Auto Visualizer의 predefined visualization components

장점:
- 예측 가능
- 디자인 시스템을 유지하기 쉽다.
- 안전하고 빠르다.

한계:
- component가 미리 있어야 한다.
- long-tail interaction을 모두 만들기 어렵다.

### 7. Declarative UI
Declarative UI는 static components보다 한 단계 동적이다.

동작:
1. 개발자가 component catalog와 design system을 준비한다.
2. Agent가 JSON, YAML, Python descriptor 같은 구조화된 명세를 생성한다.
3. Rendering engine이 descriptor를 실제 UI component로 변환한다.

즉, 모델은 component code를 직접 쓰는 것이 아니라 UI를 조립하는 명세를 만든다.

발표자는 Netflix의 server-driven/personalized UI를 비슷한 선례로 언급한다.

예:
- Netflix homepage personalization
- Vercel의 JSON Render
- YAML/JSON 기반 dynamic UI rendering

장점:
- static components보다 유연함
- design system consistency 유지
- 예측 가능성 확보
- token 비용과 latency 측면에서 더 실용적

발표자는 현재 시점에서 declarative generative UI가 유연성과 consistency 사이의 가장 좋은 균형일 수 있다고 본다.

### 8. Generative components
다음 단계는 모델이 runtime에 UI code 자체를 생성하는 것이다.

질문:

```text
모델이 React, JavaScript, CSS를 잘 만든다면 왜 runtime에 직접 UI를 만들게 하지 않는가?
```

발표자는 Postman에서 weather agent 실험을 했다고 말한다.

실험:
- agent가 weather API를 호출
- joke를 생성
- HTML/CSS/JavaScript를 생성
- 매번 imaginative UI를 만들어 사용자에게 표시

이 방식에는 predefined component나 translation layer가 없다.

하지만 위험도 크다.

### 9. Generative UI에는 sandbox와 distribution model이 필요하다
모델이 runtime에 생성한 code를 그대로 사용자에게 보여주는 것은 위험하다.

이유:
- third-party code를 신뢰하지 않듯이 LLM-generated code도 신뢰하면 안 된다.
- runtime code execution에는 containment가 필요하다.
- security boundary가 필요하다.

따라서 generative UI에는 distribution model이 필요하다.

필요한 것:
- boundary
- containment
- sandbox
- authentication
- message passing
- tool calling

발표자는 MCP Apps가 이런 generative UI delivery에 적합하다고 본다.

MCP Apps가 적합한 이유:
- double iframe sandbox
- third-party UI delivery 기본 구조
- auth/tool/message passing 지원
- first-party UI에도 적용 가능

Anthropic의 Visualizer feature가 MCP Apps를 사용한 점도 전략적으로 중요하다고 언급한다.

### 10. 미래 UI는 아직 상상력이 부족하다
발표자는 "Jarvis moment"나 floating windows 같은 상상은 너무 obvious할 수 있다고 말한다.

TV 초창기 프로그램이 "카메라를 단 라디오 쇼"였던 것처럼, 지금의 AI UI도 아직 이전 매체의 상상력에 갇혀 있을 수 있다.

핵심 비유:
- TV 초창기: radio shows with cameras
- 현재 AI UI: chat boxes, static renderers

새 기술이 생겼을 때 처음에는 기존 형식을 그대로 가져오지만, 시간이 지나면 완전히 새로운 media grammar가 생긴다.

### 11. Beyond components는 collaborative experience다
발표자는 미래의 generative UI가 단순히 "agent가 UI를 보여주는 것"을 넘어, human-agent collaboration을 위한 shared artifact가 될 것이라고 본다.

예:
- Excalidraw MCP App

Excalidraw MCP App은 단순 diagram output이 아니라, human과 agent가 함께 조작할 수 있는 canvas를 만든다.

특징:
- agent가 artifact를 생성
- human이 직접 클릭하고 수정
- human이 다시 agent에게 변경 요청
- shared space에서 양방향 collaboration

이것이 단순 visualization보다 더 강력한 agent UI의 방향이라고 본다.

## 예시

### UI 생성 방식 비교
| 방식 | 모델이 생성하는 것 | 개발자가 준비하는 것 | 장점 | 한계 |
| --- | --- | --- | --- | --- |
| Static Components | props/data | predefined components | 안전, 예측 가능 | long-tail 대응 어려움 |
| Declarative UI | JSON/YAML descriptor | component catalog, renderer | 유연성과 일관성 균형 | 여전히 component catalog에 제한 |
| Generative Components | HTML/CSS/JS 또는 React code | sandbox, delivery runtime | 무한한 맞춤 UI 가능 | 보안, 신뢰, sandbox 필요 |
| Collaborative Artifacts | shared workspace state/UI | 협업 가능한 runtime | human-agent 공동 작업 | 아직 초기 단계 |

### MCP Apps가 중요한 이유
```text
Generated UI
-> needs sandbox
-> needs auth/tool/message passing
-> needs delivery model
-> MCP Apps provide a practical boundary
```

### 실무적으로 볼 포인트
```text
- 핵심 product UI는 아직 controlled/static component가 안정적이다.
- long-tail UI는 declarative UI가 실용적인 균형점이다.
- runtime generated UI는 sandbox 없이는 위험하다.
- MCP Apps는 third-party UI뿐 아니라 first-party generative UI에도 의미가 있다.
- 미래의 UI는 chat이 아니라 shared artifact/canvas형 collaboration일 수 있다.
```

## 요약
- 모델은 이제 high-fidelity UI code를 상당히 잘 생성한다.
- 하지만 agent UI의 최종 형태는 아직 정해지지 않았다.
- Chat everywhere와 super app은 UI가 어디서 실행되는가에 대한 서로 다른 해법이다.
- 더 중요한 질문은 모델이 props, descriptor, code, artifact 중 무엇을 생성하느냐다.
- Static components는 안전하지만 제한적이다.
- Declarative UI는 현재 가장 실용적인 균형점일 수 있다.
- Generative components는 강력하지만 sandbox와 distribution model이 필수다.
- MCP Apps는 runtime generated UI를 전달하기 위한 유력한 boundary다.
- 장기적으로는 UI가 단순 output이 아니라 human-agent collaborative artifact로 진화할 수 있다.
