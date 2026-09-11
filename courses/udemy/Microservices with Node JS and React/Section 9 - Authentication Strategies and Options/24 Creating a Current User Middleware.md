# Creating a Current User Middleware

## 개요
- Express에서 타이핑하는 다음 함수요 JSON 웹 토큰에서 JWT도 불러올게요 JSON 웹 토큰을 디코딩해야 그런 다음 current user라는 새 기능을 내보낼 거예요

## 내용
### 자막·본문 기반 핵심 내용
- Express에서 타이핑하는 다음 함수요 JSON 웹 토큰에서 JWT도 불러올게요 JSON 웹 토큰을 디코딩해야 그런 다음 current user라는 새 기능을 내보낼 거예요
- 어떻게 하는지 기억하세요 JWT를 부르죠 REQ 세션 JWT인 JSON 웹 토큰을 전달할 거예요
- 다음에는 이렇게 return을 넣을게요 그 지점을 지나면 JSON Web 토큰을 다시 한 번 디코딩합니다 현재 사용자 안에서 했던 것과 비슷해요
- 주어진 라우트 처리기에 대한 엑세스 권한을 제한하고 싶을 거예요 우리가 반드시 해야 할 또 한 가지는 JSON 웹 토큰 페이로드에서 정보를 꺼내 재생 사용자로 설정하는 거예요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `JSON`, `Express`, `JWT`, `TypeScript`

## 예시
`JSON`, `Express`, `JWT`, `TypeScript`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Creating a Current User Middleware**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19119926#overview)
