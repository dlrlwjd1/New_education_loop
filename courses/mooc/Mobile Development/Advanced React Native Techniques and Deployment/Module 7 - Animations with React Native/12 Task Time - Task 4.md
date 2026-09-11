# Task Time - Task 4

## 개요
- 앞 과제의 펼침 패널 내용 영역에 확장·축소 애니메이션을 추가한다.
- 화살표와 패널이 같은 상태 값을 공유하도록 구성한다.

## 내용
### 과제 요구사항
- 패널을 열 때 내용 영역이 부드럽게 확장된다.
- 패널을 닫을 때 내용 영역이 부드럽게 접혀 사라진다.

### 강의 해설
- 화살표 회전에 이미 사용한 애니메이션 값이 열림 상태와 같은 방향으로 변하므로 새 값을 만들지 않는다.
- 보간된 `maxHeight`는 닫힘 값 `0`에서 `0`, 열림 값 `1`에서 `200`이 된다.
- 내용 컨테이너를 `Animated.View`로 바꾸고 `{ maxHeight }` 스타일을 적용한다.

## 예시
```tsx
const maxHeight = animatedValue.interpolate({
  inputRange: [0, 1],
  outputRange: [0, 200],
});

<Animated.View style={[styles.content, { maxHeight }]}>
  {children}
</Animated.View>
```

## 요약
- 같은 애니메이션 값으로 화살표 회전과 패널 높이를 동기화한다.
- `maxHeight: 0`에서 내용을 숨기고 양수 값으로 확장한다.
