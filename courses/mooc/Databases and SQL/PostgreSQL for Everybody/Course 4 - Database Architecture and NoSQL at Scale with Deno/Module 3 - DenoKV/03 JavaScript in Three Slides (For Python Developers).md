# JavaScript in Three Slides (For Python Developers)

## 개요
- Python 개발자를 대상으로, 이후 실습 코드를 읽고 이해하는 데 필요한 최소한의 JavaScript 문법(객체·배열·조건문·반복문)을 Python과 나란히 비교하며 빠르게 소개하는 강의

## 내용
### Python과 JavaScript의 관계
- Python(1991년)이 JavaScript(1995년)보다 먼저 만들어졌으며, 둘 다 인터프리터 언어라 유사한 객체 모델을 공유하지만, JavaScript는 C 문법(중괄호, 세미콜론 등)을 모방한 반면 Python은 독자적인 들여쓰기 기반 문법을 만들었다.
- JavaScript의 객체(object)는 Python의 딕셔너리와 매우 유사하며, JSON(JavaScript Object Notation)은 사실상 이 객체 리터럴 문법 그 자체다.

### 문법 대응표(로제타 스톤)
- **객체/딕셔너리**: Python `x = {'key': 'value'}` ↔ JavaScript `const x = {key: 'value'}` — 키가 문자열이 아니라 객체의 멤버 변수라는 점이 다르다.
- **출력**: Python `print(...)` ↔ JavaScript `console.log(...)`.
- **배열/리스트**: Python `['Bob', 'Alice']` ↔ JavaScript `['Bob', 'Alice']` — 문법이 거의 동일하다.
- **조건문**: Python은 들여쓰기로 블록을 구분(`if a < 20:` 다음 줄 들여쓰기)하지만, JavaScript는 중괄호 `{ }`로 블록을 구분한다(들여쓰기는 선택 사항이지만 관례상 권장됨).
- **반복문**: Python `for i in range(5):` ↔ JavaScript `for (let i = 0; i < 5; i++) { }` — 문법이 크게 다르다.
- **문자열 분할/연결**: 두 언어 모두 유사한 방식으로 지원된다.

### 이 강의의 목적
- 강사는 수강생이 JavaScript 코드를 직접 작성할 필요는 없으며, 제공되는 코드를 "읽고 이해"하거나 한두 줄을 수정할 수 있는 정도, 그리고 구문 오류가 나면 AI 등의 도움을 받아 디버깅할 수 있는 정도의 이해만 목표로 한다고 명확히 한다.

## 예시
```python
# Python
x = {'key': 'value', 'line': 25}
print(x)

y = ['Bob', 'Alice']

a = 17
if a < 20:
    print('less than 20')
else:
    print('20 or more')

for i in range(5):
    print(i)
```
```javascript
// JavaScript
const x = {key: 'value', line: 25};
console.log(x);

const y = ['Bob', 'Alice'];

let a = 17;
if (a < 20) {
    console.log('less than 20');
} else {
    console.log('20 or more');
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## 요약
- JavaScript의 객체·배열은 Python의 딕셔너리·리스트와 개념적으로 매우 유사하며, JSON은 사실상 JavaScript 객체 리터럴 문법이다.
- 조건문·반복문은 Python(들여쓰기 기반)과 JavaScript(중괄호 기반)가 문법적으로 다르다.
- 이 강좌에서는 JavaScript를 직접 작성하기보다 제공된 코드를 읽고 이해하는 수준의 지식만 요구된다.
