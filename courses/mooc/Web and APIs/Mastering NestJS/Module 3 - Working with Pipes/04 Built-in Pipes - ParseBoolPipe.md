# Built-in Pipes (ParseBooleanPipe)

## 개요
- 쿼리 문자열(query string)이나 바디 파라미터(body parameter)로 들어온 문자열 값을 불리언(boolean) 값으로 변환하는 내장 파이프 **ParseBoolPipe**를 실습하는 강의.

## 내용
### ParseBoolPipe란
- **ParseBoolPipe**는 쿼리 문자열, 바디 파라미터 등 요청 파라미터로 들어오는 문자열 값을 불리언 값으로 변환하는 내장 변환 파이프(built-in transformation pipe)다.
- 불리언 플래그(boolean flags)나 필터(filters)를 기대하는 API 엔드포인트를 다룰 때 유용하다.

### 컨트롤러에 적용하기
- `@Get()` 핸들러와 `getValue`라는 메서드를 만들고, 메서드 인자에서 `@Query()` 데코레이터를 사용해 `isActive`라는 파라미터 값을 가져오며 `ParseBoolPipe`를 적용한다.
- 이렇게 하면 해당 쿼리 문자열은 불리언 값을 가져야 하며, 불리언이 아닌 값이 전달되면 오류(error)가 표시된다.
- `isActive` 프로퍼티를 `boolean` 타입으로 선언하고, 메서드 안에서 `isActive`가 존재하면(true) `"Welcome admin"` 메시지를, 그렇지 않으면(false) `"Welcome user"` 메시지를 반환하도록 작성한다.

### 동작 확인
- Postman에서 라우트 경로에 쿼리 값을 무작위 문자열(random string)로 설정해 요청하면, 불리언 문자열(boolean string)이 필요하다는 검증 오류(validation error)가 표시된다.
- 쿼리 값을 `true`로 설정하면 `"Welcome admin"` 메시지가 표시되고, `false`로 설정하면 `"Welcome user"` 메시지가 표시된다.

### 활용 사례
- `ParseBoolPipe`는 특정 라우트 핸들러가 반드시 불리언 값만 다루도록 보장하고 싶을 때 유용하다.
- 로그인·로그아웃 기능처럼 엄격한 불리언 값이 필요한 기능에 특히 유용하며, 코드를 단순하게 유지하면서 예상대로 동작하도록 보장한다.

## 예시
```typescript
@Get()
getValue(@Query('isActive', ParseBoolPipe) isActive: boolean) {
  if (isActive) {
    return 'Welcome admin';
  }
  return 'Welcome user';
}
```

## 요약
- `ParseBoolPipe`는 문자열 형태의 쿼리/바디 파라미터를 불리언 값으로 변환하는 내장 파이프다.
- `@Query()` 데코레이터 안에 `ParseBoolPipe`를 전달해 파라미터 레벨에서 적용한다.
- 불리언이 아닌 값이 전달되면 검증 오류가 발생하여, 로그인/로그아웃 같이 엄격한 boolean 처리가 필요한 기능에 유용하다.
