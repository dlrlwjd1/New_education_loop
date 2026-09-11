# Controller Fundamentals (Headers)

## 개요
- NestJS가 라우트 핸들러(route handler)에서 반환하는 데이터 타입만 보고 응답 헤더(header)를 자동으로 추론(infer)해 설정해주는 동작을 확인하고, `@Header()` 데코레이터(decorator)로 헤더를 직접 지정하는 방법도 함께 다루는 강의.

## 내용
### NestJS는 응답 본문만 반환하면 된다
- 이전 강의에서 GET 핸들러가 문자열(string)을 반환하는 예시를 다뤘는데, 이는 실제 응답 객체(response object)가 아니라 문자열 응답이다.
- Express.js에서는 메서드 안에 요청(request)과 응답(response) 객체가 있어서 개발자가 직접 응답을 클라이언트로 보내야 했다.
- 반면 NestJS에서는 그냥 응답의 본문(body)만 반환(return)하면 된다. NestJS가 반환된 데이터를 보고 자동으로 적절한 헤더를 결정하고 설정해주기 때문이다.
- 이는 개발자가 헤더를 명시적으로 설정할 필요 없이 응답 내용(content)에만 집중할 수 있게 해주는 기능이다.

### 문자열 반환 시 헤더 확인
- 현재 예시에서는 텍스트(문자열) 응답을 반환하고 있다.
- 브라우저 개발자 도구(developer tool)의 Network 탭에서 페이지를 새로고침한 뒤 해당 요청을 확인하면, 헤더 섹션에 `Content-Type`이 `text/html`로 설정되어 있는 것을 볼 수 있다.
- 즉, 문자열이나 텍스트를 반환하면 NestJS가 자동으로 `Content-Type` 헤더를 `text/html`로 추론해 설정한다.

### 객체 반환 시 헤더 확인
- 반환 타입을 `any`로 바꾸고, `message`라는 속성(property)에 문자열 값을 담은 객체(object)를 반환하도록 변경한다.
- 결과를 확인하면 해당 객체가 그대로 출력되는데, 응답 헤더를 보면 `Content-Type`이 자동으로 `application/json`으로 설정되어 있다.
- 이처럼 NestJS는 반환되는 데이터를 보고 응답을 추론해 헤더를 알맞게 설정해주는데, 이는 NestJS의 훌륭한 기능 중 하나다.

### `@Header()` 데코레이터로 헤더 직접 지정하기
- 여전히 응답 헤더를 명시적으로 설정하고 싶다면 `Header` 데코레이터를 사용하면 된다. 예를 들어 `Content-Type`을 `text/html`로 지정할 수 있다.
- 이렇게 지정하면 이 헤더가 응답에 추가되며, NestJS가 자동으로 추론한 값을 덮어쓴다(overturn/override)고 볼 수 있다.
- 실제로 응답이 JSON임에도 불구하고, 브라우저를 새로고침해 확인하면 `Content-Type` 헤더가 `text/html`로 설정되어 있는 것을 볼 수 있다.
- 이것이 NestJS에서 헤더를 제어하는 방법이며, 강의 전체에 걸쳐 다양한 데코레이터를 계속 보게 될 것이다. 데코레이터가 NestJS의 핵심이며, 이를 통해 명시적인 코드 작성 없이 데코레이터 하나로 많은 것을 처리할 수 있다.

## 예시
```typescript
// products.controller.ts
import { Controller, Get, Header } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(): string {
    // Content-Type: text/html 로 자동 추론됨
    return 'products controller';
  }

  @Get('object')
  getProductsObject(): any {
    // Content-Type: application/json 으로 자동 추론됨
    return { message: 'string value' };
  }

  @Get('object-with-header')
  @Header('Content-Type', 'text/html')
  getProductsObjectWithHeader(): any {
    // 응답은 JSON이지만 @Header()로 Content-Type을 text/html로 덮어씀
    return { message: 'string value' };
  }
}
```

## 요약
- NestJS는 Express.js처럼 요청/응답 객체를 직접 다루지 않고, 라우트 핸들러가 응답 본문만 반환하면 된다.
- NestJS는 반환되는 데이터 타입을 보고 `Content-Type` 헤더를 자동으로 추론한다. 문자열은 `text/html`, 객체는 `application/json`으로 설정된다.
- `@Header()` 데코레이터를 사용하면 헤더를 명시적으로 지정할 수 있으며, 이는 NestJS의 자동 추론 값을 덮어쓴다.
- 브라우저 개발자 도구의 Network 탭에서 응답 헤더를 직접 확인할 수 있다.
- NestJS는 데코레이터 기반으로 동작하며, 앞으로도 다양한 데코레이터를 통해 명시적인 코드 작성을 줄이는 방식이 계속 등장한다.
