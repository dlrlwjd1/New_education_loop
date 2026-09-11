# Data Types

## 개요
- JavaScript의 주요 데이터 타입인 숫자, 문자열, 불리언, 객체, 배열을 소개한다.
- `typeof` 연산자로 값의 타입을 확인한다.

## 내용
### 기본 예시
- `number`는 정수와 부동소수점 수를 모두 표현한다.
- `string`은 작은따옴표, 큰따옴표, 백틱으로 감싼 문자들의 연속이다.
- `boolean`은 `true` 또는 `false`다.
- 객체와 배열은 이후 강의에서 자세히 다룬다.

### typeof
- `typeof 값`은 해당 값의 JavaScript 타입을 문자열로 반환한다.
- 따옴표로 감싼 `"5"`는 숫자처럼 보여도 문자열이다.

## 예시
```js
console.log(typeof 5);        // number
console.log(typeof -5.5);     // number
console.log(typeof 'Hello');  // string
console.log(typeof '5');      // string
console.log(typeof true);     // boolean
```

## 요약
- 값의 형태에 따라 사용할 수 있는 연산과 메서드가 달라진다.
- `typeof`로 실제 타입을 확인할 수 있다.
