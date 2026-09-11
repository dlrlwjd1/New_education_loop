# Requiring Auth for Route Access

## 개요
- 요구되는 auth 미들웨어를 절대 사용하지 않을 겁니다 현재 사용자 미들웨어를 이전에 실행하지 않는 한요

## 내용
### 자막·본문 기반 핵심 내용
- 요구되는 auth 미들웨어를 절대 사용하지 않을 겁니다 현재 사용자 미들웨어를 이전에 실행하지 않는 한요
- 여기 맨 위 안에 다시 요청 불러오기, 응답 그리고 Express로부터의 다음 함수가 그런 다음 요구 오프라는 함수를 합칠 거예요
- 이 요청이 요구 인증 내부에 나타날 때쯤 JSON 웹 토큰이 존재하는지 확인해야 한다는 거죠
- 이번에도 TypeScript가 이걸 구현하는 방법을 안내할 거예요 따라서 연속된 오류 메서드와 상태 코드 메서드를 구현해야 하죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Express`, `JSON`, `TypeScript`, `HTTP`, `JWT`

## 예시
`Express`, `JSON`, `TypeScript`, `HTTP`, `JWT`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Requiring Auth for Route Access**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19119936#overview)
