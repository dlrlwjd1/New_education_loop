# Built-in Pipes (ParseIntPipe)

## 개요
- NestJS의 내장 파이프 중 하나인 **ParseIntPipe**를 사용해 요청 파라미터(request parameter)를 문자열(string)에서 정수(integer)로 변환하는 방법을 실습하는 강의.

## 내용
### ParseIntPipe란
- **ParseIntPipe**는 요청 파라미터를 정수로 변환하는 데 사용하는 내장 파이프(built-in pipe)로, 문자열을 정수로(string to integer) 변환한다.
- 라우트 핸들러(route handler)가 숫자형 파라미터(예: id)를 기대할 때 자주 활용된다.

### 컨트롤러에 적용하기
- `@Get()` 핸들러와 `getId`라는 메서드를 만들고, get 핸들러 안에 동적(dynamic) id를 경로 파라미터로 전달한다.
- 메서드에서는 `@Param()` 데코레이터를 사용해 ID 값을 가져오며, `@Param()` 데코레이터 안에 내장 파이프(`ParseIntPipe`)를 전달한다.

### 파이프의 적용 레벨
- 파이프를 지정할 수 있는 레벨은 세 가지다.
  - **파라미터 레벨(parameter level)**: 라우트 핸들러 안의 특정 파라미터에만 적용되는 파이프. 지금 실습한 방식이 여기 해당하며, 일반적으로 모든 내장 파이프는 파라미터 레벨에서 지정된다.
  - **라우트 레벨(route level)**: 전체 라우트 핸들러에 적용되는 파이프.
  - **글로벌 레벨(global level)**: 애플리케이션 전체에 적용되는 파이프.
- 라우트 레벨과 글로벌 레벨은 이후 강의에서 다룬다.

### 동작 확인
- id 값을 `number` 타입의 프로퍼티에 저장하고 그 값을 반환하도록 작성한다. URL 파라미터로 전달될 때 id는 문자열(string) 형식이지만, 반환값은 `number` 타입이 된다.
- Postman에서 라우트 경로에 숫자 id 값을 넣어 요청하면 해당 id 값이 정상적으로 반환된다.
- 문자열 값을 id로 전달하면 검증 실패(validation fail) 메시지가 반환된다. 라우트가 숫자형 문자열(numeric string) 값을 기대하기 때문이다.
- `ParseIntPipe`를 제거하고 다시 요청하면 문자열 값이 그대로 반환된다.
- 이처럼 파이프를 적용하면 애플리케이션 내에서 검증(validation)과 제약(restriction)을 수행할 수 있다.

## 예시
```typescript
@Get(':id')
getId(@Param('id', ParseIntPipe) id: number) {
  return id;
}
```

## 요약
- `ParseIntPipe`는 요청 파라미터를 문자열에서 정수로 변환하는 내장 파이프다.
- `@Param()` 데코레이터 안에 파이프를 전달해 파라미터 레벨(parameter level)에서 적용한다.
- 파이프 적용 레벨은 파라미터 레벨, 라우트 레벨, 글로벌 레벨 세 가지가 있으며 내장 파이프는 보통 파라미터 레벨에서 사용된다.
- 파이프를 적용하면 숫자가 아닌 값이 전달될 때 검증 실패 메시지를 반환해 데이터 검증(validation)을 수행할 수 있다.
