# Validating Login Credentials

## 개요
- 이전 강의에서 로그인 시 해시된 문자열 전체를 입력해야 했던 문제를, `bcrypt`의 `compare` 메서드로 원래 비밀번호와 해시된 비밀번호를 비교하도록 수정하는 강의.

## 내용
### 문제 재확인
- 이전 강의에서 확인했듯, 현재는 로그인할 때 해시된 문자열(hashed string) 전체를 입력해야만 로그인이 성공했다.
- 원래의 평문 비밀번호로 로그인이 되려면, 입력된 비밀번호와 데이터베이스에 저장된 해시된 비밀번호를 비교하는 과정이 필요하다.

### bcrypt.compare로 비교 메서드 구현
- `bcrypt`는 이러한 비교를 위한 전용 메서드인 `compare` 메서드를 제공한다.
- 유저 서비스(user service) 파일에 `comparePasswords`라는 별도의 메서드를 만든다. 이 메서드는 `password`(string 타입)와 `hashedPassword`(string 타입) 두 개의 매개변수를 받는다.
- 반환문(return statement)에서 `bcrypt.compare`를 호출하며, 첫 번째 인자로 원본 비밀번호(original password), 두 번째 인자로 해시된 비밀번호(hashed password)를 전달한다.

### 유저 컨트롤러에 반영
- 유저 컨트롤러(user controller)의 로그인 POST 핸들러에서, 사용자의 존재 여부를 확인하는 `if` 조건문 안에 `isMatch`라는 상수를 만든다.
- 이 상수에 유저 서비스의 `comparePasswords` 메서드 호출 결과를 할당하며, 인자로 입력된 `password`와 `user.password`(데이터베이스에 저장된 해시 문자열)를 전달한다.
- 이후 사용자 비밀번호와 입력된 비밀번호가 일치하는지 검증하던 기존 `if` 조건문에는 단순히 `isMatch` 변수를 사용하도록 바꾼다.
- 즉, 사용자 자격 증명이 유효하고 비밀번호가 일치(`isMatch`가 참)하면 토큰을 생성한다.

### 동작 확인
- 저장 후 로그인을 시도한다. 테이블에 있는 두 번째 사용자로 로그인을 시도해, 사용자명과 (평문) 비밀번호를 입력하면 로그인에 성공하는 것을 확인한다.
- 이렇게 `bcrypt`를 사용해 해시된 데이터를 저장하고 다루는 방법을 마무리한다.

## 예시
```typescript
// user.service.ts
async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
```

```typescript
// user.controller.ts (POST /login)
@Post('login')
async login(@Req() request: Request, @Res() response: Response, @Body() loginDto: LoginDto) {
  const user = await this.userService.findByUsername(loginDto.username);

  if (user) {
    const isMatch = await this.userService.comparePasswords(loginDto.password, user.password);

    if (isMatch) {
      const token = this.jwtService.sign({ username: user.username });
      request.session.token = token;
      // ...
    }
    // isMatch가 false인 경우 기존의 invalid password 처리 로직 수행
  }
  // user가 없는 경우 기존의 invalid username 처리 로직 수행
}
```

## 요약
- `bcrypt.compare(password, hashedPassword)`로 입력된 원본 비밀번호와 데이터베이스에 저장된 해시 비밀번호를 비교한다.
- 유저 서비스에 `comparePasswords` 메서드를 만들어 이 비교 로직을 캡슐화한다.
- 로그인 핸들러에서 `isMatch` 값으로 비밀번호 일치 여부를 판단해 유효할 때만 토큰을 생성한다.
- 이제 사용자는 해시 문자열이 아닌 원래의 평문 비밀번호로 정상적으로 로그인할 수 있다.
