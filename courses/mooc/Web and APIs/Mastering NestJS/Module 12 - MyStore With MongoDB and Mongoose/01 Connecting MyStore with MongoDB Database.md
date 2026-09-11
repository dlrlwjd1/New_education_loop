# Connecting MyStore with MongoDB Database

## 개요
- MyStore 애플리케이션을 MySQL(TypeORM) 기반에서 MongoDB(Mongoose) 기반으로 전환하는 첫 단계로, Mongoose 패키지를 설치하고 `AppModule`에서 TypeORM 모듈을 제거한 뒤 `MongooseModule.forRoot()`로 교체하는 강의.

## 내용
### MySQL에서 MongoDB로 전환하는 목표
- NestJS 애플리케이션이 MongoDB 데이터베이스와 상호작용하는 방법을 배운 뒤, 이제 MyStore 앱을 MySQL에서 MongoDB로 전환한다.
- MongoDB와 상호작용하기 위한 core driver로 **Mongoose**를 사용한다.
- 이 섹션에서는 MongoDB 전용 세션 스토어(dedicated session store)를 사용해 스토어 세션(store session)을 만드는 방법도 다룰 예정이다.
- 목표는 애플리케이션의 흐름(flow)을 흐트러뜨리지 않으면서 RDBMS 데이터베이스에서 NoSQL 데이터베이스로 매끄럽게 전환(smooth transition)하는 방법을 보여주는 것이다.

### 패키지 설치
- `npm install --save mongoose @nestjs/mongoose` 명령으로 `@nestjs/mongoose`와 core Mongoose 패키지를 설치한다.

### MongoDB Compass에서 연결 및 데이터베이스 생성
- MongoDB Compass를 열어 연결(connection)을 만든다.
- 데이터베이스 이름을 `mystore-mongodb`로 짓고, 임시 컬렉션(temporary collection)을 하나 생성한다.
- 연결 문자열(connection string)을 복사해둔다.

### AppModule에서 TypeORM을 MongooseModule로 교체
- VS Code로 돌아가 `app.module.ts` 파일을 연다.
- 기존에는 MySQL과 상호작용하기 위해 TypeORM을 정의해두었는데, 이 TypeORM 모듈 전체를 제거(remove)한다.
- 대신 `MongooseModule.forRoot()` 메서드를 지정한다.
- `forRoot()` 안에는 방금 복사해둔 연결 문자열을 붙여넣고, 데이터베이스 이름 `mystore-mongodb`도 함께 지정한다.
- 이렇게 루트 레벨(root level)에서 Mongoose 모듈을 등록함으로써 MongoDB 데이터베이스를 MyStore 애플리케이션과 연결하는 첫 단계가 완료된다.
- 다만 아직 애플리케이션을 바로 실행할 수는 없다. product와 user 리포지토리(repository)를 업데이트해야 하고, 이들을 위한 스키마(schema)도 아직 정의하지 않았기 때문이다. 스키마 정의는 다음 강의부터 다룬다.

## 예시
```bash
npm install --save mongoose @nestjs/mongoose
```

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // TypeORM 모듈 제거
    MongooseModule.forRoot('mongodb://<connection-string>/mystore-mongodb'),
  ],
})
export class AppModule {}
```

## 요약
- MyStore 앱을 MySQL(TypeORM)에서 MongoDB(Mongoose)로 전환하는 작업을 시작하며, `@nestjs/mongoose`와 `mongoose` 패키지를 설치한다.
- MongoDB Compass에서 `mystore-mongodb` 데이터베이스를 만들고 연결 문자열을 확인한다.
- `AppModule`에서 기존 TypeORM 모듈을 제거하고 `MongooseModule.forRoot(연결문자열)`로 교체한다.
- product·user 리포지토리와 스키마는 아직 정의되지 않아 애플리케이션을 바로 실행할 수 없으며, 이는 이어지는 강의에서 다룬다.
