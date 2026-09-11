# Expand & Shrink Animation

## 개요
- View의 높이와 너비를 보간해 확대·축소 애니메이션을 만든다.
- 레이아웃 속성은 네이티브 드라이버를 지원하지 않으므로 `useNativeDriver: false`를 사용한다.

## 내용
### 크기 보간
- `Animated.Value`의 `0`과 `1`을 원하는 픽셀 크기에 매핑한다.
- 예를 들어 `outputRange: [50, 200]`이면 0은 50px, 1은 200px이다.
- 같은 보간값을 height와 width에 적용하면 정사각형이 함께 확대·축소된다.

### 네이티브 드라이버 제한
- height와 width 같은 레이아웃 속성은 강의 예제에서 네이티브 드라이버로 처리할 수 없다.
- 따라서 `useNativeDriver: false`로 설정한다.

## 예시
```tsx
const animatedSize = useRef(new Animated.Value(1)).current;
const size = animatedSize.interpolate({
  inputRange: [0, 1],
  outputRange: [50, 200],
});

const shrink = () => Animated.timing(animatedSize, {
  toValue: 0,
  duration: 300,
  useNativeDriver: false,
}).start();

<Animated.View style={[styles.box, { width: size, height: size }]} />
```

## 요약
- `interpolate`로 추상 값 0~1을 실제 픽셀 크기에 대응시킨다.
- 레이아웃 크기 애니메이션은 `useNativeDriver: false`가 필요하다.
