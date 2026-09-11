# AI Integration Plan

> 원문 [ai-integration-plan.md](ai-integration-plan.md)의 한국어 번역본입니다.

> OpenAI GPT-5 Nano를 DevStash에 통합하기 위한 리서치 결과

---

## 목차

- [Model Selection](#model-selection)
- [SDK Setup & Configuration](#sdk-setup--configuration)
- [AI Features Breakdown](#ai-features-breakdown)
- [Server Action Patterns](#server-action-patterns)
- [Streaming vs Non-Streaming](#streaming-vs-non-streaming)
- [Error Handling & Rate Limiting](#error-handling--rate-limiting)
- [Pro User Gating](#pro-user-gating)
- [Cost Optimization](#cost-optimization)
- [UI Patterns](#ui-patterns)
- [Security Considerations](#security-considerations)
- [Implementation Roadmap](#implementation-roadmap)

---

## Model Selection

### GPT-5 Nano

| 속성 | 값 |
|---|---|
| **Model ID** | `gpt-5-nano` |
| **입력 비용(Input Cost)** | $0.05 / 1M tokens |
| **출력 비용(Output Cost)** | $0.40 / 1M tokens |
| **강점** | 초저지연(ultra-low latency), 비용 효율적, 분류(classification)/요약(summarization)에 적합 |
| **지원 기능** | 구조화된 출력(structured outputs), 함수 호출(function calling), 스트리밍(streaming) |
| **컨텍스트 윈도우(Context Window)** | 코드 스니펫(code snippet)과 짧은 콘텐츠에 적합 |

GPT-5 Nano가 DevStash의 AI 기능에 이상적인 이유는 다음과 같습니다.
- **자동 태깅(Auto-tagging)** = 분류(classification) 작업 (nano가 가장 잘하는 영역)
- **요약(Summaries)** = 요약(summarization) 작업 (nano가 가장 잘하는 영역)
- **코드 설명(Code explanation)** = 중간 수준의 추론(moderate reasoning) (짧은 스니펫이라면 nano가 잘 처리함)
- **프롬프트 최적화(Prompt optimization)** = 재작성(rewriting) 작업 (nano가 잘 처리함)

### 비용 추정

평균 항목(item) 콘텐츠가 입력 약 500 토큰, 출력 약 200 토큰이라고 가정합니다.

| 기능 | 예상 입력 토큰 | 예상 출력 토큰 | 호출당 비용 |
|---|---|---|---|
| Auto-tag | ~600 | ~50 | ~$0.00005 |
| Summary | ~600 | ~150 | ~$0.00009 |
| Code Explanation | ~800 | ~300 | ~$0.00016 |
| Prompt Optimizer | ~500 | ~400 | ~$0.00019 |

이 요금 수준이라면 월 10,000회의 AI 호출도 약 $1.50에 불과합니다. 매우 지속 가능한 수준입니다.

---

## SDK Setup & Configuration

### 권장: Vercel AI SDK + OpenAI Provider

원시(raw) OpenAI SDK 대신 **Vercel AI SDK**(v5+)와 `@ai-sdk/openai` 프로바이더(provider)를 사용하세요. 장점은 다음과 같습니다.

- 서버 액션(server action)을 통한 네이티브 Next.js 통합
- 내장 스트리밍 지원(`streamText`, `streamObject`)
- Zod 스키마를 활용한 구조화된 출력(`generateObject`)
- 프로바이더 비종속적(provider-agnostic) (나중에 모델 교체가 쉬움)
- 클라이언트 사이드 스트리밍을 위한 React 훅(`useChat`, `useCompletion`)

### 설치

```bash
npm install ai @ai-sdk/openai
```

### 환경 변수

```env
# .env.local
OPENAI_API_KEY=sk-...
```

`@ai-sdk/openai` 프로바이더는 `OPENAI_API_KEY`를 자동으로 읽습니다.

### 프로바이더 설정

```typescript
// src/lib/ai.ts

import { openai } from '@ai-sdk/openai';

// Model constants
export const AI_MODEL = openai('gpt-5-nano');

// Shared system prompts
export const SYSTEM_PROMPTS = {
  autoTag: `You are a developer tool assistant. Given a code snippet, command, prompt, note, or link, suggest relevant tags for categorization. Return only lowercase, hyphenated tags relevant to developers (e.g., "react-hooks", "git", "python", "api-design").`,

  summarize: `You are a developer tool assistant. Summarize the given content concisely in 1-2 sentences. Focus on what the content does or is about from a developer's perspective.`,

  explainCode: `You are a senior developer and educator. Explain the given code clearly and concisely. Cover what it does, key concepts used, and any important details. Use plain language suitable for intermediate developers.`,

  optimizePrompt: `You are an AI prompt engineering expert. Optimize the given prompt to be more effective. Improve clarity, add specificity, and structure it for better AI responses. Return only the optimized prompt text.`,
} as const;
```

---

## AI Features Breakdown

### 1. 자동 태그 제안(Auto-Tag Suggestions)

**목적:** 항목을 생성/편집할 때 관련 태그를 제안합니다.

**접근 방식:** 구조화된 태그 배열을 얻기 위해 Zod 스키마와 함께 `generateObject`를 사용합니다.

```typescript
// src/actions/ai.ts
'use server';

import { generateObject } from 'ai';
import { z } from 'zod';
import { AI_MODEL, SYSTEM_PROMPTS } from '@/lib/ai';
import { auth } from '@/auth';

const autoTagSchema = z.object({
  tags: z.array(z.string()).min(1).max(8).describe('Relevant developer tags'),
});

export async function suggestTags(input: {
  title: string;
  content: string;
  typeName: string;
}): Promise<{ success: boolean; data?: string[]; error?: string }> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: 'Unauthorized' };
  }

  const isPro = session.user.isPro ?? false;
  if (!isPro) {
    return { success: false, error: 'AI features require a Pro subscription' };
  }

  try {
    const { object } = await generateObject({
      model: AI_MODEL,
      system: SYSTEM_PROMPTS.autoTag,
      prompt: `Type: ${input.typeName}\nTitle: ${input.title}\nContent: ${input.content}`,
      schema: autoTagSchema,
      maxTokens: 100,
    });

    return { success: true, data: object.tags };
  } catch (error) {
    console.error('AI auto-tag error:', error);
    return { success: false, error: 'Failed to generate tag suggestions' };
  }
}
```

### 2. AI 요약(AI Summary)

**목적:** 항목에 대한 간결한 요약/설명을 생성합니다.

**접근 방식:** 단순 텍스트 출력을 위해 `generateText`를 사용합니다.

```typescript
import { generateText } from 'ai';

export async function generateSummary(input: {
  title: string;
  content: string;
  typeName: string;
}): Promise<{ success: boolean; data?: string; error?: string }> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: 'Unauthorized' };
  }

  const isPro = session.user.isPro ?? false;
  if (!isPro) {
    return { success: false, error: 'AI features require a Pro subscription' };
  }

  try {
    const { text } = await generateText({
      model: AI_MODEL,
      system: SYSTEM_PROMPTS.summarize,
      prompt: `Title: ${input.title}\nContent: ${input.content}`,
      maxTokens: 150,
    });

    return { success: true, data: text };
  } catch (error) {
    console.error('AI summary error:', error);
    return { success: false, error: 'Failed to generate summary' };
  }
}
```

### 3. 코드 설명 (스트리밍)(Code Explanation (Streaming))

**목적:** 코드 스니펫을 상세히 설명합니다. 설명이 길어질 수 있으므로 더 나은 UX를 위해 스트리밍을 사용합니다.

**접근 방식:** 실시간 스트리밍을 위해 API 라우트(API route)에서 `streamText`를 사용합니다.

```typescript
// src/app/api/ai/explain/route.ts

import { streamText } from 'ai';
import { AI_MODEL, SYSTEM_PROMPTS } from '@/lib/ai';
import { auth } from '@/auth';

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Pro check from DB for API routes
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { isPro: true },
  });
  if (!user?.isPro) {
    return new Response('Pro subscription required', { status: 403 });
  }

  const { content, language } = await request.json();

  const result = streamText({
    model: AI_MODEL,
    system: SYSTEM_PROMPTS.explainCode,
    prompt: `Language: ${language || 'unknown'}\n\nCode:\n\`\`\`\n${content}\n\`\`\``,
    maxTokens: 500,
  });

  return result.toDataStreamResponse();
}
```

### 4. 프롬프트 최적화(Prompt Optimizer)

**목적:** AI 프롬프트를 개선/최적화합니다.

**접근 방식:** `generateText`를 사용합니다 (출력이 입력을 대체하므로 비스트리밍 방식).

```typescript
export async function optimizePrompt(input: {
  content: string;
}): Promise<{ success: boolean; data?: string; error?: string }> {
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: 'Unauthorized' };
  }

  const isPro = session.user.isPro ?? false;
  if (!isPro) {
    return { success: false, error: 'AI features require a Pro subscription' };
  }

  try {
    const { text } = await generateText({
      model: AI_MODEL,
      system: SYSTEM_PROMPTS.optimizePrompt,
      prompt: input.content,
      maxTokens: 400,
    });

    return { success: true, data: text };
  } catch (error) {
    console.error('AI prompt optimizer error:', error);
    return { success: false, error: 'Failed to optimize prompt' };
  }
}
```

---

## Server Action Patterns

### 서버 액션 vs API 라우트를 언제 사용할까

| 패턴 | 사용 사례 | AI 기능 |
|---|---|---|
| **서버 액션(Server Action)** (`generateText`, `generateObject`) | 비스트리밍, 구조화된 데이터 | Auto-tag, Summary, Prompt Optimizer |
| **API 라우트(API Route)** (`streamText`) | 스트리밍 응답 | Code Explanation |

### 서버 액션 패턴 (기존 코드베이스와 일치)

모든 AI 서버 액션은 확립된 DevStash 패턴을 따라야 합니다.

```typescript
'use server';

