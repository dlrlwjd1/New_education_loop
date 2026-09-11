# Describe User-Defined Modules

## 개요
- 애플리케이션 안에서 직접 만드는 **사용자 정의(로컬) 모듈**의 정의와, `utils.js`의 대문자·소문자 변환 함수를 `module.exports`로 내보내 `index.js`에서 쓰는 예를 다루는 짧은 강의

## 내용

### 사용자 정의 모듈이란
- **로컬 모듈**이라고도 하며, Node.js 애플리케이션 안에서 **로컬로 만든** 모듈이다.
- 다른 JavaScript 소스 파일이 쓸 수 있는 **함수를 담은 단순한 JavaScript 코드**다.

### 예
- `utils.js` 를 만들고 배열 요소를 **대문자로 바꾸는 `getInUpperCase`** 와 **소문자로 바꾸는 `getInLowerCase`** 를 담는다.
- 두 함수를 **`module.exports`** 로 내보내 다른 프로그램이 import해 쓸 수 있게 한다.
- `index.js` 를 만들어 `utils.js`를 import하고 내보낸 기능을 쓴다 — `getCapital`·`getLower` 메서드가 export된 함수를 사용한다.

## 예시
```javascript
// utils.js — 사용자 정의(로컬) 모듈
function getInUpperCase(arr) {
  return arr.map((s) => s.toUpperCase());
}
function getInLowerCase(arr) {
  return arr.map((s) => s.toLowerCase());
}
module.exports = { getInUpperCase, getInLowerCase };
```

```javascript
// index.js
const utils = require('./utils');

function getCapital(arr) { return utils.getInUpperCase(arr); }
function getLower(arr)   { return utils.getInLowerCase(arr); }

console.log(getCapital(['Ben', 'Amy']));   // ['BEN', 'AMY']
console.log(getLower(['Ben', 'Amy']));     // ['ben', 'amy']
```

## 요약
- 사용자 정의(로컬) 모듈은 애플리케이션 안에서 직접 만든 함수 모음 파일이다.
- `module.exports`로 함수를 내보내고 다른 파일에서 `require`해 사용한다.
