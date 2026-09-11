# Day 3 - Define Pydantic Structured Outputs for the Stock Picker Crew

## 개요
- 세 에이전트로 Stock Picker를 구성하고 회사 목록과 조사 결과의 출력 구조를 정의한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821185#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 역할과 과제
trending company finder는 특정 산업에서 주목받는 회사 두세 개를 찾는다. financial researcher는 각 회사를 분석하고 stock picker는 조사 내용을 비교해 하나를 선택한다. 산업과 날짜를 입력으로 사용한다.

### 결과와 문맥
회사 목록과 조사 결과는 JSON 파일, 최종 결정은 Markdown으로 남긴다. 이미 다룬 회사를 반복하지 말라는 지침은 이후 메모리 기능과 연결된다. 과제 context를 명시하면 선택 과제에 전달할 조사 결과를 좁힐 수 있다.

### Pydantic 출력 모델
개별 회사와 회사 목록, 개별 회사 조사와 조사 목록을 각각 모델로 정의한다. 회사 조사에는 이름·시장 위치·미래 전망·투자 잠재력 정보를 담고 Field 설명으로 각 값의 의미를 알려 준다. JSON 구조의 일관성과 판단의 타당성은 별도로 확인해야 한다.

## 예시
```text
산업·날짜 → Trending Company 목록
→ 회사별 시장 위치·전망·잠재력 조사 목록
→ 비교 판단과 이유
```

## 요약
- 목록의 항목 모델과 목록 전체 모델을 구분한다.
- 출력 스키마는 에이전트 사이의 전달 형식을 명확히 한다.
