# var let const

## 개요
- JavaScript 변수 선언 키워드 `var`, `let`, `const`의 기본 차이를 배운다.
- 재할당 가능 여부와 스코프(scope)의 차이를 간단히 소개한다.

## 내용
### 재할당
- `var`와 `let`으로 선언한 변수는 다른 값을 다시 할당할 수 있다.
- `const` 변수 자체에는 새 값을 재할당할 수 없다.
- 값이 바뀌지 않아야 한다면 `const`, 다시 할당해야 한다면 `let`을 사용한다.

### 스코프 소개
- `var`는 함수 스코프(function scope)를 가진다.
- `let`과 `const`는 블록 스코프(block scope)를 가진다.
- 강의에서는 이 차이의 상세 설명은 뒤로 미룬다.

## 예시
```js
let score = 5;
score = 20;

const limit = 10;
// limit = 30; // TypeError: const에는 재할당할 수 없음

console.log(score + limit); // 30
```

## 요약
- `let`은 재할당 가능, `const`는 재할당 불가능하다.
- 일반적으로 변경하지 않을 값은 `const`로 선언한다.
