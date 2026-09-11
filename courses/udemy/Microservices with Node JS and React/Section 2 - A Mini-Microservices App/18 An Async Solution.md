# An Async Solution

## 개요
- 이건 일종의 비동기 통신 스타일이죠 이 다이어그램에서 확실히 하고 싶은 것은 post service에 모든 게시물 리스트를 요청하기 보다는 Get request를 쿼리 서비스에 하는 것이 낫다는 점이에요.

## 내용
### 자막·본문 기반 핵심 내용
- 이건 일종의 비동기 통신 스타일이죠 이 다이어그램에서 확실히 하고 싶은 것은 post service에 모든 게시물 리스트를 요청하기 보다는 Get request를 쿼리 서비스에 하는 것이 낫다는 점이에요.
- 실제로 이게 어떻게 작동하는지 살펴보죠 여기서 모든 게 시작돼요 누군가 post service에 포스트 요청을 할 때마다 포스트 기능이 이벤트를 방출하게 되는데 아마 이렇게 생겼을 거예요.
- React Application 내부에서 약간의 변화가 필요해요 이 시점에서 이 접근법의 장단점을 살펴보죠
- 이 이벤트 broker의 목적 혹은 목적은 여러 서비스로부터 알림을 받는 것인데요, 그런 알림이나 이벤트를 우리가 실행 중인 다른 서비스로 라우팅하는 거죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `service`, `request`, `React`

## 예시
`service`, `request`, `React`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **An Async Solution**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19099040#overview)
