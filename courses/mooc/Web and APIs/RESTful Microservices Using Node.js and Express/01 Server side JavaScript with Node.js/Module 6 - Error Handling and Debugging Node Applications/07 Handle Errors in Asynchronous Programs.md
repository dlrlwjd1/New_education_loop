# Handle Errors in Asynchronous Programs

## 개요
- 비동기 프로그램의 오류 처리 세 가지 — **에러 우선 콜백(error-first callback)**, Promise의 **`catch`** 블록, async 함수 안의 **try-catch-finally**

## 내용

### 에러 우선 콜백
- `readFile` 같은 비동기 메서드의 콜백은 **첫 파라미터로 Error 객체**를 받는다.
- 그 파라미터가 **null이 아니면** Error 인스턴스이며, 오류가 발생한 것이므로 적절히 처리해야 한다.

### Promise와 async 함수
- **Promise**는 앞선 `then` 블록들에서 던져진 오류를 **`catch`** 블록으로 처리한다.
- **async 함수**는 안에 **try-catch-finally** 블록을 둘 수 있다.

## 예시
```javascript
const fs = require('fs');
const fsp = require('fs/promises');

// 1) 에러 우선 콜백
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err !== null) {                 // 첫 인자가 null이 아니면 오류
    return console.error('callback error:', err.message);
  }
  console.log(data);
});

// 2) Promise — catch 블록
fsp.readFile('input.txt', 'utf8')
  .then((data) => data.toUpperCase())
  .then((upper) => console.log(upper))
  .catch((err) => console.error('promise error:', err.message));

// 3) async 함수 — try-catch-finally
async function readUpper() {
  try {
    const data = await fsp.readFile('input.txt', 'utf8');
    console.log(data.toUpperCase());
  } catch (err) {
    console.error('async error:', err.message);
  } finally {
    console.log('read attempted');
  }
}
readUpper();
```

## 요약
- 콜백 기반 비동기 API는 첫 인자로 오류를 넘기므로 null 여부를 먼저 확인한다.
- Promise 체인은 마지막 `catch`가 앞선 `then`들의 오류를 모두 받는다.
- async 함수 안에서는 동기 코드처럼 try-catch-finally를 쓴다.
