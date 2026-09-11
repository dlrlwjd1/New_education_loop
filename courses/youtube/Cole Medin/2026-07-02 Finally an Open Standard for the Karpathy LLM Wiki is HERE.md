# Finally an Open Standard for the Karpathy LLM Wiki is HERE

## 개요
- 강의/영상: [Finally, an Open Standard for the Karpathy LLM Wiki is HERE](https://www.youtube.com/watch?v=T33iI6izAKw)
- 채널: Cole Medin
- 업로드일: 2026-07-02
- 핵심 주제: Karpathy의 LLM wiki 패턴은 강력하지만 사람마다 구조가 달라 공유와 재사용이 어렵다. Google의 Open Knowledge Format(OKF)은 markdown 기반 wiki의 폴더 구조와 메타데이터를 최소한으로 표준화해 agent가 지식 베이스를 더 쉽게 소비하고 생산하도록 만든다.

## 내용

### 1. LLM wiki의 문제는 성능보다 표준 부재다
Karpathy가 제안한 LLM wiki는 단순한 RAG 저장소가 아니라, LLM이 자료를 읽고 핵심 정보를 추출해 entity page와 관련 개념 링크를 계속 갱신하는 개인 지식 그래프에 가깝다. 회의록, 문서, 기사, 영상 전사 등을 넣으면 agent가 기존 wiki에 통합하고, 필요한 경우 index에서 시작해 관련 문서로 점진적으로 들어간다.

문제는 각자가 만든 wiki 구조가 다르다는 점이다. 어떤 사람은 `tags`를 쓰고, 다른 사람은 `categories`를 쓰며, 관련 개념 링크나 entity 파일 구성도 제각각이다. 이렇게 되면 다른 사람의 wiki를 내 agent에게 주어도 agent가 최적으로 탐색할 수 없다.

### 2. OKF는 wiki의 조직 방식과 메타데이터를 표준화한다
OKF가 표준화하는 핵심은 두 가지다.

- 문서, entity, concept, bundle, index를 어떻게 배치할지
- 각 문서 상단의 YAML front matter에 어떤 필드를 둘지

Cole은 OKF의 `spec.md`를 coding agent에게 주면 새 wiki를 만들거나 기존 wiki를 OKF 구조로 refactor할 수 있다고 설명한다. 이 spec은 일종의 skill처럼 작동한다. agent가 표준 용어, bundle 구조, YAML front matter, `type`, `tags`, 관련 링크를 이해한 뒤 그 규칙에 맞춰 문서를 생산한다.

### 3. OKF는 MCP의 지식 베이스 버전처럼 작동한다
Cole은 OKF를 "agent-to-knowledge-base communication"의 표준으로 본다. MCP가 agent와 tool 사이의 연결 방식을 표준화했다면, OKF는 agent와 knowledge base 사이의 읽기/쓰기 방식을 표준화하려는 시도다.

중요한 점은 OKF가 지식 베이스를 읽는 consumer 표준이면서, 동시에 wiki를 계속 진화시키는 producer 표준이라는 것이다. agent는 bundle을 읽고 질문에 답할 뿐 아니라, 새 자료를 넣을 때 기존 entity page와 index를 업데이트할 수 있다.

### 4. bundle은 공유 가능한 지식 패키지다
OKF에서 wiki 단위는 bundle로 볼 수 있다. Cole은 자신의 AI coding 영상 일부를 OKF bundle로 묶어, 사용자가 local Obsidian, Notion, second brain에 가져와 바로 질문할 수 있게 하는 예시를 보여준다.

이 방식의 장점은 콘텐츠 제작자가 transcript나 개념 정리를 개별 사용자에게 맡기지 않고, agent가 이해할 수 있는 구조화된 지식 패키지를 직접 배포할 수 있다는 점이다. 사용자는 OKF spec을 agent에게 먼저 읽힌 뒤 bundle repo를 연결하면 된다.

### 5. progressive disclosure가 핵심 탐색 방식이다
OKF bundle은 top-level index에서 시작해 하위 index, concepts, videos로 내려가는 구조를 가진다. agent는 처음부터 모든 내용을 context에 넣지 않고, 질문과 관련된 index를 읽고 필요한 문서만 추가로 연다.

Cole이 보여준 예시에서는 "AI coding assistant로 안정적인 코드를 얻는 가장 중요한 아이디어가 무엇인가"라는 질문에 대해 agent가 bundle index를 읽고, concepts index로 내려간 뒤, context engineering 문서를 선택해 답을 구성한다. 이는 skill의 progressive disclosure와 유사하다.

### 6. OKF의 단순함은 약점이 아니라 의도다
Cole은 OKF가 너무 단순하다는 비판도 소개한다. 실제로 OKF가 추가하는 것은 대체로 폴더/인덱스 구성과 metadata 필드 정도다. 하지만 그는 이 단순함이 장점이라고 본다.

표준이 너무 무거우면 사람마다 구현이 갈라지기 쉽다. 반대로 OKF처럼 최소한의 규칙만 강제하면 다양한 wiki가 같은 방식으로 생산되고 소비될 수 있다. Cole은 OKF 자체가 최종 표준이 아닐 수는 있지만, 이런 종류의 markdown knowledge standard는 personal agent 시대에 필요하다고 본다.

## 예시

### OKF bundle 구성 예
```text
bundle/
  index.md
  concepts/
    index.md
    context-engineering.md
    piv-loop.md
  videos/
    index.md
    video-title.md
```

### 문서 메타데이터 예
```yaml
---
type: concept
title: PIV Loop
tags:
  - ai-coding
  - workflow
related_videos:
  - video-id
---
```

## 요약
- LLM wiki는 개인 지식 그래프를 LLM이 지속적으로 유지하게 하는 패턴이다.
- 문제는 사람마다 wiki 구조가 달라 공유와 재사용이 어렵다는 점이다.
- OKF는 markdown wiki의 폴더 구조와 YAML metadata를 최소한으로 표준화한다.
- bundle은 agent가 읽고 쓸 수 있는 공유 가능한 지식 패키지다.
- OKF의 가치는 복잡한 기능이 아니라, agent가 지식 베이스를 예측 가능한 방식으로 탐색하게 만드는 공통 규칙에 있다.
