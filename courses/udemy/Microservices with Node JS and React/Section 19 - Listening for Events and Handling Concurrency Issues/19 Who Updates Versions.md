# Who Updates Versions?

## 개요
- Moderation Service가 이 주석을 처리하면 Moderation Service는 이 주석에 프로세싱을 했다고 생각할 수도 있죠

## 내용
### 자막·본문 기반 핵심 내용
- Moderation Service가 이 주석을 처리하면 Moderation Service는 이 주석에 프로세싱을 했다고 생각할 수도 있죠
- 따라서 Common Service emits 코멘트가 업데이트되면 우린 차례로 그게 해당 버전 번호를 선택해 1을 더하고 최종 업데이트로 그걸 내보낸다고 추정해야 해요
- Moderation Service가 코멘트를 조정할 거예요 그리고 코멘트 서비스에서만 수신되는 코멘트 조정 이벤트를 내보내죠
- 버전 번호를 1로 설정했어요 이 이벤트는 Common Service로만 처리되는데요 쿼리 서비스로 전혀 처리되지 코멘트 서비스가 살펴보죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Service`

## 예시
`Service`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Who Updates Versions?**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19565138#overview)
