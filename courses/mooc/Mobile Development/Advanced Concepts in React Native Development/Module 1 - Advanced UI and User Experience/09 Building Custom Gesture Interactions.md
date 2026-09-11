# Building Custom Gesture Interactions

## 개요

- 한 화면에 탭·스와이프·핀치를 함께 적용하는 사용자 정의 상호작용을 구현한다.
- 탭 횟수, 스와이프 방향, 이미지 배율을 상태로 표시하는 예제를 사용한다.

## 내용

### 상태와 이벤트 연결

팬 이벤트의 `translationX` 부호로 좌우 방향을 정하고, 핀치 이벤트의 `scale`로 이미지 크기를 갱신한다. 탭 제스처가 종료되면 카운터를 증가시킨다.

### 계층 구조

`GestureHandlerRootView` 아래에 Pan·Pinch·Tap 핸들러를 중첩한다. 각 핸들러는 담당하는 값만 갱신하고, 화면은 해당 상태를 읽어 현재 상호작용 결과를 보여 준다.

## 예시

```tsx
const [tapCount, setTapCount] = useState(0);
const [direction, setDirection] = useState<'left' | 'right' | null>(null);
const [scale, setScale] = useState(1);

const onTapEnd = () => setTapCount((count) => count + 1);
```

## 요약

- 서로 다른 제스처는 독립된 상태와 이벤트 함수로 관리한다.
- 팬 이동량, 핀치 배율, 탭 종료 상태가 핵심 입력이다.
- 여러 핸들러를 조합할 때 이벤트 충돌을 테스트해야 한다.
