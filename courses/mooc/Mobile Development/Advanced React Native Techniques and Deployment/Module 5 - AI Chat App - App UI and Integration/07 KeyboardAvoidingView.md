# KeyboardAvoidingView

## 개요
- `KeyboardAvoidingView`는 키보드가 표시될 때 레이아웃을 조정해 주는 React Native 컴포넌트다.
- iOS에서 키보드가 입력창을 가리는 문제를 `behavior="padding"`으로 해결한다.
- iOS 전용 하단 패딩을 조건부 스타일 배열로 추가한다.

## 내용
### 문제: iOS에서 키보드가 입력창을 가림
- iOS에서 키보드를 열면 입력창이 키보드에 가려 사라진다. 키보드가 어떤 컴포넌트도 가리지 않게 하고 싶다.

### KeyboardAvoidingView 적용
- React Native에서 `KeyboardAvoidingView`를 import 하고, 채팅 화면의 내용(메시지 리스트 ~ `ChatInput`)을 감싼다.
- 감싼 직후 입력창이 다시 위로 올라가는 문제가 생기는데, `KeyboardAvoidingView`가 화면 일부만 차지하기 때문이다. `flex: 1`을 줘서 화면 전체를 채운다.

### behavior 속성
- `behavior`에는 `height`, `padding`, `position` 값이 있고 각각 동작 방식이 다르다.
- `padding`으로 설정하면 키보드 높이만큼 뷰 하단에 패딩이 추가되어, 키보드를 열면 입력창이 위로 올라온다. Android/iOS 모두 정상 동작한다.

### iOS 하단 여백 추가
- 키보드가 닫혀 있을 때 iOS에서 입력창 아래에 약간의 여백이 필요하다.
- `ChatInput` 컨테이너의 `style`을 배열로 바꿔 조건부 스타일을 추가한다: `[styles.container, isIOS && { paddingBottom: verticalScale(20) }]`.
- `Platform.OS === 'ios'`를 매번 쓰는 대신 `isIOS` 상수에 저장해 사용한다. Android에서는 이 스타일이 적용되지 않는다.

### 다음 강의 예고
- 키보드 높이와 열림 여부(state)를 가져오는 커스텀 키보드 훅(hook)을 다음 강의들에서 만든다.

## 예시
```tsx
// screens/ChatScreen.tsx
import { KeyboardAvoidingView } from 'react-native';

<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
  <FlatList ... />
  <ChatInput />
</KeyboardAvoidingView>
```

```tsx
// components/ChatInput.tsx
const isIOS = Platform.OS === 'ios';

<View style={[styles.container, isIOS && { paddingBottom: verticalScale(20) }]}>
  ...
</View>
```

## 요약
- `KeyboardAvoidingView`로 키보드가 UI를 가리는 문제를 해결한다. `flex: 1`이 필수다.
- `behavior="padding"`은 키보드 높이만큼 하단 패딩을 추가하는 방식이다.
- 플랫폼 분기는 `isIOS` 상수로 관리하고, 조건부 스타일은 스타일 배열로 적용한다.
