# Going Back to Previous Screen

## 개요
- navigation prop의 `goBack` 메서드를 Pressable 컴포넌트에 연결해 이전 화면으로 돌아가는 버튼을 직접 구현한다.
- 네이티브 스택 내비게이터는 헤더 바에 뒤로 가기 버튼을 자동으로 제공하지만, 화면 다른 위치에 같은 역할의 버튼을 추가할 수도 있다.
- Android에서는 하드웨어 뒤로 가기 버튼도 자동으로 `goBack`을 실행한다.

## 내용

### 기본 제공 뒤로 가기 버튼
- Home 화면에서 View Menu 버튼으로 Menu 화면으로 이동하면, 네이티브 스택 내비게이터가 제공하는 헤더 바에 뒤로 가기 버튼이 자동으로 포함되어 있다.
- 기본 제공 외에 이 동작을 직접 프로그래밍하고 싶을 수 있다.

### Go Back 버튼 구현 단계
1. MenuScreen 컴포넌트에 `navigation` prop을 포함한다.
2. React Native에서 Pressable 컴포넌트를 임포트한다.
3. 메뉴를 렌더링하는 SectionList 끝에 Pressable을 추가하고, 그 안에 "Go back" 텍스트를 넣는다.
4. `onPress` 콜백 핸들러에서 navigation prop의 `goBack` 메서드를 호출한다.
5. 기존 스타일시트의 버튼 텍스트 스타일을 적용한다.
- 이제 사용자가 Go back 텍스트를 누르면 스택의 이전 화면으로 돌아간다.

### 에뮬레이터 확인 (iOS / Android)
- iOS: 헤더의 back 버튼은 그대로 있고, 화면 맨 아래에 Go back 프레서블 영역이 추가된다. 누르면 이전 화면으로 돌아간다.
- Android: React Navigation이 하드웨어에 내장된 뒤로 가기 버튼에 연결(hook)되어 자동으로 `goBack` 함수를 실행한다.
  - 따라서 Menu 화면에서 돌아가는 방법이 세 가지다: 헤더의 back 버튼, 직접 추가한 Go back 프레서블, Android 하드웨어 back 버튼.
- 두 플랫폼의 화면 전환 애니메이션(transition animation)이 서로 다르며, 필요에 따라 커스터마이즈할 수 있다.

## 예시

```jsx
import { Pressable, Text } from 'react-native';

const MenuScreen = ({ navigation }) => {
  return (
    // ...메뉴를 렌더링하는 SectionList
    <Pressable onPress={() => navigation.goBack()}>
      <Text style={styles.buttonText}>Go back</Text>
    </Pressable>
  );
};
```

## 요약
- 헤더 바의 자동 back 버튼 외에도 `navigation.goBack()`을 Pressable에 연결해 커스텀 뒤로 가기 버튼을 만들 수 있다.
- Android에서는 하드웨어 뒤로 가기 버튼이 자동으로 goBack을 실행해 총 세 가지 뒤로 가기 방법이 생긴다.
- iOS와 Android의 화면 전환 애니메이션은 서로 다르며 커스터마이즈가 가능하다.
