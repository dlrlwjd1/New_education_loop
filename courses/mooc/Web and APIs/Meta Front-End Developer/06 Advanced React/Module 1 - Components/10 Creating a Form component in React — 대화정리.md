# Creating a Form component in React — 대화정리

> 원본 강의: [10 Creating a Form component in React.md](10%20Creating%20a%20Form%20component%20in%20React.md)

## 개요
- 09번에서 배운 제어 컴포넌트 개념을 실제 폼으로 구현하는 실습 강의. 로컬 state + `onChange`로 입력을 제어하고, 제출 시 기본 동작을 막고, 폼이 유효하지 않을 때 제출 버튼을 비활성화하는 방법을 다룬다.

## 내용

### 이 강의에서 새로 나온 실전 포인트
1. **로컬 state + `onChange`**로 입력값을 관리하는 제어 컴포넌트를 만든다 (09번 내용의 실습).
2. **폼 제출 시 기본 동작을 막는다** — `event.preventDefault()`를 쓴다.
3. **폼이 유효하지 않을 때 제출 버튼을 비활성화**한다 (예: 텍스트 입력이 비어있으면 제출 못 하게).
4. 접근성을 위해 `<label>`을 `<input>`과 `htmlFor`/`id`로 연결한다.

### `event.preventDefault()`가 필요한 이유
- HTML `<form>`은 브라우저 기본 동작으로, 제출 시 **페이지 전체를 새로고침하면서 `action` 속성에 지정된 URL로 이동**한다 (서버로 폼 데이터를 보내고 새 HTML을 받던 시절의 동작 방식).
- React 같은 SPA에서 이 기본 동작이 그대로 일어나면 React가 메모리에 들고 있던 모든 state가 날아가고 앱이 처음부터 다시 로드된다.
- `onSubmit` 핸들러 맨 앞에서 `event.preventDefault()`를 호출해 이 브라우저 기본 동작(페이지 이동)만 막고, 대신 JS 로직(state 업데이트, API 호출 등)이 실행되게 한다.
- React Native에는 `<form>` 자체가 없어서(브라우저가 없으니 "페이지 새로고침" 개념도 없음) `preventDefault()`는 쓰지 않는다. 대신 버튼의 `onPress`가 함수를 직접 호출하는 구조라 애초에 막을 기본 동작이 없다.

### `<form>` 대신 `<div>` + `onClick`으로 구현해도 되는가
- 버튼 클릭만으로 제출하는 것 자체는 `<div>`로도 동작한다. 하지만 `<form>`을 안 쓰면 잃는 것들이 있다:
  1. **Enter 키로 제출이 안 됨** — `<form>` 안의 `<input>`에서 Enter를 누르면 브라우저가 자동으로 submit 이벤트를 발생시킨다. `<div>`로 바꾸면 이 동작이 없어져서 `onKeyDown`으로 Enter 키를 직접 감지해야 한다.
  2. **접근성이 약해짐** — `<form>`은 스크린 리더 등 보조 기술에 "하나의 입력 묶음"이라는 의미를 전달한다. `<div>`는 의미 없는 상자일 뿐이다.
  3. **브라우저 내장 유효성 검사를 못 씀** — `<input required>`, `type="email"` 같은 HTML5 검증은 `<form>` 제출 시 브라우저가 자동으로 체크해준다.
  4. **자동완성/비밀번호 관리자 연동이 약해짐** — 브라우저와 비밀번호 관리자는 `<form>` 구조를 보고 로그인 폼 등을 판단해 자동완성을 제공한다.
- 결론: 필드 1개짜리 단순 UI(검색창 등)는 `<div>`로도 큰 문제가 없지만, **필드가 여러 개인 진짜 폼(로그인, 회원가입, 결제 등)**에는 위 이유들 때문에 `<form>`을 쓰는 게 낫다.

## 예시

09~10번 내용을 하나로 합친 전형적인 제어 폼 예제:

```jsx
import { useState } from 'react';

function FeedbackForm() {
  // 로컬 state가 입력값의 단일 정보 소스(source of truth)
  const [message, setMessage] = useState('');

  // onChange로 사용자가 타이핑할 때마다 state를 갱신
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  // 제출 시 브라우저 기본 동작(페이지 이동)을 막고, 우리 로직만 실행
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('제출된 값:', message);
    setMessage(''); // 제출 후 입력창 비우기
  };

  // 값이 비어있으면(trim 후) 폼이 유효하지 않은 상태
  const isFormValid = message.trim().length > 0;

  return (
    <form onSubmit={handleSubmit}>
      {/* label을 input과 연결 (접근성) */}
      <label htmlFor="feedback">피드백</label>
      <input
        id="feedback"
        type="text"
        value={message}       // DOM이 아니라 state가 값을 통제 (제어 컴포넌트)
        onChange={handleChange}
      />

      {/* 폼이 유효하지 않으면 제출 버튼 비활성화 */}
      <button type="submit" disabled={!isFormValid}>
        제출
      </button>
    </form>
  );
}
```

만약 `value={message}` 대신 `defaultValue={message}`만 썼다면 → 08번에서 본 "제어 안 된" 컴포넌트가 되고, 리스트 안에서 index-key와 결합하면 그 버그가 재현된다.

## 요약
- 제어 폼은 로컬 state + `onChange`로 값을 관리하고, `onSubmit`에서 `preventDefault()`로 브라우저 기본 동작(페이지 이동)을 막고, 유효성에 따라 제출 버튼을 비활성화하는 패턴으로 만든다.
- `<form>` 대신 `<div>` + `onClick`으로도 클릭 제출은 되지만, Enter 키 제출·접근성·브라우저 내장 검증·자동완성을 잃는다. 필드가 여러 개인 진짜 폼에는 `<form>`을 쓰는 게 낫다.
- React Native에는 `<form>` 자체가 없어 `preventDefault()`도 쓰지 않지만, 로컬 state + `onChange`로 입력을 제어하는 패턴은 그대로 `TextInput`으로 이어진다.
