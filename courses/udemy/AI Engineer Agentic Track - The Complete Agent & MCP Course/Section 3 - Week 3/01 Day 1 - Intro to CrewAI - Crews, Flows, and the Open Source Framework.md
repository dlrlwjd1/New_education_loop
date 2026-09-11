# Day 1 - Intro to CrewAI: Crews, Flows, and the Open Source Framework

## 개요
- CrewAI의 제품군과 오픈소스 프레임워크, Crews·Flows의 역할을 구분한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821121#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 강의의 대상
영상은 관리·배포 제품과 시각적 Studio를 소개한 뒤, 수업에서 사용하는 것은 오픈소스 Python 프레임워크임을 분명히 한다. 모델 호출 비용과 프레임워크 자체의 제공 방식도 별개다.

### Crews와 Flows
Crew는 역할을 가진 에이전트들이 과제를 수행하는 팀이다. Flow는 단계·논리·상태 이동을 정의하는 상위 작업 흐름으로 여러 Crew를 연결할 수 있다. 이 주차는 주로 Crews를 다룬다.

### 추상화의 선택
CrewAI는 역할·과제 구성과 기본 도구를 제공해 빠르게 시작할 수 있지만, 프레임워크가 정한 구조도 함께 받아들이게 된다. 앞 주의 가벼운 SDK와 비교하며 이 차이를 이해한다.

## 예시
```text
Flow: 전체 업무 단계와 상태 이동
  ├─ Crew A: 조사 담당 에이전트 팀
  └─ Crew B: 후속 과제 담당 팀
```

## 요약
- 오픈소스 라이브러리와 상용 관리 제품을 구분한다.
- 이번 주의 중심은 Crews다.
