# Handling the Virtual Keyboard

## 개요
- Little Lemon 피드백 폼에 `keyboardDismissMode`와 `KeyboardAvoidingView`를 실제로 적용하는 실습 데모다.
- `keyboardDismissMode="on-drag"`로 스크롤 시 키보드를 닫는다.
- `KeyboardAvoidingView`와 Platform API로 키보드가 입력 박스를 가리지 않게 만든다.

## 내용

### 문제 상황
- 피드백 폼에 세 개의 TextInput이 있고 first name 박스를 클릭하면 가상 키보드가 나타난다.
- 키보드가 떠 있는 상태에서 스크롤해도 키보드가 그대로 고정되어 있다. 스크롤하면 키보드가 사라지는 편이 사용자에게 더 직관적(intuitive)이다.

### keyboardDismissMode
- TextInput들은 ScrollView 안에 감싸져 있고, ScrollView에는 드래그(drag)에 반응해 키보드를 닫을지 결정하는 `keyboardDismissMode` prop이 있다.
- 값 세 가지:
  - `none`(기본값): 드래그해도 키보드가 닫히지 않는다.
  - `on-drag`: 드래그가 시작되면 키보드가 사라진다.
  - `interactive`(iOS 전용): 드래그에 따라 상호작용적으로(interactively) 키보드가 닫힌다.
- ScrollView 태그에 `on-drag`를 설정하면 그 ScrollView 안의 모든 TextInput에 적용된다.
- 에뮬레이터 확인: 이름을 입력하고 스크롤하면 키보드가 닫힌다. 긴 폼을 채울 때 키보드가 방해되지 않도록 하는 데 매우 유용하다.

### KeyboardAvoidingView와 Platform
- React Native에서 `KeyboardAvoidingView`와 `Platform`을 import한다.
- KeyboardAvoidingView는 가상 키보드가 표시될 때 뷰가 비켜나야 하는 문제를 해결하며, 키보드 높이에 따라 높이(height), 위치(position), 하단 패딩(bottom padding)을 자동 조정한다.
- ScrollView 위의 메인 컨테이너 뷰(main container view)로 KeyboardAvoidingView를 감싸고, ScrollView에 있던 스타일을 KeyboardAvoidingView로 옮긴다.
- `behavior` prop은 Platform API로 플랫폼별로 다르게 지정할 수 있다. `Platform.OS`로 사용자가 iOS, Android, Windows 등 어느 플랫폼에서 접속했는지 알 수 있다.
- 조건식으로 `Platform.OS === 'ios'`이면 `padding`, 그 외에는 `height`로 설정한다. 이는 React Native가 권장하는 설정이다.
- KeyboardAvoidingView의 닫는 태그는 ScrollView 닫는 태그 아래에 둔다.

### 적용 결과
- iOS: last name 박스를 클릭하면 키보드가 나타날 때 박스가 살짝 위로 밀려 완전히 보인다. 이전에는 키보드에 일부 가려졌다. message 박스도 동일하다.
- KeyboardAvoidingView는 나머지 뷰를 위로 밀어 올린다. 헤더나 다른 입력 박스 일부가 안 보일 수 있지만, 지금 입력 중인 내용은 온전히 보이는 것이 핵심이다.
- Android: 포커스된 입력 박스 하단과 키보드 사이 패딩이 더 크는 등 모양과 동작이 조금 다르지만 기능적으로는 iOS와 동일하다.

## 예시

```jsx
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

<KeyboardAvoidingView
  style={styles.container}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>
  <ScrollView keyboardDismissMode="on-drag">
    {/* TextInput 컴포넌트들 */}
  </ScrollView>
</KeyboardAvoidingView>
```

## 요약
- `keyboardDismissMode` 값: `none`(기본), `on-drag`, `interactive`(iOS 전용).
- ScrollView에 설정하면 내부의 모든 TextInput에 적용된다.
- KeyboardAvoidingView를 메인 컨테이너로 감싸고 `behavior`를 iOS는 `padding`, 그 외는 `height`로 설정하는 것이 React Native의 권장 방식이다.
- 키보드가 나타나면 뷰가 위로 밀려 입력 중인 박스가 가려지지 않는다.
