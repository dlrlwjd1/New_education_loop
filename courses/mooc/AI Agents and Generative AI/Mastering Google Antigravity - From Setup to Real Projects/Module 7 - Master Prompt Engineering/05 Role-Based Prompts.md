# Role-Based Prompts for Smarter Outputs

## 개요

- AI에게 구체적인 전문가 역할을 부여해 관점과 답변 수준을 조정한다.
- 역할은 audience, 제약, 형식과 함께 사용할 때 효과적이다.

## 내용

`senior React developer`, `DevOps engineer`, `tester`, `architect` 같은 역할은 답변의 관점과 깊이를 정한다. 입문자 설명과 senior-level 최적화 조언도 역할과 대상 독자로 구분할 수 있다.

역할만으로 정확성이 보장되지는 않는다. 구체적인 과업, 현재 코드, 기술 제약, 원하는 출력 형식을 함께 제공하고 결과를 검토한다.

## 예시

```text
Act as a senior React and accessibility reviewer.
Review this dialog for keyboard and focus issues.
Return findings by severity with concrete fixes.
```

## 요약

- 넓은 역할보다 구체적인 역할이 유용하다.
- 전문가 역할을 부여해도 코드를 맹목적으로 신뢰하지 않는다.
