# Faking Authentication During Tests

## 개요
- 무슨 뜻이냐면 방금 생성한 JSON Web 토큰을 JWT 키가 있는 개체에 꽂으라는 거죠 우리가 방금 만든 JSON Web 토큰 값도요

## 내용
### 자막·본문 기반 핵심 내용
- 무슨 뜻이냐면 방금 생성한 JSON Web 토큰을 JWT 키가 있는 개체에 꽂으라는 거죠 우리가 방금 만든 JSON Web 토큰 값도요
- JSON 데이터로 JWT의 키가 있고 그에 대한 값은 실제 JSON 웹 토큰이죠 이 모든 걸 염두에 두고 로그인 안에서 해야 할 일을 알려드리죠
- 그냥 개체를 만드는 거죠 JWT는 제 JWT 같아요 그런 다음 그 세션을 JSON으로 바꿀 거예요
- auth 미들웨어에서 인증 작업을 할 때 썼던 거죠 기억하세요 JSON 웹 토큰을 만들 때 JSON 웹 토큰 키를 포함하거나 사용해야 해요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `JSON`, `React`, `Express`, `JavaScript`, `JWT`

## 예시
`JSON`, `React`, `Express`, `JavaScript`, `JWT`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Faking Authentication During Tests**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19123216#overview)
