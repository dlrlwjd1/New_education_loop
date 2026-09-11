# Registering User to the Database

## 개요
- 회원가입 폼에서 입력된 값을 실제로 MySQL의 `users` 테이블에 저장하기 위해, 사용자 엔티티(entity)·DTO·컨트롤러(controller)·서비스(service)·모듈(module)을 새로 만들고 연결하는 강의.

## 내용
### User 엔티티(entity) 정의
- `entities` 폴더 안에 `user.ts` 파일을 만든다.
- `@Entity()` 데코레이터에 `name: 'users'`를 전달해 테이블 이름을 지정한다.
- `User` 클래스를 정의하고, `@PrimaryGeneratedColumn()`으로 `id: number` 기본 키(primary key)를 만든다.
- `username` 컬럼은 문자열(string) 타입이며 `unique: true` 속성을 준다. 이 `username` 프로퍼티는 회원가입 폼의 `input`에서 사용한 이름과 반드시 동일해야 한다.
- `password` 컬럼도 문자열 타입으로 추가한다.
- `@CreateDateColumn()`으로 `createdAt` 프로퍼티(date 타입)를 추가한다.

### User DTO(Data Transfer Object) 정의
- `dto` 폴더 안에 `user.dto.ts` 파일을 만든다.
- `UserDto` 클래스에 두 프로퍼티를 정의한다: 이메일(email) 형식인 `username`(string 타입, `class-validator`의 `@IsEmail()`을 붙여 이메일 형식인지 검사)과 `password`(string 타입).

### 컨트롤러·서비스·모듈 생성
- `nest generate controller users/controller/user --no-spec` 명령으로 유저 컨트롤러 파일을 생성한다.
- `nest generate service users/service/user --no-spec` 명령으로 유저 서비스 파일을 생성한다.
- `nest generate module users/module/user --no-spec` 명령으로 유저 모듈 파일을 생성한다.

### User 서비스 구현
- `UserService`의 생성자(constructor)에서 리포지토리(repository)를 주입(inject)한다. `private readonly userRepository: Repository<User>` 프로퍼티를 만든다.
- `createUser(createUserDto: UserDto)`라는 비동기(async) 메서드를 만든다.
- `const newUser = this.userRepository.create(createUserDto)`로 새 유저 레코드를 생성한다.
- `return await this.userRepository.save(newUser)`로 실제 데이터베이스에 저장한다.

### User 컨트롤러 구현
- 생성자에서 `UserService`를 주입한다.
- 유저를 추가해야 하므로 POST 라우트 핸들러를 만들고 경로를 `signup`으로 지정한다.
- `signUp` 메서드를 만들고 `@Body()` 데코레이터로 `UserDto` 타입의 `newUser` 프로퍼티를 받는다.
- `this.userService.createUser(newUser)`를 호출한 결과를 그대로 반환(return)하고, `@Redirect()` 데코레이터로 홈 페이지로 리다이렉트(redirect) 되도록 한다.

### 모듈 설정
- `UserModule`의 `@Module()` 데코레이터에서 `imports` 배열에 `TypeOrmModule.forFeature([User])`를 지정해 `User` 엔티티를 등록한다.
- `controllers` 배열에 `UserController`, `providers`와 `exports` 배열에 `UserService`를 지정한다. (이 설정을 왜 해야 하는지는 이전에 Product 엔티티를 다룰 때 이미 설명했으므로 여기서는 반복하지 않는다고 언급한다.)
- `AppModule`에서 `UserController`와 `UserService`를 `controllers`, `providers` 배열에서 제거하고, `User` 엔티티를 `entities` 배열에 지정한다.

### 회원가입 폼 라우트 연결 및 확인
- 회원가입 템플릿(signup template)을 열어 폼의 `action` 속성이 올바르지 않은 것을 확인하고, 경로를 `user/signup`으로 변경한다. 이렇게 하면 폼 제출 시 유저 컨트롤러의 POST 핸들러로 요청이 전달된다.
- 저장 후 터미널에 에러가 없는 것을 확인한다.
- 브라우저에서 사용자 이름(이메일)과 비밀번호를 입력하고 sign up 버튼을 클릭하면 홈 페이지로 리다이렉트되어, 정상적으로 동작함을 확인한다.
- MySQL에서 `users` 테이블을 조회하는 쿼리를 실행해, 등록한 사용자가 실제로 테이블에 추가된 것을 확인한다.

## 예시
```typescript
// entities/user.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;
}
```

```typescript
// dto/user.dto.ts
import { IsEmail } from 'class-validator';

export class UserDto {
  @IsEmail()
  username: string;

  password: string;
}
```

```typescript
// users/service/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user';
import { UserDto } from '../../dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: UserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return await this.userRepository.save(newUser);
  }
}
```

```typescript
// users/controller/user.controller.ts
import { Body, Controller, Post, Redirect } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserDto } from '../../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @Redirect('/')
  signUp(@Body() newUser: UserDto) {
    return this.userService.createUser(newUser);
  }
}
```

```typescript
// users/module/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities/user';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
```

```html
<!-- signup.ejs 폼 action 수정 -->
<form action="/user/signup" method="post">
  <!-- 입력 필드들 -->
</form>
```

## 요약
- `users` 테이블에 대응하는 `User` 엔티티(`id`, `username`(unique), `password`, `createdAt`)를 정의했다.
- `class-validator`의 `@IsEmail()`을 사용하는 `UserDto`, `UserService`(리포지토리 주입, `createUser` 메서드), `UserController`(POST `signup` 라우트, `@Redirect()`)를 각각 생성했다.
- `UserModule`에서 `TypeOrmModule.forFeature([User])`로 엔티티를 등록하고, `AppModule`에서는 유저 관련 컨트롤러·서비스를 제거하고 엔티티만 등록했다.
- 회원가입 폼의 `action` 경로를 `/user/signup`으로 맞추고, 실제로 회원가입 후 MySQL `users` 테이블에 데이터가 저장되는 것을 확인했다.
