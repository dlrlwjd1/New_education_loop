# Day 5 - Ship the Trading App: FastAPI Backend and React Front End

## 개요
- 거래 앱을 FastAPI·React·에이전트 실행 프로세스로 나누어 구동한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50768387#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 백엔드 API
api.py가 트레이더·보유·시장 정보·로그 조회를 HTTP 경로로 제공한다. 기존 계좌와 에이전트 업무 모듈을 감싸는 구조다. API 서버를 시작했다고 거래 루프까지 시작되는 것은 아니다.

### 화면과 작업 루프
frontend에서 개발 서버를 실행하고 별도로 trading floor를 시작한다. 화면에서 검색·생성·거래·알림 활동이 갱신되는지 확인한다. 각 트레이더는 거래하거나 현재 포트폴리오를 유지할 수 있다.

### 배포 범위
영상은 로컬에서 전체 앱을 구동하는 구성과 시연을 다룬다. 실제 서비스 배포·운영은 별도 작업이다. 실습은 가상 계좌와 선택한 시장 데이터 경로를 사용한다.

## 예시
강의의 API 실행 예:

```bash
uv run uvicorn backend.api:app --port 8000
```

별도 터미널에서 frontend의 `npm run dev`와 거래 루프를 실행하고 화면 갱신을 확인한다.

## 요약
- HTTP API·UI·에이전트 실행은 별도 역할이다.
- 로컬 전체 앱 실행과 실제 운영 배포를 구분한다.
