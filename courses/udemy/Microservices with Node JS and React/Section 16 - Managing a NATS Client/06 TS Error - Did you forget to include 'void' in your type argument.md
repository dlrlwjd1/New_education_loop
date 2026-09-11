# TS Error - Did you forget to include 'void' in your type argument

## 개요
- TS Error - Did you forget to include 'void' in your type argument In the upcoming lecture, we will be returning a promise in our natsWrapper class. A small update is required to deal with a TS error you will see: Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'? In src/nats-wrapper.ts…

## 내용
### 자막·본문 기반 핵심 내용
- TS Error - Did you forget to include 'void' in your type argument In the upcoming lecture, we will be returning a promise in our natsWrapper class. A small update is required to deal with a TS error you will see: Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'? In src/nats-wrapper.ts…
- return new Promise<void>((resolve, reject) => { this._client!.on('connect', () => { console.log('Connected to NATS'); resolve();

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `TS`, `promise`, `class`, `nats`, `nats-wrapper.ts`

## 예시
`TS`, `promise`, `class`, `nats`, `nats-wrapper.ts`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **TS Error - Did you forget to include 'void' in your type argument**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/27112490#overview)
