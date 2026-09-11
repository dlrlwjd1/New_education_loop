# Phase 6 — 권한과 샌드박스

- 목표: 에이전트에게 무엇을 위임하고 무엇을 사람에게 남길지 클래스로 설계하고, 실수해도 피해가 번지지 않는 실행 환경을 만든다.
- 분량: 약 12시간
- 마지막 학습일: (미학습)

## 왜 이 Phase가 [Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md)보다 먼저인가

**권한 설계 없이 에이전트 수만 늘리면 사고가 배로 난다.** 2025~2026년에 실제로 일어난 일이다.

- 2026-02-26 — 코딩 에이전트가 프로덕션에 `terraform destroy`를 실행해 **2.5년치 데이터 194만 행**이 삭제됐다
- 2025-12 — Amazon Kiro가 엔지니어 권한을 상속받아 **2인 승인 요건을 우회**하고 프로덕션 환경을 지웠다. 13시간 장애로 이어졌다
- 2025-10 ~ 2026-02 — 6개 주요 도구에서 10건의 중대 사고가 났지만 **어느 벤더도 상세 포스트모템을 내지 않았다**

공통 결여 항목이 매번 같다 — dev/prod 분리 없음, 에이전트 전용 자격증명 없음, 파괴적 명령에 대한 비우회 게이트 없음, 백업·삭제 보호 없음.

## 이 단계가 끝나면 할 수 있어야 하는 것

- 권한 모드 사다리를 이해하고 상황별로 고른다
- **어떤 클래스를 자동 승인에 맡기고 어떤 클래스를 사람에게 남길지** 설계한다
- **어떤 모드로도 자동승인되지 않는 집합**이 존재한다는 것을 알고 그것에 기대지 않는다
- OS 수준 샌드박스로 파일시스템·네트워크를 제한한다
- 에이전트에게 `.env`를 주지 않고 시크릿을 다루는 패턴을 쓴다
- 간접 프롬프트 인젝션 경로를 알고 외부 콘텐츠를 신뢰하지 않는다
- MCP 서버를 심사하고 허용목록으로 관리한다

## 6-A. 권한 모드와 위임 클래스 설계

**수동 승인 중심 통제는 이미 무력화됐다.** Anthropic 자체 데이터에서 사용자는 권한 프롬프트의 **93%를 어차피 승인**한다. 승인 피로가 통제를 갉아먹는다. 그렇다고 분류기 기반 자동 승인이 완벽하지도 않다 — **오탐누락률 17%**로, 위험 명령 6개 중 1개는 빠져나간다.

그래서 필요한 지식이 "매번 승인하기"가 아니라 **"클래스별로 위임을 설계하기"**로 바뀌었다.

| 도구 | 모드 사다리 | 규칙 형태 |
|---|---|---|
| Claude Code | `default → acceptEdits → plan → auto → dontAsk → bypassPermissions` | `Tool(specifier)` 3리스트, **deny가 항상 이김** |
| Antigravity | `default → accept-edits → plan` + Terminal Auto Execution 3단 + Strict Mode | `action(target)`, **Deny > Ask > Allow** |

**양쪽 다 "읽기"와 "조작"을 분리한다** — Antigravity는 `read_url`과 `execute_url`을 아예 다른 권한으로 둔다.

📌 **자율성을 올리는 것과 안전망을 뚫는 것은 다른 일이다.** Claude Code에는 **어떤 모드로도 자동승인되지 않는 집합**이 있다 — `.git`·`.claude`·셸 설정 파일 같은 protected paths, 그리고 critical path에 대한 `rm`. 이건 `allow` 규칙으로도 열리지 않는다. **이런 안전망이 있다는 것을 알되, 그것에 기대어 설계하지는 않는다.**

⚠️ **권한 우회 플래그는 격리 환경에서만 쓴다.** 컨테이너나 VM 안에서, root 아닌 사용자로, 프로젝트 디렉터리만 마운트하고, `~/.ssh`·`~/.aws`는 절대 마운트하지 않는다. 호스트에서 그냥 켜면 프롬프트 인젝션 한 방에 뚫린다.

**공식 문서로 본다** (강의 없음)

