# Strings

## 개요
- JavaScript 문자열을 생성하는 세 가지 따옴표 형식을 배운다.
- 이스케이프 문자와 `length` 속성을 사용한다.

## 내용
### 문자열 생성
- 작은따옴표와 큰따옴표는 기능상 같은 일반 문자열을 만든다.
- 백틱은 템플릿 리터럴(template literal)을 만들며 다음 강의에서 자세히 다룬다.
- 문자열 안에 구분자와 같은 따옴표를 넣을 때는 다른 따옴표를 사용하거나 `\`로 이스케이프한다.

### 이스케이프와 길이
- `\n`은 줄바꿈, `\t`는 탭, `\\`는 역슬래시 자체를 나타낸다.
- `string.length`는 공백을 포함한 문자 수를 반환한다.

## 예시
```js
const message = "I'm fine";
const lines = 'Hello\nHow are you?';
const path = 'A\\B';

console.log(lines);
console.log(message.length);
console.log(path);
```

## 요약
- 문자열은 작은따옴표, 큰따옴표, 백틱으로 만든다.
- 이스케이프 문자는 특수한 줄바꿈·탭·따옴표를 표현한다.
