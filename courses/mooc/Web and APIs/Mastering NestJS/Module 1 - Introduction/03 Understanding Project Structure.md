# Understanding Project Structure

## 개요
- Nest CLI로 `nest new`를 실행했을 때 생성되는 프로젝트의 폴더·파일 구조를 하나씩 살펴보는 강의.

## 내용
### node_modules 폴더
- `node_modules` 폴더는 애플리케이션이 필요로 하는 모든 설치된 의존성(dependencies)을 담고 있다.
- 이 폴더는 순수하게 개발 목적(development purpose)으로만 사용된다. 애플리케이션을 컴파일할 때는 이 라이브러리들이 번들(bundle)로 묶여 애플리케이션과 함께 배포(deploy)된다.
- NestJS로 작업하려면 Node.js와 Express.js에 대한 충분한(thorough) 지식이 이미 있다고 가정한다.

### src(source) 폴더 개요
- `src` 폴더는 애플리케이션 소스 코드가 위치하는 디렉터리로, 애플리케이션의 주요 로직과 구조를 담고 있다.
- 이 폴더 안에는 다음과 같은 파일들이 있다.

### app.controller.spec.ts / app.controller.ts
- `app.controller.spec.ts`는 테스트를 실행(execute the tests)하기 위한 테스트 코드 파일이다.
- `app.controller.ts`는 애플리케이션의 메인 파일로, 여기에 프로젝트의 주요 로직을 작성하게 된다. 이 파일은 HTTP 요청을 처리하는 `@Controller` **데코레이터(decorator)**를 정의한다.

### app.module.ts
- `app.module.ts`는 중요한 파일로, 프로젝트의 모든 모듈(module)들이 조직화(organize)되어 애플리케이션에 모듈성(modularity)을 부여하는 곳이다.
- 모듈은 관련된 컴포넌트(components), 컨트롤러(controllers), 서비스(services)를 캡슐화(encapsulate)한다.
- `@Module` 데코레이터가 클래스에 부착(attach)되며, 몇 가지 속성(properties)을 가진 객체를 인자로 받는다.
  - `imports` 속성: 애플리케이션에서 다른 모듈들을 임포트(import)할 때 사용한다. 모듈이 여러 개면 이 속성에 나열하면 된다.
  - `controllers`와 `providers` 속성: 모듈에서 가장 중요한 두 속성이다.
    - **컨트롤러(controllers)**는 들어오는 HTTP 요청을 처리한다. 요청을 받아들이고, 처리 과정을 수행한 뒤, 응답을 다시 돌려보내는 역할을 담당한다.
    - **프로바이더(providers)**는 서비스(services)를 가리키며, 메인 컨트롤러나 다른 프로바이더에 주입(inject)되어 특정 기능(functionality)을 제공한다.

### app.service.ts
- `app.service.ts`는 `@Injectable` 데코레이터를 포함하며 `AppService` 클래스를 내보낸다(export). 이 서비스 안에는 문자열 메시지를 반환하는 메서드가 하나 있다.
- 서비스 파일에서는 애플리케이션이 수행해야 할 다양한 기능(functionalities)들을 만들고 정의할 수 있다. 예를 들어 데이터베이스에 접근(reach out)해서 어떤 작업을 수행하고 그 결과를 가져오는(fetch) 서비스를 만들 수 있다.
- 즉 컨트롤러가 수행할 무거운 처리(heavy processes)는 기본적으로 서비스 파일에 정의된다.

### main.ts
- `main.ts`는 NestJS 애플리케이션의 진입점(entry point)이다. 개발 서버를 시작하거나 애플리케이션을 빌드하는 명령을 실행하면 가장 먼저 호출되고 컴파일되는 파일이 바로 `main.ts`다.
- 여기에는 `NestFactory` 유틸리티 클래스(utility class)를 사용해 새로운 Nest 애플리케이션을 생성하는 `bootstrap` 함수가 있다.
- `create` 메서드에는 애플리케이션의 메인 모듈, 즉 `app.module.ts`에서 가져온 `AppModule`을 전달한다.
- 그 뒤 `app.listen` 메서드로 지정된 서버 포트(port)를 리스닝(listen)한다. 이는 Nest 애플리케이션 내부에서 동작하는 Express.js의 문법(syntax)이다.

