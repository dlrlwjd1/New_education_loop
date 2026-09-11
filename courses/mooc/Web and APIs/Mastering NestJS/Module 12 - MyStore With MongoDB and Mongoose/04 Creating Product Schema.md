# Creating Product Schema

## 개요
- 기존 TypeORM 기반 product 엔티티를 제거하고 `@Schema()`, `@Prop()` 데코레이터로 Product 스키마를 새로 정의한 뒤, product 모듈에서 TypeORM 대신 `MongooseModule.forFeature()`로 등록하는 강의.

## 내용
### 기존 엔티티 제거 및 스키마 클래스 정의
- `entities` 폴더에서 product 엔티티 파일을 열어 기존 엔티티 전체를 제거(remove)한다.
- `Product`라는 클래스를 만들고 `@Schema()` 데코레이터를 적용하며, `timestamps` 속성을 `true`로 설정해 컬렉션 안에 날짜(date) 필드가 자동으로 생성되도록 한다.

### 프로퍼티 정의
- `productName` 프로퍼티(`string` 타입)를 `@Prop()`으로 표시하고, `required` 제약을 `true`로 설정한다.
- `price` 프로퍼티(`number` 타입)도 `@Prop()`으로 표시하고 `required`를 `true`로 설정한다.
- `image` 프로퍼티(`string` 타입)도 `@Prop()`으로 표시하고 마찬가지로 `required`를 `true`로 설정한다.

### 스키마 export
- `const ProductSchema = SchemaFactory.createForClass(Product)`로 스키마를 생성해 export한다.

### product 모듈에서 스키마 등록
- product 모듈 파일에서 기존 TypeORM 모듈을 제거한다.
- 대신 `MongooseModule.forFeature()`를 사용하고, 객체 안에 `name` 속성은 `ProductSchema.name`으로, `schema` 속성은 `ProductSchema`로 지정한다.
- 나머지 코드는 그대로 유지한다.
- 다음 강의에서는 product 서비스 파일을 업데이트할 예정이다.

## 예시
```typescript
// entities/product.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
```

```typescript
// product.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  // 나머지 controllers, providers 등은 기존과 동일하게 유지
})
export class ProductModule {}
```

## 요약
- 기존 TypeORM product 엔티티를 제거하고 `@Schema({ timestamps: true })`로 `Product` 클래스를 스키마로 정의한다.
- `productName`, `price`, `image` 세 프로퍼티 모두 `@Prop({ required: true })`로 필수 값으로 지정한다.
- `SchemaFactory.createForClass(Product)`로 스키마를 생성해 export한다.
- product 모듈에서는 TypeORM 대신 `MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])`로 등록한다.
