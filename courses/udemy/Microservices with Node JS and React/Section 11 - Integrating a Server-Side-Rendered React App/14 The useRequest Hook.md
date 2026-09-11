# The useRequest Hook

## 개요
- React 후크의 일반적인 규칙을 따를 수 있습니다 그 안에 React request와 에러가 있는 배열을 리턴하는 하지만 이 경우엔 그냥 개체를 사용하는 게 더 말이 되죠 특정 방식으로 정렬된 값에 의존하기 보다는요

## 내용
### 자막·본문 기반 핵심 내용
- React 후크의 일반적인 규칙을 따를 수 있습니다 그 안에 React request와 에러가 있는 배열을 리턴하는 하지만 이 경우엔 그냥 개체를 사용하는 게 더 말이 되죠 특정 방식으로 정렬된 값에 의존하기 보다는요
- 예를 들어 put 패치나 post에는 모두 body가 들어가지만 get request에는 body가 들어가지 이 사용자 요청 후크에 입력으로 그걸 제공할 겁니다 함께 만들 거예요
- get request, post 패치 등등이요 그럼 요청의 본체나 정보가 요청이 지원할 경우 전송되죠
- 그런 다음 결국엔 그 오류 같은 걸 반환하도록 해야죠 또한 Due request라는 함수도 생성할 것입니다 이 함수는 요청을 스스로 수행하는 어떤 상태를 만들 거예요 Ayres라고 부를게요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `request`, `React`, `await`

## 예시
`request`, `React`, `await`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **The useRequest Hook**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19122222#overview)
