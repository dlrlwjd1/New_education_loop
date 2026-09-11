# Use async/await

## 개요
- Promise 체인도 순차 비동기 코드에는 여전히 번거롭다는 문제에서 **`async` 함수와 `await` 표현식**을 소개하고, `multiply → cube` 예를 `then` 두 개 대신 async/await로 다시 쓰는 강의

## 내용

### 왜 async/await인가
- Promise는 깔끔하고 읽기 좋은 비동기 코드와 안전장치를 주지만, **순차 비동기 코드**를 쓸 때는 여전히 **최적이 아니다.**
- Promise 체인이 콜백 지옥보다는 훨씬 낫지만, **체인의 작업마다 `then` 블록을 호출하고 새 함수를 만들어야** 한다. 일상 프로그래밍에서 가장 흔한 제어 흐름에는 여전히 과하다.
- JavaScript는 흔한 **순차 비동기 실행 흐름**을 제대로 다룰 방법이 필요했고, ECMAScript 표준의 **`async` 함수와 `await` 표현식** — 줄여서 **async/await** — 으로 이뤄졌다.
- 각 비동기 연산에서 **결과를 기다리며 멈추는 것처럼 보이는** 함수를 쓸 수 있게 해 준다. async/await로 쓴 비동기 코드는 **가독성이 더 좋다.**

### `async` 함수와 `await` 표현식
- **`async` 함수**는 안에서 **`await` 표현식**을 써서 주어진 Promise가 **resolve될 때까지 실행을 일시 중지**할 수 있는 특수한 함수다.

### 예 — `multiply` → `cube`
- `multiply`가 두 수의 곱을 계산하고 그 결과를 `cube`가 소비한다. Promise로는 **`then` 블록 두 개**와 콜백이 필요하다.
- 같은 것을 async/await로 구현하면 코드 가독성이 높아진다.

### 사용법
1. **`cubeResult` 함수에 `async` 키워드**를 붙여 async로 표시한다 — 이 함수가 Promise를 반환하는 비동기 함수들과 일한다는 뜻이다.
2. **`multiply`와 `cube`는 Promise 객체를 반환**하므로 호출할 때 **`await` 키워드**를 붙여 await 표현식으로 쓸 수 있다.

## 예시
```javascript
function multiply(a, b) {
  return new Promise((resolve) => setTimeout(() => resolve(a * b), 1000));
}
function cube(n) {
  return new Promise((resolve) => setTimeout(() => resolve(n * n * n), 1000));
}

// Promise 체인 — then 두 개
multiply(2, 3)
  .then((product) => cube(product))
  .then((result) => console.log('Cube:', result));

// async/await — 순차 코드처럼 읽힌다
async function cubeResult(a, b) {              // async 표시
  const product = await multiply(a, b);        // Promise가 resolve될 때까지 일시 중지
  const result = await cube(product);          // 이어서
  console.log('Cube:', result);                // 216
}
cubeResult(2, 3);
```

| | Promise 체인 | async/await |
|---|---|---|
| 단계마다 | `.then(cb)` + 새 함수 | `await` 한 줄 |
| 읽기 | 콜백 중첩 없음 | 동기 코드처럼 |
| 조건 | Promise 반환 | Promise 반환 함수를 `await`, 호출 함수는 `async` |

## 요약
- Promise 체인은 단계마다 `then`과 콜백을 요구해 순차 비동기 흐름에는 여전히 번거롭다.
- `async` 함수 안에서 `await`로 Promise가 resolve될 때까지 실행을 멈추면, 비동기 코드를 동기 코드처럼 읽히게 쓸 수 있다.
- Promise를 반환하는 함수는 그대로 두고, 호출하는 함수에 `async`를, 호출부에 `await`를 붙이면 된다.
