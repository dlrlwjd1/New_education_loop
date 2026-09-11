# Day 2 - Build AI Agents with Strands Agents from AWS and Bedrock

## 개요
- Strands Agents에서 도구·MCP·공유 보드를 사용해 번역 작업을 수행한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821599#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 모델과 실행
Strands는 AWS에서 나온 프레임워크이며 Bedrock 외 모델도 연결한다. 영상에서는 OpenAI 모델 객체와 system_prompt로 Agent를 만들고 실행한다. 관측 연동과 Python·TypeScript 제공도 소개한다.

### 도구와 MCP
보드 함수를 tool 데코레이터로 감싼다. 파일 시스템 MCPClient를 연결해 notes.txt 요약으로 먼저 확인한다. 업무 함수는 ADK 실습과 같고 프레임워크 연결 문법이 달라진다.

### 전체 목표
번역 목표를 보드에 넣고 에이전트가 계획·읽기·번역·저장·완료를 수행하게 한다. Spanish.txt와 보드 상태를 검토한 뒤 strands_worker.py에서도 실행한다.

## 예시
```text
같은 보드·같은 파일 과제
→ Strands Agent + 보드 tools + 파일 MCP
→ Spanish.txt와 완료 단계 확인
```

## 요약
- 프레임워크를 바꿔도 목표·도구·루프 원리는 유지된다.
- 모델 공급자와 프레임워크를 분리해 설정한다.
