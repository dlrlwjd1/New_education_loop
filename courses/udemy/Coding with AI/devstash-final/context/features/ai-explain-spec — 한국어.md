# AI 코드 설명 (AI Explain Code)

> 원문 [ai-explain-spec.md](ai-explain-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

OpenAI "gpt-5-nano" 모델을 사용하여 아이템 드로어(item drawer)에서 스니펫(snippet)과 커맨드(command)에 대한 AI 기반 코드 설명을 추가합니다. 이 둘은 설명이 가치를 더하는 아이템 타입입니다 — 실제 코드와 터미널 커맨드입니다. 다른 타입들(prompts, notes, links, files, images)은 이미 사람이 읽을 수 있거나 코드가 아닙니다. Pro 전용 기능입니다. 설명은 별도 패널이 아니라 코드 에디터의 탭 인터페이스(tab interface)를 통해 인라인으로 표시됩니다.

## 요구사항 (Requirements)

- 인증(auth), Pro 게이팅(gating), Zod 검증(validation), 속도 제한(rate limiting)을 갖춘 `explainCode` 서버 액션(server action)을 생성합니다
- 코드 에디터의 윈도우 컨트롤 헤더에 (Copy 버튼 옆에) "Explain" 버튼(Sparkles 아이콘)을 추가합니다
- 아이템 드로어에서 snippet과 command 타입에 대해서만 표시합니다 (생성/편집 폼에서는 표시하지 않음)
- 생성 후, 뷰를 전환하기 위한 Code/Explain 탭을 에디터 헤더에 표시합니다
- 설명을 코드 에디터와 동일한 컨테이너 공간에 마크다운(markdown)으로 렌더링합니다
- 설명은 간결해야 하며(~200-300 단어) 코드가 무엇을 하는지와 핵심 개념을 다룹니다
- 로딩 상태: 생성 중에는 Loader2 스피너를 표시합니다
- UI에서의 Pro 게이팅: 무료 사용자에게는 Crown 아이콘 + 툴팁("AI features require Pro subscription")을 표시합니다
- 토스트(toast)를 통한 에러 처리 (Pro 게이팅, 속도 제한, AI 서비스 에러)
- 기존 패턴을 따릅니다
- 서버 액션에 대한 유닛 테스트(unit test)

## 참고 (Notes)

- 설명은 데이터베이스에 저장되지 않습니다 — 클릭할 때마다 다시 생성됩니다
- 생성/편집 폼에서는 사용할 수 없으며, 아이템 드로어의 읽기 뷰에서만 사용 가능합니다
- `isPro`를 아이템 드로어 / 코드 에디터에 prop으로 전달해야 합니다
- 전체 아키텍처 컨텍스트는 `docs/ai-integration-plan.md`를 참고하세요
