# Phase 9 — 에이전트 교체와 표준

- 목표: 지금까지 만든 명세·컨텍스트·스킬이 **특정 도구에 묶이지 않게** 만든다. 도구가 바뀌어도 자산이 남는다.
- 분량: 약 3~4시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 도구 종속적인 자산과 이식 가능한 자산을 구분할 수 있다.
- `AGENTS.md` 같은 공통 규약이 무엇을 해결하는지 설명할 수 있다.
- MCP·스킬·ACP 같은 표준의 역할 분담을 이해한다.
- 에이전트를 바꿔야 할 때 무엇을 다시 만들어야 하는지 미리 안다.

> **왜 마지막에 두는가**: 도구를 바꿔 본 적이 없으면 무엇이 종속적인지 감이 안 온다. Phase 2~7에서 자산을 실제로 만든 뒤라야 「이건 옮겨지고 저건 안 옮겨진다」가 보인다.

## 9-A. 에이전트 교체 가능성

메인: Spec-Driven Development (복습)

- [ ] [14 Agent Replaceability.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/14%20Agent%20Replaceability.md) — **MCP · AGENTS.md · Skills · ACP** 네 표준과 각각의 역할. 에이전트를 바꿔도 남는 것이 무엇인지 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/14%20Agent%20Replaceability%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [15 Conclusion.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/15%20Conclusion.md) — 마무리 — 핵심 메시지 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/15%20Conclusion%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 9-B. 공통 규약과 개방 표준

메인: Cole Medin · AI Engineer

- [ ] [2026-06-18 The Creators of Claude Code and OpenClaw dont Prompt Their Agents Anymore.md](../../courses/youtube/Cole%20Medin/2026-06-18%20The%20Creators%20of%20Claude%20Code%20and%20OpenClaw%20dont%20Prompt%20Their%20Agents%20Anymore.md) — 에이전트를 프롬프트로 다루지 않는 방식
- [ ] [2026-06-25 Google Just Dropped a Masterclass on Agentic Engineering.md](../../courses/youtube/Cole%20Medin/2026-06-25%20Google%20Just%20Dropped%20a%20Masterclass%20on%20Agentic%20Engineering.md) — 에이전틱 엔지니어링 정리
- [ ] [2026-07-02 Finally an Open Standard for the Karpathy LLM Wiki is HERE.md](../../courses/youtube/Cole%20Medin/2026-07-02%20Finally%20an%20Open%20Standard%20for%20the%20Karpathy%20LLM%20Wiki%20is%20HERE.md) — **컨텍스트 문서의 개방 표준** — 프로젝트 지식을 도구 중립적으로 두는 방향

- [ ] [2026-07-07 Beyond the Harness - A Journey Towards Adaptative Engineering.md](../../courses/youtube/AI%20Engineer/2026-07-07%20Beyond%20the%20Harness%20-%20A%20Journey%20Towards%20Adaptative%20Engineering.md) — **하니스(harness) 너머** — 특정 도구의 실행 환경에 의존하지 않는 설계
- [ ] [2026-07-08 Think You Can Build a Game with AI Think Again.md](../../courses/youtube/AI%20Engineer/2026-07-08%20Think%20You%20Can%20Build%20a%20Game%20with%20AI%20Think%20Again.md)
- [ ] [2026-07-08 What do we build now.md](../../courses/youtube/AI%20Engineer/2026-07-08%20What%20do%20we%20build%20now.md)
- [ ] [2026-07-08 Your agent is blindfolded.md](../../courses/youtube/AI%20Engineer/2026-07-08%20Your%20agent%20is%20blindfolded.md)
- [ ] [2026-07-09 The Golden Age of AI Engineering.md](../../courses/youtube/AI%20Engineer/2026-07-09%20The%20Golden%20Age%20of%20AI%20Engineering.md)

## 9-C. 표준·플랫폼 배경 (선택)

메인: Anthropic @ AI Engineer

도구가 어디로 가는지 배경을 알고 싶을 때 본다. **로드맵 진행에 필수는 아니다.**

- [ ] [2025-12-04 Evolving Claude APIs for Agents.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2025-12-04%20Evolving%20Claude%20APIs%20for%20Agents.md) — 에이전트용 API의 변화
- [ ] [2026-01-05 Claude Agent SDK Full Workshop.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2026-01-05%20Claude%20Agent%20SDK%20Full%20Workshop.md) — 에이전트 SDK 워크숍 — 직접 하니스를 만들 때
- [ ] [2026-07-06 Field Guide to Fable.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2026-07-06%20Field%20Guide%20to%20Fable.md)
- [ ] [2026-07-15 Claude Fable Claude Tag and Anthropics Culture.md](../../courses/youtube/AI%20Engineer/Anthropic%20%40%20AI%20Engineer/2026-07-15%20Claude%20Fable%20Claude%20Tag%20and%20Anthropics%20Culture.md)

