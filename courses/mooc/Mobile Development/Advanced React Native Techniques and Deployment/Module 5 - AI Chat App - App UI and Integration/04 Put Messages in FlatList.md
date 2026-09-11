# Put Messages in FlatList

## 개요
- 정적으로 렌더링하던 두 메시지 카드를 `FlatList`와 `useState`로 동적 렌더링으로 바꾼다.
- 메시지 객체는 `id`, `message`, `type`(`sent`/`received`) 메타데이터를 가진다.
- `renderItem`에서 `type`에 따라 `SentMessageCard` 또는 `ResponseMessageCard`를 분기 렌더링한다.

## 내용
### 메시지 상태 만들기
- `const [messages, setMessages] = useState(messagesList)` 형태로 상태를 만든다.
- `messagesList`는 객체 배열이며 각 객체는 메시지 메타데이터를 담는다:
  - `message`: 메시지 내용 (예: "Hello")
  - `id`: 고유 ID
  - `type`: 보낸 메시지와 받은 메시지를 구분하는 값 — `'sent'` 또는 `'received'`

### FlatList 렌더링
- `data`: `useState`의 `messages`.
- `keyExtractor`: 각 요소에 key 부여 — `item => item.id.toString()`.
- `renderItem`: `item`을 구조 분해(destructure)해서 `item.type === 'sent'`이면 `SentMessageCard`, 아니면 `ResponseMessageCard`를 렌더링하고 `message={item.message}`를 전달한다.
- `item`은 배열의 각 객체를 가리키며 루프를 돌며 모든 객체에 대해 실행된다.

### 테스트와 패딩
- 정적 카드 두 개를 제거하고, 세 번째 메시지("Tell me about React Native", id: 3)를 추가해 확인한다. type을 잘못 주면 응답 카드로 표시되므로 `sent`로 수정 — 배열을 바꾸면 리로드해야 상태가 갱신된다.
- 좌우 여백은 FlatList의 `contentContainerStyle`에 `paddingHorizontal: scale(8)`(15 → 14 → 10 → 8로 조정)로 준다.

## 예시
```tsx
const messagesList = [
  { id: 1, message: 'Hello', type: 'sent' },
  { id: 2, message: 'Hi, how can I help you today?', type: 'received' },
  { id: 3, message: 'Tell me about React Native', type: 'sent' },
];

const [messages, setMessages] = useState(messagesList);

<FlatList
  data={messages}
  keyExtractor={item => item.id.toString()}
  contentContainerStyle={{ paddingHorizontal: scale(8) }}
  renderItem={({ item }) =>
    item.type === 'sent' ? (
      <SentMessageCard message={item.message} />
    ) : (
      <ResponseMessageCard message={item.message} />
    )
  }
/>
```

## 요약
- 메시지를 `{ id, message, type }` 객체 배열로 관리하고 `useState`로 상태화했다.
- `FlatList`의 `data`, `keyExtractor`, `renderItem` 세 가지 핵심 prop을 사용했다.
- `type` 값(`sent`/`received`)으로 어떤 카드 컴포넌트를 렌더링할지 분기한다.
- 좌우 패딩은 `contentContainerStyle`의 `paddingHorizontal`로 처리했다.
