# Animating Transitions Between Screens

## 개요

- 화면 전환 애니메이션의 목적과 React Navigation에서 전환 효과를 구성하는 방식을 설명한다.
- fade·slide·scale과 사용자 정의 전환을 상황에 맞게 선택한다.

## 내용

### 전환의 역할

화면 전환은 탐색의 방향과 화면 사이 관계를 사용자에게 알려 준다. 지나치게 긴 효과는 조작을 느리게 느끼게 하므로 짧고 일관된 동작을 사용한다.

### 내비게이션 설정

스택 내비게이터의 화면 옵션에서 제공되는 전환 프리셋 또는 카드 스타일 보간기를 사용한다. 플랫폼 기본 동작을 유지할 수도 있고, 화면의 역할에 맞게 수평 이동이나 페이드를 적용할 수도 있다.

## 예시

```tsx
<Stack.Navigator
  screenOptions={{
    animation: 'fade',
  }}
>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>
```

## 요약

- 전환 애니메이션은 탐색 맥락을 전달해야 한다.
- 효과와 지속 시간을 앱 전체에서 일관되게 유지한다.
- 내비게이터 설정에서 화면별 또는 전역 전환을 지정한다.
