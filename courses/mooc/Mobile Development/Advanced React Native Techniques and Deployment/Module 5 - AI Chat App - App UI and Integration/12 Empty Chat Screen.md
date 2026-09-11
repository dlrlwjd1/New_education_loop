# Empty Chat Screen

## 개요
- 메시지가 하나도 없을 때 흰 화면 대신 안내 UI를 표시한다.
- FlatList의 `ListEmptyComponent`에 별도 `EmptyChat` 컴포넌트를 연결한다.
- 앱 아이콘과 환영 문구로 채팅의 시작 화면을 구성한다.

## 내용
### ListEmptyComponent
- 초기 메시지 배열을 빈 배열로 만들면 FlatList에 렌더링할 항목이 없다.
- `ListEmptyComponent`는 `data`가 비었을 때만 지정된 컴포넌트를 렌더링한다.
- 사용자가 메시지를 보내 배열에 데이터가 생기면 빈 화면 컴포넌트는 자동으로 사라진다.

### EmptyChat UI
- 앱 아이콘의 크기를 `scale(100)`, `verticalScale(100)`으로 지정한다.
- 상단 여백과 수평 패딩을 주고, `Hello`, `What can I help with?` 문구를 가운데 정렬한다.
- 제목과 부제목의 글자 크기와 여백을 각각 지정한다.

## 예시
```tsx
<FlatList
  data={messagesData}
  renderItem={renderMessage}
  ListEmptyComponent={EmptyChat}
/>
```

```tsx
const EmptyChat = () => (
  <View style={styles.container}>
    <Image source={images.appIcon} style={styles.icon} />
    <Text style={styles.title}>Hello</Text>
    <Text style={styles.subtitle}>What can I help with?</Text>
  </View>
);
```

## 요약
- `ListEmptyComponent`는 FlatList 데이터가 없을 때 전용 UI를 보여 준다.
- 메시지가 추가되면 빈 채팅 화면에서 일반 메시지 목록으로 자연스럽게 전환된다.
- 앱 아이콘과 안내 문구로 채팅 시작 상태를 명확하게 표현한다.
