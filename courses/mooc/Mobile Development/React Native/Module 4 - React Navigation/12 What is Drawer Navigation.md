# What is Drawer Navigation?

## 개요
- 드로어 내비게이션(drawer navigation)은 앱 바의 햄버거 아이콘(hamburger icon)을 누르거나 화면 가장자리에서 스와이프(swipe)하면 나타나는 서랍(drawer)으로 화면을 이동하는 패턴이다.
- 탭 내비게이션처럼 흔한 패턴이며, 이동할 화면이 많을 때 주로 사용한다.
- 설정 코드는 스택·탭 내비게이터와 매우 비슷하다: createDrawerNavigator로 생성해 Drawer.Navigator와 Drawer.Screen으로 구성한다.

## 내용

### 드로어 내비게이션이란
- 사용자가 앱 바의 햄버거 아이콘을 터치하거나 화면 가장자리에서 손가락으로 스와이프하면 드로어가 나타난다.
- 왼쪽 또는 오른쪽에서 나오는 드로어로 화면 간 이동을 한다.
- 이동할 화면이 많은 경우에 일반적으로 사용하는 패턴이다.

### Little Lemon 앱의 드로어 구성 예
- Welcome 화면과 Settings 화면 두 개가 있다.
- 오른쪽으로 스와이프하면 드로어가 열려 이동 가능한 화면 목록이 보인다.
- 드로어에서 Welcome을 클릭하면 Welcome 화면으로, Settings를 클릭하면 Settings 화면으로 이동한다.

### 최소 설정 코드 구성
1. NavigationContainer와 createDrawerNavigator를 React Navigation에서 임포트한다.
2. `createDrawerNavigator()`로 드로어를 인스턴스화한다.
3. 루트 App 컴포넌트에서 Drawer.Navigator로 모든 드로어 스크린을 감싼다.
4. 드로어로 이동할 수 있는 화면들(Welcome, Settings)을 초기화한다.
   - 각 드로어 스크린에 `name`을 지정한다 (보통 화면 상단에 표시됨).
   - `component` prop에 컴포넌트 이름을 전달한다.

### 에뮬레이터에서의 동작과 커스터마이즈
- 화면 왼쪽 상단에 햄버거 메뉴가 표시되며, 클릭하면 드로어가 바로 열린다. Android와 iOS 모두에 적용된다.
- 스와이프로 열거나 햄버거 메뉴를 클릭해 열 수 있다.
- 드로어 위치 커스터마이즈: 기본값은 오른쪽으로 스와이프하면 왼쪽에서 드로어가 열리는 방식이다. 옵션을 추가하면 왼쪽 스와이프로 오른쪽에서 열리게 할 수도 있다.
- 왼쪽과 오른쪽에 하나씩, 여러 개의 드로어를 지원하도록 커스터마이즈할 수도 있다.

## 예시

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

## 요약
- 드로어 내비게이션은 햄버거 아이콘 클릭 또는 가장자리 스와이프로 열리는 드로어를 통해 화면을 이동하며, 화면이 많을 때 적합하다.
- createDrawerNavigator로 드로어를 만들고 Drawer.Navigator + Drawer.Screen(name, component)으로 최소 구성을 완성한다.
- 드로어가 열리는 방향(왼쪽/오른쪽)을 바꿀 수 있고, 양쪽에 드로어를 두는 것도 가능하다.
