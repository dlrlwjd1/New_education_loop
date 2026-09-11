# How to Handle Resource Updates

## 개요
- 코멘트 서비스는 코멘트 생성 이벤트를 계속 내보내고 그 이벤트로 가죠 거기에 더해 Moderation Service와 쿼리 서비스로도 가죠

## 내용
### 자막·본문 기반 핵심 내용
- 코멘트 서비스는 코멘트 생성 이벤트를 계속 내보내고 그 이벤트로 가죠 거기에 더해 Moderation Service와 쿼리 서비스로도 가죠
- 하나는 자연에 특화된 동물이에요 그걸 중재하는 코멘트가 될 거예요 Common Service로 처리될 거예요
- 두 번째 선택지를 살펴보고 있었어요 결국 이런 접근 방식의 이슈는 쿼리 서비스가 이런 온건한 이벤트가 무엇인지에 대해 아주 깊이 이해할 수 있게 해준다는 거죠
- 이걸 해결하기 위해 중재된 코멘트를 코멘트 서비스에 의해 처리할게요 앞으로 어떻게 될지 보여드리죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Service`

## 예시
`Service`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **How to Handle Resource Updates**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19099098#overview)
