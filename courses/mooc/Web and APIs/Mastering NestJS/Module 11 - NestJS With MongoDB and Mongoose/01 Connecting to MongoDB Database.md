# Connecting to MongoDB Database

## 개요
- NestJS 애플리케이션을 MongoDB 데이터베이스와 연결하기 위해 필요한 패키지를 설치하고, `MongooseModule`을 루트 모듈에 등록해 연결 문자열(connection string)로 실제 접속을 확인하는 강의.

## 내용
### 필요한 패키지 설치
- `npm install --save mongoose` 명령으로 **Mongoose**(node Mongoose driver, MongoDB용 core 드라이버)를 설치한다.
- 추가로 `@nestjs/mongoose` 패키지도 설치한다. 이는 기존 Mongoose 드라이버를 감싸는 **래퍼(wrapper)** 패키지다.
- 이 래퍼 패키지가 없어도 Mongoose 드라이버만으로 동작은 가능하지만, `@nestjs/mongoose`를 쓰면 nest 환경과의 통합이 더 매끄러워지고 타입스크립트(typescript) 지원을 온전히 받을 수 있으며, 모듈이나 서비스를 파일에 주입(inject)하기도 쉬워진다.

### TypeORM이 아닌 Mongoose를 쓰는 이유
- Nest는 MongoDB 같은 NoSQL 데이터베이스에는 **TypeORM을 사용하지 않는다**. 그래서 core Mongoose driver를 사용한다.
- TypeORM은 RDBMS, 즉 MySQL, PostgreSQL 같은 SQL 데이터베이스에서만 사용된다.

### MongooseModule 등록
- `MongooseModule`을 루트 레벨에 등록해야 하며, 이를 위해 앱 모듈(app module)의 `imports` 배열에 `MongooseModule.forRoot()` 메서드를 추가한다.
- `MongooseModule`은 `@nestjs/mongoose` 패키지가 제공하는 모듈로, nest 애플리케이션과 Mongoose를 통합할 수 있게 해준다.
- 이 모듈이 제공하는 기능: MongoDB 데이터베이스에 연결(connecting), 스키마(schemas)와 모델(models)의 정의 및 사용, 서비스와 컨트롤러에 모델 주입(injecting models into services and controllers).

### 연결 문자열(connection string) 설정
- `forRoot()` 메서드 안에는 연결 문자열을 전달해야 한다.
- MongoDB 공식 GUI 도구인 **MongoDB Compass**를 열어 연결 문자열을 확인하고 복사한 뒤, 데이터베이스에 접속한다.
- 이 연결 문자열을 그대로 복사해 `forRoot()` 메서드 안에 붙여넣는다.
- 만약 Mongo daemon(`mongod`, MongoDB 공식 커맨드 프롬프트)을 사용한다면, 동일한 연결 문자열을 `forRoot()`에 수동으로 넣어야 하며 이때 MongoDB는 보통 로컬호스트(localhost)의 27017 포트에서 실행된다.

### 데이터베이스 및 임시 컬렉션 생성
- MongoDB 안에 데이터베이스를 새로 생성한다. 이름은 `nest-mongodb`로 정한다.
- 컬렉션이 없으면 데이터베이스만으로는 생성할 수 없기 때문에, 임시로 `test`라는 컬렉션도 함께 만든다. 이 컬렉션은 이후 스키마(schema)를 만들 때 삭제할 예정이다.
- 연결 문자열 안에 데이터베이스 이름(`nest-mongodb`)을 추가해준다.
- 코드를 저장하고 실행하면 데이터베이스가 nest 애플리케이션과 연결되며, 콘솔에 `Mongoose dependency is initialized` 메시지가 출력되는 것을 확인한다.

## 예시
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://<connection-string>/nest-mongodb'),
  ],
})
export class AppModule {}
```

```bash
npm install --save mongoose
npm install @nestjs/mongoose
```

## 요약
- MongoDB 연결을 위해 `mongoose`와 이를 감싸는 `@nestjs/mongoose` 패키지를 설치한다.
- Nest는 NoSQL(MongoDB)에는 Mongoose를, RDBMS(MySQL, PostgreSQL 등)에는 TypeORM을 사용한다.
- `AppModule`의 `imports` 배열에 `MongooseModule.forRoot(연결문자열)`을 등록해 데이터베이스와 연결한다.
- 연결 문자열은 MongoDB Compass 또는 `mongod`에서 확인할 수 있으며, 문자열 끝에 데이터베이스 이름을 추가한다.
- 연결에 성공하면 콘솔에 `Mongoose dependency is initialized` 메시지가 출력된다.
