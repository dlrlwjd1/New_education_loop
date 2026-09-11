# 코딩 표준(Coding Standards)

> 원문 [coding-standards.md](coding-standards.md)의 한국어 번역본입니다.

## TypeScript

- 엄격 모드(strict mode) 활성화
- `any` 타입 금지 - 적절한 타이핑(typing)이나 `unknown`을 사용한다
- 모든 props, API 응답(API response), 데이터 모델(data model)에 대해 인터페이스(interface)를 정의한다
- 명백한 경우 타입 추론(type inference)을 사용하고, 도움이 되는 경우 명시적 타입(explicit type)을 사용한다

## React

- 함수형 컴포넌트(functional component)만 사용(클래스 컴포넌트 금지)
- 상태(state)와 사이드 이펙트(side effect)에는 훅(hook)을 사용한다
- 컴포넌트는 집중적으로 유지한다 - 컴포넌트당 하나의 역할
- 재사용 가능한 로직은 커스텀 훅(custom hook)으로 추출한다

## Next.js

- 기본적으로 서버 컴포넌트(server component)를 사용한다
- 필요할 때만 `'use client'`를 사용한다(상호작용(interactivity), 훅, 브라우저 API)
- 폼 제출(form submission)과 간단한 변경(mutation)에는 서버 액션(Server Action)을 사용한다
- 다음이 필요할 때는 API 라우트(API route)를 사용한다:
  - 웹훅(Webhooks) (Stripe, GitHub 등)
  - 진행률 추적(progress tracking)이 있는 파일 업로드
  - 장시간 실행 작업(long-running operations)
  - 특정 HTTP 상태 코드(status code)나 헤더(header)
  - 향후 모바일/CLI 클라이언트용 엔드포인트(endpoint)
  - 서드파티 연동(third-party integrations)
- 그 외에는 서버 컴포넌트에서 데이터를 직접 가져온다(fetch)
- 아이템/컬렉션 페이지에는 동적 라우트(dynamic route)를 사용한다

## Tailwind CSS v4

**중요(CRITICAL)**: 우리는 CSS 기반 설정을 사용하는 Tailwind CSS v4를 쓰고 있다.

- `tailwind.config.ts`나 `tailwind.config.js` 파일을 **만들지 마라**(이것들은 v3용이다)
- 모든 테마(theme) 설정은 `src/app/globals.css`에서 `@theme` 디렉티브(directive)를 사용해 CSS로 해야 한다
- 색상, 간격(spacing) 등에는 CSS 커스텀 속성(CSS custom properties)을 사용한다
- JavaScript 기반 설정은 허용되지 않는다

v4 설정 예시:

```css
@import "tailwindcss";

@theme {
  --color-primary: oklch(50% 0.2 250);
}

## File Organization

- Components: `src/components/[feature]/ComponentName.tsx`
- Pages: `src/app/[route]/page.tsx`
- Server Actions: `src/actions/[feature].ts`
- Types: `src/types/[feature].ts`
- Lib/Utils: `src/lib/[utility].ts`

## Naming

- Components: PascalCase (`ItemCard.tsx`)
- Files: Match component name or kebab-case
- Functions: camelCase
- Constants: SCREAMING_SNAKE_CASE
- Types/Interfaces: PascalCase (no prefix)

## Styling

- Tailwind CSS for all styling
- Use shadcn/ui components where applicable
- No inline styles
- Dark mode first, light mode as option

## Database

- Use Prisma ORM for all database operations
- Always use `prisma migrate dev` for schema changes (not `db push`)
- Run `prisma migrate status` before committing to verify migrations are in sync
- Production deployments must run `prisma migrate deploy` before the app starts

## Data Fetching

- Server components fetch directly with Prisma
- Client components use Server Actions
- Validate all inputs with Zod

## Error Handling

- Use try/catch in Server Actions
- Return `{ success, data, error }` pattern from actions
- Display user-friendly error messages via toast

## Testing

- Vitest for unit tests (server actions and utilities only, not components)
- Test files live next to source files: `feature.test.ts`
- Run tests: `npm run test` (single run) or `npm run test:watch` (watch mode)
- Use `vi.mock()` for external dependencies (Prisma, Resend, etc.)
- Use `vi.useFakeTimers()` for time-dependent logic

## Code Quality

- No commented-out code unless specified
- No unused imports or variables
- Keep functions under 50 lines when possible
```
