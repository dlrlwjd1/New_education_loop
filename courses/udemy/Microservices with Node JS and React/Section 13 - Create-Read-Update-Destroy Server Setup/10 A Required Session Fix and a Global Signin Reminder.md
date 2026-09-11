# A Required Session Fix and a Global Signin Reminder

## 개요
- A Required Session Fix and a Global Signin Reminder In the upcoming lecture, we will be updating our src/test/setup.ts file. As a reminder, your global signin declaration should look like this after the refactor: declare global { var signin: () => string[]; One small fix is required to return the cookie to prevent our tests from failing:

## 내용
### 자막·본문 기반 핵심 내용
- A Required Session Fix and a Global Signin Reminder In the upcoming lecture, we will be updating our src/test/setup.ts file. As a reminder, your global signin declaration should look like this after the refactor: declare global { var signin: () => string[]; One small fix is required to return the cookie to prevent our tests from failing:
- Find the return of the global.signin method and change this: return [`express:sess=${base64}`]; to this: return [`session=${base64}`];

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Session`, `ts`, `cookie`, `express`, `setup.ts`

## 예시
`Session`, `ts`, `cookie`, `express`, `setup.ts`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **A Required Session Fix and a Global Signin Reminder**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/27663516#overview)
