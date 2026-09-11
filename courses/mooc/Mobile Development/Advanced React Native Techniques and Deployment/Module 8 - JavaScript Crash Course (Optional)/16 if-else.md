# if-else

## 개요
- 조건에 따라 서로 다른 코드를 실행하는 `if`, `else if`, `else`를 배운다.
- 시간대에 따라 다른 인사말을 출력하는 예제를 구현한다.

## 내용
### 조건 분기
- `if` 조건이 truthy이면 첫 블록을 실행한다.
- 첫 조건이 거짓이면 순서대로 `else if` 조건을 검사한다.
- 앞선 조건이 모두 거짓이면 `else` 블록을 실행한다.
- 한 분기가 선택되면 뒤의 분기는 실행하지 않는다.

## 예시
```js
const hour = 14;

if (hour < 10) {
  console.log('Good morning');
} else if (hour < 20) {
  console.log('Good day');
} else {
  console.log('Good evening');
}
```

## 요약
- 조건문은 참·거짓에 따라 실행 경로를 선택한다.
- 여러 조건은 구체적인 순서로 `if`와 `else if`에 배치하고 기본 경로는 `else`로 처리한다.
