# Receive Messages

## 개요
- 실제 AI API를 연결하기 전에 정적 응답(static response)으로 수신 메시지 흐름을 구현한다.
- 전송 메시지와 같은 상태 업데이트 패턴을 재사용하되 메시지 내용과 타입을 `received`로 바꾼다.
- `setTimeout`으로 2초 뒤 AI 응답이 도착하는 상황을 모의한다.

## 내용
### 수신 메시지 추가 함수
- `onGetResponse`는 응답 문자열을 받아 기존 `messagesData` 뒤에 새 메시지를 추가한다.
- 새 메시지의 `id`는 `prevMessages.length + 1`, `message`는 전달받은 응답, `type`은 `RECEIVED`다.
- `RECEIVED` 타입을 사용하면 기존 `ResponseMessageCard`의 왼쪽 정렬과 회색 배경 스타일이 적용된다.

### setTimeout으로 응답 지연 모의
- 메시지를 보낸 직후 `setTimeout`을 실행해 네트워크 응답처럼 지연된 결과를 만든다.
- `setTimeout`의 두 번째 인수는 밀리초(ms)다. `2000`은 2초를 뜻한다.
- 현재는 정적 문장을 넘기지만 이후 Hugging Face와 OpenAI API의 실제 응답으로 교체한다.

## 예시
```tsx
const onGetResponse = (response: string) => {
  setMessagesData(prevMessages => [
    ...prevMessages,
    {
      id: prevMessages.length + 1,
      message: response,
      type: RECEIVED,
    },
  ]);
};

const onMessageSent = (message: string) => {
  setMessagesData(prevMessages => [
    ...prevMessages,
    { id: prevMessages.length + 1, message, type: SENT },
  ]);

  setTimeout(() => {
    onGetResponse('Hello, I am an AI assistant. How can I help you today?');
  }, 2000);
};
```

## 요약
- 수신 메시지도 함수형 상태 업데이트로 기존 배열 뒤에 추가한다.
- 메시지 타입은 `RECEIVED`로 지정해 응답 카드 스타일을 사용한다.
- `setTimeout`으로 2초 지연된 정적 응답을 만들고 이후 실제 API 응답으로 대체한다.
