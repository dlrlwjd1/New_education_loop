# Built-in Pipes (ParseArrayPipe)

## 개요
- 쿼리 문자열이나 바디 파라미터로 들어오는 문자열 값을 배열(array)로 변환하는 내장 파이프 **ParseArrayPipe**를 실습하고, 배열 요소의 타입을 지정하는 옵션 설정까지 다루는 강의.

## 내용
### ParseArrayPipe란
- **ParseArrayPipe**는 쿼리 문자열이나 바디 파라미터 같은 요청 파라미터의 문자열 값을 배열(array)로 변환하는 내장 파이프다.
- API 엔드포인트가 하나의 파라미터에 대해 여러 값(multiple values)을 필요로 할 때 유용하다.
- 기본적으로 NestJS는 들어오는 요청 파라미터 값을 문자열(string)로만 취급한다. `@Query()`나 `@Body()` 같은 데코레이터에 `ParseArrayPipe`를 적용하면 문자열 값을 배열로 변환해준다.

### 기본 사용
- 컨트롤러에 이미 정의된 `@Get()` 데코레이터와 메서드에서, `@Query()` 데코레이터의 인자로 쿼리 파라미터 이름(`num`)을 주고 `ParseArrayPipe`를 적용해 `num` 값을 `number` 배열 타입의 프로퍼티에 저장한 뒤 그 값을 반환한다.
- Postman에서 라우트와 쿼리 파라미터에 콤마(comma)로 구분된 숫자 값들을 전달하고 요청하면, 문자열 값들로 이루어진 배열이 반환된다.
- 이때 쿼리에 문자열 값을 섞어서 전달해도 그 값 역시 배열에 그대로 포함되어 전달된다.

### 배열 요소 타입 지정 — items 옵션
- 배열 안에 숫자 값만 있도록 강제하려면 파이프의 인스턴스를 `new` 키워드로 직접 생성해야 한다. 인스턴스를 생성하면 파이프에 선택적(optional) 설정을 적용할 수 있다.
- 예를 들어 `ParseArrayPipe`의 `items` 프로퍼티는 결과 배열의 각 요소가 기대하는 타입을 정의할 수 있게 해준다.
- `items`를 `Number` 타입으로 설정하면 파이프는 배열의 각 요소가 숫자여야 한다고 기대하며, 요소들을 문자열이 아닌 숫자(number)로 표시한다.
- 같은 요청을 다시 보내면 문자열 값이 포함된 인덱스(index) 위치를 알려주는 오류가 표시된다.
- 문자열 값을 제거하고 숫자 값만 넣으면 숫자 배열이 정상적으로 반환된다.

## 예시
```typescript
// 기본 사용 (문자열이 섞여도 배열로 변환만 됨)
@Get()
getValue(@Query('num', ParseArrayPipe) num: number[]) {
  return num;
}

// items 옵션으로 요소 타입을 number로 강제
@Get()
getValue(
  @Query('num', new ParseArrayPipe({ items: Number })) num: number[],
) {
  return num;
}
```

## 요약
- `ParseArrayPipe`는 쿼리 문자열/바디 파라미터의 콤마로 구분된 문자열 값을 배열로 변환하는 내장 파이프다.
- 기본 적용만으로는 배열 요소 타입이 강제되지 않으며, 문자열 값도 그대로 배열에 포함된다.
- `new ParseArrayPipe({ items: Number })`처럼 인스턴스를 생성하고 `items` 옵션을 지정하면 배열 요소의 타입(예: number)을 강제할 수 있다.
- 타입에 맞지 않는 값이 있으면 어느 인덱스에서 오류가 발생했는지 알려주는 오류 메시지가 반환된다.
