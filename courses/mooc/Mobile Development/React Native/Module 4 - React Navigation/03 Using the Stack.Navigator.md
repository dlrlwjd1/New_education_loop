# Using the Stack.Navigator

## 개요
- 스택 내비게이터(stack navigator)는 새 화면이 스택(stack) 맨 위에 쌓이는 방식으로 화면 전환을 제공한다.
- Little Lemon 앱의 Welcome 화면과 Menu 화면 사이를 이동할 수 있도록 스택 내비게이터를 설정한다.
- NavigationContainer로 앱 전체를 감싸고, createNativeStackNavigator로 스택을 생성해 Stack.Screen으로 화면을 정의한다.

## 내용

### 사전 준비(prerequisites)
- 네이티브 스택 내비게이터 패키지(@react-navigation/native-stack)를 설치해야 한다.
- react-native-gesture-handler도 설치되어 있어야 한다.

### 설정 단계
1. **NavigationContainer 임포트** — 앱 전체를 감싸는 컴포넌트로, `@react-navigation/native`에서 가져온다.
2. **createNativeStackNavigator 임포트** — `@react-navigation/native-stack`에서 가져온다.
3. **화면 컴포넌트 임포트** — WelcomeScreen(로고와 소개 텍스트), MenuScreen(레스토랑 메뉴 목록)을 가져온다.
4. **스택 인스턴스 생성** — `createNativeStackNavigator()`를 호출해 `Stack` 객체를 만든다. 모든 라우트(route)는 이 스택 위에 푸시(push)된다.
5. **return 문 구성** — `NavigationContainer`가 앱 전체를 감싸고, 그 안에 `Stack.Navigator`를 두고, 그 안에 `Stack.Screen`으로 각 화면을 정의한다.
   - `Stack.Screen`에는 `name`(예: "Welcome")과 `component`(예: `{WelcomeScreen}`) prop을 전달한다.
   - 같은 방식으로 원하는 만큼 화면을 추가할 수 있다.

### 에뮬레이터에서의 결과
- 앱은 Welcome 화면(Little Lemon 로고와 텍스트)에서 시작한다.
- 상단에 "Welcome"이라고 표시된 헤더(header)가 나타나는데, 이는 Stack.Screen에 지정한 `name`에서 온 것이다.
- 아직 화면 간 이동 방법은 설정하지 않았으며(다음 강의에서 다룸), 스택의 기본 구조는 완성된 상태다.

## 예시

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## 요약
- 스택 내비게이터를 쓰려면 네이티브 스택 내비게이터 패키지와 react-native-gesture-handler를 먼저 설치한다.
- `NavigationContainer`가 앱 전체를 감싸고, `createNativeStackNavigator()`로 만든 `Stack` 객체의 `Stack.Navigator`와 `Stack.Screen`으로 화면을 정의한다.
- `Stack.Screen`의 `name`은 화면 상단 헤더 제목으로 표시된다.
- 이 강의에서는 스택의 최소 구성만 설정했으며, 화면 간 이동은 이후 강의에서 다룬다.
