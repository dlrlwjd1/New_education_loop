# Day 4 - Build a CrewAI Coding Agent: Intro and Installing Docker

## 개요
- 코드를 쓰고 실행하는 단일 개발 에이전트를 만들기 위해 Docker를 준비한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821197#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 작은 개발 에이전트부터 시작
한 에이전트·한 과제로 시작해 다음 날 팀으로 확장한다. 영상에서 사용한 CrewAI 버전에서는 예전 코드 실행 옵션 대신 직접 만든 도구로 파일 작성과 실행을 제공한다.

### Docker의 역할
생성된 코드를 호스트 전체에서 실행하지 않고 컨테이너에서 실행한다. Docker Desktop을 설치·실행하고 컨테이너와 그 바탕인 이미지의 차이를 살펴본다. Windows 설치에서는 기본 WSL 구성을 안내한다. 강사의 기능 제거 이유 설명은 추측이며 확정된 제품 정책으로 받아들이지 않는다.

## 예시
```text
에이전트 → 코드 파일 작성 도구 → sandbox 폴더
에이전트 → 실행 도구 → Docker 컨테이너 → 실행 결과
```

## 요약
- 코드 생성과 코드 실행의 권한을 구분한다.
- 작은 단일 에이전트부터 실행 경계를 확인한다.
