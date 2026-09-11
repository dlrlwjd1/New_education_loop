# Phase 1 — SDD 개념과 워크플로

- 목표: **용어와 워크플로의 전체 그림을 세운다.** 이 로드맵의 개념 트랙이다.
- 분량: 약 2시간
- 마지막 학습일: (미학습)

## 이 단계에서 이미 익힌 것

- 바이브 코딩(vibe coding)과 SDD의 차이, 그리고 명세가 「계약」인 이유
- SDD의 3대 이점 — 제어(control)·컨텍스트(context)·의도(intent)
- 워크플로 3층 구조 — 헌법(constitution) → 기능 루프(계획·구현·검증) → 재계획
- 에이전트를 감독하는 사람의 역할이 「타이피스트」가 아니라 「아키텍트」라는 관점

> **이 문서를 처음부터 다시 볼 필요는 없다.** 아래 표에서 지금 막힌 주제에 해당하는 강의만 펼친다. 각 강의에는 당시 작성한 대화정리본이 붙어 있다.

## 어디가 막혔을 때 무엇을 다시 보나

| 지금 막힌 것 | 다시 볼 강의 | 이어지는 Phase |
|---|---|---|
| 왜 명세를 쓰는지 확신이 안 선다 | 02 Why Spec-Driven Development | [부록 11](11%20%EB%B6%80%EB%A1%9D%20-%20%EB%B0%98%EB%A1%A0%EA%B3%BC%20%ED%95%9C%EA%B3%84.md) |
| 전체 흐름이 흐릿하다 | 03 Workflow Overview | — |
| 프로젝트 규칙을 어디에 적나 | 05 Creating the Constitution | [Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md) |
| 명세에 무엇을 담나 | 06 Feature Specification | [Phase 3](03%20Phase%203%20-%20%EA%B8%B0%EB%8A%A5%20%EB%AA%85%EC%84%B8%20%EC%9E%91%EC%84%B1.md) |
| 구현 중 에이전트가 산으로 간다 | 07 Feature Implementation | [Phase 4](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md) |
| 나온 코드를 어떻게 믿나 | 08 Feature Validation | [Phase 5](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md) |
| 기능이 쌓이면 계획이 무너진다 | 09 Project Replanning · 10 The Second Feature Phase | [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md) |
| 같은 지시를 반복하고 있다 | 13 Build Your Own Workflow | [Phase 7](07%20Phase%207%20-%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20%EC%9E%90%EB%8F%99%ED%99%94.md) |
| 레거시에 어떻게 넣나 | 12 Legacy Support | [Phase 8](08%20Phase%208%20-%20%EB%A0%88%EA%B1%B0%EC%8B%9C%20%EC%BD%94%EB%93%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%97%90%20%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0.md) |
| 도구를 바꾸면 다 날아가나 | 14 Agent Replaceability | [Phase 9](09%20Phase%209%20-%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EA%B5%90%EC%B2%B4%EC%99%80%20%ED%91%9C%EC%A4%80.md) |

## 1-A. 개념 — 왜 SDD인가

- [ ] [01 Introduction.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/01%20Introduction.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/01%20Introduction%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [02 Why Spec-Driven Development.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/02%20Why%20Spec-Driven%20Development.md) — **바이브 코딩 vs SDD.** 명세를 「계약」으로 보는 관점이 이 로드맵 전체의 전제다 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/02%20Why%20Spec-Driven%20Development%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [03 Workflow Overview.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/03%20Workflow%20Overview.md) — **워크플로 전체 그림** — 헌법 · 기능 루프 · 재계획. 아키텍트 비유 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/03%20Workflow%20Overview%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 1-B. 워크플로 각 단계

- [ ] [04 Setup (Optional).md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/04%20Setup%20%28Optional%29.md) — 환경 설정 영상 (Q&A 없이 건너뜀) (2026-07-28)
- [ ] [05 Creating the Constitution.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/05%20Creating%20the%20Constitution.md) — → [Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/05%20Creating%20the%20Constitution%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [06 Feature Specification.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/06%20Feature%20Specification.md) — → [Phase 3](03%20Phase%203%20-%20%EA%B8%B0%EB%8A%A5%20%EB%AA%85%EC%84%B8%20%EC%9E%91%EC%84%B1.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/06%20Feature%20Specification%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [07 Feature Implementation.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/07%20Feature%20Implementation.md) — → [Phase 4](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/07%20Feature%20Implementation%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [08 Feature Validation.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/08%20Feature%20Validation.md) — → [Phase 5](05%20Phase%205%20-%20%EA%B2%80%EC%A6%9D%20%EB%A6%AC%EB%B7%B0%20%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B0%90%EC%82%AC.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/08%20Feature%20Validation%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [09 Project Replanning.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/09%20Project%20Replanning.md) — → [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/09%20Project%20Replanning%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 1-C. 확장 — 규모·레거시·자동화·표준

- [ ] [10 The Second Feature Phase.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/10%20The%20Second%20Feature%20Phase.md) — → [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md). AI 피로 관리와 서브에이전트 심층 리뷰 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/10%20The%20Second%20Feature%20Phase%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [11 The MVP.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/11%20The%20MVP.md) — → [Phase 6](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/11%20The%20MVP%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [12 Legacy Support.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/12%20Legacy%20Support.md) — → [Phase 8](08%20Phase%208%20-%20%EB%A0%88%EA%B1%B0%EC%8B%9C%20%EC%BD%94%EB%93%9C%EB%B2%A0%EC%9D%B4%EC%8A%A4%EC%97%90%20%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/12%20Legacy%20Support%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [13 Build Your Own Workflow.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/13%20Build%20Your%20Own%20Workflow.md) — → [Phase 7](07%20Phase%207%20-%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20%EC%9E%90%EB%8F%99%ED%99%94.md). 스킬·MCP·CLI·플러그인·Spec Kit·OpenSpec (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/13%20Build%20Your%20Own%20Workflow%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [14 Agent Replaceability.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/14%20Agent%20Replaceability.md) — → [Phase 9](09%20Phase%209%20-%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8%20%EA%B5%90%EC%B2%B4%EC%99%80%20%ED%91%9C%EC%A4%80.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/14%20Agent%20Replaceability%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))
- [ ] [15 Conclusion.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/15%20Conclusion.md) (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/15%20Conclusion%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 복습 과제

강의를 다시 보는 대신 아래 다섯 개를 **보지 않고** 답해 본다. 막히는 항목이 있으면 그 강의만 다시 연다.

1. 명세가 「계약」이라는 말은 무슨 뜻인가. 계약이 아니면 무엇이 되는가.
2. 헌법(constitution)에 들어가는 것과 기능 명세에 들어가는 것을 어떻게 나누는가.
3. 기능 루프의 세 단계 각각에서 **사람이 하는 일**은 무엇인가.
4. 재계획은 언제 하는가. 하지 않으면 무엇이 무너지는가.
5. 명세를 썼는데도 결과가 나쁘다면 어디를 먼저 의심하는가.

> 5번의 답이 곧 [Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md)의 주제다. 대부분의 경우 명세가 아니라 **명세가 놓인 컨텍스트**가 문제다.

## 다음 단계

→ [02 Phase 2 - 프로젝트 컨텍스트와 헌법](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md)
