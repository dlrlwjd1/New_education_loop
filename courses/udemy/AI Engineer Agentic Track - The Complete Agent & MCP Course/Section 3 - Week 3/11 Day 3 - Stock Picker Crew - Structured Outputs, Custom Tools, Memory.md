# Day 3 - Stock Picker Crew: Structured Outputs, Custom Tools, Memory

## 개요
- Stock Picker에 구조화 출력·사용자 정의 도구·메모리·관리자 조율을 도입한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821179#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 확장할 기능
Pydantic 모델을 과제의 출력 타입에 연결한다. 기본 제공 검색 도구 외에 직접 만든 푸시 알림 도구를 사용한다. 먼저 sequential로 동작을 확인하고 hierarchical 관리자 방식으로 바꿔 비교한다.

### 메모리와 관측
영상에서 다루는 CrewAI 버전은 통합 메모리를 제공하며 `memory=True`로 활성화한다. 편리하지만 내부 저장·검색이 추상화되므로 trace로 실제 기억 사용을 확인해야 한다. 임시 trace 링크와 계정에 연결한 추적을 구분하고 로그인 및 tracing 설정도 설명한다.

## 예시
```text
기본 실행 → 구조화된 회사 목록·조사 결과
→ 선택 결과 알림 → 메모리 적용
→ 관리자 조율로 전환 → trace 비교
```

## 요약
- 새 기능은 한 번에 믿기보다 실행과 trace로 검증한다.
- 구조화 출력은 과제의 결과 형식을 지정한다.
