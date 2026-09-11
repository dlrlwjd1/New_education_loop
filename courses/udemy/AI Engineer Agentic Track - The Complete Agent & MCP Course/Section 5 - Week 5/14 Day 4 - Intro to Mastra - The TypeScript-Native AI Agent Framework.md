# Day 4 - Intro to Mastra: The TypeScript-Native AI Agent Framework

## 개요
- TypeScript 중심 프레임워크 Mastra의 개발 경험과 도구 구성을 소개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821633#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### TypeScript 기반 구성
Mastra는 TypeScript를 중심으로 설계되었으며 모델 연동에 Vercel AI SDK를 활용한다. 도구 입력 구조는 Zod로 정의한다. Python에서 익힌 타입·스키마 역할과 비교해 이해한다.

### 실행과 개발 도구
agent.generate로 실행하고 MCP를 통해 외부 도구를 연결한다. Studio는 로컬에서 에이전트를 시험하고 관찰하는 환경이다. Python 예제보다 설정 파일과 연결 코드가 늘 수 있지만 기본 다섯 단계는 유지된다.

## 예시
```text
TypeScript Agent + Zod 도구 스키마 + MCP
→ generate → Studio에서 실행·관측
```

## 요약
- 언어가 달라도 모델·도구·루프 구조는 같다.
- Zod는 TypeScript 도구 입력의 구조를 명시한다.
