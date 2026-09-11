# Cancelled Testing

## 개요
- ID를 생성하기 위해서는 Mongoose 라이브러리가 필요합니다. 그리고 공통 모듈에서 Order status enum이 필요해요.

## 내용
### 자막·본문 기반 핵심 내용
- ID를 생성하기 위해서는 Mongoose 라이브러리가 필요합니다. 그리고 공통 모듈에서 Order status enum이 필요해요.
- 업데이트된 주문을 제공하는데 await order find by ID로부터 온 것이기 때문에 주문 ID를 확인하여 기존 주문 1개와 동일한 ID를 갖게 되는 것이죠
- 제일 위에 수입 글자를 추가하죠 테두리 안에서 통과할 거예요 mongoose 타입의 .bjectID에서 16진수 문자열로 ID가 오죠
- 메시지 객체의 경우, 늘 그렇듯 메시지 유형을 상단의 스트리밍 노드에서 불러오죠 TypeScript에게 다음 줄을 무시하라고 하고 메시지를 만들 거예요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Mongoose`, `enum`, `TypeScript`, `await`

## 예시
`Mongoose`, `enum`, `TypeScript`, `await`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Cancelled Testing**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19826450#overview)
