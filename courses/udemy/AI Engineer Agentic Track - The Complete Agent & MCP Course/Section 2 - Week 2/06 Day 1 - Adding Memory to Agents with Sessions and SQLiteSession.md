# Day 1 - Adding Memory to Agents with Sessions and SQLiteSession

## 개요
- 별도 Runner 실행 사이에 대화 이력을 이어 주는 수동 관리와 SQLiteSession을 비교한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820407#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 같은 Agent가 이력을 기억하는 것은 아니다
같은 Agent에 이름을 알려준 뒤 별도의 `Runner.run`으로 이름을 물으면 앞선 정보를 모른다. Agent 객체는 모델·지시·도구 설정이고, 별도 실행 간 이력을 자동으로 보존하는 저장소는 아니다. 한 실행 내부의 도구 루프 이력과 여러 실행 사이의 대화 이력을 구분한다.

### 메시지 목록을 직접 전달
이전 결과의 `to_input_list()`에 새 사용자 메시지를 추가해 다음 `Runner.run`에 넘긴다. 애플리케이션이 원하는 저장소에 이 목록을 보관할 수 있다. 시스템 지시는 Agent에 있으므로 이 목록에는 별도로 포함되지 않는다.

### SQLiteSession
대화를 구분하는 세션 ID로 SQLiteSession을 만들고 매 실행의 `session`에 전달한다. 파일 경로를 주지 않는 시연은 메모리 저장이며, DB 파일을 지정하면 디스크에 저장한다. 사용자·대화별로 세션을 구분해야 이력이 섞이지 않는다.

### 컨텍스트 크기
이력을 모두 전달하는 방식도 모델의 컨텍스트 한계를 갖는다. 특히 코드·파일·도구 출력이 길어지면 최근 이력만 유지하거나 요약하는 방식이 필요할 수 있다. 강의는 이를 잘라내기와 압축(compaction)으로 소개한다.

## 예시
```text
수동: 이전 결과.to_input_list() + 새 사용자 메시지 → 다음 Runner.run
세션: 같은 대화 ID의 SQLiteSession → 매 Runner.run에 전달
```

같은 Agent를 쓰는 것과 같은 세션을 쓰는 것은 다르다.

## 요약
- 실행 간 기억은 이력 저장과 재전달로 만든다.
- SQLiteSession은 세션별 이력 관리를 대신한다.
- 긴 도구 출력까지 저장하면 컨텍스트 관리가 필요하다.
