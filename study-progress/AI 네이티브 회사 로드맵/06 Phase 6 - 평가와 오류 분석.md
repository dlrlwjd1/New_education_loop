# Phase 6 — 평가와 오류 분석

- 목표: 에이전트가 잘하고 있는지를 감이 아니라 숫자로 판정하고, 틀렸을 때 어디를 고칠지 근거를 갖고 정한다.
- 분량: 약 9시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 회사 업무에 맞는 eval 세트를 만들고 정기적으로 돌릴 수 있다.
- 실패 사례를 분류해 "모델 문제 / 검색 문제 / 도구 문제 / 프롬프트 문제"를 구분할 수 있다.
- 여러 구성 요소로 이뤄진 파이프라인에서 어느 단계가 병목인지 짚어낼 수 있다.
- 어떤 에이전트를 자율성 L3(자동 실행)으로 올려도 되는지 판정할 수 있다.
- 지연과 비용을 줄이는 개선을 근거를 갖고 고를 수 있다.
- 결과뿐 아니라 **에이전트가 밟은 경로(trajectory)** 를 채점할 수 있다.

> **2026-09-03 보강 — 결과가 맞아도 경로가 틀릴 수 있다.** 아래 강의들은 최종 출력 평가와 구성 요소별 평가를 다루지만, **어떤 도구를 어떤 순서로 호출했는가 자체를 채점하는 경로(trajectory) 평가**는 빠져 있다. 회사 업무에서는 "우연히 맞은 답"과 "절차대로 낸 답"을 구분해야 하므로 이게 필요하다. 6-A의 eval 세트에 아래 채점 방식을 하나 이상 넣는다.
>
> | 방식 | 통과 기준 | 언제 쓰는가 |
> |---|---|---|
> | 정확 일치(exact match) | 기대한 호출 순서와 완전히 같다 | 절차가 규정으로 정해진 업무 (정산·승인) |
> | 순서 유지 일치(in-order match) | 기대한 호출이 순서를 지켜 모두 나타난다. 중간에 다른 호출이 껴도 통과 | 대부분의 사내 업무 |
> | 정밀도 / 재현율 | 불필요한 호출이 얼마나 섞였나 / 필요한 호출을 얼마나 놓쳤나 | 비용을 같이 보고 싶을 때 |
>
> 출처: Google, Agents Companion (2026-09-03 확인). 실습이 필요하면 [부록 B](13%20부록%20-%20추천%20강의%20종합.md)의 **Evaluating AI Agents**(DeepLearning.AI × Arize)가 이 부분을 정면으로 다룬다.

> **이 Phase가 자율성의 관문이다.** Phase 2에서 매긴 자율성 등급 중 L3는 여기 eval을 통과한 것에만 준다. 이 원칙을 헌법 문서에 명시해 둔다.

> **입력이 필요하다.** Phase 3에서 모아 둔 실패 기록과 Phase 4의 검색 품질 리포트가 여기 재료다. 없으면 지금부터 2주간 모은 뒤 시작한다.

## 6-A. eval 세트를 만든다

메인: Agentic AI module 04 전체. **이 로드맵에서 가장 실용적인 모듈**이라고 봐도 된다.

- [ ] [01 Evaluations (evals).md](../../courses/deeplearning-ai/Agentic%20AI/module%2004/01%20Evaluations%20%28evals%29.md) — **eval의 정의와 왜 필요한가.**
- [ ] [02 Error analysis and prioritizing next steps.md](../../courses/deeplearning-ai/Agentic%20AI/module%2004/02%20Error%20analysis%20and%20prioritizing%20next%20steps.md) — **오류 분석으로 다음 할 일을 정하는 법.** 개선 작업의 우선순위를 여기서 뽑는다.
- [ ] [03 More error analysis examples.md](../../courses/deeplearning-ai/Agentic%20AI/module%2004/03%20More%20error%20analysis%20examples.md)
- [ ] [04 Component-level evaluations.md](../../courses/deeplearning-ai/Agentic%20AI/module%2004/04%20Component-level%20evaluations.md) — **구성 요소별 평가.** 멀티 에이전트에서 "누가 틀렸는지" 찾는 유일한 방법.
- [ ] [06 How to address problems you identify.md](../../courses/deeplearning-ai/Agentic%20AI/module%2004/06%20How%20to%20address%20problems%20you%20identify.md)
- [ ] [08 Development process summary.md](../../courses/deeplearning-ai/Agentic%20AI/module%2004/08%20Development%20process%20summary.md) — **eval을 중심에 둔 개발 절차 요약.** 앞으로의 작업 리듬이 된다.

같은 강좌에서 앞서 나온 eval 관련 강의(놓쳤으면 여기서):

- [ ] [07 Evals and Error Analysis.md](../../courses/deeplearning-ai/Agentic%20AI/module%2001/07%20Evals%20and%20Error%20Analysis.md)
- [ ] [04 Evals for Reflection Workflows.md](../../courses/deeplearning-ai/Agentic%20AI/module%2002/04%20Evals%20for%20Reflection%20Workflows.md) — Phase 5의 리플렉션을 어떻게 평가하는가.

함께 보기: 실전 관점.

