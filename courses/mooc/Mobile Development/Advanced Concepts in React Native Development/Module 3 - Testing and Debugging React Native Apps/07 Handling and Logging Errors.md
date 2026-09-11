# Handling and Logging Errors

## 개요

- 런타임 오류를 감지하고 충돌 대신 대체 UI를 제공하며 진단 정보를 남기는 전략을 설명한다.
- `try/catch`, 오류 경계(error boundary), 콘솔 로그와 Sentry 원격 오류 추적을 다룬다.

## 내용

### 오류 처리 계층

동기·비동기 작업은 `try/catch`로 예상 가능한 실패를 처리한다. 렌더링 트리의 예외는 오류 경계 컴포넌트가 잡아 대체 UI를 보여 줄 수 있다. 처리하지 않은 Promise 거부도 놓치지 않도록 모든 비동기 호출에 명시적인 오류 경로를 둔다.

### 로컬·원격 로깅

개발 중에는 `console.error`와 debugger로 맥락을 확인한다. 운영 앱은 Sentry 같은 원격 서비스에 예외, 환경과 stack trace를 전송해 사용자 기기에서 발생한 문제를 추적한다. 로그에 비밀번호·토큰·개인정보를 포함하지 않는다.

## 예시

```tsx
try {
  await performRiskyTask();
} catch (error) {
  console.error('performRiskyTask failed', error);
  Sentry.captureException(error);
}
```

```tsx
Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
});
```

## 요약

- 예상 가능한 실패는 가까운 위치에서 try/catch로 처리한다.
- 렌더링 오류에는 오류 경계와 대체 UI를 사용한다.
- 운영 오류는 원격 추적하되 민감한 데이터는 로그에서 제거한다.
