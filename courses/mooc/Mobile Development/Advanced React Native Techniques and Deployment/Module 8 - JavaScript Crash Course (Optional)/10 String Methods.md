# String Methods

## 개요
- 문자열 인덱스가 0부터 시작한다는 점을 익힌다.
- 문자 접근, 대소문자 변환, 부분 문자열 추출, 치환 메서드를 사용한다.

## 내용
### 문자 접근과 인덱스
- 첫 문자의 인덱스는 `0`이다.
- `charAt(index)`, `at(index)`, 대괄호 접근으로 특정 문자를 읽을 수 있다.

### 변환과 추출
- `toUpperCase()`와 `toLowerCase()`는 대소문자를 바꾼 새 문자열을 반환한다.
- `slice(start, end)`와 `substring(start, end)`은 지정 범위의 문자열을 추출한다.
- `replace(search, replacement)`는 강의 예제에서 첫 번째 일치 항목을 바꾼다.

## 예시
```js
const text = 'Hello';
console.log(text.charAt(0));       // H
console.log(text.at(1));           // e
console.log(text.toUpperCase());   // HELLO
console.log('   Hello'.slice(3));  // Hello
console.log('Salah Messi Xavi'.replace('Xavi', 'Ronaldo'));
```

## 요약
- 문자열과 배열의 인덱스는 0부터 시작한다.
- 내장 메서드로 문자 접근, 대소문자 변환, 추출, 치환을 수행한다.
