# What is Tab Navigation?

## 개요
- 탭 내비게이션(tab navigation)은 React Navigation의 선택적(optional) 패키지로, 탭 기반으로 화면을 이동한다.
- 탭은 화면 하단(bottom)이나 헤더에 배치되며, 탭을 누르면 특정 화면으로 이동하는 현대 모바일 앱의 흔한 디자인이다.
- createBottomTabNavigator로 최소 구성의 탭 내비게이션을 설정할 수 있고, React Navigation이 여러 기능을 기본 제공한다.

## 내용

### 스택 내비게이션 복습과 탭 내비게이션의 차이
- 스택 내비게이터(stack navigator)는 화면 전환과 내비게이션 히스토리를 관리하며, 히스토리는 이전 화면으로 돌아갈 때 필요하다.
- 탭 내비게이션은 화면 하단이나 헤더에 탭을 두고, 탭 클릭으로 특정 화면에 이동한다.

### React Navigation의 탭 내비게이션 옵션
- 하단 탭 내비게이션(bottom tab navigation) API
- 머티리얼 디자인(material design) 기반 하단 탭 내비게이션
- 머티리얼 디자인 기반 상단 탭 내비게이션
- 하단 탭 내비게이션은 각 탭에 바인딩된 라우트 간 전환을 제공하고, 머티리얼 디자인 옵션들은 더 정교한 애니메이션 가능성을 더한다. 사용 사례와 디자인 요구에 맞는 내비게이터를 고르면 된다.
- 이 강의는 하단 탭 내비게이션에 집중한다.

### Little Lemon 앱의 탭 구성 예
- Welcome 화면과 Settings 화면용 탭 두 개가 하단에 있고, 각 탭에 서로 다른 아이콘이 있다.
- 왼쪽 탭을 누르면 Welcome 화면으로, 오른쪽 탭을 누르면 Settings 화면으로 이동한다.

### 최소 설정 코드 구성
1. NavigationContainer와 createBottomTabNavigator를 임포트한다.
2. `createBottomTabNavigator()`로 Tab 인스턴스를 만든다.
3. 루트 App 컴포넌트에서 Tab.Navigator로 모든 탭 스크린을 감싼다.
4. 탭으로 이동할 수 있는 화면들(Welcome, Settings)을 Tab.Screen으로 초기화한다.
   - `name`으로 탭 이름을 지정한다 (보통 화면 상단에 표시됨).
   - `component` prop에 컴포넌트 이름을 전달한다.

### 커스터마이즈와 기본 제공 기능
- 스택 내비게이터처럼 탭 외관을 쉽게 커스터마이즈할 수 있다. Tab.Navigator의 screenOptions에서 아이콘, 활성/비활성 틴트 색(active/inactive tint colors) 등을 바로 사용할 수 있다 (자세한 내용은 이후 강의).
- Android 하드웨어 뒤로 가기 버튼 대응: 커스텀 탭 컴포넌트라면 로직 작성과 네이티브 API 접근용 훅(hook) 등 여러 단계가 필요하지만, Tab Navigator에는 이 기능이 내장되어 있다.
- 탭 바를 더블 탭(double tap)하면 활성 내비게이션 스택이 자동으로 맨 위로 팝(pop to top)된다. 추가 코드가 필요 없다.
- 독립형(standalone) 탭 바 컴포넌트를 쓰면 React Navigation이 무료로 제공하는 이런 동작들을 얻을 수 없다.

## 예시

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

## 요약
- 탭 내비게이션은 하단/상단 탭으로 화면을 전환하는 방식이며, React Navigation은 bottom tab, material bottom tab, material top tab API를 제공한다.
- createBottomTabNavigator로 Tab을 만들고 Tab.Navigator + Tab.Screen(name, component)으로 최소 구성을 완성한다.
- 아이콘·활성/비활성 틴트 색 등 screenOptions로 커스터마이즈할 수 있다.
- Android 하드웨어 뒤로 가기 처리, 탭 바 더블 탭 시 pop-to-top 등이 기본 내장되어 있다.
