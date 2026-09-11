# Day 5 - Intro to the Sidekick: An Autonomous AI Coworker with create_agent

## 개요
- 도구·메모리·평가자·사용자 승인을 갖춘 Sidekick 프로젝트를 소개한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49821415#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### 작업자 에이전트
create_agent 계층에서 브라우저·파일·알림 도구를 가진 worker를 만든다. 사용자는 과제와 성공 기준을 전달한다. 작업자는 계획하고 도구를 쓰며 완료까지 진행한다.

### middleware와 평가
할 일 목록을 화면에 보여 주고 개인정보 가림과 실행 예산 제한을 추가한다. 필요한 동작은 사용자 승인에서 멈춘다. worker 밖의 별도 LLM 호출을 평가자로 두어 성공 기준 충족 여부를 확인한다. 평가자의 판단 역시 검토 대상이다.

## 예시
```text
과제 + 성공 기준 → worker의 계획·도구 실행
→ 필요 시 사용자 승인 → 결과 평가
→ 보완 또는 최종 전달
```

## 요약
- 구체적 성공 기준을 먼저 설정한다.
- 작업 수행과 결과 평가를 별도 역할로 둔다.
