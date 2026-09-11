# Day 2 - The 5 Steps to Build Any CrewAI Project with Tools and Context

## 개요
- CrewAI 프로젝트를 만드는 반복 가능한 다섯 단계를 정리한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821161#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 다섯 단계
프로젝트 생성, YAML 작성, crew.py 연결, main.py 입력 설정, 실행의 순서다. YAML의 중괄호 placeholder와 입력 사전의 키를 맞춘다. crew.py에서는 YAML 키를 참조하는 Agent·Task를 만들고 도구나 구조화 출력을 추가한다.

### 구성 선택
설정을 모두 Python에서 작성하는 방식도 가능하다. YAML을 사용하면 프롬프트를 코드와 분리할 수 있지만 양쪽 이름을 정확히 연결해야 한다. 이번 실습에서는 검색 도구와 과제 context를 추가해 앞선 과제의 결과가 다음 작업에 들어가게 한다.

## 예시
```text
1. crewai create crew 프로젝트명
2. agents.yaml · tasks.yaml
3. crew.py의 연결과 도구
4. main.py의 inputs와 kickoff
5. 프로젝트 폴더에서 crewai run
```

## 요약
- 다섯 단계를 프로젝트마다 반복한다.
- context는 과제 사이의 정보 의존성을 명시한다.
