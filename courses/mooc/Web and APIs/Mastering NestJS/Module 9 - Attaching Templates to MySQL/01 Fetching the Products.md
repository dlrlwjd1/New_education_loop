# Fetching the Products

## 개요
- 정적 배열 데이터 대신 실제 MySQL 데이터베이스에서 상품 목록을 조회해 홈 페이지에 렌더링하도록 연결하는 강의. `ProductsService`를 `AppController`에 주입(inject)하는 과정에서 발생하는 의존성 문제와 그 해결 방법(모듈에서 서비스 export)을 다룬다.

## 내용
### 정적 데이터 제거
- 지금까지는 `product.ts`의 정적 `products` 배열 데이터를 사용해왔지만, 이제부터는 데이터베이스에서 직접 데이터를 가져오는 것이 목표다.
- `product.ts` 파일을 삭제하고 `AppController`에 필요한 변경을 가한다.
- `AppController`는 홈 페이지 역할을 하므로, 홈 템플릿과 Add Product 템플릿을 모두 이 컨트롤러에서 렌더링한다.
- 반면 Edit Product 라우트는 `AppController`에서 제거한다.

### ProductsService 주입
- 상품에 대한 CRUD 로직은 이미 `ProductsService`에 정의되어 있으므로, 이 서비스 파일을 템플릿과 연결하고 적절한 라우트만 설정하면 된다.
- 데이터베이스에서 상품을 렌더링하기 위해 `ProductsService`를 `AppController`에 주입한다.
- 생성자(constructor)에 `private readonly productService: ProductsService` 프로퍼티를 추가한다.
- `renderPage` 메서드 안에서 `product` 상수를 만들고 `await this.productService.getAll()`을 할당한다. `getAll` 메서드는 테이블의 모든 상품 데이터를 조회한다.
- 메서드를 `async`로 만들고, 확인을 위해 `console.log(products)`로 출력해본다.

### 의존성 해결 — 모듈에서 서비스 export
- 이 상태로 브라우저를 확인하면 문제가 발생한다. 터미널을 보면 NestJS가 `ProductsService`를 해결(resolve)하지 못한다는 의존성 관련 에러가 표시된다.
- 다른 모듈(여기서는 `ProductsModule`)에 속한 서비스 파일을 사용하려면, 해당 모듈에서 그 서비스 파일을 export해야 한다.
- `products.module.ts` 파일을 열어 `providers` 배열 다음에 `exports` 배열을 추가하고 `ProductsService`를 export한다.
- 이렇게 하면 에러가 해결된다.

### 확인
- 브라우저를 새로고침하면 "No products available" 페이지가 표시된다. 이는 `products` 테이블에 상품 레코드가 없기 때문이다.
- 터미널을 확인하면 빈 배열(`[]`)이 출력된다.
- MySQL에서 `select * from products;` 쿼리를 실행해도 빈 결과(empty set)가 나온다.
- 이는 NestJS 애플리케이션이 이제 실제로 MySQL 데이터베이스와 연결되어 데이터를 조회하고 있음을 보여준다.

## 예시
```typescript
// app.controller.ts
import { Controller, Get, Render } from '@nestjs/common';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
  constructor(private readonly productService: ProductsService) {}

  @Get('mystore')
  @Render('home')
  async renderPage() {
    const products = await this.productService.getAll();
    console.log(products);
    return { products };
  }

  @Get('mystore/addproduct')
  @Render('addproduct')
  renderAddProductPage() {
    return null;
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
  exports: [ProductsService],
})
export class ProductsModule {}
```

```sql
-- 확인용 쿼리
select * from products;
```

## 요약
- 정적 상품 배열 대신 `ProductsService.getAll()`을 호출해 실제 데이터베이스에서 상품 목록을 가져와 홈 템플릿에 전달한다.
- 다른 모듈의 서비스를 컨트롤러에 주입하려면, 그 서비스를 정의한 모듈의 `exports` 배열에 반드시 등록해야 의존성 주입이 정상적으로 동작한다.
- `products` 테이블이 비어 있으면 "No products available" 화면과 빈 배열이 반환되며, 이는 애플리케이션이 실제 MySQL 데이터베이스에 연결되어 있음을 보여주는 증거가 된다.
