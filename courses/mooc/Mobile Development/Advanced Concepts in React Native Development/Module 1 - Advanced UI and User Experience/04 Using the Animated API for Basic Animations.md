# Using the Animated API for Basic Animations

## 개요

- React Native 내장 `Animated` API의 값과 timing·spring·decay 애니메이션을 소개한다.
- `useRef`로 유지한 Animated.Value를 이용해 페이드 인·아웃을 시연한다.

## 내용

### Animated.Value

애니메이션 값은 렌더링 사이에 유지되어야 하므로 `useRef(new Animated.Value(0)).current`처럼 만든다. `Animated.timing`은 시간, `spring`은 스프링 물리, `decay`는 감속 속도를 기반으로 값을 바꾼다.

### 네이티브 드라이버

지원되는 속성에서는 `useNativeDriver: true`로 애니메이션 작업을 네이티브 쪽에 맡겨 JavaScript 스레드 부담을 줄일 수 있다.

## 예시

```tsx
const opacity = useRef(new Animated.Value(0)).current;

const fadeIn = () =>
  Animated.timing(opacity, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();

<Animated.View style={{ opacity }}>
  <Text>Hello</Text>
</Animated.View>
```

## 요약

- Animated.Value가 시간에 따라 변하는 상태를 나타낸다.
- timing·spring·decay는 서로 다른 움직임 모델을 제공한다.
- `.start()`를 호출해야 정의한 애니메이션이 실행된다.
