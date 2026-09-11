# Connect App with Hugging (GPT-2)

## 개요
- Axios로 Hugging Face Inference API에 POST 요청을 보내는 `getHuggingFaceResponse` 함수를 만든다.
- 요청 본문에 사용자 메시지를, 헤더에 Bearer 토큰과 JSON 콘텐츠 타입을 넣는다.
- Reactotron에서 요청 결과와 HTTP 200 응답을 확인한 뒤 생성 텍스트를 반환한다.

## 내용
### 요청 함수 구성
- `getHuggingFaceResponse`는 문자열 메시지를 받고 네트워크 작업을 기다려야 하므로 `async` 함수로 선언한다.
- 기본 URL은 `https://api-inference.huggingface.co/models/`이며 뒤에 사용할 모델 이름을 붙인다.
- 강의에서는 비교적 작은 텍스트 생성 모델인 `gpt2`를 사용한다.

### 본문과 헤더
- 본문은 Hugging Face API 형식에 맞춰 `{ inputs: message }`로 전달한다.
- `Authorization` 헤더는 `Bearer <token>` 형식이다.
- `Content-Type`은 `application/json`으로 지정한다.

### 응답 확인
- 임시 버튼에서 함수에 `Hello`를 전달해 Reactotron으로 요청과 응답을 검사한다.
- URL의 `inference` 철자가 잘못되면 요청이 실패하므로 엔드포인트를 정확히 작성해야 한다.
- 강의의 응답 데이터는 배열이며 실제 생성 문자열은 다음 강의에서 배열 첫 요소를 통해 꺼낸다.

## 예시
```ts
import axios from 'axios';

const HUGGING_FACE_URL = 'https://api-inference.huggingface.co/models/gpt2';

export const getHuggingFaceResponse = async (message: string) => {
  const response = await axios.post(
    HUGGING_FACE_URL,
    { inputs: message },
    {
      headers: {
        Authorization: `Bearer ${HUGGING_FACE_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response.data;
};
```

## 요약
- Axios POST 요청으로 사용자 메시지를 Hugging Face GPT-2 모델에 전달한다.
- Bearer 토큰과 JSON 헤더를 설정하고 정확한 inference URL을 사용한다.
- 응답 구조를 확인한 뒤 필요한 생성 텍스트를 호출자에게 반환한다.
