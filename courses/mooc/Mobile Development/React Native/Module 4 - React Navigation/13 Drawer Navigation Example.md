# Drawer Navigation Example

## 개요
- Little Lemon 앱에서 Welcome 화면과 Menu 화면 사이를 드로어 내비게이션(drawer navigation)으로 이동하도록 구현한다.
- `@react-navigation/drawer` 설치 후 createDrawerNavigator로 드로어를 만들고 Drawer.Screen으로 화면을 선언한다.
- `useLegacyImplementation` prop과 `drawerPosition` 스크린 옵션으로 동작을 조정한다.

## 내용

### 사전 준비와 임포트
- `@react-navigation/drawer`를 npm 또는 yarn으로 먼저 설치한다.
- NavigationContainer를 임포트한다. 지금까지 모든 React Navigation에서 사용한 것과 같은 컨테이너다.
- createDrawerNavigator를 `@react-navigation/drawer`에서 임포트한다.
- WelcomeScreen과 MenuScreen 컴포넌트를 screens 폴더에서 임포트한다.

### 드로어 구성
1. `const Drawer = createDrawerNavigator();`로 드로어를 인스턴스화한다 (이름은 자유).
2. NavigationContainer로 전체를 감싼다.
3. Drawer.Navigator 안에 Drawer.Screen을 선언한다.
   - 첫 번째: `name="Welcome"`, `component={WelcomeScreen}`
   - 두 번째: Drawer.Screen 줄을 복사해 `name="Menu"`, `component={MenuScreen}`으로 변경한다.
4. 내비게이터에 `useLegacyImplementation` prop을 추가한다.
   - 드로어 내비게이션에서 더 일관된 성능을 위해 React Navigation이 권장하는 단계이며, 이 버전의 React Navigation에서는 드로어가 동작하려면 이 prop이 필요하다.

### 에뮬레이터 확인 (기본 동작)
- Welcome 화면에서 드로어를 여는 방법은 두 가지다.
  - 햄버거 메뉴(hamburger menu)를 클릭한다 → Welcome과 Menu 내비게이션 옵션이 표시된다.
  - 화면을 왼쪽에서 오른쪽으로 스와이프한다 (기본 동작).
- 드로어에서 Menu를 탭하면 메뉴 화면으로 이동한다.

### 드로어 위치 변경 (drawerPosition)
- Drawer.Navigator에 스크린 옵션으로 `drawerPosition` 속성을 추가한다. 기본값은 left이며 right로 바꿀 수 있다.
- 변경 후 햄버거 아이콘을 클릭하면 드로어가 화면 오른쪽에서 열린다.
- 오른쪽 드로어에서는 스와이프로 열 때 오른쪽에서 왼쪽으로 당겨야 한다.

## 예시

```bash
npm install @react-navigation/drawer
```

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuScreen from './screens/MenuScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        screenOptions={{ drawerPosition: 'right' }} // 기본값은 'left'
      >
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
```

## 요약
- `@react-navigation/drawer`를 설치하고 createDrawerNavigator로 Drawer를 만들어 Drawer.Navigator + Drawer.Screen으로 구성한다.
- 이 버전에서는 `useLegacyImplementation` prop을 내비게이터에 추가해야 하며, 일관된 성능을 위해 권장된다.
- 드로어는 햄버거 메뉴 클릭 또는 스와이프로 열 수 있고, 기본은 왼쪽에서 열린다.
- `screenOptions`의 `drawerPosition: 'right'`로 드로어를 오른쪽에서 열리게 바꿀 수 있다.
