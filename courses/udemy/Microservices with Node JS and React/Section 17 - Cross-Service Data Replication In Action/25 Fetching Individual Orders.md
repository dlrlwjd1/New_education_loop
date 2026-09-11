# Fetching Individual Orders

## 개요
- 이 순서가 사용자 ID가 req current user와 다른 경우라고 해보죠 느낌표도 잊지 마세요 TypeScript에 말해야 하니까요

## 내용
### 자막·본문 기반 핵심 내용
- 이 순서가 사용자 ID가 req current user와 다른 경우라고 해보죠 느낌표도 잊지 마세요 TypeScript에 말해야 하니까요
- 주문 내부에 대기 명령과 ID 찾기가 있어요 기억하세요, ID 기반의 특정 레코드를 찾는 방법입니다. 우리가 찾고자 하는 아이디어는 요청된 매개변수 객체에서 나올 것입니다. 즉 req 매개변수 .OrderID가 우리는 사용자가 정확하게 혹은 MongoDB ID 같은 것을 제공할 것이라고 가정하고 있어요.
- 다시 한 번 Mongoose에서 인구화 시스템을 사용하죠 이 순서를 찾으면서 관련된 티켓을 페치하려면 끝부분에 .Populate ticket를 연결해야 해요
- 이전에 얘기했듯이 유효성 검사를 통해 유효한 ID가 제공되는지 유효성 검사 단계를 추가해서 매개변수가 진짜 MongoDB ID처럼 보이는지 확인할 수 있어요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `MongoDB`, `Mongoose`, `TypeScript`

## 예시
`MongoDB`, `Mongoose`, `TypeScript`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Fetching Individual Orders**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19493792#overview)
