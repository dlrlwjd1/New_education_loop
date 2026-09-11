# Adding Thinking Loading

## 개요
- AI 요청이 진행 중일 때 `Thinking` 수신 카드를 보여 주는 로딩 상태를 추가한다.
- `isLoading` 상태를 요청 시작 전 `true`, 응답 처리 후 `false`로 바꾼다.
- 기존 `ResponseMessageCard`를 재사용하고 FlatList와 같은 수평 패딩을 적용한다.

## 내용
### 로딩 상태
- `useState(false)`로 `isLoading`을 만든다.
- AI 응답 함수를 호출하기 직전에 `setIsLoading(true)`를 실행한다.
- 응답을 메시지 목록에 추가한 뒤 `setIsLoading(false)`로 되돌린다.
- 정상 응답뿐 아니라 오류 문자열을 받는 흐름에서도 로딩 표시가 종료된다.

### 조건부 렌더링
- `isLoading`이 참일 때만 `ResponseMessageCard`에 `Thinking` 메시지를 전달한다.
- 카드 바깥을 `View`로 감싸 메시지 목록과 동일한 수평 패딩을 준다.
- 텍스트 대신 로더를 넣는 방식으로도 바꿀 수 있다.

## 예시
```tsx
const [isLoading, setIsLoading] = useState(false);

const getResponseFromAI = async (message: string) => {
  setIsLoading(true);
  const response = await getOpenAIResponse(message);
  onGetResponse(response);
  setIsLoading(false);
};

{isLoading && (
  <View style={styles.loadingContainer}>
    <ResponseMessageCard message="Thinking Thinking" />
  </View>
)}
```

## 요약
- `isLoading`으로 API 요청의 진행 상태를 UI에 반영한다.
- 로딩 중에는 응답 카드 형태의 `Thinking` 메시지를 조건부로 표시한다.
- 응답이나 오류를 처리한 뒤 로딩 상태를 종료한다.
