# Helper Functions + Agent Flow

## 개요
- 승인 요청 이벤트를 감지하고 사람의 결정을 원래 실행과 연결하는 Helper Function을 만든다.

## 내용
### 이벤트 처리
`check_for_approval`은 세션 이벤트에서 확인 요청을 찾아 approval ID와 invocation ID를 반환한다. 다른 Helper Function은 복잡한 이벤트에서 에이전트 텍스트를 추출하고, 사람의 승인·거절을 ADK Function Response로 변환한다.

Runner는 동일한 사용자·세션·invocation ID를 사용해 중단된 실행을 재개한다. 강의의 `auto_approve`는 UI 입력을 흉내 낸 교육용 인자다.

## 예시
```text
초기 실행 → 이벤트 수집 → 승인 요청 탐지
→ 사람의 결정 → Function Response 생성 → 동일 실행 재개
```

## 요약
- 승인 ID는 요청을, invocation ID는 재개할 실행을 식별한다.
- 운영 환경에서는 UI와 API를 통해 비동기 승인을 수집한다.
