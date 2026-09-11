# Using TextInput Methods

## 개요
- TextInput 컴포넌트의 자주 쓰는 메서드를 실습하는 데모다.
- `onFocus`는 입력 박스가 포커스(focus)될 때, `onBlur`는 포커스를 잃을 때(blurred) 호출되는 콜백이다.
- `clearButtonMode`는 iOS 전용 prop으로, 텍스트 박스 오른쪽에 지우기 버튼(clear button)을 표시한다.

## 내용

### onFocus
- 텍스트 입력이 포커스될 때 호출되는 콜백 메서드다.
- 데모: first name 박스가 포커스될 때 알림(alert)을 표시하기 위해 Alert 컴포넌트를 import하고, first name TextInput의 `onFocus`에 "First name is focused" 메시지를 표시하는 함수를 전달한다.
- 에뮬레이터에서 first name 박스를 클릭하면 해당 메시지가 팝업되고, OK를 눌러 닫은 뒤 계속 입력할 수 있다.

### onBlur
- 텍스트 입력이 블러(blur)될 때, 즉 포커스가 다른 곳으로 옮겨질 때 자동으로 호출되는 콜백이다.
- 데모: first name TextInput의 `onBlur`에 "First name is now blurred" 알림을 설정한다.
- 박스에 텍스트를 입력하고 리턴(return) 키를 누르면 포커스가 해제되면서 onBlur가 호출되어 메시지가 팝업된다.

### clearButtonMode
- 입력을 한 번에 지우는 버튼이 텍스트 박스 오른쪽에 언제 나타날지 결정하는 prop이다. 백스페이스를 여러 번 누를 필요가 없어진다.
- 이 prop은 이넘(enum, 열거형: 고정된 값 집합을 갖는 데이터 타입)이며 값은 `never`, `while-editing`, `unless-editing`, `always`다.
- 데모에서는 first name에 `always`를 지정해 버튼이 항상 나타나게 하고, last name과 message 박스에도 복사해 적용한다.
- 주의 사항:
  - iOS에서만 사용 가능하며 기본값은 `never`다. Android에서 같은 기능을 원하면 직접 구현하거나 해당 기능을 제공하는 라이브러리를 써야 한다.
  - 여러 줄(multiline) 입력에서는 동작하지 않는다. message 박스의 `multiline`을 `false`로 바꿔야 지우기 버튼이 올바르게 표시된다.
- 에뮬레이터 확인: 텍스트를 입력하면 박스 오른쪽에 X 버튼이 나타나고, 클릭하면 텍스트가 지워지고 키보드가 다시 올라온다. 버튼 디자인이나 클릭 처리를 직접 만들 필요 없이 내장 prop만으로 얻는다. message 박스에서는 적용된 스타일 때문에 버튼이 세로 중앙에 위치한다.

## 예시

```jsx
import { Alert, TextInput } from 'react-native';

<TextInput
  style={styles.input}
  value={firstName}
  onChangeText={onChangeFirstName}
  placeholder="First Name"
  onFocus={() => { Alert.alert('First name is focused'); }}
  onBlur={() => { Alert.alert('First name is now blurred'); }}
  clearButtonMode="always"
/>
```

## 요약
- `onFocus`는 입력 박스가 포커스될 때, `onBlur`는 포커스를 잃을 때 자동으로 호출되는 콜백이다.
- `clearButtonMode`(never / while-editing / unless-editing / always)는 입력 내용을 한 번에 지우는 버튼을 표시한다.
- `clearButtonMode`는 iOS 전용이고 기본값은 `never`이며, multiline 입력에서는 동작하지 않는다.
