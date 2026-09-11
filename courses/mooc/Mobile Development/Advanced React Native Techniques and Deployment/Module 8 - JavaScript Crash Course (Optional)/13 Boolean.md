# Boolean

## 개요
- JavaScript 불리언 값 `true`와 `false`를 배운다.
- 비교 표현식과 `Boolean()` 변환으로 truthy·falsy 값을 확인한다.

## 내용
### 불리언과 비교
- `true`는 참, `false`는 거짓을 나타낸다.
- `5 > 4` 같은 비교 표현식의 결과는 불리언이다.

### truthy와 falsy
- `Boolean(value)`는 값을 불리언으로 변환한다.
- 강의에서는 값이 있는 문자열과 0이 아닌 숫자를 truthy 예로 든다.
- `0`, `undefined`, `NaN`, `false`는 falsy 예다.
- 문자열 `'false'`는 내용과 관계없이 비어 있지 않은 문자열이므로 truthy다.

## 예시
```js
console.log(5 > 4);            // true
console.log(Boolean('name'));  // true
console.log(Boolean(-5));      // true
console.log(Boolean(0));       // false
console.log(Boolean(NaN));     // false
console.log(Boolean('false')); // true
```

## 요약
- 불리언은 참과 거짓 두 값으로 조건을 표현한다.
- `Boolean()`으로 다양한 값의 truthy·falsy 여부를 확인할 수 있다.
