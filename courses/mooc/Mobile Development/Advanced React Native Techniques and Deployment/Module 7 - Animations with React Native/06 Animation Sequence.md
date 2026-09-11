# Animation Sequence

## 개요
- `Animated.sequence`로 여러 애니메이션을 순서대로 실행한다.
- 위로 올라간 뒤 더 빠르게 원래 위치로 내려오는 점프 효과를 만든다.

## 내용
### sequence
- `Animated.sequence`는 애니메이션 객체 배열을 받아 앞 항목이 끝난 뒤 다음 항목을 실행한다.
- 첫 `timing`은 `translateY`를 음수 목표값으로 이동시킨다.
- 두 번째 `timing`은 목표값을 `0`으로 되돌린다.
- 상승과 하강 duration을 다르게 설정해 움직임의 느낌을 조정한다.

## 예시
```tsx
const jump = () => {
  Animated.sequence([
    Animated.timing(translateY, {
      toValue: -100,
      duration: 400,
      useNativeDriver: true,
    }),
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }),
  ]).start();
};
```

## 요약
- `Animated.sequence`는 여러 동작을 직렬로 구성한다.
- 서로 다른 목표값과 시간을 조합해 점프 같은 복합 움직임을 만든다.
