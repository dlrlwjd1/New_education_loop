# What is the TextInput component?

## 개요
- TextInput은 키보드로 앱에 텍스트를 입력할 수 있게 하는 React Native의 핵심 내장 컴포넌트(built-in core component)다.
- 네이티브 컴포넌트이므로 기기에 따라 iOS 또는 Android의 네이티브 키보드가 열리며, 같은 코드라도 플랫폼별 경험이 조금 다를 수 있다.
- `style`, `placeholder`, `value`, `onChangeText`, `keyboardType` 같은 props로 동작을 구성한다.

## 내용

### 사용 사례: 피드백 폼
- Little Lemon 레스토랑은 고객 의견을 쉽게 받기 위해 이름, 연락처, 메시지를 입력하는 피드백 폼(feedback form)을 앱에 넣으려 한다.
- 이름(first name), 성(last name), 메시지(message) 세 개의 입력 박스를 TextInput으로 만들면, 사용자가 박스를 탭할 때 기기의 가상 키보드(virtual keyboard)가 자동으로 열린다. 이를 위한 추가 코드는 필요 없다.
- 이런 네이티브 기능이 React Native가 매끄러운 사용자 경험을 만드는 데 강점을 갖는 이유다.

### TextInput의 특징
- 자동 교정(auto correction), 플레이스홀더 텍스트(placeholder text), 다양한 키보드 타입 지원, 자동 대문자화(auto capitalization) 등 유용한 기능이 내장되어 있다.

### 주요 props
- `style`: TextInput에 스타일을 전달한다.
- `placeholder`: 사용자가 입력하기 전에 박스에 표시되는 텍스트다.
- `value`: 텍스트 입력 박스 안에 표시할 값이다.
- `onChangeText`: 박스에 무언가 입력될 때 호출되는 콜백(callback) 메서드다. 업데이트된 텍스트가 단일 문자열(string) 인자로 콜백 핸들러에 전달된다.
  - 예: `onChangeFirstName` 핸들러는 React state로 문자열 상태를 설정한다. `firstName`은 빈 문자열로 정의되어 있다가, 사용자가 입력하면 `onChangeText`가 이 핸들러를 호출해 입력된 내용으로 `firstName`의 상태를 설정한다.
- 같은 방식으로 한 화면에 여러 TextInput을 두고 firstName, lastName, message 같은 서로 다른 변수와 연결해 각각의 상태를 설정할 수 있다.

### keyboardType prop
- 사용자가 입력 박스를 탭했을 때 어떤 종류의 키보드가 열릴지 결정한다.
- 옵션: `default`, `number-pad`, `decimal-pad`, `numeric`, `email-address`, `phone-pad` 및 일부 플랫폼 전용 값
- 전화번호나 이메일 주소 입력처럼 특정 용도에 맞게 입력을 최적화할 수 있다.

## 예시

```jsx
import { useState } from 'react';
import { TextInput } from 'react-native';

const [firstName, onChangeFirstName] = useState('');

<TextInput
  style={styles.input}
  value={firstName}
  onChangeText={onChangeFirstName}
  placeholder="First Name"
/>
```

## 요약
- TextInput은 키보드를 통한 텍스트 입력을 담당하는 React Native 핵심 컴포넌트다.
- 네이티브 컴포넌트라서 탭하면 기기의 네이티브 가상 키보드가 자동으로 열린다.
- `onChangeText` 콜백으로 입력값을 React state에 저장한다.
- `keyboardType`으로 숫자, 이메일, 전화번호 등 용도에 맞는 키보드를 지정할 수 있다.
