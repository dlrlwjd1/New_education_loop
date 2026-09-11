# Built-in Pipes (ParseUUIDPipe)

## 개요
- 요청 파라미터로 들어온 UUID(Universally Unique Identifier)가 올바른 형식인지 검증하는 내장 파이프 **ParseUUIDPipe**를 실습하고, 특정 UUID 버전만 허용하도록 설정하는 방법까지 다루는 강의.

## 내용
### UUID란
- **UUID(Universally Unique Identifier)**는 컴퓨터 시스템에서 정보를 고유하게 식별하는 데 사용하는 128비트 숫자다.
- 일반적으로 UUID는 32개의 16진수(hexadecimal digits)로 표현되며, 하이픈(hyphen)으로 구분된 5개의 그룹(8-4-4-4-12자리)으로 표시된다.
- UUID에는 여러 버전이 있고 버전마다 서로 다른 알고리즘으로 고유 ID를 생성한다. 대표적으로 버전 1(현재 시간과 MAC 주소 기반), 버전 4(무작위 생성), 버전 5(네임스페이스 기반 ID)가 있다.

### ParseUUIDPipe란
- **ParseUUIDPipe**는 요청 파라미터에서 UUID를 파싱(parsing)하는 내장 파이프로, 애플리케이션에서 처리되기 전에 들어오는 UUID가 올바른 형식인지 보장한다.

### 컨트롤러에 적용하기
- 파라미터로 UUID를 기대하는 엔드포인트를 예로 든다. `@Get()` 핸들러 안에 동적 id를 두고, 메서드에서 `@Param()` 데코레이터로 `id`를 가져오며 `ParseUUIDPipe`를 적용한다. NestJS는 이 파이프로 UUID를 검증(validate)한다.
- id 프로퍼티는 `string` 타입으로 선언하고 params에서 받은 id 값을 반환한다.
- Postman에서 잘못된 무작위 id 값을 전달하면 UUID가 기대된다는 검증 오류(validation error)가 표시된다.
- 유효한 UUID를 전달하면 `ParseUUIDPipe`를 통해 해당 id 값이 정상적으로 반환된다.
- `ParseUUIDPipe`의 핵심 장점은 UUID의 검증과 변환을 자동으로 처리해준다는 점이다.

### 특정 UUID 버전 지정하기
- 기본적으로 `ParseUUIDPipe`는 어떤 버전의 UUID든 처리할 수 있다.
- 특정 버전(예: 버전 4)만 다루고 싶다면, `new` 키워드로 `ParseUUIDPipe`의 인스턴스를 생성하고 괄호 안에 `version` 옵션을 지정해야 한다. Nest가 지원하는 버전은 세 가지(버전 1, 4, 5)다.
- `version: '4'`로 설정한 뒤 Postman에서 버전 5 UUID를 전달해 요청하면 버전 4 UUID가 기대된다는 오류가 표시된다.
- 버전 4에 해당하는 유효한 UUID를 전달하면 해당 id 값이 정상적으로 반환된다.

## 예시
```typescript
// 기본: 모든 버전의 UUID 허용
@Get(':id')
getId(@Param('id', ParseUUIDPipe) id: string) {
  return id;
}

// 특정 버전(버전 4)만 허용
@Get(':id')
getId(
  @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
) {
  return id;
}
```

## 요약
- UUID는 128비트 고유 식별자이며 8-4-4-4-12 형식의 16진수 5그룹으로 표시되고, 버전 1·4·5 등 여러 버전이 있다.
- `ParseUUIDPipe`는 요청 파라미터로 들어온 UUID의 형식을 검증하는 내장 파이프다.
- 기본적으로 모든 버전의 UUID를 처리할 수 있으며, `new ParseUUIDPipe({ version: '4' })`처럼 인스턴스를 생성해 특정 버전만 허용하도록 제한할 수 있다.
- 잘못된 형식이나 지정한 버전이 아닌 UUID가 전달되면 검증 오류가 반환된다.
