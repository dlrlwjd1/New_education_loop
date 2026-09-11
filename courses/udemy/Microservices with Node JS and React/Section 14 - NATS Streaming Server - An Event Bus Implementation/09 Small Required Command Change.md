# Small Required Command Change

## 개요
- Small Required Command Change You must make this change for the following videos to work correctly. In the upcoming lecture, I will show typing rs in my terminal to restart the ts-node-dev instance. The ts-node-dev library recently released a change that disables this restart behavior by default. To enable it, you need to update the tw…

## 내용
### 자막·본문 기반 핵심 내용
- Small Required Command Change You must make this change for the following videos to work correctly. In the upcoming lecture, I will show typing rs in my terminal to restart the ts-node-dev instance. The ts-node-dev library recently released a change that disables this restart behavior by default. To enable it, you need to update the tw…
- Update the two scripts to the following: "scripts": { "publish": "ts-node-dev --rs --notify false src/publisher.ts", "listen": "ts-node-dev --rs --notify false src/listener.ts" Just add in the --rs to each command.

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `ts`, `json`, `publisher`, `listener`, `package.json`, `publisher.ts`, `listener.ts`

## 예시
`ts`, `json`, `publisher`, `listener`, `package.json`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Small Required Command Change**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/20742842#overview)
