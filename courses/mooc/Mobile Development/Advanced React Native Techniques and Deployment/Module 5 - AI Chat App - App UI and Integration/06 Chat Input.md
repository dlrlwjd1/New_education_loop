# Chat Input

## 개요
- 화면 하단에 메시지를 입력해 AI 챗에 보낼 `ChatInput` 컴포넌트를 만든다.
- `TextInput` + 전송 버튼(`TouchableOpacity` + Feather `send` 아이콘) 구성이다.
- 입력창을 화면 맨 아래에 붙이기 위해 화면 레이아웃(flex)을 정리한다.

## 내용
### 컴포넌트 생성과 컨테이너 스타일
- `components/ChatInput.tsx` 생성(스니펫 `rnfes`) 후 `ChatScreen`에서 렌더링한다.
- 컨테이너(`styles.container`): 텍스트 입력과 전송 아이콘을 가로로 배치하기 위해 `flexDirection: 'row'`, `padding: scale(10)`, `backgroundColor: colors.white`, `borderTopWidth: 1`, `borderTopColor: colors.mediumGray`.

### TextInput 스타일
- `styles.input`: `flex: 1`(남는 공간 채움), `backgroundColor: colors.gray`, `paddingHorizontal: scale(15)`, `paddingVertical: verticalScale(10)`, `marginRight: 10`(아이콘 자리), `borderRadius: 20`(10보다 20이 더 보기 좋음).

### 전송 버튼과 아이콘
- `Pressable` 대신 `TouchableOpacity` 사용, `styles.sendButton`: `width: scale(35)`, `height: scale(35)`, `borderRadius: 20`(가로/세로의 절반보다 큰 값이면 원이 됨), `backgroundColor: colors.black`, `justifyContent: 'center'`, `alignItems: 'center'`.
- 아이콘은 `react-native-vector-icons`의 디렉터리에서 고른다. 강의에서는 Feather의 `send` 아이콘 사용: `import Feather from 'react-native-vector-icons/Feather'`, `name="send"`(이름이 정확해야 함), `color={colors.white}`, `size={scale(15)}`(20은 너무 큼).
- "Feather cannot be used as a JSX component"라는 TypeScript 경고가 나오지만 일단 무시하고 나중에 다룬다.

### 입력창을 하단에 붙이기
- 입력창이 화면 중간에 위치하는 문제: `ChatScreen`의 루트 `View`에 배경을 빨갛게 줘 보면 화면 절반만 차지하는 것이 보인다. `flex: 1`을 줘도 해결이 안 되는 이유는 `App.tsx`에서 `ChatScreen`이 또 다른 `View`로 감싸져 있기 때문이다.
- `App.tsx`의 불필요한 감싸는 `View`를 제거하면 화면 전체를 채우고 입력창이 하단에 붙는다.
- 키보드를 열면 Android에서는 입력창이 올라오지만 iOS에서는 올라오지 않는다 — 다음 강의에서 해결한다.

## 예시
```tsx
// components/ChatInput.tsx
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { scale, verticalScale } from 'react-native-size-matters';

const ChatInput = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} />
    <TouchableOpacity style={styles.sendButton}>
      <Feather name="send" color={colors.white} size={scale(15)} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: scale(10),
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.mediumGray,
  },
  input: {
    flex: 1,
    backgroundColor: colors.gray,
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    marginRight: 10,
    borderRadius: 20,
  },
  sendButton: {
    width: scale(35),
    height: scale(35),
    borderRadius: 20,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

## 요약
- `ChatInput`은 `flexDirection: 'row'` 컨테이너에 `flex: 1` 입력창 + 원형 전송 버튼으로 구성한다.
- 원형 버튼은 `borderRadius`를 가로/세로의 절반 이상으로 주면 된다.
- 아이콘은 `react-native-vector-icons/Feather`의 `send`를 사용한다.
- 입력창이 하단에 붙지 않으면 상위 컴포넌트의 불필요한 래퍼 `View`를 확인한다.
- iOS 키보드 문제는 다음 강의(KeyboardAvoidingView)에서 처리한다.
