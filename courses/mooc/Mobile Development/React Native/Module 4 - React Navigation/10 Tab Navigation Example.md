# Tab Navigation Example

## 개요
- Little Lemon 앱의 두 화면(Welcome, Menu)에 하단 탭 내비게이션(bottom tab navigation)을 실제로 구현한다.
- `@react-navigation/bottom-tabs` 설치 후 NavigationContainer, createBottomTabNavigator, 화면 컴포넌트를 임포트해 구성한다.

## 내용

### 프로젝트 구조
- MenuScreen: SectionList 컴포넌트로 Little Lemon 메뉴 항목 목록을 표시한다.
- WelcomeScreen: "Little Lemon, your local Mediterranean Bistro" 문구와 Little Lemon 로고를 표시한다.
- 이 두 화면 사이를 화면 하단의 탭으로 이동하도록 만든다.

### 구현 단계
1. `@react-navigation/bottom-tabs`가 설치되어 있는지 확인한다.
2. App 파일에서 필요한 컴포넌트를 임포트한다.
   - NavigationContainer — 스택 내비게이션 때와 마찬가지로 앱 전체를 감싸는 컴포넌트. `@react-navigation/native`에서 가져온다.
   - createBottomTabNavigator — `@react-navigation/bottom-tabs`에서 가져온다.
   - WelcomeScreen과 MenuScreen 두 화면 컴포넌트.
3. 탭 인스턴스 생성 — `const Tab = createBottomTabNavigator();` (이름은 자유지만 여기서는 Tab).
4. return 문에서 NavigationContainer로 앱 전체를 감싼다.
5. 그 안에 Tab.Navigator(여는 태그와 닫는 태그)를 두고, 내부에 Tab.Screen들을 선언한다. 화면은 원하는 만큼 둘 수 있다.
   - 첫 번째: `name="Welcome"`, `component={WelcomeScreen}`
   - 두 번째: `name="Menu"`, `component={MenuScreen}`

### 에뮬레이터 확인
- Welcome 화면(로고와 환영 텍스트)이 표시되고, 화면 하단에 Welcome과 Menu 탭이 나타난다.
- Menu 탭을 누르면 Menu 화면이 표시되고, 스크롤하여 모든 메뉴 항목을 볼 수 있다.

## 예시

```bash
npm install @react-navigation/bottom-tabs
```

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuScreen from './screens/MenuScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

## 요약
- 하단 탭 내비게이션은 `@react-navigation/bottom-tabs` 패키지의 createBottomTabNavigator로 구현한다.
- NavigationContainer로 앱을 감싸고, Tab.Navigator 안에 Tab.Screen(name, component)으로 화면을 선언한다.
- 하단 탭(Welcome, Menu)을 눌러 두 화면 사이를 이동할 수 있다.
