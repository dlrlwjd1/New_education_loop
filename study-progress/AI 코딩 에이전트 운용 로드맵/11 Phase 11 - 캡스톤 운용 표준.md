# Phase 11 — 캡스톤: 운용 표준

- 목표: 지금까지 만든 것을 **도구가 바뀌어도 남는 형태**로 정리해, 새 프로젝트나 새 하네스에 그대로 옮길 수 있게 만든다.
- 분량: 약 12시간 (강의보다 산출물 작업이 대부분)
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 하네스를 갈아탈 때 **무엇이 남고 무엇이 버려지는지** 안다
- 설정 자산을 **도구 비종속 계층과 도구 종속 계층으로 분리**한다
- 자산을 플러그인·저장소 형태로 묶어 재사용·배포한다
- 내 운용 규범을 문서로 굳히고, 갱신 주기를 정한다

## 11-A. 도구 비종속이란 무엇인가

메인: Spec-Driven Development with Coding Agents (Phase 1의 개념 트랙. 여기서는 마지막 두 강의만 본다)

- [ ] [14 Agent Replaceability.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/14%20Agent%20Replaceability.md) — **이 Phase의 핵심 개념.** 대화정리본 있음
- [ ] [13 Build Your Own Workflow.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/13%20Build%20Your%20Own%20Workflow.md) — 대화정리본 있음

함께 보기

- [ ] [Tech Bridge / 2026-08-15 모델이 바뀔 때 Claude 지침과 스킬을 다시 평가하는 법.md](../../courses/youtube/Tech%20Bridge/2026-08-15%20모델이%20바뀔%20때%20Claude%20지침과%20스킬을%20다시%20평가하는%20법.md)
- [ ] [Tech Bridge / 2026-09-04 Claude Code 팀이 새로 공개한 INTENT.MD의 정체와 AI-Native 개발 방식.md](../../courses/youtube/Tech%20Bridge/2026-09-04%20Claude%20Code%20팀이%20새로%20공개한%20INTENT.MD의%20정체와%20AI-Native%20개발%20방식.md) — **git에 커밋되는 아티팩트 체인**
- [ ] [Tech Bridge / 2026-08-22 Compound Engineering - 판단과 학습이 축적되는 개발 루프.md](../../courses/youtube/Tech%20Bridge/2026-08-22%20Compound%20Engineering%20-%20판단과%20학습이%20축적되는%20개발%20루프.md) — **축적이 이 로드맵의 목적이다**
- [ ] [Tech Bridge / 2026-08-10 지능은 빌리지 말고 소유하세요.md](../../courses/youtube/Tech%20Bridge/2026-08-10%20지능은%20빌리지%20말고%20소유하세요.md)
- [ ] [Tech Bridge / 2026-08-29 AI 보조를 넘어 AI 네이티브로 - 일하는 방식을 완전히 바꾸는 5가지 습관.md](../../courses/youtube/Tech%20Bridge/2026-08-29%20AI%20보조를%20넘어%20AI%20네이티브로%20-%20일하는%20방식을%20완전히%20바꾸는%205가지%20습관.md)
- [ ] [Tech Bridge / 2026-08-21 AI 시대에 소프트웨어 기본기가 중요한 이유를 엉클 밥에게 물었습니다.md](../../courses/youtube/Tech%20Bridge/2026-08-21%20AI%20시대에%20소프트웨어%20기본기가%20중요한%20이유를%20엉클%20밥에게%20물었습니다.md)
- [ ] [Tech Bridge / 2026-09-01 AI 시대에 무엇을 만들 것인가 - 문제 선택과 의도 전달.md](../../courses/youtube/Tech%20Bridge/2026-09-01%20AI%20시대에%20무엇을%20만들%20것인가%20-%20문제%20선택과%20의도%20전달.md)
- [ ] [Anthropic @ AI Engineer / 2026-01-05 Claude Agent SDK Full Workshop.md](../../courses/youtube/AI%20Engineer/Anthropic%20@%20AI%20Engineer/2026-01-05%20Claude%20Agent%20SDK%20Full%20Workshop.md) — **선택.** 하네스를 직접 만드는 쪽까지 보고 싶을 때
- [ ] [AI Engineer / 2026-07-07 Beyond the Harness - A Journey Towards Adaptative Engineering.md](../../courses/youtube/AI%20Engineer/2026-07-07%20Beyond%20the%20Harness%20-%20A%20Journey%20Towards%20Adaptative%20Engineering.md)
- [ ] [articles / 01 Engineering Management 2026 Structuring an AI-Native Team.md](../../courses/articles/01%20Engineering%20Management%202026%20Structuring%20an%20AI-Native%20Team.md)

## 11-B. 무엇이 남고 무엇이 버려지나

2026-09-10 공식 문서 조사에서 확인한 이식성 등급이다. **이 표가 캡스톤 산출물의 설계도**다.

