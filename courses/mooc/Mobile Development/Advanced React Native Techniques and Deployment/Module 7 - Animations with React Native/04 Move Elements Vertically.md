# Move Elements Vertically

## 개요
- 기존 수평 이동 패턴을 `translateY`에 적용해 위아래 이동을 구현한다.
- 공통 이동 단위와 애니메이션 설정을 상수로 추출해 중복을 줄인다.

## 내용
### 코드 정리
- 이동 간격을 `moveValue` 상수로 만든다.
- `duration`과 `useNativeDriver`를 `animationConfig` 객체로 묶고 스프레드 연산자로 재사용한다.

### 수직 이동
- `translateY`용 `Animated.Value`와 `verticalPosition` 상태를 만든다.
- 위로 이동할 때는 값을 빼고, 아래로 이동할 때는 값을 더한다.
- 이미지의 transform 배열에 `{ translateY }`를 추가한다.
- `.start()`가 없으면 설정만 생성되고 애니메이션은 실행되지 않는다.

## 예시
```tsx
const translateY = useRef(new Animated.Value(0)).current;
const [verticalPosition, setVerticalPosition] = useState(0);
const animationConfig = { duration: 100, useNativeDriver: true };

const moveUp = () => {
  const newPosition = verticalPosition - 50;
  setVerticalPosition(newPosition);
  Animated.timing(translateY, {
    toValue: newPosition,
    ...animationConfig,
  }).start();
};
```

## 요약
- 수직 이동은 `translateY`를 사용한다.
- 위치 부호로 위·아래 방향을 정하고 공통 설정은 객체로 재사용한다.
