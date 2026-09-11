# Functions

## 개요
- 재사용 가능한 작업 단위인 JavaScript 함수를 선언하고 호출한다.
- 매개변수(parameter), 인수(argument), 반환값(return)의 역할을 배운다.

## 내용
### 함수 선언과 호출
- 함수 선언은 `function` 키워드, 함수 이름, 괄호, 코드 블록으로 구성된다.
- 선언만으로 본문이 실행되지는 않으며 함수 이름 뒤에 `()`를 붙여 호출해야 한다.

### 매개변수와 반환값
- 매개변수는 함수 선언에서 입력값을 받을 이름이다.
- 인수는 함수를 호출할 때 실제로 전달하는 값이다.
- `return`은 계산 결과를 호출 위치로 돌려준다.
- 매개변수를 사용하면 같은 함수를 여러 입력에 재사용할 수 있다.

## 예시
```js
function sum(number1, number2) {
  return number1 + number2;
}

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(sum(5, 10));
console.log(getFullName('Hero', 'Dev'));
```

## 요약
- 함수는 호출될 때 실행되는 재사용 가능한 코드 블록이다.
- 매개변수로 입력을 받고 `return`으로 결과를 제공한다.
