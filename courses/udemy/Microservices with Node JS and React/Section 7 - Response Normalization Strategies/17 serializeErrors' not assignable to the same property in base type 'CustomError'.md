# serializeErrors' not assignable to the same property in base type 'CustomError'

## 개요
- serializeErrors' not assignable to the same property in base type 'CustomError' When adding the serializeErrrors function in the next lecture you will see the following error: [auth] src/errors/request-validation-error.ts(14,3): error TS2416: Property 'serializeErrors' in type 'RequestValidationError' is not assignable to the same prop…

## 내용
### 자막·본문 기반 핵심 내용
- serializeErrors' not assignable to the same property in base type 'CustomError' When adding the serializeErrrors function in the next lecture you will see the following error: [auth] src/errors/request-validation-error.ts(14,3): error TS2416: Property 'serializeErrors' in type 'RequestValidationError' is not assignable to the same prop…
- This is caused by the modifications we previously made in regard to express-validator v7. The function will need a small change to return an object with only the message: serializeErrors() { return this.errors.map((err) => { if (err.type === 'field') { return { message: err.msg, field: err.path }; return { message: err.msg };

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `request`, `ts`, `express`, `request-validation-error.ts`

## 예시
`request`, `ts`, `express`, `request-validation-error.ts`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **serializeErrors' not assignable to the same property in base type 'CustomError'**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/37727992#overview)
