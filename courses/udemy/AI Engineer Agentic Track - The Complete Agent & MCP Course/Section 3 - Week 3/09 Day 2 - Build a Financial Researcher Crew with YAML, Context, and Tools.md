# Day 2 - Build a Financial Researcher Crew with YAML, Context, and Tools

## 개요
- 금융 조사자와 분석가를 정의하고 검색 도구에 필요한 설정을 준비한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821169#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 조사·분석 과제
researcher는 회사의 최신 정보와 뉴스를 찾고 analyst는 결과를 보고서로 만든다. company와 current_date를 placeholder로 사용한다. 조사 지침은 학습 당시 지식만으로 답하지 않고 지정 날짜에 맞는 정보를 찾도록 강조한다.

### context의 의미
분석 과제의 context에 조사 과제를 명시한다. 영상의 sequential 실행에서는 context를 생략하면 앞선 과제들의 출력이 전달되지만, 명시하면 지정한 과제로 문맥을 좁힌다. 따라서 context 추가가 항상 정보량 증가를 의미하지 않는다.

### Serper 검색 준비
검색 결과 페이지와 snippet을 얻는 Serper 도구를 사용한다. 서비스 키를 프로젝트 `.env`의 `SERPER_API_KEY`에 넣는다. 영상의 무료 사용량 안내는 촬영 시점 기준이다.

## 예시
```text
입력: 회사명 + 현재 날짜
research task → 최신 검색 결과 정리
analysis task(context=[research task]) → 회사 보고서
```

## 요약
- 최신성 요구를 입력과 과제 설명에 반영한다.
- 명시적 context는 전달할 앞선 결과를 선택한다.
