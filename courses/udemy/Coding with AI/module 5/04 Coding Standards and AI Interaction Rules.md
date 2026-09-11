# Coding Standards and AI Interaction Rules

## 개요
- 기능 개발 전에 `context/` 폴더에 **코딩 표준**과 **AI 상호작용 규칙**을 추가하는 강의.
- AI와 코딩할 때는 문서, 규칙, 컨텍스트를 먼저 구성해야 코드베이스가 일관성을 유지한다.
- 강사는 `coding-standards.md`와 `ai-interaction.md`를 추가하고, 이 파일들은 다른 Next.js 프로젝트에서도 재사용할 수 있다고 설명한다.

## 내용

### 왜 규칙 파일이 필요한가
- AI에게 규칙을 주지 않으면 도구가 자기 방식대로 코드를 작성한다.
- 그 결과:
  - 파일 구조가 들쑥날쑥해짐
  - 서버 컴포넌트/클라이언트 컴포넌트 사용 기준이 흐려짐
  - API route와 server action이 일관성 없이 섞임
  - 불필요한 기능이나 리팩터가 추가될 수 있음
- 그래서 기능을 만들기 전에 **문서와 규칙으로 작업 환경을 고정**해야 한다.

### 참고할 수 있는 규칙 템플릿
강사는 `cursor.directory` 같은 사이트를 예로 든다.

- Cursor 전용처럼 보이지만 Claude, Codex 등 다른 AI 도구에도 응용 가능
- 기술별 규칙 파일이 많음
- Chrome extension, React Native, PHP, C# 등 다양한 스택 기준을 참고할 수 있음
- 프로젝트마다 반복해서 쓰는 개인 규칙을 만들어 재사용할 수 있음

이번 프로젝트에서 추가하는 파일:
- `context/coding-standards.md`
- `context/ai-interaction.md`

### coding-standards.md 핵심
`coding-standards.md`는 기술 스택에 특화된 코드 작성 규칙이다.

#### TypeScript
- strict mode 사용
- `any` 타입 금지
- props, API responses, data models에는 interface 사용
- 명확한 곳은 타입 추론을 활용하고, 도움이 되는 곳은 명시 타입 작성

#### React
- functional components 사용
- state와 side effect는 hooks 사용
- 컴포넌트는 한 가지 책임에 집중
- 반복되는 로직은 custom hook으로 추출

#### Next.js
- 기본은 server components
- interactivity, hooks, browser APIs가 필요할 때만 `"use client"` 사용
- form submission과 단순 mutation에는 server actions 사용
- webhook, file upload progress, long-running operation, third-party integration 등에는 API routes 사용
- items와 collections에는 dynamic routes 사용

예:
- Stripe webhook은 API route가 적합
- 일반 폼 제출은 server action이 적합

### 파일 구조와 네이밍
강의의 규칙 파일은 다음 항목도 포함한다.

- components 위치
- pages/routes 위치
- server actions 위치
- types 위치
- utilities 위치
- component는 PascalCase 사용
- 프로젝트 전체에서 같은 네이밍 규칙 유지

강사는 개인 취향에 따라 dash-case component naming 등을 쓸 수도 있지만, 코스에서는 같은 결과를 얻기 위해 제공된 기준을 유지하라고 권장한다.

### 스타일링 규칙
- Tailwind CSS 사용
- shadcn/ui components 사용
- inline styles 사용하지 않음
- dark mode first
- 기존 디자인 패턴 유지

### 데이터베이스 규칙
- Prisma로 모든 DB 작업 수행
- `prisma db push` 대신 `prisma migrate dev` 사용
- 이유:
  - 개발 DB 변경을 migration으로 남겨야 함
  - 배포 시 production DB도 같은 migration을 적용해 동기화할 수 있음

### 데이터 패칭과 검증
- server components에서는 Prisma를 직접 사용
- client components에서는 server actions 사용
- Zod로 입력값 검증
- error handling 규칙 유지
- commented-out code와 unused imports 제거

### ai-interaction.md 핵심
`ai-interaction.md`는 AI와 어떻게 소통하고 작업할지에 대한 규칙이다.

주요 규칙:
- 간결하고 직접적으로 답하기
- 명확하지 않은 결정은 짧게 설명하기
- 큰 리팩터나 아키텍처 변경 전에는 먼저 묻기
- project spec에 없는 기능을 추가하지 않기
- 파일 삭제 전에는 확인하기
- 기존 패턴을 유지하기
- 작업 범위에 필요한 최소 변경만 하기
- 관련 없는 코드를 리팩터하지 않기
- "있으면 좋을" 기능을 임의로 추가하지 않기

### 기능 개발 워크플로
앞으로 코스에서 반복할 엄격한 기능 개발 흐름:

1. current feature 문서에 기능을 기록
2. feature branch 생성
3. 기능 구현
4. 수동 테스트
5. 필요하면 unit test 추가
6. 반복 수정
7. build 통과 확인
8. 사용자 허락 후 commit
9. main에 merge
10. feature branch 삭제
11. current feature 완료 처리 및 history 기록

강조 규칙:
- 허락 없이 commit하지 않음
- build가 통과하기 전 commit하지 않음
- commit message에 `generated with Claude` 같은 문구를 넣지 않음
- commit prefix는 `feat`, `fix`, `chore` 같은 형태 사용

### 막혔을 때의 규칙
- 같은 문제가 2~3번 시도해도 해결되지 않으면 멈추고 설명한다.
- 억지로 계속 시도해 코드베이스를 망가뜨리지 않는다.
- 문제, 시도한 접근, 다음 선택지를 명확히 정리한다.

### AI 코드 리뷰
AI가 생성한 코드는 주기적으로 검토해야 한다.

검토 관점:
- security
- performance
- logic errors
- consistency with project patterns
- 불필요한 코드나 기능 추가 여부

## 예시

Server component를 기본으로 두고, 상호작용이 필요할 때만 client component로 전환한다.

```tsx
"use client";

import { useState } from "react";

export function ExampleButton() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

폼 제출이나 단순 mutation은 server action으로 처리하는 흐름을 기본값으로 둔다.

```ts
"use server";

export async function createItem(formData: FormData) {
  // Validate input with Zod, then write through Prisma.
}
```

## 요약
- AI 코딩에서는 기능 개발보다 먼저 **규칙과 컨텍스트**를 만들어야 한다.
- `coding-standards.md`는 TypeScript, React, Next.js, Prisma, Tailwind 등 기술별 기준을 고정한다.
- `ai-interaction.md`는 AI가 어떻게 답하고, 변경하고, 멈추고, 검토해야 하는지 정한다.
- 기능은 current feature 문서와 branch 기반의 엄격한 워크플로로 진행한다.
- 허락 없이 commit하지 않고, build 통과 전에는 commit하지 않는다.
