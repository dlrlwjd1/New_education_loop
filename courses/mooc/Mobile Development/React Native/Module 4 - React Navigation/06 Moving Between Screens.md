# Moving Between Screens

## 개요
- 스택 내비게이터에 정의한 두 화면(Welcome, Menu) 사이를 실제로 이동하는 방법을 구현한다.
- Pressable 컴포넌트의 `onPress`에서 `navigation.navigate('Menu')`를 호출해 화면을 전환한다.
- 스택 내비게이터가 뒤로 가기(back) 버튼을 자동으로 제공한다.

## 내용

### Welcome 화면에 navigation prop 추가
- WelcomeScreen 컴포넌트에 `navigation`이라는 속성(prop)을 추가한다.
- 스택 내비게이션이 이미 설정되어 있으므로, navigation prop을 전달받은 WelcomeScreen은 자신이 어디서 왔는지 알고 있다.

### Pressable로 이동 버튼 만들기
1. Pressable 컴포넌트를 임포트한다.
2. Pressable 안에 "View Menu"라는 텍스트(Text)를 넣는다.
3. 미리 정의해 둔 스타일(버튼 텍스트 스타일)을 적용한다.
4. Pressable의 `onPress`에 콜백 핸들러(callback handler)를 지정하고, 그 안에서 전달받은 navigation prop으로 `navigation.navigate('Menu')`를 호출한다.
- Menu 화면이 스택 내비게이터에 정의되어 있는 한 자동으로 새 화면으로 이동한다.

### 에뮬레이터 확인
- 상단 헤더에 Home(Welcome 화면에 지정한 이름)이 표시되고, 환영 텍스트와 View Menu 프레서블 영역이 보인다.
- View Menu를 누르면 Menu 화면으로 이동해 메뉴 항목들이 표시된다.
- 별도로 코딩하지 않았는데도 뒤로 가기(back) 버튼이 자동으로 생기며, 누르면 이전 화면(Home)으로 돌아간다. 두 화면을 자유롭게 오갈 수 있다.

## 예시

```jsx
import { Pressable, Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    // ...환영 텍스트 등
    <Pressable onPress={() => navigation.navigate('Menu')}>
      <Text style={styles.buttonText}>View Menu</Text>
    </Pressable>
  );
};
```

## 요약
- 스크린 컴포넌트에 `navigation` prop을 받아 화면 이동에 사용한다.
- Pressable의 `onPress`에서 `navigation.navigate('Menu')`를 호출하면 스택에 정의된 Menu 화면으로 이동한다.
- 스택 내비게이터는 뒤로 가기 버튼을 자동으로 제공해 별도 코드 없이 이전 화면으로 돌아갈 수 있다.
