# Rendering Template on Server

## 개요
- NestJS 서버에서 **EJS 템플릿**을 렌더링(render)하는 기본 방법을 다루는 강의. `@nestjs/platform-express`와 `ejs` 패키지를 설치하고, `@Render()` 데코레이터와 `main.ts`의 뷰 엔진 설정을 통해 첫 홈 템플릿을 화면에 표시한다.

## 내용
### 패키지 설치
- 템플릿을 렌더링하려면 두 가지 패키지가 필요하다. `npm install @nestjs/platform-express` 와 템플릿 엔진인 `ejs`를 설치한다.

### views 폴더와 home.ejs 생성
- 루트 디렉터리 안에 `views` 폴더를 만들고 그 안에 `home.ejs` 파일을 정의한다.
- 기본적인 HTML 보일러플레이트(boilerplate)를 작성하고, 타이틀을 "My Store"로 바꾼 뒤, `<h1>`과 함께 `message` 변수를 출력하는 EJS 스크립틀릿(scriptlet)을 넣는다.

### AppController에서 GET 라우트와 @Render 데코레이터
- `AppController`는 애플리케이션이 렌더링될 때 가장 먼저 부트스트랩(bootstrap)되는 컨트롤러이므로, 홈 페이지 라우트를 여기에 둔다.
- 경로를 `mystore`로 설정한 GET 라우트 핸들러 `renderPage` 메서드를 정의한다.
- 이 메서드는 `{ message: 'Welcome to home page' }` 형태의 객체를 반환하며, 이 값이 EJS 파일에 정의된 `message` 변수로 전달된다.
- 순수 Node.js에서는 `app.get()` 메서드로 라우트를 정의하고 `response.render()` 메서드로 템플릿을 렌더링하는 방식을 사용하지만, NestJS에서는 `@Render('home')` 데코레이터 한 줄이면 충분하다.
- `@Render` 데코레이터는 뷰 템플릿을 감지해 렌더링하도록 만들어져 있지만, 템플릿이 위치한 디렉터리 경로까지 자동으로 알지는 못한다. 그래서 경로 설정은 `main.ts`에서 별도로 해줘야 한다.

### main.ts에서 뷰 엔진 설정
- `NestFactory.create()`에 제네릭 타입(generic type)으로 `NestExpressApplication`을 지정한다. 이 제네릭 타입을 사용하면 Express 프레임워크와 관련된 하위(underlying) HTTP 기능을 사용할 수 있고 더 높은 타입 안전성(type safety)을 제공한다.
- `app.setBaseViewsDir()` 메서드로 애플리케이션이 뷰 템플릿을 찾을 디렉터리(하나 또는 여러 개)를 지정한다.
- `join()` 메서드를 사용해 현재 디렉터리(`__dirname`)에서 위로 이동한 뒤 `views` 디렉터리를 가리키는 경로를 만든다.
- 템플릿 엔진을 지정하는 것도 필요하므로 `app.setViewEngine('ejs')`로 엔진을 EJS로 설정한다.
- 순수 Express에서는 동일한 로직을 `app.set()` 메서드로 작성할 수 있으며, NestJS에서도 `set` 메서드를 그대로 사용할 수 있지만, `NestExpressApplication` 제네릭 타입을 지정하면 더 타입에 특화된(type specific) 메서드들을 쓸 수 있어 그 방식을 사용한다고 설명한다.

### 확인
- 브라우저에서 `localhost:3000/mystore` 경로로 접속하면 `home.ejs` 템플릿이 렌더링되며 환영 메시지(welcome message)가 표시된다.

## 예시
```html
<!-- views/home.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>My Store</title>
</head>
<body>
  <h1><%= message %></h1>
</body>
</html>
```

```typescript
// app.controller.ts
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('mystore')
  @Render('home')
  renderPage() {
    return { message: 'Welcome to home page' };
  }
}
```

```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  await app.listen(3000);
}
bootstrap();
```

## 요약
- 템플릿 렌더링을 위해 `@nestjs/platform-express`와 `ejs` 패키지를 설치하고, `views` 폴더에 `.ejs` 템플릿 파일을 둔다.
- 컨트롤러 메서드에 `@Render('템플릿이름')` 데코레이터를 붙이고, 반환하는 객체의 속성이 템플릿의 변수로 전달된다.
- `@Render`는 템플릿을 렌더링해주지만 디렉터리 경로는 알지 못하므로, `main.ts`에서 `app.setBaseViewsDir()`와 `app.setViewEngine()`으로 경로와 엔진을 지정해야 한다.
- `NestFactory.create<NestExpressApplication>()`처럼 제네릭 타입을 지정하면 Express 관련 메서드를 더 타입 안전하게 사용할 수 있다.
