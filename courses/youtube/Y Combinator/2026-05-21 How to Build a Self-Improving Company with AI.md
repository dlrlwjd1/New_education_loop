# How to Build a Self-Improving Company with AI

## 개요
- 원본: https://www.youtube.com/watch?v=X_JsIHUfUjc
- 채널: Y Combinator
- 게시일: 2026-05-21
- 핵심 주제: AI를 기존 회사 구조에 덧붙이는 생산성 도구로 보지 말고, 회사 자체를 recursive self-improving AI loop로 재설계하자는 주장

## 내용
### 기존 회사는 정보 전달 계층으로 구성되어 있다
발표자는 전통적 회사 구조를 로마 군단에 비유한다. 명령은 위에서 아래로 내려가고, 정보는 아래에서 위로 올라간다. 대부분의 현대 기업도 사람을 정보 전달 통로로 삼는 계층 구조에 가깝다.

AI를 단순히 copilot으로 붙이면 기존 구조에 더 강한 엔진을 얹는 정도에 그친다. 발표자는 이 관점이 너무 작다고 보고, 회사의 작동 방식 자체를 다시 상상해야 한다고 말한다.

### 회사의 지식은 사람 머리와 흩어진 기록에 있다
회사의 domain knowledge는 Notion 문서, Slack, 이메일, 미팅, 고객 대화, 코드, 데이터베이스, 운영 절차 안에 흩어져 있다. 이 지식이 AI가 읽을 수 있게 legible해지면, 회사는 계층형 조직에서 AI-native organization으로 바뀔 수 있다.

핵심은 "AI를 회사 옆에 붙이는 것"이 아니라, 회사의 know-how를 context, skill, tool, policy, quality gate로 구조화하는 것이다.

### self-improving AI loop
발표자는 회사를 여러 개의 반복 개선 loop로 볼 수 있다고 설명한다.

1. Sensor layer: 고객 이메일, support ticket, subscription cancellation, product telemetry, code change처럼 외부 세계에서 신호를 받는다.
2. Policy/decision layer: 무엇을 자동 처리할 수 있고, 무엇은 인간 승인이 필요한지 정한다.
3. Tool layer: database query, calendar lookup, internal API 같은 deterministic tool을 제공한다.
4. Quality gate: eval, deterministic check, safety filter, human review를 둔다.
5. Learning mechanism: 실패와 부족한 점을 다시 상위 layer로 되돌려 시스템을 개선한다.

이 loop가 최소한의 인간 개입으로 반복되면, 회사는 사람이 자는 동안에도 조금씩 좋아질 수 있다.

### YC 내부 사례: agent query monitoring
초기에는 YC 내부 agent가 데이터베이스를 조회해 "이 회사와 마지막 office hour가 언제였는가" 같은 질문에 답했다. 이후에는 특정 founder에게 필요한 introduction 후보를 찾아주는 sidekick 역할을 했다.

전환점은 monitoring agent를 붙인 것이다. 이 agent는 YC 직원들의 모든 query를 보고, 어떤 query가 실패했는지, 왜 실패했는지, 더 나은 deterministic tool이 필요한지, skill file을 고쳐야 하는지, database index가 필요한지 판단한다. 그리고 필요한 코드를 작성해 merge request를 만들고, 다른 agent가 review한 뒤 배포까지 이어질 수 있다.

이것은 단순히 인간을 20-30% 더 생산적으로 만드는 것이 아니라, AI가 자기 사용 실패를 관찰하고 다음 날 같은 query가 성공하도록 시스템을 개선하는 loop다.

### burn tokens, not headcount
발표자는 앞으로 스타트업의 병목이 headcount가 아니라 token usage가 될 수 있다고 본다. token 사용량을 단순 leaderboard로 만들면 게임화될 위험이 있지만, 누가 조직 안에서 새로운 AI 가능성을 최대한 실험하고 있는지 보는 방향성은 중요하다고 말한다.

이 관점에서 middle management의 많은 coordination 기능은 AI가 맡고, 사람은 named directly responsible individual로서 builder/operator 역할을 해야 한다고 주장한다.

### 조직을 AI에게 legible하게 만들기
AI가 회사 지식을 활용하려면 "기록되지 않은 일은 AI에게 일어나지 않은 일"이 된다. 이메일, Slack, DM, office hour, 회의, 고객 대화 같은 것들이 기록되고 요약되어야 한다.

단, 원본 전체를 context window에 넣을 수는 없기 때문에 diarization, aggregation, synthesis가 필요하다. 긴 기록을 중요한 신호로 압축하고, AI가 필요할 때 원본으로 돌아갈 수 있는 breadcrumb를 만들어야 한다.

### YC user manual 재생성 사례
YC는 몇 달간 축적된 office hour 녹음을 기반으로 기존 user manual을 다시 생성하는 실험을 했다. 녹음 내용을 fundraising, hiring, co-founder dispute 같은 주제로 분류하고, 최신 조언을 반영해 더 나은 manual을 만들었다.

이 manual은 한 번 쓰고 끝나는 문서가 아니라, 매달 새 조언과 비교해 업데이트되는 living brain이 될 수 있다. 더 나아가 agent의 context로 들어가면, 여러 YC partner의 지혜를 결합한 상담 도구가 된다.

### software는 ephemeral, context와 skill이 자산이다
발표자는 내부 dashboard나 운영 workflow software는 disposable하게 봐도 된다고 말한다. 데이터와 context, business knowledge, skill은 소중하게 보존하되, 그 위에 얹히는 software는 필요할 때 생성하고, 모델이 좋아지면 다시 생성할 수 있다.

## 예시
### self-improving product loop
- product analytics에서 funnel friction이 가장 큰 지점을 찾는다.
- best practice를 조사한다.
- A/B test를 만든다.
- 일정 기간 실행한 뒤 더 나은 버전을 선택한다.
- 배포하고 같은 과정을 반복한다.

### self-improving customer service loop
- 고객 요청과 제안을 모은다.
- agent가 roadmap과 맞는지 판단한다.
- 버릴 제안과 구현할 제안을 분리한다.
- 구현 가능한 것은 코드 변경, 리뷰, 배포까지 진행한다.
- 고객에게 반영 결과를 전달한다.

### AI-native company checklist
- 모든 중요한 대화와 결정이 기록되는가?
- 기록이 요약, 분류, 검색 가능한 형태로 압축되는가?
- AI가 사용할 deterministic tool/API가 있는가?
- 자동 실행과 인간 승인의 경계가 명확한가?
- 실패한 AI 작업을 관찰하고 개선하는 monitoring loop가 있는가?
- 생성된 software보다 context, data, skill을 더 중요한 자산으로 취급하는가?

## 요약
- AI를 copilot으로 붙이는 것은 작은 변화이고, 회사 자체를 AI loop로 재설계하는 것이 더 큰 변화다.
- self-improving company는 sensor, policy, tool, quality gate, learning mechanism으로 구성된다.
- 회사의 모든 지식과 대화는 AI에게 legible해야 하며, 기록되지 않은 일은 AI에게 존재하지 않는다.
- 앞으로의 병목은 headcount보다 token usage와 좋은 AI loop 설계가 될 수 있다.
- 내부 software는 점점 ephemeral해지고, 진짜 자산은 data, context, domain knowledge, skill이 된다.
