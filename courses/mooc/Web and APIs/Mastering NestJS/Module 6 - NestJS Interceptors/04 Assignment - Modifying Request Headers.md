# Assignment - Modifying Request Headers

## 개요
- 인터셉터(interceptor)를 이용해 나가는 요청(outgoing request)의 헤더(header)를 수정하고, 응답(response)에 커스텀 헤더를 추가하는 실습 과제 강의.

## 내용
### 시나리오
- NestJS 앱이 JSON 형식의 요청만 받는 외부 API와 상호작용(interact)해야 하는 상황을 가정한다.
- 이를 위해 인터셉터로 나가는 요청을 JSON 형식으로 변환(convert)한다.

### 요청 헤더 수정하기
- `context.switchToHttp().getRequest()`로 `request` 상수를 만들어 요청 객체(request object)에 접근한다.
- 요청이 JSON 형식임을 보장하기 위해 `request.headers['content-type']`을 `application/json`으로 설정한다.
- 이 코드로 나가는 모든 요청의 content-type 헤더가 `application/json`으로 설정되며, 이는 전송되는 데이터가 JSON 형식임을 서버에 알려준다.
- `console.log`로 헤더 값을 출력해 확인한다.
- 컨트롤러에서는 메시지를 담은 객체(object) 대신 문자열(string) 메시지를 그대로 반환하도록 바꾼다. 이 문자열 타입은 요청이 엔드포인트(endpoint)에 도달하기 전에 JSON 형식으로 변환된다.
- Postman에서 요청을 보내고 터미널을 확인하면, content-type 헤더가 `application/json` 형식으로 설정되어 있는 것을 볼 수 있다.

### 응답에 커스텀 헤더 추가하기
- 나가는 응답(outgoing response)에도 커스텀 헤더를 붙일 수 있는데, 예를 들어 요청을 추적(trace)하기 위한 request ID를 첨부할 수 있다.
- 먼저 `context.switchToHttp().getResponse()`로 응답 객체(response subject)의 컨텍스트를 가져온다.
- `requestId` 상수를 만들고 `'RQ11'` 같은 정적(static) 값을 대입한다. 이 값은 헤더의 메타데이터(metadata) 역할을 한다.
- `next.handle()`에 `.pipe()`를 붙여 RxJS 연산자를 체이닝하고, `map` 연산자로 응답을 변환한다.
- 콜백에서 `data`를 받아, `response.setHeader()` 메서드로 헤더 이름을 `x-request-id`, 값을 `requestId` 변수로 설정한다.
- `console.log`로 `response.getHeaders()`를 출력해 응답 헤더를 확인하고, 마지막에 `data`를 반환(return)한다.
- Postman에서 다시 요청을 보내면, 터미널에서 커스텀 헤더가 첨부된 응답 헤더를 확인할 수 있다.

## 예시
```typescript
// interceptors 파일 내 intercept 메서드
intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
  // 1. 요청 헤더 수정
  const request = context.switchToHttp().getRequest();
  request.headers['content-type'] = 'application/json';
  console.log(request.headers);

  // 2. 응답에 커스텀 헤더 추가
  const response = context.switchToHttp().getResponse();
  const requestId = 'RQ11';

  return next.handle().pipe(
    map((data) => {
      response.setHeader('x-request-id', requestId);
      console.log(response.getHeaders());
      return data;
    }),
  );
}
```

```typescript
// 컨트롤러 - 문자열 메시지를 그대로 반환
@Get()
@UseInterceptors(TestInterceptor)
getHello(): string {
  return 'interceptor executed';
}
```

## 요약
- `context.switchToHttp().getRequest()`로 요청 객체를 가져와 헤더(예: content-type)를 직접 수정할 수 있다.
- `context.switchToHttp().getResponse()`로 응답 객체를 가져와 `setHeader()`로 커스텀 헤더(예: x-request-id)를 추가할 수 있다.
- 요청 헤더 수정은 `next.handle()` 호출 전에, 응답 헤더 추가는 `map` 연산자 안에서 처리한다.
- `console.log`로 헤더 값을 확인하며 요청·응답이 의도대로 수정되었는지 검증할 수 있다.
