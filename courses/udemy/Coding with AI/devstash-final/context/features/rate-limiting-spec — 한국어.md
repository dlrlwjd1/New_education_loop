# Rate Limiting for Auth

> 원문 [rate-limiting-spec.md](rate-limiting-spec.md)의 한국어 번역본입니다.

## Overview

인증(authentication) 엔드포인트에 속도 제한(rate limiting)을 구현하여 무차별 대입 공격(brute force attack), 크리덴셜 스터핑(credential stuffing), 이메일 발송 엔드포인트 남용을 방지합니다.

## Requirements

- 인증 관련 API 라우트에 속도 제한 추가
- 서버리스 환경과 호환되는 제한을 위해 Upstash Redis와 `@upstash/ratelimit` 사용
- 재사용 가능한 속도 제한 유틸리티 생성
- 적절한 오류 응답 반환 (429 Too Many Requests)
- 프런트엔드에서 사용자 친화적인 오류 메시지 표시

## Endpoints to Protect

| Endpoint | 제한 | 기간(Window) | 기준 키(Key By) |
|----------|-------|--------|--------|
| `/api/auth/callback/credentials` (login) | 5회 시도 | 15분 | IP + email |
| `/api/auth/register` | 3회 시도 | 1시간 | IP |
| `/api/auth/forgot-password` | 3회 시도 | 1시간 | IP |
| `/api/auth/reset-password` | 5회 시도 | 15분 | IP |
| `/api/auth/resend-verification` | 3회 시도 | 15분 | IP + email |

## Implementation

- Upstash 클라이언트를 사용하는 `src/lib/rate-limit.ts` 유틸리티 생성
- 부드러운 제한을 위해 슬라이딩 윈도우(sliding window) 알고리즘 사용
- `x-forwarded-for` 헤더(Vercel) 또는 요청에서 IP 추출
- 더 엄격한 제한을 위해 해당되는 경우 IP + 식별자(email)를 결합
- 속도 제한 검사에서 `{ success, remaining, reset }` 반환

## Environment Variables

```
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## Error Handling

- API는 JSON과 함께 429 상태를 반환: `{ error: "Too many attempts. Please try again in X minutes." }`
- 프런트엔드는 토스트 알림(toast notification)으로 오류 표시
- 429 응답에 `Retry-After` 헤더 포함

## Notes

- Upstash 무료 등급은 하루 10k 요청을 허용 (인증 제한에는 충분함)
- Upstash를 사용할 수 없는 경우 속도 제한은 fail open(요청 허용) 방식이어야 함
- 로그인 제한은 NextAuth credentials와 함께 사용하기 까다로움 - 커스텀 sign-in 핸들러가 필요할 수 있음
- 나중에 더 깔끔한 구현을 위해 속도 제한 미들웨어(middleware) 추가를 고려할 것