import { auth } from '@/auth';
import { generateObject } from 'ai';
import { z } from 'zod';
import { AI_MODEL } from '@/lib/ai';

// 1. Define input schema
const inputSchema = z.object({
  content: z.string().min(1).max(10000),
  typeName: z.string(),
});

// 2. Define return type
interface AIActionResult<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// 3. Implement action
export async function aiFeature(input: unknown): Promise<AIActionResult<string[]>> {
  // 3a. Auth check
  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, error: 'Unauthorized' };
  }

  // 3b. Pro gating
  const isPro = session.user.isPro ?? false;
  if (!isPro) {
    return { success: false, error: 'AI features require a Pro subscription' };
  }

  // 3c. Input validation
  const parsed = inputSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: 'Invalid input' };
  }

  // 3d. AI call with try/catch
  try {
    const result = await generateObject({ ... });
    return { success: true, data: result.object };
  } catch (error) {
    console.error('AI feature error:', error);
    return { success: false, error: 'AI generation failed. Please try again.' };
  }
}
```

---

## Streaming vs Non-Streaming

### 결정 매트릭스

| 기능 | 스트리밍 여부 | 이유 |
|---|---|---|
| Auto-tag | 아니오 | 짧은 응답(~50 토큰), 구조화된 데이터 필요 |
| Summary | 아니오 | 짧은 응답(~150 토큰), 단일 필드를 채움 |
| Code Explanation | **예** | 더 긴 응답(~300-500 토큰), 더 나은 UX |
| Prompt Optimizer | 아니오 | 콘텐츠를 원자적으로(atomically) 대체, 사용자가 전체 결과를 수락/거부 |

### 스트리밍 구현 (Code Explanation)

**서버 (API 라우트):**
```typescript
// Uses streamText + toDataStreamResponse()
const result = streamText({ model: AI_MODEL, ... });
return result.toDataStreamResponse();
```

**클라이언트 (React 훅):**
```typescript
'use client';

