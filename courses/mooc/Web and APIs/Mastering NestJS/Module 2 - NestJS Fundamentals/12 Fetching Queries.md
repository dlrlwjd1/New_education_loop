# Fetching Queries

## 개요
- `@Query()` 데코레이터(decorator)로 URL의 쿼리 파라미터(query parameters)를 추출하는 방법을 익히고, `@Param()`과 `@Query()`를 함께 사용해 라우트 파라미터와 쿼리 파라미터를 동시에 다루는 방법을 실습하는 강의.

## 내용
### `@Query()` 데코레이터란
- NestJS에서 `@Query()` 데코레이터는 들어오는 HTTP 요청에서 쿼리 파라미터를 추출할 때 사용한다. 보통 `@Get()` 데코레이터와 함께 사용되어 GET 요청을 처리하고 쿼리 파라미터를 기준으로 데이터를 조회한다.
- `@Query()`는 `@Param()` 데코레이터와 동작 방식이 비슷하지만, URL 파라미터(params) 대신 URL 쿼리 파라미터를 가져온다는 점이 다르다.
- 쿼리 파라미터는 보통 URL에서 물음표(`?`) 뒤에 붙고 앰퍼샌드(`&`) 기호로 구분된다. 예를 들어 URL이 `?name=값&id=값` 형태라면 `name`과 `id`가 쿼리 파라미터로 간주된다.
- `@Query()` 데코레이터의 인자에 `name`이나 `id` 같은 이름을 지정하면 해당 값을 추출할 수 있다.

### 실습 — 이름으로 쿼리 파라미터 하나 추출하기
- 컨트롤러 파일에 `@Get()` 데코레이터를 붙인 `fetchQuery`라는 메서드를 만든다.
- 메서드 안에서 `@Query()` 데코레이터의 인자로 가져오고 싶은 쿼리 이름(`name`)을 지정하고, 그 값을 저장할 프로퍼티를 선언한다.
- 그리고 해당 쿼리 파라미터 값(`name`)을 표시하는 문자열 메시지를 반환한다.
- Postman에서 URL에 쿼리 파라미터 `name`과 값을 붙여서 요청을 보내면, 쿼리에서 추출한 값이 응답으로 돌아온다.

### 실습 — 라우트 파라미터와 쿼리 파라미터 함께 사용하기
- 이번에는 GET 핸들러에 동적 ID(`:id`)를 추가한다. 메서드 안에서 `@Param('id')` 데코레이터로 ID 값을 저장할 `id` 프로퍼티(문자열 타입)를 선언한다.
- 여기에 `@Query()` 데코레이터를 하나 더 추가한다. 인자로 `age`를 지정하고, 값을 저장할 `age` 프로퍼티는 숫자(number) 타입으로 선언한다.
- 프로퍼티 타입을 `number`로 지정했더라도, `@Query()` 데코레이터는 기본적으로 파라미터 값을 문자열(string)로 추출한다. 이는 HTTP 쿼리 파라미터가 URL 안에서 항상 문자열로 표현되는 특성 때문이다. 이 부분의 타입 변환은 NestJS가 처리해준다.
- 이제 `id` 값을 가진 `id` 프로퍼티, `name` 값을 가진 `name` 프로퍼티, `age` 값을 가진 `age` 프로퍼티를 담은 객체를 반환한다.
- Postman에서 라우트에 ID 파라미터로 `101`을 지정하고, `name` 쿼리와 그 값, `age` 쿼리와 그 값을 함께 설정해 요청을 보낸다. 응답으로 라우트 params 값과 쿼리 params 값을 모두 담은 객체가 반환되는 것을 확인할 수 있다.
- 이렇게 `@Query()` 데코레이터를 사용해 쿼리 파라미터 값을 가져올 수 있다.

## 예시
```typescript
// app.controller.ts (관련 부분)
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  fetchQuery(@Query('name') name: string): string {
    return `Query name value: ${name}`;
  }

  @Get(':id')
  fetchParamAndQuery(
    @Param('id') id: string,
    @Query('name') name: string,
    @Query('age') age: number,
  ) {
    return { id, name, age };
  }
}
```

## 요약
- `@Query()` 데코레이터는 URL의 쿼리 파라미터를 추출하며, `@Param()`과 사용 방식이 비슷하지만 대상이 라우트 params가 아니라 쿼리 params라는 점이 다르다.
- 쿼리 파라미터는 URL에서 `?` 뒤에 붙고 `&`로 구분된다.
- `@Query()`로 추출한 값은 프로퍼티 타입을 `number`로 지정해도 기본적으로 문자열로 추출되는데, 이는 HTTP 쿼리 파라미터가 URL 상에서 항상 문자열이기 때문이며 NestJS가 관련 타입 변환을 처리한다.
- `@Param()`과 `@Query()`를 같은 메서드에서 함께 사용하면, 라우트 파라미터와 쿼리 파라미터를 동시에 추출할 수 있다.
