# What Is the Model Context Protocol (MCP)?

## 개요
- MCP(Model Context Protocol)를 AI 도구와 외부 시스템을 연결하는 공통 규약으로 설명한다.
- 원본 강의: https://www.udemy.com/course/ai-product-manager-bootcamp/learn/lecture/53244243

## 내용
- HTTP나 전기 콘센트처럼 서로 다른 애플리케이션이 같은 방식으로 연결되게 하는 표준에 비유한다.
- MCP 이전에는 각 애플리케이션이 LLM마다 별도의 API 통합을 만들어야 했다.
- MCP는 서로 다른 API 위에 통일된 연결 계층을 제공해 AI 도구가 여러 데이터와 기능을 일관된 방식으로 사용하게 한다.

## 예시
- Claude Code가 배포·데이터베이스·문서 도구를 각각 전용 MCP 서버를 통해 사용한다.

## 요약
- MCP는 모든 API를 같게 만드는 것이 아니라 AI 클라이언트가 도구를 호출하는 접점을 표준화한다.
