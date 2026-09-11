# Define the Real User Problems (Before You Build)

## 개요
- 캡스톤으로 규정 준수(compliance) 추적 앱의 문제와 첫 제품 범위를 정한다.
- 원본 강의: https://www.udemy.com/course/ai-product-manager-bootcamp/learn/lecture/53244019

## 내용
### 전체 구축 흐름
- ChatGPT로 문제와 요구 사항을 정리하고 Lovable에서 초기 화면을 만든다.
- 결과를 GitHub로 옮겨 Supabase 백엔드, Vercel 배포, Claude Code 개선으로 이어간다.

### 문제와 고객
- 이상적 고객 프로필(ICP)은 본업에 바빠 세금 일정, LLC 회의록과 정부 규정을 놓치기 쉬운 프리랜서·소기업 운영자다.
- 첫 범위는 콜로라도로 좁히고, LLC의 월간 회의록 작성을 돕는 `Minute Mate` 아이디어로 더 세분화한다.
- 상위 사용자 스토리, 핵심 기능, 제품 비전, 홈페이지, 인증 흐름을 정리한다.

### 현실의 입력
- 강의의 빠른 AI 초안과 달리 실제 업무에서는 사용자 조사 결과가 문제 정의와 요구 사항의 근거가 되어야 한다.

## 예시
```text
콜로라도 프리랜서와 소기업이 LLC 규정을 놓치지 않도록 돕는 제품의
상위 사용자 스토리 3개와 MVP 기능을 정리해줘.
```

## 요약
- 구현 전에 고객·지역·규정·핵심 작업을 좁힌다.
- 도구 간 이동을 고려해 Lovable에 넣을 프롬프트에도 Supabase·Vercel·Claude Code 제약을 명시한다.
