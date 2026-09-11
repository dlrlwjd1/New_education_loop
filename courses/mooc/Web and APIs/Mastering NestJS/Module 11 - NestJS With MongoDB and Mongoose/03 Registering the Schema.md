# Registering the Schema

## 개요
- 앞서 만든 product 스키마를 실제로 사용하기 위해 컨트롤러(controller)와 모듈(module) 파일을 생성하고, `MongooseModule.forFeature()`를 이용해 모듈에 스키마를 등록하는 강의.

## 내용
### 컨트롤러 및 모듈 파일 생성
- 스키마를 등록하기 위해 products용 컨트롤러와 모듈 파일을 별도로 생성한다.
- 컨트롤러 생성 명령어: `nest generate controller products/product --no-spec`
- 모듈 생성 명령어: `nest generate module products/product --no-spec` (스펙 파일은 생성하지 않는다)

### MongooseModule.forFeature()로 스키마 등록
- `product.module.ts` 파일을 열어 `imports` 배열에 스키마를 등록한다.
- `MongooseModule.forFeature()` 메서드를 사용하며, 이 메서드 안에는 스키마 정의(definition)를 객체(object) 형태로 전달한다.
- 이 객체는 두 가지 프로퍼티를 가진다.
  - `name`: 스키마 이름을 할당한다. 기본적으로 클래스 이름을 사용하므로 `Product.name` 값을 넣는다. 항상 `.name` 프로퍼티 형태로 지정하는 것이 기본 문법(basic syntax)이다.
  - `schema`: 앞서 정의해둔 상수인 `productSchema`를 지정한다.
- 이렇게 하면 MongoDB 스키마를 nest 애플리케이션 안에 등록할 수 있다.

### 컨트롤러 등록 및 실행 확인
- `product.module.ts`의 `controllers` 배열에도 product 컨트롤러를 등록한다.
- 애플리케이션을 다시 실행(restart)한 뒤 MongoDB 데이터베이스를 확인하면, 데이터베이스 안에 `products` 컬렉션이 생성되어 있는 것을 볼 수 있다.
- 더 이상 필요 없는 `test` 컬렉션은 삭제(drop)한다.
- 이렇게 해서 MongoDB 데이터베이스와의 연결이 완전히 이루어졌으며, 다음 강의에서는 컬렉션에 실제 문서(document)를 추가하는 방법을 다룬다.

## 예시
```typescript
// product.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.schema';
import { ProductController } from './product.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [ProductController],
})
export class ProductModule {}
```

```bash
nest generate controller products/product --no-spec
nest generate module products/product --no-spec
```

## 요약
- 스키마를 사용하려면 해당 도메인(products)의 컨트롤러와 모듈 파일을 생성해야 한다.
- 모듈의 `imports` 배열에서 `MongooseModule.forFeature([{ name, schema }])` 형태로 스키마를 등록한다.
- `name`에는 관례적으로 클래스의 `.name` 프로퍼티를, `schema`에는 `SchemaFactory`로 만든 상수를 전달한다.
- 컨트롤러도 모듈의 `controllers` 배열에 등록해야 하며, 실행 후 MongoDB에서 지정한 컬렉션이 실제로 생성되었는지 확인할 수 있다.
