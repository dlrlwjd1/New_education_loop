# Destroying the Session - Logout

## 개요
- 로그아웃(logout) 시 세션을 실제로 파기(destroy)하고 쿠키(cookie)를 삭제해, 사용하지 않는 세션이 데이터베이스에 남지 않도록 처리하는 강의.

## 내용
### 문제 상황 — 로그아웃해도 세션이 남는 문제
- 현재는 사용자가 로그인하면 세션이 생성되지만, 로그아웃(logout)을 해도 세션이 데이터베이스에 그대로 남아 있는 문제가 있다.
- 이를 해결하기 위해 로그아웃 시 세션을 실제로 파기(destroy)하도록 수정해야 한다.

### session.destroy로 세션 파기하기
- 유저 컨트롤러(user controller)의 로그아웃 라우트(route)에서 기존에 `session.isLoggedIn`을 `false`로 설정하던 코드를 제거한다.
- 대신 `request.session.destroy` 메서드를 사용한다. 이 메서드는 세션을 파기(destroy), 즉 삭제(delete)하는 역할을 한다.
- `destroy` 메서드는 콜백(callback)을 인자로 받으며, 이 콜백은 에러(error)를 전달받는다.
- `if` 조건문으로 에러를 확인하고, 에러가 있으면 `InternalServerErrorException`을 `"fail to destroy session"`이라는 메시지와 함께 던진다(throw).

### 쿠키 삭제하기
- `session.destroy`만으로는 세션은 삭제되지만 브라우저의 쿠키는 지워지지 않는다.
- 쿠키를 지우기 위해 `response.clearCookie` 메서드를 사용하고, 세션 쿠키 이름인 `connect.sid`를 지정해 삭제한다.

### 동작 확인
- 저장 후 사용자명과 비밀번호로 다시 로그인하면 세션이 생성되는 것을 확인한다.
- 이후 로그아웃을 진행하면 쿠키(cookies)가 지워지는 것을 확인할 수 있다.
- 데이터베이스의 `sessions` 테이블을 다시 확인하면 빈 결과(empty set)가 반환된다.
- 이렇게 로그아웃 시 세션 정보를 제거함으로써 애플리케이션에 불필요한 부담(burden)이 쌓이는 것을 방지한다.

## 예시
```typescript
// user.controller.ts (로그아웃 처리)
@Post('logout')
logout(@Req() request: Request, @Res() response: Response) {
  request.session.destroy((error) => {
    if (error) {
      throw new InternalServerErrorException('fail to destroy session');
    }
  });

  response.clearCookie('connect.sid');
  // ...
}
```

## 요약
- 로그아웃 시 `session.isLoggedIn = false` 대신 `request.session.destroy()`를 호출해 세션 자체를 데이터베이스에서 삭제한다.
- `destroy`의 콜백에서 에러가 발생하면 `InternalServerErrorException`을 던져 실패를 처리한다.
- `session.destroy`만으로는 브라우저 쿠키가 지워지지 않으므로 `response.clearCookie('connect.sid')`로 쿠키까지 함께 삭제해야 한다.
- 로그아웃 후 `sessions` 테이블이 비워지는 것으로 세션이 정상적으로 파기되었음을 확인할 수 있다.
