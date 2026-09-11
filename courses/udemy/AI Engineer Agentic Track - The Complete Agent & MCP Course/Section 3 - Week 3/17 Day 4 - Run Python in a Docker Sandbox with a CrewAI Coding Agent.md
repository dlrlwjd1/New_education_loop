# Day 4 - Run Python in a Docker Sandbox with a CrewAI Coding Agent

## 개요
- Docker 실행 도구를 연결하고 Leibniz 급수 계산을 실제 코드로 수행한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821207#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 일회성 컨테이너 실행
run sandbox Python 도구는 sandbox를 컨테이너의 작업 디렉터리에 마운트하고 Python 파일을 실행한다. 영상에서는 Python 3.13 이미지와 60초 제한을 사용한다. 실행 결과의 표준 출력을 돌려주고 작업 후 컨테이너를 제거한다.

### 계산 과제
main.py의 assignment에 교대 급수 백만 항을 합산하고 네 배 하라는 요구를 넣는다. 에이전트는 파일 목록 확인, Python 파일 작성, 실행의 순서로 결과를 얻는다. 이는 원주율을 근사하는 Leibniz 급수다.

### 실제 실행 검증
sandbox에 생긴 코드와 계산 결과, trace의 도구 호출을 함께 확인한다. 에이전트가 계산했다고 말하는 것만으로 실행을 판단하지 않는다.

## 예시
강의 계산을 재구성한 독립 실행 예:

```python
terms = 1_000_000
approximation = 4 * sum((-1.0) ** k / (2 * k + 1) for k in range(terms))
print(approximation)
```

## 요약
- 파일 작성·실행·결과 확인이 하나의 에이전트 루프를 이룬다.
- 실행 흔적은 생성된 파일과 trace로 확인한다.
