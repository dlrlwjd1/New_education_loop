# Passing props to TextInput Component

## 개요
- 피드백 폼의 TextInput 기능을 확장하는 다양한 props를 실습하는 데모다.
- `placeholder`, `multiline`, `maxLength`, `secureTextEntry`, `keyboardType`을 다룬다.
- 이 모든 것은 네이티브 컴포넌트라 네이티브 코드를 직접 작성할 필요가 없다.

## 내용

### placeholder
- 사용자가 입력하기 전 텍스트 박스에 플레이스홀더 텍스트를 채워, 그 박스가 무엇을 위한 것인지 이해하도록 돕는다.
- 예: 첫 번째 박스에 "First Name", 두 번째에 "Last Name", 피드백 박스에 "Please leave feedback"을 지정한다.
- 입력을 시작하면 플레이스홀더 텍스트는 입력 내용으로 대체된다.

### multiline
- `multiline={true}`로 설정하면 기본적으로는 허용되지 않는 여러 줄 입력이 가능해진다.
- 설정하지 않으면 긴 메시지가 첫 줄 이후 잘려 보인다. 많은 글자를 입력받는 폼에 유용하다.

### maxLength
- 텍스트 박스에 입력할 수 있는 최대 글자 수를 제한한다.
- JavaScript로 직접 로직을 구현하는 대신 이 prop을 쓰면 깜빡임(flicker)을 피할 수 있다.
- 예: 피드백 박스의 최대 글자 수를 250자로 설정한다.

### secureTextEntry
- 비밀번호(password) 같은 민감한 텍스트를 가리는(obscure) prop이다. 기본값은 `false`다.
- 로그인 페이지의 비밀번호 필드에 사용한다. `secureTextEntry={true}`로 설정하면 입력 내용이 보이지 않는다.
- 데모에서는 first name 박스에 잠시 적용했다가, 이름은 가릴 필요가 없으므로 제거한다.

### keyboardType
- 숫자 입력이 필요할 때 등 키보드 종류를 지정한다.
- 전화번호용 TextInput을 추가하고 전화번호 상태(state)도 추가한 뒤, iOS와 Android 모두에서 동작하는 `phone-pad`를 지정한다.
- 에뮬레이터에서 전화번호 박스를 클릭하면 네이티브 phone pad가 열려 문자 대신 숫자를 입력할 수 있다.
- 다른 박스로 전환하면 키보드가 즉시 바뀐다. 이름 박스는 표준 키보드, 전화번호 박스는 phone pad.
- 모두 네이티브 컴포넌트이므로 네이티브 코드를 작성하지 않고 React Native 패키지에 포함된 네이티브 컴포넌트를 바로 사용한다.

### 기타 props
- 이 외에도 `autoFocus`, `autoCorrect`, 자동 완성(autocompletion) 등 다양한 props가 있으며, 필요(use case)에 따라 켜고 끄면 된다.

## 예시

```jsx
<TextInput
  style={styles.input}
  value={firstName}
  onChangeText={onChangeFirstName}
  placeholder="First Name"
/>

<TextInput
  style={styles.input}
  value={message}
  onChangeText={onChangeMessage}
  placeholder="Please leave feedback"
  multiline={true}
  maxLength={250}
/>

<TextInput
  style={styles.input}
  value={phoneNumber}
  onChangeText={onChangePhoneNumber}
  placeholder="Phone Number"
  keyboardType="phone-pad"
/>

{/* 비밀번호 필드 예 */}
<TextInput secureTextEntry={true} />
```

## 요약
- `placeholder`는 입력 전 안내 텍스트를 표시해 박스의 용도를 알려준다.
- `multiline={true}`는 여러 줄 입력을 허용하고, `maxLength`는 최대 글자 수를 제한한다.
- `secureTextEntry={true}`는 비밀번호처럼 민감한 입력을 가린다 (기본값 false).
- `keyboardType="phone-pad"` 등으로 입력 용도에 맞는 네이티브 키보드를 열 수 있고, 박스 전환 시 키보드가 즉시 바뀐다.
