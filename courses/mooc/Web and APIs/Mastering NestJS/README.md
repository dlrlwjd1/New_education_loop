# Mastering NestJS

**Course URL:** [mooc.org/learn/packt-mastering-nestjs-4opl7](https://www.mooc.org/learn/packt-mastering-nestjs-4opl7)

Packt 강좌. **NestJS**로 모듈화되고 확장 가능한 애플리케이션을 만드는 방법을 라우팅·컨트롤러부터 파이프(pipe)·미들웨어(middleware)·가드(guard)·인터셉터(interceptor), MySQL(TypeORM)·MongoDB(Mongoose) 연동, 그리고 세션·쿠키·JWT 기반 인증까지 다루는 12모듈 강좌. 강의 대부분이 **MyStore**라는 실전 쇼핑몰 애플리케이션을 처음부터 구축해가는 실습으로 구성되어 있다.

## 모듈 구성

- [Module 1 - Introduction](Module%201%20-%20Introduction/) — NestJS 소개, 프로젝트 설정, 프로젝트 구조
- [Module 2 - NestJS Fundamentals](Module%202%20-%20NestJS%20Fundamentals/) — 컨트롤러, GET/POST/PUT/PATCH/DELETE 핸들러, Request/Response 객체, HTTP 상태 코드
- [Module 3 - Working with Pipes](Module%203%20-%20Working%20with%20Pipes/) — 내장 파이프(ParseIntPipe 등), 유효성 검증(validation), 커스텀 파이프, ArgumentMetadata, 전역 파이프
- [Module 4 - NestJS Middleware](Module%204%20-%20NestJS%20Middleware/) — 미들웨어 구현·등록, 라우트별/함수형 미들웨어, 다중·전역 미들웨어
- [Module 5 - NestJS Guards](Module%205%20-%20NestJS%20Guards/) — 가드와 ExecutionContext, API 키 인가, 커스텀 메타데이터·역할(role) 기반 접근 제어
- [Module 6 - NestJS Interceptors](Module%206%20-%20NestJS%20Interceptors/) — 응답 변환, 헤더 수정, 민감 정보 숨기기, 예외 매핑, 전역 인터셉터
- [Module 7 - NestJS With MySQL](Module%207%20-%20NestJS%20With%20MySQL/) — TypeORM으로 MySQL 연결, 엔티티(entity) 생성, CRUD
- [Module 8 - Practical Application - Creating a MyStore App](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/) — 서버사이드 템플릿 렌더링, 상품 추가/수정 인터페이스 구성
- [Module 9 - Attaching Templates to MySQL](Module%209%20-%20Attaching%20Templates%20to%20MySQL/) — 템플릿과 MySQL 데이터 연동, 상품 CRUD 실전 연결
- [Module 10 - MyStore - Authentication/Session Cookie](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/) — 회원가입/로그인, 세션·쿠키, Express Session, JWT 토큰
- [Module 11 - NestJS With MongoDB & Mongoose](Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/) — Mongoose 스키마 생성·등록, MongoDB CRUD
- [Module 12 - MyStore With MongoDB & Mongoose](Module%2012%20-%20MyStore%20With%20MongoDB%20and%20Mongoose/) — MyStore를 MongoDB로 전환, 세션 스토어 구성

## 강의 목록

### Module 1 - Introduction
1. [Introduction to NestJS](Module%201%20-%20Introduction/01%20Introduction%20to%20NestJS.md)
2. [Setting Up the Project](Module%201%20-%20Introduction/02%20Setting%20Up%20the%20Project.md)
3. [Understanding Project Structure](Module%201%20-%20Introduction/03%20Understanding%20Project%20Structure.md)

### Module 2 - NestJS Fundamentals
1. [Understanding Controllers](Module%202%20-%20NestJS%20Fundamentals/01%20Understanding%20Controllers.md)
2. [Controller Fundamentals - GET Handler](Module%202%20-%20NestJS%20Fundamentals/02%20Controller%20Fundamentals%20-%20GET%20Handler.md)
3. [Controller Fundamentals - Headers](Module%202%20-%20NestJS%20Fundamentals/03%20Controller%20Fundamentals%20-%20Headers.md)
4. [Controller Fundamentals - POST Handler](Module%202%20-%20NestJS%20Fundamentals/04%20Controller%20Fundamentals%20-%20POST%20Handler.md)
5. [Controller Fundamentals - POST Handler Part 2 with Modules](Module%202%20-%20NestJS%20Fundamentals/05%20Controller%20Fundamentals%20-%20POST%20Handler%20Part%202%20with%20Modules.md)
6. [Controller Fundamentals - Fetching Params](Module%202%20-%20NestJS%20Fundamentals/06%20Controller%20Fundamentals%20-%20Fetching%20Params.md)
7. [Controller Fundamentals - PUT Handler](Module%202%20-%20NestJS%20Fundamentals/07%20Controller%20Fundamentals%20-%20PUT%20Handler.md)
8. [Controller Fundamentals - PATCH Handler](Module%202%20-%20NestJS%20Fundamentals/08%20Controller%20Fundamentals%20-%20PATCH%20Handler.md)
9. [Controller Fundamentals - DELETE Handler](Module%202%20-%20NestJS%20Fundamentals/09%20Controller%20Fundamentals%20-%20DELETE%20Handler.md)
10. [Request Object](Module%202%20-%20NestJS%20Fundamentals/10%20Request%20Object.md)
11. [Response Object](Module%202%20-%20NestJS%20Fundamentals/11%20Response%20Object.md)
12. [Fetching Queries](Module%202%20-%20NestJS%20Fundamentals/12%20Fetching%20Queries.md)
13. [HttpCode vs Res Decorator](Module%202%20-%20NestJS%20Fundamentals/13%20HttpCode%20vs%20Res%20Decorator.md)
14. [HTTP Response Status](Module%202%20-%20NestJS%20Fundamentals/14%20HTTP%20Response%20Status.md)

### Module 3 - Working with Pipes
1. [Introduction to Pipes](Module%203%20-%20Working%20with%20Pipes/01%20Introduction%20to%20Pipes.md)
2. [Built-in Pipes - ParseIntPipe](Module%203%20-%20Working%20with%20Pipes/02%20Built-in%20Pipes%20-%20ParseIntPipe.md)
3. [Built-in Pipes - ParseFloatPipe](Module%203%20-%20Working%20with%20Pipes/03%20Built-in%20Pipes%20-%20ParseFloatPipe.md)
4. [Built-in Pipes - ParseBoolPipe](Module%203%20-%20Working%20with%20Pipes/04%20Built-in%20Pipes%20-%20ParseBoolPipe.md)
5. [Built-in Pipes - ParseArrayPipe](Module%203%20-%20Working%20with%20Pipes/05%20Built-in%20Pipes%20-%20ParseArrayPipe.md)
6. [Built-in Pipes - ParseUUIDPipe](Module%203%20-%20Working%20with%20Pipes/06%20Built-in%20Pipes%20-%20ParseUUIDPipe.md)
7. [Built-in Pipes - ValidationPipe](Module%203%20-%20Working%20with%20Pipes/07%20Built-in%20Pipes%20-%20ValidationPipe.md)
8. [Validating Empty Fields](Module%203%20-%20Working%20with%20Pipes/08%20Validating%20Empty%20Fields.md)
9. [Validating Field Length](Module%203%20-%20Working%20with%20Pipes/09%20Validating%20Field%20Length.md)
10. [Custom Validation Messages](Module%203%20-%20Working%20with%20Pipes/10%20Custom%20Validation%20Messages.md)
11. [Validating Field Using IsEnum Validator](Module%203%20-%20Working%20with%20Pipes/11%20Validating%20Field%20Using%20IsEnum%20Validator.md)
12. [Validating Dates in NestJS](Module%203%20-%20Working%20with%20Pipes/12%20Validating%20Dates%20in%20NestJS.md)
13. [Validating Optional Fields](Module%203%20-%20Working%20with%20Pipes/13%20Validating%20Optional%20Fields.md)
14. [Validating Regex Pattern](Module%203%20-%20Working%20with%20Pipes/14%20Validating%20Regex%20Pattern.md)
15. [Creating a Custom Pipe](Module%203%20-%20Working%20with%20Pipes/15%20Creating%20a%20Custom%20Pipe.md)
16. [Understanding ArgumentMetadata - type](Module%203%20-%20Working%20with%20Pipes/16%20Understanding%20ArgumentMetadata%20-%20type.md)
17. [Assignment - Custom Pipe Handling Different Type Arguments](Module%203%20-%20Working%20with%20Pipes/17%20Assignment%20-%20Custom%20Pipe%20Handling%20Different%20Type%20Arguments.md)
18. [Understanding ArgumentMetadata - metatype](Module%203%20-%20Working%20with%20Pipes/18%20Understanding%20ArgumentMetadata%20-%20metatype.md)
19. [Understanding ArgumentMetadata - data](Module%203%20-%20Working%20with%20Pipes/19%20Understanding%20ArgumentMetadata%20-%20data.md)
20. [Implementing Global Pipes](Module%203%20-%20Working%20with%20Pipes/20%20Implementing%20Global%20Pipes.md)

### Module 4 - NestJS Middleware
1. [Introduction to Nest Middlewares](Module%204%20-%20NestJS%20Middleware/01%20Introduction%20to%20Nest%20Middlewares.md)
2. [Implementing Middleware](Module%204%20-%20NestJS%20Middleware/02%20Implementing%20Middleware.md)
3. [Registering a Middleware](Module%204%20-%20NestJS%20Middleware/03%20Registering%20a%20Middleware.md)
4. [Route-Specific Middleware](Module%204%20-%20NestJS%20Middleware/04%20Route-Specific%20Middleware.md)
5. [Assignment - Checking Content Type with Middleware](Module%204%20-%20NestJS%20Middleware/05%20Assignment%20-%20Checking%20Content%20Type%20with%20Middleware.md)
6. [Handling Route Wildcards](Module%204%20-%20NestJS%20Middleware/06%20Handling%20Route%20Wildcards.md)
7. [Middleware for Specific Route Handlers](Module%204%20-%20NestJS%20Middleware/07%20Middleware%20for%20Specific%20Route%20Handlers.md)
8. [Excluding Routes](Module%204%20-%20NestJS%20Middleware/08%20Excluding%20Routes.md)
9. [Controller-Driven Route Middleware](Module%204%20-%20NestJS%20Middleware/09%20Controller-Driven%20Route%20Middleware.md)
10. [Understanding Functional Middleware](Module%204%20-%20NestJS%20Middleware/10%20Understanding%20Functional%20Middleware.md)
11. [Applying Multiple Middlewares](Module%204%20-%20NestJS%20Middleware/11%20Applying%20Multiple%20Middlewares.md)
12. [Applying Global Middlewares](Module%204%20-%20NestJS%20Middleware/12%20Applying%20Global%20Middlewares.md)
13. [Assignment - Password Encryption Middleware](Module%204%20-%20NestJS%20Middleware/13%20Assignment%20-%20Password%20Encryption%20Middleware.md)

### Module 5 - NestJS Guards
1. [Introduction to Guards](Module%205%20-%20NestJS%20Guards/01%20Introduction%20to%20Guards.md)
2. [Understanding Guard](Module%205%20-%20NestJS%20Guards/02%20Understanding%20Guard.md)
3. [Understanding ExecutionContext](Module%205%20-%20NestJS%20Guards/03%20Understanding%20ExecutionContext.md)
4. [Accessing Arguments with getArgs](Module%205%20-%20NestJS%20Guards/04%20Accessing%20Arguments%20with%20getArgs.md)
5. [Limiting Controller Access with Guard](Module%205%20-%20NestJS%20Guards/05%20Limiting%20Controller%20Access%20with%20Guard.md)
6. [Understanding switchToHttp Method](Module%205%20-%20NestJS%20Guards/06%20Understanding%20switchToHttp%20Method.md)
7. [Assignment - API Key Authorization](Module%205%20-%20NestJS%20Guards/07%20Assignment%20-%20API%20Key%20Authorization.md)
8. [Applying Multiple Guards](Module%205%20-%20NestJS%20Guards/08%20Applying%20Multiple%20Guards.md)
9. [Defining Custom Metadata](Module%205%20-%20NestJS%20Guards/09%20Defining%20Custom%20Metadata.md)
10. [Setting Custom Metadata - A Better Way](Module%205%20-%20NestJS%20Guards/10%20Setting%20Custom%20Metadata%20-%20A%20Better%20Way.md)
11. [Applying Role for Specific Handlers](Module%205%20-%20NestJS%20Guards/11%20Applying%20Role%20for%20Specific%20Handlers.md)
12. [Applying Multiple Roles](Module%205%20-%20NestJS%20Guards/12%20Applying%20Multiple%20Roles.md)
13. [Applying Global Guards](Module%205%20-%20NestJS%20Guards/13%20Applying%20Global%20Guards.md)

### Module 6 - NestJS Interceptors
1. [Introduction to Interceptors](Module%206%20-%20NestJS%20Interceptors/01%20Introduction%20to%20Interceptors.md)
2. [Understanding Interceptor](Module%206%20-%20NestJS%20Interceptors/02%20Understanding%20Interceptor.md)
3. [Assignment - Transforming Response Data](Module%206%20-%20NestJS%20Interceptors/03%20Assignment%20-%20Transforming%20Response%20Data.md)
4. [Assignment - Modifying Request Headers](Module%206%20-%20NestJS%20Interceptors/04%20Assignment%20-%20Modifying%20Request%20Headers.md)
5. [Assignment - Hiding Sensitive Information](Module%206%20-%20NestJS%20Interceptors/05%20Assignment%20-%20Hiding%20Sensitive%20Information.md)
6. [Exception Mapping](Module%206%20-%20NestJS%20Interceptors/06%20Exception%20Mapping.md)
7. [Data Validation with Interceptor](Module%206%20-%20NestJS%20Interceptors/07%20Data%20Validation%20with%20Interceptor.md)
8. [Authentication and Authorization](Module%206%20-%20NestJS%20Interceptors/08%20Authentication%20and%20Authorization.md)
9. [Applying Global Interceptors](Module%206%20-%20NestJS%20Interceptors/09%20Applying%20Global%20Interceptors.md)

### Module 7 - NestJS With MySQL
1. [Connecting to MySQL Database Using TypeORM](Module%207%20-%20NestJS%20With%20MySQL/01%20Connecting%20to%20MySQL%20Database%20Using%20TypeORM.md)
2. [Creating Entity with TypeORM](Module%207%20-%20NestJS%20With%20MySQL/02%20Creating%20Entity%20with%20TypeORM.md)
3. [Inserting Product Data - CRUD](Module%207%20-%20NestJS%20With%20MySQL/03%20Inserting%20Product%20Data%20-%20CRUD.md)
4. [Fetching the Product Data - CRUD](Module%207%20-%20NestJS%20With%20MySQL/04%20Fetching%20the%20Product%20Data%20-%20CRUD.md)
5. [Updating Product Record - CRUD](Module%207%20-%20NestJS%20With%20MySQL/05%20Updating%20Product%20Record%20-%20CRUD.md)
6. [Deleting Product Record - CRUD](Module%207%20-%20NestJS%20With%20MySQL/06%20Deleting%20Product%20Record%20-%20CRUD.md)

### Module 8 - Practical Application - Creating a MyStore App
1. [Introduction to MyStore Application](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/01%20Introduction%20to%20MyStore%20Application.md)
2. [Rendering Template on Server](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/02%20Rendering%20Template%20on%20Server.md)
3. [Creating Navbar with Includes](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/03%20Creating%20Navbar%20with%20Includes.md)
4. [Creating Home Interface](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/04%20Creating%20Home%20Interface.md)
5. [Conditional Rendering - No Product Found](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/05%20Conditional%20Rendering%20-%20No%20Product%20Found.md)
6. [Configuring Add Product Route](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/06%20Configuring%20Add%20Product%20Route.md)
7. [Creating Add Product Interface](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/07%20Creating%20Add%20Product%20Interface.md)
8. [Configuring Edit Product Route](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/08%20Configuring%20Edit%20Product%20Route.md)
9. [Interface Functionality - Edit Product](Module%208%20-%20Practical%20Application%20-%20Creating%20a%20MyStore%20App/09%20Interface%20Functionality%20-%20Edit%20Product.md)

### Module 9 - Attaching Templates to MySQL
1. [Fetching the Products](Module%209%20-%20Attaching%20Templates%20to%20MySQL/01%20Fetching%20the%20Products.md)
2. [Adding Product to Database - Part 1](Module%209%20-%20Attaching%20Templates%20to%20MySQL/02%20Adding%20Product%20to%20Database%20-%20Part%201.md)
3. [Adding Product to Database - Part 2](Module%209%20-%20Attaching%20Templates%20to%20MySQL/03%20Adding%20Product%20to%20Database%20-%20Part%202.md)
4. [Updating the Product](Module%209%20-%20Attaching%20Templates%20to%20MySQL/04%20Updating%20the%20Product.md)
5. [Deleting the Product](Module%209%20-%20Attaching%20Templates%20to%20MySQL/05%20Deleting%20the%20Product.md)

### Module 10 - MyStore - Authentication/Session Cookie
1. [Section Introduction](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/01%20Section%20Introduction.md)
2. [Setting Up the Sign-Up Route](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/02%20Setting%20Up%20the%20Sign-Up%20Route.md)
3. [Designing the Sign-Up Form](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/03%20Designing%20the%20Sign-Up%20Form.md)
4. [Implementing Show-Hide Password Functionality](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/04%20Implementing%20Show-Hide%20Password%20Functionality.md)
5. [Validating Password](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/05%20Validating%20Password.md)
6. [Registering User to the Database](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/06%20Registering%20User%20to%20the%20Database.md)
7. [Configuring Login Page](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/07%20Configuring%20Login%20Page.md)
8. [Validating User - Sending Cookie](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/08%20Validating%20User%20-%20Sending%20Cookie.md)
9. [Reading a Cookie](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/09%20Reading%20a%20Cookie.md)
10. [Rendering DOM Based on Login Status](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/10%20Rendering%20DOM%20Based%20on%20Login%20Status.md)
11. [Implementing Logout](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/11%20Implementing%20Logout.md)
12. [Configuring Express Session](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/12%20Configuring%20Express%20Session.md)
13. [Sending and Reading Session Cookie](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/13%20Sending%20and%20Reading%20Session%20Cookie.md)
14. [Storing Sessions in MySQL](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/14%20Storing%20Sessions%20in%20MySQL.md)
15. [Destroying the Session - Logout](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/15%20Destroying%20the%20Session%20-%20Logout.md)
16. [Optimizing Session Storage](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/16%20Optimizing%20Session%20Storage.md)
17. [Implementing JWT Token](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/17%20Implementing%20JWT%20Token.md)
18. [Validating Request with Middleware](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/18%20Validating%20Request%20with%20Middleware.md)
19. [Conditional Rendering with Token](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/19%20Conditional%20Rendering%20with%20Token.md)
20. [Hashing the Password on Sign-Up](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/20%20Hashing%20the%20Password%20on%20Sign-Up.md)
21. [Validating Login Credentials](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/21%20Validating%20Login%20Credentials.md)
22. [Finalizing MyStore Application](Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/22%20Finalizing%20MyStore%20Application.md)

### Module 11 - NestJS With MongoDB & Mongoose
1. [Connecting to MongoDB Database](Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/01%20Connecting%20to%20MongoDB%20Database.md)
2. [Creating a Schema](Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/02%20Creating%20a%20Schema.md)
3. [Registering the Schema](Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/03%20Registering%20the%20Schema.md)
4. [Create-Save Product to MongoDB](Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/04%20Create-Save%20Product%20to%20MongoDB.md)
5. [Fetching Documents from MongoDB](Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/05%20Fetching%20Documents%20from%20MongoDB.md)
6. [Updating a Document in MongoDB](Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/06%20Updating%20a%20Document%20in%20MongoDB.md)
7. [Deleting a Document from MongoDB](Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/07%20Deleting%20a%20Document%20from%20MongoDB.md)

### Module 12 - MyStore With MongoDB & Mongoose
1. [Connecting MyStore with MongoDB Database](Module%2012%20-%20MyStore%20With%20MongoDB%20and%20Mongoose/01%20Connecting%20MyStore%20with%20MongoDB%20Database.md)
2. [Creating User Schema](Module%2012%20-%20MyStore%20With%20MongoDB%20and%20Mongoose/02%20Creating%20User%20Schema.md)
3. [Injecting the User Schema](Module%2012%20-%20MyStore%20With%20MongoDB%20and%20Mongoose/03%20Injecting%20the%20User%20Schema.md)
4. [Creating Product Schema](Module%2012%20-%20MyStore%20With%20MongoDB%20and%20Mongoose/04%20Creating%20Product%20Schema.md)
5. [Injecting the Product Schema](Module%2012%20-%20MyStore%20With%20MongoDB%20and%20Mongoose/05%20Injecting%20the%20Product%20Schema.md)
6. [Creating MongoDB Session Store](Module%2012%20-%20MyStore%20With%20MongoDB%20and%20Mongoose/06%20Creating%20MongoDB%20Session%20Store.md)

## 핵심 개념 요약

- **컨트롤러(Controller)와 라우팅**: `@Controller()`로 정의하고 `@Get()`/`@Post()`/`@Put()`/`@Patch()`/`@Delete()`로 HTTP 메서드별 핸들러를 만든다. `@Req()`/`@Res()`/`@Body()`/`@Query()`/`@Param()`으로 요청 데이터에 접근한다.
- **파이프(Pipe)**: `ParseIntPipe`, `ParseUUIDPipe`, `ValidationPipe` 같은 내장 파이프로 입력 데이터를 변환·검증하며, `class-validator` 데코레이터(`@IsNotEmpty()`, `@IsEnum()` 등)로 DTO 필드를 검증한다. `PipeTransform`을 구현해 커스텀 파이프를 만들 수 있고, `ArgumentMetadata`의 `type`/`metatype`/`data`로 인자의 맥락 정보를 얻는다.
- **미들웨어(Middleware)**: `NestMiddleware`를 구현해 요청이 핸들러에 도달하기 전 로직(인증 체크, 로깅 등)을 수행하고, `configure()`에서 라우트별·전역으로 등록한다.
- **가드(Guard)**: `CanActivate`를 구현해 `ExecutionContext`를 통해 요청을 검사하고, 통과 여부를 boolean으로 반환해 라우트 접근을 제어한다. `Reflector`와 커스텀 데코레이터로 역할(role) 기반 접근 제어를 구현한다.
- **인터셉터(Interceptor)**: `NestInterceptor`를 구현해 요청 전후로 응답 변환, 헤더 수정, 민감 정보 제거, 예외 매핑 등을 처리한다.
- **데이터베이스 연동**: MySQL은 **TypeORM**의 `@Entity()`로 엔티티를 정의해 CRUD를 구현하고, MongoDB는 **Mongoose**의 스키마(schema)를 정의·등록해 문서(document) CRUD를 구현한다.
- **MyStore 실전 프로젝트**: 서버사이드 템플릿 렌더링으로 상품 목록/추가/수정 화면을 구성하고, 회원가입·로그인은 세션 쿠키(Express Session, `connect-mysql-session`/`connect-mongo`)와 JWT 토큰 두 방식으로 구현하며, 비밀번호는 해싱해서 저장한다.
