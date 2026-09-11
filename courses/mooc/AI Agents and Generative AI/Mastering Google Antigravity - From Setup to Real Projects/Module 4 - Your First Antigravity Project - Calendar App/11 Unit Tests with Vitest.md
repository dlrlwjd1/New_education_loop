# Test Calendar App — Unit Tests with Vitest

## 개요

- Vitest로 Calendar App의 단위 테스트를 추가한다.
- AI가 테스트 계획과 코드를 만들더라도 실행 결과는 사람이 확인한다.

## 내용

컴포넌트, utility, hook, context 등 테스트 대상을 먼저 조사해 계획을 만든다. 사용자가 중요한 시나리오를 지정하거나 AI에게 전체 코드베이스를 분석해 우선순위를 제안하게 할 수 있다.

테스트 코드 생성 후 `npm run test`로 실행한다. 실패하면 terminal output을 컨텍스트로 전달해 원인을 분석하고 수정한다. 테스트 자체가 잘못된 가정이나 구현 세부사항에 묶이지 않았는지도 검토한다.

## 예시

```bash
npm run test
```

```text
테스트 계획 → Vitest 설정·테스트 생성
→ 실행 → 실패 로그 전달 → 수정 → 재실행
```

## 요약

- 테스트는 AI 생성 코드의 변경과 리팩터링에 대한 안전망이다.
- 테스트 수보다 핵심 사용자 동작과 edge case의 검증이 중요하다.
