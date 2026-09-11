# Rotate Animation

## 개요
- 숫자형 Animated 값을 각도 문자열로 변환해 이미지를 회전시킨다.
- `interpolate`로 입력 범위 `0~1`을 출력 범위 `0deg~360deg`에 매핑한다.

## 내용
### 회전 값
- `rotation`은 `Animated.Value(0)`에서 시작해 `timing`으로 `1`까지 변한다.
- React Native의 `rotate` transform은 숫자가 아니라 `deg`가 포함된 문자열을 요구한다.
- `rotation.interpolate`가 애니메이션 숫자를 각도 문자열로 바꾼다.

### 여러 바퀴 회전
- 출력 끝값을 `360deg`보다 크게 하면 여러 번 회전한다.
- duration을 늘리거나 줄여 회전 속도를 조정한다.

## 예시
```tsx
const rotation = useRef(new Animated.Value(0)).current;
const rotateStyle = rotation.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});

const rotateMario = () => {
  Animated.timing(rotation, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
};

<Animated.Image style={[styles.image, { transform: [{ rotate: rotateStyle }] }]} />
```

## 요약
- `interpolate`는 숫자 범위를 회전에 필요한 각도 문자열로 변환한다.
- 변환 결과를 `transform.rotate`에 연결해 회전 애니메이션을 만든다.
