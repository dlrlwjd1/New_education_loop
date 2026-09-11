# Issues with Comment Filtering

## 개요
- 현재 post service and Common Service는 사용자들이 이 이벤트를 받긴 하지만 실제로 처리하지는 않아요

## 내용
### 자막·본문 기반 핵심 내용
- 현재 post service and Common Service는 사용자들이 이 이벤트를 받긴 하지만 실제로 처리하지는 않아요
- Moderation Service는 이 코멘트의 내용을 보고 승인할지 거절할지 결정하죠
- 이 기능이 뭔지 더 잘 알게 됐으니 그걸 구현하는 몇 가지 다른 방법을 살펴볼게요
- 가장 먼저 현재 우리 시스템이 어떻게 작동되는지 간략히 검토할게요 현재는 사용자가 코멘트를 보낼 때마다 포스트 서비스 코멘트와 쿼리가 있어요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `service`

## 예시
`service`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Issues with Comment Filtering**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19099092#overview)
