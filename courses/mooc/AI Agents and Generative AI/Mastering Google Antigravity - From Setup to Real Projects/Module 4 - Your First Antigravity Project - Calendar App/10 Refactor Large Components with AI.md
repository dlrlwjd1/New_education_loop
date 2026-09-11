# Refactor a Large Component into Smaller Ones with AI

## 개요

- 큰 form component를 작고 재사용 가능한 구성요소로 분리한다.
- 동작을 유지하면서 가독성과 유지보수성을 개선한다.

## 내용

수백 줄의 단일 컴포넌트에는 modal layout, input, textarea, date/time field, button 같은 재사용 후보가 섞여 있다. AI에게 현재 기능을 바꾸지 않고 책임별로 분리하며 TypeScript 타입과 명확한 이름을 유지하도록 요청한다.

변경 후 생성·수정 흐름이 그대로 동작하는지 반드시 회귀 테스트한다. AI의 구조 개선안도 프로젝트 규모와 팀 규칙에 맞는지 검토한다.

## 예시

```text
Large EventForm
├── Modal
├── FormField
├── DateTimeFields
└── ActionButtons
```

## 요약

- 재사용 가능한 UI와 도메인 로직을 분리한다.
- 리팩터링 성공 기준은 코드 모양뿐 아니라 기존 동작 유지다.
