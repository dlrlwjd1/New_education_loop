# Logical Operator

## 개요
- 논리 AND, OR, NOT 연산자로 여러 조건을 조합하거나 반전한다.
- 로그인 조건 예제로 각 연산자가 필요한 상황을 구분한다.

## 내용
### 논리 연산자
- `&&`는 모든 조건이 truthy일 때 참이 된다.
- `||`는 조건 중 하나라도 truthy이면 참이 된다.
- `!`는 불리언 의미를 반대로 바꾼다.

### 로그인 예시
- 이메일과 비밀번호가 모두 필요하면 AND 조건을 사용한다.
- 이메일 또는 전화번호 중 하나로 로그인할 수 있으면 OR 조건을 사용한다.

## 예시
```js
const emailExists = true;
const passwordExists = false;
const phoneExists = true;

console.log(emailExists && passwordExists); // false
console.log(emailExists || phoneExists);    // true
console.log(!emailExists);                  // false
```

## 요약
- `&&`는 모든 조건, `||`는 하나 이상의 조건을 요구한다.
- `!`는 조건의 참·거짓을 반전한다.