import { useCompletion } from '@ai-sdk/react';

function CodeExplanation({ content, language }: Props) {
  const { completion, isLoading, complete, stop } = useCompletion({
    api: '/api/ai/explain',
  });

  const handleExplain = () => {
    complete('', { body: { content, language } });
  };

  return (
    <div>
      <button onClick={handleExplain} disabled={isLoading}>
        {isLoading ? 'Explaining...' : 'Explain This Code'}
      </button>
      {isLoading && <button onClick={stop}>Stop</button>}
      {completion && <div className="prose dark:prose-invert">{completion}</div>}
    </div>
  );
}
```

### 비스트리밍 구현 (Auto-tag, Summary, Prompt Optimizer)

**클라이언트 (직접 서버 액션 호출):**
```typescript
const [isLoading, setIsLoading] = useState(false);

const handleSuggestTags = async () => {
  setIsLoading(true);
  const result = await suggestTags({ title, content, typeName });
  if (result.success && result.data) {
    setTags(result.data);
    toast.success('Tags suggested!');
  } else {
    toast.error(result.error || 'Failed to suggest tags');
  }
  setIsLoading(false);
};
```

---

## Error Handling & Rate Limiting

### 오류 처리 전략

```typescript
try {
  const result = await generateText({ ... });
  return { success: true, data: result.text };
} catch (error) {
  // Log detailed error server-side
  console.error('AI error:', error);

  // Return user-friendly message
  if (error instanceof Error) {
    if (error.message.includes('rate_limit')) {
      return { success: false, error: 'AI rate limit reached. Please wait a moment.' };
    }
    if (error.message.includes('context_length')) {
      return { success: false, error: 'Content is too long for AI processing. Try with shorter content.' };
    }
  }

  return { success: false, error: 'AI generation failed. Please try again.' };
}
```

### AI 요청 속도 제한(Rate Limiting)

기존 Upstash 설정에 새로운 속도 제한(rate limit) 구성을 추가합니다.

```typescript
// In src/lib/rate-limit.ts, add:
ai: {
  limiter: Ratelimit.slidingWindow(20, '1 h'),  // 20 AI calls per hour
  prefix: 'ratelimit:ai',
},
```

액션에서의 사용법:
```typescript
const rateLimit = await checkRateLimit('ai', session.user.id);
if (!rateLimit.success) {
  return { success: false, error: `AI rate limit reached. Try again in ${formatRetryTime(rateLimit.retryAfter)}.` };
}
```

---

## Pro User Gating

### 패턴 (기존 코드베이스와 일치)

모든 AI 기능은 Pro 전용입니다. 이미 확립된 동일한 게이팅(gating) 패턴을 사용하세요.

**서버 액션에서:**
```typescript
const isPro = session.user.isPro ?? false;
if (!isPro) {
  return { success: false, error: 'AI features require a Pro subscription' };
}
```

**API 라우트에서:**
```typescript
const user = await prisma.user.findUnique({
  where: { id: session.user.id },
  select: { isPro: true },
});
if (!user?.isPro) {
  return new Response(JSON.stringify({ error: 'Pro subscription required' }), { status: 403 });
}
```

**UI에서 (AI 버튼 표시/숨김):**
```typescript
// Get isPro from session
const session = await auth();
const isPro = session?.user?.isPro ?? false;

