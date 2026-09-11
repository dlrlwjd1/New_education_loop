# Claude Code tried to improve init

## 개요
- 영상: [Claude Code tried to improve /init... Is it any better?](https://www.youtube.com/watch?v=llwTBpPqo9A)
- 채널: Matt Pocock
- 업로드일: 2026-03-23
- 길이: 11:17
- 핵심 주제: Claude Code의 개선된 `/init`을 평가한다. 결론은 이전보다 낫지만, `Claude.md`에는 정말 전역적이고 durable한 정보만 넣어야 하며, 대부분은 hooks, skills, code exploration으로 처리하는 편이 낫다는 것이다.

## 내용

### 1. Matt의 기존 입장은 `/init`을 쓰지 말라는 것이었다
기존 `/init`은 거대한 `Claude.md`를 만들어 전역 context를 오염시켰다. 이 파일은 token을 태우고, instruction budget을 잡아먹고, 금방 stale해진다.

Claude Code 팀은 이 문제를 개선하기 위해 새로운 init 실험 버전을 만들었고, Matt는 이를 실제 repo에서 평가한다.

### 2. 개선된 init은 질문을 한다
새 버전은 project `Claude.md`, personal `Claude.md`, skills, hooks 설정 여부를 묻는다. 이전처럼 바로 큰 파일을 만드는 것보다는 낫다.

하지만 Matt는 "skills와 hooks가 필요한지 내가 어떻게 아느냐, init이 먼저 탐색하고 제안해야 한다"고 본다.

### 3. Claude.md에 넣을지 판단하는 기준
Matt는 init이 제안한 항목을 하나씩 따진다.

핵심 기준은 다음과 같다.

- 이 정보가 모든 session에 필요한가?
- source of truth에서 쉽게 discover 가능한가?
- 바뀌면 `Claude.md`도 같이 고쳐야 하는가?
- deterministic hook으로 강제할 수 있는가?
- 특정 상황에서만 필요한 skill로 progressive disclosure할 수 있는가?

### 4. Hook으로 강제 가능한 것은 Claude.md에 넣지 않는다
예를 들어 `npx tsc` 대신 `npm run typecheck`를 써야 한다는 규칙은 hook으로 deterministic하게 막을 수 있다.

Hook이 이미 보장한다면 `Claude.md`에 같은 지시를 넣는 것은 중복이다. LLM에게 "하지 마"라고 말하는 것보다, 실제 command를 block하는 편이 낫다.

### 5. Code에서 쉽게 발견되는 pattern도 Claude.md에 넣지 않는다
Integration testing pattern, package.json scripts, build/typecheck command처럼 codebase exploration으로 바로 찾을 수 있는 내용은 전역 문서에 넣을 필요가 없다.

Agent는 어차피 작업 전에 explore phase를 거쳐 관련 파일을 읽는다. discoverable한 정보를 매 request마다 global prompt에 넣는 것은 낭비다.

### 6. 희귀한 규칙은 skill로 둔다
Effect package를 설치할 때 `npm install --force`가 필요하다는 규칙은 자주 발생하지 않는다. Matt는 이런 정보는 `Claude.md`가 아니라 특정 skill에 넣는 편이 좋다고 본다.

이렇게 하면 필요할 때만 model이 skill을 호출해 rationale을 읽는다. 즉 progressive disclosure가 된다.

### 7. 결과적으로 Claude.md는 거의 비었다
Init은 최종적으로 매우 작은 `Claude.md`와 effect package installation skill을 만들었다. Matt는 Claude.md의 마지막 한 줄도 결국 삭제한다.

그가 유지한 것은 narrow skill이다. 이전 `/init`보다는 훨씬 낫지만, 여전히 더 proactive하고 덜 sycophantic해야 한다고 평가한다.

## 예시

### Claude.md에 넣지 말아야 할 것
```text
- package.json에서 바로 볼 수 있는 scripts
- test file에서 쉽게 찾을 수 있는 testing pattern
- hook으로 deterministic하게 막을 수 있는 CLI 규칙
- 특정 상황에서만 필요한 package installation caveat
- 자주 바뀌는 파일명과 implementation detail
```

### 더 나은 위치
| 정보 | 위치 |
| --- | --- |
| CLI command 금지/대체 | hook |
| 드문 package 설치 규칙 | model-invoked skill |
| testing pattern | code exploration |
| OS/path 환경 특이사항 | 최소한의 Claude.md 가능 |

## 요약
- 개선된 `/init`은 이전보다 낫지만 여전히 조심해서 써야 한다.
- `Claude.md`는 global instruction budget을 쓰므로 극도로 작아야 한다.
- Discoverable한 정보는 code exploration에 맡긴다.
- Deterministic하게 강제할 수 있는 것은 hook으로 옮긴다.
- 특정 상황에서만 필요한 지식은 skill로 progressive disclosure한다.
- 좋은 init은 사용자의 말을 그대로 따르기보다, 왜 `Claude.md`에 넣어야 하는지 steelman해야 한다.
