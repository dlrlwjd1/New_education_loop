# Testing Asynchronous Code with Mocks

## 개요

- 외부 API에 의존하는 비동기 함수를 Jest mock으로 격리해 테스트한다.
- 응답 데이터와 호출 URL을 함께 검증하는 예제를 다룬다.

## 내용

### 비동기 테스트의 문제

실제 네트워크는 지연, 장애와 데이터 변화 때문에 테스트를 느리고 불안정하게 만든다. mock은 `fetch`가 정해진 응답을 반환하게 해 대상 함수의 로직만 검증한다.

### 한 번만 적용되는 mock

`mockImplementationOnce` 또는 `mockResolvedValueOnce`를 사용하면 다음 호출에만 응답을 지정할 수 있다. 함수를 `await`한 뒤 반환값과 `fetch`가 받은 URL을 각각 assertion한다.

## 예시

```tsx
const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
  ok: true,
  json: async () => ({ name: 'Leanne Graham' }),
} as Response);

const user = await fetchUser(1);

expect(user.name).toBe('Leanne Graham');
expect(fetchMock).toHaveBeenCalledWith(
  'https://jsonplaceholder.typicode.com/users/1',
);
```

## 요약

- 네트워크 mock은 테스트를 빠르고 결정적으로 만든다.
- 결과뿐 아니라 올바른 URL과 인자로 호출됐는지도 확인한다.
- 성공, 거부, 잘못된 응답과 timeout 같은 경계 사례를 별도로 테스트한다.
