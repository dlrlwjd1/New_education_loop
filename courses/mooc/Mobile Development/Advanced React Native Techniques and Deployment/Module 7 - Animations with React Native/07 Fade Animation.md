# Fade Animation

## 개요
- `opacity` 값을 애니메이션해 이미지를 서서히 표시하거나 숨긴다.
- 보이기와 숨기기 함수를 하나의 값 기반 함수로 통합한다.

## 내용
### opacity 값
- `opacity: 1`은 완전히 표시, `0`은 완전히 숨김, 중간값은 반투명 상태다.
- `Animated.Value(1)`을 이미지의 opacity 스타일에 연결한다.
- `Animated.timing`의 목표값을 `0` 또는 `1`로 바꿔 페이드 아웃·인을 만든다.

### 함수 통합
- 별도의 `hideMario`, `showMario`는 같은 로직에서 목표값만 다르다.
- `changeOpacity(value: number)`처럼 목표값을 매개변수로 받으면 중복을 줄일 수 있다.

## 예시
```tsx
const opacity = useRef(new Animated.Value(1)).current;

const changeOpacity = (value: number) => {
  Animated.timing(opacity, {
    toValue: value,
    duration: 1000,
    useNativeDriver: true,
  }).start();
};

<Animated.Image style={[styles.image, { opacity }]} />
```

## 요약
- 투명도는 0과 1 사이 값으로 제어한다.
- 같은 `Animated.Value`를 스타일에 연결하고 목표값만 바꿔 표시와 숨김을 구현한다.