## 9-D. 자산 이식성 점검표

지금까지 만든 것을 이 표로 분류한다. **오른쪽 열로 갈수록 도구를 바꿀 때 다시 만들어야 한다.**

| 자산 | 이식성 | 비고 |
|---|---|---|
| 기능 명세 파일 | **높음** | 그냥 마크다운이다. 어디서든 읽힌다 |
| 헌법·프로젝트 컨텍스트 문서 | **높음** | 파일명·로드 방식만 도구별로 다르다 |
| 코딩 표준 | **높음** | — |
| 테스트 | **높음** | 도구와 무관하다 |
| 폴더 구조 / 코드베이스 가독성 | **높음** | [Phase 8](08%20Phase%208%20-%20%EB%A0%88%EA%B1%B0%EC%8B%9C%20%EC%BD%94%EB%93%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%97%90%20%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0.md)의 투자가 가장 오래 남는다 |
| 스킬 정의 | 중간 | 형식은 도구별이지만 **내용(절차)은 옮겨진다** |
| 서브에이전트 정의 | 중간 | 위와 같다 |
| MCP 서버 설정 | 중간 | MCP를 지원하는 도구끼리는 옮겨진다 |
| 슬래시 커맨드·설정 파일 | 낮음 | 도구 종속 |
| 세션 히스토리·메모리 | 낮음 | 옮겨지지 않는다고 봐야 한다 |

> **결론**: 가치의 대부분은 **마크다운 문서와 코드베이스 구조**에 있다. 도구 종속적인 것은 스킬 형식과 설정 파일뿐이고, 그것들도 내용은 재활용된다. **도구가 바뀌는 것을 두려워해 SDD 도입을 미룰 이유는 없다.**

## 산출물 과제

1. **자산 분류** — 9-D 표에 자기 프로젝트의 실제 파일을 채워 넣는다. 도구 종속적인 것이 몇 개인지 센다.
2. **이식 실험 1회** — 스킬 하나를 다른 에이전트 도구에서 돌려 본다(또는 어떻게 옮길지 문서로 계획한다). 실제로 무엇이 안 옮겨지는지 기록한다.
3. **공통 규약 정리** — 도구별 설정 파일이 여러 개라면, 공통 내용을 한 파일로 모으고 나머지는 그것을 참조하게 만든다. **이 저장소의 **`AGENTS.md`**와 **`CLAUDE.md`**가 그 예다** — 규칙은 `AGENTS.md` 한 곳에 있고 `CLAUDE.md`는 그것을 참조만 한다.
4. **로드맵 회고** — [Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md)부터 만든 산출물을 모아 놓고, 이 중 「도구가 바뀌어도 남는 것」이 몇 퍼센트인지 센다.

## 로드맵 완주 점검

- [ ] 헌법과 컨텍스트 문서 세트가 있고, 최근 기능 기준으로 최신이다
- [ ] 명세를 쓴 기능이 3건 이상이고, 각각 명세 대조 리뷰를 마쳤다
- [ ] 기능 워크플로가 스킬로 자동화돼 있다
- [ ] 감사 서브에이전트가 최소 1개 돈다
- [ ] 테스트가 기능 워크플로의 일부다
- [ ] 레거시 프로젝트 하나에 역공학 헌법이 있다
- [ ] 명세 없이 만든 기능과 명세로 만든 기능의 **리뷰 시간 차이**를 숫자로 안다
- [ ] 자산의 대부분이 도구 비종속이다

## 다음 단계

로드맵 완주. 이어서 볼 방향:

- **명세를 쓰지 않는 편이 나은 경우** → [11 부록 - 반론과 한계](11%20%EB%B6%80%EB%A1%9D%20-%20%EB%B0%98%EB%A1%A0%EA%B3%BC%20%ED%95%9C%EA%B3%84.md)
- **명세 이전 단계 — 무엇을 만들지 정하기** → [PM 로드맵](../PM%20로드맵/README.md)
- **명세 이후 단계 — 배포와 게이트** → [데브옵스 로드맵](../데브옵스%20로드맵/README.md)
- **배포한 것을 지켜보기** → **개발운영 로드맵**