// Conditionally render AI buttons
{isPro && <Button onClick={handleSuggestTags}>Suggest Tags</Button>}

// Or show upgrade prompt
{!isPro && (
  <Tooltip content="Upgrade to Pro for AI features">
    <Button disabled>Suggest Tags (Pro)</Button>
  </Tooltip>
)}
```

---

## Cost Optimization

### 1. 토큰 사용량 제한

비용 폭주를 방지하기 위해 모든 호출에 `maxTokens`를 설정하세요.

```typescript
generateObject({ model: AI_MODEL, maxTokens: 100, ... }); // Auto-tag
generateText({ model: AI_MODEL, maxTokens: 150, ... });    // Summary
streamText({ model: AI_MODEL, maxTokens: 500, ... });      // Explanation
generateText({ model: AI_MODEL, maxTokens: 400, ... });    // Optimizer
```

### 2. 긴 입력 잘라내기(Truncate)

API로 보내기 전에 입력 콘텐츠 길이를 제한하세요.

```typescript
function truncateContent(content: string, maxChars: number = 4000): string {
  if (content.length <= maxChars) return content;
  return content.slice(0, maxChars) + '\n... (truncated)';
}
```

### 3. 속도 제한 (사용자별)

사용자당 시간당 20회의 AI 호출은 일반적인 사용에는 넉넉하면서도 남용을 방지합니다.

### 4. 클라이언트 사이드 디바운스(Debounce)

키 입력마다 AI 호출을 발생시키지 마세요. 명시적인 버튼 트리거나 디바운스를 사용하세요.

```typescript
// Good: Explicit button trigger
<Button onClick={handleSuggestTags}>Suggest Tags</Button>

