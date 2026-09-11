# Day 3 - Custom Tools, Memory, and Hierarchical Process in CrewAI

## 개요
- 푸시 알림 도구를 연결한 뒤 메모리와 hierarchical 조율의 효과를 확인한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821193#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 기본 실행
사용자 정의 알림 함수를 도구로 만들고 stock picker에 부여한다. 검색 도구는 조사 담당 에이전트에만 연결한다. 첫 실행에서는 JSON 결과와 결정 파일, 알림, trace를 함께 확인한다.

### 관리자와 메모리
관리자에게 위임을 허용하고 Crew의 manager_agent와 hierarchical process를 설정한다. 메모리를 켠 다음 다시 실행해 이전 회사 정보가 프롬프트의 과거 기억 영역에 주입되는지 확인한다. 자동 선택된 기억이 불완전할 수 있다는 추가 지침도 trace에서 관찰한다.

### 설계 원칙
강사는 재미있는 역할 이름 때문에 에이전트를 늘리는 습관을 경계한다. 실제 프로젝트는 한 에이전트·한 과제로 시작하고, 분리가 측정 가능한 개선을 줄 때 확장해야 한다.

## 예시
```text
첫 실행 결과 저장 → 메모리 활성화 후 재실행
→ trace에서 과거 회사 정보의 주입 확인
→ sequential과 hierarchical의 실행 흐름 비교
```

## 요약
- 메모리 활성화만으로 원하는 기억 동작을 보장하지 않는다.
- 에이전트 분리는 결과 개선으로 정당화한다.
