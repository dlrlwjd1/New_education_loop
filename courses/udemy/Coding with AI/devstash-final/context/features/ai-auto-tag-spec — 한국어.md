# AI 자동 태깅 (AI Auto-Tagging)

> 원문 [ai-auto-tag-spec.md](ai-auto-tag-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

OpenAI "gpt-5-nano" 모델을 사용하여 아이템에 대한 AI 기반 태그 제안(tag suggestions)을 추가합니다. 사용자가 태그 영역에서 "Suggest Tags" 버튼을 클릭하면, AI가 아이템의 제목과 내용을 기반으로 3~5개의 자유형식(freeform) 태그 제안을 반환합니다. 각 제안에는 수락/거부(accept/reject) 컨트롤이 있습니다. UI 레벨과 서버 사이드(server-side) 양쪽에서 게이팅(gating)되는 Pro 전용 기능입니다. 이것이 처음으로 구현되는 AI 기능이라면, 이후의 AI 기능들을 위한 OpenAI 기반(클라이언트, 서버 액션(server action), 속도 제한(rate limit) 설정)도 함께 확립합니다.

## 요구사항 (Requirements)

- `AI_MODEL` 상수를 포함한 OpenAI 클라이언트 유틸리티를 생성합니다 (이전 AI 기능에서 아직 생성되지 않은 경우)
- 표준 openai SDK를 사용하고 단순하게 유지합니다
- 인증(auth), Pro 게이팅, Zod 검증(validation), 속도 제한을 갖춘 `generateAutoTags` 서버 액션을 생성합니다
- 기존 속도 제한 유틸리티에 AI 속도 제한 설정(사용자당 시간당 20 요청)을 추가합니다 (아직 추가되지 않은 경우)
- 아이템 생성 다이얼로그와 아이템 드로어(drawer) 편집 모드의 태그 입력 근처에 "Suggest Tags" 버튼(Sparkles 아이콘, ghost variant)을 추가합니다
- 제안된 태그를 태그별 수락(체크) 및 거부(X) 컨트롤이 있는 배지로 표시합니다
- 수락된 태그는 아이템의 태그 목록에 추가됩니다
- 태그는 자유형식입니다 (데이터베이스의 기존 태그로 제한되지 않음)
- API 호출 전에 내용을 2000자로 잘라냅니다(truncate)
- 무료 사용자에게는 Suggest Tags 버튼을 숨깁니다 (Pro 전용 UI 게이팅)
- 토스트(toast)를 통한 에러 처리 (Pro 게이팅, 속도 제한, AI 서비스 에러)
- 기존 패턴을 따릅니다
- 서버 액션에 대한 유닛 테스트(unit test)

## 중요: OpenAI SDK 및 gpt-5-nano 주의사항

`openai` npm 패키지 v6 이상에는 두 가지 다른 API가 있습니다. **gpt-5-nano는 Chat Completions API와 함께 동작하지 않습니다** — 빈 내용(empty content)을 반환합니다. 반드시 **Responses API**를 대신 사용해야 합니다.

### Responses API를 사용하세요 (Chat Completions가 아님)

```typescript
// CORRECT — Responses API (works with gpt-5-nano)
const response = await client.responses.create({
  model: 'gpt-5-nano',
  instructions: 'You are a developer tool assistant...',
  input: 'Suggest 3-5 tags for this snippet...',
  text: {
    format: { type: 'json_object' },
  },
});
const text = response.output_text; // <-- this is where the content is

// WRONG — Chat Completions API (returns empty content with gpt-5-nano)
const completion = await client.chat.completions.create({
  model: 'gpt-5-nano',
  messages: [{ role: 'user', content: '...' }],
});
// completion.choices[0].message.content will be "" (empty string)
```

### Chat Completions와의 주요 차이점

| Chat Completions | Responses API |
|---|---|
| `client.chat.completions.create()` | `client.responses.create()` |
| `messages: [{ role, content }]` | `instructions` (system) + `input` (user) |
| `response_format: { type: 'json_object' }` | `text: { format: { type: 'json_object' } }` |
| `completion.choices[0].message.content` | `response.output_text` |
| `max_tokens` / `max_completion_tokens` | 불필요 (또는 `max_output_tokens` 사용) |

### 기타 주의사항

- `max_tokens`는 gpt-5-nano에서 지원되지 않습니다 — Chat Completions를 사용하는 경우 `max_completion_tokens`를 사용하세요 (단, Chat Completions를 사용하지 말고 Responses API를 사용하세요)
- `zodResponseFormat` 구조화 출력(structured output)은 이 모델에서 과도한 토큰을 소비하고 길이 제한(length limit)에 걸립니다 — 대신 `json_object` 형식을 사용하고 수동으로 파싱하세요
- 모델은 `{"tags": ["a", "b"]}` 또는 `["a", "b"]`를 반환할 수 있습니다 — 두 형식을 모두 처리하세요
- 태그를 받은 후에는 항상 소문자로 정규화(normalize)하세요

## 참고 (Notes)

- `OPENAI_API_KEY`는 이미 `.env`에 있습니다
- `isPro`는 세션(session)을 통해 서버 사이드에서 사용 가능하지만 생성/편집 UI 컴포넌트에는 전달되지 않습니다 — 강제(enforcement)를 위해 서버 사이드 게이팅을 사용하고, 버튼 가시성(visibility)을 위한 UI 게이팅은 `isPro`를 prop으로 전달하거나 클라이언트 사이드에서 가져와야 합니다
- 전체 아키텍처 컨텍스트는 `docs/ai-integration-plan.md`를 참고하세요
