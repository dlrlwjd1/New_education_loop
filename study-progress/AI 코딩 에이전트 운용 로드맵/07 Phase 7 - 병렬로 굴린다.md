# Phase 7 — 병렬로 굴린다 ★

- 목표: 에이전트 여러 개를 격리된 작업 공간에서 동시에 굴리고, 결과를 충돌 없이 취합한다.
- 분량: 약 12시간
- 마지막 학습일: (미학습)

> **이 로드맵의 핵심 Phase다.** 앞의 여섯 Phase는 전부 여기를 감당하기 위한 준비였다. 특히 [Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md)의 게이트와 [Phase 6](06%20Phase%206%20-%20권한과%20샌드박스.md)의 권한 설계가 없으면 **여기서 사고가 배로 난다.**

## 이 단계가 끝나면 할 수 있어야 하는 것

- 병렬 방식 **4단계 사다리**를 구분하고 상황에 맞게 고른다
- 작업을 **병렬 가능한 단위로 분해**하고, 병렬화하면 안 되는 작업을 판별한다
- **git worktree**로 에이전트를 격리한다
- worktree로 안 풀리는 **공유 상태**(포트·DB·볼륨)를 처리한다
- **한 파일 한 주인** 규율을 지킨다
- 동시 실행 개수의 **상한을 정한다**
- 병렬 산출물을 **추적 가능하게 집계**한다

## 7-A. 병렬은 네 가지다 — 계획을 누가 들고 있나

두 도구(Claude Code · Antigravity)가 **똑같이 4단계 사다리**를 갖는다는 것이 2026-09-10 공식 문서 조사에서 확인됐다. 단계를 가르는 기준은 **"계획을 누가 들고 있나"**다.

| 단계 | 계획 보유자 | Claude Code | Antigravity | 규모 |
|---|---|---|---|---|
| 1. 위임 | 모델 (턴 단위) | Subagents | `invoke_subagent` | 턴당 몇 개 |
| 2. 독립 세션 감독 | **사람** | Agent view (`claude --bg`) | Projects + 2.0 대시보드 | 백그라운드 세션 여럿 |
| 3. 역할 가진 팀 | 리드 에이전트 | Agent teams (공유 태스크·메일박스) | `/teamwork` (Sentinel·Orchestrator·Workers) | 3~5명 |
| 4. 스크립트가 계획 보유 | **스크립트** | Dynamic workflows | `/boost` 3계층 | 수십~수백 |

📌 **양쪽 다 적대적 교차검증이 명시돼 있다.** Claude Code의 워크플로는 "독립 에이전트들이 서로의 발견을 적대적으로 리뷰"하고, Antigravity의 teamwork는 **Critic · Challenger · Auditor · Success Auditor**라고 이름까지 붙여 놨다. [Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md)의 적대적 리뷰가 여기서 구조가 된다.

⚠️ **주의**: Claude Code의 Agent teams는 **실험 기능**이고 환경변수로 켜야 하며, 세션 재개 불가·팀 중첩 불가 같은 제약이 있다. 그리고 **팀메이트 간 파일 충돌을 자동으로 막아 주지 않는다** — 직접 파티션해야 한다. 반면 Agent view는 **첫 파일 편집 직전에 자동으로 worktree로 이동**한다. 이 차이를 모르면 3단계에서 충돌을 만난다.

## 7-B. worktree로 격리한다

이 소절이 실전의 8할이다. **저장소 자료가 가장 얇은 구간**이라 아래 신규 강좌가 메인이 된다.

