# globalThis has no index signature TS Error

## 개요
- globalThis has no index signature TS Error In the upcoming lecture (or even earlier with the ticketing and orders services) you may end up seeing a TS error like this in your test/setup.ts file: Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.ts(7017) This is caused by a recent change in the…

## 내용
### 자막·본문 기반 핵심 내용
- globalThis has no index signature TS Error In the upcoming lecture (or even earlier with the ticketing and orders services) you may end up seeing a TS error like this in your test/setup.ts file: Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.ts(7017) This is caused by a recent change in the…
- To fix, find the following lines of code in src/test/setup.ts: declare global { namespace NodeJS { export interface Global { signin(): string[]; change to: declare global { var signin: (id?: string) => string[];

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `TS`, `NodeJS`, `interface`, `node library which is a dependency of ts-node-dev`, `setup.ts`, `signature.ts`

## 예시
`TS`, `NodeJS`, `interface`, `node library which is a dependency of ts-node-dev`, `setup.ts`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **globalThis has no index signature TS Error**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/27488410#overview)
