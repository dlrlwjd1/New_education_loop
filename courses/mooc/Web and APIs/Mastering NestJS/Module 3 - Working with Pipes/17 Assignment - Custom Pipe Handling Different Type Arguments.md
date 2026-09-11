# Assignment - Custom Pipe (Handling different "type" arguments)

## 개요
- 이전 강의에서 만든 커스텀 파이프에 `metadata.type`이 `param`인 경우의 분기를 추가해, URL 파라미터로 전달된 자릿수(digit) 값만큼의 랜덤 ID를 생성하는 과제(assignment)를 실습하는 강의.

## 내용
### 과제 목표
- `metadata`에서 서로 다른 두 가지 인자 타입(argument type)을 정의하고 각각에 맞는 값 변환(value transformation)을 제공하는 간단한 과제를 구현한다.
- 이전 강의 코드를 이어서 사용한다. 이전 강의에서는 `metadata.type`이 `body`일 때 값을 대문자(upper case)로 변환했다.
- 이번에는 `metadata.type`이 `param`인 경우를 처리하는 조건을 추가한다. 목표는 사용자가 param으로 id 값(예: 1)을 입력하면, 그 값만큼의 자릿수를 가진 무작위 ID(random ID)를 생성하는 것이다. 예를 들어 사용자가 param으로 3을 입력하면 파이프는 3자리 랜덤 ID를 생성한다.

### param 값을 정수로 변환
- `type`이 `param`이므로 param 값은 `value` 파라미터에 저장되어 있다. param 값은 문자열(string)로 저장되므로 정수(integer)로 변환해야 한다.
- `const idLength = parseInt(value, 10);`처럼 작성한다. 여기서 `value`는 문자열로 된 param 데이터이고, 두 번째 인자 `10`은 진법(base) 값, 즉 10진수를 의미한다. 10진수 기준을 명시하는 이유는 문자열이 그 형식과 무관하게 항상 10진수 숫자로 해석되도록 보장하기 위해서다. 이는 JavaScript의 radix 값과 관련된 개념이다.

### 유효성 확인과 랜덤 ID 생성
- `idLength`가 유효한 양의 숫자 값(positive numeric value)인지 확인하기 위해 `if (!isNaN(idLength) && idLength > 0)` 조건을 작성한다.
- 유효한 숫자라면 랜덤 ID를 생성한다. `const randomId = Math.floor(Math.random() * Math.pow(10, idLength));`처럼 작성해, `Math.random()`과 `Math.pow(10, idLength)`를 곱한 뒤 `Math.floor()`로 정수화한다.
- ID를 생성한 뒤에는 이 `randomId` 값을 `value` 파라미터에 다시 할당한다.

### 컨트롤러에 라우트 연결
- 컨트롤러 파일에 `register/:id` 라우트를 가진 `@Get()` 핸들러와 `getId` 메서드를 정의한다.
- `@Param('id')` 데코레이터로 `id` 값을 받고, `id` 프로퍼티는 `number` 타입으로 지정한다. 메서드는 `id` 데이터를 담은 객체를 반환한다.
- `@UsePipes()` 데코레이터에 커스텀 파이프의 인스턴스(instance)를 전달해 라우트에 적용한다.

### 동작 확인
- Postman에서 GET 요청으로 param `id`에 1을 전달해 요청하면 한 자릿수 랜덤 ID 값이 생성되어 반환된다.
- param 값을 3으로 주면 세 자릿수 랜덤 ID가, 5로 주면 다섯 자릿수 랜덤 ID가 생성된다.
- 이 과제를 통해 `metadata.type` 프로퍼티를 이용해 특정 타입의 인자에 대해서만 데이터를 변환하는 방법을 익힐 수 있다.

## 예시
```typescript
// custom-pipe/phone.pipe.ts
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PhonePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      value.name = value.name.toUpperCase();
    }

    if (metadata.type === 'param') {
      const idLength = parseInt(value, 10);

      if (!isNaN(idLength) && idLength > 0) {
        const randomId = Math.floor(Math.random() * Math.pow(10, idLength));
        value = randomId;
      }
    }

    return value;
  }
}
```

```typescript
// auth/auth.controller.ts
@Get('register/:id')
@UsePipes(new PhonePipe())
getId(@Param('id') id: number) {
  return { id };
}
```

## 요약
- `metadata.type`이 `param`일 때는 `value`에 문자열 형태의 param 값이 담기며, `parseInt(value, 10)`으로 10진수 정수로 변환해야 한다.
- 변환된 자릿수 값이 유효한 양수인지 `isNaN`과 비교 연산으로 확인한 뒤, `Math.floor(Math.random() * Math.pow(10, idLength))`로 해당 자릿수의 랜덤 ID를 생성한다.
- 하나의 커스텀 파이프 안에서 `metadata.type` 값에 따라 여러 조건 분기를 두면 body, param 등 인자 종류별로 서로 다른 변환 로직을 구현할 수 있다.
