# Auto Scroll to Bottom in FlatList

## 개요
- 긴 응답이나 새 메시지가 추가될 때 FlatList가 최신 메시지로 자동 스크롤되게 만든다.
- `useRef`로 FlatList 인스턴스에 접근하고 `scrollToEnd`를 호출한다.
- 메시지 변경, 레이아웃 갱신, 콘텐츠 크기 변경을 모두 스크롤 트리거로 사용한다.

## 내용
### FlatList ref
- `useRef<FlatList>(null)`로 변경 가능한 참조를 만들고 FlatList의 `ref` prop에 연결한다.
- `flatListRef.current`가 존재하고 메시지가 있을 때만 `scrollToEnd`를 실행한다.
- `animated: true`로 최신 메시지까지 부드럽게 이동한다.

### 자동 스크롤 트리거
- `useEffect`에서 `messagesData`가 바뀔 때 `scrollToBottom`을 호출한다.
- 타이핑 효과로 메시지 높이가 계속 변하므로 메시지 배열 변경만으로는 충분하지 않다.
- `onLayout`과 `onContentSizeChange`에도 같은 함수를 연결해 레이아웃이나 콘텐츠 높이가 바뀔 때 다시 아래로 이동한다.

## 예시
```tsx
const flatListRef = useRef<FlatList<Message>>(null);

const scrollToBottom = () => {
  if (flatListRef.current && messagesData.length > 0) {
    flatListRef.current.scrollToEnd({ animated: true });
  }
};

useEffect(() => {
  scrollToBottom();
}, [messagesData]);

<FlatList
  ref={flatListRef}
  data={messagesData}
  renderItem={renderMessage}
  onLayout={scrollToBottom}
  onContentSizeChange={scrollToBottom}
/>
```

## 요약
- `useRef`와 `scrollToEnd`로 FlatList의 마지막 항목으로 이동한다.
- 메시지 상태 변경뿐 아니라 레이아웃과 콘텐츠 크기 변경에도 스크롤한다.
- 타이핑 효과처럼 높이가 점진적으로 변하는 콘텐츠에도 최신 메시지가 보이게 한다.
