# Send Messages

## 개요
- 전송 버튼을 누르면 새 메시지를 메시지 배열에 추가하는 `onMessageSent` 함수를 구현한다.
- `setMessagesData`의 함수형 업데이트와 스프레드 연산자(spread operator)로 이전 메시지에 새 메시지를 이어 붙인다.
- FlatList의 중복 key 오류를 `prevMessages.length + 1`로 해결한다.

## 내용
### 입력값 확인
- `console.log('user type', messageInput)`로 전송 버튼을 누를 때 입력값이 찍히는지 확인한다. Reactotron으로 로그를 확인한다(연결하려면 열고 앱 리로드 필요).

### 함수형 업데이트와 스프레드 연산자
- `setMessagesData(prevMessages => ...)`에서 `prevMessages`는 기존 메시지 배열을 가리킨다.
- 아무것도 return하지 않으면 메시지가 모두 사라지므로, 이전 메시지 + 새 메시지 배열을 return해야 한다.
- 스프레드 연산자 `...`는 배열/객체의 값을 꺼내 펼친다. `[1,2,3]`을 `...`로 펼치면 `1, 2, 3`이 된다. 배열 안에 배열을 넣지 않고 값만 꺼내 넣기 위해 사용한다.

### 새 메시지 추가
- 처음에는 `message: 'new message sent'`로 정적으로 넣어 테스트한 뒤, `messageInput`(TextInput에서 입력한 값)으로 동적으로 교체한다.
- `type`은 항상 `sent`.

### FlatList 중복 key 오류 해결
- id를 4로 고정하면 "Encountered two children with the same key" 오류 발생.
- FlatList의 각 요소는 고유한 key를 가져야 한다. 중복 key는 성능 문제와 로직 문제를 일으킬 수 있다.
- `id: prevMessages.length + 1`로 해결 — 이전 배열 길이 + 1이 새 id가 된다 (메시지 4개면 새 id는 5).
- `console.log('messages list', messagesData)`로 id가 1, 2, ..., 6으로 올라가는 것을 확인 후 임시 로그를 제거한다.

## 예시
```tsx
// screens/ChatScreen.tsx
const onMessageSent = (message: string) => {
  setMessagesData(prevMessages => [
    ...prevMessages,
    {
      id: prevMessages.length + 1,
      message: messageInput,
      type: SENT,
    },
  ]);
};
```

## 요약
- 상태 업데이트는 함수형 업데이트(`prevMessages => ...`)로 이전 상태를 기반으로 한다.
- 스프레드 연산자로 이전 메시지 배열을 펼쳐 새 배열에 담고 새 메시지 객체를 추가한다.
- FlatList의 key는 고유해야 하며, `prevMessages.length + 1`로 새 id를 생성한다.
- 다음 강의에서는 메시지를 보내면 응답을 받는 기능을 만든다.
