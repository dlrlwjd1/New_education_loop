# Bootstrapping the Next.js Project — 대화정리

## 개요

- 원본 강의: [02 Bootstrapping the Next.js Project.md](02%20Bootstrapping%20the%20Next.js%20Project.md)
- 학습일: 2026-08-08
- 로드맵 위치: 스펙 주도 개발 로드맵 Phase 2 (2-B 프로젝트 컨텍스트 문서 세트)

**이 강의의 자리**: 01강에서 project spec(= 헌법에 대응하는 전역 문서)을 확정했고, 03강부터 `CLAUDE.md`와 컨텍스트 문서 세트를 만든다. 그 사이에 낀 것이 이 강의 — **명세는 있고 컨텍스트 문서는 아직 없는 상태에서 코드베이스의 껍데기를 만드는 단계**다.

대화에서 다룬 논점 네 개:

1. 프로젝트 생성은 직접, 보일러플레이트 정리는 AI — 그 경계를 가르는 기준
2. 이 판단 기준을 컨텍스트 문서 세트 중 어디에 적어야 하는가
3. "확인 없이 파일을 삭제하지 않는다"는 규칙과 실제 `rm` 실행이 충돌하는가
4. project spec이 이미 있는데 `CLAUDE.md`가 왜 또 필요한가

## 내용

### 1. 생성은 직접, 정리는 AI — 경계를 가르는 두 축

강의는 Next.js 프로젝트 생성(`npx create-next-app@latest dev-stash --src-dir`)은 직접 하고, 보일러플레이트 정리는 AI에게 맡긴다. 둘 다 간단하고 기계적인 작업인데 정반대로 갈랐다.

대화에서 정리한 기준은 두 축이었다.

- **되돌리기 비용** (01강에서 다룬 축)
- **검증 가능성(verifiability)** — 잘못됐을 때 알아채기 쉬운가, 비교하기 쉬운가

| | 프로젝트 생성 | 보일러플레이트 정리 |
| --- | --- | --- |
| 산출물 규모 | 수십 개 파일 + 의존성 트리 전체 | 3~4개 파일 |
| diff로 검토 | 사실상 불가 (전부 초록색) | 가능 (강의의 빨강/초록 확인 장면) |
| 틀렸을 때 발견 시점 | 한참 뒤, 다른 기능 만들다가 | 즉시 |
| 되돌리기 비용 | 큼 (구조가 이미 흐려진 상태) | 작음 |

여기에 **"최신이 아닐 수도 있다"** 는 문제가 겹친다. `create-next-app@latest`는 CLI가 지금 시점의 최신 템플릿을 가져오는 반면, AI가 기억으로 생성하면 학습 시점의 낡은 설정이 나올 수 있다. 즉 부트스트랩은 AI가 특별히 잘하는 영역도 아니다 — 아껴주는 시간이 거의 없는데(한 줄이면 끝) 위험만 크다. 강의의 **"AI는 그냥 쓰기 위해 쓰는 것이 아니라 시간을 아끼고 생산성을 높이는 특정 목적에 맞게 쓴다"** 가 이 뜻이다.

반대로 정리 작업은 diff가 작아서 거절하고 다시 시킬 수 있다. 실제로 첫 결과가 Tailwind class를 남겼을 때 거절 → 재요청으로 해결했다. **검증이 싸면 실패도 싸다.**

### 2. 이 규칙은 `ai-interaction.md`에 적는다

"생성은 직접, 정리는 AI"는 사람 머릿속에만 있으면 안 된다. 에이전트는 매 세션 기억 없이 들어오므로 문서로 고정해야 한다.

처음 답은 "전역에 적용되니까 `project-overview`"였는데, **그 기준으로는 답을 고를 수 없다.** DevStash `CLAUDE.md`가 읽히는 네 문서 중 앞의 세 개는 전부 전역이고, `current-feature`만 시점에 매인 문서다. 실제 분류 기준은 적용 범위가 아니라 **무엇에 대한 규칙인가**다.

