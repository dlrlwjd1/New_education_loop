# Current User Handler

## 개요
- 안 그러면 그 세션에 JSON Web 토큰이 설정돼 있고 JSON Web 토큰이 유효하다면 JSON Web 토큰 안에 저장된 페이로드를 되돌려 보낼 거예요

## 내용
### 자막·본문 기반 핵심 내용
- 안 그러면 그 세션에 JSON Web 토큰이 설정돼 있고 JSON Web 토큰이 유효하다면 JSON Web 토큰 안에 저장된 페이로드를 되돌려 보낼 거예요
- React Application은 쿠키를 직접 보고 검사해 유효한 JSON Web 토큰이 있는지 판단할 수 없어요
- 기억하세요 JSON Web 토큰이 나타나는 곳이죠 쿠키가 설정되면 JSON Web 토큰이 있을 거예요
- 하지만 JSON Web 토큰과 함께 보안 시그니처를 설정했기 때문에 JSON Web 토큰이 어떤 식으로든 조작됐는지 아주 쉽게 감지할 수 있어요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `React`, `JSON`, `JavaScript`, `JWT`

## 예시
`React`, `JSON`, `JavaScript`, `JWT`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Current User Handler**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19119904#overview)
