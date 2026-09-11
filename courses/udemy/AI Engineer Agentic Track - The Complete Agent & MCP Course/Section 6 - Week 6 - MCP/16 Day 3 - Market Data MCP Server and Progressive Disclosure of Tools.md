# Day 3 - Market Data MCP Server and Progressive Disclosure of Tools

## 개요
- 시장 데이터 MCP와 도구의 progressive disclosure 방식을 살펴본다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50768267#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 실제·모의 데이터 선택
영상은 Massive(이전 Polygon.io) 서버를 사용한다. 키가 없으면 수업의 market server가 모의 가격을 제공한다. 어떤 데이터 경로로 실행했는지 구분해야 한다.

### 단계적 도구 탐색
많은 개별 API 도구 설명을 한꺼번에 주는 대신 endpoint를 검색하고 필요한 설명을 읽은 뒤 API를 호출하는 고수준 도구를 사용한다. 불필요한 문맥을 줄일 수 있지만 최선의 구성은 과제별 실험으로 정한다.

### 가격 검증
Apple 가격을 확인할 때 정규장 종가와 시간외 최근 거래값이 달라 보이는 사례를 trace로 설명한다. 어떤 endpoint와 시점의 값을 가져왔는지 봐야 한다. 요금제와 데이터 지연 조건은 영상의 특정 환경에 해당한다.

## 예시
```text
주가 질문 → endpoint 검색 → 설명 확인 → API 호출
→ 반환 시점·가격 종류 확인 → 답변
모의 서버 사용 시 결과도 모의 가격으로 해석
```

## 요약
- 도구 설명도 필요한 순서대로 공개할 수 있다.
- 숫자만 비교하지 말고 데이터 시점과 종류를 확인한다.