| 문서 | 무엇에 대한 규칙인가 |
| --- | --- |
| `project-overview` | **무엇을 만드는가** — 문제·사용자·기능·데이터·기술 스택·수익화·UI/UX (01강 8항목 그대로) |
| `coding-standards` | **코드를 어떻게 짜는가** — TypeScript strict, 서버 컴포넌트 기본, 네이밍 |
| `ai-interaction` | **너와 내가 어떻게 일하는가** — 언제 묻고 언제 그냥 하는가 |
| `current-feature` | **지금 무엇을 하는 중인가** |

"생성은 직접, 정리는 AI"는 **작업 위임의 경계**에 관한 규칙이다. 프로젝트가 무엇인지도, 코드가 어떻게 생겨야 하는지도 아니라 **일하는 방식**이니까 `ai-interaction`이다. Phase 2 로드맵의 04강 설명이 이 구분을 그대로 말한다 — 「어떻게 짜라」와 「어떻게 나와 일하라」는 다른 문서다.

실제 `ai-interaction.md`에 이 강의의 정신이 들어 있다.

- 큰 리팩터링이나 아키텍처 변경 전에는 먼저 물어본다
- 확인 없이 파일을 삭제하지 않는다
- 커밋 전에 물어본다 (자동 커밋 금지)
- 작업을 완수하는 데 필요한 최소한의 변경만 한다

`project-overview`에 섞으면 안 되는 이유도 있다. 그 문서는 이미 굉장히 길다(Prisma 스키마 전체, 가격표, UI 레이아웃). 여기에 작업 방식 규칙을 섞으면 2-C의 컨텍스트 예산 문제와 2-E의 "항상 읽히는 문서와 필요할 때만 읽히는 문서가 나뉘어 있다"가 동시에 깨진다.

### 3. `rm` 삭제는 규칙 위반이 아니다 — 두 겹의 안전장치

`ai-interaction.md`에 "확인 없이 파일을 삭제하지 않는다"가 있는데, 강의에서 Claude Code는 실제로 `public` 폴더 SVG를 `rm`으로 삭제했다. 충돌이 아니다. 규칙이 금지하는 것은 **삭제 자체가 아니라 에이전트의 독단적 삭제**다.

**(1) 지시가 명시적이었다**

강의 프롬프트는 "정리해 줘"가 아니라 대상·위치·동작이 다 박힌 문장이다.

```text
Delete all the SVGs in the public folder.
```

만약 "보일러플레이트 좀 정리해 줘"만 던졌는데 에이전트가 알아서 SVG까지 지웠다면 그건 규칙 위반이다. 강의가 요청을 네 개의 프롬프트로 쪼갠 것이 우연이 아니다 — `page.tsx` / Tailwind class 제거 / `globals.css` / SVG 삭제를 각각 별도로 냈다.

**(2) 실행 전 승인 단계가 있었다**

강의는 도구가 어떤 명령을 실행했는지(`public` 폴더 SVG 검색 → `rm` 삭제) 보여준다는 점을 짚고, 강사는 초반에 자동 승인 대신 **매번 확인 후 승인**을 권한다. 명시적 지시 위에 실행 순간 한 번 더 사람이 게이트를 지킨다.

정리하면 — "확인 없이 삭제하지 않는다"는 **명시적 지시 + 실행 승인** 두 개가 충족되면 만족된다. 강의는 둘 다 했다.

### 4. `CLAUDE.md`는 내용 그릇이 아니라 진입점이다

강의는 정리가 끝난 뒤 바로 기능 개발로 들어가지 않고, 다음 강의에서 `CLAUDE.md`를 만든다고 예고한다. 01강에서 project spec을 이미 8항목까지 다 썼는데도 `CLAUDE.md`가 필요한 이유는 이것이다.

