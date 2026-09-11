# Inserting Product Data (CRUD)

## 개요
- CRUD 기능 중 **Create(생성)**에 해당하는 부분을 다루는 강의. `ProductsController`, `ProductsModule`, `ProductsService`, `ProductDto`를 만들고, TypeORM의 **repository**를 주입(inject)해 새 상품 데이터를 MySQL에 저장하는 과정을 실습한다.

## 내용
### 컨트롤러·모듈·서비스·DTO 파일 생성
- `nest generate controller products --no-spec` 명령으로 `products` 컨트롤러를 생성한다.
- 마찬가지로 products용 모듈(module) 파일과 서비스(service) 파일도 각각 생성해 전용 폴더 안에 위치시킨다.
- 데이터를 필드에 바로 담기보다 별도의 타입 검사(type checking)를 하기 위해 `dto` 폴더를 만들고 `product.dto.ts` 파일을 생성한다.

### ProductDto와 클래스 유효성 검사(validator)
- `ProductDto` 클래스는 `Product` 엔티티와 같은 속성을 가지되, `id`와 날짜 필드를 제외하고 `productName`(string)과 `price`(number) 두 값만 가진다.
- `productName`에는 `@IsString()` 데코레이터를 붙여 문자열 값인지 검사한다.
- `price`에는 `@Min()` 데코레이터로 최소값을 `0.01`로 지정해 0과 음수를 제외하고, `price must be greater than zero`라는 메시지를 함께 지정한다.

### 서비스에서 리포지토리(repository) 주입
- 데이터베이스와 상호작용(생성/수정/삭제)하려면 해당 엔티티의 **repository**를 주입해야 한다. 이는 가장 중요한 단계라고 강조한다.
- 서비스 클래스의 생성자(constructor)에 `@InjectRepository(Product)` 데코레이터를 사용해 `Product` 엔티티를 전달한다.
- `private productRepository: Repository<Product>` 형태로 private 프로퍼티를 선언한다. `Repository`는 TypeORM이 제공하는 클래스로, 제네릭 타입(generic type)에 엔티티 클래스(`Product`)를 지정한다.

### addProduct 메서드
- `async addProduct(newProduct: ProductDto)` 메서드를 작성한다.
- `newProduct`에서 `productName`과 `price`를 구조 분해(destructure)한다.
- `this.productRepository.create({ productName, price })`를 호출해 `Product` 엔티티의 새 인스턴스를 메모리 상에 생성한다. `create` 메서드는 사용자가 입력한 데이터를 각 필드에 채운 새 인스턴스를 만들 뿐, 아직 데이터베이스에 저장하지는 않는다.
- 실제로 저장하려면 `return await this.productRepository.save(product);`를 호출한다. `save` 메서드가 데이터를 실제로 테이블에 저장한다.

### 컨트롤러에서 POST 라우트 정의
- `ProductsController`의 생성자에서 `ProductsService`를 주입한다.
- `create` 경로에 대해 `@Post('create')` 데코레이터를 붙인 `addProduct` 핸들러 메서드를 정의한다.
- 이 메서드는 `@Body()` 데코레이터로 `productData: ProductDto`를 받아 `await this.productService.addProduct(productData);`를 호출한다.
- 처리 후 `"Product added successfully"`와 같은 메시지를 반환한다.

### 모듈 파일에서 리포지토리·컨트롤러·서비스 등록
- `ProductsModule`에 리포지토리를 등록하지 않으면 NestJS의 의존성 주입(dependency injection) 시스템이 의존성을 감지하지 못한다.
- `imports` 속성에 `TypeOrmModule.forFeature([Product])`를 지정한다. `forFeature` 메서드는 리포지토리를 피처(feature) 단위로 등록할 때 사용하며, 데이터베이스가 가진 엔티티는 이 안에 명시해야 한다.
- `controllers` 속성에 `ProductsController`를, `providers` 속성에 `ProductsService`를 등록한다.
- 기본적으로 NestJS가 이 설정들을 `AppModule` 안에 이미 넣어두었으므로, 같은 설정을 `AppModule`에도 남겨두면 의존성 주입에서 충돌(conflict)이 발생할 수 있다. 따라서 `AppModule`에서는 이 설정들을 제거하는 것이 좋다.

### Postman으로 테스트
- Postman에서 요청 타입을 POST로 바꾸고 경로를 `localhost:3000/product/create`로 설정한다.
- 요청 본문(body)에 `productName: "Apple"`, `price: 12`를 넣고 요청을 보내면 상품이 데이터베이스에 추가된다.
- MySQL에서 `select * from products;` 쿼리를 실행하면 `id`, `productName`, `createdAt` 값과 함께 Apple 상품이 추가된 것을 확인할 수 있다.
- 같은 방식으로 `productName: "Orange"`, `price: 15`를 보내면 두 번째 상품도 정상적으로 추가된다.

## 예시
```typescript
// dto/product.dto.ts
import { IsString, Min } from 'class-validator';

export class ProductDto {
  @IsString()
  productName: string;

  @Min(0.01, { message: 'price must be greater than zero' })
  price: number;
}
```

```typescript
// products.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async addProduct(newProduct: ProductDto) {
    const { productName, price } = newProduct;
    const product = this.productRepository.create({ productName, price });
    return await this.productRepository.save(product);
  }
}
```

```typescript
// products.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post('create')
  async addProduct(@Body() productData: ProductDto) {
    await this.productService.addProduct(productData);
    return 'Product added successfully';
  }
}
```

```typescript
// products.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
```

```sql
-- 확인용 쿼리
select * from products;
```

## 요약
- 데이터베이스와 상호작용하려면 서비스에 `@InjectRepository(Entity)`로 **repository**를 주입해야 한다.
- `repository.create()`는 메모리 상에 인스턴스만 만들고, `repository.save()`가 실제로 데이터베이스에 저장한다.
- `ProductDto`에 `class-validator`의 `@IsString()`, `@Min()` 같은 데코레이터로 유효성 검사를 추가할 수 있다.
- 엔티티, 컨트롤러, 서비스는 각 기능별 모듈(`ProductsModule`)에 등록하고, `AppModule`에는 중복 등록하지 않아야 의존성 주입 충돌을 피할 수 있다.
- `TypeOrmModule.forFeature([Entity])`로 모듈 단위에서 리포지토리를 등록한다.
