# Day 4 - Add Skills to Deep Agents: Build a PowerPoint with SKILL.md

## 개요
- SKILL.md의 사내 작성 지침과 슬라이드 생성 도구를 결합해 PowerPoint 한 장을 만든다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821409#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 지침과 실행 분리
skill은 짧은 제목·세 핵심 항목·추천 등 사내 작성 방식을 설명한다. slidekit.py 기반 도구는 글꼴·색상과 PowerPoint 파일 생성을 담당한다. 결과 전체를 skill만으로 만든 것은 아니다.

### 하위 에이전트 연결
slide maker에게 생성 도구와 skills 상위 폴더를 전달한다. 각 하위 폴더의 SKILL.md가 개별 skill이다. 앞서 만든 fleet.md를 읽고 권고를 한 장으로 만들도록 요청한다.

### 결과 검토
fleet.pptx를 실제 발표 프로그램에서 열고 trace의 skills middleware로 지침이 읽힌 과정을 확인한다. 여러 장짜리 덱, 추가 skill, Playwright 조사자를 붙이는 확장 과제를 제시한다.

## 예시
```text
fleet.md → slide maker
→ 필요할 때 SKILL.md 읽기
→ create slide 도구 → fleet.pptx → 화면 확인
```

## 요약
- 스타일 지침과 파일 생성 도구를 함께 사용한다.
- 원문 조사와 생성된 발표 내용을 연결해 검토한다.
