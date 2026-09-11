# Understand Agent Skills in Antigravity

## 개요

- Agent Skill은 반복 작업을 위한 구조화된 재사용 능력이다.
- skill folder 안의 `SKILL.md`가 핵심 지침을 제공한다.

## 내용

긴 지시를 매번 입력하는 대신 특정 작업의 절차, 기준, 예시를 skill로 저장한다. Agent는 요청과 skill description이 맞을 때 필요한 skill만 로드한다.

Skills는 열린 표준을 따르므로 여러 현대 AI coding agent에서 유사한 형식으로 재사용할 수 있다. 관련 없는 skill을 무조건 활성화하지 않도록 설명을 명확히 작성한다.

## 예시

```text
my-skill/
└── SKILL.md
```

## 요약

- 반복적이고 품질 기준이 분명한 작업이 좋은 skill 후보다.
- description은 언제 skill을 써야 하는지 알려준다.
