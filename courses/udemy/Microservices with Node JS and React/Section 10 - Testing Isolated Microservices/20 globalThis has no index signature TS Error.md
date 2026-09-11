# globalThis has no index signature TS Error

## 개요
- globalThis has no index signature TS Error In the upcoming lecture (and later with the ticketing, orders and payments services) you may end up seeing a TS error like this in your test/setup.ts file: Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.ts(7017) To fix, find the following lines of…

## 내용
### 자막·본문 기반 핵심 내용
- globalThis has no index signature TS Error In the upcoming lecture (and later with the ticketing, orders and payments services) you may end up seeing a TS error like this in your test/setup.ts file: Element implicitly has an 'any' type because type 'typeof globalThis' has no index signature.ts(7017) To fix, find the following lines of…
- declare global { namespace NodeJS { export interface Global { signin(): Promise<string[]>; change to: declare global { var signin: () => Promise<string[]>; Also, we need to add another conditional to check for the cookie. Find this line of code: const cookie = response.get('Set-Cookie'); return cookie; And change to this:
- const cookie = response.get("Set-Cookie"); if (!cookie) { throw new Error("Failed to get cookie from response"); return cookie;

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `TS`, `NodeJS`, `interface`, `Promise`, `cookie`, `response`, `setup.ts`, `signature.ts`

## 예시
`TS`, `NodeJS`, `interface`, `Promise`, `cookie`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **globalThis has no index signature TS Error**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/27663356#overview)
