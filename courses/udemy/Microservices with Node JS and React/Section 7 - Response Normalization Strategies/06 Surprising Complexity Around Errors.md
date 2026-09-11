# Surprising Complexity Around Errors

## 개요
- 브라우저 안에서 React app이 실행될 거예요 어떤 시점에서 사용자가 어떤 계정을 등록하려 할 때 유효하지 않은 이메일을 입력하거나 유효하지 않은 암호를 입력하거나 그게 뭐든 간에 우리 서비스로 전송될 유효하지 저희 오프 서비스는 물론 현재 EXPRESS로 작업 중이죠 실제 유효성 검사는 Express Validator로 유효하지 않은 데이터를 보내는 것이기 때문에 이런 구조를 가진 응답을 얻을 이건 축약된 거지만 우리가 방금 받은 답변의 구조라고 할 수 있죠

## 내용
### 자막·본문 기반 핵심 내용
- 브라우저 안에서 React app이 실행될 거예요 어떤 시점에서 사용자가 어떤 계정을 등록하려 할 때 유효하지 않은 이메일을 입력하거나 유효하지 않은 암호를 입력하거나 그게 뭐든 간에 우리 서비스로 전송될 유효하지 저희 오프 서비스는 물론 현재 EXPRESS로 작업 중이죠 실제 유효성 검사는 Express Validator로 유효하지 않은 데이터를 보내는 것이기 때문에 이런 구조를 가진 응답을 얻을 이건 축약된 거지만 우리가 방금 받은 답변의 구조라고 할 수 있죠
- Express와 Express Validator를 이용해 우리 앱 안의 모든 걸 빌드할 거예요 하지만 쉽게 상상할 수 있죠 프로페셔널 프로젝트에서 작업한다면 주문 서비스는 Ruby on Rails API를 사용하고 페이먼트 서비스는 Java Spring을 사용할 수도 있다고요
- Ruby on Rails 앱은 일부 응답을 줄 겁니다 Express Validator에서 방금 받은 것과는 아주 달라 보이는 응답이요
- 지금은 요청서가 아니라 포스트맨에게 요청하는 거예요 React 앱을 빌드한다고 잠시 상상해 보죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `React`, `EXPRESS`, `API`

## 예시
`React`, `EXPRESS`, `API`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Surprising Complexity Around Errors**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19102658#overview)
