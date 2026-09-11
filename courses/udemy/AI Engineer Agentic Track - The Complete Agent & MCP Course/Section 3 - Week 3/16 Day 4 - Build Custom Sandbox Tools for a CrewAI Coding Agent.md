# Day 4 - Build Custom Sandbox Tools for a CrewAI Coding Agent

## 개요
- 단일 Python 개발자에게 sandbox 파일 목록·읽기·쓰기 도구를 제공한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821201#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 과제 정의
coder의 목표는 주어진 assignment에 맞는 Python 파일을 sandbox에 쓰고 실행 결과를 확인하는 것이다. YAML에는 에이전트 하나와 coding task 하나만 둔다.

### 파일 도구
tools 폴더에 sandbox 도구 모듈을 만든다. 목록 도구는 파일명을 정렬해 반환하고, 읽기 도구는 지정 파일의 내용을, 쓰기 도구는 지정 내용을 파일에 저장한다. docstring과 입력 타입은 모델이 도구를 이해하는 설명이 된다.

### 실행 도구와의 차이
파일 도구는 지정 디렉터리의 제한된 동작을 담당한다. 임의 Python 실행은 더 넓은 동작을 할 수 있으므로 다음 강의에서 Docker 실행 도구로 분리한다. 파일 조작 도구 자체가 Docker를 사용하는 것은 아니다.

## 예시
```text
list → 기존 파일 확인
read → 기존 내용 확인
write → Python 파일 저장
다음 단계: Docker 안에서 그 파일 실행
```

## 요약
- 도구 설명은 모델이 적절한 동작을 고르는 근거다.
- 제한된 파일 조작과 임의 코드 실행은 별도 도구로 설계한다.
