# Phase 6 — 재계획과 MVP

- 목표: 기능 하나가 아니라 **여러 기능을 연달아** 쌓아도 무너지지 않게 만든다. 헌법과 로드맵을 살아 있는 문서로 유지한다.
- 분량: 약 5~6시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 기능 하나가 끝난 뒤 헌법·로드맵을 갱신하는 절차를 갖출 수 있다.
- 두 번째 기능부터 나타나는 문제(컨텍스트 누적, AI 피로)를 다룰 수 있다.
- 서브에이전트로 심층 리뷰를 붙일 수 있다.
- 로드맵의 여러 기능을 연속으로 구현시킬 때의 위험을 관리할 수 있다.
- **명세 체계가 어디서 깨지는지**를 직접 겪고 대응할 수 있다.

> **첫 기능은 누구나 된다.** SDD가 실제로 값을 내는지는 세 번째 기능쯤에서 갈린다. 그때 명세가 낡았고, 헌법이 현실과 다르고, 컨텍스트가 오염돼 있으면 원래대로 돌아간다.

## 6-A. 재계획

메인: Spec-Driven Development (복습)

- [ ] [09 Project Replanning.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/09%20Project%20Replanning.md) — **헌법·로드맵 갱신, 그리고 그 과정을 스킬로 자동화.** 자동화 부분은 [Phase 7](07%20Phase%207%20-%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20%EC%9E%90%EB%8F%99%ED%99%94.md)에서 실제로 만든다 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/09%20Project%20Replanning%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 6-B. 두 번째 기능 — 문제가 드러나는 지점

메인: Spec-Driven Development (복습)

- [ ] [10 The Second Feature Phase.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/10%20The%20Second%20Feature%20Phase.md) — **AI 피로 관리와 서브에이전트 심층 리뷰.** 기능이 쌓이면서 나타나는 문제를 정면으로 다루는 유일한 강의 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/10%20The%20Second%20Feature%20Phase%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 6-C. MVP — 로드맵을 일괄로 밀어붙이기

메인: Spec-Driven Development (복습)

- [ ] [11 The MVP.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/11%20The%20MVP.md) — **로드맵 일괄 구현으로 명세를 극한까지 테스트한다.** 어디서 깨지는지 보는 것이 목적인 실험 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/11%20The%20MVP%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 6-D. 여러 기능을 연달아 — DevStash 후반부

메인: Coding with AI, module 10

컬렉션·검색·페이지네이션을 연속으로 붙이는 구간이다. **이 시점의 명세가 초반 명세보다 짧다는 점**을 눈여겨본다. 컨텍스트 문서가 자리를 잡으면 명세에 적을 것이 줄어든다.

- [ ] [01 Creating Collections.md](../../courses/udemy/Coding%20with%20AI/module%2010/01%20Creating%20Collections.md) — 컬렉션 생성
- [ ] [02 Adding Items to Collections.md](../../courses/udemy/Coding%20with%20AI/module%2010/02%20Adding%20Items%20to%20Collections.md)
- [ ] [03 Collection List and Detail Pages.md](../../courses/udemy/Coding%20with%20AI/module%2010/03%20Collection%20List%20and%20Detail%20Pages.md) — 목록·상세 페이지
- [ ] [04 Editing and Deleting Collections.md](../../courses/udemy/Coding%20with%20AI/module%2010/04%20Editing%20and%20Deleting%20Collections.md)
- [ ] [05 Global Fuzzy Search Palette.md](../../courses/udemy/Coding%20with%20AI/module%2010/05%20Global%20Fuzzy%20Search%20Palette.md) — **전역 검색** — 명세: [`global-search-spec.md`](../../courses/udemy/Coding%20with%20AI/module%2010/specs/global-search-spec.md)
- [ ] [06 Server-Side Pagination.md](../../courses/udemy/Coding%20with%20AI/module%2010/06%20Server-Side%20Pagination.md) — **서버 사이드 페이지네이션** — 명세: [`pagination-spec.md`](../../courses/udemy/Coding%20with%20AI/module%2010/specs/pagination-spec.md). 기존 화면 여러 개를 동시에 건드리는 명세의 예

## 6-E. 배포와 운영이 끼어들 때

메인: Coding with AI, module 7 (배포 부분)

기능이 쌓이면 배포·마이그레이션이 명세의 일부가 된다.

- [ ] [01 CI-CD, Migrations, and Database Drift.md](../../courses/udemy/Coding%20with%20AI/module%207/01%20CI-CD,%20Migrations,%20and%20Database%20Drift.md) — **CI/CD·마이그레이션·데이터베이스 드리프트** — 명세에 「스키마 변경」이 포함될 때 생기는 문제. [데브옵스 로드맵](../데브옵스%20로드맵/README.md)과 만나는 지점
- [ ] [02 Deploying to Vercel.md](../../courses/udemy/Coding%20with%20AI/module%207/02%20Deploying%20to%20Vercel.md) — 배포

## 6-F. 유지 관리 리듬

Phase 6에서 갖춰야 하는 것은 기술이 아니라 **주기**다. 다음을 언제 할지 정한다.

| 작업 | 언제 | 안 하면 |
|---|---|---|
| `current-feature` 갱신 | 기능 시작·종료 시 | 에이전트가 지난 기능 기준으로 판단한다 |
| 로드맵 갱신 | 기능 완료 시 | 다음에 무엇을 할지 매번 다시 정한다 |
| 헌법 갱신 | 기술 스택·규칙이 바뀔 때 | 문서와 코드가 갈라진다 |
| 코딩 표준 보강 | 리뷰에서 같은 지적이 두 번 나올 때 | 같은 지적을 계속 한다 |
| 명세 아카이브 | 기능 완료 후 | 낡은 명세가 컨텍스트를 오염시킨다 |
| 컨텍스트 문서 정리 | 기능 3~5개마다 | 문서가 길어져 오히려 안 읽힌다 |

> **「리뷰에서 같은 지적이 두 번 나오면 코딩 표준에 넣는다」** — 이 규칙 하나가 리뷰 부담을 가장 크게 줄인다.

## 산출물 과제

1. **기능 2건 추가 완주** — [Phase 3~5](03%20Phase%203%20-%20%EA%B8%B0%EB%8A%A5%20%EB%AA%85%EC%84%B8%20%EC%9E%91%EC%84%B1.md)의 루프를 두 번 더 돈다. **[Phase 4](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md)의 과제 4번에서 쪼갠 큰 기능**을 쓰면 좋다.
2. **재계획 1회** — 기능 완료 후 헌법·로드맵·`current-feature`를 갱신한다. 갱신에 걸린 시간을 기록한다. 5분을 넘으면 [Phase 7](07%20Phase%207%20-%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20%EC%9E%90%EB%8F%99%ED%99%94.md)에서 자동화할 1순위다.
3. **명세 길이 비교** — 첫 명세와 세 번째 명세의 길이를 비교한다. 줄어들지 않았다면 컨텍스트 문서에 들어갔어야 할 내용이 명세에 반복되고 있는 것이다. 옮긴다.
4. **깨지는 지점 기록** — 기능을 연달아 만들며 무너진 것을 전부 적는다. 컨텍스트 오염 / 명세 노후 / 코딩 표준 미준수 / 테스트 부재 중 어디인지 분류한다.
5. **유지 관리 리듬 문서화** — 6-F의 표를 자기 프로젝트 기준으로 채워 컨텍스트 문서에 넣는다.

## 다음 단계

→ [07 Phase 7 - 워크플로 자동화](07%20Phase%207%20-%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20%EC%9E%90%EB%8F%99%ED%99%94.md)
