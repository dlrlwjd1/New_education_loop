# Connect with OpenAI and Get Smarter Answers

## 개요
- Axios POST 요청으로 OpenAI Chat Completions API를 호출하는 `getOpenAIResponse` 함수를 만든다.
- 모델과 사용자 메시지를 본문에 넣고 OpenAI API 키를 Bearer 토큰으로 전달한다.
- 응답의 `choices[0].message.content`를 추출해 기존 채팅 수신 흐름에 연결한다.

## 내용
### Chat Completions 요청
- 엔드포인트는 강의에서 `https://api.openai.com/v1/chat/completions`를 사용한다.
- 본문에는 `model`과 `messages` 배열을 전달한다.
- 강의의 모델 예시는 `gpt-4o-mini`이며 메시지는 `{ role: 'user', content: message }` 형태다.

### 인증 헤더
- `Authorization`은 `Bearer ${OPENAI_KEY}` 형식으로 설정한다.
- `Content-Type`은 `application/json`을 사용한다.
- 강의는 예제를 위해 키 파일을 사용하지만 실제 키는 저장소에 커밋하지 않아야 한다.

### 응답 구조 확인
- Reactotron에서 성공 상태 코드와 전체 `response.data`를 먼저 확인한다.
- 필요한 텍스트는 `choices` 배열의 첫 요소 안에 있는 `message.content`다.
- Hugging Face 호출 대신 `getOpenAIResponse`를 사용하면 같은 채팅 UI에서 더 나은 응답을 표시할 수 있다.

## 예시
```ts
const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';

export const getOpenAIResponse = async (message: string) => {
  const response = await axios.post(
    OPENAI_URL,
    {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: message }],
    },
    {
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data.choices[0].message.content;
};
```

## 요약
- Chat Completions 요청 본문은 모델과 역할 기반 메시지 배열로 구성한다.
- 응답 텍스트는 `response.data.choices[0].message.content`에 있다.
- OpenAI 호출 함수를 기존 AI 응답 함수에 연결해 채팅 UI를 재사용한다.
