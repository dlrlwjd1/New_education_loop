# Prompts and Materials for Calendar App

## 개요

- Calendar App 구현에 사용한 프롬프트와 자료를 모은 읽기 자료다.
- 계획, fake data, CRUD, validation, refactoring, test, documentation 요청을 제공한다.

## 내용

초기 계획은 두 스크린샷의 장점을 결합하고 Vite, React, TypeScript, 단순한 반응형 CSS를 사용하도록 지정한다. 이후 프롬프트는 mock events를 별도 `mocks/` 폴더로 옮기고, 이벤트 action menu와 CRUD를 추가한다.

validation 프롬프트는 UX 전문가 관점의 검토와 edge case 제안을 요구한다. 리팩터링에서는 큰 form component를 layout, field, button 등 재사용 가능한 단위로 나눈다. 마지막으로 Vitest 테스트 계획과 `DOCUMENTATION.md` 생성을 요청한다.

## 예시

```text
Create a step-by-step plan to build a calendar app.
Use Vite CLI, React, and TypeScript.
Keep CSS simple and responsive.
```

## 요약

- 프롬프트는 기술 스택, UI 기준, 동작, 산출물을 함께 명시한다.
- 구현 이후 개선·테스트·문서화 프롬프트까지 이어진다.
