# Moving Elements Horizontally Multiple Times

## 개요
- 한 번 정해진 위치로 이동하는 대신 버튼을 누를 때마다 좌우로 계속 이동하게 만든다.
- 현재 수평 위치를 상태로 관리하고 새 목표 위치를 계산한다.

## 내용
### 누적 위치
- 고정된 `toValue`를 반복 사용하면 첫 이동 뒤에는 값이 달라지지 않아 추가 움직임이 없다.
- `horizontalPosition` 상태에서 이동 단위만큼 더하거나 빼 새 위치를 만든다.
- 새 위치를 상태와 `Animated.timing`의 `toValue`에 함께 사용한다.

### 좌우 함수
- 왼쪽 이동은 `horizontalPosition - moveValue`, 오른쪽 이동은 `horizontalPosition + moveValue`다.
- 강의에서는 이해를 위해 두 함수를 만들지만 방향을 매개변수로 받는 하나의 함수로 합칠 수도 있다고 설명한다.

## 예시
```tsx
const [horizontalPosition, setHorizontalPosition] = useState(0);
const moveValue = 20;

const moveRight = () => {
  const newPosition = horizontalPosition + moveValue;
  setHorizontalPosition(newPosition);
  Animated.timing(translateX, {
    toValue: newPosition,
    duration: 300,
    useNativeDriver: true,
  }).start();
};
```

## 요약
- 반복 이동에는 현재 위치를 기준으로 한 새 목표값이 필요하다.
- 상태에는 논리적 위치를, `Animated.Value`에는 실제 애니메이션 값을 반영한다.
