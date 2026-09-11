# Hashing the Password on Sign-Up

## 개요
- `bcrypt` 라이브러리를 사용해 회원가입(sign-up) 시 사용자 비밀번호를 해싱(hashing)해서 데이터베이스에 저장하도록 개선하는 강의.

## 내용
### 회원가입이 되지 않던 문제 — 미들웨어 제외 처리 누락
- 현재 회원가입을 시도하면 로그인 페이지로 리다이렉트되어 마치 가입된 것처럼 보이지만, 실제로는 가입되지 않는다.
- `users` 테이블을 확인하면 빈 결과(empty set)가 나온다. 이는 `Auth` 미들웨어가 회원가입(signup) 라우트의 POST 요청에도 적용되어 토큰 검증을 기다리고 있기 때문이다.
- 이를 해결하기 위해 `AppModule`의 `exclude` 메서드에 POST 방식의 회원가입 라우트를 추가로 제외한다. 경로는 `user/signup`, 메서드는 `RequestMethod.POST`로 지정한다.
- 저장 후 다시 회원가입을 시도하면, 데이터베이스에 사용자 레코드가 정상적으로 삽입되는 것을 확인한다.
- 다만 이때 비밀번호(user password)가 평문(plain text)으로 그대로 노출되어 보이는 문제가 있다.

### bcrypt 설치와 적용 위치
- `npm i bcrypt` 명령으로 `bcrypt` 라이브러리를 설치한다.
- 비밀번호 해싱은 사용자를 생성(create)하는 유저 서비스(user service) 파일의 `createUser` 메서드 안에서 구현한다.

### 비밀번호 해싱 구현
- `bcrypt` 모듈을 import한다.
- `createUser` 메서드 안에서 `hashedPassword` 상수를 만들고, `await bcrypt.hash(password, 10)`을 할당해 비밀번호에 대한 해시 문자열(hashed string)을 생성한다. 두 번째 인자 `10`은 솔트 라운드(salt rounds)다.
- 저장소(repository)의 `create` 메서드에서 해시된 비밀번호를 `password` 속성 값으로 저장해야 하므로, 스프레드/레스트 연산자(rest operator)를 사용해 `createUserDto`에서 `password` 속성을 따로 분리하고, 나머지 속성과 함께 `password`에는 `hashedPassword` 값을 할당해 저장한다.
- `save` 메서드에도 에러를 잡아(catch) 에러 객체를 로그로 남기는 처리를 추가한다.
- 유저 컨트롤러(user controller)는 이미 유저 서비스의 `createUser` 메서드를 호출하고 있으므로 별도로 수정할 부분이 없다.

### 동작 확인
- 회원가입 정보를 입력해 다시 가입을 진행한다.
- `users` 테이블을 확인하면 이번에는 비밀번호가 해시(hash)된 형태로 저장되어 있는 것을 확인한다.
- 해시된 비밀번호를 저장하는 것은 민감한 사용자 데이터를 보호함으로써 보안을 강화한다.

### 남은 문제 — 로그인 시 비밀번호 비교
- 방금 가입한 사용자로 원래 입력했던 비밀번호를 사용해 로그인을 시도하면 "잘못된 비밀번호(invalid password)"라는 메시지가 표시된다. 이제는 로그인 시에도 해시된 비밀번호를 기준으로 비교해야 하기 때문이다.
- 임시로 해시된 문자열 전체를 복사해 로그인해보면 사용자가 로그인되는 것을 확인할 수 있다.
- 로그인 기능에서 해시 비교 로직을 반영하는 작업은 다음 강의에서 다룬다.

## 예시
```typescript
// app.module.ts (회원가입 POST 라우트 제외 추가)
consumer
  .apply(AuthMiddleware)
  .exclude(
    { path: 'user/login', method: RequestMethod.ALL },
    { path: 'user/signup', method: RequestMethod.POST },
    { path: 'user/logout', method: RequestMethod.ALL },
  )
  .forRoutes('*');
```

```typescript
// user.service.ts
import * as bcrypt from 'bcrypt';

async createUser(createUserDto: CreateUserDto) {
  const { password, ...rest } = createUserDto;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = this.userRepository.create({
    ...rest,
    password: hashedPassword,
  });

  return this.userRepository.save(user).catch((error) => {
    console.log(error);
  });
}
```

## 요약
- 회원가입 POST 라우트도 `AuthMiddleware`의 `exclude` 대상에 추가해야 회원가입이 정상 동작한다.
- `bcrypt.hash(password, 10)`으로 비밀번호를 해시 문자열로 변환한 뒤 데이터베이스에 저장한다.
- 저장 시 원본 `password`는 레스트 연산자로 분리하고, 해시된 값으로 대체해 저장한다.
- 해시된 비밀번호 저장으로 민감한 사용자 데이터 보호가 강화된다.
- 다만 로그인 로직은 아직 해시 비교를 하지 않으므로, 원래 비밀번호로는 로그인이 실패하며 이는 다음 강의에서 수정한다.
