# Fetching the Product Data (CRUD)

## 개요
- CRUD 기능 중 **Read(조회)**에 해당하는 부분을 다루는 강의. 전체 상품 목록을 조회하는 기능과, ID로 단일 상품을 조회하는 기능을 각각 구현한다.

## 내용
### 전체 목록 조회 — getAll
- `ProductsService`에 `getAll` 메서드를 만들고 `return this.productRepository.find();`를 반환한다. `find` 메서드는 테이블의 모든 레코드(record)를 반환한다.
- `ProductsController`에 `getall` 경로의 GET 라우트 핸들러를 만들어 `this.productService.getAll()`을 반환하도록 한다. 이렇게 하면 테이블의 모든 레코드를 조회하고 화면에 표시할 수 있다.
- Postman에서 해당 경로를 호출하면 전체 레코드가 반환된다. 기본적으로는 `id` 기준으로 정렬되어 표시된다.

### 정렬(order) 옵션 적용
- 상품 가격(price) 기준으로 정렬하고 싶다면 `find` 메서드의 옵션에 `order` 속성을 추가하고, `price` 필드를 오름차순(ascending)으로 지정한다.
- 다시 요청을 보내면 상품이 가격 오름차순으로 정렬되어 표시된다.

### 단일 레코드 조회 — getOne
- 테이블에서 단일 레코드를 반환하는 `getOne` 메서드를 만들고, 인자로 `id` 값을 받는다.
- `product`라는 상수(constant)를 만들고, `productRepository`의 `findOne` 메서드를 사용하는데, `where` 절에 `id`를 지정한다.
- 상품 ID가 존재하지 않을 경우를 대비해 에러 처리를 한다. `NotFoundException`을 새로 던지며, 메시지는 `Product with ID ${id} not found`처럼 동적(dynamic) 값을 포함한다.
- 에러가 없으면 `product`를 반환한다.

### 컨트롤러에서 동적 ID 라우트 정의
- 컨트롤러에 동적 `id` 파라미터를 받는 GET 라우트 핸들러를 정의하고, 메서드 이름은 `getOne`, `@Param('id')` 데코레이터를 사용한다.
- `id` 값에는 `ParseIntPipe`를 적용해 파싱(parse)한 뒤 `number` 타입의 `id` 속성에 저장한다. 파라미터는 항상 문자열(string)로 전달되기 때문에 문자열 관련 충돌을 피하기 위해 `ParseIntPipe`를 적용한다고 설명한다.
- 메서드의 반환 타입은 `Promise<Product>`로 지정한다.
- `return await this.productService.getOne(id);`로 서비스 메서드를 호출한다.

### 테스트
- Postman에서 경로를 `/getone/2`로 설정하고 요청을 보내면 ID가 2인 상품(예: Orange)이 단일 레코드로 반환된다.
- 존재하지 않는 ID(예: 5)로 요청하면 `NotFoundException` 메시지가 반환되는 것을 확인한다.

## 예시
```typescript
// products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getAll() {
    return this.productRepository.find({
      order: { price: 'ASC' },
    });
  }

  async getOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }
}
```

```typescript
// products.controller.ts
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product';

@Controller('product')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get('getall')
  async getAll() {
    return this.productService.getAll();
  }

  @Get('getone/:id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return await this.productService.getOne(id);
  }
}
```

## 요약
- 전체 목록 조회는 `repository.find()`로 구현하며, `order` 옵션으로 정렬 기준(field, ASC/DESC)을 지정할 수 있다.
- 단일 레코드 조회는 `repository.findOne({ where: { id } })`로 구현한다.
- 존재하지 않는 ID를 조회하면 `NotFoundException`을 던져 에러 메시지를 명확히 반환한다.
- URL 파라미터(`@Param`)는 문자열로 전달되므로, 숫자로 변환하려면 `ParseIntPipe`를 적용해야 한다.
