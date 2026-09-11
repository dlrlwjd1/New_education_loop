# New AI Workflow and Omnipresent Claude

## 개요
- 영상: [Andrej Karpathy Just Revealed His New AI Workflow… And It’s Not What You Think](https://www.youtube.com/watch?v=eMVaGOsfYs8)
- 채널: Dream Labs AI
- 업로드일: 2026-07-02
- 길이: 11:03
- 핵심 주제: Karpathy가 언급한 "세 번째 LLM UI/UX 패러다임"에 대한 해설. AI가 개인 chatbot이나 local coding app을 넘어, 조직 전체의 persistent, asynchronous, multiplayer teammate가 되는 방향.

## 내용

### 1. 세 번째 AI UI 패러다임
해설자는 Karpathy의 tweet을 바탕으로 AI interaction의 세 단계를 설명한다.

1. 웹사이트 chatbot: 사용자가 브라우저에서 개별 Claude/ChatGPT와 대화한다.
2. 로컬 앱/코딩 agent: Claude Code, Codex처럼 로컬 파일과 도구에 접근한다.
3. 조직 전체의 persistent AI: Slack 같은 업무 공간에 들어와 팀원들과 함께 일한다.

세 번째 단계는 단순히 "Slack에서 RAG chatbot 쓰기"가 아니라, 조직의 도구, 문서, 대화, compute environment에 연결된 AI teammate에 가깝다.

### 2. Claude tag는 예시일 뿐이다
영상은 Claude가 Slack 안에서 tag되어 작업하는 기능을 예로 든다. 하지만 핵심은 Slack 자체가 아니다.

핵심은 AI가 조직 전체 context에 접근하고, 여러 사람이 같은 AI와 협업하며, AI가 persistent entity처럼 행동하는 구조다.

### 3. Multiplayer AI workflow
기존 chatbot은 개인별로 context가 분리된다. A가 만든 결과를 B가 다시 자기 Claude에 복사해 넣어야 한다.

Omnipresent AI에서는 한 thread 안에서 developer, designer, PM, AI가 같은 context를 공유한다. 작업 handoff가 conversation 안에서 이어지고, AI는 같은 business context와 tool access를 유지한다.

### 4. Business integration이 핵심이다
Karpathy가 말한 under-the-hood engineering은 다음을 포함한다.

- Slack/communication tool integration
- internal docs 연결
- codebase/tool 연결
- analytics와 business data 연결
- compute environment 연결
- permission과 security
- memory와 context 관리

이 작업이 되어야 AI가 "조직에 들어온 동료"처럼 작동할 수 있다.

### 5. 개인 사용자는 아직 제한이 있다
영상은 이 방향이 강력하지만 현재는 enterprise 기능, Slack 중심 workflow, 보안/권한 설정 같은 제약이 있다고 설명한다.

따라서 개인 사용자는 완전한 형태를 바로 쓰기 어렵지만, 자신의 workflow에서도 shared context, persistent memory, team-level tool integration을 모방할 수 있다.

## 예시

### AI UI 진화
```text
1. Chatbot in browser
2. Local agent with files/tools
3. Organization-wide AI teammate
```

### Omnipresent AI가 가능한 일
```text
- 팀 thread에서 spec 정리
- 개발자가 만든 결과를 디자이너에게 handoff
- 내부 문서와 analytics를 참조해 답변
- codebase와 business context를 함께 사용
- 여러 팀원이 같은 AI context에서 협업
```

## 요약
- Karpathy의 새 workflow는 단순 prompt나 chatbot 개선이 아니라 AI interface의 변화다.
- AI는 개인 도구에서 조직 전체의 persistent teammate로 이동하고 있다.
- Claude tag/Slack은 그 예시일 뿐이고, 핵심은 shared context와 organization-wide tool access다.
- 이 방식은 multiplayer collaboration과 handoff를 자연스럽게 만든다.
- 실제 구현에는 permission, security, memory, integration engineering이 필요하다.
