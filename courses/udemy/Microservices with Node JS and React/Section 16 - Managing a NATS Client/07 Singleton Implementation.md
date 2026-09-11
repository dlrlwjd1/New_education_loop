# Singleton Implementation

## 개요
- 요즘 같은 시대엔 별로죠? 호출해서 연결하면 훨씬 낫겠죠 그런 다음 async await 구문을 사용하는 거예요 Mongoose Connect에서 사용했던 것처럼요

## 내용
### 자막·본문 기반 핵심 내용
- 요즘 같은 시대엔 별로죠? 호출해서 연결하면 훨씬 낫겠죠 그런 다음 async await 구문을 사용하는 거예요 Mongoose Connect에서 사용했던 것처럼요
- 그러니까 이 콜백 함수를 어떻게든 비틀어 전환하는 겁니다 대신 async, await 구문을 사용할 수 있도록요
- 조금 전에 이것과 유사한 걸 했던 게 기억나실 거예요 기본적으로 콜백 함수를 promise로 래핑한 다음 그 promise를 호출백 안에서 수동으로 해결했어요
- 이걸 커넥트, 함수라 부르고 async, await 구문을 사용할 거예요 그러기 위해서 인덱스로 돌아가죠

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `TypeScript`, `Mongoose`, `async`, `await`, `promise`, `HTTP`, `GitHub`

## 예시
`TypeScript`, `Mongoose`, `async`, `await`, `promise`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Singleton Implementation**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19485324#overview)
