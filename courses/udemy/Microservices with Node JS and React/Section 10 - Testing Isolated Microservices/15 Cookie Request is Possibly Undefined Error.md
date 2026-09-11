# Cookie Request is Possibly Undefined Error

## 개요
- In your auth/src/routes/__test__ /singout.test.ts file, find the following code: expect(response.get('Set-Cookie')[0]).toEqual( 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly' And update it to look like this: const cookie = response.get("Set-Cookie"); if (!cookie) { throw new Error("Expected cookie but got undefined…

## 내용
### 자막·본문 기반 핵심 내용
- In your auth/src/routes/__test__ /singout.test.ts file, find the following code: expect(response.get('Set-Cookie')[0]).toEqual( 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly' And update it to look like this: const cookie = response.get("Set-Cookie"); if (!cookie) { throw new Error("Expected cookie but got undefined…
- Cookie Request is Possibly Undefined Error In the upcoming lecture, we will be creating our signout test. We need to make a small update in the code to deal with some changes in the Supertest type declarations. Older versions of the types used to specify that a get request for a cookie would return only a string[] rather than a string[…
- expect(cookie[0]).toEqual( "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Cookie`, `Request`, `Supertest`, `ts`, `response`, `session`, `singout.test.ts`

## 예시
`Cookie`, `Request`, `Supertest`, `ts`, `response`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Cookie Request is Possibly Undefined Error**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/45922973#overview)
