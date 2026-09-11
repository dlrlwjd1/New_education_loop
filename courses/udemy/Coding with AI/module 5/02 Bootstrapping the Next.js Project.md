# Bootstrapping the Next.js Project

## 개요
- DevStash 프로젝트를 실제 Next.js 앱으로 부트스트랩하는 단계.
- 핵심 메시지: **AI를 무조건 쓰지 말고**, 단순하고 예측 가능한 초기 설정은 직접 한다.
- Next.js 초기 생성은 CLI 한 줄이면 충분하므로, AI에게 맡겨 불필요한 의존성이나 다른 구조가 생기는 위험을 피한다.

## 내용

### 왜 직접 부트스트랩하는가
- Next.js 프로젝트 생성은 `create-next-app`으로 매우 간단하다.
- 직접 실행하면 어떤 옵션과 구조가 만들어지는지 **정확히 알 수 있음**.
- AI에게 "Next.js 프로젝트 만들어줘"라고 시키면:
  - 원하지 않는 의존성을 추가할 수 있음
  - 기대와 다른 설정을 만들 수 있음
  - 초기부터 프로젝트 구조가 흐려질 수 있음
- AI는 "그냥 쓰기 위해" 쓰는 것이 아니라, **시간을 아끼고 생산성을 높이는 특정 목적**에 맞게 써야 한다.

### Next.js 프로젝트 생성
Node.js가 설치되어 있어야 한다.

```bash
npx create-next-app@latest dev-stash --src-dir
```

강의에서 선택한 옵션:
- project/folder name: `dev-stash`
- TypeScript: yes
- ESLint: yes
- React Compiler: yes
- Tailwind CSS: yes
- App Router: yes
- import alias customization: no
- `src` 폴더 사용: yes

이렇게 하면 기본 dependencies/devDependencies와 Next.js 보일러플레이트가 생성된다.

### VS Code에서 열고 개발 서버 실행
생성된 `dev-stash` 폴더를 에디터에서 열고 개발 서버를 실행한다.

```bash
npm run dev
```

기본적으로 `localhost:3000`에서 Next.js 보일러플레이트 페이지를 확인할 수 있다.

### 보일러플레이트 정리
초기 생성된 페이지와 스타일은 프로젝트에 맞게 정리한다.

정리 대상:
- `src/app/page.tsx`
- `src/app/globals.css`
- `public` 폴더의 기본 SVG 파일들

Claude Code에 요청한 흐름:
- `src/app/page.tsx`를 참조해서 기본 페이지를 단순한 `h1`로 정리
- 처음 결과가 Tailwind class를 남기면 거절하고, **Tailwind class 없이 완전히 기본 상태**로 요청
- `src/app/globals.css`는 Tailwind import만 남기고 기본 스타일 제거
- `public` 폴더의 기본 SVG 파일 삭제

예시 프롬프트:

```text
I have a fresh install of Next.js. I want you to clean up the boilerplate page.
@src/app/page.tsx should simply show an H1 with the text dev stash.
```

추가 요청:

```text
Get rid of all the Tailwind classes.
```

```text
Remove the default styles from @src/app/globals.css, but keep the Tailwind import.
```

```text
Delete all the SVGs in the public folder.
```

### AI 변경사항 검토
- Claude Code가 변경 전후 diff를 보여준다.
- 빨간색은 제거될 코드, 초록색은 추가될 코드.
- 강사는 초반에는 자동 승인보다 **매번 확인 후 승인**을 권장한다.
- 도구가 어떤 명령을 실행했는지 확인할 수 있다.
  - 예: `public` 폴더의 SVG 검색
  - 예: `rm` 명령으로 파일 삭제

### 다음 단계
- 기본 Next.js 앱이 정리되면 바로 기능 개발로 들어가지 않는다.
- 먼저 프로젝트 컨텍스트를 정리한다.
- 다음 강의에서 `CLAUDE.md`와 project spec을 활용해 Claude Code가 항상 프로젝트 정보를 알도록 만든다.

## 예시

최종적으로 `src/app/page.tsx`는 아주 단순한 형태로 시작한다.

```tsx
export default function Home() {
  return <h1>dev stash</h1>;
}
```

`globals.css`는 Tailwind import만 남기는 방향으로 정리한다.

```css
@import "tailwindcss";
```

## 요약
- Next.js 초기 부트스트랩은 AI에게 맡기지 말고 `create-next-app`으로 직접 한다.
- 단순하고 예측 가능한 작업은 직접 실행하는 편이 더 안전하다.
- AI는 보일러플레이트 정리처럼 범위가 작고 검토 가능한 작업부터 사용한다.
- 변경사항 diff를 확인하고 승인하는 습관을 유지한다.
- 기능 개발 전, 다음 단계로 프로젝트 컨텍스트 파일을 구성한다.
