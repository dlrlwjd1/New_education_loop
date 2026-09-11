# Avoiding Re-renders with React.memo and useCallback

## 개요

- 부모가 렌더링될 때 자식과 함수가 불필요하게 다시 만들어지는 문제를 설명한다.
- `React.memo`와 `useCallback`으로 props와 함수 참조를 안정화한다.

## 내용

### React.memo

`React.memo`는 이전 props와 새 props가 같으면 함수 컴포넌트의 재렌더링을 건너뛴다. 부모가 다시 렌더링되더라도 자식이 받는 값이 그대로라면 이전 결과를 재사용할 수 있다.

### useCallback

컴포넌트 본문에서 선언한 함수는 렌더링마다 새 참조가 된다. 이 함수가 memoized 자식의 prop이라면 자식도 다시 렌더링된다. `useCallback`은 의존성이 바뀔 때만 함수 참조를 새로 만든다.

## 예시

```tsx
const Counter = React.memo(({ count, onPress }) => (
  <Button title={`${count}`} onPress={onPress} />
));

const increment = useCallback(() => {
  setCount((previous) => previous + 1);
}, []);
```

## 요약

- React.memo는 동일한 props에 대한 자식 재렌더링을 줄인다.
- useCallback은 콜백의 참조를 의존성 변화 전까지 유지한다.
- 메모이제이션 비용도 있으므로 측정 후 필요한 컴포넌트에 적용한다.
