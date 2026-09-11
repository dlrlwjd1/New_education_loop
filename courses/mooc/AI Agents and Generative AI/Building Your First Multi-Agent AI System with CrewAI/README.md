# Building Your First Multi-Agent AI System with CrewAI

Edureka의 beginner-level 단일 강좌로, agentic AI·CrewAI architecture에서 model·prompt·context·flow 설계, YAML 기반 agent·task 구성과 crew 실행까지 다룬다.

- 강좌: https://www.mooc.org/learn/multi-agent-ai-system-crewai
- 소속: Mastering CrewAI for Multi Agent Systems Specialization
- 최근 업데이트: 2026년 4월(MOOC 과정 표시 기준)
- 구성: 4개 모듈 · 강의별 학습 노트 44개
- 권장 지식: Python과 기본 AI 개념
- 도구: CrewAI, Python, `uv`, LLM API
- 제외: 채점·AI 채점 평가와 해답

## 모듈

1. Introduction to Multi-Agent AI Systems and CrewAI — 16개
2. Prompt, Context, and Flow Engineering for AI Agents — 14개
3. Building and Executing Multi-Agent Crews — 12개
4. Course Wrap-Up and Practice Project — 2개

## 학습 흐름

```text
Agent Concepts -> CrewAI Project -> Model/Prompt/Context/Flow
-> Agents & Tasks -> Crew Execution -> Customer Support Project
```

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Introduction to Multi-Agent AI Systems and CrewAI

- [01 Specialization Introduction](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/01%20Specialization%20Introduction.md)
- [02 Course Introduction](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/02%20Course%20Introduction.md)
- [03 Marketing Teams Struggle with Traditional AI](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/03%20Marketing%20Teams%20Struggle%20with%20Traditional%20AI.md)
- [04 Introduction to Agentic AI](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/04%20Introduction%20to%20Agentic%20AI.md)
- [05 Core Concepts of Agentic AI](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/05%20Core%20Concepts%20of%20Agentic%20AI.md)
- [06 Difference Between AI Agents and Agentic AI](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/06%20Difference%20Between%20AI%20Agents%20and%20Agentic%20AI.md)
- [07 Real-World Agentic AI Use Cases](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/07%20Real-World%20Agentic%20AI%20Use%20Cases.md)
- [08 Single-Agent vs Multi-Agent AI Architectures](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/08%20Single-Agent%20vs%20Multi-Agent%20AI%20Architectures.md)
- [09 How Multi-Agent Systems Work](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/09%20How%20Multi-Agent%20Systems%20Work.md)
- [10 What Is CrewAI](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/10%20What%20Is%20CrewAI.md)
- [11 Understanding CrewAI Architecture](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/11%20Understanding%20CrewAI%20Architecture.md)
- [12 CrewAI vs Other AI Agent Frameworks](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/12%20CrewAI%20vs%20Other%20AI%20Agent%20Frameworks.md)
- [13 Preparing the CrewAI Development Environment](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/13%20Preparing%20the%20CrewAI%20Development%20Environment.md)
- [14 Setting Up a Virtual Environment](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/14%20Setting%20Up%20a%20Virtual%20Environment.md)
- [15 Installing CrewAI with uv](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/15%20Installing%20CrewAI%20with%20uv.md)
- [16 Project Structure and File Organization](Module%201%20-%20Introduction%20to%20Multi-Agent%20AI%20Systems%20and%20CrewAI/16%20Project%20Structure%20and%20File%20Organization.md)

### Module 2 - Prompt Context and Flow Engineering

