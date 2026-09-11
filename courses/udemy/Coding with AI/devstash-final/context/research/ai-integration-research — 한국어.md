# AI Integration Research

> 원문 [ai-integration-research.md](ai-integration-research.md)의 한국어 번역본입니다.

## Output

docs/ai-integration-plan.md

## Research

Next.js 애플리케이션에 OpenAI "gpt-5-nano" 모델을 통합하여 다음 기능들을 구현하기 위한 모범 사례(best practice)를 조사합니다.

- 콘텐츠 자동 태깅(auto-tagging)
- AI 생성 요약(summaries)
- 코드 설명(code explanation)
- 프롬프트 최적화(prompt optimization)

## Include

- OpenAI SDK 설정 및 구성(configuration)
- AI 호출을 위한 서버 액션(server action) 패턴
- 스트리밍(streaming) 응답 대 비스트리밍(non-streaming) 응답
- 에러 처리(error handling) 및 속도 제한(rate limiting)
- Pro 사용자 게이팅(gating) 패턴
- 비용 최적화(cost optimization) 전략
- AI 기능을 위한 UI 패턴 (로딩 상태(loading state), 제안 수락/거절(accept/reject suggestions))
- 보안 고려사항 (API 키 처리(API key handling), 입력값 검증/정화(input sanitization))

## Sources

- OpenAI + Next.js 패턴에 대한 웹 검색
- OpenAI SDK에 대한 Context7 문서
- 기존 코드베이스 패턴 (서버 액션, Pro 게이팅)
- @src/actions/\*.ts for action patterns
- @src/lib/usage-limits.ts for gating patterns