| 자산 | 이식성 | 근거 |
|---|---|---|
| **MCP 서버** | ★★★★★ | 네 도구 전부 MCP 클라이언트다. 설정 파일 모양도 거의 같다 |
| **Skills (`SKILL.md`)** | ★★★★☆ | Claude Code와 Antigravity가 **같은 오픈 표준**을 쓴다. Cursor·Copilot은 대응물이 있다 |
| **스펙·계획·의도 문서** | ★★★★★ | 그냥 마크다운이다. 도구와 무관하다 |
| **테스트·린트·CI 게이트** | ★★★★★ | 애초에 도구 밖에 있다 |
| `AGENTS.md` | ★★★☆☆ | ⚠️ 지원 범위가 제각각이다. Cursor·Copilot 네이티브, Antigravity는 CLI만, **Claude Code는 import/symlink 필요** |
| 서브에이전트 정의 | ★★★☆☆ | 필드가 비슷하지만 문법이 다르다. 옮길 때 번역이 필요하다 |
| **훅** | ★★☆☆☆ | 이벤트 이름 일부만 같다(`PreToolUse`·`PostToolUse`). Claude Code 쪽이 훨씬 넓다 |
| 권한 규칙 | ★★☆☆☆ | 구조는 동형이나 문법이 완전히 다르다 |
| **화면 조작·단축키** | ☆☆☆☆☆ | 아무것도 안 남는다 |

📌 **결론: 도구 비종속 계층을 아래에 두고, 도구 종속 계층을 얇게 위에 얹는다.**

```text
운용 표준/
  ├─ 비종속 (그대로 이동)
  │   ├─ 스펙·계획·의도 문서 템플릿
  │   ├─ 검증 게이트 (테스트·린트·CI 설정)
  │   ├─ MCP 서버 설정
  │   └─ 운용 규범 문서 (판단 기준들)
  └─ 종속 (도구마다 다시 씀 — 얇게 유지)
      ├─ 규칙 파일 (CLAUDE.md / GEMINI.md / .cursor/rules)
      ├─ 훅 설정
      └─ 권한 규칙
```

**종속 계층이 두꺼워지면 갈아탈 때 전부 다시 써야 한다.** 얇게 유지하는 것이 이 Phase의 설계 원칙이다.

## 11-C. 이식 실험

이 Phase에서 유일하게 강의로 배울 수 없는 부분이고, **직접 해 봐야 안다.**

1. [Phase 8](08%20Phase%208%20-%20실제%20앱을%20배포한다.md)에서 만든 프로젝트를 **다른 하네스로 연다** — Claude Code로 했으면 Codex나 Antigravity로, 혹은 그 반대로
2. 같은 작업 하나를 시켜 본다
3. **무엇이 깨졌는지 기록한다.** 이게 종속 계층의 실제 크기다
4. 깨진 것 중 **비종속 계층으로 옮길 수 있는 것**을 옮긴다

Antigravity를 쓴다면 `/learn`처럼 **세션 중 받은 교정을 영속 규칙·스킬로 증류하는 기능**이 있으니 이식 과정에서 활용한다.

## 산출물 — 이 로드맵의 최종 결과물

**세 가지가 다 있어야 완주다.**

### 1. 운용 표준 저장소(또는 폴더) 1개

위 11-B의 구조로 정리된 것. 새 프로젝트를 시작할 때 여기서 복사해 오면 되는 상태.

- [ ] 스펙·계획 문서 템플릿
- [ ] 검증 게이트 세트 (테스트·린트·CI + Stop 훅)
- [ ] 스킬 최소 2개 (하나는 반드시 스크립트 포함)
- [ ] MCP 서버 설정
- [ ] 권한·위임 클래스 설계표 ([Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md))
- [ ] 병렬 운용 규율 ([Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md))

### 2. 운용 규범 문서 1편

**판단 기준을 자기 언어로 적은 것.** 설정 파일이 아니라 문서다. 최소한 이것들에 답해야 한다.

- 무엇을 에이전트에 맡기고 무엇을 직접 하는가 — **"내가 배우는 것이 목적인 과제"는 맡기지 않는다**는 항목을 반드시 포함한다
- 계획을 언제 세우고 언제 건너뛰는가
- 몇 개까지 병렬로 굴리는가, 그 근거는
- 무엇이 검증을 통과해야 완료인가
- 언제 세션을 버리는가 (3회 규칙)
- 설정을 언제 재검토하는가

### 3. 이식 실험 기록 1건

11-C를 실제로 해 보고, 무엇이 깨졌고 무엇을 옮겼는지 적은 것.

## 완주 후

- 이 로드맵의 산출물은 **살아 있는 문서**다. [Phase 10](10%20Phase%2010%20-%20측정하고%20재판정한다.md)의 재검토 주기(3~6개월)에 맞춰 갱신한다
- 이 분야는 6개월 단위로 바뀐다. **README의 「시점 주의」 절을 그때마다 고친다**
- 다음으로 갈 곳
  - 회사 업무 전체를 에이전트로 옮기고 싶다면 → [AI 네이티브 회사 로드맵](../AI%20네이티브%20회사%20로드맵/README.md)
  - 명세 작성 자체를 깊게 하고 싶다면 → [스펙 주도 개발 로드맵](../스펙%20주도%20개발%20로드맵/README.md)
  - 보안 쪽을 더 파고 싶다면 → **보안 로드맵**
