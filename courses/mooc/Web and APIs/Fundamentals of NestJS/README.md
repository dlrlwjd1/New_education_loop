# Fundamentals of NestJS

**Course URL:** [mooc.org/learn/fundamentals-of-nestjs](https://www.mooc.org/learn/fundamentals-of-nestjs)

Board Infinity 강좌. **NestJS**로 효율적이고 확장 가능한(scalable) Node.js 애플리케이션을 만드는 기초를 다루는 2모듈 강좌. 개발 환경 설정과 컨트롤러(controller)부터 서비스(service)·미들웨어(middleware)·예외 필터(exception filter)까지 NestJS의 핵심 구성 요소를 실습 위주로 익힌다.

## 모듈 구성

- [Module 1 - Getting Started with NestJS](Module%201%20-%20Getting%20Started%20with%20NestJS/) — NestJS 소개, 개발 환경 설정, 프로젝트 구조, 컨트롤러(controller)와 라우팅
- [Module 2 - Services, Middleware, and Exception Filters](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/) — 서비스(service)·프로바이더(provider), 미들웨어(middleware), 예외 필터(exception filter)

## 강의 목록

### Module 1 - Getting Started with NestJS
1. [Introduction to the Course](Module%201%20-%20Getting%20Started%20with%20NestJS/01%20Introduction%20to%20the%20Course.md)
2. [Meet Your Instructor](Module%201%20-%20Getting%20Started%20with%20NestJS/02%20Meet%20Your%20Instructor.md)
3. [What You Will Learn in This Lesson](Module%201%20-%20Getting%20Started%20with%20NestJS/03%20What%20You%20Will%20Learn%20in%20This%20Lesson.md)
4. [Overview of NestJS](Module%201%20-%20Getting%20Started%20with%20NestJS/04%20Overview%20of%20NestJS.md)
5. [Setting Up the Development Environment](Module%201%20-%20Getting%20Started%20with%20NestJS/05%20Setting%20Up%20the%20Development%20Environment.md)
6. [Exploring the Project Structure](Module%201%20-%20Getting%20Started%20with%20NestJS/06%20Exploring%20the%20Project%20Structure.md)
7. [What You Will Learn in This Lesson](Module%201%20-%20Getting%20Started%20with%20NestJS/07%20What%20You%20Will%20Learn%20in%20This%20Lesson.md)
8. [Understanding Controllers](Module%201%20-%20Getting%20Started%20with%20NestJS/08%20Understanding%20Controllers.md)
9. [Route Parameters and Query Strings](Module%201%20-%20Getting%20Started%20with%20NestJS/09%20Route%20Parameters%20and%20Query%20Strings.md)
10. [Handling Requests and Responses](Module%201%20-%20Getting%20Started%20with%20NestJS/10%20Handling%20Requests%20and%20Responses.md)

### Module 2 - Services, Middleware, and Exception Filters
1. [What You Will Learn in This Lesson](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/01%20What%20You%20Will%20Learn%20in%20This%20Lesson.md)
2. [Creating Services](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/02%20Creating%20Services.md)
3. [Using Providers](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/03%20Using%20Providers.md)
4. [Modules and Service Scopes](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/04%20Modules%20and%20Service%20Scopes.md)
5. [What You Will Learn in This Lesson](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/05%20What%20You%20Will%20Learn%20in%20This%20Lesson.md)
6. [Understanding Middleware](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/06%20Understanding%20Middleware.md)
7. [Exception Filters](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/07%20Exception%20Filters.md)
8. [Putting It All Together](Module%202%20-%20Services%2C%20Middleware%2C%20and%20Exception%20Filters/08%20Putting%20It%20All%20Together.md)

## 핵심 개념 요약

- **컨트롤러(Controller)**: `@Controller()` 데코레이터로 정의하며, `@Get()`/`@Post()`/`@Put()`/`@Patch()`/`@Delete()` 등으로 HTTP 메서드별 라우트를 처리한다.
- **DTO(Data Transfer Object)**: 클라이언트로부터 받는 요청 본문(body)의 구조를 클래스로 정의하고, `@Body()` 데코레이터로 주입받는다.
- **서비스(Service)와 프로바이더(Provider)**: 비즈니스 로직을 컨트롤러에서 분리해 서비스 클래스에 담고, 생성자 주입(constructor injection)으로 컨트롤러에 제공한다.
- **모듈(Module)**: `@Module()` 데코레이터로 컨트롤러·프로바이더를 묶어 관리하며, 서비스 스코프(scope)를 통해 인스턴스 생명주기를 제어할 수 있다.
- **미들웨어(Middleware)**: 요청이 라우트 핸들러에 도달하기 전에 실행되는 함수로, `NestMiddleware`를 구현하고 `configure()` 메서드에서 특정 라우트에 등록한다.
- **예외 필터(Exception Filter)**: `throw new UnauthorizedException()`, `throw new BadRequestException()` 같은 NestJS 내장 HTTP 예외를 던지면, 상태 코드와 에러 응답을 자동으로 처리해준다.
