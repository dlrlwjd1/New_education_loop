# Day 1 - What Is MCP? Host, Client and Server Architecture Explained

## 개요
- MCP의 역할과 host·client·server 구성을 설명한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/50767593#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 연결 표준
MCP는 도구·리소스·프롬프트를 제공하는 쪽과 사용하는 애플리케이션의 통신 규약이다. 강의는 주로 도구에 집중한다. 일반 함수를 자기 에이전트에 연결하는 데 반드시 MCP가 필요한 것은 아니며, 여러 구현에서 재사용할 때 가치가 커진다.

### 세 구성요소
host는 AI 애플리케이션이다. host 내부의 client가 특정 server와 연결을 관리한다. server는 사용 가능한 도구의 설명·인수 구조와 실제 실행 기능을 제공한다. 여러 서버에 연결하면 대응하는 client 연결을 둔다.

### 프레임워크의 역할
에이전트 프레임워크는 서버 설정을 받아 client 생성과 연결을 대신 처리한다. MCP 자체가 모델의 판단이나 에이전트 루프 전체를 대신 구현하지는 않는다.

## 예시
```text
AI 애플리케이션(host)
  client A ↔ 브라우저 server
  client B ↔ 파일 server
  client C ↔ 외부 업무 server
```

## 요약
- host는 앱, client는 연결 담당, server는 기능 제공자다.
- MCP는 도구 연결을 표준화한다.
