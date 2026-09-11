# Moving Elements Horizontally

## 개요
- React Native의 내장 Animated API로 이미지를 수평 이동시킨다.
- `useRef`에 `Animated.Value`를 보관하고 `Animated.timing`으로 값을 변경한다.
- `transform: [{ translateX }]`와 네이티브 드라이버를 적용한다.

## 내용
### 애니메이션 값
- 애니메이션 대상은 `Animated.Image`처럼 `Animated`가 붙은 컴포넌트로 바꾼다.
- 수평 위치는 `useRef(new Animated.Value(0)).current`에 저장한다.
- `useState`는 값 변경마다 재렌더링하지만 `useRef`는 그렇지 않아 빈번한 애니메이션 갱신에 적합하다.

### timing 구성
- `toValue`는 목표 위치, `duration`은 밀리초 단위 실행 시간이다.
- `useNativeDriver: true`는 지원되는 변환을 네이티브 UI 스레드에서 처리해 더 부드럽게 만든다.
- `.start()`를 호출해야 설정한 애니메이션이 실제로 시작된다.

## 예시
```tsx
const translateX = useRef(new Animated.Value(0)).current;

const moveHorizontal = () => {
  Animated.timing(translateX, {
    toValue: 150,
    duration: 2000,
    useNativeDriver: true,
  }).start();
};

<Animated.Image
  source={require('../assets/mario.png')}
  style={[styles.image, { transform: [{ translateX }] }]}
/>
```

## 요약
- `Animated.Value`는 `useRef`에 안정적으로 보관한다.
- 수평 이동은 `translateX` 변환과 `Animated.timing`으로 구현한다.
- 네이티브 드라이버와 `.start()`를 빠뜨리지 않는다.