### 나머지 파일들
- `test` 폴더: 자체적인 종단 간(end-to-end) 테스트를 작성하는 곳으로, 뒤에서 **Jest** 프레임워크가 테스트 실행을 처리한다.
- `.eslintrc.js`: 자바스크립트 기반 설정 파일로, 인기 있는 자바스크립트 린팅(linting) 도구인 **ESLint**가 사용한다. 자바스크립트와 타입스크립트 코드에서 코드 스타일과 잠재적인 프로그래밍 오류를 식별(identify)하고 고치는(fix) 데 도움을 주어 일관된(consistent) 코드를 작성하게 해준다.
- `.gitignore`: 특정 파일이나 폴더가 git 저장소에서 보이지 않도록(hidden) 해준다. 예를 들어 지원 파일(support files)들을 담고 있는 `node_modules` 폴더는 코드 저장소의 일부로 필요하지 않으므로 git에서 제외된다.
- `.prettierrc`: 코드 포매팅(formatting)을 수행해 코드를 일관되게 유지해준다.
- `nest-cli.json`: Nest 프로젝트의 설정(configuration)을 추가하거나 오버라이드(override)할 수 있게 해주는 JSON 파일이다.
- `package.json`: 프로젝트에 필요한 모든 의존성(dependencies)과 스크립트(scripts)를 담고 있다.
- 나머지 `tsconfig.json` 계열 파일들: 타입스크립트와 관련된 설정 파일들로, 애플리케이션에서 동일하게 중요하고 필요한 파일들이다.

## 예시
```text
project-root/
├── node_modules/          # 설치된 의존성 (개발 전용, 컴파일 시 번들링되어 배포)
├── src/
│   ├── app.controller.spec.ts   # 테스트 코드
│   ├── app.controller.ts        # 메인 로직, @Controller 데코레이터로 HTTP 요청 처리
│   ├── app.module.ts             # @Module 데코레이터로 imports/controllers/providers 구성
│   ├── app.service.ts            # @Injectable 데코레이터, 서비스 로직 정의
│   └── main.ts                   # 진입점, NestFactory로 애플리케이션 생성 및 listen
├── test/                  # 종단 간(e2e) 테스트, Jest 기반
├── .eslintrc.js           # ESLint 설정
├── .gitignore
├── .prettierrc            # Prettier 설정
├── nest-cli.json          # Nest CLI 설정
├── package.json
└── tsconfig.json 등
```

```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // 지정된 포트를 listen (Express.js 문법)
}
bootstrap();
```

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

## 요약
- `node_modules`는 개발 전용 의존성 폴더이고, `src`는 애플리케이션의 실제 소스 코드가 위치하는 폴더다.
- `app.controller.ts`는 `@Controller` 데코레이터로 HTTP 요청을 처리하고, `app.service.ts`는 `@Injectable` 데코레이터로 실제 비즈니스 로직(무거운 처리)을 담당한다.
- `app.module.ts`는 `@Module` 데코레이터의 `imports`, `controllers`, `providers` 속성을 통해 모듈성을 부여한다.
- `main.ts`는 애플리케이션의 진입점으로, `NestFactory.create`로 앱을 생성하고 `app.listen`으로 포트를 리스닝한다.
- 그 외 `test`(e2e 테스트), `.eslintrc.js`, `.gitignore`, `.prettierrc`, `nest-cli.json`, `package.json`, `tsconfig.json` 등이 프로젝트 설정과 코드 품질을 지원한다.
