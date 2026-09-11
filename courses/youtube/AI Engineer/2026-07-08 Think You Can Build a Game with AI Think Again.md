# Think You Can Build a Game with AI Think Again

## 개요
- 원본: https://www.youtube.com/watch?v=grdoOC1BT1s
- 채널: AI Engineer
- 발표자: Danielle An, David Hoe, Meta
- 핵심 주제: AI로 게임을 만드는 장벽은 낮아졌지만, 좋은 게임을 만드는 기준은 여전히 미감, 일관성, 재미, 런타임 AI 설계에 있다.

## 내용
### 누구나 게임을 만들 수 있지만 좋은 게임은 다르다
발표자는 2026년에는 많은 사람이 prompt 몇 번으로 platformer, Tetris, infinite runner 같은 간단한 게임을 만들 수 있다고 본다. 그러나 novelty는 금방 사라지고, 비슷한 prompt는 비슷한 결과를 만든다.

그래서 차별점은 단순히 "게임이 나온다"가 아니라, 미감, UI와 스토리와 아트의 일관성, 플레이 감각, 특정 사용자에게 왜 재미있는지에 대한 taste가 된다.

### key art가 cohesion의 anchor가 된다
Meta 팀은 하나의 key art 이미지를 출발점으로 삼아 art style, asset generation, gameplay direction을 연결하는 workflow를 소개한다. key art는 모델에게 시각적 스타일뿐 아니라 게임의 분위기와 플레이 방향을 고정해 주는 기준점으로 작동한다.

### runtime LLM은 새로운 게임 장르를 만든다
발표의 핵심 전환점은 런타임 중 LLM이 게임 안에서 의사결정을 하는 구조다. NPC가 고정 스크립트가 아니라 성격, 목표, 상황에 따라 실시간으로 판단하면 매번 다른 플레이가 가능해진다.

예시로 LLM 기반 NPC들이 큐브를 모으는 multiplayer game을 설명한다. 어떤 NPC는 훔치고, 어떤 NPC는 방해하고, 어떤 NPC는 명예롭게 행동하는 식으로 게임이 매번 달라진다.

### AI는 linear waterfall game production을 병렬 반복으로 바꾼다
전통적 게임 제작은 디자인, 아트, 모델링, 애니메이션, 코딩이 순차적으로 이어져 upstream 결정을 되돌리기 어렵다. AI workflow는 각 분야의 iteration을 hours/days 단위로 줄이고, 더 많은 play test와 더 빠른 수정이 가능하게 한다.

### 대규모 플랫폼의 새 문제
Meta 관점에서는 creator, player, platform 전체에 agentic system이 들어갈 때 scale, token economy, content safety, non-determinism이 핵심 문제가 된다. 모델, prompt, runtime behavior가 계속 바뀌면 기존의 안정성/디버깅 방식만으로는 충분하지 않다.

## 예시
### AI game upgrade path
- 초보자: Tetris나 infinite runner 같은 기본 게임을 prompt로 만들어 본다.
- 중급자: art, UI, surprise, narrative cohesion을 추가해 prompt 느낌을 줄인다.
- 고급자: runtime LLM, token cost, scalability, safety를 고려한다.

### runtime NPC design
- NPC마다 목표와 성격을 부여한다.
- LLM이 게임 중 행동을 결정한다.
- 같은 룰 안에서도 플레이마다 다른 emergent behavior가 생긴다.

## 요약
- AI는 게임 제작의 진입 장벽을 낮추지만, 좋은 게임을 만드는 taste를 자동으로 보장하지 않는다.
- key art는 AI asset과 gameplay cohesion을 만드는 강한 anchor가 된다.
- runtime LLM은 NPC와 game master를 동적으로 만들어 개인화와 재플레이성을 높인다.
- 게임 플랫폼 관점에서는 scale, token economy, content safety, non-determinism이 다음 과제다.
