# CrewAI vs Other AI Agent Frameworks

## 개요
- CrewAI, LangGraph, AutoGen과 LlamaIndex agent의 architecture·memory·human involvement·협업 방식을 비교한다.

## 내용
- CrewAI는 role·task 기반 team workflow와 structured delegation에 적합하다.
- LangGraph는 node·edge·checkpointed state로 branch, loop, retry가 많은 control flow에 강하다.
- AutoGen은 agent 대화와 user proxy를 통한 iterative human-in-the-loop 협업에 초점을 둔다.
- LlamaIndex agent는 document·database connector와 RAG-first routing으로 grounded knowledge task에 적합하다.
- Framework 선택은 team orchestration, explicit state machine, conversation, retrieval 중 핵심 요구를 기준으로 한다.

## 예시
```text
Role workflow -> CrewAI
Branch/retry state -> LangGraph
Conversation -> AutoGen
Retrieval grounding -> LlamaIndex
```

## 요약
- 모든 use case에 최적인 framework는 없으며 실행·상태·지식·협업 요구에 맞춰 선택해야 한다.
