# Understanding Controllers

## 개요
- NestJS의 **컨트롤러(controller)**가 클라이언트 요청을 받고 응답하는 방식을 실제 코드로 살펴보고, GET과 POST 요청 및 DTO(Data Transfer Object)를 직접 만들어보는 강의.

## 내용
### 컨트롤러란 무엇인가
- **컨트롤러(controllers)**는 웹 브라우저나 API 소비자(consumer) 같은 클라이언트로부터 들어오는 요청을 처리(handle)하고 응답(respond)하는 역할을 담당하는 모듈 또는 컴포넌트다.
- 컨트롤러는 Nest, Express 같은 현대적인 웹 프레임워크에서 가장 기본이 되는 단위(fundamental unit) 중 하나다.
- 애플리케이션 안에서 관심사(concerns)를 분리하는 핵심 역할을 하며, 요청 처리 로직을 조직적이고(organized) 유지보수하기 쉽게(maintainable) 만들어준다.
- `main.ts`가 `app module`을 호출하고, 이 `app module`이 컨트롤러와 서비스에 연결되어 있다는 구조를 다시 확인한다.

### 컨트롤러 생성 명령어
- 컨트롤러를 생성하는 명령어는 `nest generate controller <컨트롤러 이름>`이다.
- 다만 강의에서는 이 명령을 직접 실행하지 않는다. 컨트롤러마다 모듈(module)과 서비스(service) 파일이 함께 있어야 하는데, 이는 이후 영상에서 다룰 예정이기 때문이다.

### 기본 템플릿 분석
- `@nestjs/common`에서 `Controller`와 `Get` 데코레이터(decorator)를 가져온다(import). `@Controller()`는 해당 클래스가 컨트롤러임을 정의한다.
- `AppController` 클래스는 `AppService`와 연결되며, 생성자(constructor)를 통해 기본적으로 `AppService`가 주입(inject)된다.
- 요청을 정의할 때는 먼저 메서드 이름을 정하고, 그 메서드에 `@Get()` 같은 요청 데코레이터를 붙인다. 루트 엔드포인트(root endpoint)로 가면 이 메서드가 데이터를 반환한다.
- 애플리케이션을 `npm run start:dev`(개발 모드 실행 명령)로 실행한 뒤 Postman으로 루트 엔드포인트를 호출하면 `"Hello World"`가 반환된다.

### 새로운 GET 엔드포인트 추가 — ask-question
- `ask-question`이라는 새로운 엔드포인트를 위해 `askQuestion`이라는 메서드를 만들고 `@Get('ask-question')`을 붙인다.
- 이 메서드는 `"How are you?"`라는 질문 문자열을 반환하도록 작성한다.
- 저장 후 Postman에서 `ask-question` 엔드포인트를 호출하면 `"How are you?"`가 반환되는 것을 확인한다.

### 새로운 POST 엔드포인트 추가 — answer
- 프런트엔드로부터 데이터를 받아오고 싶을 때는 **POST** 요청을 사용한다.
- `answer`라는 엔드포인트를 만들고, 이를 처리할 `answer` 메서드를 작성한다. 이 메서드는 객체(object)를 반환하도록 한다.
- 사용자로부터 데이터를 받아야 할 때는 **DTO(Data Transfer Object)**를 만들어야 한다.
- DTO 파일은 항상 해당 모듈 폴더 안에 `dto`라는 폴더를 만들어 그 안에 위치시킨다. 강의에서는 `app.dto.ts` 파일을 생성했다.
- DTO는 클래스(class)로 작성한다(객체 리터럴로 작성해도 되지만 강의에서는 클래스를 사용). `export class AnswerDto`를 정의하고, 이 DTO는 `answer` 값 하나만 가진다.
- 컨트롤러에서 요청 본문(body)으로부터 데이터를 받을 때는 `@Body()` 데코레이터를 사용하며, 파라미터 타입으로 앞서 정의한 `AnswerDto`를 지정한다.
- Postman에서 `answer` 엔드포인트로 POST 요청을 보낼 때, body를 JSON으로 설정하고 `{ "answer": "I'm fine" }` 형태로 값을 담아 전송(Send)하면, 컨트롤러가 반환하도록 정의한 데이터를 그대로 응답받는다.
- GET, POST 외에도 patch, delete 같은 메서드가 있으며 이는 다음 영상들에서 다룰 예정이라고 언급한다.

## 예시
```typescript
// app.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { AnswerDto } from './dto/app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ask-question')
  askQuestion(): string {
    return 'How are you?';
  }

  @Post('answer')
  answer(@Body() getAnswerDto: AnswerDto) {
    return getAnswerDto;
  }
}
```

```typescript
// dto/app.dto.ts
export class AnswerDto {
  answer: string;
}
```

```json
// Postman POST /answer 요청 body (JSON)
{
  "answer": "I'm fine"
}
```

## 요약
- 컨트롤러는 클라이언트 요청을 받아 처리하고 응답을 반환하는 역할을 하며, `@Controller()` 데코레이터로 정의한다.
- `@Get()`, `@Post()` 같은 데코레이터를 메서드에 붙여 특정 엔드포인트에 연결한다.
- POST 요청처럼 클라이언트로부터 데이터를 받아야 할 때는 DTO(Data Transfer Object)를 정의하고 `@Body()` 데코레이터로 요청 본문을 받는다.
- DTO 파일은 관례상 모듈 폴더 안의 `dto` 폴더에 위치시킨다.
- 다음 영상에서는 쿼리 파라미터(query parameters)를 컨트롤러에서 추출하는 방법을 다룬다.
