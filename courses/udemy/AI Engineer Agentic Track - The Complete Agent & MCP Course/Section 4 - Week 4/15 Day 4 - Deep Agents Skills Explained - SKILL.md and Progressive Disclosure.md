# Day 4 - Deep Agents Skills Explained: SKILL.md and Progressive Disclosure

## 개요
- 전기차 도입 조사 예제로 SKILL.md와 progressive disclosure를 설명한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821367#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 실습 목표
전기차 차량군 도입을 조사하고 사내 형식의 한 장짜리 발표 자료를 만든다. 계획 도구·작업 폴더·하위 에이전트와 프레젠테이션 작성 skill을 사용한다.

### 점진적 로딩
SKILL.md 상단의 YAML frontmatter에는 이름과 설명을 둔다. 시작 시에는 짧은 설명을 보고 관련 작업일 때 상세 Markdown을 읽는다. 많은 지침을 항상 문맥에 넣지 않는 progressive disclosure 방식이다.

### skill과 도구
skill은 절차·스타일·스크립트 사용법을 문서로 전달한다. 도구는 명시적인 호출 인터페이스와 인수 스키마를 제공한다. 호출 형식 제약과 작업 지침은 역할이 다르며, 스키마에 맞는 인수도 의미적 정확성을 따로 검증해야 한다.

## 예시
```text
시작: skill 이름·설명만 인지
발표 자료 작업 감지: SKILL.md 상세 지침 읽기
→ 사내 색상·구성·작성 절차 적용
```

## 요약
- skill은 필요할 때 상세 지침을 읽는 방식이다.
- 문서 지침과 실행 도구를 목적에 맞게 함께 사용한다.
