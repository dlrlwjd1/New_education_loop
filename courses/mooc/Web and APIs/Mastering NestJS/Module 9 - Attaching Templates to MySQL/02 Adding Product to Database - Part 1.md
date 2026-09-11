# Adding Product to Database - Part 1

## 개요
- 실제로 상품을 데이터베이스에 추가하기 위한 준비 작업을 다루는 강의. `Product` 엔티티와 `ProductDto`에 `image` 컬럼을 추가하고, `ProductsController`의 라우트를 정리하며, Add Product 폼에 파일 업로드를 위한 속성을 추가한다.

## 내용
### Product 엔티티에 image 컬럼 추가
- `entities/product.ts`(엔티티)의 `price` 컬럼 다음에 새로운 컬럼을 추가한다.
- `image` 속성을 `string` 타입으로 정의하고, `@Column()`에는 타입을 `varchar`, 길이(length)를 `255`, `nullable`을 `false`로 지정해 해당 필드가 null 값을 가질 수 없도록 한다.

### ProductDto에 image 속성 추가
- 엔티티를 업데이트한 것과 마찬가지로 `ProductDto`에도 `price` 속성 다음에 `image` 속성(`string` 타입)을 추가한다.

### ProductsController 라우트 정리
- `products.controller.ts`에서 `getAll` 관련 GET 라우트(getall)를 제거한다. 이미 홈 라우트를 담당하는 `AppController`에서 `getAll` 메서드를 사용하도록 연결해 두었으므로, `ProductsController`에 다시 정의할 필요가 없기 때문이다.

### addProduct 메서드 수정 — 리다이렉트 적용
- 상품을 추가하는 작업은 POST 라우트 핸들러, 즉 `create` 라우트에서 처리한다.
- `addProduct` 메서드에서 기존의 메시지를 반환하는 `return` 문을 제거하고, 대신 상품 서비스 메서드(`productService.addProduct(...)`)의 반환값으로 대체한다. 이제는 Postman으로 라우트를 테스트하지 않을 것이기 때문이다.
- 상품이 추가되면 홈 페이지로 리다이렉트(redirect)하고 싶으므로, `@Redirect()` 데코레이터를 지정하고 경로를 `mystore/home`(홈 라우트)으로 설정한다.

### Add Product 템플릿 폼 속성 수정
- `addproduct.ejs` 템플릿에서 폼의 `action` 속성 경로를 상품 생성(`product/create`) 라우트로 업데이트한다.
- 이와 함께 `enctype` 속성을 `multipart/form-data`로 지정한다. 이 속성은 폼 데이터를 서버로 제출할 때 데이터를 인코딩(encode)하는 데 필요하며, 특히 폼이 파일 업로드와 관련된 데이터를 포함할 때 반드시 필요하다.
- 상품 이미지를 서버에 업로드해야 하므로 이 속성이 필요하다.

### 파일 업로드 예고
- 파일 업로드에 대해 이야기하자면, 이미지를 처리하고 저장하는 데는 Express가 제공하는 Multer 패키지를 사용할 수도 있지만, NestJS는 자체 내장(built-in) Multer 패키지를 제공하며, 이는 다음 강의에서 다룰 예정이라고 언급한다.

## 예시
```typescript
// entities/product.ts (image 컬럼 추가)
@Column({ type: 'varchar', length: 255, nullable: false })
image: string;
```

```typescript
// dto/product.dto.ts (image 속성 추가)
export class ProductDto {
  @IsString()
  @IsNotEmpty({ message: 'Please define a product name' })
  productName: string;

  @Min(0.01, { message: 'price must be greater than zero' })
  price: number;

  @IsString()
  image: string;
}
```

```typescript
// products.controller.ts
import { Controller, Post, Body, Redirect } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post('create')
  @Redirect('mystore/home')
  async addProduct(@Body() productData: ProductDto) {
    return this.productService.addProduct(productData);
  }
}
```

```html
<!-- views/addproduct.ejs (폼 속성 수정) -->
<form class="w-25" action="/product/create" method="post" enctype="multipart/form-data">
  <!-- ... -->
</form>
```

## 요약
- `Product` 엔티티와 `ProductDto`에 `image`(varchar, length 255, not null) 속성을 추가해 상품 이미지 경로를 저장할 준비를 한다.
- `ProductsController`에서는 홈 라우트에서 이미 처리 중인 `getAll` 라우트를 제거해 중복을 없앤다.
- `addProduct` 핸들러는 이제 메시지를 반환하는 대신 `@Redirect('mystore/home')`으로 상품 추가 후 홈 페이지로 리다이렉트한다.
- 파일 업로드가 포함된 폼은 `enctype="multipart/form-data"` 속성이 반드시 필요하다.
- 이미지 파일 업로드 처리는 다음 강의에서 NestJS 내장 Multer로 구현할 예정이다.
