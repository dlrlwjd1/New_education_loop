# Mongoose Pre-Save Hooks

## 개요
- 그냥 await 어쩌고저쩌고 하는 대신 mongoose가 어떤 상황인지 파악하게 하는 대신 await 호출이나 다른 작업을 해야 해요

## 내용
### 자막·본문 기반 핵심 내용
- 그냥 await 어쩌고저쩌고 하는 대신 mongoose가 어떤 상황인지 파악하게 하는 대신 await 호출이나 다른 작업을 해야 해요
- 보다시피 이 함수는 async mongoose로 표시했어요 엑스프레스는 옛날 방식과 아주 비슷해요
- Mongoose는 비동기성, await 구문을 크게 지원하진 않아요 비동기성 코드를 처리하는 대신에요 콜백 함수 안에서 실행하길 원하는 비동기성 코드요
- Mongoose에 구현된 미들웨어 기능이죠 문서를 데이터베이스에 저장하려고 할 때마다 이 기능을 실행해요

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Mongoose`, `async`, `await`, `JSON`

## 예시
`Mongoose`, `async`, `await`, `JSON`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Mongoose Pre-Save Hooks**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19119682#overview)
