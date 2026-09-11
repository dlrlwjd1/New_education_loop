# How to Animate Color Changes

## 개요
- `interpolate`를 사용해 View의 배경색을 부드럽게 전환한다.
- 여러 입력값을 여러 색상에 매핑하고 버튼을 누를 때마다 다음 색상으로 이동한다.

## 내용
### 색상 보간
- 숫자형 `Animated.Value`를 `red`, `blue` 같은 색상 문자열에 매핑한다.
- 두 값뿐 아니라 `[0, 1, 2, 3, 4]`처럼 여러 지점을 만들고 각 지점에 다른 색상을 지정할 수 있다.
- 보간 결과를 `backgroundColor`에 연결한다.

### 순차 색상 변경
- 현재 색상 인덱스를 상태로 보관한다.
- 버튼을 누르면 다음 인덱스를 목표값으로 사용해 `Animated.timing`을 실행한다.
- 변수와 함수 이름을 실제 역할에 맞게 `animationColor`, `changeColor`로 바꾼다.

## 예시
```tsx
const animationColor = useRef(new Animated.Value(0)).current;
const backgroundColor = animationColor.interpolate({
  inputRange: [0, 1, 2, 3, 4],
  outputRange: ['red', 'blue', 'green', 'purple', '#000000'],
});

Animated.timing(animationColor, {
  toValue: nextIndex,
  duration: 1000,
  useNativeDriver: false,
}).start();
```

## 요약
- `interpolate`는 숫자 진행값을 색상 문자열에도 매핑할 수 있다.
- 색상 애니메이션은 탭이나 선택 버튼의 상태 변화를 표현하는 데 유용하다.
