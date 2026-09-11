# Creating a Schema

## 개요
- MongoDB 컬렉션(collection)을 위한 스키마(schema)를 `@Schema()`, `@Prop()` 데코레이터로 클래스 기반으로 정의하고, `SchemaFactory`를 이용해 Mongoose 스키마로 변환·export하는 강의.

## 내용
### 스키마 파일 생성
- `src` 폴더 안에 `products`라는 폴더를 만들고, 그 안에 `product.schema.ts` 타입스크립트 파일을 생성한다.
- 이 파일 안에 `Product`라는 클래스를 만들고, 이 클래스를 스키마로 표시하기 위해 클래스에 `@Schema()` 데코레이터를 붙인다.
- `@Schema()` 데코레이터로 클래스를 표시하면, 이 클래스가 MongoDB 컬렉션의 스키마를 정의한다는 것을 NestJS가 인식하게 된다.

### 컬렉션 이름 지정
- 컬렉션 이름을 Mongoose 드라이버가 자동으로 정하도록 두지 않고 명시적으로 지정하고 싶다면, `@Schema()` 데코레이터 안에 `collection` 속성을 주고 문자열 값을 할당하면 된다.
- 여기서는 컬렉션 이름을 `products`로 지정한다.

### 필드(프로퍼티) 정의
- 컬렉션 안의 필드(field)에 해당하는 프로퍼티들을 정의한다.
- `productName`이라는 `string` 타입 프로퍼티를 만들고, 이를 컬렉션 안의 프로퍼티로 표시하기 위해 `@nestjs/mongoose` 패키지에서 제공하는 `@Prop()` 데코레이터를 붙인다.
- 프로퍼티에 `required`, `unique` 같은 제약(constraint)을 추가하려면, `@Prop()` 안에 `required: true`, `unique: true`를 지정하면 된다.
- 같은 방식으로 `price`(`number` 타입, `required: true`) 프로퍼티와, `createdAt`(`Date` 타입, 기본값(default)을 `Date.now`로 지정) 프로퍼티를 추가한다.
- `default` 속성은 해당 필드의 기본값을 설정한다. MongoDB는 기본적으로 날짜를 ISO 형식으로 저장하므로, 날짜를 ISO 문자열로 변환하는 작업을 따로 신경 쓸 필요가 없다.

### 스키마 export — SchemaFactory
- 스키마 정의가 끝나면 이 스키마를 사용할 수 있도록 export해야 한다.
- TypeORM과 달리, MySQL에서 했던 것처럼 `Product` 클래스를 모듈 파일 안에 직접 명시(state)할 수 없다.
- 따라서 전체 스키마를 변수(상수)에 할당해야 한다. `productSchema`라는 변수를 만들고, `SchemaFactory.createForClass()` 메서드에 `Product` 클래스를 전달해 값을 할당한다.
- `SchemaFactory`는 `@nestjs/mongoose` 패키지가 제공하는 유틸리티로, `@Schema`와 `@Prop` 데코레이터가 제공한 메타데이터를 읽어 클래스 정의로부터 Mongoose 스키마를 생성해준다.
- `createForClass` 메서드를 `SchemaFactory`에서 호출해, 스키마 클래스(여기서는 `Product`)를 기반으로 Mongoose 스키마를 생성한다.
- 이렇게 만든 전체 MongoDB 스키마를 NestJS에서 사용할 수 있도록 export한다. 다음 강의에서는 이 스키마를 모듈에 등록(register)하는 방법을 다룬다.

## 예시
```typescript
// products/product.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'products' })
export class Product {
  @Prop({ required: true, unique: true })
  productName: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
```

## 요약
- 스키마 클래스에는 `@Schema()` 데코레이터를 붙이며, `collection` 속성으로 컬렉션 이름을 명시적으로 지정할 수 있다.
- 필드(프로퍼티)에는 `@Prop()` 데코레이터를 붙이고, `required`, `unique`, `default` 같은 옵션으로 제약과 기본값을 설정한다.
- TypeORM과 달리 스키마 클래스를 모듈에 직접 등록할 수 없으므로, `SchemaFactory.createForClass(클래스)`로 Mongoose 스키마를 생성해 변수로 export해야 한다.
- `SchemaFactory`는 `@Schema`/`@Prop` 메타데이터를 읽어 Mongoose 스키마를 생성해주는 `@nestjs/mongoose` 유틸리티다.