- [01 LLM Providers and Model Selection](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/01%20LLM%20Providers%20and%20Model%20Selection.md)
- [02 Configuring Models per Agent Role](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/02%20Configuring%20Models%20per%20Agent%20Role.md)
- [03 Evaluating Cost Latency and Accuracy Trade-offs](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/03%20Evaluating%20Cost%20Latency%20and%20Accuracy%20Trade-offs.md)
- [04 Principles of Effective Prompt Engineering](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/04%20Principles%20of%20Effective%20Prompt%20Engineering.md)
- [05 Core Prompting Techniques](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/05%20Core%20Prompting%20Techniques.md)
- [06 Writing Prompts for Agent Behavior and Tone](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/06%20Writing%20Prompts%20for%20Agent%20Behavior%20and%20Tone.md)
- [07 Demonstration - Evaluating Prompt Impact Through Structured Comparison](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/07%20Demonstration%20-%20Evaluating%20Prompt%20Impact%20Through%20Structured%20Comparison.md)
- [08 Demonstration - Refining Prompts to Improve Agent Reasoning](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/08%20Demonstration%20-%20Refining%20Prompts%20to%20Improve%20Agent%20Reasoning.md)
- [09 Introduction to Context Engineering](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/09%20Introduction%20to%20Context%20Engineering.md)
- [10 Flow Engineering Fundamentals](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/10%20Flow%20Engineering%20Fundamentals.md)
- [11 Demonstration - Designing High-Quality Context for AI Agents](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/11%20Demonstration%20-%20Designing%20High-Quality%20Context%20for%20AI%20Agents.md)
- [12 Demonstration - Context Quality in Action - Signal vs Noise](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/12%20Demonstration%20-%20Context%20Quality%20in%20Action%20-%20Signal%20vs%20Noise.md)
- [13 Demonstration - Flow Engineering for Multi-Agent Systems](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/13%20Demonstration%20-%20Flow%20Engineering%20for%20Multi-Agent%20Systems.md)
- [14 Demonstration - Architecting Execution Flows in Multi-Agent Systems](Module%202%20-%20Prompt%20Context%20and%20Flow%20Engineering/14%20Demonstration%20-%20Architecting%20Execution%20Flows%20in%20Multi-Agent%20Systems.md)

### Module 3 - Building and Executing Multi-Agent Crews

- [01 Key Elements for High-Performance Agents in CrewAI](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/01%20Key%20Elements%20for%20High-Performance%20Agents%20in%20CrewAI.md)
- [02 Demonstration - Architecting Intelligence - Setting Up Your CrewAI Project](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/02%20Demonstration%20-%20Architecting%20Intelligence%20-%20Setting%20Up%20Your%20CrewAI%20Project.md)
- [03 Demonstration - Designing High-Performance Agents with YAML Configuration](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/03%20Demonstration%20-%20Designing%20High-Performance%20Agents%20with%20YAML%20Configuration.md)
- [04 Understanding Tasks in CrewAI](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/04%20Understanding%20Tasks%20in%20CrewAI.md)
- [05 Demonstration - Designing High-Precision Research and Strategy Tasks](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/05%20Demonstration%20-%20Designing%20High-Precision%20Research%20and%20Strategy%20Tasks.md)
- [06 Demonstration - Building a Self-Executing and Self-Evaluating Campaign Pipeline](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/06%20Demonstration%20-%20Building%20a%20Self-Executing%20and%20Self-Evaluating%20Campaign%20Pipeline.md)
- [07 Demonstration - Engineering Structured Intelligence - Schemas Hooks and Execution Lifecycle](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/07%20Demonstration%20-%20Engineering%20Structured%20Intelligence%20-%20Schemas%20Hooks%20and%20Execution%20Lifecycle.md)
- [08 Demonstration - Intelligent Model Assignment and Structured Multi-Agent Execution](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/08%20Demonstration%20-%20Intelligent%20Model%20Assignment%20and%20Structured%20Multi-Agent%20Execution.md)
- [09 Agent Collaboration Mechanisms](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/09%20Agent%20Collaboration%20Mechanisms.md)
- [10 Demonstration - Execution Modes and Output Inspection in main.py](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/10%20Demonstration%20-%20Execution%20Modes%20and%20Output%20Inspection%20in%20main.py.md)
- [11 Demonstration - Single Batch and Async Execution Modes in main.py](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/11%20Demonstration%20-%20Single%20Batch%20and%20Async%20Execution%20Modes%20in%20main.py.md)
- [12 Demonstration - Running Your CrewAI System from the Terminal](Module%203%20-%20Building%20and%20Executing%20Multi-Agent%20Crews/12%20Demonstration%20-%20Running%20Your%20CrewAI%20System%20from%20the%20Terminal.md)

### Module 4 - Course Wrap-Up and Practice Project

- [01 Multi-Agent Customer Support Project](Module%204%20-%20Course%20Wrap-Up%20and%20Practice%20Project/01%20Multi-Agent%20Customer%20Support%20Project.md)
- [02 Course Summary](Module%204%20-%20Course%20Wrap-Up%20and%20Practice%20Project/02%20Course%20Summary.md)

<!-- course-inventory:end -->
