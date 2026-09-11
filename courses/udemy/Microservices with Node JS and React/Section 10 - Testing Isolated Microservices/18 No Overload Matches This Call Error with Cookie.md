# No Overload Matches This Call Error with Cookie

## 개요
- No Overload Matches This Call Error with Cookie In the upcoming lecture, we will be updating our current-user test. Similar to other Cookie types issues we've seen, we will have to make another minor change. IMPORTANT - most of this code will eventually be removed by the end of the Auth Helper Function lecture. In auth/src/routes/__tes…

## 내용
### 자막·본문 기반 핵심 내용
- No Overload Matches This Call Error with Cookie In the upcoming lecture, we will be updating our current-user test. Similar to other Cookie types issues we've seen, we will have to make another minor change. IMPORTANT - most of this code will eventually be removed by the end of the Auth Helper Function lecture. In auth/src/routes/__tes…
- if (!cookie) { throw new Error("Cookie not set after signup"); const response = await request(app) .get("/api/users/currentuser") .set("Cookie", cookie) .expect(200); expect(response.body.currentUser.email).toEqual("test@test.com");

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `Cookie`, `ts`, `response`, `await`, `request`, `api`, `current-user.test.ts`

## 예시
`Cookie`, `ts`, `response`, `await`, `request`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **No Overload Matches This Call Error with Cookie**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/45923067#overview)
