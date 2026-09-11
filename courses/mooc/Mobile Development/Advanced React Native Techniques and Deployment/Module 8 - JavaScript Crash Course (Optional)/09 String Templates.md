# String Templates

## 개요
- 백틱으로 만드는 템플릿 리터럴의 여러 줄 문자열과 값 삽입 기능을 배운다.
- `${...}`로 변수와 계산식을 문자열 안에 직접 넣는다.

## 내용
### 템플릿 리터럴
- 백틱 문자열은 실제 줄바꿈을 그대로 포함할 수 있다.
- 작은따옴표와 큰따옴표를 이스케이프하지 않고 함께 쓰기 쉽다.

### 보간
- `${variable}`로 변수 값을 문자열에 삽입한다.
- `${expression}` 안에는 곱셈 같은 계산식도 넣을 수 있다.
- 문자열 연결 연산자 `+`를 여러 번 쓰는 방식보다 읽기 쉽다.

## 예시
```js
const firstName = 'John';
const lastName = 'Cena';
const price = 100;
const taxRate = 0.25;

console.log(`Welcome, ${firstName} ${lastName}!`);
console.log(`Total tax: ${price * taxRate}`);
```

## 요약
- 템플릿 리터럴은 여러 줄 문자열과 값 보간을 간결하게 지원한다.
- `${}` 안에 변수 또는 표현식을 넣는다.