- [ ] [2025-12-03 The agent evaluation revolution.md](../../courses/youtube/Google%20Cloud%20Tech/AI%20agent%20crash%20course/2025-12-03%20The%20agent%20evaluation%20revolution.md)
- [ ] [2025-12-12 How to evaluate agents in practice.md](../../courses/youtube/Google%20Cloud%20Tech/AI%20agent%20crash%20course/2025-12-12%20How%20to%20evaluate%20agents%20in%20practice.md) — **실제로 무엇을 어떻게 측정하는가.**
- [ ] [2026-07-14 Dont Ship Skills Without Evals.md](../../courses/youtube/AI%20Engineer/2026-07-14%20Dont%20Ship%20Skills%20Without%20Evals.md) — Phase 4에서 만든 스킬에 eval을 붙이는 이야기.
- [ ] [21 Day 5 - Add Observability, Evaluation and Feedback to AI Traders.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/21%20Day%205%20-%20Add%20Observability,%20Evaluation%20and%20Feedback%20to%20AI%20Traders.md) — **관측·평가·피드백을 한 시스템에 붙이는 실습.** Phase 7과 걸쳐 있다.

함께 보기: 사람이 못 알아채는 실패를 잡는 관점. 짧고 이 로드맵에 잘 맞는다.

- [ ] [01 Building Trust in Your AI PhD's Work.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Build%20Apps%20with%20AI%20-%20From%20Idea%20to%20Working%20Product/Module%204%20-%20Testing%20and%20Evaluating%20What%20You%20Build/01%20Building%20Trust%20in%20Your%20AI%20PhD%27s%20Work.md)
- [ ] [02 Testing Your Build with Real Data.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Build%20Apps%20with%20AI%20-%20From%20Idea%20to%20Working%20Product/Module%204%20-%20Testing%20and%20Evaluating%20What%20You%20Build/02%20Testing%20Your%20Build%20with%20Real%20Data.md) — **실제 데이터로 검증.** 합성 데이터로만 돌린 eval이 왜 위험한지.
- [ ] [03 The Silent Failure Audit.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Build%20Apps%20with%20AI%20-%20From%20Idea%20to%20Working%20Product/Module%204%20-%20Testing%20and%20Evaluating%20What%20You%20Build/03%20The%20Silent%20Failure%20Audit.md) — **조용한 실패 감사.** 회사 운영에서 가장 무서운 유형 — 에러 없이 틀린 답을 내는 경우.

심판자로서의 LLM (Phase 2에서 봤으면 건너뛴다):

- [ ] [18 Day 3 - LLM as a Judge - Rank Multiple LLMs with an Orchestration Flow.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%201%20-%20Week%201/18%20Day%203%20-%20LLM%20as%20a%20Judge%20-%20Rank%20Multiple%20LLMs%20with%20an%20Orchestration%20Flow.md)

지식베이스 쪽 평가 (Phase 4에서 봤으면 건너뛴다):

- [ ] [09 Evaluating Retrieval.md](../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2002/09%20Evaluating%20Retrieval.md)
- [ ] [05 Customized Evaluation.md](../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/05%20Customized%20Evaluation.md) — **회사 고유 기준으로 평가 지표를 만드는 법.**
- [ ] [08 Evaluating Your LLM's Performance.md](../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2004/08%20Evaluating%20Your%20LLM%27s%20Performance.md)

## 6-B. 지연과 비용을 줄인다

eval로 품질 하한선을 확보한 다음에야 최적화를 한다. 순서를 뒤집으면 싸고 빠르게 틀린 시스템이 된다.

- [ ] [07 Latency, cost optimization.md](../../courses/deeplearning-ai/Agentic%20AI/module%2004/07%20Latency,%20cost%20optimization.md) — **메인.**
- [ ] [07 Cost vs Response Quality.md](../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/07%20Cost%20vs%20Response%20Quality.md)
- [ ] [08 Latency vs Response Quality.md](../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/08%20Latency%20vs%20Response%20Quality.md)
- [ ] [06 Quantization.md](../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/06%20Quantization.md) — 로컬 모델을 쓸 때만 필요하다.

## 산출물

1. **eval 세트** — 회사 업무 하나당 최소 20건. Phase 3의 실패 기록에서 뽑은 실제 사례가 포함돼야 한다. 각 항목에 입력·기대 출력·판정 기준을 적는다.
2. **오류 분류표** — 실패 사례를 아래로 나눈다.

   | 유형 | 뜻 | 고칠 곳 |
   |---|---|---|
   | 검색 실패 | 필요한 문서를 못 찾음 | Phase 4 지식베이스 |
   | 도구 실패 | 도구를 잘못 고르거나 인자를 틀림 | Phase 3 도구 설명·스키마 |
   | 판단 실패 | 정보는 다 있는데 결론이 틀림 | 모델 교체 또는 프롬프트 |
   | 조율 실패 | 에이전트 간 전달에서 깨짐 | Phase 5 스키마·패턴 |
   | 조용한 실패 | 에러 없이 그럴듯하게 틀림 | eval 항목 추가 + 승인 지점 |

   유형별 빈도를 세어 **가장 많은 것부터** 고친다.
3. **자율성 승격 판정 기록** — 어떤 에이전트를 L2에서 L3로 올렸고, 어떤 eval 결과가 근거였는지. 승격하지 않기로 한 것과 그 이유도 남긴다.
4. **정기 eval 실행 계획** — 언제(배포 전 / 주간 / 모델 교체 시) 무엇을 돌릴지. Phase 8의 배포 파이프라인에 이걸 끼워 넣는다.

## 다음 단계

→ [07 Phase 7 - 관측과 보안](07%20Phase%207%20-%20관측과%20보안.md)