// Bad: Auto-trigger on content change
useEffect(() => { suggestTags(content); }, [content]); // DON'T do this
```

### 5. 결과 캐싱 (선택 사항, 향후)

반복되는 콘텐츠(동일한 항목)의 경우 AI 결과를 캐싱하세요. 비용이 늘어나면 나중에 추가할 수 있습니다.

```typescript
// Future: Store AI results in item metadata
// Check if tags were already suggested for this content hash
```

### 예상 월간 비용

| 시나리오 | 월간 AI 호출 수 | 예상 비용 |
|---|---|---|
| 가벼운 사용 (Pro 사용자 10명) | ~1,000 | ~$0.15 |
| 보통 (Pro 사용자 100명) | ~10,000 | ~$1.50 |
| 많은 사용 (Pro 사용자 1,000명) | ~100,000 | ~$15.00 |

---

## UI Patterns

### 1. 로딩 상태(Loading States)

```typescript
// Button with spinner
<Button onClick={handleAI} disabled={isLoading}>
  {isLoading ? (
    <>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Generating...
    </>
  ) : (
    <>
      <Sparkles className="mr-2 h-4 w-4" />
      Suggest Tags
    </>
  )}
</Button>
```

### 2. 태그 수락/거부(Accept/Reject)

```typescript
// Show suggested tags with accept/reject
{suggestedTags && (
  <div className="flex flex-wrap gap-1">
    {suggestedTags.map(tag => (
      <Badge
        key={tag}
        variant="outline"
        className="cursor-pointer hover:bg-accent"
        onClick={() => addTag(tag)}
      >
        + {tag}
      </Badge>
    ))}
  </div>
)}
```

### 3. 생성된 텍스트 수락/거부

```typescript
// Summary or Optimizer result
{generatedText && (
  <div className="border rounded-md p-3 space-y-2">
    <p className="text-sm text-muted-foreground">{generatedText}</p>
    <div className="flex gap-2">
      <Button size="sm" onClick={() => acceptResult(generatedText)}>
        Accept
      </Button>
      <Button size="sm" variant="ghost" onClick={() => setGeneratedText(null)}>
        Dismiss
      </Button>
    </div>
  </div>
)}
```

### 4. 스트리밍 표시 (Code Explanation)

```typescript
// Render markdown as it streams in
{completion && (
  <div className="prose prose-sm dark:prose-invert max-w-none">
    <ReactMarkdown>{completion}</ReactMarkdown>
  </div>
)}
```

### 5. AI 기능 배치

| 기능 | 위치 | 트리거 |
|---|---|---|
| Auto-tag | NewItemDialog, ItemDrawer 편집 모드 | 태그 입력란 근처의 "Suggest Tags" 버튼 |
| Summary | NewItemDialog, ItemDrawer 편집 모드 | 설명 필드 근처의 "Generate Summary" 버튼 |
| Code Explanation | ItemDrawer (보기 모드, 스니펫/커맨드) | 액션 바의 "Explain This Code" 버튼 |
| Prompt Optimizer | ItemDrawer (편집 모드, 프롬프트) | 콘텐츠 편집기 근처의 "Optimize Prompt" 버튼 |

---

## Security Considerations

### 1. API 키 보호

- `OPENAI_API_KEY`는 `.env.local`에만 저장 (이미 .gitignore에 포함됨)
- 클라이언트에 절대 노출하지 않음 - 모든 AI 호출은 서버 액션 또는 API 라우트를 통함
- Vercel AI SDK는 서버 액션 사용 시 이를 올바르게 처리함

### 2. 입력 정제(Input Sanitization)

```typescript
// Truncate to prevent excessive token usage
const sanitizedContent = input.content.slice(0, 10000);