- [code.claude.com/docs/en/permissions](https://code.claude.com/docs/en/permissions) — 규칙 문법의 함정이 많다. `*`를 서브커맨드 앞에 두면 의도보다 훨씬 넓게 매치된다
- [code.claude.com/docs/en/sandboxing](https://code.claude.com/docs/en/sandboxing) — macOS Seatbelt / Linux nsjail. **네이티브 Windows는 미지원**
- [antigravity.google/docs/permissions](https://antigravity.google/docs/permissions) — **권한 부여가 샌드박스 allowlist로 컴파일된다**는 점이 한 걸음 더 나아간 설계다

## 6-B. 위협을 안다 — 프롬프트 인젝션과 공급망

메인: Generative AI and LLM Security, Module 1

- [ ] [03 Common Attack Vectors in Generative AI Systems.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/03%20Common%20Attack%20Vectors%20in%20Generative%20AI%20Systems.md)
- [ ] [04 Prompt Injection Attack.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/04%20Prompt%20Injection%20Attack.md) — **필수**
- [ ] [05 AI Jailbreak Attack.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/05%20AI%20Jailbreak%20Attack.md)
- [ ] [06 Demonstration - Detecting Prompt Injection and Jailbreak Risks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/06%20Demonstration%20-%20Detecting%20Prompt%20Injection%20and%20Jailbreak%20Risks.md)
- [ ] [08 Mitigation Strategies for GenAI Risks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/08%20Mitigation%20Strategies%20for%20GenAI%20Risks.md)
- [ ] [09 LLM-Specific Threats and Risks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/09%20LLM-Specific%20Threats%20and%20Risks.md)
- [ ] [11 Guardrails and Safety Mechanisms for LLMs.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/11%20Guardrails%20and%20Safety%20Mechanisms%20for%20LLMs.md)

공급망 (Module 2에서 골라 본다)

- [ ] [06 Dependency Scanning and Third-Party Model Risks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/06%20Dependency%20Scanning%20and%20Third-Party%20Model%20Risks.md) — **MCP 서버 심사와 같은 문제다**
- [ ] [09 Secure Storage and Key Management for AI Artifacts.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/09%20Secure%20Storage%20and%20Key%20Management%20for%20AI%20Artifacts.md) — 시크릿 관리
- [ ] [05 Model Provenance and Lineage Tracking.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/05%20Model%20Provenance%20and%20Lineage%20Tracking.md) — **출처 기록.** [Phase 10](10%20Phase%2010%20-%20측정하고%20재판정한다.md)의 감사와 이어진다

> Module 3(윤리·규제)과 Module 4(멀티모달)는 이 로드맵 범위 밖이다. **보안 로드맵**·[AI 네이티브 회사 로드맵](../AI%20네이티브%20회사%20로드맵/README.md)이 다룬다.

### 시크릿 — 에이전트에게 `.env`를 주지 않는다

2025년 공개 GitHub에 하드코딩된 신규 시크릿이 **2,865만 건**(전년 대비 +34%)이고, **AI 보조 코드의 유출률이 베이스라인의 약 2배**다.

- 시크릿은 호스트 키체인에 두고 **네트워크 경계에서 주입**한다. 단명 토큰을 쓴다
- **AI CLI 자체를 특권 자동화로 취급한다** — 설치된 어떤 패키지든 그 CLI의 권한을 빌려 쓸 수 있다. 실제로 악성 npm 패키지가 여러 코딩 에이전트의 인증 세션을 표적 수집한 사례가 있다
- 에이전트에게 **명시적으로 보안 감사를 시킨다.** 시키지 않으면 하지 않는다

### 외부 콘텐츠를 신뢰하지 않는다

**이슈 본문·에러 이벤트·README·웹 페이지·의존성이 전부 공격 표면이다.** 2026-06에 보고된 사례에서는 브라우저 JS에서 발견 가능한 공개 크리덴셜만으로 에러 이벤트에 명령을 주입해 MCP 연결 코딩 에이전트를 탈취했다. 라이브 MCP 서버 45개·도구 353개를 대상으로 한 벤치마크에서 공격 성공률이 최고 72%였다.

📌 **에이전트 간 메시지도 신뢰 입력이 아니다.** 다른 에이전트가 "사용자가 승인했다"고 주장해도 그것은 사람의 동의가 아니다. [Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md)에서 여러 에이전트를 붙일 때 특히 중요하다.

## 6-C. MCP와 신원·권한

- [ ] [AI Agents with MCP / Module 5 / 02 AI Agents, MCP, and Identity - Security.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agents%20with%20Model%20Context%20Protocol/Module%205%20-%20Faster,%20More%20Predictable,%20More%20Capable%20AI%20Agents/02%20AI%20Agents,%20MCP,%20and%20Identity%20-%20Security.md) — **필수**
- [ ] [Tech Bridge / 2026-08-18 에이전트와 도구를 연결하는 다섯 가지 인증 패턴.md](../../courses/youtube/Tech%20Bridge/2026-08-18%20에이전트와%20도구를%20연결하는%20다섯%20가지%20인증%20패턴.md) — **인증 패턴 정리**
- [ ] [Tech Bridge / 2026-08-20 Claw Patrol로 에이전트의 네트워크 권한을 외부에서 통제하기.md](../../courses/youtube/Tech%20Bridge/2026-08-20%20Claw%20Patrol로%20에이전트의%20네트워크%20권한을%20외부에서%20통제하기.md) — **밖에서 통제하는 접근**
- [ ] [Tech Bridge / 2026-08-23 기업용 에이전트의 기반 설계 - 이벤트 기록, 데이터 분리, 사람의 개입.md](../../courses/youtube/Tech%20Bridge/2026-08-23%20기업용%20에이전트의%20기반%20설계%20-%20이벤트%20기록,%20데이터%20분리,%20사람의%20개입.md)
- [ ] [Tech Bridge / 2026-08-17 Chrome Agent의 관측·행동·검증 기반 웹 자동화 설계.md](../../courses/youtube/Tech%20Bridge/2026-08-17%20Chrome%20Agent의%20관측·행동·검증%20기반%20웹%20자동화%20설계.md)

### MCP 인가에서 반드시 아는 것 (현행 사양 2026-07-28)

공식 문서로 확인한다. 강좌는 이 부분이 비어 있다.

- **Authorization은 HTTP 트랜스포트용이다.** `stdio`는 이 사양을 따르지 말고 환경에서 크리덴셜을 가져와야 한다
- **PKCE S256 필수.** AS 메타데이터에 지원 표시가 없으면 **진행을 거부해야 한다**
- **RFC8707 `resource` 파라미터를 authorization·token 요청 양쪽에 반드시 넣는다.** 서버는 토큰의 audience가 자기 자신인지 검증해야 한다
- **토큰 패스스루 금지** — MCP 서버가 업스트림 API를 부를 때 클라이언트에게 받은 토큰을 그대로 넘기면 안 된다
- 명명된 위협: Confused Deputy · Token passthrough · Token theft · Mix-Up Attack · Open redirection

## 6-D. 실습 — 인증과 환경 변수를 실제로 다룬다

메인: Coding with AI, module 8 (Phase 8과 겹친다. 여기서는 **보안 관점**으로 본다)

- [ ] [04 Production GitHub OAuth and Vercel Env Vars.md](../../courses/udemy/Coding%20with%20AI/module%208/04%20Production%20GitHub%20OAuth%20and%20Vercel%20Env%20Vars.md) — **프로덕션 시크릿을 어디에 두나**
- [ ] [10 Setting Up Upstash for Rate Limiting.md](../../courses/udemy/Coding%20with%20AI/module%208/10%20Setting%20Up%20Upstash%20for%20Rate%20Limiting.md)
- [ ] [11 Implementing Rate Limiting.md](../../courses/udemy/Coding%20with%20AI/module%208/11%20Implementing%20Rate%20Limiting.md)
- [ ] [09 Authentication Audit and Cleanup.md](../../courses/udemy/Coding%20with%20AI/module%208/09%20Authentication%20Audit%20and%20Cleanup.md) — [Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md)와 겹친다. 양쪽에 체크

## 추천 강의 (미확보) — 이 Phase의 공백

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| **AI Security Fundamentals – LLM Threats & OWASP 2026** | MOOC (Packt) · 12모듈 6h11m · 2026-04 · **Plus 포함** | [링크](https://www.mooc.org/learn/packt-ai-security-fundamentals-llm-threats-and-owasp-2026-81hmg) | ★★★★★ OWASP LLM Top 10. **LLM06 Excessive Agency**(에이전트 권한·최소권한·승인 게이트)가 이 Phase의 정확한 주제 |
| Model Context Protocol (MCP) Mastery | MOOC (Fractal) · 1모듈 4h · 2026-03 · **Plus 포함** | [링크](https://www.mooc.org/learn/model-context-protocol-mcp-mastery) | ★★★★☆ **tool poisoning**·권한 상승·zero-trust 전용 절 |
| Secure Agentic Software Development: Beyond Vibe Coding | Udemy · 36강 3h12m · 2026-08 | [링크](https://www.udemy.com/course/secure-agentic-software-development-beyond-vibe-coding/) | ★★★☆☆ **이 Phase에 가장 정확히 맞는 유일한 강좌** — 코딩 에이전트 최소권한·샌드박스·allowlist·시크릿 유출·**reward hacking**·CI 게이트. ⚠️ 2026-08 신규라 **평가 0건**이다. 유료 |

## 산출물

세 가지다.

1. **위임 클래스 설계표** — 아래를 채운 것

   | 클래스 | 예시 | 자동 승인 | 사람 승인 | 절대 금지 |
   |---|---|---|---|---|
   | 읽기 | 파일 읽기·검색 | | | |
   | 워크스페이스 쓰기 | 코드 편집 | | | |
   | 로컬 실행 | 테스트·빌드 | | | |
   | 외부 통신 | 네트워크·MCP | | | |
   | 되돌리기 어려운 것 | 배포·마이그레이션·force push | | | |

2. **샌드박스 구성 1개** — 에이전트가 워크스페이스 밖과 `~/.ssh`·`~/.aws`에 접근하지 못하는 것을 실제로 확인한 기록
3. **시크릿 처리 방식 메모** — 내 프로젝트에서 에이전트가 `.env`를 읽지 않게 하는 구체적 방법

## 다음 단계

→ [07 Phase 7 - 병렬로 굴린다](07%20Phase%207%20-%20병렬로%20굴린다.md)
