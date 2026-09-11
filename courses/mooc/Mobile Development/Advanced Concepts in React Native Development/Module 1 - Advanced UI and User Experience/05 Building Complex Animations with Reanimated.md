# Building Complex Animations with Reanimated

## 개요

- React Native Reanimated의 shared value, animated style과 제스처 연동을 소개한다.
- 드래그 중 카드가 커지고 색이 바뀌며, 놓으면 원래 위치로 돌아가는 예제를 다룬다.

## 내용

### 공유 값과 스타일

`useSharedValue`로 x·y 이동량과 크기를 보관하고, `useAnimatedStyle`에서 이 값들을 `transform`과 배경색에 연결한다. 값 갱신은 React 컴포넌트 재렌더링 없이 애니메이션 스타일에 반영된다.

### 제스처 연동

팬 제스처가 시작되면 scale을 키우고, 활성 상태에서는 손가락 이동량으로 translateX·translateY를 갱신한다. 손을 놓으면 `withSpring`으로 위치와 크기를 초기값으로 되돌린다.

## 예시

```tsx
const x = useSharedValue(0);
const y = useSharedValue(0);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ translateX: x.value }, { translateY: y.value }],
}));

const reset = () => {
  x.value = withSpring(0);
  y.value = withSpring(0);
};
```

## 요약

- shared value는 UI 스레드에서 사용할 애니메이션 상태를 보관한다.
- animated style은 공유 값을 실제 스타일 속성에 연결한다.
- 제스처와 spring을 결합하면 직접 조작 후 자연스럽게 복귀하는 UI를 만들 수 있다.
