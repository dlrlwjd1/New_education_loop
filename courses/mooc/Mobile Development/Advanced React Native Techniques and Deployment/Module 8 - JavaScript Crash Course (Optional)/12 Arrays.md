# Arrays

## 개요
- 여러 값을 순서 있는 목록으로 저장하는 배열(array)을 배운다.
- 인덱스 접근, 항목 수정·추가, 길이와 배열 판별 방법을 사용한다.

## 내용
### 배열과 인덱스
- 배열은 대괄호 안에 값을 쉼표로 구분해 작성한다.
- 첫 항목의 인덱스는 `0`이다.
- `array[index]`로 값을 읽거나 같은 위치에 새 값을 할당해 수정한다.

### 추가와 확인
- `push(value)`는 배열 끝에 새 값을 추가한다.
- 다음 인덱스에 직접 값을 할당하는 방법도 있다.
- `length`는 항목 수, `Array.isArray(value)`는 배열 여부를 반환한다.
- JavaScript에서 `typeof []` 결과는 `object`다.

## 예시
```js
const colors = ['red', 'blue', 'green', 'yellow'];
console.log(colors[2]); // green

colors[3] = 'pink';
colors.push('yellow');

console.log(colors.length);        // 5
console.log(Array.isArray(colors)); // true
```

## 요약
- 배열은 인덱스로 접근하는 순서 있는 값 목록이다.
- `push`, `length`, `Array.isArray`로 추가와 상태 확인을 수행한다.