// Validate with Zod schema
const inputSchema = z.object({
  content: z.string().min(1).max(10000),
  title: z.string().min(1).max(200),
  typeName: z.enum(['snippet', 'prompt', 'command', 'note', 'link']),
});
```

### 3. 프롬프트 인젝션 방지(Prompt Injection Prevention)

- 지시(instruction)에는 `system` 메시지를, 사용자 콘텐츠에는 `prompt`를 사용
- 가능한 경우 구조화된 출력(`generateObject`와 Zod)을 사용 - 이는 출력을 고정된 스키마로 제한하고 자유 형식(freeform) 채널을 제거함
- 명확한 구분자(delimiter)로 시스템 지시와 사용자 콘텐츠를 분리
- 사용자 콘텐츠를 시스템 메시지에 절대 포함하지 않음

```typescript
// Good: Clear separation
generateObject({
  model: AI_MODEL,
  system: SYSTEM_PROMPTS.autoTag,  // Fixed system instruction
  prompt: `Type: ${typeName}\nTitle: ${title}\nContent: ${content}`,  // User content in prompt only
  schema: autoTagSchema,  // Output constrained by schema
});
```

### 4. 속도 제한(Rate Limiting)

- 인증된 사용자당 시간당 20회의 AI 호출 (기존 Upstash 설정 활용)
- 남용을 방지하고 비용을 통제함
- 사용자 친화적인 retry-after 메시지를 반환함

### 5. 콘텐츠 소유권(Content Ownership)

- 모든 AI 호출은 사용자 인증을 검증함
- 항목은 요청한 사용자의 소유여야 함 (기존 소유권 확인 패턴)
- AI 응답은 별도로 저장되지 않음 - 사용자가 명시적으로 수락한 항목 필드를 업데이트할 뿐임

---

## Implementation Roadmap

### Phase 1: 기반 구축(Foundation)

1. `ai`와 `@ai-sdk/openai` 패키지 설치
2. 모델 설정과 시스템 프롬프트가 담긴 `src/lib/ai.ts` 생성
3. `.env.example`에 `OPENAI_API_KEY` 추가
4. `src/lib/rate-limit.ts`에 `ai` 속도 제한 구성 추가

### Phase 2: Auto-Tag

1. `src/actions/ai.ts`에 `suggestTags` 서버 액션 생성
2. NewItemDialog에 "Suggest Tags" 버튼 추가 (태그 입력란 근처)
3. ItemDrawer 편집 모드에 "Suggest Tags" 버튼 추가
4. 제안된 태그를 클릭 가능한 배지(badge)로 표시
5. 서버 액션에 대한 단위 테스트(unit test) 작성

### Phase 3: AI Summary

1. `generateSummary` 서버 액션 생성
2. NewItemDialog의 설명 필드 근처에 "Generate Summary" 버튼 추가
3. ItemDrawer 편집 모드에 "Generate Summary" 버튼 추가
4. 생성된 요약에 대한 수락/취소(accept/dismiss) UI 표시
5. 단위 테스트 작성

### Phase 4: Code Explanation (스트리밍)

1. `streamText`를 사용하는 `/api/ai/explain` API 라우트 생성
2. `useCompletion`을 사용하는 `CodeExplanation` 클라이언트 컴포넌트 생성
3. 스니펫/커맨드용 ItemDrawer에 "Explain This Code" 버튼 추가
4. `react-markdown`으로 스트리밍된 마크다운 렌더링
5. API 라우트에 대한 단위 테스트 작성

### Phase 5: Prompt Optimizer

1. `optimizePrompt` 서버 액션 생성
2. 프롬프트용 ItemDrawer 편집 모드에 "Optimize Prompt" 버튼 추가
3. 원본 대 최적화본을 수락/취소와 함께 표시
4. 단위 테스트 작성

### Phase 6: 마무리(Polish)

1. 무료 사용자용 AI 버튼에 Pro 배지 추가
2. 모든 AI 버튼이 무료 등급(free tier)에서 비활성화/숨김 처리되도록 보장
3. 모든 AI 액션에 토스트 알림(toast notification) 추가
4. 엣지 케이스(edge case) 테스트 (빈 콘텐츠, 매우 긴 콘텐츠, 속도 제한)
5. 전체 테스트 스위트 실행 및 빌드

---

## File Structure

```
src/
├── lib/
│   └── ai.ts                    # Model config, system prompts, helpers
├── actions/
│   └── ai.ts                    # Server actions: suggestTags, generateSummary, optimizePrompt
├── app/
│   └── api/
│       └── ai/
│           └── explain/
│               └── route.ts     # Streaming code explanation endpoint
├── components/
│   └── ai/
│       ├── SuggestTagsButton.tsx # Auto-tag trigger + results display
│       ├── GenerateSummaryButton.tsx
│       ├── CodeExplanation.tsx   # Streaming explanation panel
│       └── OptimizePromptButton.tsx
```

---

## Dependencies to Add

```json
{
  "ai": "^5.x",
  "@ai-sdk/openai": "^1.x",
  "@ai-sdk/react": "^1.x"
}
```

추가 의존성은 필요 없습니다 - 프로젝트에는 이미 `react-markdown`, `zod`, `sonner`(토스트), `lucide-react`(아이콘)가 있습니다.

---

## Sources

- [GPT-5 Nano Model - OpenAI API](https://developers.openai.com/api/docs/models/gpt-5-nano)
- [GPT-5 Integration in Next.js SaaS - Vladimir Siedykh](https://vladimirsiedykh.com/blog/gpt-5-integration-nextjs-saas-features)
- [Vercel AI SDK Documentation](https://ai-sdk.dev)
- [AI SDK Cookbook - Generate Object](https://ai-sdk.dev/cookbook/rsc/generate-object)
- [AI SDK - Streaming Object Generation](https://ai-sdk.dev/examples/next-app/basics/streaming-object-generation)
- [OpenAI Node SDK](https://github.com/openai/openai-node)
- [OpenAI Safety Best Practices](https://platform.openai.com/docs/guides/safety-best-practices)
- [OWASP LLM Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)
- [OpenAI SDK vs Vercel AI SDK Comparison 2026](https://strapi.io/blog/openai-sdk-vs-vercel-ai-sdk-comparison)
- [GPT-5 Nano Pricing - OpenRouter](https://openrouter.ai/openai/gpt-5-nano)

---

_생성일: 2026년 2월_
