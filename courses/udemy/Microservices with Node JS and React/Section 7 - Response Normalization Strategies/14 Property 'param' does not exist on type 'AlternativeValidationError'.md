# Property 'param' does not exist on type 'AlternativeValidationError'

## 개요
- Property 'param' does not exist on type 'AlternativeValidationError' In the upcoming lecture, we will be formatting our validation errors in error-handler.ts. The express-validator library recently released a breaking v7 version where the ValidationError type is now a discriminated union: https://express-validator.github.io/docs/migrat…

## 내용
### 자막·본문 기반 핵심 내용
- Property 'param' does not exist on type 'AlternativeValidationError' In the upcoming lecture, we will be formatting our validation errors in error-handler.ts. The express-validator library recently released a breaking v7 version where the ValidationError type is now a discriminated union: https://express-validator.github.io/docs/migrat…
- if (error.type === 'field') { return { message: error.msg, field: error.path }; return res.status(400).send({ errors: formattedErrors });
- As well as renaming param to path https://express-validator.github.io/docs/migration-v6-to-v7#renamed-properties So, we'll need to update our conditional to add a check for an error of type field and use the new path property: if (err instanceof RequestValidationError) { const formattedErrors = err.errors.map((error) => {

### 구현 요소
- 강의에서 직접 언급하거나 사용하는 요소: `ts`, `express`, `https`, `github`, `error-handler.ts`

## 예시
`ts`, `express`, `https`, `github`, `error-handler.ts`가 등장하는 설정·코드 위치를 찾아 강의와 같은 순서로 확인한다.

## 요약
- 이 강의의 중심 주제는 **Property 'param' does not exist on type 'AlternativeValidationError'**이며, 위 항목은 실제 강의 자막 또는 본문에서 추린 내용이다.
- [원본 강의](https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/37727290#overview)
