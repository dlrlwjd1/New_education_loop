# Virtual Keyboard on Mobile Apps

## 개요
- 가상 키보드(virtual keyboard)는 처리하지 않으면 화면 요소를 가리는 등 사용자 경험을 해칠 수 있다.
- ScrollView의 `keyboardDismissMode` 속성으로 스크롤 시 키보드를 닫을 수 있다.
- `KeyboardAvoidingView` 컴포넌트로 키보드가 다른 요소를 가리지 않도록 뷰를 자동 조정한다.

## 내용

### 가상 키보드를 신경 써야 하는 이유
- 모바일 앱 테스트는 보통 물리 키보드가 있는 컴퓨터의 에뮬레이터에서 하므로 가상 키보드를 잊기 쉽다.
- 테스트 중 에뮬레이터에서 가상 키보드를 여는 습관을 들이는 것이 좋다. 단축키: Windows는 Control+Shift+K, Mac은 Command+Shift+K.
- 웹 애플리케이션과 달리 모바일 앱은 화면 공간(screen real estate)이 제한적이어서, 처리하지 않으면 요소들이 서로 충돌할 수 있다.
- Little Lemon 피드백 폼 예시: 스크롤해도 키보드가 그대로 남아 아래 내용을 가려서 불편하다.

### keyboardDismissMode
- ScrollView 안에 설정할 수 있는 속성이다.
- `on-drag`로 설정하면 사용자가 화면 스크롤을 시작할 때 키보드가 자동으로 닫혀(dismiss), 스크롤 중에 키보드가 가리지 않는 전체 뷰를 볼 수 있다.
- TextInput들을 감싸는 ScrollView에 이 속성을 설정하면 되고, 스크롤을 시작하는 순간 키보드가 자동으로 사라진다.
- 스크롤 중에도 키보드를 유지하고 싶으면 `none`으로 설정한다.

### KeyboardAvoidingView
- 가상 키보드를 피해서 뷰가 이동해야 하는 흔한 문제를 해결하는 컴포넌트다.
- 키보드 높이에 따라 자신의 높이(height), 위치(position), 하단 패딩(bottom padding)을 자동으로 조정한다.
- View 컴포넌트의 모든 props를 상속한다. 즉, 가상 키보드 처리 기능이 추가된 View 컴포넌트다.
- `behavior` prop은 키보드가 나타났을 때 컴포넌트가 어떻게 반응할지 지정하며 `height`, `position`, `padding` 세 값을 받는다.
- React Native의 Platform API로 사용자의 OS를 판별해 iOS와 Android에 서로 다른 behavior 값을 줄 수 있다.
- 설정 후 TextInput 컴포넌트들을 KeyboardAvoidingView로 감싼다.
- 적용 결과: 키보드가 나타나면 폼이 위로 밀려 올라가 입력 박스가 키보드에 가려지지 않고 완전히 보인다.

## 예시

```jsx
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';

<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>
  <ScrollView keyboardDismissMode="on-drag">
    {/* TextInput 컴포넌트들 */}
  </ScrollView>
</KeyboardAvoidingView>
```

## 요약
- 에뮬레이터 테스트 시 가상 키보드를 열어 확인하는 습관이 필요하다 (Ctrl+Shift+K / Cmd+Shift+K).
- ScrollView의 `keyboardDismissMode="on-drag"`는 스크롤 시작 시 키보드를 자동으로 닫고, `none`은 유지한다.
- `KeyboardAvoidingView`는 키보드 높이에 맞춰 높이·위치·패딩을 조정해 키보드가 화면 요소를 가리는 것을 막는다.
- `behavior` prop(height/position/padding)은 Platform API로 OS별로 다르게 설정할 수 있다.