메인(미확보): **[Claude Code: Software Engineering with Generative AI Agents](https://www.mooc.org/learn/claude-code)** (MOOC · Vanderbilt · Jules White · 6모듈 5h · **Plus 포함**)

**Module 4 — Version Control & Parallel Development**가 이 Phase의 정확한 주제다.
- Allowing Claude Code to Work in Parallel with Git Worktrees
- Claude Subagents & Tasks
- **Parallel Feature Development with Subagents, Tasks, and Git Worktrees**

저장소에 정리한 뒤 이 소절을 체크리스트로 교체한다.

함께 보기: 저장소 자료

- [ ] [Liftoff / Module 4 / 01 Orchestrate agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%204%20-%20Build%20a%20video%20game/01%20Orchestrate%20agents.md) — **역할이 분리된 여러 에이전트를 병렬로 지휘하는 실물.** 이 로드맵이 Liftoff를 소유하는 이유
- [ ] [Liftoff / Module 4 / 02 Finish building the game.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%204%20-%20Build%20a%20video%20game/02%20Finish%20building%20the%20game.md)
- [ ] [Liftoff / Module 4 / 04 Bon voyage.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%204%20-%20Build%20a%20video%20game/04%20Bon%20voyage.md)
- [ ] [Liftoff / Module 5 / 01 How to Build Voyager.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%205%20-%20Course%20Resources/01%20How%20to%20Build%20Voyager.md) — 전체 절차 정리
- [ ] [Tech Bridge / 2026-08-07 금융 에이전트 개발의 병목 줄이기 - 작업 격리와 피드백 루프.md](../../courses/youtube/Tech%20Bridge/2026-08-07%20금융%20에이전트%20개발의%20병목%20줄이기%20-%20작업%20격리와%20피드백%20루프.md) — **작업 격리의 논리**
- [ ] [찐AI / 2026-07-12 다른 터미널 툴을 압도하는 현존 최고의 IDE Orca의 특징.md](../../courses/youtube/찐AI/2026-07-12%20다른%20터미널%20툴을%20압도하는%20현존%20최고의%20IDE%20Orca의%20특징.md) — **worktree를 1급으로 쓰는 도구의 실물**
- [ ] [Matt Pocock Skills / 2026-04-30 I Open-Sourced My Own AFK Software Factory.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-04-30%20I%20Open-Sourced%20My%20Own%20AFK%20Software%20Factory.md) — **자리를 비운 채 돌리는 구조**
- [ ] [Matt Pocock Skills / 2026-05-21 handoff is my new favourite skill.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-21%20handoff%20is%20my%20new%20favourite%20skill.md) — 세션 간 인수인계
- [ ] [Matt Pocock Skills / 2026-05-07 Burn through the backlog from hell with triage.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-07%20Burn%20through%20the%20backlog%20from%20hell%20with%20triage.md) — 대량 작업 배분
- [ ] [Tech Bridge / 2026-08-24 백그라운드 에이전트 런타임 - 이벤트 로그와 재현 가능한 프롬프트.md](../../courses/youtube/Tech%20Bridge/2026-08-24%20백그라운드%20에이전트%20런타임%20-%20이벤트%20로그와%20재현%20가능한%20프롬프트.md)
- [ ] [Tech Bridge / 2026-08-31 Cursor의 지속 실행 에이전트 - 개발자에서 에이전트 관리자까지.md](../../courses/youtube/Tech%20Bridge/2026-08-31%20Cursor의%20지속%20실행%20에이전트%20-%20개발자에서%20에이전트%20관리자까지.md)
- [ ] [Tech Bridge / 2026-09-02 AI 에이전트가 이제 분산 시스템이 된 이유 - TikTok Salman Munaf.md](../../courses/youtube/Tech%20Bridge/2026-09-02%20AI%20에이전트가%20이제%20분산%20시스템이%20된%20이유%20-%20TikTok%20Salman%20Munaf.md)
- [ ] [Tech Bridge / 2026-08-12 Boris Cherny와 AMD가 말하는 에이전트 조직의 병목과 자율성.md](../../courses/youtube/Tech%20Bridge/2026-08-12%20Boris%20Cherny와%20AMD가%20말하는%20에이전트%20조직의%20병목과%20자율성.md)
- [ ] [Tech Bridge / 2026-08-24 패트릭 드부아의 에이전트 조직 설계 - 개인 활용에서 공유 시스템으로.md](../../courses/youtube/Tech%20Bridge/2026-08-24%20패트릭%20드부아의%20에이전트%20조직%20설계%20-%20개인%20활용에서%20공유%20시스템으로.md)
- [ ] [Anthropic @ AI Engineer / 2026-07-22 Claude for Long-Horizon Tasks.md](../../courses/youtube/AI%20Engineer/Anthropic%20@%20AI%20Engineer/2026-07-22%20Claude%20for%20Long-Horizon%20Tasks.md)

## 7-C. 병렬 운용의 규율 — 강의가 아니라 규칙

**Udemy·MOOC 어디에도 "에이전트 3개를 격리해 동시에 굴리고 머지 충돌을 처리한다"를 한 시간 이상 다루는 강좌가 없다**(2026-09-10 조사). 그래서 이 소절은 여러 실무 기록에서 공통으로 확인된 규율을 정리하고, **산출물 과제로 익힌다.**

### 규율 1 — 한 파일 한 주인

두 에이전트가 같은 파일을 만지지 않게 한다. **작업 분해는 도메인·기능 경계로 하지, 같은 파일을 다른 방향에서 건드리는 식으로 하지 않는다.** 어느 오픈소스 재작성 프로젝트에서 병렬 에이전트가 테스트 하네스를 깨뜨렸는데, 원인이 비조정 병렬 쓰기였다.

### 규율 2 — 상한을 정한다

실무 기록의 권장치가 **동시 3~5개** 또는 **4~8개**로 수렴한다. 8을 넘으면 설계 판단이 무너지고, 20~30개는 같은 버그를 여러 에이전트가 중복 수정하며 방치된 작업이 쌓인다.

**진짜 병목은 에이전트가 아니라 내 리뷰 능력이다.** 그리고 **조정 비용은 에이전트 수에 비선형으로 증가**한다. 토큰 비용은 선형으로 증가한다.

### 규율 3 — 병렬에 맞는 작업만 고른다

| 병렬에 맞는다 | 병렬에 맞지 않는다 |
|---|---|
| 연구·PoC (버리는 코드) | **순차 의존이 있는 기능** — 머지 충돌만 난다 |
| 코드베이스 이해·조사 | 아키텍처 결정이 걸린 작업 |
| 저위험 유지보수 | 같은 모듈을 여러 방향에서 고치는 일 |
| 스펙이 완비된 독립 기능 | 스펙이 모호한 것 |
| 파일 단위 대량 마이그레이션 | 내가 배우는 것이 목적인 과제 |

### 규율 4 — 공유 상태를 처리한다

worktree는 **파일 충돌만** 막는다. 이건 안 막힌다.

- **포트 충돌** (3000 · 5432 · 8080) — worktree마다 포트를 다르게 할당한다
- **DB·Docker 볼륨·큐 공유** — 스키마 마이그레이션이 서로를 덮어쓴다
- **`.env` 등 gitignore된 파일** — worktree에 자동으로 안 따라온다. 복사 규칙을 정해 둔다

극단적 해법은 태스크마다 일회용 VM을 주는 것이다(독립 포트·DB·프로세스). 개인 작업에서는 포트 오프셋과 DB 스키마 분리로 충분한 경우가 많다.

### 규율 5 — 집계를 추적 가능하게

- 세션에 이름을 붙인다 — 터미널 탭이나 tmux 창에 `[AUTH]`처럼. 어느 세션이 무엇을 하는지 즉시 보여야 한다
- **커밋 메시지에 작업 ID를 넣는다** — `FD-049:` 식. 나중에 어느 에이전트의 결과인지 추적된다
- 상태 인덱스 파일을 하나 둔다 — 지금 무엇이 돌고 무엇이 끝났는지
- 유휴 알림을 켠다 — 에이전트가 입력을 기다리는데 모르고 방치하는 것이 가장 흔한 낭비다

### 규율 6 — 계층적으로 위임한다

오케스트레이터 하나가 6개를 직접 관리하지 않는다. **리드가 전문가를 스폰**하는 계층 구조가 조정 비용을 낮춘다. 다만 중첩 깊이에 상한이 있다는 것을 기억한다([Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md) 참조).

## 산출물

**이 Phase의 산출물이 로드맵 전체에서 가장 중요하다.**

1. **worktree 3개 이상을 동시에 굴린 기록** — 각각 독립 브랜치에서 독립 기능을 만들고, 셋 다 머지까지 간 것. 포트·DB 충돌을 어떻게 처리했는지 함께 적는다
2. **병렬 작업 분해 기준 메모** — 내 프로젝트에서 무엇을 병렬로 돌리고 무엇을 순차로 두는지, 그 판단 기준
3. **집계 규율 1세트** — 세션 명명 규칙 + 커밋 메시지 규칙 + 상태 인덱스 파일. 실제로 돌아가는 것
4. **상한 결정** — 내가 감당 가능한 동시 실행 개수와 그 근거. 리뷰 능력 기준으로 정한다

## 다음 단계

→ [08 Phase 8 - 실제 앱을 배포한다](08%20Phase%208%20-%20실제%20앱을%20배포한다.md)
