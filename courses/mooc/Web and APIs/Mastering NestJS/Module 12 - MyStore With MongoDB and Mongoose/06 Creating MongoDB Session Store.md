# Creating MongoDB Session Store

## 개요
- MySQL의 `express-mysql-session` 대신 MongoDB 전용 세션 스토어(session store) 패키지인 **Connect Mongo**를 설치해 세션을 구성하고, MyStore 앱의 회원가입·로그인·상품 CRUD·로그아웃 기능이 모두 MongoDB 위에서 정상 동작하는지 확인하는 강의.

## 내용
### Connect Mongo 설치 및 교체
- MySQL이 자체 세션 스토어 라이브러리인 `express-mysql-session`을 가졌던 것처럼, MongoDB에도 **Connect Mongo**라는 자체 세션 스토어가 있다.
- `npm install --save connect-mongo` 명령으로 패키지를 설치한다.
- 기존의 MySQL 스토어 설정을 제거하고 Connect Mongo를 import한다: `const MongoStore = require('connect-mongo')`.

### 커넥션 풀(connection pool) 불필요
- MySQL과 달리 세션을 위한 별도의 커넥션 풀을 정의할 필요가 없다. Mongoose는 완전히 자동화된 내장 커넥션 풀링(built-in connection pooling)을 제공하기 때문이다.

### MongoStore 설정
- `MongoStore.create()` 메서드로 세션 컬렉션(sessions collection)을 생성하며, 몇 가지 설정값을 전달한다.
- `mongooseConnection` 속성에 Mongoose connection(활성화된 Mongoose 연결 인스턴스)을 전달할 수 있다. 이렇게 하면 이미 맺어진 Mongoose 연결을 세션 저장용으로 재사용할 수 있어 유용하다.
- 대안으로 연결 문자열(connection string)을 직접 제공하는 것도 좋은 방법(good practice)이다. 이 경우 `mongoUrl` 속성을 사용한다.
- 연결 문자열을 직접 쓰는 대신 `dbString`이라는 상수를 만들어 앱 모듈(app module)에서 사용했던 연결 문자열을 그대로 붙여넣고, 이 변수를 `mongoUrl` 속성에 전달한다.

### 기능 테스트
- 저장 후 MyStore 앱의 기능을 확인한다.
- 먼저 데이터베이스를 새로고침하면 `sessions` 컬렉션이 보이며, 현재는 비어 있다.
- 회원가입 폼(signup form)에서 사용자 정보를 입력해 가입(sign up)하면 로그인 페이지로 정상 리다이렉트(redirect)된다.
- `users` 컬렉션을 확인하면 문자열 형태의 object ID, 사용자 이름(user name), 해시된 비밀번호(hashed password), 그리고 날짜 필드(date fields)가 담긴 사용자 데이터를 확인할 수 있다.
- 잘못된 비밀번호로 로그인하면 유효하지 않다는(invalid) 메시지가 나타나고, 올바른 비밀번호를 입력하면 로그인에 성공해 홈페이지가 표시된다.
- 개발자 도구(DEV tools)의 쿠키(cookie) 탭을 열면 세션 쿠키(session cookie)를 확인할 수 있고, `sessions` 컬렉션에서도 암호화된 토큰(encrypted token)이 담긴 세션 문서(session document)를 확인할 수 있다.
- 상품(product)을 추가해 CRUD도 함께 테스트한다: Apple(가격 12)과 orange를 이미지와 함께 추가하면 `products` 컬렉션에 두 개의 상품 문서가 생성된다.
- 상품 수정(edit)도 테스트한다: 이름을 pineapple로, 가격을 8로 바꾸고 이미지를 다시 선택하면 컬렉션에서도 수정 내용이 반영된 것을 확인한다.
- 상품 삭제(delete)도 테스트한다: 모든 상품을 삭제하면 컬렉션에 상품이 남아있지 않은 것을 확인한다.
- 로그아웃(log out)하면 세션이 콘솔과 컬렉션 양쪽에서 모두 정리(clear)되는 것을 확인한다.
- 모든 기능이 정상적으로 동작하며, 이로써 MyStore 앱을 MongoDB 데이터베이스와 함께 완전히 구성하는 작업이 완료되었다.

## 예시
```bash
npm install --save connect-mongo
```

```typescript
// main.ts (세션 설정 부분)
const MongoStore = require('connect-mongo');

const dbString = 'mongodb://<connection-string>/mystore-mongodb'; // app.module.ts에서 사용한 연결 문자열

app.use(
  session({
    // ...
    store: MongoStore.create({
      mongoUrl: dbString,
      // 또는 이미 맺어진 연결을 재사용: mongooseConnection: connection,
    }),
  }),
);
```

## 요약
- MongoDB용 세션 스토어로 `connect-mongo` 패키지를 설치해 기존 MySQL 세션 스토어를 대체한다.
- Mongoose는 내장 커넥션 풀링을 제공하므로 세션용 별도 커넥션 풀 설정이 필요 없다.
- `MongoStore.create()`에 `mongooseConnection`(기존 연결 재사용) 또는 `mongoUrl`(연결 문자열 직접 전달) 속성을 지정해 세션 스토어를 구성한다.
- 회원가입, 로그인/로그아웃, 상품 CRUD를 모두 테스트해 세션 쿠키, `sessions`/`users`/`products` 컬렉션이 정상 동작함을 확인하며 MyStore의 MongoDB 전환을 마무리한다.
