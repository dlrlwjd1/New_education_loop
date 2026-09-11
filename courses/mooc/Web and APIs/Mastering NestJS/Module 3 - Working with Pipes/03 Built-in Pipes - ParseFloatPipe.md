# Built-in Pipes (ParseFloatPipe)

## 개요
- 소수점(decimal point)을 포함한 숫자 파라미터를 처리하기 위한 내장 파이프 **ParseFloatPipe**를 실습하고, `ParseIntPipe`와의 차이를 확인하는 강의.

## 내용
### ParseFloatPipe란
- **ParseFloatPipe**는 요청 파라미터(request parameter)를 부동소수점 숫자(floating point number)로 파싱하는 내장 파이프(built-in pipe)다.
- 라우트 핸들러(route handler)가 소수점을 포함할 수 있는 숫자형 파라미터를 기대할 때 주로 사용된다. 예를 들어 가격(price) 값이 이에 해당한다.

### ParseIntPipe의 한계 확인
- 이전 강의에서 구현한 `ParseIntPipe`는 부동소수점 값을 통과시키지 못한다.
- 라우트 파라미터로 소수(decimal) 값을 id에 전달하면 `ParseIntPipe`가 소수 값을 처리하지 못해 검증 오류(validation error) 메시지가 반환된다.

### ParseFloatPipe로 해결
- 이 문제를 해결하려면 `ParseFloatPipe`를 사용해야 한다.
- `ParseIntPipe` 대신 `ParseFloatPipe`를 적용한 뒤 동일한 요청을 다시 보내면 소수 값이 정상적으로 반환된다.

## 예시
```typescript
@Get(':id')
getId(@Param('id', ParseFloatPipe) id: number) {
  return id;
}
```

## 요약
- `ParseFloatPipe`는 요청 파라미터를 부동소수점 숫자로 변환하는 내장 파이프다.
- `ParseIntPipe`는 소수점이 포함된 값을 처리하지 못해 검증 오류가 발생한다.
- 소수점이 있는 숫자 파라미터(예: 가격)를 다룰 때는 `ParseIntPipe` 대신 `ParseFloatPipe`를 사용해야 한다.
