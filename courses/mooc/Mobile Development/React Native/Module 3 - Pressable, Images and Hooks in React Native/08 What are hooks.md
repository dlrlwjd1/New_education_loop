# What are hooks?

## 개요
- 훅(hook)은 컴포넌트에서 React의 상태(state)와 생명주기(lifecycle) 기능에 연결(hook into)할 수 있게 해주는 함수다.
- useState 훅으로 컴포넌트 내부의 상태를 관리하고 추적한다.
- 커스텀 훅(custom hook)을 만들어 컴포넌트 로직을 재사용 가능한 함수로 추출할 수 있다.

## 내용

### 훅이 필요한 이유
- 상태를 사용하는 컴포넌트가 여러 개면 주의하지 않을 경우 상태 변화 추적이 어려워진다.
- Little Lemon 앱에서도 여러 컴포넌트에 로컬 상태(local state)가 있어 신중한 관리가 필요하며, 훅으로 이를 쉽게 만들 수 있다.
- 훅은 함수로서, 컴포넌트에서 React의 상태와 생명주기 기능에 연결하게 해준다.

### useState 훅 복습
- useState는 컴포넌트 내부의 상태를 관리하고 추적하는 데 사용한다.
- 사용 단계:
  1. React에서 useState를 import한다.
  2. 컴포넌트 안에서 상태 변수(state variable)를 선언한다. 예: `showMenu`를 선언하고 useState로 초기값을 false로 설정.
- useState 호출은 두 가지를 만든다:
  1. 현재 상태를 나타내는 초기값을 가진 상태 변수(예: showMenu)
  2. 그 상태 변수의 값을 설정하는 함수(예: setShowMenu) — 불리언 값을 전달해 showMenu 값을 갱신한다.
- 변수·함수 이름은 컴포넌트와 유스케이스에 맞게 개발자가 자유롭게 정한다.
- 불리언뿐 아니라 문자열(string), 숫자(number), 배열(array), 객체(object) 등 어떤 데이터든 useState로 추적할 수 있다.

### 커스텀 훅과 훅의 이점
- React 내장 훅 외에 직접 훅을 만들어 커스텀 컴포넌트 로직을 재사용 가능한 함수로 추출할 수 있다.
- 훅의 가장 큰 이점은 코드의 가독성(readability)과 단순함(simplicity)이다.

## 예시

```jsx
import React, { useState } from 'react';

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  // setShowMenu(true) 등으로 상태 갱신
};
```

## 요약
- 훅은 컴포넌트에서 React 상태·생명주기 기능을 사용하게 해주는 함수다.
- useState는 상태 변수와 그 값을 갱신하는 세터 함수를 함께 만들어 준다.
- useState로 불리언, 문자열, 숫자, 배열, 객체 등 모든 형태의 데이터를 추적할 수 있다.
- 커스텀 훅으로 로직을 재사용할 수 있으며, 훅의 최대 장점은 코드의 가독성과 단순함이다.
