# Objects

## 개요
- 서로 관련된 여러 값을 하나의 JavaScript 객체로 묶는다.
- 속성 읽기·추가·수정·삭제와 `Object.freeze`를 배운다.

## 내용
### 객체와 속성
- 객체는 중괄호 안에 `property: value` 쌍을 쉼표로 구분해 작성한다.
- 점 표기법과 대괄호 표기법으로 속성을 읽는다.
- 존재하지 않는 속성에 값을 할당하면 새 속성이 추가된다.
- `delete object.property`로 속성을 삭제한다.

### Object.freeze
- `Object.freeze(object)`를 호출하면 해당 객체의 속성 추가·삭제·수정을 막는다.
- 강의에서는 객체를 변경하지 못하게 고정하는 방법으로 소개한다.

## 예시
```js
const person = {
  firstName: 'Leo',
  lastName: 'Smith',
  age: 43,
  isMarried: true,
};

console.log(person.age);
console.log(person['lastName']);
person.eyeColor = 'blue';
person.firstName = 'New Name';
delete person.eyeColor;
Object.freeze(person);
```

## 요약
- 객체는 관련 데이터를 이름 있는 속성으로 묶는다.
- 점·대괄호 표기법으로 접근하고 필요에 따라 추가·수정·삭제한다.