**명세를 아무리 잘 써서 어디에 둬도, 에이전트가 세션 시작 시 자동으로 읽는 자리는 정해져 있다.** `CLAUDE.md`는 그 자리를 차지하는 **진입점(entry point)** 이자 **로더(loader)** 다. 그래서 DevStash의 `CLAUDE.md`는 본문이 거의 없다.

```markdown
## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md
```

실제 내용은 `context/` 아래 있고, `CLAUDE.md`는 "이것들을 읽어라"만 말한다. learning-hub 저장소도 같은 구조다 — `CLAUDE.md`가 `@AGENTS.md` 한 줄만 걸고 "규칙은 `AGENTS.md`가 단일 원본"이라고 넘긴다.

**01강의 project spec이 실제로 어디로 갔는지**도 여기서 확인된다. `context/project-overview.md`의 목차는 이렇다.

> Problem Statement · Target Users · Features · Data Architecture · Tech Stack · Monetization · UI/UX Guidelines

01강의 8항목 체크리스트 그대로다. 즉 **project spec은 `CLAUDE.md`에 들어가지 않고 `context/project-overview.md`라는 이름으로 옆에 놓이고, `CLAUDE.md`가 그걸 가리킨다.** 8항목 중 마지막 Documentation만 문서 본문이 아니라 이 문서 세트 구조 자체로 떨어진 셈이다.

`CLAUDE.md`에 직접 들어간 것은 명세가 아니라 **매번 필요한 짧은 운영 정보**뿐이다 — 실행 명령(`npm run dev` / `build` / `test`), Neon DB 브랜치 주의사항, 커밋 메시지 규칙. 길고 참조성 있는 것은 전부 `context/`로 뺐다. 이것이 Phase 2-E 점검표의 "항상 읽히는 문서와 필요할 때만 읽히는 문서가 나뉘어 있다"의 실제 모습이고, 2-C 컨텍스트 예산 문제로 이어지는 대목이다.

## 예시

부트스트랩 — 직접 실행한다.

```bash
npx create-next-app@latest dev-stash --src-dir
```

선택한 옵션: TypeScript yes · ESLint yes · React Compiler yes · Tailwind CSS yes · App Router yes · import alias 커스터마이즈 no · `src` 폴더 yes.

정리 — AI에게 맡기되 요청을 쪼갠다.

```text
I have a fresh install of Next.js. I want you to clean up the boilerplate page.
@src/app/page.tsx should simply show an H1 with the text dev stash.
```

```text
Get rid of all the Tailwind classes.
```

```text
Remove the default styles from @src/app/globals.css, but keep the Tailwind import.
```

```text
Delete all the SVGs in the public folder.
```

결과물.

```tsx
export default function Home() {
  return <h1>dev stash</h1>;
}
```

```css
@import "tailwindcss";
```

## 요약

- **부트스트랩은 직접, 정리는 AI.** 기준은 되돌리기 비용 + 검증 가능성 두 축이다. 산출물이 diff로 검토 가능한 크기인가가 실질적인 판단선이다.
- 생성 작업은 AI가 아껴주는 시간이 거의 없는데(CLI 한 줄) 위험만 크다. `@latest`가 보장하는 최신성도 AI는 보장하지 못한다.
- 검증이 싸면 실패도 싸다 — 정리 작업은 거절하고 다시 시킬 수 있다.
- 규칙의 분류 기준은 **적용 범위가 아니라 무엇에 대한 규칙인가**다. 작업 위임 경계는 `ai-interaction.md`에 적는다.
- "확인 없이 삭제하지 않는다"는 **명시적 지시 + 실행 승인** 두 겹으로 만족된다. 요청을 쪼개는 것이 그 자체로 안전장치다.
- **`CLAUDE.md`는 내용 그릇이 아니라 진입점이다.** 명세는 `context/project-overview.md`로 옆에 놓이고 `CLAUDE.md`가 가리킨다. `CLAUDE.md`에 직접 들어가는 것은 매번 필요한 짧은 운영 정보뿐이다.
