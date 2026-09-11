# Creating Services

## 개요
- NestJS에서 **서비스(services)**가 무엇이고 왜 필요한지 설명하고, `nest generate service` 명령으로 새 서비스를 만들어 컨트롤러에 연결해 두 숫자를 더하는 기능을 직접 구현해보는 강의.

## 내용
### 서비스란 무엇인가
- 서비스는 애플리케이션의 기본 구성 요소(fundamental building block)이며, 비즈니스 로직(business logic)을 컨트롤러로부터 분리하는 데 핵심적인 역할을 한다.
- 서비스는 애플리케이션의 로직을 캡슐화(encapsulate)하고, 작업을 수행하며, 데이터베이스나 다른 외부 서비스와 상호작용하는 데 사용된다.
- 기존 `app.controller`는 `app.service`로부터 응답을 받아 반환하고 있었다 — 즉 서비스가 로직을 담고, 이 로직을 컨트롤러에서 호출하는 구조다.
- 하나의 컨트롤러에는 여러 개의 서비스가 연결될 수 있다.

### 새 서비스 생성 명령어
- 서비스를 생성하는 명령은 컨트롤러를 생성할 때와 비슷하다. `nest generate service <서비스 이름>` 또는 축약형으로 `nest g service <서비스 이름>`을 사용한다.
- 강의에서는 두 숫자를 받아 합(sum)을 반환하는 `sum-service`라는 서비스를 생성했다.
- 명령을 실행하면 서비스 관련 두 개의 파일(서비스 파일과 테스트용 spec 파일)이 자동으로 생성되고, `app.module`도 자동으로 업데이트된다.

### 서비스에 메서드 작성하기
- 새로 생성된 서비스 파일 안에 `getSum`이라는 메서드를 작성한다. 이 메서드는 두 값(`a`, `b`)을 받아 그 합을 반환한다.
- 서비스 클래스 이름은 관례에 맞게 대문자로 시작하도록 정리한다.

### 컨트롤러에서 서비스 사용하기
- 컨트롤러의 생성자(constructor)에 기존 `appService`와 마찬가지로 `sumService`를 파라미터로 추가해 주입(inject)한다.
- 새로운 GET 요청을 만들고 엔드포인트는 `sum`으로 지정한다. 메서드 이름은 `getSum`으로 짓는다.
- 쿼리 파라미터로 `num1`, `num2`를 받기 위해 `@Query()` 데코레이터를 사용해 각각의 값을 `a`, `b`라는 변수로 받는다.
- 응답을 별도로 가공하지 않고 `return this.sumService.getSum(a, b);` 형태로 서비스의 결과를 그대로 반환한다.

### 문자열 vs 정수 처리 문제
- `npm run start:dev`로 서버를 실행한 뒤 Postman에서 `sum?num1=10&num2=4`로 GET 요청을 보내면, 예상한 `14`가 아니라 `104`가 반환된다.
- 원인은 쿼리 파라미터로 받은 값이 **문자열(string)**로 처리되기 때문에, 덧셈이 아니라 문자열 연결(concatenation)이 일어난 것이다.
- 이를 해결하기 위해 값을 더하기 전에 **정수로 변환(parse to integer)**해야 한다. 두 값 모두에 대해 정수 변환을 적용한다.
- 수정 후 다시 요청을 보내면 올바른 값인 `14`가 반환된다.

### 서비스 생성의 의의
- `nest generate` 명령으로 서비스를 만들면 기존 컨트롤러나 새 컨트롤러에 붙여서 그 기능을 제공할 수 있다.
- 이는 코드에 모듈성(modularity)을 부여하는 효과도 있다.

## 예시
```bash
# 서비스 생성 명령 (축약형 포함)
nest generate service sum-service
nest g service sum-service
```

```typescript
// sum-service/sum-service.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {
  getSum(a: number, b: number): number {
    return a + b;
  }
}
```

```typescript
// app.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SumServiceService } from './sum-service/sum-service.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sumService: SumServiceService,
  ) {}

  @Get('sum')
  getSum(@Query('num1') num1: string, @Query('num2') num2: string) {
    const a = parseInt(num1);
    const b = parseInt(num2);
    return this.sumService.getSum(a, b);
  }
}
```

```
GET /sum?num1=10&num2=4
# parseInt 적용 전: "104" (문자열 연결)
# parseInt 적용 후: 14 (정상적인 숫자 덧셈)
```

## 요약
- 서비스는 비즈니스 로직을 캡슐화해 컨트롤러로부터 분리하는 역할을 하며, `nest generate service <이름>` 명령으로 생성한다.
- 새 서비스는 컨트롤러의 생성자에 주입해 사용하며, 하나의 컨트롤러가 여러 서비스를 가질 수 있다.
- 쿼리 파라미터로 받은 값은 문자열이므로, 숫자 연산이 필요하면 반드시 정수(또는 숫자)로 변환해야 한다.
- 다음 영상에서는 NestJS에서 프로바이더(providers)가 무엇이고 어떻게 사용하는지를 다룬다.
