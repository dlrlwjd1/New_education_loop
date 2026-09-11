# Understand Rules in Antigravity

## 개요

- Rules는 Agent가 반복적으로 따라야 할 프로젝트 제약을 Markdown으로 정의한다.
- 코드 스타일, naming, 문서화, 테스트 기준을 일관되게 적용한다.

## 내용

매 프롬프트마다 같은 지시를 반복하지 않고 rule file에 한 번 기록한다. 규칙은 manual, always-on, model decision, glob 등의 activation mode로 적용 범위를 제어할 수 있다.

필요하면 `@mention`으로 supporting file을 연결한다. 규칙은 짧고 구체적이며 검증 가능한 문장으로 작성한다.

## 예시

```markdown
# TypeScript Rules
- Use strict TypeScript.
- Prefer typed props.
- Do not use `any`.
```

## 요약

- Rules는 일관된 개발 기준을 재사용한다.
- 모든 상황에 적용할 규칙과 특정 파일용 규칙을 구분한다.
