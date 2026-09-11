# Display Hugging Face (GPT-2) Response

## 개요
- 앞 강의의 Hugging Face 요청 함수를 채팅 전송 흐름에 연결한다.
- 응답 데이터가 객체가 아니라 배열이라는 점을 확인하고 첫 요소의 `generated_text`를 사용한다.
- 정적 응답을 실제 GPT-2 생성 결과로 교체한다.

## 내용
### AI 응답 함수
- `getResponseFromAI`는 사용자가 보낸 메시지를 받아 `getHuggingFaceResponse`를 기다린다.
- 얻은 생성 문자열을 기존 `onGetResponse`에 전달해 `RECEIVED` 메시지로 추가한다.
- `setTimeout` 콜백에서도 정적 문장 대신 이 함수를 호출한다.

### 응답 구조 디버깅
- 처음에는 `response.data.generated_text`로 접근해 `undefined`가 전달되고 `TypingEffect`의 `split` 호출이 실패한다.
- Reactotron 로그로 `response.data`가 배열임을 확인한다.
- 배열의 첫 요소를 고른 뒤 `generated_text`를 읽어야 한다: `response.data[0].generated_text`.

## 예시
```ts
export const getHuggingFaceResponse = async (message: string) => {
  const response = await axios.post(
    HUGGING_FACE_URL,
    { inputs: message },
    { headers: { Authorization: `Bearer ${HUGGING_FACE_KEY}` } },
  );

  return response.data[0].generated_text;
};

const getResponseFromAI = async (message: string) => {
  const generatedText = await getHuggingFaceResponse(message);
  onGetResponse(generatedText);
};
```

## 요약
- Hugging Face 요청 결과를 채팅 화면의 수신 메시지 상태와 연결한다.
- 응답은 배열이므로 첫 번째 요소의 `generated_text`를 읽는다.
- 로그로 실제 데이터 구조를 확인하면 `undefined`와 후속 렌더링 오류의 원인을 찾을 수 있다.
