# Adding Try-Catch

## 개요
- Hugging Face와 OpenAI HTTP 요청을 `try-catch`로 감싸 네트워크·API 오류를 처리한다.
- Axios 오류인지 판별해 사용자에게 표시할 문자열을 만든다.
- 오류로 응답 텍스트가 없을 때 `TypingEffect`가 충돌하지 않도록 null safety를 추가한다.

## 내용
### 오류 재현과 원인 확인
- Wi-Fi를 끄거나 잘못된 엔드포인트를 사용해 실패 상황을 재현한다.
- 처리하지 않은 요청 오류는 응답이 사라지게 하고, `undefined.split` 같은 후속 렌더링 오류도 만들 수 있다.
- 디버거에서 오류 객체를 직렬화해 `message` 키에 `Network Error` 같은 설명이 있음을 확인한다.

### Axios 오류 처리
- `catch`의 오류 타입은 구조를 확신할 수 없으므로 `unknown`으로 둔다.
- `axios.isAxiosError(error)`로 Axios 오류인지 확인한 뒤 `error.message`를 사용한다.
- 그 밖의 오류에는 일반적인 대체 문구를 사용한다.
- 오류 문자열을 반환하면 기존 채팅 수신 흐름에서 일반 응답처럼 표시할 수 있다.

### TypingEffect 방어
- `text`나 단어 배열이 없을 수 있는 실패 경로에 null safety를 적용해 앱 충돌을 막는다.
- 강의에서는 같은 `try-catch` 패턴을 Hugging Face와 OpenAI 함수 모두에 적용한다.

## 예시
```ts
export const getOpenAIResponse = async (message: string) => {
  try {
    const response = await axios.post(OPENAI_URL, createBody(message), createHeaders());
    return response.data.choices[0].message.content;
  } catch (error: unknown) {
    const errorMessage = axios.isAxiosError(error)
      ? error.message
      : 'An unknown error occurred';

    return `An error occurred: ${errorMessage}`;
  }
};
```

## 요약
- 네트워크 요청은 `try-catch`로 감싸 실패를 사용자에게 설명할 수 있어야 한다.
- `axios.isAxiosError`로 `unknown` 오류를 안전하게 좁힌다.
- API 오류와 후속 렌더링 오류를 함께 방어해 앱 충돌을 막는다.
