# Day 4 - Wiring Up MCP Servers and the Researcher-as-Tool Pattern

## 개요
- 트레이더·조사자 MCP 구성을 분리하고 조사 에이전트를 도구로 연결한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50768337#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 서버 구성 분리
mcp_servers.py에 연결 설정을 모은다. 시장 데이터 키가 있으면 해당 공급자 서버를, 없으면 수업용 시뮬레이션 서버를 사용한다. 조사자에는 검색·Fetch·메모리를 제공하고 Tavily는 검색 도구만 허용한다.

### 기억의 분리
여러 에이전트가 실행되는 환경을 고려해 libsql 기반 기억을 사용한다. 에이전트 이름별 저장 파일을 만들어 각 조사 이력을 분리한다.

### researcher-as-tool
조사자를 먼저 실행해 검색·본문 수집·메모리 호출을 확인한 뒤 as_tool로 트레이더에 전달한다. 트레이더는 잔고와 보유를 조회하고 필요하면 조사자를 호출한다. 영상의 실행에서는 추가 거래 없이 보유 상태와 현금 제약을 알렸으며, 거래하지 않는 결정도 결과가 될 수 있다.

## 예시
```text
트레이더 → 잔고·보유 조회
→ researcher 도구 → 검색·Fetch·기억
→ 거래 또는 유지 결정 → 알림
```

## 요약
- 역할별 도구와 기억을 나눈다.
- 거래 실행 여부와 관계없이 결정 근거·호출을 확인한다.
