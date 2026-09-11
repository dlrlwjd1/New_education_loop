# Keyboard State

## 개요
- 키보드의 표시 여부와 높이를 추적하는 `useKeyboardState` 커스텀 훅을 만든다.
- iOS와 Android에서 서로 다른 키보드 이벤트 이름을 선택한다.
- 키보드가 열릴 때도 FlatList를 최신 메시지까지 자동 스크롤한다.

## 내용
### 플랫폼별 이벤트
- iOS는 `keyboardWillShow`와 `keyboardWillHide`를 사용한다.
- Android는 `keyboardDidShow`와 `keyboardDidHide`를 사용한다.
- 표시 이벤트에서 `isKeyboardVisible`을 `true`로 바꾸고 `event.endCoordinates.height`를 저장한다.
- 숨김 이벤트에서는 표시 상태를 `false`, 높이를 `0`으로 되돌린다.

### 구독 정리
- `Keyboard.addListener`가 반환하는 두 구독 객체를 보관한다.
- `useEffect` 정리 함수에서 `remove()`를 호출해 컴포넌트 언마운트 시 리스너를 제거한다.
- 훅은 `isKeyboardVisible`과 `keyboardHeight`를 반환한다.

### 자동 스크롤과 결합
- 채팅 화면에서 `isKeyboardVisible`을 가져와 스크롤 효과의 의존성 배열에 추가한다.
- 키보드가 열리며 화면 높이가 줄어들 때 FlatList가 다시 마지막 메시지로 이동한다.

## 예시
```tsx
export const useKeyboardState = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showEvent = Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent = Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const showSubscription = Keyboard.addListener(showEvent, event => {
      setIsKeyboardVisible(true);
      setKeyboardHeight(event.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener(hideEvent, () => {
      setIsKeyboardVisible(false);
      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return { isKeyboardVisible, keyboardHeight };
};
```

## 요약
- 커스텀 훅으로 키보드 표시 상태와 높이를 재사용 가능하게 캡슐화한다.
- 플랫폼에 맞는 `will`/`did` 이벤트를 선택한다.
- 이벤트 구독을 정리하고 키보드 표시 변화에 맞춰 채팅 목록을 다시 스크롤한다.
