# Heads Up Regarding Some Mongoose TS Errors

## 개요
- Heads Up Regarding Some Mongoose TS Errors While writing our tests over the next section you will see a Value of type 'typeof ObjectId' is not callable. Did you mean to include 'new'? error appear many times (We first saw this error occur a few sections ago). This is caused by updates in the Mongoose library and its typings starting wi…

## 내용
### 자막·본문 기반 핵심 내용
- Heads Up Regarding Some Mongoose TS Errors While writing our tests over the next section you will see a Value of type 'typeof ObjectId' is not callable. Did you mean to include 'new'? error appear many times (We first saw this error occur a few sections ago). This is caused by updates in the Mongoose library and its typings starting wi…
- As the error message suggests, you will just need to add the new keyword anywhere mongoose.Types.ObjectId() is used. const orderId = new mongoose.Types.ObjectId().toHexString();

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Mongoose`, `TS`

## 예시
`Mongoose`, `TS`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Heads Up Regarding Some Mongoose TS Errors**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/33158102#overview)
