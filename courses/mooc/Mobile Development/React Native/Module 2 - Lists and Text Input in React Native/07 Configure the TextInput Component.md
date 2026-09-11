# Configure the TextInput Component

## 개요
- TextInput 컴포넌트를 구성해 Little Lemon 앱의 간단한 피드백 폼(feedback form)을 만드는 실습 데모다.
- ScrollView 안에 헤딩, 안내 텍스트, 세 개의 TextInput(first name, last name, message)을 배치한다.
- 각 입력값은 `useState` 훅(hook)으로 로컬 상태(local state)를 추적한다.

## 내용

### 기본 레이아웃 구성
1. FeedbackForm이라는 새 컴포넌트를 만든다. 폼에 사용할 스타일은 styles 컴포넌트에 이미 있다.
2. TextInput 컴포넌트를 import한다.
3. return 문에서 ScrollView 컴포넌트를 렌더링하고 폼을 그 안에 배치한다. ScrollView 자체에도 스타일을 적용한다.
4. 헤딩으로 "How was your visit to Little Lemon" 텍스트를 Text 컴포넌트로 표시하고 스타일을 적용한다.
5. 헤딩 아래에 다른 스타일의 안내 텍스트(informative text)를 Text 컴포넌트로 추가한다.

### 첫 번째 TextInput (first name)
- 마지막 Text 컴포넌트 아래에 TextInput을 추가하고 기존 `input` 스타일을 전달한다. 이 스타일은 높이(height), 패딩(padding), 글자 크기(font size), 테두리 색(border color) 등을 정의한다.
- `value`에는 `firstName`, `onChangeText`에는 `onChangeFirstName` 메서드를 지정한다.
- `useState` 훅을 빈 문자열 기본값으로 사용해 로컬 상태를 만든다.
- 동작: `firstName`이 로컬 상태이고, 사용자가 입력을 시작하면 `onChangeText`가 `onChangeFirstName`을 호출해 입력된 내용이 새 로컬 상태가 된다.
- iOS 에뮬레이터에서 입력 박스를 클릭하면 네이티브 iOS 키보드가 올라오고 입력한 내용이 박스에 나타난다.

### 나머지 TextInput 추가 (last name, message)
- firstName 변수 선언을 두 번 복사해 `lastName`/`onChangeLastName`, `message`/`onChangeMessage`로 이름을 바꾼다.
- 같은 컴포넌트 안에 로컬 상태는 개수 제한 없이 둘 수 있으며, 변경 사항을 추적하는 가장 좋은 방법이다.
- ScrollView 안의 TextInput도 두 번 복사해 `value`와 `onChangeText` props를 새 변수에 맞게 바꾼다.

### Android에서 확인
- Android 에뮬레이터에서도 헤더, 안내 텍스트, 세 개의 입력 박스가 표시된다.
- 박스를 클릭하면 iOS와 조금 다른 Android 키보드가 올라오지만 기능적 동작은 모든 플랫폼에서 동일하다.

## 예시

```jsx
import { useState } from 'react';
import { ScrollView, Text, TextInput } from 'react-native';

const FeedbackForm = () => {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingSection}>
        How was your visit to Little Lemon?
      </Text>
      <Text style={styles.infoSection}>
        {/* 안내 텍스트 */}
      </Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={onChangeFirstName}
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={onChangeLastName}
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={onChangeMessage}
      />
    </ScrollView>
  );
};
```

## 요약
- 피드백 폼은 ScrollView 안에 Text(헤딩·안내문)와 세 개의 TextInput으로 구성한다.
- 각 TextInput은 `value`와 `onChangeText` props로 `useState` 훅의 로컬 상태와 연결한다.
- 같은 컴포넌트 안에 로컬 상태를 여러 개(제한 없이) 둘 수 있다.
- 키보드 모양은 플랫폼마다 다르지만 기능적 동작은 동일하다.
