# Huge Issues with Authentication Strategies

## 개요
- 그게 1단계예요 우리가 기본 옵션 2를 따른다고 가정해 보죠 그 말은 사용자 ABC가 JSON 웹 토큰 쿠키 같은 걸 가져다가 인증과 관련된 응용 프로그램 내부 어떤 일이든 하는 데 사용할 수 있다는 거죠

## 내용
### 자막·본문 기반 핵심 내용
- 그게 1단계예요 우리가 기본 옵션 2를 따른다고 가정해 보죠 그 말은 사용자 ABC가 JSON 웹 토큰 쿠키 같은 걸 가져다가 인증과 관련된 응용 프로그램 내부 어떤 일이든 하는 데 사용할 수 있다는 거죠
- 그러니 당연히 이 요청을 거절할 거예요 사용자 ABC는 오리지널 JSON 웹 토큰을 갖고 있어요
- JSON 웹 토큰을 취할 거예요 여전히 100% 유효한 거죠 아직 손볼 수가 없었거든요 사용자 ABC를 제어하니까요
- JSON 웹 토큰이든 쿠키든 뭐든 보낼 수 있어요 사용자가 다양한 서비스로 자신을 인증할 때 사용할 수 있는 걸 보내죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `JSON`, `MongoDB`

## 예시
`JSON`, `MongoDB`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Huge Issues with Authentication Strategies**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19119696#overview)
