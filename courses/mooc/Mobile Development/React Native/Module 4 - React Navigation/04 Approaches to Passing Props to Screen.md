# Approaches to Passing Props to Screen

## 개요
- React Navigation은 내비게이터(navigator)와 스크린(screen)에 전달해 내비게이션 경험을 커스터마이즈할 수 있는 여러 prop을 제공한다.
- `options` prop으로 화면 헤더 제목을 바꾸고, `initialRouteName`으로 초기 라우트를 지정하고, `screenOptions`로 헤더 스타일을 변경한다.

## 내용

### options prop — 헤더 제목 변경
- 화면에 지정한 `name`과 다른 헤더 제목을 표시하고 싶을 때 사용한다.
- 예: WelcomeScreen의 헤더를 "Welcome" 대신 "Home"으로 표시하려면, 해당 `Stack.Screen`에 `options` prop을 주고 `title`을 "Home"으로 지정한다.
- 이후 스택 내비게이터로 WelcomeScreen이 표시될 때 헤더 바(header bar)에 Home이라고 나타난다.

### initialRouteName — 초기 라우트 변경
- 기본적으로 내비게이터의 첫 번째 화면이 초기 라우트(initial route)가 된다.
- 앱을 열었을 때 MenuScreen이 먼저 보이게 하려면 `Stack.Navigator` 태그에 `initialRouteName="Menu"`를 지정한다.
- 다시 "Welcome"으로 바꾸면 앱은 WelcomeScreen에서 열리며, 이때 헤더 제목은 options로 정의한 Home으로 표시된다.

### screenOptions — 내비게이터 외관 커스터마이즈
- 내비게이터 전체의 외관을 바꿀 때 `screenOptions` prop을 전달한다.
- 헤더 바 배경색을 바꾸려면 `headerStyle` 속성 안에서 `backgroundColor`를 새 16진수(hexadecimal) 색상 값으로 설정한다.

### 에뮬레이터 확인
- 초기 라우트가 Menu로 바뀌고, 헤더 바 색상이 변경된 것을 확인할 수 있다.
- 더 많은 커스터마이즈 옵션은 React Navigation 공식 문서를 참고한다.

## 예시

```jsx
<NavigationContainer>
  <Stack.Navigator
    initialRouteName="Menu"
    screenOptions={{ headerStyle: { backgroundColor: '#F4CE14' } }}
  >
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ title: 'Home' }}
    />
    <Stack.Screen name="Menu" component={MenuScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

## 요약
- `Stack.Screen`의 `options` prop으로 화면 `name`과 다른 헤더 제목(`title`)을 지정할 수 있다.
- `Stack.Navigator`의 `initialRouteName`으로 앱이 처음 열 화면을 바꿀 수 있다 (기본값은 첫 번째 화면).
- `screenOptions`의 `headerStyle.backgroundColor`로 헤더 바 배경색을 변경할 수 있다.
- 전체 옵션 목록은 React Navigation 문서에서 확인한다.
