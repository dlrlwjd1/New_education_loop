# Modules and Service Scopes

## 개요
- NestJS의 **모듈(modules)**이 무엇인지, 모듈들이 어떻게 트리(tree) 형태로 연결되는지를 설명하고, `nest generate`로 새 모듈·컨트롤러·서비스를 처음부터 만들어 이름을 받아 인사말을 반환하는 기능을 직접 구현해보는 강의.

## 내용
### 모듈이란 무엇인가
- 모듈(modules)은 컨트롤러(controller), 서비스(services), 프로바이더(providers) 같은 관련된 컴포넌트들을 조직하고 캡슐화(encapsulate)하는 방법이다.
- 모듈은 애플리케이션을 작고 관리 가능한 단위(small and manageable units)로 구조화해, 더 모듈화되고(modular) 유지보수하기 쉽게(maintainable) 만들어준다.
- 모듈은 자신에게 속한 컴포넌트들의 스코프(scope)를 정의하며, 의존성을 가져오고(import) 내보낼(export) 수 있어 코드 재사용(code reuse)과 관심사 분리(separation of concerns)를 가능하게 한다.

### 모듈 스코프 — 트리 구조
- NestJS에는 항상 루트 모듈(root module)인 `AppModule`이 있다.
- 이 `AppModule`은 필요에 따라 여러 하위 모듈들과 연결된다. 예를 들어 `AppModule`이 계산이나 데이터를 위해 모듈1, 모듈2에 의존할 수 있고, 모듈2는 다시 모듈3, 모듈4에 의존할 수 있다.
- 이런 구조를 트리(tree)로 그릴 수 있으며, 모듈뿐 아니라 컨트롤러와 서비스도 이런 방식으로 서로 공유(share)될 수 있다.

### 새 모듈·컨트롤러·서비스 생성하기
- 새 모듈을 만드는 명령은 `nest generate module <이름>`이다. 강의에서는 `say-name`이라는 이름으로 모듈을 생성했다.
- 명령을 실행하면 `say-name` 폴더가 생성되고, 이 모듈이 `app.module`에 자동으로 import된다 — 이것이 바로 루트 모듈에 하위 모듈이 연결되는 실제 모습이다.
- 같은 방식으로 `nest generate controller say-name`을 실행하면 컨트롤러가 생성되고, 자동으로 `say-name` 모듈의 컨트롤러로 등록된다.
- `nest generate service say-name`을 실행하면 서비스도 생성되고, 자동으로 해당 모듈의 프로바이더로 등록된다.

### 새 엔드포인트 만들기 — say-my-name
- 새로 생성된 `say-name` 컨트롤러에 엔드포인트를 정의한다. 처음에는 GET 요청으로 `sayMyName`이라는 메서드를 만들어 이름을 반환하도록 시도한다.
- 이후 GET 대신 **POST** 요청으로 바꿔, 클라이언트로부터 이름 데이터를 받아 처리하도록 변경한다.
- 요청 바디에서 데이터를 받기 위해 `@Body()`를 사용하며, 이를 위해 **DTO**가 필요하다.
- `say-name` 모듈 폴더 안에 `dto` 폴더를 만들고 `say-name.dto.ts` 파일을 생성한다. 이전에 만든 DTO(answer용)의 구조를 참고해, `name` 필드를 가진 `SayNameDto` 클래스를 정의한다.
- 컨트롤러에서 `@Body() sayNameDto: SayNameDto`로 데이터를 받고, `sayNameDto.name` 값을 이용해 `"My name is <이름>"` 형태의 문자열을 반환하도록 작성한다.
- Postman에서 POST 요청 body에 `name` 키로 값을 담아 보내면(예: `name: "ankit"`), 그 이름이 반영된 응답을 받는다.

### 서비스로 로직 옮기기
- 컨트롤러 안에 직접 작성했던 이름 처리 로직을 **서비스**로 옮긴다. 서비스의 메서드는 body 전체가 아니라 이름(name) 값만 받아서 동일한 처리를 하도록 만든다.
- 컨트롤러의 생성자(constructor)에 `private readonly sayNameService: SayNameService`를 선언해 서비스를 주입한다.
- 컨트롤러 메서드 내부에서 직접 로직을 처리하는 대신 `this.sayNameService.sayMyName(sayNameDto.name)`을 호출하고 그 결과를 반환하도록 수정한다.
- 이렇게 리팩터링한 뒤 다시 요청을 보내도 동일한 결과를 확인할 수 있다.
- 이것이 새로운 모듈을 만들고, 그 안에 컨트롤러와 서비스를 붙여나가는 전체 과정이다.

## 예시
```bash
# 새 모듈, 컨트롤러, 서비스 생성
nest generate module say-name
nest generate controller say-name
nest generate service say-name
```

```typescript
// say-name/dto/say-name.dto.ts
export class SayNameDto {
  name: string;
}
```

```typescript
// say-name/say-name.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class SayNameService {
  sayMyName(name: string): string {
    return `My name is ${name}`;
  }
}
```

```typescript
// say-name/say-name.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { SayNameService } from './say-name.service';
import { SayNameDto } from './dto/say-name.dto';

@Controller('say-name')
export class SayNameController {
  constructor(private readonly sayNameService: SayNameService) {}

  @Post()
  sayMyName(@Body() sayNameDto: SayNameDto) {
    return this.sayNameService.sayMyName(sayNameDto.name);
  }
}
```

```json
// POST /say-name 요청 body
{ "name": "ankit" }
// → "My name is ankit"
```

## 요약
- 모듈은 컨트롤러, 서비스, 프로바이더를 조직하는 단위이며, `AppModule`을 루트로 하는 트리 구조로 연결된다.
- `nest generate module/controller/service <이름>` 명령으로 새 모듈과 그에 속한 컨트롤러·서비스를 빠르게 생성하고 자동으로 연결할 수 있다.
- 요청 바디에서 데이터를 받으려면 DTO를 정의하고 `@Body()`로 받으며, 실제 처리 로직은 컨트롤러가 아니라 서비스에 위임하는 것이 바람직하다.
- 다음 영상에서는 NestJS에서 미들웨어(middleware)를 사용하는 방법을 다룬다.
