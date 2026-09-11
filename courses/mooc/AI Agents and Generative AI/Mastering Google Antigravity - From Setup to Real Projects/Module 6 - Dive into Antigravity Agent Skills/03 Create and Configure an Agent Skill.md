# Create and Configure Your Own Agent Skill

## 개요

- 직접 Agent Skill을 만들고 activation 방식을 확인한다.
- Calendar App의 주요 사용자 흐름을 분석하는 skill을 예제로 사용한다.

## 내용

Skill은 명확한 이름의 폴더와 `SKILL.md`로 시작한다. 예제 skill은 앱과 unit tests를 조사해 release 전 수동 테스트할 핵심 user flow와 절차를 작성한다.

`SKILL.md`에는 skill의 목적과 trigger가 드러나는 description, 구체적인 단계, 입력과 산출물을 적는다. Agent가 언제 사용해야 할지 모호하면 자동 선택 가능성이 낮아진다.

## 예시

```markdown
---
name: manual-test-plan
description: Analyze an app and produce manual test flows before release.
---
```

## 요약

- 목적과 적용 상황을 description에 분명히 쓴다.
- 실제 요청으로 skill이 선택되고 기대 결과를 내는지 시험한다.
