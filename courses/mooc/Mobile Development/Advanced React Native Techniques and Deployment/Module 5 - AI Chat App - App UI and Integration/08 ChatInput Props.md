# ChatInput Props

## 개요
- `ChatInput`을 실제로 쓸 수 있게 세 가지 props를 추가한다: `messageValue`, `setMessageValue`, `onMessageSent`.
- 빈 메시지(공백만 입력) 전송을 막는 `sendMessageHandler` 로직을 만든다 — `trim()`과 `length` 활용.
- 좋은 이름 짓기(naming)의 중요성: `messages` → `messagesData`처럼 더 나은 이름으로 리팩터링한다.

## 내용
### 세 가지 props
- `messageValue`: AI 챗에 보낼 메시지 값 (사용자가 입력 중인 텍스트).
- `setMessageValue`: 사용자가 입력하는 텍스트를 상태에 저장하는 함수.
- `onMessageSent`: 전송 버튼을 누를 때 실행되는 함수.

### TextInput에 연결
- `value={messageValue}`, `onChangeText={setMessageValue}`, `placeholder="Type a message..."`, `multiline` 지정.
- `placeholderTextColor={colors.black}`로 플레이스홀더 색을 지정한다.

### TypeScript 인터페이스
```ts
interface ChatInputProps {
  messageValue: string;
  setMessageValue: (message: string) => void; // 사용자가 입력 중인 텍스트 설정
  onMessageSent: (message: string) => void;   // 메시지 전송 함수
}
```
- 컴포넌트를 `FC<ChatInputProps>`로 타입 지정한다.

### sendMessageHandler — 빈 메시지 방지
- `onMessageSent`를 버튼 `onPress`에 바로 넘기지 않고, 조건 로직을 가진 `sendMessageHandler`를 만든다.
- 조건: `messageValue.trim().length > 0`일 때만 동작.
  - `trim()`은 문자열 앞뒤의 공백(white space)만 제거한다. 중간 공백은 제거하지 않는다.
  - 공백만 입력하면 `trim()` 결과가 빈 문자열이 되어 `length`가 0이므로 버튼이 동작하지 않는다.
- 조건을 통과하면 `onMessageSent(messageValue)`를 호출하고, `setMessageValue('')`로 입력창을 비운다.

### ChatScreen에서 props 전달
- `const [messageInput, setMessageInput] = useState('')` 상태를 만들고 `messageValue`/`setMessageValue`로 전달한다.
- `onMessageSent`는 새 메시지를 메시지 배열에 push 하는 함수로, 다음 강의에서 구현한다.

### 네이밍 개선
- 프로그래밍에서 좋은 이름 선택은 매우 중요하다. `messages`/`setMessages`는 `messagesData`/`setMessagesData`로 바꾼다. 더 나은 이름을 발견하면 그 이름을 사용하라.

## 예시
```tsx
// components/ChatInput.tsx
const ChatInput: FC<ChatInputProps> = ({ messageValue, setMessageValue, onMessageSent }) => {
  const sendMessageHandler = () => {
    if (messageValue.trim().length > 0) {
      onMessageSent(messageValue);
      setMessageValue('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={messageValue}
        onChangeText={setMessageValue}
        placeholder="Type a message..."
        placeholderTextColor={colors.black}
        multiline
      />
      <TouchableOpacity style={styles.sendButton} onPress={sendMessageHandler}>
        <Feather name="send" color={colors.white} size={scale(15)} />
      </TouchableOpacity>
    </View>
  );
};
```

## 요약
- `ChatInput`은 `messageValue`, `setMessageValue`, `onMessageSent` 세 props로 제어한다.
- `trim().length > 0` 조건으로 빈 메시지/공백 메시지 전송을 차단한다.
- 전송 후 `setMessageValue('')`로 입력창을 초기화한다.
- 더 나은 변수 이름을 발견하면 즉시 리팩터링하라 (`messages` → `messagesData`).
