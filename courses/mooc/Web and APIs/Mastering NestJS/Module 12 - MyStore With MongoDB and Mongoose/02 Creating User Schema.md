# Creating User Schema

## 개요
- 기존 TypeORM 기반 user 엔티티(entity)를 제거하고 `@Schema()`, `@Prop()` 데코레이터로 User 스키마를 새로 정의한 뒤, user 모듈에서 TypeORM 대신 `MongooseModule.forFeature()`로 등록하는 강의.

## 내용
### 기존 엔티티 제거 및 스키마 클래스 정의
- `entities` 폴더에서 기존 user 엔티티 파일을 열어 엔티티 전체 내용을 제거(remove)한다.
- `User` 클래스를 새로 정의하고 `@Schema()` 데코레이터로 표시한다.
- `@Schema()` 데코레이터에 `timestamps` 속성을 전달하고 이를 `true`로 설정한다. 이렇게 하면 `createdAt`, `updatedAt` 같은 날짜(date) 프로퍼티를 직접 명시하지 않아도, `timestamps` 속성이 자동으로(automate) 컬렉션 안에 이 프로퍼티들을 만들어준다.

### 프로퍼티 정의
- `userName` 프로퍼티(`string` 타입)를 정의하고 `@Prop()` 데코레이터로 표시한다.
- 같은 방식으로 `password` 프로퍼티(`string` 타입)도 `@Prop()` 데코레이터로 표시한다.
- 클래스 이름과 관련해서, Mongoose는 스키마 이름을 복수형(pluralize)으로 바꾸기 때문에 결과적으로 데이터베이스 안의 컬렉션 이름은 `users`가 된다.

### 스키마 export
- `export const UserSchema = SchemaFactory.createForClass(User)`로 스키마를 생성해 export한다.

### user 모듈에서 스키마 등록
- user 모듈 파일에서 기존 TypeORM 모듈을 제거한다.
- 대신 `MongooseModule.forFeature()`를 사용하고, 객체 안에 `name` 속성은 `UserSchema.name`으로, `schema` 속성은 `UserSchema`로 지정한다.
- 나머지 코드는 그대로 유지한다.
- 다음 강의에서는 user 서비스 파일을 업데이트할 예정이다.

## 예시
```typescript
// entities/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  userName: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
```

```typescript
// user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  // 나머지 controllers, providers 등은 기존과 동일하게 유지
})
export class UserModule {}
```

## 요약
- 기존 TypeORM 엔티티를 제거하고 `@Schema({ timestamps: true })`, `@Prop()` 데코레이터로 `User` 클래스를 스키마로 정의한다.
- `timestamps: true` 옵션을 주면 `createdAt`, `updatedAt`을 직접 정의하지 않아도 자동으로 관리된다.
- Mongoose는 클래스 이름을 복수형으로 바꾸므로 `User` 클래스는 `users` 컬렉션에 매핑된다.
- user 모듈에서는 TypeORM 모듈 대신 `MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])`로 스키마를 등록한다.
